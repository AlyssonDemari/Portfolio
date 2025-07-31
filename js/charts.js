function animarGrafico(){
	const chart = document.querySelectorAll('.skills__chart');


	chart.forEach(chart => {
		const circle = chart.querySelector('.skills__bar');

		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius; 
		const percent = chart.dataset.percent;

		circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;

		setTimeout(() => {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }, 3000);
	})
};

async function carregarDados(){
	const response = await fetch('src/json/charts.json');
	const dados = await response.json();
	const chartsContainer = document.querySelector('.skills__charts');

	chartsContainer.innerHTML = '';

	dados.forEach(chartData => {
		const chartHTML = `
                <div class="skills__chart" data-percent="${chartData.percent}">
                    <svg class="skills__circle">
                        <circle class="skills__bg" cx="50%" cy="50%" r="75"></circle>
                        <circle class="skills__bar" cx="50%" cy="50%" r="75"></circle>
                    </svg>
                    <div class="skills__porcent">
                        ${chartData.title}
                    </div>
                </div>`;

		chartsContainer.insertAdjacentHTML('beforeend', chartHTML);

		animarGrafico();
	});
};

document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
});