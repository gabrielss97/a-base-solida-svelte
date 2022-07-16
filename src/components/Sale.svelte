<script>
	import MainButton from './MainButton.svelte';
	import DevGirl from '../assets/dev-girl.jpg';
</script>

<div class="flex flex-col items-center" id="investimento">
	<h1
		class="text-4xl text-center font-bold uppercase bg-cyellow text-cblack mb-4 px-2 rounded laptop:mb-8 desktop:text-6xl desktop:mb-10"
	>
		Investimento
	</h1>
	<div  class="flex flex-col items-center laptop:flex-row laptop:px-4 laptop:justify-center">
        <img src={DevGirl} alt="" class="max-w-[90vw] rounded mb-4 laptop:max-w-[30%]">
		<div class="flex flex-col justify-center">
			<p class="mb-10 text-xl tablet:mx-10 laptop:text-2xl max-w-lg desktop:text-4xl">
				Priorize sua carreira, investir no seu futuro vai sair bem mais barato do que você imagina,
				por apenas:
			</p>
			<div class="flex justify-center gap-3 mx-auto pb-2 tablet:mx-auto laptop:w-[30vw]">
				<span class="leading-6 text-2xl text-[#bec9d3]">12x</span>
				<span
					class="leading-[70px] text-7xl font-bold border-b-4 border-cyellow pb-2 desktop:text-8xl"
					>116</span
				>
				<div class="flex flex-col gap-2">
					<span class="leading-[34px] font-bold text-3xl">, 42</span>
					<span class="text-xl leading-6 text-[#bec9d3]">Sem juros</span>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-10 flex justify-center min-w-full">
		<MainButton />
	</div>
</div>

<style>
	p {
		font-weight: 400;
		line-height: 34px;
		color: #bec9d3;
	}
</style>
