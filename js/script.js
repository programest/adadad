let blockCount = 1;
let numCount = 0;
var needle = "";
var block;
var form = document.querySelector('.needs-validation2')
const addsValidation = document.querySelector('.needs-validation-addblock')
window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader')
	if (preloader) {
		preloader.classList.add('preloader_hidden')
	}

})
const anchors = document.querySelectorAll('a[href*="#"]')
if (anchors) {
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
		
			const blockID = anchor.getAttribute('href').substr(1)
		
			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
	}
function show() {
	var a = document.getElementById("pwd");
	var b = document.getElementById("eye");
	if (a.type == "password") {
		a.type = "text";
		b.src = "/img/eye_hide.svg";
	} else {
		a.type = "password";
		b.src = "/img/eye_show.svg";
	}
}

document.addEventListener("DOMContentLoaded", (function () {
	var phoneInputs = document.querySelectorAll("input[data-tel-input]");
	var getInputNumbersValue = function (input) {
		return input.value.replace(/\D/g, "");
	};
	var onPhonePaste = function (e) {
		var input = e.target, inputNumbersValue = getInputNumbersValue(input);
		var pasted = e.clipboardData || window.clipboardData;
		if (pasted) {
			var pastedText = pasted.getData("Text");
			if (/\D/g.test(pastedText)) {
				input.value = inputNumbersValue;
				return;
			}
		}
	};
	var onPhoneInput = function (e) {
		var input = e.target, inputNumbersValue = getInputNumbersValue(input), selectionStart = input.selectionStart, formattedInputValue = "";
		if (!inputNumbersValue) return input.value = "";
		if (input.value.length != selectionStart) {
			if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
			return;
		}
		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			if ("9" == inputNumbersValue[0]) inputNumbersValue = "7" + inputNumbersValue;
			var firstSymbols = "8" == inputNumbersValue[0] ? "8" : "+7";
			formattedInputValue = input.value = firstSymbols + " ";
			if (inputNumbersValue.length > 1) formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
			if (inputNumbersValue.length >= 5) formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
			if (inputNumbersValue.length >= 8) formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
			if (inputNumbersValue.length >= 10) formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
		} else formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
		input.value = formattedInputValue;
	};
	var onPhoneKeyDown = function (e) {
		var inputValue = e.target.value.replace(/\D/g, "");
		if (8 == e.keyCode && 1 == inputValue.length) e.target.value = "";
	};
	for (var phoneInput of phoneInputs) {
		phoneInput.addEventListener("keydown", onPhoneKeyDown);
		phoneInput.addEventListener("input", onPhoneInput, false);
		phoneInput.addEventListener("paste", onPhonePaste, false);
	}

}));

var dateBirthday = document.getElementById("dateBirthday0");
var datePasport = document.getElementById("datePasportStart0");
var dateSelected = document.getElementById("dateSelected");
var dates = document.querySelectorAll('.dates__form')


var MyAlert = document.querySelector('.toast')
if (MyAlert) {
	var BsAlert = new bootstrap.Toast(MyAlert)
}



if (dateBirthday) {
	new AirDatepicker('#dateBirthday0', {
		autoClose: true,
		maxDate: new Date(),
	})
}
if (datePasport) {
	new AirDatepicker('#datePasportStart0', {
		autoClose: true,


	})
}
var buttonReplace = document.querySelector('.insurance__button');
var buttonReplaceSecondSection = document.querySelector('.insurance__button-second-section');
var block1 = document.querySelector('.block__insurance-form1');
var block2 = document.querySelector('.block__insurance-form2');
var block3 = document.querySelector('.block__insurance-form3');


function Pages() {

	if (buttonReplace) {


		document.querySelector('.back').addEventListener("click", function () {
			block2.style.display = 'block';
			block3.style.display = 'none';
		})
	}


}
Pages()

