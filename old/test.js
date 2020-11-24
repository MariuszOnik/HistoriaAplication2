// disable native pinch zoom
document.body.addEventListener('touchstart', e => e.preventDefault(), { passive: false })
var but = document.getElementById("close");
var cont = document.getElementById("container");



but.addEventListener("click", function name(params) {
    closeFullScreen(cont); 
    //kuku.destroy()
})

but.addEventListener("touchstart", function name(params) {
    closeFullScreen(cont); 
    kuku.reset()
})

var elem = document.getElementById('zoom');
var kuku =  new Zoom(elem);

function closeFullScreen(parent) {

        parent.style.width = "50%";
        parent.style.heigth = "50%"; 
}