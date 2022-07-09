<script>
    import gitLogo from '../assets/github-logo.png'
    import linkedinLogo from '../assets/linkedin-logo.png'
</script>

<div class="flex flex-col items-center">
	<h1
		class="text-4xl text-center font-bold uppercase bg-cyellow text-cblack mb-12 px-2 rounded desktop:text-6xl desktop:mb-20"
	>
		MERCADO DE TRABALHO
	</h1>
	<div class="grid auto-fit px-8 gap-y-12 tablet:px-16 tablet:gap-x-16 laptop:gap-x-16">
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2">
			<img src={gitLogo} alt="" class="max-w-[100px]" />
            <h3>Github</h3>
			<p>
				Aprenda a organizar o conteúdo do seu site com o HTML. Você aprenderá a criar Sections,
				formulários, tocar vídeos, trazer imagens e muito mais.
			</p>
		</div>
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2">
			<img src={linkedinLogo} alt="" class="max-w-[100px]" />
            <h3>Linkedin</h3>
			<p>
				Aprenda a organizar o conteúdo do seu site com o HTML. Você aprenderá a criar Sections,
				formulários, tocar vídeos, trazer imagens e muito mais.
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
        color: rgb(230, 231, 222);
    }
</style>