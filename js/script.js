let blockCount = 1;
let numCount = 0;
var needle = "";
var block;
var form = document.querySelector('.needs-validation2')
const addsValidation = document.querySelector('.needs-validation-addblock')
const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {

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
		b.src = "../img/eye_hide.svg";
	} else {
		a.type = "password";
		b.src = "../img/eye_show.svg";
	}
}







function ValidateMaskPhone(input) {
	input.addEventListener('input', function (e) {
		var modInput = input.value.replace(/\D/g, "");
		if (modInput.length < 11) {

			input.classList.add('is-invalid');
			input.classList.add('custom-phone');
			ValidateInJs_UNCORRECT(input)
			if (document.querySelector('.needs-validation2').classList.contains('was-validated')) {
				input.classList.add('is-invalid');
			
				ValidateInJs_UNCORRECT(input)
			}
		} else {
			if (document.querySelector('.needs-validation2').classList.contains('was-validated')) {
				input.classList.remove('is-invalid');
				
				ValidateInJs_CORRECT(input)
			}
		}
	})

}



var dateBirthday = document.getElementById("dateBirthday0");
var datePasport = document.getElementById("datePasportStart0");
var dateSelected = document.getElementById("dateSelected");
var dates = document.querySelectorAll('.dates__form')


var MyAlert = document.querySelector('.toast')
if (MyAlert) {
	var BsAlert = new bootstrap.Toast(MyAlert)
}



if (dateBirthday) {
	dateBirthday0 = new AirDatepicker('#dateBirthday0', {
		autoClose: true,
		maxDate: new Date(),
		onSelect: function (formattedDate, date) {
			if (checkAge() == false) {
				document.getElementById('dateBirthday0').placeholder = 'Возраст не может быть меньше 18 лет'
				document.getElementById('dateBirthday0').classList.add('redPlaceholder')

				document.getElementById('dateBirthday0').value =''
				document.getElementById('dateBirthday0').style.fontSize = '16px'
			} else if (checkAge() == true) {
				document.getElementById('dateBirthday0').classList.remove('redPlaceholder')
			}
			maskDateInput(dateBirthday, undefined, 'mySecondInput');

		},
	})
}
if (datePasport) {
	datePasport0 = new AirDatepicker('#datePasportStart0', {
		autoClose: true,
		maxDate: new Date(),
		onSelect: function (formattedDate, date) {
			maskDateInput(datePasport, undefined, 'mySecondInput');
		},
	})
}
var buttonReplace = document.querySelector('.insurance__button');
var buttonReplaceSecondSection = document.querySelector('.insurance__button-second-section');
var block1 = document.querySelector('.block__insurance-form1');
var block2 = document.querySelector('.block__insurance-form2');
var block3 = document.querySelector('.block__insurance-form3');


