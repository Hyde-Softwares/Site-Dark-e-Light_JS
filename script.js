'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    
    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Light";
        document.body.classList.toggle("light-theme")
        document.body.className = "dark-theme";
    }
    else if (className == "dark-theme") {
        this.textContent = "Dark";
        document.body.classList.toggle("dark-theme")
        document.body.className = "light-theme";
    }
    console.log('currrent class name: ' + className);
});

