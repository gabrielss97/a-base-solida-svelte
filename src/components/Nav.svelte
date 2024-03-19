<script>
	import logo from '../assets/logo.png';
</script>

<nav
	class="flex justify-center items-center laptop:sticky laptop:top-0 laptop:z-50 tablet:justify-between px-12 desktop:px-40 bg-[#2A2B2F] py-8"
>
	<a href="#header">
		<img src={logo} alt="logo" class="w-12 rounded" />
	</a>
	<div class="flex gap-5 items-center">
		<ul class="hidden laptop:flex text-cgray gap-5">
			<li class="hover:text-cwhite"><a href="#depositions">Depoimentos</a></li>
			<li class="hover:text-cwhite"><a href="#tecs">O que você vai aprender?</a></li>
			<li class="hover:text-cwhite"><a href="#job">Mercado de Trabalho</a></li>
			<li class="hover:text-cwhite"><a href="#iam">Quem sou eu</a></li>
			<li class="hover:text-cwhite"><a href="#investimento">Investimento</a></li>
			<li class="hover:text-cwhite"><a href="#faq">FAQ</a></li>
		</ul>
		<button
			class="hidden hover:bg-cgolden bg-cyellow hover:border-cgolden text-cblack tablet:block rounded py-2 px-5 border-cyellow border-2 font-bold"
			><a target="_blank" href="https://pay.kiwify.com.br/1rBiFT3">INSCREVA-SE AGORA</a></button
		>
	</div>
</nav>
