// Función para iniciar el slider automático
function iniciarSliderAutomatico() {
	const sliderContainer = document.querySelector('.slider-container');
	const sliderImgs = sliderContainer.getElementsByTagName('img');
	let index = 0;

	setInterval(() => {
		// Ocultar la imagen actual
		sliderImgs[index].classList.remove('visible');

		// Incrementar el índice
		index++;

		// Comprobar si se ha llegado al final del slider
		if (index >= sliderImgs.length) {
			index = 0; // Volver al primer índice
		}

		// Mostrar la siguiente imagen
		sliderImgs[index].classList.add('visible');
	}, 3000); // Cambiar la imagen cada 3 segundos (3000 milisegundos)
}

// Llamar a la función para iniciar el slider automático al cargar la página
window.addEventListener('load', iniciarSliderAutomatico);