var x = 1;
var ccInsurance = document.querySelector('.tourist-block')
var infpPerson = document.querySelectorAll('.infoperson')
var infpPerson = document.querySelectorAll('.infoperson')
if (document.querySelector('.puy')) {
	document.querySelector('.puy').addEventListener('click', function () {
		var otherPeople = 0;
		var attributes = document.querySelectorAll('.datebirthday')
		//attributes.forEach(function(item){
		//    otherPeople += Number(item.getAttribute('data-other'));
		//    otherCoefficient = otherPeople;
		//    Calc()
		//})
		for (let i = 0; i < attributes.length; i++) {
			otherPeople += Number(attributes[i].getAttribute('data-other'));
			otherCoefficient = otherPeople;
			console.log(otherCoefficient)
			Calc()
		}

		//addBlockToItog(numCount)
		//var allID = document.querySelectorAll('.changeid')

		//for (let elem of allID) {
		//    var dataAtr = elem.getAttribute('data-itog')
		//    console.log(dataAtr + ' ' + elem.value)

		//    addTextToItogBlock(dataAtr , elem.value, needle, numCount)
		//}

		// collectMainInfoForInsurance()
		collectSubInsurance()
	})
}
var nm = document.querySelector('.add-classlist')
var checkbox = document.getElementById("uniqueID");
if (checkbox) {
	checkbox.onchange = function () {
	if (this.checked) {
		console.log('asds')
		nm.classList.add('insurance-block-add-subinsurance')

	} else {

		console.log('asd')
		nm.classList.remove('insurance-block-add-subinsurance')

	}
	console.log(nm)
	};
}
function collectSubInsurance() {
	const selectedOption = document.querySelector('#country-people0');
	const placeOfBirth = selectedOption.options[selectedOption.selectedIndex].textContent;
	var OptimizadedName = ClearInputNameLastName(document.getElementById('Name0').value)
	document.getElementById('itog-name-insuarance').innerHTML = OptimizadedName
	document.getElementById('itog-phone').innerHTML = document.getElementById('Phone0').value
	document.getElementById('itog-iin-insuarance').innerHTML = document.getElementById('IIN0').value
	document.getElementById('itog-pasport').innerHTML = document.getElementById('pasport0').value
	document.getElementById('itog-datebirtghday-insuarance').innerHTML = document.getElementById('dateBirthday0').value
	document.getElementById('itog-datebirtghday').innerHTML = placeOfBirth
	document.getElementById('itog-adress').innerHTML = document.getElementById('adress0').value
}



















//Автоматический перевод


let ru = document.getElementById('ru');
let en = document.getElementById('en');

function coook(a) {
	let cookie = setCookie('lang', a)
}

var changeLocaleService = (function () {
	var locale;

	function loadLocale(defLang) {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", 'lang.json', true);
		xhr.onreadystatechange = saveLocale.bind(this);
		xhr.onerror = function () { console.log("no found page"); };
		xhr.send();
		let cookie = getCookie('lang')

		function saveLocale() {
			if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
				locale = JSON.parse(xhr.responseText);
				console.log("locale loaded");
				if (defLang) changeLocale(defLang);
				if (cookie === 'kz') {
					changeLocale('kz')
					document.querySelector('.nav__dropdown-flag').src = 'img/kz.png'
					document.querySelector('.nav__dropdown-text').innerHTML = 'Қазақша'
				} else if (cookie === 'ru') {
					changeLocale('ru')

				} else if (cookie === 'en') {
					changeLocale('en')
					document.querySelector('.nav__dropdown-flag').src = 'img/en.png'
					document.querySelector('.nav__dropdown-text').innerHTML = 'English'
				} else {
					changeLocale('ru')

				}
			}
		}
	}

	function changeLocale(lang) {
		if (!locale[lang]) return console.log("no found language");
		else changeText('locale', locale[lang]);

		function changeText(name, object, startIndex) {
			for (key in object)
				if (Array.isArray(object[key]) && typeof object[key] != 'string' && typeof object[key][0] == 'string') getArrayText(key, object, name);
				else if (typeof object[key] == "object") {
					if (isNaN(key)) changeText(name + "-" + key, object[key]);
					else changeText(name, object[key], key);
				}
				else getText(key, object, name, startIndex);
		}
		function getText(key, object, name, startIndex) {
			var elementKey = 0;
			if (startIndex) elementKey = startIndex;

			for (; elementKey < document.getElementsByClassName(name + "-" + key).length; elementKey++)
				if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key];

		}
		function getArrayText(key, object, name, startIndex) {
			var elementKey = 0;
			if (startIndex) elementKey = startIndex;

			for (; elementKey < document.getElementsByClassName(name + "-" + key).length; elementKey++)
				if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key][elementKey % object[key].length];
		}

	}

	return {
		loadLocale: loadLocale,
		changeLocale: changeLocale
	}
})();





//Google Translate


const googleTranslateConfig = {
	/* Original language */
	lang: "ru",
	/* The language we translate into on the first visit*/
	/* Язык, на который переводим при первом посещении */
	// langFirstVisit: 'en',
	/* Если скрипт не работает на поддомене, 
	раскомментируйте и
	укажите основной домен в свойстве domain */
	/* domain: "Get-Web.Site" */
};
document.addEventListener("DOMContentLoaded", (event) => {
	/* Подключаем виджет google translate */
	/* Connecting the google translate widget */
	let script = document.createElement("script");
	script.src = `//translate.google.com/translate_a/element.js?cb=TranslateWidgetIsLoaded`;
	document.getElementsByTagName("head")[0].appendChild(script);
});

function TranslateWidgetIsLoaded() {
	TranslateInit(googleTranslateConfig);
}
function TranslateInit() {

	if (googleTranslateConfig.langFirstVisit && !Cookies.get('googtrans')) {
		// Если установлен язык перевода для первого посещения и куки не назначены
		TranslateCookieHandler("/auto/" + googleTranslateConfig.langFirstVisit);
	}

	let code = TranslateGetCode();
	// Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
	if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
		document.querySelector('[data-google-lang="' + code + '"]').classList.add('language__img_active');
	}

	if (code == googleTranslateConfig.lang) {
		// Если язык по умолчанию, совпадает с языком на который переводим
		// То очищаем куки
		TranslateCookieHandler(null, googleTranslateConfig.domain);
	}

	// Инициализируем виджет с языком по умолчанию
	new google.translate.TranslateElement({
		pageLanguage: googleTranslateConfig.lang,
	});
	// Вешаем событие  клик на флаги
	TranslateEventHandler('click', '[data-google-lang]', function (e) {
		TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), googleTranslateConfig.domain);
		// Перезагружаем страницу
		window.location.reload();
	});
}