function Pages() {

	if (document.querySelector('.back')) {


		document.querySelector('.back').addEventListener("click", function () {
			loadBlocks()
				.then(() => {
					// Скрыть прелоадер
					if (preloader) {
						preloader.classList.add('preloader_hidden');
					}

					// Показать загруженные блоки
					block2.style.display = 'block';
					block3.style.display = 'none';
				})
				.catch((error) => {
					console.error(error);
				});

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

			nm.classList.add('insurance-block-add-subinsurance')

		} else {


			nm.classList.remove('insurance-block-add-subinsurance')

		}

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
						maximumSelectionLength: 3,
						templateSelection: formatState,

						language: {
							noResults: function () {
								return 'Результатов не найдено'; // текст для пустых результатов поиска
							},
							maximumSelected: function () {
								return 'Вы можете выбрать только 3 страны'; // текст для превышения максимального количества выбранных элементов
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
								return 'Вы можете выбрать только 3 страны'; // текст для превышения максимального количества выбранных элементов
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
								return 'Вы можете выбрать только 3 страны'; // текст для превышения максимального количества выбранных элементов
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

var max = 4;
if(checkbox){
	checkbox.addEventListener('change', function () {
		if (checkbox.checked) {
			console.log('false')
			max = 4;
			if (blockCount > max) {
				
				const blocks = document.querySelectorAll('.block');
				const lastBlock = blocks[blocks.length - 1];
				container.removeChild(lastBlock);
				blockCount--;
				numCount--;
				x--
				otherCoefficient = 1;
			}
		} else {
			console.log('false')
			max = 5;
			if (blockCount > max) {
				const blocks = document.querySelectorAll('.block');
				const lastBlock = blocks[blocks.length - 1];
				container.removeChild(lastBlock);
				blockCount--;
				numCount--;
				x--
				otherCoefficient = 1;
			}
		}
	});
}

var x = 0;
function Add() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'fd.html', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200 && blockCount <= max) {
			const newBlock = document.createElement('div');
			newBlock.innerHTML = xhr.responseText.trim();
			newBlock.setAttribute('class', 'block');
			container.appendChild(newBlock);
			const allIds = newBlock.querySelectorAll('[id]');
			allIds.forEach(function (item) {
			  const oldId = item.getAttribute('id');
			  const newId = oldId.replace(/(\d+)/, function(match,number) {
				var m = parseInt(number) + x;
				DateAnOBj(m)
				return parseInt(number) + x;
			  });
			
			  item.setAttribute('id', newId);
			});
			block = newBlock.querySelectorAll('.needs-validation-addblock');
			
			var n = newBlock.querySelectorAll('.changeid')



			x++
			blockCount++;
			numCount++;

			var residentButton = document.getElementById("RK")

			if (residentButton.options[residentButton.selectedIndex].value == 1) {



				var a = getCookie('lang')
				if (a == 'undefined') {
					get_countries('ru', 'true');
				} else {
					get_countries(a, 'true');
				}
			} else if (residentButton.options[residentButton.selectedIndex].value == 2) {

				var a = getCookie('lang')
				if (a == 'undefined') {
					get_countries('ru');
				} else {
					get_countries(a);
				}

			}
			
			const blockNumber = newBlock.querySelector('.number');
			const blocks = document.querySelectorAll('.block');
			blocks.forEach(function (item, index) {
				const itemNumber = item.querySelector('.number');
				if (checkbox.checked) {
					itemNumber.textContent = index + 2;
				} else {
					itemNumber.textContent = index + 1;
				}
			});
			checkbox.onchange = function () {
				const startingNumber = checkbox.checked ? 2 : 1;
				blocks.forEach(function (item, index) {
					const itemNumber = item.querySelector('.number');
					itemNumber.textContent = startingNumber + index;
				});
			};

		} else if (blockCount >= max) {
	
			var toastBody = document.querySelector('.toast-body')
			toastBody.innerHTML = 'Не может быть больше 5 туристов '
			BsAlert.show();
		}
		MaskPhone()
		UploadFiles();
		Resident()
	};

	xhr.send();



}


function RemovePeoples(event) {
	const clickedElement = event.target;
	const formElement = clickedElement.closest('.block');
	
	container.removeChild(formElement);
	blockCount --;
	numCount--;
	otherCoefficient = 1;
  
	// Перезаписываем id всех элементов в оставшихся блоках
	const allBlocks = document.querySelectorAll('.block');
	allBlocks.forEach(function (block, index) {
	  const allIds = block.querySelectorAll('[id]');
	  allIds.forEach(function (item) {
		const oldId = item.getAttribute('id');
		const newId = oldId.replace(/(\d+)/, function(match) {
			DateAnOBj(index)
		  return index + 1;
		});
		item.setAttribute('id', newId);
	  });
	  const blockNumber = block.querySelector('.number');
	  blockNumber.textContent = index + 1;
	});
	x--
	const blocks = document.querySelectorAll('.block');
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
			
			isBlockAdded = true;
		} else {
			
		}
	} else if (isBlockAdded) {
	
		if (block === undefined) {
			Add();
		}
		for (let i = 0; i < block.length; i++) {
			block[i].classList.add('was-validated');
			
			if (block[i].checkValidity()) {

				Add();

			} else {
				
			}
		}
	}
}



