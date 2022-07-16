<script>
	import logo from '../assets/logo.png';
</script>

<nav
	class="flex flex-col justify-center gap-4 items-center py-4 px-4 tablet:justify-between desktop:px-40 bg-[#171719]"
>
	
	<div class="flex flex-col gap-8 tablet:flex-row desktop:gap-20 laptop:gap-4 tablet:justify-between desktop:px-40 items-center w-[90vw]">
        <img src={logo} alt="logo" class="w-12 rounded" />
        
		<ul class="hidden laptop:flex text-cgray gap-5 desktop:pl-48">
			<li class="hover:text-cwhite"><a href="#tecs">O que você vai aprender?</a></li>
			<li class="hover:text-cwhite"><a href="#feedbacks">Feedbacks</a></li>
			<li class="hover:text-cwhite"><a href="#job">Mercado de Trabalho</a></li>
			<li class="hover:text-cwhite"><a href="#iam">Quem sou eu</a></li>
			<li class="hover:text-cwhite"><a href="#investimento">Investimento</a></li>
			<li class="hover:text-cwhite"><a href="#faq">FAQ</a></li>
		</ul>
	</div>
    
    <p class="text-cgray text-center">© 2022 feito por mim mesmo ❤️.</p>
</nav>
