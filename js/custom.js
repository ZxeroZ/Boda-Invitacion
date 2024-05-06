(function($) {
    "use strict";
	
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});
	
	/* ..............................................
    Gallery
    ................................................. */
	
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
	
	/* ..............................................
    Smooth Scroll
    ................................................. */
	
	$('a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 65,
				  }, 1000);
				  return false;
			  }
		}
	});
	
}(jQuery));



// Obtener la fecha objetivo (25 de mayo)
const fechaObjetivo = new Date('2024-05-25T00:00:00');

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').innerText = dias + 'd';
  document.getElementById('horas').innerText = horas + 'h';
  document.getElementById('minutos').innerText = minutos + 'm';
  document.getElementById('segundos').innerText = segundos + 's';

  if (diferencia < 0) {
    clearInterval(contadorInterval);
    document.querySelector('.contador').innerHTML = '<div>¡Ya ha pasado!</div>';
  }
}

// Actualizar contador cada segundo
const contadorInterval = setInterval(actualizarContador, 1000);

// Actualizar contador al cargar la página
actualizarContador();






function entrarConMusica() {
	document.getElementById('popupContainer').style.display = 'none';
	document.getElementById('audioPlayer').play();
  }
  
  function cerrarPopup() {
	document.getElementById('popupContainer').style.display = 'none';
  }


  /*/////////////////////////////////////////////////////////////////*/
  /*/////////////////////////////////////////////////////////////////*/
  /*/////////////////////////////////////////////////////////////////*/
  /*/////////////////////////////////////////////////////////////////*/


  function crearMensajeWhatsApp() {
	var nombre = document.getElementById("nombre").value;
	var invitados = document.getElementById("invitados").value;
	var eventos = document.getElementById("eventos").value;
	var mensaje = document.getElementById("mensaje").value;
  
	var mensajeWhatsApp = "Hola! Mi nombre es " + nombre + " confirmo mi asistencia a " + eventos + " y llevaré " + invitados + " invitados.";
	if (mensaje.trim() !== "") {
	  mensajeWhatsApp += " Mensaje: " + mensaje;
	}
  
	// Crear el enlace de WhatsApp
	var telefono = "+51 930884778"; // Reemplaza con tu número de WhatsApp
	var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensajeWhatsApp);
  
	// Abrir enlace de WhatsApp en una nueva pestaña
	window.open(url, '_blank');
  
  }