import $ from "jquery";
import 'jquery-custom-select';

$(document).ready(function(){
    //range
    const rangeInputEl = document.getElementById('rangeInput');
    const rangeValueEl = document.getElementById('rangeValue');

    rangeValueEl.innerText = `${rangeInputEl.value} %`;

    rangeInputEl.addEventListener('input', () => {
        rangeValueEl.innerText = `${rangeInputEl.value} %`;
    })

    //select
    $('.ordering__select .select').customSelect({
        placeholder: '<span class="ordering__placeholder">Выберите тип системы</span>',
        modifier: 'custom-select',
        transition: 400,
    });

    //burger
    $('.header__burger').click(function(event) {
        $('.header__burger-menu').toggleClass('header__active');
    });
})