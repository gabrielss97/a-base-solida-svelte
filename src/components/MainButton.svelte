<script>
export let buttonText = 'INSCREVA-SE AGORA MESMO'
export let borderColor = 'border-cyellow'
export let hoverColor = 'bg-cyellow'
export let href = 'https://api.whatsapp.com/send?phone=5521999057567&text=Ol%C3%A1%20Gabriel%2C%20quero%20saber%20mais%20sobre%20o%20Bootcamp%20Frontbase'
</script>

<button
	class="hover:{hoverColor} hover:text-cblack tablet:block rounded-2xl py-2 px-5 text-cwhite {borderColor} border-2 font-bold text-center desktop:w-1/4 desktop:text-2xl desktop:mt-4 desktop:border-4 laptop:text-2xl laptop:px-16 desktop:px-5"
	><a
		target="_blank"
		{href}
		>{buttonText}</a
	></button
>
