<script>
	import htmlLogo from '../assets/html5-logo.png';
	import cssLogo from '../assets/css-logo.png';
	import jsLogo from '../assets/js-logo.png';
	import sassLogo from '../assets/sass-logo.png';
	import respLogo from '../assets/responsividade-logo.png';
	import apiLogo from '../assets/api-logo.png';
	import reactLogo from '../assets/react-logo.png';
	import bootLogo from '../assets/bootstrap-logo.png';
</script>

<div class="flex flex-col justify-center items-center" id="tecs">
	<h1
		class="text-4xl text-center font-bold uppercase bg-cyellow text-cblack mb-12 px-2 rounded desktop:text-6xl desktop:mb-20"
	>
		O QUE VOCÊ VAI APRENDER?
	</h1>
	<div class="grid auto-fit px-8 gap-y-12 tablet:px-16 tablet:gap-x-16 laptop:gap-x-16">
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2">
			<img src={htmlLogo} class="w-[100px]" alt="" />
			<h3>HTML 5</h3>
			<p>
				Aprenda a organizar o conteúdo do seu site com o HTML. Você aprenderá a criar Sections,
				formulários, tocar vídeos, trazer imagens e muito mais.
			</p>
		</div>
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 max-w-2xl laptop:border-[#bec9d3] laptop:border-dashed laptop:pr-4 laptop:border-r-2">
			<img src={cssLogo} alt="" />
			<h3>CSS 3</h3>
			<p>
				Aprenda a dar estilo e design ao seu projeto com o mais atual do CSS. Você aprenderá Flexbox, Grid, animações e muito mais.
			</p>
		</div>
		<div class="flex flex-col gap-4 pr-8 max-w-2xl tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2 desktop:border-none">
			<img src={sassLogo} alt="" />
			<h3>SASS</h3>
			<p>
				Descubra como dar super poderes ao seu CSS e organizar sua estilização de uma forma muito mais sofisticada e organizada.
			</p>
		</div>
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 max-w-2xl laptop:border-[#bec9d3] laptop:border-dashed laptop:pr-4 laptop:border-r-2">
			<img src={jsLogo} alt="" />
			<h3>JAVASCRIPT</h3>
			<p>
				Crie sistemas profissionais e repletos de interatividade com o JavaScript. Você vai dominar funções, orientação a objetos, listas, métodos, propriedades, promises, async e muito mais.
			</p>
		</div>
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 max-w-2xl tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2">
			<img src={respLogo} alt="" />
			<h3>RESPONSIVIDADE</h3>
			<p>
				Crie layouts totalmente responsivos, suas aplicações ficarão perfeitas de várias formas diferentes em vários dispositivos diferentes como celular, tablet e desktop.
			</p>
		</div>
		<div class="flex flex-col gap-4 pr-12 max-w-2xl laptop:border-[#bec9d3] laptop:border-dashed laptop:pr-4 laptop:border-r-2 desktop:border-none">
			<img src={bootLogo} alt="" />
			<h3>BOOTSTRAP</h3>
			<p>
				Use componentes padronizados e estilosos no seu projeto com o Bootstrap. Assim você criará interfaces muito mais rapidamente.
			</p>
		</div>
        
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 max-w-2xl tablet:border-[#bec9d3] tablet:border-dashed tablet:pr-4 tablet:border-r-2">
			<img src={apiLogo} alt="" />
			<h3>API</h3>
			<p>
				Compreenda como funciona uma API, como integrar os dados vindo do banco de dados com sua aplicação de forma totalmente dinâmica.
                Entenda de uma vez por todas o que é o famoso JSON.
			</p>
		</div>
		<div class="flex flex-col gap-4 desktop:border-r-2 desktop:border-[#bec9d3] desktop:border-dashed desktop:pr-4 max-w-2xl laptop:border-[#bec9d3] laptop:border-dashed laptop:pr-4 laptop:border-r-2">
			<img src={reactLogo} alt="" />
			<h3>REACT</h3>
			<p>
				Entenda o que é um framework JavaScript, domine a criação de aplicativos web com o React. Desde aplicações simples às mais complexas com usos de Rotas protegidas e muito mais.
			</p>
		</div>
	</div>
</div>

<style>
	img {
		width: 70px;
		height: 70px;
	}

	h3 {
		font-weight: bold;
		font-size: 2rem;
        color: rgb(230, 231, 222);
	}

	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 34px;
        color: #bec9d3;
	}

    .auto-fit {
        grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    }

    
</style>
