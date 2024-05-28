<script>
	import MainButton from './MainButton.svelte';
	import DevGirl from '../assets/dev-girl-removebg.png';

	export let buttonText = 'INSCREVA-SE AGORA MESMO';
	export let borderColor = 'border-[#00DFC0]';
	export let href = 'https://mpago.la/1qKb1MH';
</script>

<section class="flex flex-col items-center" id="investimento">
	<h1
		class="text-4xl text-center font-bold uppercase bg-[#00DFC0] cyellow text-cblack mb-4 px-2 rounded laptop:mb-8 desktop:text-6xl desktop:mb-10"
	>
		Investimento
	</h1>
	<div class="flex flex-col items-center laptop:flex-row laptop:px-4 laptop:justify-center">
		<img src={DevGirl} alt="" class="max-w-[90vw] rounded mb-4 laptop:max-w-[30%]" />
		<div class="flex flex-col justify-center">
			<p class="mb-10 text-xl tablet:mx-10 laptop:text-2xl max-w-lg desktop:text-3xl">
				Priorize sua <span class="text-[#00DFC0]">carreira</span>, investir no seu futuro vai sair
				bem mais <span class="text-[#00DFC0]">barato</span> do que você imagina, por apenas:
			</p>
			<div class="flex justify-center gap-3 mx-auto pb-2 tablet:mx-auto laptop:w-[30vw]">
				<span class="leading-6 text-2xl text-[#bec9d3]">12x</span>
				<span
					class="leading-[70px] text-7xl font-bold border-b-4 border-[#00DFC0] pb-2 desktop:text-8xl"
					>121</span
				>
				<div class="flex flex-col gap-2">
					<span class="leading-[34px] font-bold text-3xl">, 61</span>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-10 flex justify-center min-w-full">
		<button
			class=" hover:bg-[#00bca3] hover:border-[#00bca3] text-cblack bg-[#00DFC0] tablet:block rounded py-2 px-5 {borderColor} border-2 font-bold text-center desktop:w-1/4 desktop:text-2xl desktop:mt-4 desktop:border-4 laptop:text-2xl laptop:px-16 desktop:px-5"
			><a target="_blank" {href}>{buttonText}</a></button
		>
	</div>
</section>

<style>
	p {
		font-weight: 400;
		line-height: 34px;
		text-align: justify;
		color: white;
	}
</style>
