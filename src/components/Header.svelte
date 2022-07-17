<script defer>
	import MainButton from './MainButton.svelte';
	const mainVideo = 'https://www.youtube.com/embed/SNIA34onQCk'
</script>

<header class="flex flex-col gap-8 items-center laptop:pl-4 desktop:px-40">
	<div class="flex flex-col gap-8 laptop:flex-row desktop:h-[450px]">
		<iframe
			class="w-full h-72 tablet:px-10 laptop:flex-1 laptop:px-0 desktop:h-full rounded"
			src={mainVideo}
			title="Como criar um simples projeto para portfólio! | Gabriel Salvador"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<div
			class="tablet:px-10 laptop:w-1/2 laptop:px-6 desktop:flex desktop:flex-col desktop:justify-around"
		>
			<h1 class="font-bold w-full text-4xl uppercase text-left mb-5 desktop:text-6xl">
				Bootcamp <br /> <span class=" rounded bg-cyellow text-cblack px-2">FrontBase</span>
			</h1>
			<p class="text-xl desktop:text-3xl desktop:leading-10">
				Pare de travar na hora de começar seu <b>próprio projeto do zero</b>, torne-se um
				programador que não só copia código mas que entenda de verdade a linguagem
				<span class="text-cyellow  font-bold">JavaScript</span>, obtenha uma <b>base sólida</b> para
				que você tenha a mentalidade programadora e consiga enfrentar qualquer desafio na área Web.
			</p>
		</div>
	</div>
	<MainButton />
</header>
