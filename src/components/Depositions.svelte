<script>
	import bernardo from '../assets/depoimento-bernardo.mp4';
	import silvio from '../assets/depoimento-silvio.mp4';
	import mayara from '../assets/depoimento-mayara.mp4';
	import yago from '../assets/depoimento-yago.mp4';
</script>

<section class="flex flex-col items-center w-full desktop:px-40" id="depositions">
	<h1
		class="text-4xl font-bold uppercase bg-cpink text-cblack mb-4 px-2 rounded laptop:mb-8 laptop:text-4xl desktop:text-6xl desktop:mb-20"
	>
		Depoimentos
	</h1>
	<div class="flex flex-wrap gap-4 justify-center">
		<!-- svelte-ignore a11y-media-has-caption -->
		<!-- <video controls class="h-[600px]">
            <source src={yago} type="video/mp4" />
        </video> -->
		<iframe
			class="h-[600px] max-w-full"
			src="https://www.youtube.com/embed/jbdjttS_Ax4"
			title="depoimento yago"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<!-- svelte-ignore a11y-media-has-caption -->
		<iframe
			class="h-[600px] max-w-full"
			src="https://www.youtube.com/embed/DEQUcq2FMys"
			title="depoimento silvio 9dafa70f"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<!-- svelte-ignore a11y-media-has-caption -->
		<iframe
			class="h-[600px] max-w-full"
			src="https://www.youtube.com/embed/YVdMwri7jPs"
			title="depoimento mayara ac6e38c3"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<!-- svelte-ignore a11y-media-has-caption -->
		<iframe
			class="h-[600px] max-w-full"
			src="https://www.youtube.com/embed/ag1dBDX0FhM"
			title="depoimento bernardo 826b2aca"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>
