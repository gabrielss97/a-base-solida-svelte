<script>
	export let buttonText = 'INSCREVA-SE AGORA MESMO';
	export let borderColor = 'border-cyellow';
	export let href =
		'https://www.mercadopago.com.br/checkout/v1/payment/redirect/92003108-948c-44b4-85c4-857989c90725/payment-option-form/?source=link&preference-id=282933471-ea9b0b27-162a-4034-b6b6-6e60bda44545&sniffing-rollout=sniffing-api&router-request-id=eb9d1422-4424-4014-9538-eda16e178e05&p=11040522b74b979f8f204e99c61b88f6#/';
</script>

<button
	class=" text-cblack bg-cyellow hover:bg-cgolden hover:border-cgolden tablet:block rounded py-2 px-5 {borderColor} border-2 font-bold text-center desktop:w-2/5 desktop:text-2xl desktop:mt-4 desktop:border-4 laptop:text-2xl laptop:px-16 desktop:px-4"
	><a target="_blank" {href}>{buttonText}</a></button
>