function TranslateGetCode() {
	// Если куки нет, то передаем дефолтный язык
	let lang = (Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != "null") ? Cookies.get('googtrans') : googleTranslateConfig.lang;
	return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
	// Записываем куки /язык_который_переводим/язык_на_который_переводим
	Cookies.set('googtrans', val);
	Cookies.set("googtrans", val, {
		domain: "." + document.domain,
	});

	if (domain == "undefined") return;
	// записываем куки для домена, если он назначен в конфиге
	Cookies.set("googtrans", val, {
		domain: domain,
	});

	Cookies.set("googtrans", val, {
		domain: "." + domain,
	});
}

function TranslateEventHandler(event, selector, handler) {
	document.addEventListener(event, function (e) {
		let el = e.target.closest(selector);
		if (el) handler(el);
	});
}


if (document.querySelector(".sub-forms")){
	document.querySelector(".sub-forms").addEventListener("click", function (e) {
		const inputs = document.querySelectorAll('input[type="file"]');
		const output = document.querySelector('.file-text');
	
		inputs.forEach((input) => {
	
			input.addEventListener('change', async (event) => {
	
				const files = event.target.files;
	
				for (let i = 0; i < files.length; i++) {
					const file = files[i];
	
					try {
						const response = await fetch('/upload', {
							method: 'POST',
							body: file
						});
	
						if (response.ok) {
							output.textContent = `Загружено ${i} из ${files.length} файлов`;
						}
					} catch (error) {
						console.error(error);
					}
				}
			});
		});
	});
}




if (document.getElementById("country")) {
	$('.select-country').on("change", function (e) {
		var selectedTexts = $(this).select2('data').map(function (option) {
			return option.text;
		});
		var selectElement = document.getElementById("country");

		xml(selectElement)

	})
}
if (document.getElementById("country")) {
	$('#country-people0').on("change", function (e) {
		var selectElementSecond = document.getElementById("country-people0");
		xml(selectElementSecond)
	})
}
$("#select2-country-container").on("change", function () {
	if ($(this).val() !== "") {
		$(this).parent().removeClass("is-invalid").addClass("is-valid");
	} else {
		$(this).parent().removeClass("is-valid").addClass("is-invalid");
	}
});
function xml(selectElement) {

	var selectedOptions = selectElement.selectedOptions;

	var req = new XMLHttpRequest();

	req.overrideMimeType("application/json");
	req.open('GET', 'flag.json', true);
	req.onload = function () {
		var jsonResponse = JSON.parse(req.responseText);

		for (var i = 0; i < jsonResponse.length; i++) {
			for (var j = 0; j < selectedOptions.length; j++) {

				var option = selectedOptions[j];
				var attributes = option.getAttribute("data-name-lat")
				needle = attributes
				if (jsonResponse[i].name == needle) {
					console.log(`Нашел ${needle}`);
					selectedOptions[j].setAttribute("data-flag-name", jsonResponse[i].code);

					document.getElementById("insurance__sum").removeAttribute('disabled')
					$('.select-country').select2({
						maximumSelectionLength: 10,
						templateSelection: formatState,

						language: {
							noResults: function () {
								return 'Результатов не найдено'; // текст для пустых результатов поиска
							},
							maximumSelected: function () {
								return 'Вы можете выбрать только 10 элементов'; // текст для превышения максимального количества выбранных элементов
							}
						}
					});
					$('#country-people0').select2({
						placeholder: "Выберите страну",
						templateSelection: formatStatePerson,
						language: {
							noResults: function () {
								return 'Результатов не найдено'; // текст для пустых результатов поиска
							},
							maximumSelected: function () {
								return 'Вы можете выбрать только 10 элементов'; // текст для превышения максимального количества выбранных элементов
							}
						}
					});
					$('#country-people' + numCount).select2({
						placeholder: "Выберите страну",
						templateSelection: formatStateInsurancePeople,
						language: {
							noResults: function () {
								return 'Результатов не найдено'; // текст для пустых результатов поиска
							},
							maximumSelected: function () {
								return 'Вы можете выбрать только 10 элементов'; // текст для превышения максимального количества выбранных элементов
							}
						}
					});
					break;
				}
			}

		}
	}
	req.send(null);
}
const addButton = document.getElementById('add-button');
const container = document.querySelector('.insurance-block-add')
const addButtonContainer = document.querySelector('.form__add-people-block')
const childaddButtonContainer = document.querySelector('.form__action-people')


