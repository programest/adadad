var country = document.getElementById('country');
var countryInput = document.querySelector('.mult-select-tag')
var countrySelect = document.getElementById('countrySelected')
var totalCountry = document.getElementById("total-country");
var target = document.getElementById("target");
var insuranceSum = document.getElementById("insurance__sum");
var priceNum = document.querySelector('.insurance__price-subtitle ')
var endNum = document.getElementById("itog")
var program = document.getElementById("program")
var rk = document.getElementById("RK")
var dateSelected = document.getElementById("dateSelected");
var dateStart = document.getElementById("date__start");
var dateEnd = document.getElementById("date__end");
var months = document.getElementById("months");
var sporttype = document.getElementById("sporttype");
var categorysporttype = document.getElementById("categorysporttype");

//Переменные - счетчики 
let insuranceSumMonth = 1;
let insuranceSumSportCoefficient = 1;
let TargetEducationProcent = 0;
let countryAll = []
window.results = 0;
let endresults;
let currency_select;
let tarif;
let otherCoefficient = 1;
let currency = 450.55;

if (dateStart) {
	datepickerModificedStart = new AirDatepicker('#date__start', {
		autoClose: true,
		onSelect: function (formattedDate, date) {
			console.log(dateStart.value);
			console.log(document.getElementById('date__start').value);
			maskDateInput(dateStart)
			target.removeAttribute('disabled')
			dateSelected.innerHTML = 'С' + '  ' + dateStart.value + ' ' + 'по' + ' ' + dateEnd.value;
			document.getElementById('total-dateStart').innerHTML = dateStart.value;
			if (program.value == '2') {
				// Если выбран Multi Trip:
				nextmonths()
			
			} else {
				// Если выбран Base Trip:
				dateEnd.removeAttribute('disabled')
				CalcInsuranceDays()
				dateEnd.value = ''
			}

			if (dateEnd) {

				datepickerModificedEnd = new AirDatepicker('#date__end', {
					autoClose: true,
					
					onSelect: function (formattedDate, date) {
						maskDateInput(dateEnd)
						dateSelected.innerHTML = 'С' + '  ' + dateStart.value + ' ' + 'по' + ' ' + dateEnd.value;
						document.getElementById('total-dateEnd').innerHTML = dateEnd.value;
						if (program.value == '2') {
							// Если выбран Multi Trip:


						} else {
							// Если выбран Base Trip:
							CalcInsuranceDays()
						}
						// target.removeAttribute('disabled')
						// insuranceSumSportCoefficient = 0;
						// TargetEducationProcent = 0
						// insuranceSumMonth = 0
						// target.value= ''
						// window.results = 0;
						if (target.value == 2) {
							document.querySelector('.hidden-sportype').style.display = 'none';
							document.querySelector('.hidden-sportcategory').style.display = 'none';
							document.getElementById('sporttype').removeAttribute("required");
							document.getElementById('categorysporttype').removeAttribute("required");
							target.value = ''
						} else {
							target.value = ''
						}

						endNum.innerHTML = "0" + ' ' + '₸';
						priceNum.innerHTML = "0" + ' ' + '₸';

					},

					minDate: convertDate(dateStart.value)
				})

			}
		},
		minDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
	})
}
function convertDate(dateString) {
	// if (!dateString) {
	// 	return '';
	//   }
	// Разбиваем строку на части, используя точку в качестве разделителя
	const parts = dateString.split('.');

	// Создаем новую дату в формате "yyyy.mm.dd"
	const newDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

	// Создаем объект Date с помощью новой даты
	const date = new Date(newDate);

	// Добавляем один день к дате
	date.setDate(date.getDate() + 1);

	// Получаем новые значения дня, месяца и года
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	// Форматируем дату в строку в нужном формате
	const formattedDate = `${year}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day}`;

	return formattedDate;
}


