<script context="module">
	export const prerender = true;

	import Commercial99 from '../component/British/Commercial99.svelte';
	import Chronicle99 from '../component/British/Chronicle99.svelte';
	import Jcr99 from '../component/British/Jcr99.svelte';
	import School99 from '../component/British/School99.svelte';
	import Roots99 from '../component/British/Roots99.svelte';
	import War99 from '../component/British/War99.svelte';
	import Marriage99 from '../component/British/Marriage99.svelte';
	import Jraf99 from '../component/British/Jraf99.svelte';
	import Honour99 from '../component/British/Honour99.svelte';
	import Scribes99 from '../component/British/Scribes99.svelte';
	import Synagogue99 from '../component/British/Synagogue99.svelte';
	import Fifty from '../component/British/Fifty.svelte';
	import Eighteenfiftyone99 from '../component/British/Eighteenfiftyone99.svelte';
	import Gilroes99 from '../component/British/Gilroes99.svelte';
	import Southend99 from '../component/British/Southend99.svelte';
	import Scotland99 from '../component/British/Scotland99.svelte';
	import Glasgow99 from '../component/British/Glasgow99.svelte';
	import Adath from '../component/British/Cem/Adath.svelte';
	import Federation from '../component/British/Cem/Federation.svelte';
	import Liberal from '../component/British/Cem/Liberal.svelte';
	import United from '../component/British/Cem/United.svelte';
	import Western from '../component/British/Cem/Western.svelte';
</script>

<svelte:head>
	<title>British Jewish</title>
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
				src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1638864273/webp/uk-flag.webp"
				alt="image of British flag"
			/>
		</div>
		<div class="h-10 w-14 inline-block">
			<img
				src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1639135750/webp/star.webp"
				alt="image of star of david"
			/>
		</div>
		British Jewish Family History Resourses
	</h1>
	<br />
	<section class="one">
		<div class="grid sm:flex gap-4 mt-20">
			<Chronicle99 />
			<Commercial99 />
			<Jcr99 />
		</div>

		<div class="grid sm:flex gap-4 mt-8">
			<School99 />
			<Marriage99 />
			<Honour99 />
		</div>

		<div class="grid sm:flex gap-4 mt-8">
			<Roots99 />
			<War99 />
			<Scribes99 />
		</div>
		<div class="grid sm:flex gap-4 mt-8">
			<Jraf99 />
			<Synagogue99 />
			<Fifty />
		</div>

		<div class="grid sm:flex gap-4 mt-8">
			<Eighteenfiftyone99 />
		</div>

		<h3 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
			<div>Leicester Jewish Family History Resourses</div>
		</h3>
		<br />
		<div class="grid sm:flex gap-4 mt-8">
			<Gilroes99 />
		</div>

		<br />
		<h3 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
			<div>Southend & Westcliff Jewish Family History Resourses</div>
		</h3>
		<br />
		<div class="grid sm:flex gap-4 mt-8">
			<Southend99 />
		</div>
		<br />
		<h1 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
			<div class="h-10 w-14 inline-block">
				<img
					src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1638878880/webp/scotish-flag.webp"
					alt="image of Scottish flag"
				/>
			</div>
			<div class="h-10 w-14 inline-block">
				<img
					src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1639135750/webp/star.webp"
					alt="image of star of david"
				/>
			</div>
			Scottish Jewish Family History Resourses
		</h1>
		<br />
		<div class="grid sm:flex gap-4 mt-8">
			<Scotland99 />
			<Glasgow99 />
		</div>

		<h2 class="ml-8 mt-3 text-center text-purple-500 text-font-sans text-4xl">
			London Jewish Cemeteries burial records
		</h2>
		<br />
	</section>
	<section class="two" />
	<div class="grid grid-cols-2 gap-4">
		<Adath />
		<Federation />
		<Liberal />
		<Western />
		<United />
	</div>
</section>
