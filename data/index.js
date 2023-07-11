const input = document.getElementById('input');
const video = document.getElementById('video');
let link ="";

input.addEventListener('input', (e) => {
    link = e.target.values;
    if (link){
    video.innerHTML = `<iframe width="853" height="480" src="${link}" title="Comment créer un site web avec React" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
});

//https://www.youtube.com/embed/L0r427Rdl9s