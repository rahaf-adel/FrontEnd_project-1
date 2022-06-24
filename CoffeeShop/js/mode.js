// This is a function to change the mode of page 
let toggle = document.getElementById("mode");

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})