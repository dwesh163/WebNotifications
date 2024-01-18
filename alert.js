function showAlert(text, color) {
	var alertBox = document.querySelector('.alert-box');

	if (!alertBox) {
		alertBox = document.createElement('div');
		alertBox.classList.add('alert-box');
		document.body.insertBefore(alertBox, document.body.firstChild);
	}

	var alertDiv = document.createElement('div');
	alertDiv.classList.add('alert', 'alert-' + color);

	alertDiv.innerHTML = `
        ${text}
        <button type="button" class="close" onclick="closeAlert(this)">
            <span>&times;</span>
        </button>
    `;

	alertBox.insertBefore(alertDiv, alertBox.firstChild);

	setTimeout(function () {
		closeAlertButton(alertDiv.querySelector('.close'));
	}, 10000);
}

function closeAlert(closeButton) {
	var alertDiv = closeButton.parentNode;
	alertDiv.parentNode.removeChild(alertDiv);

	var alertBox = document.querySelector('.alert-box');
	if (alertBox && alertBox.children.length === 0) {
		alertBox.parentNode.removeChild(alertBox);
	}
}

function closeAlertButton(closeButton) {
	var alertDiv = closeButton.parentNode;

	alertDiv.style.transition = 'opacity 1s';
	alertDiv.style.opacity = 0;

	setTimeout(function () {
		closeAlert(closeButton);
	}, 1000);
}