function Add() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', '/fd.html', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200 && blockCount <= 5) {
			const newBlock = document.createElement('div');
			newBlock.innerHTML = xhr.responseText.trim();
			newBlock.setAttribute('class', 'block');
			container.appendChild(newBlock);
			var n = newBlock.querySelectorAll('.changeid')
			console.log('sad')
			block = newBlock.querySelectorAll('.needs-validation-addblock');

			for (let i = 0; i < n.length; i++) {
				var motg = n[i].id.slice(0, -1)
				n[i].setAttribute('id', `${motg}${blockCount}`)
				console.log('Инициализированно')

				new AirDatepicker('#dateBirthday' + blockCount, {
					autoClose: true,
					
					onSelect: function (formattedDate, date) {
						var ininput = formattedDate.datepicker.$el
						console.log(ininput)
						OtherCoficent(ininput);
						

					},
					maxDate: new Date(),

				});
				new AirDatepicker('#datePasportStart' + blockCount, {
					autoClose: true,
					
					
					
					maxDate: new Date(),

				});
			}
			const blockNumber = newBlock.querySelector('.number');
			blockNumber.textContent = blockCount;
			blockCount++;
			numCount++;
			console.log(numCount)
			console.log(blockCount)
			$('#country-people' + numCount).select2({
				placeholder: "Выберите страну",
				templateSelection: formatStateInsurancePeople,
				language: {
					noResults: function () {
						return 'Результатов не найдено'; // текст для пустых результатов поиска
					},
					maximumSelected: function () {
						return 'Вы можете выбрать только 10 элементов'; // текст для превышения максимального количества выбранных элементов
					}
				}
			});
			$('#country-people' + numCount).on("change", function (e) {
				console.log('change');
				var selectElementThree = document.getElementById("country-people" + numCount);
				xml(selectElementThree)
			})


		} else if (blockCount > 5) {
			var toastBody = document.querySelector('.toast-body')
			toastBody.innerHTML = 'Не может быть больше 5 туристов '
			BsAlert.show();
		}
	};

	xhr.send();


}
function RemovePeoples() {
	const blocks = document.querySelectorAll('.block');
	const lastBlock = blocks[blocks.length - 1];
	container.removeChild(lastBlock);
	blockCount--;
	numCount--;
	otherCoefficient = 1;
	if (blocks.length > 1) {
		block = blocks[blocks.length - 2] ? blocks[blocks.length - 2].querySelectorAll('.needs-validation-addblock') : null;
	} else {
		block = undefined
	}
}

let isBlockAdded = false;

function AddPeoples() {

	if (!isBlockAdded) {
		if (!isBlockAdded) {
			Add();
			console.log(block);
			isBlockAdded = true;


		} else {
			console.log('Не валидно');
		}
	} else if (isBlockAdded) {
		console.log(block);
		console.log('Блок уже добавлен');
		if (block === undefined) {
			Add();
		}
		for (let i = 0; i < block.length; i++) {
			block[i].classList.add('was-validated');
			console.log(block[i - 1])
			if (block[i].checkValidity()) {
				console.log('Проходит валидацию')
				Add();
	
			} else {
				console.log(document.getElementById('kostil'))
				
				console.log('Не проходит валидацию')

			}
		}
	}
}









function formatStateInsurancePeople(state) {
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
	var name = $('#country-people' + numCount + ' option[value="' + state.id + '"]').attr('data-flag-name');
	// Use .text() instead of HTML string concatenation to avoid script injection issues
	$state.find("span").text(state.text);
	try {

		$state.find("img").attr("src", baseUrl + "/" + name + ".svg");

	} catch (err) {

		// обработка ошибки
	}
	return $state;
}


var days = 0;



function OtherCoficent(a) {
	var today = new Date();
	var birthday = new Date(Date.parse(document.getElementById('dateBirthday' + numCount).value));

	var millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
	var resultDate = (today.getTime() - birthday.getTime()) / millisecondsPerYear;
	days = Math.floor(resultDate);
	console.log(resultDate)
	if (resultDate >= 65 && resultDate <= 75) {
		a.setAttribute('data-other', 3);
	} else if (resultDate > 75) {
		a.setAttribute('data-other', 6);
	} else if (resultDate <= 3) {
		a.setAttribute('data-other', 3);
	}
}





(function () {
	'use strict'

	// Получите ссылку на кнопку
	var button = document.querySelector('.some-block-polis');
	if (button){
// Добавьте обработчик событий на кнопку
button.addEventListener('click', function (event) {
	// Получите ссылку на форму, связанную с кнопкой
	var item = document.querySelector('.needs-validation')
	console.log(results)
	// Проверьте форму на валидность
	if (item.checkValidity() && results >= 500) {
		block2.style.display = 'flex';
		block1.style.display = 'none';
	} else {
		event.preventDefault();
		event.stopPropagation();
		console.log('Не валидно');
	}

	// Добавьте класс 'was-validated' к форме
	item.classList.add('was-validated');
}, false);
	}
	

})();





