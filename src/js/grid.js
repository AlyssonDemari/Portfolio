function exportGrid(){
	const filterButtons = document.querySelectorAll('.projects__button');
    const projectItems = document.querySelectorAll('.projects__item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                // Se o filtro for 'all' ou a categoria do item corresponder ao filtro
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block'; // Ou 'flex', 'grid', dependendo do seu layout
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

}

export function initGrid(){
    //Esta chamando a função dentro do exportItem()
}

async function exportItem(){

    try {
    const json = await fetch('src/json/Item.json');
    const itens = await json.json();

    const contGrid = document.querySelector('.projects__gridCont');

    contGrid.innerHTML = '';

    itens.forEach(item => {
        const htmlItem = `
        <div class="projects__item" data-category="${item.category}">
            <div class="item">
            <img class="item__img" src="${item.imgSrc}" alt="${item.imgAlt}">
            <div class="item__language">
                </div>
            <div class="item__footer">
                <h1 class="item__title">${item.title}</h1>
                <div class="item__language">
                    <i class="${item.tecnology1} item__icon"></i>
                    <i class="${item.tecnology2} item__icon"></i>
                    <i class="${item.tecnology3} item__icon"></i>
                    <i class="${item.tecnology4} item__icon"></i>
                </div>
                <button><a class="item__button" href="${item.repoUrl}" target="_blank">Repositório</a></button>
            </div>
            </div>
        </div>
        `;

        // Adiciona o HTML do item ao contêiner
        contGrid.innerHTML += htmlItem;
        exportGrid();
    });

    } catch (error) {
    alert('Erro ao carregar os projetos: ' + error.message);
    }

}

export function initItem(){
    exportItem()
}