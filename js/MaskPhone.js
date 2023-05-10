function MaskPhone() {
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

		if (input.value.length != selectionStart) {
			if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;

			return;
		} else {

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

};