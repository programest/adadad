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
	new AirDatepicker('#date__start', {
		autoClose: true,
		onSelect: function (formattedDate, date) {
			
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
			}

			Calc()
		},
		minDate: new Date(),
	})
}
if (dateEnd) {
	new AirDatepicker('#date__end', {
		autoClose: true,
		onSelect: function (formattedDate, date) {
			
			dateSelected.innerHTML = 'С' + '  ' + dateStart.value + ' ' + 'по' + ' ' + dateEnd.value;
			document.getElementById('total-dateEnd').innerHTML = dateEnd.value;
			if (program.value == '2') {
				// Если выбран Multi Trip:


			} else {
				// Если выбран Base Trip:
				CalcInsuranceDays()
			}
			target.removeAttribute('disabled')
			Calc()
		},
		minDate: new Date(),
	})
}

// Функция для расчета
function Calc() {
	results = (insuranceSumMonth * currency) * insuranceSumSportCoefficient - TargetEducationProcent;

	console.log("Страховая сумма равна: " + insuranceSumMonth * 490.55)
	console.log('Коэфициент на тг ' + insuranceSumMonth)
	console.log("Коэфицент спортивных меорпирятий: "+ insuranceSumSportCoefficient)
	console.log("Скидка студентам: "+ TargetEducationProcent)
	results = results.toFixed(1);
	endresults = results - (results / 100 * 15);
	endresults = endresults.toFixed(1);
	let endresultsSum = new Intl.NumberFormat('ru-RU').format(endresults.replace(',', '.')).replace('.', ',');
	let resultsSum = new Intl.NumberFormat('ru-RU').format(results.replace(',', '.')).replace('.', ',');
	//проверка на ошибку с негативной датой со знаком минус (-)

	if (results >= 0) {
		//Вывод финальной даты окончания действия страхового полиса
		if (results > 500) {
			endNum.innerHTML = endresultsSum + ' ' + '₸';
			//Вывод промежуточной даты окончания действия страхового полиса
			priceNum.innerHTML = resultsSum + ' ' + '₸';
		}
		//Вывод финальной даты окончания действия страхового полиса в блок итога
		
	} else {
		endNum.innerHTML = 'Ошибка'
		priceNum.innerHTML = 'Ошибка'
	}
}
// Функция Расчета коэффициентов для выбранной опции "Спорт" 
function CalcSport() {
	var sportType = document.getElementById("sporttype");
	var sportCategory = document.getElementById("categorysporttype");
	var target = document.getElementById("target");
	var sportTypeValue = sportType.options[sportType.selectedIndex].value;
	var sportCategoryValue = sportCategory.options[sportCategory.selectedIndex].value;
	var targetValue = target.options[target.selectedIndex].value;
	// Получаю targetValue с селекта получаю option value
	if (targetValue == '2') {
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
		} else if (sportCategoryValue == 'professional') {
			insuranceSumSportCoefficient = '2';
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
		} else if (sportCategoryValue == 'invalid') {
			insuranceSumSportCoefficient = '0.50';
		}
	} else if (targetValue == '1') {
		insuranceSumSportCoefficient = 1;
		TargetEducationProcent = 0
	} else if (targetValue == '3') {
		insuranceSumSportCoefficient = 1;

		
		TargetEducationProcent = results * 20 / 100;
	}
}
// Функция для автозаполнения даты окончания действия страхового полиса при тарифе Multi Trip
function nextmonths() {
	// Получаю дату и преобразую в формат DD.MM.YYYY
	var startInput = document.getElementById('date__start');
	var startDateString = startInput.value;
	var startDateParts = startDateString.split('.');
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
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '18'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 31);
	}
	else if (months == "3") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '39'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '39'
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '33'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 92);
	}
	else if (months == "6") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '59'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '59'
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '50'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 184);
	}
	else if (months == "6p") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '90'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 184);
	}
	else if (months == "12") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '108'
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '90'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 366);
	}
	else if (months == "12p") {
		if (insuranceSum.value == '30k') {
			insuranceSumMonth = '198'
		} else if (insuranceSum.value == '50k') {
			insuranceSumMonth = '198'
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '162'
		}
		next_date_unformatted.setDate(end_multi.getDate() + 366);
	}
	console.log(insuranceSumMonth)
	// Получаю дату и преобразую в формат DD.MM.YYYY
	
	// Преобразую
	document.getElementById("date__end").value = end_multi.toLocaleDateString();
	if (isNaN(end_multi)) {
		document.getElementById("date__end").value = new Date().toLocaleDateString();
	}
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
		} else if (insuranceSum.value == '20k') {
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
		} else if (insuranceSum.value == '20k') {
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
		} else if (insuranceSum.value == '20k') {
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
		} else if (insuranceSum.value == '20k') {
			insuranceSumMonth = '0.9' * days
		}
	} else {
		insuranceSumMonth = '1'
	}
	
	console.log('Дней' + days)
	console.log('Коэфициент' + insuranceSumMonth)
	return days
}
// Резидент или нет
function Resident() {
	var resident = document.getElementById("country-people0");
	var residentButton = document.getElementById("RK");
	residentButton.addEventListener("change", function () {
		if (residentButton.options[residentButton.selectedIndex].value == 1) {
			//Если резидент, то добавлять в value Казахстан и убирать возможность редактировать
			//console.log(resident)
			//resident = resident.options[resident.selectedIndex].setAttribute('data-name-lat', 'Kazakhstan')
			//resident = resident.options[resident.selectedIndex].setAttribute('data-flag-name', 'kz')
			var options = resident.options
			for (var i = 0; i < options.length; i++) {
				if (options[1].getAttribute('data-name-lat') === 'Kazakhstan') {
					options[1].selected = true;
					console.log(options[1])
					break;
				}
			}
			var select2 = $('#country-people0')
			var newOption = new Option();
			select2.append(newOption).trigger('change');



		} else {
			// Удалить созданные блоки
			var select2 = $('#country-people0');
			select2.removeAttr('disabled'); // Сделать Select2 снова доступным для редактирования
			$('#select2-country-people0-container').html(''); // Очистить контейнер Select2
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
			document.getElementById('months').setAttribute("required", true);
			// Если выбран Multi Trip:
			nextmonths()
			var sel = document.querySelector('.sel').selected = false;
			
			var allZone = []
			$('.select-country').on("change", function (e) {

				var selectedTexts = $(this).select2('data').map(function (option) {

					var zone = option.element.getAttribute('data-zone')
					console.log(zone)

					if (zone == "1") {
						allZone.push('1')

						tarif = "1";
						$("#20").addClass(" visible-sum");
						$("#30").addClass(" visible-sum");
						$("#50").removeClass(" visible-sum");
						$("#30").text("30 000 €");
						$("#50").text("50 000 €");
					}
					else if (zone == "2") {
						allZone.push('2')

						tarif = "2";
						$("#20").removeClass(" visible-sum");
						$("#30").addClass(" visible-sum");
						$("#50").addClass(" visible-sum");
						$("#50").text("50 000 €");

					}
					else if (zone == "3") {
						allZone.push('3')

						tarif = "3";
						$("#20").text("20 000 $");
						$("#30").text("30 000 $");
						$("#50").text("50 000 $");
						$("#20").addClass(" visible-sum");
						$("#30").addClass(" visible-sum");
						$("#50").removeClass(" visible-sum");
					}
					insuranceSumMonth = 1;
					insuranceSum.value = ''
					Calc()
					console.log(allZone)
				});
			});

		} else if (program.value == '1') {
			document.getElementById('months').removeAttribute("required");
			// Если выбран Base Trip:
			CalcInsuranceDays()
			$('.select-country').select2({
				multiple: false,
				placeholder: 'Выберите страну',
				theme: "classic",
				templateSelection: formatState,
				language: {
					noResults: function () {
						return 'Результатов не найдено'; // текст для пустых результатов поиска
					},
				},

			});

			if (document.querySelector('.select2-selection__rendered').title == 'Выберите страну') {
				document.querySelector('.img-flag').style.display = 'none';
			}
			$('.select-country').on("change", function (e) {

				var selectedTexts = $(this).select2('data').map(function (option) {
					var zone = option.element.getAttribute('data-zone')
					if (zone == "1") {

						console.log("Выбрана зона 1")
						tarif = "1";
						$("#20").addClass(" visible-sum");
						$("#30").removeClass(" visible-sum");
						$("#50").removeClass(" visible-sum");
						$("#30").text("30 000 €");
						$("#50").text("50 000 €");

					}
					else if (zone == "2") {

						console.log("Выбрана зона 2")
						tarif = "2";
						$("#20").removeClass(" visible-sum");
						$("#30").addClass(" visible-sum");
						$("#50").addClass(" visible-sum");
						$("#50").text("20 000 €");

					}
					else if (zone == "3") {

						console.log("Выбрана зона 3")

						tarif = "3";
						$("#20").text("20 000 $");
						$("#30").text("30 000 $");
						$("#50").text("50 000 $");
						$("#20").removeClass(" visible-sum");
						$("#30").removeClass(" visible-sum");
						$("#50").removeClass(" visible-sum");
					}
					insuranceSumMonth = 1;
					insuranceSum.value = ''
					Calc()
				});
			});

		}
		if (tarif == "2" || tarif == "3") {
			currency = "494.89"
		} else {
			currency = "450.55"
		}
		Calc()
	})

function Logic() {
	document.getElementById("section1").addEventListener("change", function (e) {
		console.log(e.target)
		if (e.target == program) {
			country.removeAttribute('disabled')
		} else if (e.target == insuranceSum) {
			dateStart.removeAttribute('disabled')
		} else if (e.target == target) {
			dateStart.removeAttribute('disabled')
			rk.removeAttribute('disabled')
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

	var baseUrl = "/img/flags";
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

	var baseUrl = "/img/flags";
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