// function getFormData(formSelector1, formSelector2) {
// 	console.log('getFormData');
// 	console.log(formSelector1);
// 	console.log(formSelector2);
// 	const forms = [document.querySelector(formSelector1), document.querySelector(formSelector2)];
// 	const result = [];
  
// 	forms.forEach(form => {
// 	  const formData = new FormData(form);
// 	  const newFormData = new FormData();
  
// 	  for (let [name, value] of formData.entries()) {
// 		const element = form.querySelector(`[name="${name}"]`);
// 		console.log(element);
// 		const selectedIndex = element.selectedIndex;
// 		const selectedOption = element.options[selectedIndex];
// 		if (selectedOption !== undefined && selectedOption.hasAttribute('data-responce')) {
// 		  const dataResponse = selectedOption.getAttribute('data-responce');
// 		  console.log(`Name: ${name}, Data-Response: ${dataResponse}`);
// 		  // ваш код для выполнения при наличии атрибута data-responce
// 		  newFormData.append(name, dataResponse);
  
// 		} else if (element.getAttribute('data-responce-list-people')) {
// 		  console.log(value)
// 		  const insuredList = [
// 			{
// 			  fname: 'aaa',
// 			  age: 24,
// 			},
// 			{
// 			  fname: 'bbb',
// 			  age: 25,
// 			},
// 		  ];
// 		  newFormData.append('insured_list', JSON.stringify(insuredList));
// 		} else {
// 		  console.log(`Name: ${name}`);
// 		  // ваш код для выполнения при отсутствии атрибута data-responce или элемента selectedOption
  
// 		  newFormData.append(name, value);
// 		}
// 	  }
// 	  const json = JSON.stringify(Object.fromEntries(newFormData.entries()));
// 	  result.push(JSON.parse(json));
// 	  console.log(result);
// 	});
  
// 	return result;
//   }
  

// const insuredList = [];
// function getFormData(formSelector1, formSelector2) {

//   console.log('getFormData');
//   console.log(formSelector1);
//   console.log(formSelector2);
//   const forms = [document.querySelector(formSelector1), document.querySelector(formSelector2)];
//   const newFormData = new FormData();

//   forms.forEach(form => {
//     const formData = new FormData(form);
//     for (let [name, value] of formData.entries()) {
//       const element = form.querySelector(`[name="${name}"]`);
//       console.log(element);
//       if (element.tagName === 'SELECT') {
//         const selectedIndex = element.selectedIndex;
//         const selectedOption = element.options[selectedIndex];
//         if (selectedOption !== undefined && selectedOption.hasAttribute('data-responce')) {
//           const dataResponse = selectedOption.getAttribute('data-responce');
//           console.log(`Name: ${name}, Data-Response: ${dataResponse}`);
//           newFormData.append(name, dataResponse);
//         } else {
//           console.log(`Name: ${name}`);
//           newFormData.append(name, 0);
//         }
//       } 
	  
	
	
//     } 
//   });
 
  

  
//   const insuredListName = document.getElementById('dateBirthday0').value
//   const insuredListBirthday = document.getElementById('insurance__name-list').value;
//   const diffDays = dateCouf(insuredListName);
//   console.log(diffDays);
//   insuredList.push({'fname': insuredListBirthday}, {'age': diffDays});


	


//   console.log(document.getElementById('date__start').value);
//   const days = CalcInsuranceDays();
//   newFormData.append('days', days);
//   newFormData.append('discount', 0);
//   const insurant = {
// 	"FirstName": "Адиль"
//   };
//   newFormData.append('insured_list', JSON.stringify(insuredList));
//   newFormData.append('insurant', JSON.stringify(insurant));
 
//   console.log(newFormData);



 

// }



(function () {
	'use strict'

	// Получите ссылку на кнопку
	var button = document.querySelector('.puy');
	// Добавьте обработчик событий на кнопку
	
		form.addEventListener('change', function () {
			button.classList.toggle('active-btn', form.checkValidity());
	
		});
	
	
	button.addEventListener('click', function (event) {
		
		if (block) {
			block.forEach(function (item) {
				// Получите ссылку на форму, связанную с кнопкой
				if (form.checkValidity() && item.checkValidity()){
					
					block2.style.display = 'none';
					block3.style.display = 'block';
				} else {
					
					
					event.preventDefault();
					event.stopPropagation();
					console.log('Не валидно');
				}
			})
		} else {
			if (form.checkValidity()) {
				block2.style.display = 'none';
				block3.style.display = 'block';
				append()
			} else {
				
				event.preventDefault();
				event.stopPropagation();
				console.log('Не валидно');
			}
		}

		form.classList.add('was-validated');
	}, false);
	
})();




















