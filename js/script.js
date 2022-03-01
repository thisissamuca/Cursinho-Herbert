$(document).ready(() => {
    
    $('.navbar-collapse').css('justify-content', 'end')

});

// function ocultar () {
// 
//     $('.navbar-brand').hide()
// 
//     setTimeout(() => {
// 
//         $('.navbar').css('background','rgb(26, 23, 29)')
// 
//     }, 0);
// 
// };

// function mostrar () {
// 
//     setTimeout(() => {
// 
//         $('.navbar').css('background','rgb(26, 23, 29)')
// 
//     }, 0);
// 
// };

// function alinhar () {
// 
//     setTimeout(() => {
// 
//         $('.navbar-collapse').css('justify-content', 'space-evenly')
// 
//     }, 0);
// 
// };

// function colorText () {
// 
//     $('.nav-link').css('color','white')
// 
//     $('#home').css('font-size','20px')
// 
//     $('#projetos').css('font-size','20px')
// 
//     $('#missao').css('font-size','20px')
// 
//     $('#equipe').css('font-size','20px')
// 
//     $('#blog').css('font-size','20px')
// 
//     $('#home').css('font-weight','normal')
// 
//     $('#projetos').css('font-weight','normal')
// 
//     $('#missao').css('font-weight','normal')
// 
//     $('#equipe').css('font-weight','normal')
// 
//     $('#blog').css('font-weight','normal')
// 
// };

colorWhite ()

 function colorWhite () {
 
    $('#home').mouseenter( () => { 

        $('#home').css('text-decoration','underline')
    
    });

    $('#home').mouseleave( () => { 

        $('#home').css('text-decoration','none')
    
    });

 
     $('#projetos').mouseenter( () => {
 
       $('#projetos').css('color','white') 
 
     });

     $('#projetos').mouseleave( () => { 

        $('#projetos').css('text-decoration','none')
    
    });
 
     $('#equipe').mouseenter( () => {
 
         $('#equipe').css('color','white') 
 
         $('#equipe').css('text-decoration','underline')
          
     });

     $('#equipe').mouseleave( () => { 

        $('#equipe').css('text-decoration','none')
    
    });
 
     $('#missao').mouseenter( () => {
 
       $('#missao').css('color','white') 
 
       $('#missao').css('text-decoration','underline')
        
     });

     $('#missao').mouseleave( () => { 

        $('#missao').css('text-decoration','none')
    
    });
 
     $('#blog').mouseenter( () => {
 
       $('#blog').css('color','white') 
 
       $('#blog').css('text-decoration','underline')
 
     });

     $('#blog').mouseleave( () => { 

        $('#blog').css('text-decoration','none')
    
    });
 
     $('#projetos').mouseenter( () => {
 
       $('#projetos').css('color','white') 
 
       $('#projetos').css('text-decoration','underline')
 
     });

     $('#projetos').mouseleave( () => { 

        $('#projetos').css('text-decoration','none')
    
    });

};

// $(".bar").click(function () { 
// 
//     setTimeout(() => {
// 
//         $('.bar').addClass('oculto')
// 
//         mostrar ()
// 
//     }, 0);
// 
//     setTimeout(() => {
// 
//         colorText ();
// 
//         colorWhite ();
// 
//     }, 0);
// 
//     setTimeout(() => {
// 
//         alinhar ();
// 
//     }, 0);
// 
//     setTimeout(() => {
// 
//         $('.navbar-nav').removeClass('oculto')
// 
//     }, 0);
//    
// });

// $(".navbar").mouseleave(function () { 
// 
//     setTimeout(() => {
// 
//         $('.bar').removeClass('oculto')
// 
//         $('.navbar-nav').addClass('oculto')
// 
//         $('.navbar-collapse').css('justify-content', 'space-evenly')
// 
//         $('.navbar').css('background','rgb(26, 23, 29, 0.50)')
//         
//     }, 0);
// 
// });

// Movimento do brilho com mouse

const cardBrightness = document.querySelector(".brightness");

const brightnessEffect = ({ target, offsetX, offsetY, touches }) => {
  let posX, posY;
  if (touches) {
    const [touch] = touches;
    posX = touch.pageX - touch.target.offsetLeft;
    posY = touch.pageY - touch.target.offsetTop;
  } else {
    posX = offsetX;
    posY = offsetY;
  }

  target.style.setProperty("--posX", `${posX}px`);
  target.style.setProperty("--posY", `${posY}px`);
};

cardBrightness.addEventListener("mousemove", brightnessEffect);
cardBrightness.addEventListener("touchmove", brightnessEffect);