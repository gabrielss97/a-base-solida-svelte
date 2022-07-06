<script>
	import MainButton from './MainButton.svelte';
</script>

<div class="flex flex-col items-center w-full desktop:px-40">
	<h1 class="text-4xl font-bold uppercase bg-cyellow text-cblack mb-4 px-2 rounded laptop:mb-8 laptop:text-4xl desktop:text-6xl desktop:mb-10">Feedbacks</h1>
	<p class="text-xl mb-4 tablet:px-16 laptop:px-80 laptop:text-4xl laptop:mb-8 laptop:text-center desktop:px-40 desktop:mb-4 desktop:text-2xl">
		Bem essa é uma seção <b>polêmica</b>, sabemos que muitos sites e cursos por aí tem feedbacks
		genéricos e até muitas vezes falsos, então dessa vez eu vou fazer diferente. Você vai clicar no
		botão abaixo e será direcionado para minha página dentro do
		<span class="text-[#FF9292] font-bold">SUPERPROF</span>, a <b>maior plataforma</b> de
		professores particulares do mundo e poderá ver
		<span>feedbacks reais</span>, que foram feitos pelos meus alunos.
	</p>
	<MainButton
		buttonText={'FEEDBACKS SUPERPROF'}
		borderColor={'border-[#FF9292]'}
		hoverColor={'bg-[#FF9292]'}
        href={'https://www.superprof.com.br/html-css-javascript-vou-dar-base-solida-voce-precisa-para-avancar-carreira-desenvolvedor-engenheiro-software.html'}
	/>
</div>
