<script>
	import gitLogo from '../assets/github-logo.png';
	import linkedinLogo from '../assets/linkedin-logo.png';
</script>

<div class="flex flex-col items-center" id="job">
	<h1
		class="text-4xl text-center font-bold uppercase bg-cyellow text-cblack mb-12 px-2 rounded desktop:text-6xl desktop:mb-20"
	>
		MERCADO DE TRABALHO
	</h1>
	<div class="grid auto-fit px-8 gap-y-12 tablet:px-16 tablet:gap-x-16 laptop:gap-x-16">
		<div
			class="flex flex-col items-center gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2"
		>
			<img src={gitLogo} alt="" class="max-w-[100px] self-start bg-cwhite p-2 rounded shadow-md" />
			<h3 class="bg-cyellow text-cblack p-1 rounded self-start min-w-[150px] shadow-md">Github</h3>
			<p>
				Aprenda a como utilizar o Github para guardar online todos os seus projetos, mas o mais importante, aprenda a construir um bom portfólio na plataforma, esse será um dos principais diferenciais na busca por emprego.
			</p>
		</div>
		<div
			class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2"
		>
			<img src={linkedinLogo} alt="" class="max-w-[100px] bg-cwhite p-2 rounded shadow-md" />
			<h3 class="bg-cyellow text-cblack p-1 rounded self-start min-w-[150px] shadow-md">Linkedin</h3>
			<p>
				Descubra os segredos de como fazer um ótimo perfil no Linkedin, nada de teoria e mentalidade, aqui vou te explicar as ações e palavras-chave práticas para conseguir o emprego que você merece.
			</p>
		</div>
	</div>
</div>

<style>
	.auto-fit {
		grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	}

	h3 {
		font-weight: bold;
		font-size: 2rem;
	}

        p {
		font-weight: 400;
		font-size: 20px;
		line-height: 34px;
        color: #bec9d3;
	}
</style>
