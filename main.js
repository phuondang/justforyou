var spidol = new Audio('spidol.mp3');
$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        
        // spidol.play();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion(){
    var audioDoaMa = new Audio('makeu.mp3');
    var audioNo = new Audio('no.mp3');
    
    $('.content').hide();
    Swal.fire({
        title: 'I love youuu 🫶',
        imageUrl: 'cuteCat.jpg',
        background: '#fff url("iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: 'Ok'
      })
    }

