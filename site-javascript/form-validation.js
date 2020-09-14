//Assignment #3 Form Validation JS
document.getElementById("confirmForm").onclick = function() {confirmForm()};
function confirmForm() {
	var alertInfo = 'You cannot submit the form until making the following correction(s):\n\n';
	var inputPattern;
	var inputTest;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var strAddr1 = document.getElementById("strAddr1").value;
	var strAddr2 = document.getElementById("strAddr2").value;
	var cityAddr = document.getElementById("cityAddr").value;
	var stateAddr = document.getElementById("stateAddr").value;
	var zipAddr = document.getElementById("zipAddr").value;
	var phoneNum = document.getElementById("phoneNum").value;
	var email = document.getElementById("email").value;
	var birthdate = document.getElementById("birthdate").value;
	var formMessage = document.getElementById("formMessage").value;
	var robotCheck = document.getElementById("notarobot").value;
	
	if (isfnameValid() && islnameValid() && isstrAddrValid() && iszipAddrValid() && 
		isphoneNumValid() && isemailValid() && isbirthdateValid() && isformMessageValid() &&
		isNotARobot()) {
		alert('Looks good!');
	}
	else {
		return alert(alertInfo);
	}
	
	//Test validation on form fields
	function isfnameValid() {
		inputPattern = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/;
		inputTest = inputPattern.test(fname);
		//Check if field is blank.
		if (fname.length == 0) {
			alertInfo += 'First Name cannot be blank.\n';
		}
		else if (!inputTest) {
			alertInfo += 'Please enter a valid name format.\n';
		}
		return inputTest;
	}
	function islnameValid() {
		inputPattern = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/;
		inputTest = inputPattern.test(lname);
		if (lname.length == 0) {
			alertInfo += 'Last Name cannot be blank.\n';
		}
		else if (!inputTest) {
			alertInfo += 'Please enter a valid name format.\n'
		}
		return inputTest;
	}
	function isstrAddrValid() {
		inputPattern = /^\d+\s[A-z]+\s[A-z]+/g;
		inputTest = inputPattern.test(strAddr1);
		if (strAddr1.length == 0) {
			alertInfo += 'Street Address 1 cannot be blank.\n';
		}
		else if (!inputTest) {
			alertInfo += 'Please enter a valid street address format.\n'
		}
		return inputTest;
	}
	function iscityAddrValid() {
		inputTest = (cityAddr.length > 0);
		if (!inputTest) {
			alertInfo += 'City cannot be blank';
		}
		return inputTest;
	}
	function iszipAddrValid() {
		inputPattern = /^\d{5}$|^\d{5}-\d{4}$/;
		inputTest = inputPattern.test(zipAddr);
		if (zipAddr.length == 0) {
			alertInfo += 'Last Name cannot be blank.\n';
		}
		else if (!inputTest) {
			alertInfo += 'Please enter a valid zip format.\n'
		}
		return inputTest;
	}
	function isphoneNumValid() {
		inputPattern = '';
		inputTest = inputPattern.test(phoneNum);
		if (phoneNum.length == 0) {
			alertInfo += 'Phone number cannot be blank.\n';
		}
		else if (phoneNum.length > 14) {
			alertInfo += 'Phone number cannot be longer than 10 digits.\n';
		}
		else if (!inputTest) {
			alertInfo += 'Please enter a phone number in a valid format.\n'
		}
		return inputTest;
	}
	function isemailValid() {
		inputPattern = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		inputTest = inputPattern.test(email);
		if (email.length == 0) {
			alertInfo += 'Email cannot be blank.\n';
		}
		else if (!inputTest) {
			alertInfo += 'Please enter email in a valid format.\n'
		}
		return inputTest;
	}
	function isbirthdateValid() {
		var today = new Date();
		inputTest = (birthdate <= today);
		if (!inputTest) {
			alertInfo += 'Birth Date cannot be after today.\n';
		}
		if (!birthdate.length) {
			alertInfo += 'Please enter a birth date.'
			inputTest = false;
		}
		return inputTest;
	}
	function isformMessageValid() {
		inputTest = (formMessage.length !== 0);
		if (!inputTest) {
			alertInfo += 'Message cannot be blank.\n';
		}
		return inputTest;
	}
	function isNotARobot() {
		inputTest = (robotCheck.trim().toLowerCase() == 'earth');
		if (!inputTest) {
			alertInfo += 'Robot behavior detected. Please answer question correctly.';
		}
		return inputTest;
	}
}


//Phone number mask JQuery
$('#phoneNum')

	.keydown(function (e) {
	var key = e.which || e.charCode || e.keyCode || 0;
	$phone = $(this);

	// Don't let them remove the starting '('
	if ($phone.val().length === 1 && (key === 8 || key === 46)) {
		$phone.val('('); 
		return false;
	} 
	// Reset if they highlight and type over first char.
	else if ($phone.val().charAt(0) !== '(') {
		$phone.val('('+String.fromCharCode(e.keyCode)+''); 
	}

	// Auto-format- do not expose the mask as the user begins to type
	if (key !== 8 && key !== 9) {
		if ($phone.val().length === 4) {
			$phone.val($phone.val() + ')');
		}
		if ($phone.val().length === 5) {
			$phone.val($phone.val() + ' ');
		}			
		if ($phone.val().length === 9) {
			$phone.val($phone.val() + '-');
		}
	}

	// Allow numeric (and tab, backspace, delete) keys only
	return (key == 8 || 
					key == 9 ||
					key == 46 ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));	
})

	.bind('focus click', function () {
	$phone = $(this);

	if ($phone.val().length === 0) {
		$phone.val('(');
	}
	else {
		var val = $phone.val();
		$phone.val('').val(val); // Ensure cursor remains at the end
	}
})

	.blur(function () {
	$phone = $(this);

	if ($phone.val() === '(') {
		$phone.val('');
	}
});