export default function initTooltipMenu(){
    const dropMenu = document.querySelector('[data-menu="dropdown]');

    function dropdownMenu(){
        dropMenu.classList.add('dropativo');
    }
    dropMenu.addEventListener('mouseenter', dropdownMenu)
}
