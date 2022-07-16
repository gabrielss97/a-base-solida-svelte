<script>

import MainButton from "./MainButton.svelte";

</script>
<div>
	<h1
		class="text-4xl text-center font-bold uppercase bg-cyellow text-cblack mb-4 px-2 rounded desktop:text-6xl desktop:mb-20"
	>
		Realizar inscrição
	</h1>
	<p class="mb-10">
		Priorize sua carreira, investir no seu futuro vai sair bem mais barato do que você imagina, por
		apenas:
	</p>
	<div class="flex justify-center gap-3 border-b-4 border-cyellow mx-12 pb-2 tablet:mx-48 laptop:w-[30vw]">
		<span class="leading-6 text-lg text-[#bec9d3]">12x</span>
		<span class="leading-[70px] text-[64px] font-bold">116</span>
		<div class="flex flex-col gap-2">
			<span class="leading-[34px] font-bold text-xl">, 42</span>
			<span class="text-base leading-6 text-[#bec9d3]">Sem juros</span>
		</div>
	</div>
    <div class="mt-10 flex justify-center">
        <MainButton/>

    </div>
</div>

<style>
	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 34px;
		color: #bec9d3;
	}
</style>