function DateAnOBj(a){

	new AirDatepicker('#dateBirthday' + a, {
		autoClose: true,

		onSelect: function (formattedDate, date) {
			var ininput = formattedDate.datepicker.$el
		
			OtherCoficent(ininput);

			maskDateInput(ininput, undefined, 'asd')

		},
		maxDate: new Date(),

	});
	datePasportAll = new AirDatepicker('#datePasportStart' + a, {
		autoClose: true,

		onSelect: function (formattedDate, date) {
			var ininput = formattedDate.datepicker.$el
		
			maskDateInput(ininput, undefined, 'asd')
		},

		maxDate: new Date(),

	});
	$('#country-people' + a).select2({
		placeholder: "Выберите страну",
		templateSelection: formatStateInsurancePeople,
		language: {
			noResults: function () {
				return 'Результатов не найдено'; // текст для пустых результатов поиска
			},
			maximumSelected: function () {
				return 'Вы можете выбрать только 3 страны'; // текст для превышения максимального количества выбранных элементов
			}
		}
	});

	$('#country-people' + a).on("change", function (e) {
		console.log('change');
		var selectElementThree = document.getElementById("country-people" + a);
		xml(selectElementThree)
	})
}




function formatStateInsurancePeople(state) {

	var baseUrl = "img/flags";
	var $state = $(
		'<span><img class="img-flag" /> <span></span></span>'
	);
	//  
	//var selectElement = document.getElementById("country"); 
	//var selectedOptions = selectElement.selectedOptions; 
	//for (var j = 0; j < selectedOptions.length; j++) {
	//    var option = selectedOptions[j];

	//    var attributes = option.getAttribute("data-name-flag")
	//    console.log(attributes)
	//      
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
	if (button) {
		// Добавьте обработчик событий на кнопку
		button.addEventListener('click', function (event) {
			Resident()
			// Получите ссылку на форму, связанную с кнопкой
			var item = document.querySelector('.needs-validation')

			// Проверьте форму на валидность
			if (item.checkValidity() ) {
				loadBlocks()
					.then(() => {
						// Скрыть прелоадер
						if (preloader) {
							preloader.classList.add('preloader_hidden');
						}

						// Показать загруженные блоки
						block2.style.display = 'flex';
						block1.style.display = 'none';
					})
					.catch((error) => {
						console.error(error);
					});
					
					
			} else {

				event.preventDefault();
				event.stopPropagation();

			}

			// Добавьте класс 'was-validated' к форме
			item.classList.add('was-validated');
			document.querySelectorAll('.custom-dates').forEach(function (item) {
				maskDateInput(item)
			})
		}, false);
	}


})();

function loadBlocks() {
	return new Promise((resolve, reject) => {
		// Здесь должна быть ваша логика загрузки блоков
		// ...
		preloader.classList.remove('preloader_hidden');
		// В этом примере, мы просто задерживаем выполнение на 2 секунды
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}






function ValidatePuy(){
	'use strict'

	// Получите ссылку на кнопку
	var button = document.querySelector('.puy');
	if (button){
		document.getElementById('dateBirthday0').value
		form.addEventListener('change', function () {
			button.classList.toggle('active-btn', form.checkValidity());
	
		});
		
		
		;
		button.addEventListener('click', function (event) {
	
			
	
			if (!document.querySelector('.block') && !checkbox.checked) {
				document.querySelector('.hidden-attentional-sec').style.display = 'flex'
				setTimeout(function () {
					document.querySelector('.hidden-attentional-sec').style.display = 'none';
				}, 3000);
			} else {
				if (block) {
					block.forEach(function (item) {
						// Получите ссылку на форму, связанную с кнопкой
						if (form.checkValidity() && item.checkValidity()) {
							preloader.classList.remove('preloader_hidden');
							append()
									block2.style.display = 'none';
									block3.style.display = 'block';
						} else {
	
							
							event.preventDefault();
							event.stopPropagation();
	
						}
					})
				} else {
					if (form.checkValidity()) {
						preloader.classList.remove('preloader_hidden');
						append()
						// Показать загруженные блоки
						block2.style.display = 'none';
						block3.style.display = 'block';
					} else {
						event.preventDefault();
						event.stopPropagation();
	
	
					}
				}
			}
	
			form.classList.add('was-validated');
			document.querySelectorAll('.custom-dates').forEach(function (item) {
				maskDateInput(item, undefined, '324234')
			})
			document.querySelectorAll('.phone-insuarance').forEach(function (item) {
				ValidateMaskPhone(item)
			});
			UploadFiles();
		}, false);
	
	}
	// Добавьте обработчик событий на кнопку
	
};

ValidatePuy()

function InvalidUpload() {
	const inputs = document.querySelectorAll('.field__file');
	const inputsLabel = document.querySelectorAll('.insurance-upload');
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].files.length === 0 ) {
			  const invalid = document.getElementById('invalidfd' + i);
			  invalid.style.display = 'block';
			  console.log(inputsLabel[i])
			  console.log(inputs[i])
			  inputsLabel[i].classList.add('is-invalid');
		
			}else{
				inputsLabel[i].classList.remove('is-invalid');
			}
		  }
	
	

  }

 
