import { c as create_ssr_component } from "./app-318847c3.js";
import "@sveltejs/kit/ssr";
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-tjqxua{width:100%}@media(min-width: 640px){.container.svelte-tjqxua{max-width:640px}}@media(min-width: 768px){.container.svelte-tjqxua{max-width:768px}}@media(min-width: 1024px){.container.svelte-tjqxua{max-width:1024px}}@media(min-width: 1280px){.container.svelte-tjqxua{max-width:1280px}}@media(min-width: 1536px){.container.svelte-tjqxua{max-width:1536px}}.rounded-lg.svelte-tjqxua{border-radius:0.5rem}.text-4xl.svelte-tjqxua{font-size:2.25rem;line-height:2.5rem}.m-auto.svelte-tjqxua{margin:auto}.m-4.svelte-tjqxua{margin:1rem}.p-4.svelte-tjqxua{padding:1rem}.shadow-2xl.svelte-tjqxua{--tw-shadow-color:0, 0, 0;--tw-shadow:0 25px 50px -12px rgba(var(--tw-shadow-color), 0.25);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.text-blue-300.svelte-tjqxua{--tw-text-opacity:1;color:rgba(147, 197, 253, var(--tw-text-opacity))}.w-auto.svelte-tjqxua{width:auto}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"container m-auto text-4xl text-blue-300 two svelte-tjqxua"}"><div id="${"blog-card"}" class="${"m-4 p-4 w-auto rounded-lg shadow-2xl svelte-tjqxua"}"><br>

		<div data-aidaform-widget="${"form-2019-12"}" data-url="${"https://robin8.aidaform.com/expert-account-template-contact-form-with-captcha"}" data-width="${"100%"}" data-height="${"500px"}" data-do-resize></div>
		<script>(function () {
				var r,
					d = document,
					gt = d.getElementById,
					cr = d.createElement,
					tg = d.getElementsByTagName,
					id = 'aidaform-embed';
				if (!gt.call(d, id)) {
					r = cr.call(d, 'script');
					r.id = id;
					r.src = 'https://embed.aidaform.com/embed.js';
					(d.head || tg.call(d, 'head')[0]).appendChild(r);
				}
			})();
		<\/script></div>
</section>`;
});
export { Contact as default };
