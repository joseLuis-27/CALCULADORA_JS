// Recibir la información de nuestro contenedor que tiene la clase .display y almacenarla en un constante o variable
const display = document.querySelector('.display');

// Recibir la información de cada uno de los botones
const botones = document.querySelectorAll('.btn');

// Realizar un forEach para cada uno de los botones que tengo en mi calculadora. A su vez se le agrega un evento el cual me servira para que cada que presione el botón la información se vea reflejada en mi display
botones.forEach(boton => {
	boton.addEventListener('click', () => {
		// console.log(boton.textContent);
		const botonPresionado = boton.textContent;

		if (boton.id === 'btnC') {
			display.textContent = '0';
			return;
		}

		if (boton.id == 'btnDelete') {
			if (display.textContent.length === 1 || display.textContent === 'Error!') {
				display.textContent = '0';
			} else {
				display.textContent = display.textContent.slice(0, -1);
			}
			return;
		}

		if (boton.id === 'btnIgual') {
			try {
				display.textContent = eval(display.textContent);
			} catch {
				display.textContent = 'Error!';
			}
			return;
		}

		if (display.textContent === '0' || display.textContent == 'Error!') {
			display.textContent = botonPresionado
		} else {
			display.textContent += botonPresionado;
		}
	})
})