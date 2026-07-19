type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);

      // Check if h3 swallowed an error inside the handler
      if (response.status >= 500) {
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const bodyStr = await response.clone().text();
          if (bodyStr.includes('"unhandled":true')) {
            return new Response(`SSR Crash detected by h3. Check Netlify function logs.`, {
              status: 500,
              headers: { "content-type": "text/plain" }
            });
          }
        }
      }

      return response;
    } catch (e: any) {
      console.error("Catastrophic SSR Error:", e);
      return new Response(
        `Catastrophic SSR Error: \n\n${e?.stack || e?.message || String(e)}`, 
        { 
          status: 500, 
          headers: { "content-type": "text/plain" } 
        }
      );
    }
  },
};