// Функция для расчета
function Calc(print) {
	
	// Print определяет вывод в консоль или нет

	
	console.log(TargetEducationProcent)
	var targetValue = target.options[target.selectedIndex].value;
	results = (insuranceSumMonth * currency) * insuranceSumSportCoefficient;
	if (targetValue == 3) {
		TargetEducationProcent = results * 20 / 100;
		results = (insuranceSumMonth * currency) * insuranceSumSportCoefficient - TargetEducationProcent;
	}
	console.log("Страховая сумма равна: " + insuranceSumMonth * currency)
	console.log('Коэфициент на тг ' + insuranceSumMonth)
	console.log("Коэфицент спортивных меорпирятий: " + insuranceSumSportCoefficient)
	console.log("Скидка студентам: " + TargetEducationProcent)
	endresults = results - (results / 100 * 15);
	results = Math.round(results * 10) / 10;
	endresults = Math.round(endresults * 10) / 10;
	let endresultsSum = new Intl.NumberFormat('ru-RU').format(Math.round(endresults)).replace('.', ',');
	let resultsSum = new Intl.NumberFormat('ru-RU').format(Math.round(results)).replace('.', ',');

	//проверка на ошибку с негативной датой со знаком минус (-)

	if (results >= 0 ) {
		//Вывод финальной даты окончания действия страхового полиса
		if (results > 500 && print ) {
			endNum.innerHTML = endresultsSum + ' ' + '₸';
			//Вывод промежуточной даты окончания действия страхового полиса
			priceNum.innerHTML = resultsSum + ' ' + '₸';
		}else{
			endNum.innerHTML = "0" + ' ' + '₸';
			priceNum.innerHTML = "0" + ' ' + '₸';
		}
		//Вывод финальной даты окончания действия страхового полиса в блок итога

	} else {
		endNum.innerHTML = 'Ошибка'
		priceNum.innerHTML = 'Ошибка'
	}
	
}

