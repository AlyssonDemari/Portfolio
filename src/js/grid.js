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
	exportGrid()
}