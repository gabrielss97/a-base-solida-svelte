<script>
	import '../app.css';
import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<title>A Base Sólida</title>
</svelte:head>


<div class="py-8 px-2 relative">
    <div class="bg-[url('./assets/bg-binary.jpg')] bg-no-repeat bg-cover min-h-screen -z-10 absolute opacity-[.02] w-full top-0 left-0"></div>
    <Nav />
    <Header/>
</div>
