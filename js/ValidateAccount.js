
(function () {
	'use strict'

	// Получите ссылку на кнопку
	var button = document.querySelector('.authorization-button');
	if (button) {
		// Добавьте обработчик событий на кнопку
		button.addEventListener('click', function (event) {
			// Получите ссылку на форму, связанную с кнопкой
			var item = document.querySelector('.needs-validation')

			// Проверьте форму на валидность
			if (item.checkValidity() ) {
				
					
					
			} else {

				event.preventDefault();
				event.stopPropagation();

			}

			// Добавьте класс 'was-validated' к форме
			item.classList.add('was-validated');
			
		}, false);
	}


})();