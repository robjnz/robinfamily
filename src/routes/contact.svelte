<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-PJS56TL');
	</script>
	<!-- End Google Tag Manager -->
</svelte:head>
<section class="container m-auto text-4xl text-blue-300 two">
	<div id="blog-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
		<br />

		<div
			data-aidaform-widget="form-2019-12"
			data-url="https://robin8.aidaform.com/expert-account-template-contact-form-with-captcha"
			data-width="100%"
			data-height="500px"
			data-do-resize
		/>
		<script>
			(function () {
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
		</script>
	</div>
</section>
