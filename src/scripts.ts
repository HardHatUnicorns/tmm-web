export class Scripts {

	// Material like inputs animations
	loadInputs(): void {
		if (document.querySelectorAll('input').length > 0) {
			document.querySelectorAll('input').forEach(input => {
				input.addEventListener('focusin', () => {
					input.previousElementSibling.setAttribute('has-content', 'true');
					input.previousElementSibling.setAttribute('focus', 'true');

					// Check focus validation
					if (input.classList.contains('ng-valid')) {
						input.previousElementSibling.setAttribute('valid', 'true');
					}
				});
				input.addEventListener('focusout', () => {
					input.previousElementSibling.removeAttribute('focus');
					if (!input.value) {
						input.previousElementSibling.removeAttribute('has-content');
					}

					// Good validation only on focus
					input.previousElementSibling.removeAttribute('valid');
					// Bad validation on out
					if (input.classList.contains('ng-invalid') && input.classList.contains('ng-touched')) {
						input.previousElementSibling.setAttribute('invalid', 'true');
					}
				});
				// Angular validation
				input.addEventListener('keyup', () => {
					if (input.classList.contains('ng-invalid') && input.classList.contains('ng-touched')) {
						input.previousElementSibling.removeAttribute('valid');
						input.previousElementSibling.setAttribute('invalid', 'true');
					} else if (input.classList.contains('ng-valid')) {
						input.previousElementSibling.removeAttribute('invalid');
						input.previousElementSibling.setAttribute('valid', 'true');
					} else {
						input.previousElementSibling.removeAttribute('invalid');
						input.previousElementSibling.removeAttribute('valid');
					}
				});

				if (input.value) {
					input.previousElementSibling.setAttribute('has-content', 'true');
					input.previousElementSibling.removeAttribute('valid');
				}
			});
		}
	}

}