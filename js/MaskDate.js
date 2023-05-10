// Валидация для дат в формате dd.mm.yyyy (день.месяц.год)
// При вводе даты в поле ввода, вводить можно только цифры, а также символы Backspace и Delete
// При вводе недопустимых символов, они не отображаются в поле ввода
// При вводе даты в поле ввода, дата автоматически форматируется в формат dd.mm.yyyy

function maskDateInput(input, values) {
    //value бывают типов: minus, plus, modificed, birthday - это режим при котором будет работать валидация



	input.addEventListener('keydown', event => {
		const value = input.value;
		const cursorPos = input.selectionStart;

		if (event.key === 'Backspace' && value && cursorPos === value.length) {
		} else if (event.key === 'Delete' && value && cursorPos === value.length) {
		} else if (!event.key.match(/^[a-zA-Z0-9а-яА-ЯёЁ]$/)) {
			event.preventDefault();
		}
	});
    
    // Создаю обработчик события input для мониторинга ввода в поле даты
    input.addEventListener('input', event => {
    // Удаляю все элементы из строки, кроме цифр
	const value = input.value.replace(/\D/g, '');
    // Создаю шаблон по которому буду отпредять правильность ввода даты (дд.мм.гггг)
	const datePattern = /^(\d{1,2})(\d{0,2})(\d{0,4})$/;
	if (datePattern.test(value)) {
		const day = value.slice(0, 2);
		const month = value.slice(2, 4);
		const year = value.slice(4, 8);

		let formattedDate = '';
        if (value.length === 8) {
            const currentDate = new Date();
            // Преобразую все данные в формат yyyy.mm.dd и записываю в переменную inputDate
		        const inputDate = new Date(year, month - 1, day);
            // Устанавливаю часы и минуты в текущее время (чтобы не было проблем с сортировкой и сравнением дат)
		        inputDate.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds()).toLocaleString('ru-RU', datePattern);
                currentDate.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds()).toLocaleString('ru-RU', datePattern);

		    if (values === 'minus') {
             //Метод MINUS
            //Проверка на ввод меньше даты чем текушая дата
                
                //Введеная дата > текушей даты или если они равны то удаляем 
				if (inputDate >= currentDate || inputDate.getTime() === currentDate.getTime()) {
					input.value = '';
				} else if (inputDate < currentDate || inputDate.getTime() != currentDate.getTime()) {
                    //datePasport0 это экземпляр класса Datepicker (datePasport0 = new AirDatepicker('#datePasport0',)
					if (datePasport0) {
						datePasport0.selectDate(inputDate);
				    }
                      
                }
                
            
            
		    } else if (values === 'plus') {
            //Метод PLUS
            //Проверка на ввод больше даты чем текушая дата
          
                //Введеная дата < текушей даты или если они равны то удаляем 
				if (inputDate <= currentDate || inputDate.getTime() === currentDate.getTime()) {
					input.value = '';
				} else if (inputDate > currentDate || inputDate.getTime() != currentDate.getTime()) {
                   //Если введеная дата > текушей даты то устанавливаем дату в инпуте
                   //datepickerModificedStart это экземпляр класса Datepicker (datepickerModificedStart = new AirDatepicker('#date__start',)
					if (datepickerModificedStart){//поменять на свой класс {
                        datepickerModificedStart.selectDate(inputDate);//поменять на свой класс 
                    }
                    
				}
			
		    } else if (values === 'modificed') {
            //Метод MODICIDED
            //Проверка на ввод больше даты чем заданная дата
          
			
                
                const firstInputInput = dateStart.value; //*Поменять на тот класс от которого будет зависеть этот input* в формате dd.mm.yyyy
                const [dayFirst, monthFirst, yearFirst] = firstInputInput.split('.');
                const firstInput = new Date(yearFirst, monthFirst - 1, dayFirst);
                firstInput.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds());

                const maxDate = new Date(firstInput);
                maxDate.setDate(maxDate.getDate() + 364);
                

				if (inputDate < firstInput || inputDate.getTime() === firstInput.getTime() || inputDate > maxDate) {
					input.value = '';
				} else {
					if ((firstInput > currentDate || firstInput.getTime() === currentDate.getTime()) && (inputDate > firstInput || inputDate.getTime() === firstInput.getTime())) {
                        //datepickerModificedEnd это экземпляр класса Datepicker (datepickerModificedEnd = new AirDatepicker('#datePasportEnd',)
						if (datepickerModificedEnd && datepickerModificedStart) {
							datepickerModificedEnd.selectDate(inputDate);

						}
                       
					}
               
					

				}
			
		    } else if (values === 'birthday') {
                //Метод BIRTHDAY
                //Проверка на 18 лет
                currentDate.setFullYear(currentDate.getFullYear() - 18);
                currentDate.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds()).toLocaleString('ru-RU', datePattern);
                if (inputDate > currentDate ) {
                    
					input.value = '';
					if (input.id === 'dateBirthday0'){
						input.placeholder = 'Страхователю должно быть не менее 18 лет'
					}else{
						input.placeholder = 'Укажите дату рождения'
					}
					
	

				} else {
						if (inputDate < currentDate || currentDate.getTime() === currentDate.getTime()) {
							if (dateBirthday0) {
								dateBirthday0.selectDate(inputDate);
							}
						}
				}
			
		    }
            if (inputDate.toString() === "Invalid Date" && typeof day != 'number' && typeof month != 'number' && typeof year != 'number') {
				input.value = '';
				return;
            }
        }else{
            if (day) {
                formattedDate += day;
    
                if (day.length === 2 && month) {
                    formattedDate += '.';
                }
            }
    
            if (month) {
                formattedDate += month;
    
                if (month.length === 2 && year) {
                    formattedDate += '.';
                }
            }
    
            if (year) {
                formattedDate += year.slice(0, 4);
            }
    
            input.value = formattedDate;
        }
	} 
    
})

}
