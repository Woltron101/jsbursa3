document.addEventListener("DOMContentLoaded", ready);


function ready() {

	function addEl(el, parent, parInd) {
		if (parInd) {
			document.querySelectorAll(parent)[parInd].appendChild(document.createElement(el));
		} else {
			document.querySelector(parent).appendChild(document.createElement(el));
		}
	}
	addEl('form', 'body');
	addEl('div', 'form');
	addEl('div', 'form');
	addEl('input', 'div');
	addEl('input', 'div', 1);
	addEl('input', 'form');
	document.querySelectorAll('input')[2].setAttribute('type', 'submit');

	document.addEventListener('click', function (e) {
		var input1Valid, input2Valid, sum, sumDiv;
		if (e.target == document.querySelectorAll('input')[2]) {
			e.preventDefault()

			function validInput(index) {
				if (!(/^[0-9]{1,}$/i).test(document.querySelectorAll('input')[index].value)) {
					if (document.querySelectorAll('form>div')[index].querySelector('div.error-message')) {
						document.querySelectorAll('form>div')[index].removeChild(document.querySelectorAll('form>div')[index].querySelector('div.error-message'))
					}
					var div = document.createElement('div');
					div.innerHTML = 'Это не число';
					div.setAttribute('class', 'error-message');

					document.querySelectorAll('form>div')[index].appendChild(div);
				} else {
					return true;
				}
			}

			input1Valid = validInput(0);

			input2Valid = validInput(1);
			if (input1Valid && input2Valid) {
				if (document.querySelectorAll('form')[0].querySelector('#result')) {
					document.querySelector('form').removeChild(document.querySelector('#result'));
				}
				sum = +document.querySelectorAll('input')[0].value + +document.querySelectorAll('input')[1].value;
				sumDiv = document.createElement('div');
				sumDiv.setAttribute('id', 'result')
				sumDiv.innerHTML = sum;
				document.querySelector('form').appendChild(sumDiv);
				document.querySelector('form').reset();
			}
		}
	});
}

