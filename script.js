$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navibar').addclass("sticky");
        }else{

        }
    })
});




// var desknav = document.getElementById('desknav');
// window.addEventListener('scroll', function () {
//     if (this.scrollY > 20) {
//         desknav.classList.add('sticky');
//     }
//     if (this.scrollY == 0){
//         desknav.style.backgroundColor='none';
//     }
//     desknav.style.padding = '1.5rem 0';
//     desknav.style.backgroundColor = 'crimson';
// })