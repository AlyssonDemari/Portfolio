import { initCharts } from '../src/js/charts.js';
import { initBurger } from '../src/js/scroll.js';
import { initDarkMode } from '../src/js/darkMode.js';       
import { initGrid } from '../src/js/grid.js';       

document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    initCharts();
	initBurger();
    initGrid();
});