// Функция Расчета коэффициентов для выбранной опции "Спорт" 
function CalcSport() {
	console.log(targetValue)
	var sportType = document.getElementById("sporttype");
	var sportCategory = document.getElementById("categorysporttype");
	var targetValue = target.options[target.selectedIndex].value;
	var sportTypeValue = sportType.options[sportType.selectedIndex].value;
	var sportCategoryValue = sportCategory.options[sportCategory.selectedIndex].value;
	// Получаю targetValue с селекта получаю option value
	if (targetValue == '2') {
		endNum.innerHTML = "0" + ' ' + '₸';
		priceNum.innerHTML = "0" + ' ' + '₸';
		TargetEducationProcent = 0
		if (sportCategoryValue == 'kid') {

			if (sportTypeValue == 'winter') {
				insuranceSumSportCoefficient = '1.50';
			} else if (sportTypeValue == 'skies') {
				insuranceSumSportCoefficient = '2.00';
			} else if (sportTypeValue == 'diving') {
				insuranceSumSportCoefficient = '1.80';
			} else if (sportTypeValue == 'race') {
				insuranceSumSportCoefficient = '2.80';
			} else if (sportTypeValue == 'bike') {
				insuranceSumSportCoefficient = '2.00';
			} else if (sportTypeValue == 'mountain') {
				insuranceSumSportCoefficient = '2.50';
			} else if (sportTypeValue == 'game') {
				insuranceSumSportCoefficient = '1.90';
			} else if (sportTypeValue == 'athletic') {
				insuranceSumSportCoefficient = '1.60';
			} else if (sportTypeValue == 'combat') {
				insuranceSumSportCoefficient = '2.40';
			} else if (sportTypeValue == 'parachute') {
				insuranceSumSportCoefficient = '3.00';
			} else if (sportTypeValue == 'horse') {
				insuranceSumSportCoefficient = '2.00';
			} else if (sportTypeValue == 'swimming') {
				insuranceSumSportCoefficient = '1.30';
			} else if (sportTypeValue == 'other') {
				insuranceSumSportCoefficient = '1.20';
			}

			Calc(print)

		} else if (sportCategoryValue == 'professional') {

			if (sportTypeValue == 'winter') {
				insuranceSumSportCoefficient = '2.60';
			} else if (sportTypeValue == 'skies') {
				insuranceSumSportCoefficient = '4.20';
			} else if (sportTypeValue == 'diving') {
				insuranceSumSportCoefficient = '3.40';
			} else if (sportTypeValue == 'race') {
				insuranceSumSportCoefficient = '5.40';
			} else if (sportTypeValue == 'bike') {
				insuranceSumSportCoefficient = '3.60';
			} else if (sportTypeValue == 'mountain') {
				insuranceSumSportCoefficient = '5.00';
			} else if (sportTypeValue == 'game') {
				insuranceSumSportCoefficient = '2.50';
			} else if (sportTypeValue == 'athletic') {
				insuranceSumSportCoefficient = '2.30';
			} else if (sportTypeValue == 'combat') {
				insuranceSumSportCoefficient = '4.00';
			} else if (sportTypeValue == 'parachute') {
				insuranceSumSportCoefficient = '5.00';
			} else if (sportTypeValue == 'horse') {
				insuranceSumSportCoefficient = '3.00';
			} else if (sportTypeValue == 'swimming') {
				insuranceSumSportCoefficient = '2.00';
			} else if (sportTypeValue == 'other') {
				insuranceSumSportCoefficient = '1.50';
			}
			Calc(print)

		} else if (sportCategoryValue == 'invalid') {
			insuranceSumSportCoefficient = '0.50';
			
			Calc(print)

		}
	} else if (targetValue == '1') {
		console.log('1')
		insuranceSumSportCoefficient = 1;
		TargetEducationProcent = 0
		Calc(print)

	} else if (targetValue == '3') {
		
		
		console.log('3')
		insuranceSumSportCoefficient = 1;

		Calc(print)

	}

}
// Функция для автозаполнения даты окончания действия страхового полиса при тарифе Multi Trip
function nextmonths() {
	// Получаю дату и преобразую в формат DD.MM.YYYY
	var startInput = document.getElementById('date__start').value;

	var startDateParts = startInput.split('.');
	var start = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
	var start_multi = new Date(start);
	var end_multi = new Date(start);
	var next_date_unformatted = end_multi;
	document.getElementById('date__end').setAttribute('disabled', 'disabled');


	// Получаю значение с селекта получаю option value months
	var months = document.getElementById("months").value;

	if (months == "1") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '21'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '21'
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '18'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 31);
		Calc(print)
	}
	else if (months == "3") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '39'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '39'
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '33'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 92);
		Calc(print)
	}
	else if (months == "6") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '59'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '59'
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '50'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 184);
		Calc(print)
	}
	else if (months == "6p") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '90'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 184);
		Calc(print)
	}
	else if (months == "12") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '90'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 366);
		Calc(print)
	}
	else if (months == "12p") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '198'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '198'
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '162'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 366);
		Calc(print)
	}
	console.log(insuranceSumMonth)
	// Получаю дату и преобразую в формат DD.MM.YYYY

	// Преобразую
	document.getElementById("date__end").value = end_multi.toLocaleDateString();

	if (isNaN(end_multi) || startInput === (next_date_unformatted.toLocaleDateString())) {
		document.getElementById("date__end").value = "dd.mm.yyyy";
	} else { }
	// Вывожу результат в блок
	console.log(start_multi)
	if (start_multi == 'Invalid Date') {
	} else {
		dateSelected.innerHTML = 'С' + '  ' + start_multi.toLocaleDateString() + ' ' + 'по' + ' ' + end_multi.toLocaleDateString()
	}

	
}
// Функция для подсчета количества дней  при тарифе Base Trip
function CalcInsuranceDays() {
	var startDateString = document.getElementById('date__start').value;

	var startDateParts = startDateString.split(".");
	var startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
	var endDateString = document.getElementById('date__end').value;
	var endDateParts = endDateString.split(".");
	var endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

	var days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

	if (days <= '14') {
		console.log('14')
		if (insuranceSum.value == '30k') {
			if (tarif == 3) {
				insuranceSumMonth = '1.4' * days
			} else {
				insuranceSumMonth = '1.2' * days
			}
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '1.4' * days
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '1.2' * days
		}
	} else if (days >= '15' && days <= '60') {
		if (insuranceSum.value == '30k') {
			if (tarif == 3) {
				insuranceSumMonth = '1.3' * days
			} else {
				insuranceSumMonth = '1.1' * days
			}
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '1.3' * days
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '1.1' * days
		}
	} else if (days >= '61' && days <= '180') {
		if (insuranceSum.value == '30k') {
			if (tarif == 3) {
				insuranceSumMonth = '1.2' * days
			} else {
				insuranceSumMonth = '1.0' * days
			}

		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '1.2' * days
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '1.0' * days
		}
	} else if (days >= '181' && days <= '365') {
		if (insuranceSum.value == '30k') {
			if (tarif == 3) {
				insuranceSumMonth = '1.1' * days
			} else {
				insuranceSumMonth = '0.9' * days
			}
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '1.1' * days
		} else if (insuranceSum.value == '15k') {
			insuranceSumMonth = '0.9' * days
		}
	} else {
		insuranceSumMonth = '1'
	}
	Calc()
	console.log('Дней' + days)
	console.log('Коэфициент' + insuranceSumMonth)
	return days
}
// Резидент или нет
function Resident() {
	var resident = document.getElementById("country-people0");
	var residentButton = document.getElementById("RK");
	residentButton.addEventListener("change", function () {
		if (document.querySelector('.sel')){
			document.querySelector('.sel').setAttribute("selected", true);
		}
		
		if (residentButton.options[residentButton.selectedIndex].value == 1) {
			//Если резидент, то добавлять в value Казахстан и убирать возможность редактировать
			//console.log(resident)
			//resident = resident.options[resident.selectedIndex].setAttribute('data-name-lat', 'Kazakhstan')
			//resident = resident.options[resident.selectedIndex].setAttribute('data-flag-name', 'kz')
			var a = getCookie('lang')
			if (a == 'undefined') {
				get_countries('ru', 'true', '0');
			} else {
				get_countries(a, 'true', '0');
			}
		



		} else if (residentButton.options[residentButton.selectedIndex].value == 2 ) {
			
			// Удалить созданные блоки
			
		}
	});
}
Resident()
// Функция выбора программы страхования Multi Trip и Base Trip
function StartFuncSelectProgram() {
	var program = document.getElementById("program");
	var visiblyInput = document.querySelector('.hidden-month')
	var insuranceforms = document.querySelector('.insurance__forms')
	if (insuranceforms) {
		program.addEventListener("change", function () {
			if (program.value == '2') {
				// Если выбран Multi Trip:
				visiblyInput.style.display = 'block';

			} else {
				// Если выбран Base Trip:
				visiblyInput.style.display = 'none';

			}
			countrySelect.innerHTML = "Не выбрана"
			dateStart.value = ''; dateStart.setAttribute('disabled', true);
			dateEnd.value = ''; dateEnd.setAttribute('disabled', true);
			insuranceSum.value = ''; insuranceSum.setAttribute('disabled', true);
			target.value = ''; target.setAttribute('disabled', true);
			$("#country").val(0).trigger("change");
			endNum.innerHTML = "0" + ' ' + '₸';
			priceNum.innerHTML = "0" + ' ' + '₸';



		})
		target.addEventListener("click", function () {
			if (target.value == '2') {
				//Если выбрана опция Спорт, то показывать поля для выбора вида спорта и категории спортсмена
				document.querySelector('.hidden-sportype').style.display = 'block';
				document.querySelector('.hidden-sportcategory').style.display = 'block';
				document.getElementById('sporttype').setAttribute("required", true);
				document.getElementById('categorysporttype').setAttribute("required", true);

			} else {
				//Если не выбрана опция Спорт, то показывать поля для выбора вида спорта и категории спортсмена
				document.querySelector('.hidden-sportype').style.display = 'none';
				document.querySelector('.hidden-sportcategory').style.display = 'none';
				document.getElementById('sporttype').removeAttribute("required");
				document.getElementById('categorysporttype').removeAttribute("required");
			}
		})
	}


}
StartFuncSelectProgram()

