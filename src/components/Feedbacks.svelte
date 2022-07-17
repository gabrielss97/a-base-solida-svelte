<script>
	export let buttonText = 'FEEDBACKS SUPERPROF';
	export let borderColor = 'border-cpink';
	export let href =
		'https://www.superprof.com.br/html-css-javascript-vou-dar-base-solida-voce-precisa-para-avancar-carreira-desenvolvedor-engenheiro-software.html';
</script>

<div class="flex flex-col items-center w-full desktop:px-40" id="feedbacks">
	<h1
		class="text-4xl font-bold uppercase bg-cpink text-cblack mb-4 px-2 rounded laptop:mb-8 laptop:text-4xl desktop:text-6xl desktop:mb-20"
	>
		Feedbacks
	</h1>
	<p
		class="leading-10 px-2 text-2xl mb-4 tablet:leading-10 tablet:px-16 laptop:px-20 laptop:mb-8 laptop:text-center laptop:leading-10 desktop:px-32 desktop:mb-4 desktop:leading-10 "
	>
		Bem essa é uma seção <b>polêmica</b>, sabemos que muitos sites e cursos por aí tem feedbacks
		genéricos e até muitas vezes falsos, então dessa vez eu vou fazer diferente. Você vai clicar no
		botão abaixo e será direcionado para minha página dentro do
		<span class="text-[#FF9292] font-bold">SUPERPROF</span>, a <b>maior plataforma</b> de
		professores particulares do mundo e poderá ver
		<span>feedbacks reais</span>, que foram feitos pelos meus alunos.
	</p>
	<button
		class=" hover:bg-[#f08989] hover:border-[#f08989] text-cblack  bg-cpink tablet:block rounded py-2 px-5 {borderColor} border-2 font-bold text-center desktop:w-1/4 desktop:text-2xl desktop:mt-4 desktop:border-4 laptop:text-2xl laptop:px-16 desktop:px-5"
		><a target="_blank" {href}>{buttonText}</a>
	</button>
</div>
