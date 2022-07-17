<script>
	import FaqItem from './FaqItem.svelte';

	export let faqs = [
		{
			pergunta: 'O QUE EU PRECISO SABER PARA FAZER O CURSO?',
			resposta:
				'Nada. Você não precisa ter nenhuma experiência com programação. Apenas vontade de aprender. Vou te ensinar tudo. Todas as aulas são feitas pensando em quem nunca teve contato com programação e para aqueles que já tiveram também.'
		},
		{
			pergunta: 'POR QUANTO TEMPO TEREI ACESSO AO CURSO?',
			resposta:
				'Você terá acesso vitalício à todas aulas gravadas, materiais e exercícios.'
		},
		{
			pergunta: 'VOU APRENDER A CRIAR UM SITE COMO ESTE AQUI?',
			resposta:
				'Sim, vamos ver sites como este e muitos outros. Só por curiosidade, esta página foi feita com Svelte e Tailwind, um framework que talvez você não conheça mas que usa muito do conceito de código puro em HTML, CSS e Javascript para funcionar.'
		},
		{
			pergunta: 'COMO POSSO ACESSAR O CURSO?',
			resposta:
				'Com sua compra aprovada pelo Hotmart, eu pessoalmente irei te enviar um link de acesso ao servidor onde faremos nossas aulas e também onde você poderá acessar todo o material.'
		},
		{
			pergunta: 'TODAS AS AULAS ESTARÃO DISPONÍVEIS NO MOMENTO DA COMPRA?',
			resposta:
				'Não. Como nossas aulas são ao-vivo as aulas serão gravadas ao longo do Bootcamp.'
		},
		{
			pergunta: 'QUAL A CARGA HORÁRIA DO CURSO?',
			resposta:
				'Nesse momento o Bootcamp conta com um pouco mais de 30 horas de conteúdo, um total de 6 semanas de aulas ao-vivo.'
		},
		{
			pergunta: 'QUAIS AS GARANTIAS DO CURSO?',
			resposta:
				'O curso oferece o reembolso integral em até 7 dias, ou seja, você tem sete dias para assistir as aulas da primeira semana e pedir o dinheiro de volta caso não esteja 100% satisfeito.'
		},
	];
</script>

<section id="faq" class="px-2 mb-16 flex flex-col items-center">
	<h1 class="text-4xl pt-2 text-center font-bold uppercase bg-cyellow cyellow text-cblack mb-4 px-2 rounded laptop:mb-8 desktop:text-6xl desktop:mb-10">FAQ - PERGUNTAS FREQUENTES</h1>
	<div class="w-[80vw]">
	{#each faqs as faq}
		<FaqItem pergunta={faq.pergunta} resposta={faq.resposta} />
	{/each}
</div>
</section>