document.getElementById("section1").addEventListener("change", function () {
	CalcSport()

	if (program.value == '2') {
		if (document.querySelector('.sel')){
			document.querySelector('.sel').removeAttribute("selected", false);
		}
		
		console.log(document.querySelector('.sel'))
		document.getElementById('months').setAttribute("required", true);
		// Если выбран Multi Trip:
		nextmonths()



		$('.select-country').on("change", function (e) {
			var allZone = []
			var selectedTextss = $(this).select2('data').map(function (option) {
				var zone = option.element.getAttribute('data-zone')
				if (!allZone.includes(zone)) {
					allZone.push(zone)
				}
			});
			$(this).on("select2:unselect", function (e) {
				var removedZone = e.params.data.element.getAttribute('data-zone');
				var index = allZone.indexOf(removedZone);
				if (index > -1) {
					allZone.splice(index, 1);
					console.log("Удален элемент с зоной " + removedZone);
				}

			});
			console.log(selectedTextss.length)
			if (selectedTextss.length > 1) {

				for (var item = 0; item < allZone.length; item++) {
					console.log(allZone[item])
					if (allZone.length == 1) {
						if (allZone.includes("3")) {
							tarif = "3";
							$("#15").text("15 000 $");
							$("#30").text("30 000 $");
							$("#50").text("50 000 $");
							$("#15").removeClass(" visible-sum");
							$("#30").removeClass(" visible-sum");
							$("#50").removeClass(" visible-sum");
						} if (allZone.includes("2")) {
							tarif = "2";
							$("#15").addClass(" visible-sum");
							$("#30").removeClass(" visible-sum");
							$("#50").removeClass(" visible-sum");
							$("#30").text("30 000 $");
							$("#50").text("50 000 $");
						} if (allZone.includes("1")) {
							tarif = "1";
							$("#15").removeClass(" visible-sum");
							$("#30").addClass(" visible-sum");
							$("#50").addClass(" visible-sum");
							$("#30").text("30 000 $");
							$("#50").text("50 000 $");
							$("#15").text("15 000 $");
						}
					} else {
						$("#15").addClass(" visible-sum");
						$("#30").addClass(" visible-sum");
						$("#50").removeClass(" visible-sum");

						$("#50").text("50 000 $");
					}



					// НОРМАЛЬНАЯ ЛОГИКА ДЛЯ ВЫБОРА СТРАН
					// for (var item = 0; item < allZone.length; item++) {
					// 	console.log(allZone[item])
					// 	if (allZone.includes("3")) {
					// 		tarif = "3";
					// 		$("#15").text("15 000 $");
					// 		$("#30").text("30 000 $");
					// 		$("#50").text("50 000 $");
					// 		$("#15").addClass(" visible-sum");
					// 		$("#30").addClass(" visible-sum");
					// 		$("#50").removeClass(" visible-sum");
					// 	} else if (allZone.includes("2")) {
					// 		tarif = "2";
					// 		$("#15").addClass(" visible-sum");
					// 		$("#30").addClass(" visible-sum");
					// 		$("#50").removeClass(" visible-sum");
					// 		$("#50").text("50 000 €");
					// 	} else {

					// 		tarif = "1";
					// 		$("#15").removeClass(" visible-sum");
					// 		$("#30").addClass(" visible-sum");
					// 		$("#50").addClass(" visible-sum");
					// 		$("#30").text("30 000 $");
					// 		$("#50").text("50 000 $");
					// 		$("#15").text("15 000 $");
					// 	}

					// }




					insuranceSumMonth = 1;
					insuranceSum.value = ''
					endNum.innerHTML = "0" + ' ' + '₸';
					priceNum.innerHTML = "0" + ' ' + '₸';
					Calc()



				}

			} else if (selectedTextss.length == 1) {
				var selectedTexts = $(this).select2('data').map(function (option) {
					var zone = option.element.getAttribute('data-zone')
					if (zone == "1") {

						console.log("Выбрана зона 1")
						tarif = "1";
						$("#15").removeClass(" visible-sum");
						$("#30").addClass(" visible-sum");
						$("#50").addClass(" visible-sum");
						$("#15").text("15 000 $");


					}
					else if (zone == "2") {

						console.log("Выбрана зона 2")
						tarif = "2";
						$("#15").addClass(" visible-sum");
						$("#30").removeClass(" visible-sum");
						$("#50").removeClass(" visible-sum");
						$("#30").text("30 000 €");
						$("#50").text("50 000 €");

					}
					else if (zone == "3") {

						console.log("Выбрана зона 3")

						tarif = "3";
						$("#15").text("15 000 $");
						$("#30").text("30 000 $");
						$("#50").text("50 000 $");
						$("#15").removeClass(" visible-sum");
						$("#30").removeClass(" visible-sum");
						$("#50").removeClass(" visible-sum");
					}
					insuranceSumMonth = 1;
					insuranceSum.value = ''
					Calc()
				});

			}

		})
		$('.select-country').prop('multiple', true);


	} else if (program.value == '1') {
		if (document.querySelector('.sel')){
			document.querySelector('.sel').setAttribute("selected", true);
		}

		document.getElementById('months').removeAttribute("required");
		// Если выбран Base Trip:\
		insuranceSum.addEventListener('change', function () {
			CalcInsuranceDays()
		})
		
		$('.select-country').prop('multiple', false);
		$('.select-country').select2({
			placeholder: 'Выберите страну',
			theme: "classic",
			templateSelection: formatState,
			language: {
				noResults: function () {
					return 'Результатов не найдено'; // текст для пустых результатов поиска
				},
			},

		});
		$('.select-country').on("change", function (e) {

			var selectedTexts = $(this).select2('data').map(function (option) {
				var zone = option.element.getAttribute('data-zone')
				if (zone == "1") {

					console.log("Выбрана зона 1")
					tarif = "1";
					$("#15").removeClass(" visible-sum");
					$("#30").addClass(" visible-sum");
					$("#50").addClass(" visible-sum");
					$("#15").text("15 000 $");


				}
				else if (zone == "2") {

					console.log("Выбрана зона 2")
					tarif = "2";
					$("#15").addClass(" visible-sum");
					$("#30").removeClass(" visible-sum");
					$("#50").removeClass(" visible-sum");
					$("#30").text("30 000 €");
					$("#50").text("50 000 €");

				}
				else if (zone == "3") {

					console.log("Выбрана зона 3")

					tarif = "3";
					$("#15").text("15 000 $");
					$("#30").text("30 000 $");
					$("#50").text("50 000 $");
					$("#15").removeClass(" visible-sum");
					$("#30").removeClass(" visible-sum");
					$("#50").removeClass(" visible-sum");
				}
				insuranceSumMonth = 1;
				insuranceSum.value = ''
				Calc()
			});
			endNum.innerHTML = "0" + ' ' + '₸';
			priceNum.innerHTML = "0" + ' ' + '₸';
		});
	}


	if (tarif == "1" || tarif == "3") {
		currency = "456.18"
	} else {
		currency = "501.18"
	}
})





