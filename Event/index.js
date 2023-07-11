const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    img.classList.toggle('show')
})
// ***********************************************************

const mousseEvent = document.querySelector('.mousseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mousseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.HTMLDivElement = e.y;
    mousseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500){
        document.body.style.filter = "blur(3px)";
    }
})
// ***************************************************************
const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const salmon = document.querySelector('.salmon');
const yellow = document.querySelector('.yellow');

theme.forEach((item) => {
   item.addEventListener('click', (e) =>{
       console.log(e.target.id);
       document.body.classList.remove("darktheme", "salmontheme", "yellowtheme");
       switch (e.target.id){
           case "dark":
           document.body.classList.add("darktheme");
           break;
           case "salmon":
           document.body.classList.add("salmontheme");
           break;
           case "yellow":
           document.body.classList.add("yellowtheme");
           break;
           default:
           null;
       }
   }) 
});