function checkAge() {
	const birthdayInput = document.getElementById('dateBirthday0').value;
	const birthdayParts = birthdayInput.split('.');
	const birthday = new Date(`${birthdayParts[1]}.${birthdayParts[0]}.${birthdayParts[2]}`);
	const today = new Date();
	var age = today.getFullYear() - birthday.getFullYear();
	const monthDiff = today.getMonth() - birthday.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
		age--;
	}

	if (age >= 18) {
		return true;
	}
	return false;

}













function append() {


	var obj = {
		"insurance_summ": selecta('insurance__sum'),
		"months": selecta('months'),
		"program": selecta('program'),
		"purpose": selecta('target'),
		"sport_type": selecta('sporttype'),
		"sport_category": selecta('categorysporttype'),
		"discount": 0,
		"country_zone": selectaInZone('country'),
		"date_start": dateStart.value,
		"date_end": dateEnd.value,
		"insurant": {
			"FirstName": document.getElementById('Name0').value,
			"LastName": document.getElementById('LastName0').value,
			"IIN": document.getElementById('IIN0').value,
			"Passport": document.getElementById('pasport0').value,
			"DOB": document.getElementById('dateBirthday0').value,
			"PassportDate": document.getElementById('datePasportStart0').value,
			"Email": document.getElementById('email').value,
			"ResidentCountry": selectaInCountryId('country-people0'),
			"Phone": document.getElementById('Phone0').value,
			"Address": document.getElementById('adress0').value
		},

		"insured_list": []
	}
	//Цикл для  добавления всех застрахованных в OBJ
	var allBlock = document.querySelectorAll('.block')


	for (var i = 0; i <= allBlock.length; i++) {
		console.log(i)
		var lname = document.getElementById('LastName' + [i]).value;
		var pasport = document.getElementById('pasport' + [i]).value;
		var iin = document.getElementById('IIN' + [i]).value;
		var phone = document.getElementById('Phone' + [i]).value;
		var fname = document.getElementById('Name' + [i]).value;
		var dob = document.getElementById('dateBirthday' + [i]).value;
		var age = calculateAgeInYears(document.getElementById('dateBirthday' + [i]).value)
		var PassportDate = document.getElementById('datePasportStart' + [i]).value;
		var country = selectaInCountryId('country-people' + [i])

		obj.insured_list.push({ "FirstName": fname, "LastName": lname, "IIN": iin, "Passport": pasport, "DOB": dob, "PassportDate": PassportDate, "ResidentCountry": country, "Phone": phone, "age": age })
	}



	var linkPay = document.getElementById('payment')
	var residentButton = document.getElementById("RK");
	if (residentButton.options[residentButton.selectedIndex].value == 1) {
		obj.isresident = "1";
		document.querySelector('.message-total').style.display = 'none';
		linkPay.innerHTML = "Оплатить";
		

	} else {
		obj.isresident = "2";
		document.querySelector('.message-total').style.display = 'flex';

	}
	//Добавление стран
	var selectedOptions = $('#country').select2('data');

	obj.territory = [];

	var ter = [];
	selectedOptions.forEach(function (option) {
		var atributes = option.element.value;
		ter.push(atributes);
	});

	if (ter.length > 1) {
		obj.territory = ter.map(function (item) {
			return item;
		});
	} else {
		obj.territory = [ter[0]];
	}





	var days = calculateDaysDiff(document.getElementById('date__start').value, document.getElementById('date__end').value);
	var age = calculateAgeInYears(document.getElementById('dateBirthday0').value)
	obj.days = days;
	obj.insurant.age = age;
	const formData = new FormData();
	const str = JSON.stringify(obj);
	// formData.append('file', input.files[0]);
	for (var i = 0; i <= numCount; i++) {

		var input = document.getElementById('uploaddocs' + i);
		var formDataIin = document.getElementById('IIN' + i).value; // получаем значение из элемента формы

		formData.append(`file[${formDataIin}]`, input.files[0]);
	}

	// for (var pair of formData.entries()) {
	// 	   
	// }
	let files = formData.getAll('file');


	formData.append('json', str);

	
	
  const myBlock = document.querySelector('.error') 

  fetch('https://dms.interteach.kz/classes/Functions.php?f=NewProcessingData', {
	method: 'POST',
	body: formData
  })
  
  .then(response => response.json())
  .then(data => convert(data))
  .then(() => {
    // скрываем прелоадер после получения ответа
    if (preloader) {
      preloader.classList.add('preloader_hidden');
    }
  })
  .catch(error => {
    console.error(error);
    // скрываем прелоадер при ошибке
    if (preloader) {
      preloader.classList.add('preloader_hidden');
    }

    document.querySelector('.insurance__info-block').style.display = 'none';
    myBlock.classList.remove('hidden');

  });
}
if (document.querySelector('.call-center')){
	document.querySelector('.call-center').addEventListener('mouseenter', function () {
		document.querySelector('.call-center').innerHTML = "+7 727 3200 200";
		document.querySelector('.call-center').style.color = "#fff";
	});
	document.querySelector('.call-center').addEventListener('mouseleave', function () {
		document.querySelector('.call-center').innerHTML = "Call Center";
	});
}