function Logic() {
	document.getElementById("section1").addEventListener("change", function (e) {
		if (e.target == program) {
			country.removeAttribute('disabled')
		} else if (e.target == insuranceSum) {
			dateStart.removeAttribute('disabled')
		} else if (e.target == target) {
			dateStart.removeAttribute('disabled')
			rk.removeAttribute('disabled')
			months.removeAttribute('disabled')
		} else if (e.target == dateStart) {
			dateEnd.removeAttribute('disabled')
		}
	})
	//country.classList.add('sel')
	//target.classList.add('sel')
	//dateStart.classList.add('sel')
	//dateEnd.classList.add('sel')
	//months.classList.add('sel')
	//sporttype.classList.add('sel')
	//categorysporttype.classList.add('sel')
}
Logic()



function formatState(state) {

	var baseUrl = "img/flags";
	var $state = $(
		'<span><img class="img-flag" /> <span></span></span>'
	);
	//console.log(state);
	//var selectElement = document.getElementById("country"); 
	//var selectedOptions = selectElement.selectedOptions; 
	//for (var j = 0; j < selectedOptions.length; j++) {
	//    var option = selectedOptions[j];

	//    var attributes = option.getAttribute("data-name-flag")
	//    console.log(attributes)
	//    console.log(selectedOptions[j]);
	//}
	var name = $('#country option[value="' + state.id + '"]').attr('data-flag-name')
	// Use .text() instead of HTML string concatenation to avoid script injection issues
	$state.find("span").text(state.text);
	try {

		$state.find("img").attr("src", baseUrl + "/" + name + ".svg");

	} catch (err) {

		// обработка ошибки
	}
	return $state;
}
function formatStatePerson(state) {

	var baseUrl = "img/flags";
	var $state = $(
		'<span><img class="img-flag" /> <span></span></span>'
	);
	//console.log(state);
	//var selectElement = document.getElementById("country"); 
	//var selectedOptions = selectElement.selectedOptions; 
	//for (var j = 0; j < selectedOptions.length; j++) {
	//    var option = selectedOptions[j];

	//    var attributes = option.getAttribute("data-name-flag")
	//    console.log(attributes)
	//    console.log(selectedOptions[j]);
	//}

	var name = $('#country-people0 option[value="' + state.id + '"]').attr('data-flag-name')

	// Use .text() instead of HTML string concatenation to avoid script injection issues
	$state.find("span").text(state.text);
	try {

		$state.find("img").attr("src", baseUrl + "/" + name + ".svg");

	} catch (err) {

		// обработка ошибки
	}
	return $state;
}


