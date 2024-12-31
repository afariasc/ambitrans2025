// Crear una función que cuando baje desde el top 100px se muestre el botón de ws
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $(".whatsapp").fadeIn();
    } else {
        $(".whatsapp").fadeOut();
    }
}