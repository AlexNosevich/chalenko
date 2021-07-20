var splide = new Splide( '.splide' );

splide.on( 'autoplay:playing', function ( rate ) {
	console.log( rate ); 
} );

splide.mount();

 var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)

  function openModal () {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }
  function closeModal (event) {
    event.preventDefault ();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible'); 
    
  }

 // Обработка формы
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: "Имя должно быть длиннее 2-х символов",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Пожалуйста, введите свой номер телефона",
          phone: "Ваш номер должен быть в формате 89999999999",
          minlength: "Ваш номер должен быть длиннее 10-ти символов",

        },
      },
    });
  })
  $('.phone').mask('+7 (000)-000-00-00');
  $( ".phone" ).validate({
    rules: {
      field: {
        required:"More that 10 symbols",
        minlength: "More that 10 symbols",
        
      }
    }
  });
var menuButton = $('.menu-button');
  menuButton.on('click' , function() {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

//модалка для хедера планшет
var modalHeaderButton = $('[data-toggle=modal_header]');
var closeModalHeaderButton = $('.modal_header__close');
modalHeaderButton.on('click', openModalHeader);
closeModalHeaderButton.on('click', closeModalHeader)

function openModalHeader () {
  var targetModalHeader = $(this).attr("data-href");
  $(targetModalHeader).find('.modal_header__overlay').addClass('modal_header__overlay--visible');
  $(targetModalHeader).find('.modal_header__dialog').addClass('modal_header__dialog--visible');
}
function closeModalHeader (event) {
  event.preventDefault ();
  var modalHeaderOverlay = $('.modal_header__overlay');
  var modalHeaderDialog = $('.modal_header__dialog');
  modalHeaderOverlay.removeClass('modal_header__overlay--visible');
  modalHeaderDialog.removeClass('modal_header__dialog--visible');   
}

 document.getElementById('hider').onclick = function() {
  document.getElementById('text').style.display = "none";
  document.getElementById('hider').style.display = "none";
  document.getElementById('shower').style.display = "block";
  document.getElementById('navbar').style.visibility = "visible";
  document.getElementById('phone').style.display = "block"
  }
document.getElementById('shower').onclick = function() {
  document.getElementById('text').style.display = "block";
  document.getElementById('shower').style.display = "none";
  document.getElementById('hider').style.display = "block";
  document.getElementById('navbar').style.visibility = "hidden";
  document.getElementById('phone').style.display = "none"
  }
