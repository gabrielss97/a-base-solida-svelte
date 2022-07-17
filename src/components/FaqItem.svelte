<script>
	export let pergunta;
	export let resposta;
	export let active = false;

	function toggleActive() {
		active = !active;
		console.log(active);
	}
</script>

<section class="cursor-pointer mb-4 rounded  font-semibold laptop:px-40 desktop:px-60">
	<div class="flex items-center bg-[#e5e4db] rounded-t relative z-10" on:click={toggleActive}>
		<h1 class={`p-4 text-cblack flex-1 ${active ? 'active' : ''}`} >
			{pergunta}
		</h1>
		<img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAACAAAAAAysMxaAAABHklEQVQYGX3QsU7DMBAG4Ds7bZqoUejgiAeoxOCpG2pVpIyMeRB4DHgLeAOYoKMHHoDJWx8AKQtpQ+o6cYxbRKSoglvv/+5Oh+XF5QsJ6jiI2gzf3nP4p+zrmEFUP8NZU5C28WKjyUJVVtjljP3l7MM5g43LfMECdiQmiFEGzUA6zPf7RtjrU2zvHCqUgB1yVFSC8jMSrVc5tDQF40lTU66LvcPTbrO9cejTDayAQ4USNEnxqszx97TtdMkwVIIMFfdGjRxEdQpj1x2Wwk4Mx0krgQ1SvP04/qGDhwF2tmTKlgJ8zWmoJfU1YNg4ZCQkkOL9Dzpke7DDdCuIrzgZ1UBHWmLip/i47n38BB7xfJ4os3nyghq8wGS46qND5hss4nxhrMpmNAAAAABJRU5ErkJggg=="
			alt="arrow"
			class={`h-[8px] mr-4 ${active ? 'rotate' : 'rotate-back'}`}
		/>
	</div>
	<div class={`${active ? 'appear' : 'hidden h-0'} p-4 rounded-b-sm bg-[#2a2a2d] text-[#dbe1e7]`}>
		<p>{resposta}</p>
	</div>
</section>

<style>
	.active {
		background: -webkit-linear-gradient(225deg, #ffaf00 0%, #fe4d1b 48.15%, #e70154 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rotate {
		transform: rotate(180deg);
		transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
		margin-right: 1rem;
	}

	.rotate-back {
		transform: rotate(0deg);
		transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
		margin-right: 1rem;
	}

	.appear {
		/* transition: max-height 5s; */
		animation: alturaResp 0.4s;
	}

	@keyframes alturaResp {
		from {
			transform: translateY(-30px);
		}
		to {
			transform: translateY(0px);
		}
	}
</style>
