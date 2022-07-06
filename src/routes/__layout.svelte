<script>
	import '../app.css';
	import Benefits from '../components/Benefits.svelte';
import Feedbacks from '../components/Feedbacks.svelte';
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	import favicon from '../assets/favicon.ico'
</script>

<svelte:head>
	<title>A Base Sólida</title>
	<script defer src="https://kit.fontawesome.com/6fffeb3d5e.js" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href={favicon} type="image/x-icon">
</svelte:head>

<div class="py-8 px-2 relative flex flex-col gap-16 desktop:gap-20">
	<div
		class="bg-[url('./assets/bg-binary.jpg')] bg-no-repeat bg-cover min-h-screen -z-10 absolute opacity-[.05] w-full top-0 left-0 h-full"
	/>
	<Nav />
	<Header />
	<Benefits />
	<Feedbacks/>
</div>
