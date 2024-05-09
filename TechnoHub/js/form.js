const form = document.querySelector('.formWithValidation');
const date = form.querySelector('.date');
const time = form.querySelector('.time');
const guests = form.querySelector('.guests');
const name = form.querySelector('.name');
const email = form.querySelector('.email');
const phone = form.querySelector('.phone');
const message = form.querySelector('.message');
const button = form.querySelector('.form__button');

const error = {};

function validateName() {
	if (!name.value) {
		error.name = 'Пожалуйста, введите ваше имя';
	} else {
		const nameRegex = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
		if (!nameRegex.test(name.value)) {
			error.name = 'Пожалуйста, введите корректное имя';
		} else {
			delete error.name;
		}
	}
}

function validateEmail() {
	if (!email.value) {
		error.email = 'Пожалуйста, введите вашу почту';
	} else {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailRegex.test(email.value)) {
			error.email = 'Пожалуйста, введите корректную почту';
		} else {
			delete error.email;
		}
	}
}

function validatePhone() {
	if (!phone.value) {
		error.phone = 'Пожалуйста, введите ваш номер телефона';
	} else {
		const phoneRegex = /^\+?\d{10,12}$/;
		if (!phoneRegex.test(phone.value)) {
			error.phone = 'Пожалуйста, введите корректный номер телефона';
		} else {
			delete error.phone;
		}
	}
}

function validateMessage() {
	if (!message.value) {
		error.message = 'Пожалуйста, введите ваше сообщение';
	} else {
		delete error.message;
	}
}


function validateForm() {
	validateMessage
	validateName();
	validateEmail();
	validatePhone();


	if (Object.keys(error).length === 0) {
		form.submit();
		alert('Данные успешно отправлены!');
	} else {
		showErrors();
	}
}


function showErrors() {
	const errorElements = form.querySelectorAll('.error');


	for (let i = 0; i < errorElements.length; i++) {
		errorElements[i].remove();
	}


	for (let key in error) {
		const errorElement = document.createElement('span');
		errorElement.className = 'error';
		errorElement.innerText = error[key];

		const inputElement = form.querySelector('#' + key);

		inputElement.insertAdjacentElement('afterend', errorElement);
	}
}


button.addEventListener('click', function (event) {
	event.preventDefault();
	validateForm();
});
const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
	const starClassActive = "rating__star fas fa-star";
	const starClassUnactive = "rating__star far fa-star";
	const starsLength = stars.length;
	let i;
	stars.map((star) => {
		star.onclick = () => {
			i = stars.indexOf(star);

			if (star.className.indexOf(starClassUnactive) !== -1) {
				printRatingResult(result, i + 1);
				for (i; i >= 0; --i) stars[i].className = starClassActive;
			} else {
				printRatingResult(result, i);
				for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
			}
		};
	});
}

function printRatingResult(result, num = 0) {
	result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);
