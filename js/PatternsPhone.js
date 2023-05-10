function Patterns(phone, block) {

	var MAX_PHONE_LENGTH = 14;
  
	if (phone.length >= 1) {
	  const countryCode = phone.match(/^\+?\d{1}/)[0];
	  if (countryCode === '+7' || countryCode === '7') {
		// Russia
		block.setAttribute('pattern', '\\+?\\d{1,3}[\\s-]?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{2}[\\s.-]?\\d{2}');
		MAX_PHONE_LENGTH = 18;
	  } else if (countryCode === '+1') {
		// USA and Canada
		block.setAttribute('pattern', '\\+?1?[\\s.-]?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}');
		MAX_PHONE_LENGTH = 14;
	  } else if (countryCode === '+44') {
		// UK
		block.setAttribute('pattern', '\\+?44[\\s.-]?\\(?\\d{4}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{3}');
		MAX_PHONE_LENGTH = 10;
	  } else if (countryCode === '+33') {
		// France
		block.setAttribute('pattern', '\\+?33[\\s.-]?\\(?\\d{1}\\)?[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}');
		MAX_PHONE_LENGTH = 14;
	  } else {
		// Default pattern
		block.setAttribute('pattern', '\\+?\\d{1,3}[\\s.-]?\\(?\\d{3}\\)?[\s.-]?\\d{3}[\\s.-]?\\d{4}');
	  }
	}
  
	block.setAttribute('maxlength', MAX_PHONE_LENGTH);
  }
  