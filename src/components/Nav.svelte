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
			><a
				target="_blank"
				href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/92003108-948c-44b4-85c4-857989c90725/payment-option-form/?source=link&preference-id=282933471-ea9b0b27-162a-4034-b6b6-6e60bda44545&sniffing-rollout=sniffing-api&router-request-id=eb9d1422-4424-4014-9538-eda16e178e05&p=11040522b74b979f8f204e99c61b88f6#/"
				>INSCREVA-SE AGORA</a
			></button
		>
	</div>
</nav>