if (document.querySelector('.targetTextCss')){
	document.querySelector('.targetTextCss').addEventListener('click', function () {


		for (var i = 0; i <= numCount; i++) {
	
			var input = document.getElementById('uploaddocs' + i);
			var formDataIin = document.getElementById('IIN' + i)
	
	
			//  formData.append(`file[${formDataIin}]`, input.files[0]);
		}
	});
	
}



function CalcBeckend(){
	const formData = new FormData();
	const myBlock = document.querySelector('.error') 
	var obj = {
		"insurance_summ": selecta('insurance__sum'),
    	"months": selecta('months'),
    	"program": selecta('program'),
    	"purpose": selecta('target'),
    	"sport_type": selecta('sporttype'),
		"sport_category": selecta('categorysporttype'),
    	"isresident": 1,
    	"country_zone": selectaInZone('country'),
		"date_start": dateStart.value,
		"date_end": dateEnd.value,
	}
	var residentButton = document.getElementById("RK");
	if (residentButton.options[residentButton.selectedIndex].value == 1) {
		obj.isresident = "1";
	} else {
		obj.isresident = "2";
	}
	const str = JSON.stringify(obj);
	formData.append('json', str);

	fetch('https://dms.interteach.kz/classes/Functions.php?f=NewPreProcessing', {
		method: 'POST',
		body: formData
	  })
	  .then(response => response.json())
	  .then(data => convertCalc(data))
	  .then(() => {
		// скрываем прелоадер после получения ответа через 4 секунды
		setTimeout(() => {
		  document.querySelector('.loadersum').classList.remove('load-sum');
		  document.querySelector('.loader__mb').style.display = 'block';
		  document.querySelector('.insurance__more-bottom').classList.remove('insurance__more-bottom--active');
		}, 1000);
		
	  })
	  .catch(error => {
		if (preloader) {
			preloader.classList.add('preloader_hidden');
		  }
		  Calc(print, false)
		
		console.error(error);
		// скрываем прелоадер при ошибке
		
	 
	  });

}

