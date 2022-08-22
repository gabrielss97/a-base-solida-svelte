<script>
	import fotoPerfil from '../assets/foto-eu.webp';
</script>

<section id="iam" class="bg-cgolden flex flex-col items-center laptop:flex-row desktop:px-60 gradient desktop:p-16 laptop:p-8">
	<div class="desktop:w-2/3">
		<h1
			class="text-4xl font-bold uppercase text-cblack px-8 py-8 rounded desktop:text-6xl desktop:mb-10 text-center desktop:text-left laptop:text-left"
		>
			QUEM É GABRIEL SALVADOR?
		</h1>
		<p class="text-cblack px-8 font-normal text-xl desktop:pr-[9rem] laptop:max-w-4xl desktop:text-2xl">
			Engenheiro de Software, Professor e Empreendedor, atualmente primeiro no ranking no <b
				>Superprof</b
			>
			Brasil nas tecnologias <b>HTML, CSS e JavaScript.</b> Formado em Análise e Desenvolvimento de Sistema,
			Pós-graduado pela PUC em Desenvolvimento Web Full-Stack e certificado em Educação Digital pela
			IGTI. Um cara apaixonado por ensinar e ajudar os alunos a alcançarem seus objetivos e também entenderem
			que código não é a única coisa que o programador deve saber para ter destaque na profissão.
		</p>
	</div>

	<img src={fotoPerfil} alt="foto-perfil" class="w-full tablet:w-2/3 desktop:w-[50%] laptop:border-8 laptop:border-cblack desktop:border-8 border-cblack  rounded laptop:max-w-xl" />
</section>

<style>
	.gradient {
		background-color: #f39f86;
		background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
	}
</style>
