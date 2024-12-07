
const svgMenuBar = document.getElementById('svgMenuBar');
const svgClose = document.getElementById('svgClose');

svgMenuBar.addEventListener('click', () => {
    svgMenuBar.classList.add('hide');
    svgClose.classList.remove('hide'); 
});

svgClose.addEventListener('click', () => {
    svgClose.classList.add('hide'); 
    svgMenuBar.classList.remove('hide');
});