function convertCalc(data){
	const itogSum = data.premium_discounted_kzt;
	const Sum = data.premium_kzt;
	var after = formatCurrency(itogSum );
	var to = formatCurrency(Sum);
	document.getElementById('toitog').innerHTML =  to ;
	document.getElementById('itog').innerHTML = after ;
	// animationSum(itogSum ,document.getElementById('toitog'))
	// animationSum(Sum ,document.getElementById('itog'))

}
// function animationSum(a, b){
// 	console.log(typeof a)
// 	const countElement = b;
// 	let count = 0;
// 	const targetCount =parseInt(a);
// 	const increment = Math.ceil(targetCount / 100); // изменяем значение цифры на 1% от конечного значения
// 	let currentCount = 0;
  
// 	function animate() {
// 	  currentCount += increment;
// 	  if (currentCount > targetCount) {
// 		currentCount = targetCount;
// 	  }

// 	  countElement.innerText = parseInt(currentCount) ; // выводим значение цифры на страницу, преобразуя число в строку с разделением групп разрядов
// 	  if (currentCount < targetCount) {
// 		requestAnimationFrame(animate); // продолжаем анимацию, пока не достигнем конечного значения
// 	  }
// 	}
  
// 	animate(); // запускаем анимацию
//   }

//Считает разницу в днях между датами
function calculateDaysDiff(dateString1, dateString2) {


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
//Функция для получения id  у атрибута data-name-lat
function selectaInCountryId(selectElement) {
	var sel = document.getElementById(selectElement);
	var selectedOption = sel.options[sel.selectedIndex];
	if (selectedOption == null || selectedOption.getAttribute('data-name-lat') == null) {
		return 0;
	}
	var hh = selectedOption.value;
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



function convert(data) {
	if (data.status === 'error') {
		document.querySelector('.error-text-mes').innerHTML = data.message
	}
	const itogSum = data.insurance_premium_clear;
	const Sum = data.insurance_premium;
	var after = formatCurrency(Sum);
	var to = formatCurrency(itogSum);
	document.getElementById('insurance__to').innerHTML = to ;
	document.getElementById('insurance__after').innerHTML = after ;
	

	
	const insurantData = data.insurant;

	Object.entries(insurantData).forEach(([key, value]) => {
		const elements = document.querySelectorAll('[data-beckend-response]');
		elements.forEach(element => {
			if (element.getAttribute('data-beckend-response') === key) element.innerHTML = value;
			else if (element.getAttribute('data-beckend-response') === 'LastName') element.innerHTML = insurantData.LastName + ' ' + insurantData.FirstName;
		});

	});


	if (data.payment_url.status === 'success') {
		document.getElementById('payment').setAttribute('href', data.payment_url.url);
		
	}



	for (let i = 0; i < data.insured_list.length; i++) {

		const insuredList = data.insured_list[i];

		collectInsurance(i);
		const elements = document.querySelectorAll(`[data-beckend-response-insured][data-insured-index="${i}"]`);

		Object.entries(insuredList).forEach(([key, value]) => {

			let element;
			elements.forEach(el => {
				if (el.getAttribute('data-beckend-response-insured') === key) {
					element = el;
				}
			});

			if (element) {
				element.innerHTML = value;
				if (key === 'LastName') {

					const nameElements = document.querySelectorAll(`[data-beckend-response-insured][data-insured-index="${i}"][data-beckend-response-insured="LastName"]`);

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

window.addEventListener('pageshow', function(event) {
	var historyTraversal = event.persisted || 
						   (typeof window.performance != 'undefined' && 
								window.performance.navigation.type === 2);
	if (historyTraversal) {
	  // Обновляем страницу
	  location.reload();
	}
  });
function formatCurrency(amount) {
	if (typeof amount !== 'undefined') {
	  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	  return formattedAmount;
	} else {
	  return "";
	}
}
function collectInsurance(index) {
	var container = document.querySelector('.accordion-subinsuarnce');

	if (index >= 0) {
		document.getElementById('delete-acc').style.display = 'block';
	}
	else {
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
  <h3 class="accordion-body-title">Страна резидентства:</h3>
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

		if (inputBlock.querySelector('.number') === index) {

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

let datepicker;

function get_countries(current_lang, resident) {
	$.ajax({
		url: 'https://dms.interteach.kz/ajax/ajax_get_country.php',
		// url: 'https://dms.interteach.kz/ajax/ajax_get_country.php',
		dataType: "json",
		success: function (data) {

			if (resident) {

				var option_data_kz = '<option value=""   disabled class="sel" >Выберите страну</option> <option  data-currency="KZT" data-zone="3" data-flag-name="kz"  data-name-lat="Kazakhstan" value="1" >Казахстан</option> ';
			} else {
				var option_data = '<option value=""   disabled class="sel" >Выберите страну</option>'
			}


			let name = '';
			$.each(data, function (i, dat) {
				switch (current_lang) {
					case 'ru':
						name = dat.name;
						break;
					case 'kz':
						name = dat.name_kz;
						break;
					case 'lat':
						name = dat.name_lat;
						break;
					case 'en':
						name = dat.name_en;
						break;
					default:
						name = dat.name;
						break;
				}
				if (resident) {
					option_data_kz += '<option value="' + dat.country_id + '" data-currency="' + dat.currency + '"data-zone="' + dat.zone + '" data-name-lat="' + dat.name_en + '">' + name + '</option>';
				} else {
					option_data += '<option value="' + dat.country_id + '" data-currency="' + dat.currency + '"data-zone="' + dat.zone + '" data-name-lat="' + dat.name_en + '">' + name + '</option>';

				}
			});

			//  
			$('#country').html(option_data);

			if (resident) {
				$('#country-people' + numCount).prop('disabled', true);
				$('#country-people' + numCount).html(option_data_kz);
			} else {
				var countryPeopleElem = $('#country-people' + numCount);


				if (countryPeopleElem.html() !== option_data) {
					countryPeopleElem.prop('disabled', false);
					countryPeopleElem.removeAttr('disabled');
					countryPeopleElem.html(option_data);
				}
			}

		}


	});
}





// function fillAllFields() {
// 	const event = new Event('change');
// 	const event2 = new Event('click');
// 	const form = document.querySelector('.needs-validation');
// 	const inputs = form.querySelectorAll('.itsinputs');
// 	const selects = form.querySelectorAll('.itsselect');
// 	const email = form.querySelectorAll('.itsemail');
// 	const dates = form.querySelectorAll('.itsdate');
// 	document.getElementById('country').disabled = false;
// 	console.log(inputs)

// 	inputs.forEach(input => {
// 		input.value = 'ASDASDASDASD';
// 		input.disabled = false;

// 		input.dispatchEvent(event2);
// 	});

// 	email.forEach(input => {
// 		input.value = 'adddd@mail.ru';
// 		input.disabled = false;
// 		input.dispatchEvent(event2);
// 	});
// 	selects.forEach(select => {

// 		select.selectedIndex = 3;
// 		if (select.id == 'country') {
// 			console.log('asdasd')
// 			var select = $('#country').select2();
// 			select.val('18').trigger('change');;

// 		}
// 		else if (select.selectedIndex !== 3) {
// 			select.selectedIndex = 1;
// 			select.dispatchEvent(event);
// 		} else {
// 			select.selectedIndex = 2;
// 			select.dispatchEvent(event);
// 		}



// 		document.getElementById("section1").dispatchEvent(event);

// 		select.disabled = false;
// 	});

// }


function dateSelectedIS(event){
	const clickedElement = event.target
	console.log(clickedElement)
	const mm = clickedElement.closest('.insurance-upload')
	clickedElement.style.border = '1px solid #000000'
	console.log(mm)
	if (form.classList.contains('was-validated') ) {
	}
}

function UploadFiles() {

	const maxSize = 5 * 1024 * 1024; // устанавливаем максимальный размер файла в байтах (в данном случае 5 МБ)

	const inputsLabel = document.querySelectorAll('.insurance-upload');
	const inputs = document.querySelectorAll('.field__file'); // получаем input элемент по ID

	for (let i = 0; i < inputs.length; i++) {
		// if (document.getElementById('invalidfd' + i).style.display != 'none' && form.classList.contains('was-validated')) {
		// 	document.getElementById('uploadid' + i).style.border = '1px solid #dc3545';
		// }else{

		// 	document.getElementById('uploadid' + i).style.border = '1px solid #000000';
		// }

		const formInput = document.getElementById('formInputMes' + i);
		const countEl = document.getElementById('fileText' + i)
		document.getElementById('invalidfd0').classList.add('changeid')
		const invalid = document.getElementById('invalidfd' + i)
		inputs[i].addEventListener('change', function (event) {
			console.log(i)
			
			
			const files = this.files; // получаем массив выбранных файлов

			let totalSize = 0; // устанавливаем начальное значение суммарного размера файлов

			for (let i = 0; i < files.length; i++) {
				const file = files[i];

				// проверяем тип файла
				if (!file.type.includes('image')) {
					event.preventDefault(); // отменяем действие по умолчанию (добавление файла)

					invalid.innerHTML = `Файл должен быть изображением`;
					invalid.style.display = 'block';
					inputsLabel[i].classList.add('is-invalid');
				}

				// проверяем размер файла
				totalSize += file.size; // добавляем размер каждого файла к суммарному размеру
				if (totalSize > maxSize) { // если суммарный размер превышает максимальный
					event.preventDefault();
					invalid.innerHTML = `Размер файлов не должен превышать 5 МБ`;
					invalid.style.display = 'block';
					inputsLabel[i].classList.add('is-invalid');
				}
				if ((file.type.includes('image')) && totalSize < maxSize) {
					countEl.innerText = this.files[0].name;
					// убираем ошибку, если размер и тип файлов в пределах допустимого
					inputsLabel[i].classList.remove('is-invalid');
				
					invalid.style.display = 'none';
					inputs[i].setCustomValidity('');
				
					

				} else {
					event.preventDefault();
					inputsLabel[i].classList.add('is-invalid'); // добавляем класс ошибки, если размер и тип файлов в пределах допустимого
					countEl.innerText = `Ошибка`;

		
					invalid.style.display = 'block';
					return
				}

			}
		});
	};

}
UploadFiles();
function ValidateInJs_CORRECT(a) {
	a.classList.remove('is-invalid');
	if (a.classList.contains('custom-phone')) {
		a.style.setProperty('background-image', 'url("data:image/svg+xml,%3csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 8 8\\"%3e%3cpath fill=\'%23198754\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e")', 'important');

	} else {
		a.style.setProperty('background-image', 'url("data:image/svg+xml,%3csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 8 8\\"%3e%3cpath fill=\'%23198754\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e"), url(img/date.svg)', 'important');

	}
	a.style.setProperty('border-color', '#198754', 'important');
	a.style.setProperty('box-shadow', 'none');
}
function ValidateInJs_UNCORRECT(a) {
	a.classList.add('is-invalid');
	if (a.classList.contains('custom-phone')) {
		a.style.setProperty('background-image', 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23dc3545\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23dc3545\' stroke=\'none\'/%3e%3c/svg%3e")', 'important');
	} else {
		a.style.setProperty('background-image', 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23dc3545\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23dc3545\' stroke=\'none\'/%3e%3c/svg%3e"), url(img/date.svg)', 'important');
	}
	a.style.setProperty('border-color', '#dc3545', 'important');
	a.style.setProperty('box-shadow', 'none');
}
MaskPhone()