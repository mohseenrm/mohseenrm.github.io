'use strict';document.addEventListener('DOMContentLoaded',function(){function toggleMobileNavState(){var body=document.querySelector("body");body.classList.toggle("nav--active");}
function initBurger(){var burger=document.querySelector(".burger");burger.addEventListener("click",toggleMobileNavState);}
var toggle=document.getElementById('theme-toggle');toggle.addEventListener('change',function(e){if(e.target.checked){document.documentElement.setAttribute('data-theme','dark');return;}
document.documentElement.setAttribute('data-theme','light');});initBurger();});