function append(){
	console.log('append');
	var obj = {
		"insurance_summ": selecta('insurance__sum'),
		"months": selecta('months'),
		"program": selecta('program'),
		"purpose": selecta('target'),
		"sport_type": selecta('sporttype'),
		"sport_category": selecta('categorysporttype'),
		"discount": 0,
		"country_zone": selectaInZone('country'),
		"date_start": document.getElementById('date__start').value,
		"date_end": document.getElementById('date__end').value,
		"insurant": {
			"FirstName": document.getElementById('Name0').value,
			"LastName": document.getElementById('LastName0').value,
			"IIN": document.getElementById('IIN0').value,
			"Passport": document.getElementById('pasport0').value,
			"DOB": document.getElementById('dateBirthday0').value,
			"PassportDate": document.getElementById('datePasportStart0').value,
			"ResidentCountry": selectaInCountry('country-people0'),
			"Phone": document.getElementById('Phone0').value,
			"Address": document.getElementById('adress0').value
		},
		
		"insured_list": []
	}
	//Цикл для  добавления всех застрахованных в OBJ
	var allBlock = document.querySelectorAll('.block')
	if (checkbox.checked) {
		console.log('checked');
		for (var i = 0; i <= allBlock.length; i++) {		
			var lname = document.getElementById('LastName'+ [i]).value;
			var pasport = document.getElementById('pasport'+ [i]).value;
			var iin = document.getElementById('IIN'+ [i]).value;
			var phone = document.getElementById('Phone'+ [i]).value;
			var fname = document.getElementById('Name'+ [i]).value;
			var dob = document.getElementById('dateBirthday'+ [i]).value;
			var age =  calculateAgeInYears(document.getElementById('dateBirthday'+ [i]).value)
			var PassportDate = document.getElementById('datePasportStart'+ [i]).value;
			var country = selectaInCountry('country-people'+ [i])
			console.log(i);
			obj.insured_list.push({"FirstName": fname, "LastName": lname, "IIN": iin, "Passport": pasport, "DOB": dob, "PassportDate": PassportDate, "ResidentCountry": country, "Phone": phone,  "age": age})
		}
	} else {
		console.log('unchecked');
		if (allBlock.length >=1	) {
			for (var i = 1; i <= allBlock.length; i++) {	
				var lname = document.getElementById('LastName'+ [i]).value;
				var pasport = document.getElementById('pasport'+ [i]).value;
				var iin = document.getElementById('IIN'+ [i]).value;
				var phone = document.getElementById('Phone'+ [i]).value;
				var fname = document.getElementById('Name'+ [i]).value;
				var dob = document.getElementById('dateBirthday'+ [i]).value;
				var age =  calculateAgeInYears(document.getElementById('dateBirthday'+ [i]).value)
				var PassportDate = document.getElementById('datePasportStart'+ [i]).value;
				var country = selectaInCountry('country-people'+ [i])
				console.log(i);
				obj.insured_list.push({"FirstName": fname, "LastName": lname, "IIN": iin, "Passport": pasport, "DOB": dob, "PassportDate": PassportDate, "ResidentCountry": country, "Phone": phone,  "age": age})
			}
		}else{
			obj.insured_list = ""
		}
	
	}
	var linkPay = document.getElementById('payment')
	var residentButton = document.getElementById("RK");
	if (residentButton.options[residentButton.selectedIndex].value == 1) {
		obj.isresident = "1";
		document.querySelector('.message-total').style.display = 'none';
		linkPay.innerHTML = "Оплатить";
		linkPay.href = "https://www.sberbank.kz/ru/person/credit_cards/credit_cards/credit_cards_for_individuals/visa_gold";
	}else{
		obj.isresident = "2";
		document.querySelector('.message-total').style.display = 'flex';
		
	}
	//Добавление стран
	var selectedOptions = $('#country').select2('data');
	obj.territory = [];

	var ter = [];
	selectedOptions.forEach(function(option) {
	  var atributes = option.element.getAttribute('data-name-lat');
	  ter.push(atributes);
	});

	if (ter.length > 1){
	  obj.territory = ter.map(function(item) {
	    return item;
	  });
	} else {
	  obj.territory = [ter[0]];
	}



	

	var days = calculateDaysDiff(document.getElementById('date__start').value, document.getElementById('date__end').value);
	var age = calculateAgeInYears(document.getElementById('dateBirthday0').value)
	obj.days = days;
	obj.insurant.age = age;

	fetch("http://10.2.5.16/dmsajax/test.php", {
	  method: 'POST',
	  body: JSON.stringify(obj)
	})
	.then(response => response.json())
	.then(convert)
	.catch(error => console.error(error));
}
//Считает разницу в днях между датами
function calculateDaysDiff(dateString1, dateString2) {
	console.log(dateString1);
	console.log(dateString2);
	const parts = dateString1.split('.');
	const dateStrings1 = `${parts[2]}-${parts[1]}-${parts[0]}`;
	const parts2 = dateString2.split('.');
	const dateStrings2 = `${parts2[2]}-${parts2[1]}-${parts2[0]}`;
	const date1 = new Date(dateStrings1);
	const date2 = new Date(dateStrings2);
	const oneDay = 1000 * 60 * 60 * 24; // 1 день в миллисекундах
	const daysDiff = Math.abs(Math.round((date2 - date1) / oneDay));
	return daysDiff;
}
//Считает разницу в Годах между датами
function calculateAgeInYears(dateString) {
	const parts = dateString.split('.');
	const dateStrings = `${parts[2]}-${parts[1]}-${parts[0]}`;
	
	const today = new Date();
	const birthDate = new Date(dateStrings);
	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();
  
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
	  age--;
	}
  
	return age;
}
//Функция для получения атрибута data-responce
function selecta(selectElement) {
	var sel = document.getElementById(selectElement);
	var selectedOption = sel.options[sel.selectedIndex];
	if (selectedOption == null || selectedOption.getAttribute('data-responce') == null) {
	  return 0;
	}
	var hh = selectedOption.getAttribute('data-responce');
	return hh;
}
 //Функция для получения атрибута data-name-lat
