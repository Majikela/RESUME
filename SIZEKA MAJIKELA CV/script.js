//script.js

//wait until the DOM is fully loaded

    const body= document.body;
    const tbutton= document.getElementById('theme-switch'); //select the existing button

    //Add an event listener to the toggle button that listens for a click event
    tbutton.addEventListener('click',()=>{

        body.classList.toggle("dark-mode");
    //Select the elements that should also switch the dark mode
    const elementaToToggle =[document.querySelector("nav"),document.querySelectorAll('section'),toggleButtonforEach];

    //loop through each element in array and toggle the dark mode class
    elementaToToggle.forEach(element=>{
        element.classList.toggle("dark-mode");
    })

});
