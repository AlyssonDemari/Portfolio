function exportGrid(){
	const buttons = document.querySelectorAll('.projects__button');

	buttons.forEach(button => {

		button.addEventListener('click', (event) => {
			const clickedButton = button;
			
			buttons.forEach(btn => {
				btn.classList.remove('active');
			});

			clickedButton.classList.add('active');
			
		});
	});
}


export function initGrid(){
	exportGrid()
}