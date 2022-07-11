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
</script>

<svelte:head>
	<title>A Base Sólida</title>
	<script defer src="https://kit.fontawesome.com/6fffeb3d5e.js" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<Nav />
<div class="py-8 px-2 relative flex flex-col gap-32 desktop:gap-40 overflow-y-scroll">
	<div
		class="bg-[url('./assets/bg-binary.jpg')] bg-no-repeat bg-cover min-h-screen -z-10 absolute opacity-[.05] w-full top-0 left-0 h-full"
	/>
	<Header />
	<Benefits />
	<Tecs />
	<Feedbacks />
	<Branding />
	<Me />
	<Faq />
</div>
<Footer />
