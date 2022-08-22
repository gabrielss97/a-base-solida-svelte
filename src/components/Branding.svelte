<script>
	import gitLogo from '../assets/github-logo.png';
	import linkedinLogo from '../assets/linkedin-logo.png';
	export let buttonText = 'INSCREVA-SE AGORA MESMO';
	export let href =
		'https://pay.hotmart.com/G70568619V?bid=1657111023469';
</script>

<section class="flex flex-col items-center" id="job">
	<h1
		class="text-4xl text-center font-bold uppercase bg-cyellow text-cblack mb-12 px-2 rounded desktop:text-6xl desktop:mb-20"
	>
		MERCADO DE TRABALHO
	</h1>
	<div
		class="grid auto-fit gap-y-12 px-8 tablet:px-16 tablet:gap-x-16 laptop:gap-x-16 desktop:px-60 desktop:gap-x-32  mb-10 tablet:mb-16"
	>
		<div
			class="flex flex-col items-center gap-4 desktop:border-r-2 desktop:border-cgolden desktop:border-dashed desktop:pr-4 tablet:border-cgolden laptop:border-dashed tablet:border-r-2  tablet:border-none"
		>
			<img src={gitLogo} alt="" class="max-w-[100px] self-start bg-cwhite p-2 rounded shadow-md" />
			<h3
				class="text-cyellow p-1 
			
			self-start border-b-2"
			>
				Github
			</h3>
			<p class="desktop:pr-28 tablet:pr-12 px-2 text-justify">
				Aprenda a como utilizar o <b>Github</b> para guardar online todos os seus projetos, mas o
				mais importante, aprenda a construir um <b> bom portfólio</b> na plataforma, esse será um dos
				principais diferenciais na busca por emprego.
			</p>
		</div>
		<div class="flex flex-col gap-4">
			<img src={linkedinLogo} alt="" class="max-w-[100px] bg-cwhite p-2 rounded shadow-md" />
			<h3 class=" text-cyellow p-1 self-start border-b-2">Linkedin</h3>
			<p class="desktop:pr-28 tablet:pr-12 px-2 text-justify">
				Descubra os segredos de como fazer um ótimo perfil no <b>Linkedin</b>, nada de teoria e
				mentalidade, aqui vou te explicar as ações e palavras-chave <b>práticas</b> para conseguir o
				emprego que você merece.
			</p>
		</div>
	</div>
	<button
		class=" hover:border-cgolden hover:bg-cgolden tablet:block rounded py-2 px-5 text-cblack bg-cyellow border-2 border-cyellow font-bold text-center desktop:w-1/4 desktop:text-2xl desktop:mt-4 desktop:border-4 laptop:text-2xl laptop:px-16 desktop:px-5"
		><a target="_blank" {href}>{buttonText}</a>
	</button>
</section>

<style>
	.auto-fit {
		grid-template-columns: repeat(auto-fit, minmax(360px, auto));
	}

	h3 {
		font-weight: bold;
		font-size: 2rem;
	}

	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 34px;
		/* color: #bec9d3; */
	}
</style>
