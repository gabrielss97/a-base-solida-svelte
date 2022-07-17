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
import Doubt from '../components/Doubt.svelte';
</script>

<svelte:head>
	<title>Bootcamp Frontbase</title>
	<script defer src="https://kit.fontawesome.com/6fffeb3d5e.js" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
	<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> -->
	<meta name="description" content="O Bootcamp mais completo para qualquer iniciante virar um Dev Front-end.">
	<meta name="author" content="Gabriel Soares Salvador">
	<meta name="keywords" content="HTML, CSS, Javascript, Sass, API, Bootstrap, React, Bootcamp, Frontbase, Front-end, Gabriel Salvador, Professor Gabriel, programação, front-end developer, desenvolvedor, developer">
	<meta name="robots" content="index, follow">
</svelte:head>

<a href="https://wa.me/5521999057567?text=Tenho duvidas sobre o bootcamp Frontbase!" style="position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888;
  z-index:1000;" target="_blank">
<i style="margin-top:16px" class="fa fa-whatsapp"></i>
</a>

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
	<Doubt />
</div>
<Footer />
