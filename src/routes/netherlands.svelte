<script context="module">
	export const prerender = true;

	import Amsterdam from '../component/Netherlands/Amsterdam.svelte';
	import Roots from '../component/Netherlands/Roots.svelte';
	import Open from '../component/Netherlands/Open.svelte';
	import Wie from '../component/Netherlands/Wie.svelte';
</script>

<svelte:head>
	<title>Netherlands</title>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJS56TL');</script>
<!-- End Google Tag Manager -->
</svelte:head>

<section class="one">
	<h1 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
		<div class="h-10 w-14 inline-block">
			<img
				src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1638904035/webp/netherlands-flag.webp"
				alt="image of netherlands flag"
			/>
		</div>

		Netherlands Family History Resourses
	</h1>
	<br />
	<section class="one">
		<div class="grid sm:flex gap-4 mt-20">
			<Amsterdam />
			<Roots />
			<Open />
		</div>

		<div class="grid sm:flex gap-4 mt-8">
		<Wie />
	</section>
</section>
