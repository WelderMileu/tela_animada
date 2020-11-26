const $ = e => document.querySelector(e);


$('.form-sign-in .info .btn-info').addEventListener('click', () => {
	$('.container').classList.add('anime');
	$('.form-sign-in').classList.add('hidden');

	setTimeout(() => {
		$('.form-sign-up').style.display = "flex";
	}, 1500)

	setTimeout(() => {
		$('.form-sign-in').classList.add('none')		
		$('.form-sign-up').style.display = "flex"
		$('.form-sign-up').style.zIndex = "1000"
		$('.form-sign-up').classList.add('visible');

	}, 2000)
})

$('.form-sign-up .info .btn-info').addEventListener('click', () => {
	$('.container').classList.remove('anime');
	$('.form-sign-up').classList.remove('visible');	
	
	setTimeout(() => {
		$('.form-sign-in').classList.remove('hidden');
	}, 2200)

	setTimeout(() => {
		$('.form-sign-in').classList.remove('none');
	}, 2000)

	setTimeout(() => {
		$('.form-sign-up').style.display = "none"
		$('.form-sign-up').style.zIndex = "-1"
	}, 1000)
})