$('.select-country').select2({
	placeholder: 'Выберите страну',
});
$('#country-people0').select2({
	placeholder: 'Выберите страну',
});
$('#country-people' + numCount).select2({
	placeholder: 'Выберите страну',
});



$('.select-country').on("change", function (e) {
	var selectedTexts = $(this).select2('data').map(function (option) {
		return option.text;
	});
	console.log(selectedTexts)
	countrySelect.innerHTML = selectedTexts.join(',  ');

});

 // Функция получения курса валют с сайта Национального Банка Казахстана
//function getRates() {
//    const url = "http://www.nationalbank.kz/rss/rates_all.xml";
//    const request = new XMLHttpRequest();
//    request.open("GET", url);
//    request.onreadystatechange = function() {
//      if (this.readyState === 4 && this.status === 200) {
//        const dataObj = this.responseXML;
//
//        const items = dataObj.getElementsByTagName("item");
//        for (let i = 0; i < items.length; i++) {
//          const item = items[i];
//          const title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
//          const pubDate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
//          const description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
//          const quant = item.getElementsByTagName("quant")[0].childNodes[0].nodeValue;
//          const index = item.getElementsByTagName("index")[0].childNodes[0].nodeValue;
//          const change = item.getElementsByTagName("change")[0].childNodes[0].nodeValue;
//
//          console.log("title: " + title);
//          console.log("pubDate: " + pubDate);
//          console.log("description: " + description);
//          console.log("quant: " + quant);
//          console.log("index: " + index);
//          console.log("change: " + change);
//        }
//      }
//    };
//
//    request.send();
//  }
//getRates()








