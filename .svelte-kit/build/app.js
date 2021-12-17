import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-e292ccbe.js",
			css: [assets + "/_app/assets/start-1f089c51.css"],
			js: [assets + "/_app/start-e292ccbe.js",assets + "/_app/chunks/vendor-28470302.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":200521,"type":"image/png"},{"file":"favicon1.png","size":1571,"type":"image/png"},{"file":"images/europe/1939c.jpg","size":10018,"type":"image/jpeg"},{"file":"images/europe/american-flag.jpg","size":7845,"type":"image/jpeg"},{"file":"images/europe/ancestry.jpg","size":5902,"type":"image/jpeg"},{"file":"images/europe/archives.jpg","size":29905,"type":"image/jpeg"},{"file":"images/europe/australia-flag.jpg","size":6575,"type":"image/jpeg"},{"file":"images/europe/austria-flag.jpg","size":5889,"type":"image/jpeg"},{"file":"images/europe/belarus-flag.jpg","size":7604,"type":"image/jpeg"},{"file":"images/europe/belarus-map.jpg","size":26169,"type":"image/jpeg"},{"file":"images/europe/belgium-flag.jpg","size":3352,"type":"image/jpeg"},{"file":"images/europe/britmila.jpg","size":18491,"type":"image/jpeg"},{"file":"images/europe/business.jpg","size":3672,"type":"image/jpeg"},{"file":"images/europe/camps.jpg","size":10826,"type":"image/jpeg"},{"file":"images/europe/canada-flag.jpg","size":3747,"type":"image/jpeg"},{"file":"images/europe/censusireland.jpg","size":31898,"type":"image/jpeg"},{"file":"images/europe/church.jpg","size":13236,"type":"image/jpeg"},{"file":"images/europe/companies.jpg","size":11526,"type":"image/jpeg"},{"file":"images/europe/cyrillic.jpg","size":31702,"type":"image/jpeg"},{"file":"images/europe/database.jpg","size":15716,"type":"image/jpeg"},{"file":"images/europe/dnipropetrovsk_arms.jpg","size":26546,"type":"image/jpeg"},{"file":"images/europe/family-tree.jpg","size":16455,"type":"image/jpeg"},{"file":"images/europe/first.jpg","size":9946,"type":"image/jpeg"},{"file":"images/europe/flame.jpg","size":8874,"type":"image/jpeg"},{"file":"images/europe/french-flag.jpg","size":1472,"type":"image/jpeg"},{"file":"images/europe/gate.jpg","size":16290,"type":"image/jpeg"},{"file":"images/europe/gazette.jpg","size":22586,"type":"image/jpeg"},{"file":"images/europe/gen.jpg","size":10614,"type":"image/jpeg"},{"file":"images/europe/graves.jpg","size":26310,"type":"image/jpeg"},{"file":"images/europe/handwriting.jpg","size":9750,"type":"image/jpeg"},{"file":"images/europe/hebrew.jpg","size":13356,"type":"image/jpeg"},{"file":"images/europe/heritage.jpg","size":5169,"type":"image/jpeg"},{"file":"images/europe/home.jpg","size":12463,"type":"image/jpeg"},{"file":"images/europe/industral.jpg","size":11774,"type":"image/jpeg"},{"file":"images/europe/ireland-flag.jpg","size":3114,"type":"image/jpeg"},{"file":"images/europe/jc.jpg","size":11984,"type":"image/jpeg"},{"file":"images/europe/jewish-graves.jpg","size":26756,"type":"image/jpeg"},{"file":"images/europe/jfs.jpg","size":13899,"type":"image/jpeg"},{"file":"images/europe/ketubot.jpg","size":14052,"type":"image/jpeg"},{"file":"images/europe/liberty.jpg","size":8593,"type":"image/jpeg"},{"file":"images/europe/loos.jpg","size":10999,"type":"image/jpeg"},{"file":"images/europe/mag-glass.jpg","size":10789,"type":"image/jpeg"},{"file":"images/europe/memorial-de-la-shoah.jpg","size":9861,"type":"image/jpeg"},{"file":"images/europe/mohylivska.jpg","size":14236,"type":"image/jpeg"},{"file":"images/europe/mohyliv_arms.jpg","size":25639,"type":"image/jpeg"},{"file":"images/europe/netherlands-flag.jpg","size":3693,"type":"image/jpeg"},{"file":"images/europe/newspaper.jpg","size":17154,"type":"image/jpeg"},{"file":"images/europe/newyork.jpg","size":14348,"type":"image/jpeg"},{"file":"images/europe/newzealand-flag.jpg","size":5835,"type":"image/jpeg"},{"file":"images/europe/nz-birth-cert.jpg","size":10065,"type":"image/jpeg"},{"file":"images/europe/nz-gazette.jpg","size":8007,"type":"image/jpeg"},{"file":"images/europe/passenger.jpg","size":12985,"type":"image/jpeg"},{"file":"images/europe/raf.jpg","size":14417,"type":"image/jpeg"},{"file":"images/europe/relocation.jpg","size":13880,"type":"image/jpeg"},{"file":"images/europe/roll.jpg","size":8794,"type":"image/jpeg"},{"file":"images/europe/russian-flag.jpg","size":3765,"type":"image/jpeg"},{"file":"images/europe/search.png","size":57114,"type":"image/png"},{"file":"images/europe/shamrock.jpg","size":25965,"type":"image/jpeg"},{"file":"images/europe/shtetel.jpg","size":12269,"type":"image/jpeg"},{"file":"images/europe/skala.jpg","size":16845,"type":"image/jpeg"},{"file":"images/europe/soviet-map.jpg","size":14532,"type":"image/jpeg"},{"file":"images/europe/soviet-medals.jpg","size":58166,"type":"image/jpeg"},{"file":"images/europe/star-jewish.jpg","size":19282,"type":"image/jpeg"},{"file":"images/europe/synagogue.jpg","size":32079,"type":"image/jpeg"},{"file":"images/europe/trade.jpg","size":11204,"type":"image/jpeg"},{"file":"images/europe/uk-flag.jpg","size":12377,"type":"image/jpeg"},{"file":"images/europe/ukraine-flag.jpg","size":3049,"type":"image/jpeg"},{"file":"images/europe/viennaparlament.jpg","size":34613,"type":"image/jpeg"},{"file":"images/europe/war-graves.jpg","size":15718,"type":"image/jpeg"},{"file":"images/europe/war.jpg","size":18683,"type":"image/jpeg"},{"file":"images/europe/wedding.jpg","size":14597,"type":"image/jpeg"},{"file":"images/europe/wills.jpg","size":7357,"type":"image/jpeg"},{"file":"images/europe/workhouse.jpg","size":9988,"type":"image/jpeg"},{"file":"images/logo youtube.jpg","size":485909,"type":"image/jpeg"},{"file":"images/logo.png","size":311689,"type":"image/png"},{"file":"images/logotree.png","size":109976,"type":"image/png"},{"file":"images/logotree.svg","size":134165,"type":"image/svg+xml"},{"file":"images/logotreerobin.png","size":329212,"type":"image/png"},{"file":"images/logotreerobin.svg","size":1065244,"type":"image/svg+xml"},{"file":"images/square.png","size":513,"type":"image/png"},{"file":"images/svg/bookreadingman.svg","size":97434,"type":"image/svg+xml"},{"file":"images/svg/favicon.png","size":200521,"type":"image/png"},{"file":"images/svg/favicon_io/android-chrome-192x192.png","size":8749,"type":"image/png"},{"file":"images/svg/favicon_io/android-chrome-512x512.png","size":29725,"type":"image/png"},{"file":"images/svg/favicon_io/apple-touch-icon.png","size":7805,"type":"image/png"},{"file":"images/svg/favicon_io/favicon-16x16.png","size":448,"type":"image/png"},{"file":"images/svg/favicon_io/favicon-32x32.png","size":956,"type":"image/png"},{"file":"images/svg/favicon_io/favicon.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"images/svg/favicon_io/site.webmanifest","size":263,"type":"application/manifest+json"},{"file":"images/svg/favicon_io.zip","size":64172,"type":"application/zip"},{"file":"images/svg/FX13_robin.svg","size":12944,"type":"image/svg+xml"},{"file":"images/svg/logomanbook.png","size":66939,"type":"image/png"},{"file":"images/svg/logomanrobin.png","size":66297,"type":"image/png"},{"file":"images/svg/logotree.png","size":109976,"type":"image/png"},{"file":"images/svg/logotree.svg","size":134165,"type":"image/svg+xml"},{"file":"images/svg/logotreerobin.png","size":240048,"type":"image/png"},{"file":"images/svg/logotreerobin.svg","size":1065244,"type":"image/svg+xml"},{"file":"images/svg/oaktree.svg","size":73414,"type":"image/svg+xml"},{"file":"images/svg/tree.svg","size":30168,"type":"image/svg+xml"},{"file":"images/svg/tree1.png","size":321269,"type":"image/png"},{"file":"images/svg/tree3.svg","size":1198878,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/netherlands-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/netherlands-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/australia-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/australia-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/netherlands\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/netherlands.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/austrian-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/austrian-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/newzealand\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/newzealand.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/australia\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/australia.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/belarus-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/belarus-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/british-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/british-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/ireland-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/ireland-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/italian-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/italian-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/russian-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/russian-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/ukraine-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/ukraine-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/austrian\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/austrian.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/barbados\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/barbados.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/canada-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/canada-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/belarus\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/belarus.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/belgium\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/belgium.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/bermuda\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/bermuda.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/british\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/british.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/contact\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/contact.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/general\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/general.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/ireland\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/ireland.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/russian\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/russian.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/ukraine\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/ukraine.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/canada\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/canada.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/french\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/french.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/shoah\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/shoah.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/usa-j\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/usa-j.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/video\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/video.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/dna\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/dna.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/usa\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/usa.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/netherlands-j.svelte": () => import("..\\..\\src\\routes\\netherlands-j.svelte"),"src/routes/australia-j.svelte": () => import("..\\..\\src\\routes\\australia-j.svelte"),"src/routes/netherlands.svelte": () => import("..\\..\\src\\routes\\netherlands.svelte"),"src/routes/austrian-j.svelte": () => import("..\\..\\src\\routes\\austrian-j.svelte"),"src/routes/newzealand.svelte": () => import("..\\..\\src\\routes\\newzealand.svelte"),"src/routes/australia.svelte": () => import("..\\..\\src\\routes\\australia.svelte"),"src/routes/belarus-j.svelte": () => import("..\\..\\src\\routes\\belarus-j.svelte"),"src/routes/british-j.svelte": () => import("..\\..\\src\\routes\\british-j.svelte"),"src/routes/ireland-j.svelte": () => import("..\\..\\src\\routes\\ireland-j.svelte"),"src/routes/italian-j.svelte": () => import("..\\..\\src\\routes\\italian-j.svelte"),"src/routes/russian-j.svelte": () => import("..\\..\\src\\routes\\russian-j.svelte"),"src/routes/ukraine-j.svelte": () => import("..\\..\\src\\routes\\ukraine-j.svelte"),"src/routes/austrian.svelte": () => import("..\\..\\src\\routes\\austrian.svelte"),"src/routes/barbados.svelte": () => import("..\\..\\src\\routes\\barbados.svelte"),"src/routes/canada-j.svelte": () => import("..\\..\\src\\routes\\canada-j.svelte"),"src/routes/belarus.svelte": () => import("..\\..\\src\\routes\\belarus.svelte"),"src/routes/belgium.svelte": () => import("..\\..\\src\\routes\\belgium.svelte"),"src/routes/bermuda.svelte": () => import("..\\..\\src\\routes\\bermuda.svelte"),"src/routes/british.svelte": () => import("..\\..\\src\\routes\\british.svelte"),"src/routes/contact.svelte": () => import("..\\..\\src\\routes\\contact.svelte"),"src/routes/general.svelte": () => import("..\\..\\src\\routes\\general.svelte"),"src/routes/ireland.svelte": () => import("..\\..\\src\\routes\\ireland.svelte"),"src/routes/russian.svelte": () => import("..\\..\\src\\routes\\russian.svelte"),"src/routes/ukraine.svelte": () => import("..\\..\\src\\routes\\ukraine.svelte"),"src/routes/canada.svelte": () => import("..\\..\\src\\routes\\canada.svelte"),"src/routes/french.svelte": () => import("..\\..\\src\\routes\\french.svelte"),"src/routes/shoah.svelte": () => import("..\\..\\src\\routes\\shoah.svelte"),"src/routes/usa-j.svelte": () => import("..\\..\\src\\routes\\usa-j.svelte"),"src/routes/video.svelte": () => import("..\\..\\src\\routes\\video.svelte"),"src/routes/dna.svelte": () => import("..\\..\\src\\routes\\dna.svelte"),"src/routes/usa.svelte": () => import("..\\..\\src\\routes\\usa.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-5a1990d7.js","css":["assets/pages/__layout.svelte-f1ec1d30.css"],"js":["pages/__layout.svelte-5a1990d7.js","chunks/vendor-28470302.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-507b3558.js","css":[],"js":["error.svelte-507b3558.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-75285f0c.js","css":["assets/pages/index.svelte-30506a56.css"],"js":["pages/index.svelte-75285f0c.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/netherlands-j.svelte":{"entry":"pages/netherlands-j.svelte-e6cc6a73.js","css":["assets/pages/netherlands-j.svelte-4fe5128b.css"],"js":["pages/netherlands-j.svelte-e6cc6a73.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/australia-j.svelte":{"entry":"pages/australia-j.svelte-f6b12175.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/australia-j.svelte-f6b12175.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/netherlands.svelte":{"entry":"pages/netherlands.svelte-9bba7457.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/netherlands.svelte-9bba7457.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/austrian-j.svelte":{"entry":"pages/austrian-j.svelte-c181e9b1.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/austrian-j.svelte-c181e9b1.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/newzealand.svelte":{"entry":"pages/newzealand.svelte-d9ce6140.js","css":["assets/pages/newzealand.svelte-4345acdd.css"],"js":["pages/newzealand.svelte-d9ce6140.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/australia.svelte":{"entry":"pages/australia.svelte-7c13be65.js","css":["assets/pages/australia.svelte-b349f3b9.css"],"js":["pages/australia.svelte-7c13be65.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/belarus-j.svelte":{"entry":"pages/belarus-j.svelte-12cea584.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/belarus-j.svelte-12cea584.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/british-j.svelte":{"entry":"pages/british-j.svelte-3dcab9e3.js","css":["assets/pages/british-j.svelte-e0eaffd3.css"],"js":["pages/british-j.svelte-3dcab9e3.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/ireland-j.svelte":{"entry":"pages/ireland-j.svelte-70292df6.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/ireland-j.svelte-70292df6.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/italian-j.svelte":{"entry":"pages/italian-j.svelte-b52f9b7e.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/italian-j.svelte-b52f9b7e.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/russian-j.svelte":{"entry":"pages/russian-j.svelte-d5bd3f5e.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/russian-j.svelte-d5bd3f5e.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/ukraine-j.svelte":{"entry":"pages/ukraine-j.svelte-d01112de.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/ukraine-j.svelte-d01112de.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/austrian.svelte":{"entry":"pages/austrian.svelte-95661a52.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/austrian.svelte-95661a52.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/barbados.svelte":{"entry":"pages/barbados.svelte-a002e9b3.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/barbados.svelte-a002e9b3.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/canada-j.svelte":{"entry":"pages/canada-j.svelte-ce67c240.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/canada-j.svelte-ce67c240.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/belarus.svelte":{"entry":"pages/belarus.svelte-09dff1bd.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/belarus.svelte-09dff1bd.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/belgium.svelte":{"entry":"pages/belgium.svelte-8841ef0c.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/belgium.svelte-8841ef0c.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/bermuda.svelte":{"entry":"pages/bermuda.svelte-a88681da.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/bermuda.svelte-a88681da.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/british.svelte":{"entry":"pages/british.svelte-245d952f.js","css":["assets/pages/british.svelte-2a5d1767.css"],"js":["pages/british.svelte-245d952f.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/contact.svelte":{"entry":"pages/contact.svelte-1c3b1134.js","css":["assets/pages/contact.svelte-230f88fd.css"],"js":["pages/contact.svelte-1c3b1134.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/general.svelte":{"entry":"pages/general.svelte-ee82f158.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/general.svelte-ee82f158.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/ireland.svelte":{"entry":"pages/ireland.svelte-01860fb9.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/ireland.svelte-01860fb9.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/russian.svelte":{"entry":"pages/russian.svelte-885c6d8d.js","css":["assets/pages/russian.svelte-4f0c37ac.css","assets/Lost-ac4f0319.css"],"js":["pages/russian.svelte-885c6d8d.js","chunks/vendor-28470302.js","chunks/Lost-7342543e.js"],"styles":[]},"src/routes/ukraine.svelte":{"entry":"pages/ukraine.svelte-b496bb9e.js","css":["assets/pages/austrian-j.svelte-b2b37369.css","assets/Lost-ac4f0319.css"],"js":["pages/ukraine.svelte-b496bb9e.js","chunks/vendor-28470302.js","chunks/Lost-7342543e.js"],"styles":[]},"src/routes/canada.svelte":{"entry":"pages/canada.svelte-5c2724dd.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/canada.svelte-5c2724dd.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/french.svelte":{"entry":"pages/french.svelte-0b072093.js","css":["assets/pages/australia-j.svelte-32ee9e02.css"],"js":["pages/french.svelte-0b072093.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/shoah.svelte":{"entry":"pages/shoah.svelte-eb7f48a8.js","css":["assets/pages/shoah.svelte-e173945f.css"],"js":["pages/shoah.svelte-eb7f48a8.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/usa-j.svelte":{"entry":"pages/usa-j.svelte-8fe1c1db.js","css":["assets/pages/usa-j.svelte-3bd1a4bc.css"],"js":["pages/usa-j.svelte-8fe1c1db.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/video.svelte":{"entry":"pages/video.svelte-cdd2cb4e.js","css":["assets/pages/video.svelte-87eed3f2.css"],"js":["pages/video.svelte-cdd2cb4e.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/dna.svelte":{"entry":"pages/dna.svelte-77d86a7e.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/dna.svelte-77d86a7e.js","chunks/vendor-28470302.js"],"styles":[]},"src/routes/usa.svelte":{"entry":"pages/usa.svelte-891e6e17.js","css":["assets/pages/austrian-j.svelte-b2b37369.css"],"js":["pages/usa.svelte-891e6e17.js","chunks/vendor-28470302.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}