function selectaInCountry(selectElement) {
	var sel = document.getElementById(selectElement);
	var selectedOption = sel.options[sel.selectedIndex];
	if (selectedOption == null || selectedOption.getAttribute('data-name-lat') == null) {
	  return 0;
	}
	var hh = selectedOption.getAttribute('data-name-lat');
	return hh;
}

 //Функция для получения атрибута data-zone

 function selectaInZone(selectElement) {
	var sel = document.getElementById(selectElement);
	var selectedOption = sel.options[sel.selectedIndex];
	if (selectedOption == null || selectedOption.getAttribute('data-zone') == null) {
	  return 0;
	}
	var hh = selectedOption.getAttribute('data-zone');
	return hh;
}

// fetch("http://10.2.5.16/dmsajax/test.php", {
// 	  method: 'POST',
// 	  body: `{
// 		"insurance_summ":"20000",
// 		"months":0,
// 		"program":"base",
// 		"days":2,
// 		"purpose": "Tourism",
// 		"sport_type":"",
// 		"sport_category":"",
// 		"country_zone":2,
// 		"date_start":"17.04.2023",
// 		"date_end":"16.04.2024",
// 		"insurant":{
// 			"FirstName": "Adil",
// 			"LastName": "Miyermanov",
// 			"IIN": "777777777777",
// 			"Passport":"AA123456789",
// 			"DOB":"01.01.2004",
// 			"PassportDate":"01.01.2020",
// 			"ResidentCountry":"Kazakhstan",
// 			"Phone":"77777777777",
// 			"Address":"Almaty Nazarbayev ave 269"
// 		},
// 		"territory" : ["Australia", "Austria", "Azerbaijan"],
// 		"insured_list":[
// 			{
// 			   "FirstName": "Adil",
// 				"LastName": "Miyermanov",
// 				"IIN": "777777777777",
// 				"Passport":"AA123456789",
// 				"DOB":"01.01.2004",
// 				"PassportDate":"01.01.2020",
// 				"ResidentCountry":"Kazakhstan",
// 				"Phone":"77777777777"
// 			},
// 			{
// 				"FirstName": "Adil",
// 				 "LastName": "Miyermanov",
// 				 "IIN": "777777777777",
// 				 "Passport":"AA123456789",
// 				 "DOB":"01.01.2004",
// 				 "PassportDate":"01.01.2020",
// 				 "ResidentCountry":"Kazakhstan",
// 				 "Phone":"77777777777"
// 			 }
		
// 		]
		

// 	}`
// 	})
	
// 	.then(response => response.json())
// 	.then(convert)
// 	.catch(error => console.error(error));


function convert(data){
	
	const itogSum = data.insurance_premium;
	document.querySelector('.total__text-num').innerHTML = itogSum
	console.log(data);
	const insurantData = data.insurant;
	
	Object.entries(insurantData).forEach(([key, value]) => {
		const elements = document.querySelectorAll('[data-beckend-response]');
		elements.forEach(element => {
			if (element.getAttribute('data-beckend-response') === key) element.innerHTML = value;
			else if (element.getAttribute('data-beckend-response') === 'LastName') element.innerHTML = insurantData.LastName + ' ' + insurantData.FirstName;
		});
		console.log(`${key}: ${value}`);
	  });
	  console.log(data.insured_list.length);
	  for (let i = 0; i < data.insured_list.length; i++) {
		console.log(`Это: insured_list ${i}`);
		const insuredList = data.insured_list[i];
		console.log(i);
		collectInsurance(i);
		const elements = document.querySelectorAll(`[data-beckend-response-insured][data-insured-index="${i}"]`);
		console.log(elements);
		Object.entries(insuredList).forEach(([key, value]) => {
	
					let element;
			elements.forEach(el => {
			  if (el.getAttribute('data-beckend-response-insured') === key) {
			    element = el;
			  }
			});
			console.log();
			if (element) {
				element.innerHTML = value;
				if (key === 'LastName') {
					console.log('LastName');
					const nameElements = document.querySelectorAll(`[data-beckend-response-insured][data-insured-index="${i}"][data-beckend-response-insured="LastName"]`);
					console.log(nameElements);
					nameElements.forEach(nameElement => {
						nameElement.innerHTML = insuredList.LastName + ' ' + insuredList.FirstName;
					});
				}
			} 
		});
		
	}
	

	const territory = data.territory;

	document.getElementById('total-country').innerHTML = territory;
	document.getElementById('total-insuranceNum').innerHTML = data.insurance_summ;
	document.getElementById('total-dateStart').innerHTML = data.date_start;
	document.getElementById('total-dateEnd').innerHTML = data.date_end
	
}



