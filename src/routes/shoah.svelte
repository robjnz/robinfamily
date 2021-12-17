<script context="module">
	export const prerender = true;

	import Arolsen from '../component/Shoah/Arolsen.svelte';
	import Auschwitz from '../component/Shoah/Auschwitz.svelte';
	import Galisian from '../component/Shoah/Galisian.svelte';
	import Camps from '../component/Shoah/Camps.svelte';
	import French from '../component/Shoah/French.svelte';
	import Holocaust from '../component/Shoah/Holocaust.svelte';
	import Records from '../component/Shoah/Records.svelte';
	import Ushmm from '../component/Shoah/Ushmm.svelte';
	import Yad from '../component/Shoah/Yad.svelte';
</script>

<svelte:head>
	<title>Shoah</title>
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
		<div class="h-10 w-14 inline-block mr-20">
			<iframe
				class="h-full w-50 object-fill"
				title="candle flame"
				src="https://giphy.com/embed/j7N0GKEWqZxNC"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>

		Shoah Resourses
	</h1>
	<br />
	<section class="one">
		<div class="grid sm:flex gap-4 mt-20">
			<Arolsen />
			<Auschwitz />
			<Galisian />
		</div>
		<div class="grid sm:flex gap-4 mt-8">
			<Camps />
			<French />
			<Holocaust />
		</div>

		<div class="grid sm:flex gap-4 mt-8">
			<Records />
			<Ushmm />
			<Yad />
		</div>
	</section>
</section>
