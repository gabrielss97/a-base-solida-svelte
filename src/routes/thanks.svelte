<script defer>
	import '../app.css';
	import favicon from '../assets/favicon.ico';

	const thanksVideo = 'https://www.youtube.com/embed/Brxxh3_XWcc';
</script>

<svelte:head>
	<title>Obrigado!!!</title>
	<script defer src="https://kit.fontawesome.com/6fffeb3d5e.js" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
	<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> -->
	<meta
		name="description"
		content="O Bootcamp mais completo para qualquer iniciante virar um Dev Front-end."
	/>
	<meta name="author" content="Gabriel Soares Salvador" />
	<meta
		name="keywords"
		content="HTML, CSS, Javascript, Sass, API, Bootstrap, React, Bootcamp, Frontbase, Front-end, Gabriel Salvador, Professor Gabriel, programação, front-end developer, desenvolvedor, developer"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="p-5 flex justify-center flex-col items-center">
	<div class="desktop:flex flex-col">
		<h1 class="font-bold text-center  text-4xl uppercase mb-5 desktop:text-6xl">
			Bootcamp<br /> <span class=" rounded bg-cyellow text-cblack px-2">Frontbase</span>
		</h1>
		<iframe
			defer
			class="desktop:w-[1000px] desktop:min-h-[500px] tablet:px-10 tablet:w-[700px] tablet:min-h-[350px]  laptop:flex-1 laptop:px-0 rounded"
			src={thanksVideo}
			title="Teste"
			frameborder="0"
			allowfullscreen
		/>
	</div>

	<div class="desktop:flex flex-col max-w-[650px]">
		<h1 class="font-bold text-center  text-4xl uppercase mb-5 mt-5 desktop:text-6xl">
			<span class=" rounded bg-cyellow text-cblack px-2">Obrigado!</span>
		</h1>
		<p class="text-xl text-center desktop:text-xl desktop:leading-10  px-2">
			A partir de agora bastar acessar o link para entrar na comunidade:
			<a href="https://discord.gg/TPm6nEjKG3" target="_blank" class="text-cyellow"
				>https://discord.gg/TPm6nEjKG3</a
			>
			<br />
			Instruções: seu login e senha para a área de membros da
			<span class="text-cgreen">Hotmart</span>
			chegará por e-mail, lá você poderá ver todas as aulas gravadas no dia seguinte da aula ao-vivo
		</p>
		<p class="text-xl text-center desktop:text-xl desktop:leading-10  px-2 mt-5">
			Bem-vindo ao Frontbase, bons estudos e até logo!
		</p>
	</div>
</div>
