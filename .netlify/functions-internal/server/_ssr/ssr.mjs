//#region node_modules/.nitro/vite/services/ssr/index.js
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-KD_tqNAX.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const response = await (await getServerEntry()).fetch(request, env, ctx);
		if (response.status >= 500) {
			if ((response.headers.get("content-type") || "").includes("application/json")) {
				if ((await response.clone().text()).includes("\"unhandled\":true")) return new Response(`SSR Crash detected by h3. Check Netlify function logs.`, {
					status: 500,
					headers: { "content-type": "text/plain" }
				});
			}
		}
		return response;
	} catch (e) {
		console.error("Catastrophic SSR Error:", e);
		return new Response(`Catastrophic SSR Error: \n\n${e?.stack || e?.message || String(e)}`, {
			status: 500,
			headers: { "content-type": "text/plain" }
		});
	}
} };
//#endregion
export { server_default as default };