// Функция "Добавление новых стран в список" при выбраном тарифе Multi Trip

//function AddCountryMultiTrip(){
//    if (countryInput){
//        d.innerHTML = 'Выбрать страну'
//        countryInput.addEventListener("click", function() {
//            console.log(countryAll)
//            var ListCountry = document.querySelectorAll('.item-label')
//
//            for (var i = 0; i < ListCountry.length; i++) {
//                var content = ListCountry[i].innerHTML.trim();
//                if (countryAll.includes(ListCountry[i].textContent)){
//                    console.log(countryAll)
//                }else{
//                        console.log('Объект не найден в массиве');
//                        countryAll.push(content)
//                        countrySelect.innerHTML = countryAll.join(',  ');
//                    if (countryAll.length >= '2'){
//                        console.log('Объект найден в массиве');
//                        d.setAttribute('disabled', 'true');
//                        d.innerHTML = 'Максимум 10 стран'
//                        console.log(countryAll)
//
//                    }
//                }
//                console.log(countryAll)
                //const hasDuplicates2 = new Set(countryAllName).size !== countryAllName.length;
               //const haveCommonElement = countryAllName.some(element => countryAll.includes(element));
               //console.log(haveCommonElement)
               //console.log(countryAll)
               //console.log(countryAllName)
               //if (hasDuplicates2 == false){
               //    countryAllName.push(ListCountry[i].textContent)
               //    if (haveCommonElement == false){
               //        var content = ListCountry[i].innerHTML.trim()
               //        countryAll.push(content)
               //        countrySelect.innerHTML = countryAll.join(',  ');
               //        ListCountry[i].style.display = 'none';
               //    }else if (haveCommonElement == true){
               //        ListCountry[i].style.display = 'block';
               //        var content = ListCountry[i].innerHTML.trim()
               //        countryAll.pop(content)
               //    }
               //}else{
               //    countryAllName.pop(ListCountry[i].textContent)
               //}


                //for (var j = 0; j < countryAll.length; j++) {
                //    if (countryAll[j] === ListCountry[i].textContent){
                //        console.log('asd')
                //        var content = ListCountry[i].innerHTML.trim()
                //        countryAll.pop(content)
                //        console.log('sad')
                //    }
                //    else{
                //        countrySelect.innerHTML = countryAll.join(',  ');
                //        var content = ListCountry[i].innerHTML.trim()
                //        countryAll.push(content)
                //        console.log(countryAll)
                //            if (countryAll.length >= 10) {
                //                d.setAttribute('disabled', 'true');
                //                d.innerHTML = 'Максимум 10 стран'
                //            }
                //            else{
                //                d.removeAttribute('disabled');
                //                }
                //            }
                //    }
                //}\
//           }
//        })
//    }
//}
// Функция "Добавление новых стран в список" при выбраном тарифе Base Trip
//function AddCountryBaseTrip(){
//
//    if (countryInput){
//        d.innerHTML = 'Выбрать страну'
//        countryInput.addEventListener("click", function() {
//            d.innerHTML = 'Выбрать страну'
//
//            var ListCountry = document.querySelectorAll('.item-label')
//
//            for (var i = 0; i < ListCountry.length; i++) {
//                var content = ListCountry[i].innerHTML.trim()
//                    countryAll.push(content)
//                if (countryAll.length > 1) {
//                    d.setAttribute('disabled', 'true');
//                    d.innerHTML = 'Максимум 10 стран'
//                }
//                else{
//                    d.removeAttribute('disabled');
//                    }
//
//
//
//
//
//            countrySelect.innerHTML = countryAll.join(',  ');
//
//        }
//        })
//    }
//}