function collectInsurance(index) {
	var container = document.querySelector('.accordion-subinsuarnce');
	console.log(index);
	if(index >= 0) {
		document.getElementById('delete-acc').style.display = 'block';
	}
	else{
		document.getElementById('delete-acc').style.display = 'none';
	}

	


	const newDiv = document.createElement("div");
	newDiv.setAttribute('class', 'newDiv');
	newDiv.innerHTML = `
	<div class="wrapper__accordion">
  	<div class="circle__accordion">
  	  <span class="number">${index + 1}</span>
  	</div>
	</div>
	<div class="accordion-block">
  <div class="accordion-body-block accordion-title ">
    <h3 class="accordion-body-title">Застрахованный:</h3>
    <p class="accordion-body-text" data-beckend-response-insured="LastName" data-insured-index="${index}" id="itog-name-subinsuarance${index}"></p>
  </div>
  <div class="row justify-content-between">
  <div class="col-lg-4 accordion-body-block">
  <h3 class="accordion-body-title">Место рождения:</h3>
  <p class="accordion-body-text" data-beckend-response-insured="ResidentCountry" data-insured-index="${index}" id="residentCountry${index}"></p>
</div>
    <div class="col-lg-4 accordion-body-block">
      <h3 class="accordion-body-title">ИИН:</h3>
      <p class="accordion-body-text" data-beckend-response-insured="IIN" data-insured-index="${index}" id="itog-iin${index}"></p>
    </div>
    <div class="col-lg-4 accordion-body-block">
      <h3 class="accordion-body-title">Дата рождения:</h3>
      <p class="accordion-body-text" data-beckend-response-insured="DOB" data-insured-index="${index}" id="itog-datebirtghday${index}"></p>
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-lg-4 accordion-body-block">
      <h3 class="accordion-body-title">Номер паспорта:</h3>
      <p class="accordion-body-text" data-beckend-response-insured="Passport" data-insured-index="${index}" id="pasport${index}"></p>
    </div>
    <div class="col-lg-4 accordion-body-block">
      <h3 class="accordion-body-title">Дата выдачи паспорта:</h3>
      <p class="accordion-body-text" data-beckend-response-insured="PassportDate" data-insured-index="${index}" id="passportDate${index}"></p>
    </div>
    <div class="col-lg-4 accordion-body-block">
      <h3 class="accordion-body-title">Номер телефона:</h3>
      <p class="accordion-body-text" data-beckend-response-insured="Phone" data-insured-index="${index}" id="phone${index}"></p>
    </div>
  </div>
  
</div>


	`;
	
	

	
	const inputBlocks = document.querySelectorAll('.newDiv'); // выбираем все блоки с информацией
	let isDuplicate = false; // флаг, показывающий, есть ли дубликат застрахованного

	inputBlocks.forEach((inputBlock) => {
	  const insuredIndex = inputBlock.dataset.insuredIndex;
	  console.log(inputBlock.querySelector('.number'));
	  if (inputBlock.querySelector('.number') === index) {
		console.log('Дубликат');
		isDuplicate = true; // если индексы совпадают, значит застрахованный уже существует
	  }
	});
 
	// если есть дубликат, удаляем все блоки newDiv
	if (isDuplicate) {
	  const oldDivs = document.querySelectorAll('.newDiv');
	  oldDivs.forEach((div) => {
		div.remove();
	  });
	}
	
	
	container.appendChild(newDiv);
}

// function collectMainInfoForInsurance() {

// 	var totainsuranceNum = getSelectedOptionText('insurance__sum')
// 	var totainsurancetarget = getSelectedOptionText('target')

// 	document.getElementById('total-country').innerHTML = document.getElementById('countrySelected').textContent
// 	document.getElementById('total-insuranceNum').innerHTML = totainsuranceNum
// 	document.getElementById('total-num-people').innerHTML = 'sadsad'
// 	document.getElementById('total-dateEnd').innerHTML = document.getElementById('date__end').value
// 	document.getElementById('total-dateStart').innerHTML = document.getElementById('date__start').value
// 	document.getElementById('total-target').innerHTML = totainsurancetarget

// }
function getSelectedOptionText(selectId) {
	const selectElement = document.getElementById(selectId);
	const selectedOption = selectElement.options[selectElement.selectedIndex];
	return selectedOption.text;
}

function ClearInputNameLastName(a) {

	let fullName = a
	let nameArray = fullName.split(' ');
	for (let i = 0; i < nameArray.length; i++) {
		nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1).toLowerCase();
	}
	return nameArray.join(' ');
}
