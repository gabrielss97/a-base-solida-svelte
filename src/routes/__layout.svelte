<script>
	import '../app.css';
	import Benefits from '../components/Benefits.svelte';
	import Feedbacks from '../components/Feedbacks.svelte';
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	import favicon from '../assets/favicon.ico';
	import Tecs from '../components/Tecs.svelte';
	import Branding from '../components/Branding.svelte';
	import Me from '../components/Me.svelte';
	import Faq from '../components/Faq.svelte';
	import Footer from '../components/Footer.svelte';
	import Sale from '../components/Sale.svelte';
</script>

<svelte:head>
	<title>Bootcamp Frontbase</title>
	<script defer src="https://kit.fontawesome.com/6fffeb3d5e.js" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
	<meta name="description" content="O Bootcamp mais completo para qualquer iniciante virar um Dev Front-end.">
	<meta name="author" content="Gabriel Soares Salvador">
	<meta name="keywords" content="HTML, CSS, Javascript, Sass, API, Bootstrap, React, Bootcamp, Frontbase, Front-end, Gabriel Salvador, Professor Gabriel, programação, front-end developer, desenvolvedor, developer">
	<meta name="robots" content="index, follow">
</svelte:head>

<Nav />
<div class="py-8 px-2 relative flex flex-col gap-32 desktop:gap-40 overflow-y-scroll">
	<div
		class="bg-[url('./assets/bg-binary.webp')] bg-no-repeat bg-cover min-h-screen -z-10 absolute opacity-[.02] w-full top-0 left-0 h-full"
	/>
	<Header />
	<Benefits />
	<Tecs />
	<Feedbacks />
	<Branding />

	<Me />
	<Sale />
	<Faq />
</div>
<Footer />
