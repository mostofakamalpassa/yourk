(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
  $.Scrollax();
	

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			width:'300',
			margin: 10,
			stagePadding: 0,
			nav: true,
			dots: false,
			navText: [ '<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('.carousel-doctor-consultation').owlCarousel({
		loop:true,
		// autoplay:true,
		margin:10,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	

	var counter = function() {
		
		$('.ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						// console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

//   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
//     disableOn: 700,
//     type: 'iframe',
//     mainClass: 'mfp-fade',
//     removalDelay: 160,
//     preloader: false,

//     fixedContentPos: false
//   });

  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('.appointment_time').timepicker();


	// $('li.nav-item').on( function(e) {
    //     localStorage.setItem('activeTab', $(e.target));
    // });
    // var activeTab = localStorage.getItem('activeTab');
    // if(activeTab){
    //     $('li.nav-item"' + activeTab + '"]').tab('active');
	// }
	
	// $("li.nav-item").click(function(e){
	// 	$('.nav-item').removeClass('active');
	// 	$(this).addClass('active');
	// 	e.preventDefault();

	// });
 

	




})(jQuery);





// gallery images 

let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  window.addEventListener('scroll', function(e){
	if(window.scrollY > 150){
		document.querySelector('.contact-icon').style.position ='fixed';
		document.querySelector('.contact-icon').style.top ='4px';
	}else{
		document.querySelector('.contact-icon').style.position ='fixed';
		document.querySelector('.contact-icon').style.top ='27px';
	}
  });

  
// Gallery images 

// MDB Lightbox Init
// $(function () {
// 	$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
// 	});


	// MDB Lightbox Init
$(function () {
	$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
	});

	// url base active and remove class
	let currentLocation = window.location.href;
	
	let menuItemLi = document.querySelectorAll('.nav-item');
	let menuItemA = document.querySelectorAll("a.nav-link");
	let firstChildClass = document.querySelector('.nav-item');
	let menuLenght = menuItemLi.length;
	
	for(let i=0; i< menuLenght; i++){
		if(menuItemA[i].href == currentLocation){
			// menuItemLi[i].className = 'nav-item active';
			//menuItemLi[i].classList.remove('active');
			menuItemLi[i].classList.add('active');
			//firstChildClass.className = 'actives';
			
		}
	}

	document.getElementById('find_doctor_id').addEventListener('click',function(){
		let dblock = document.querySelectorAll('.doctor-text-indent');
		let mm = Array.from(dblock);
			mm[0].classList.toggle("toggle-txt-indent");
			mm[1].classList.toggle("toggle-txt-indent");
		document.querySelector('section.find-doctor').classList.toggle('toggle-find-doctor');
		document.getElementById('find_doctor_id').classList.toggle("doctor-button-modify");
	});

	document.getElementById('close_id').addEventListener('click',function(){
		let dblock = document.querySelectorAll('.doctor-text-indent');
		let mm = Array.from(dblock);
		mm[0].classList.toggle("toggle-txt-indent");
		mm[1].classList.toggle("toggle-txt-indent");
		document.querySelector('section.find-doctor').classList.toggle('toggle-find-doctor');
		document.getElementById('find_doctor_id').classList.toggle("doctor-button-modify");
	});

	document.getElementById('icon_open').addEventListener('click',function(){
		let dblock = document.querySelectorAll('.doctor-text-indent');
		let mm = Array.from(dblock);
			mm[0].classList.toggle("toggle-txt-indent");
			mm[1].classList.toggle("toggle-txt-indent");
		document.querySelector('section.find-doctor').classList.toggle('toggle-find-doctor');
		document.getElementById('find_doctor_id').classList.toggle("doctor-button-modify");
	});



	
	// Appointment By Male 

	function sendEmail() {
		let department = document.getElementById("department");
		let firstName = document.getElementById("firstName");
		let lastName = document.getElementById("lastName");
		let phone = document.getElementById("phone");
		let appointmentDate = document.getElementById("appointmentDate");
		let appointmentTime = document.getElementById("appointmentTime");
		let message = document.getElementById('message');
		let appointmentMessage =document.getElementsByClassName('message-appointments');
		
		let html = `
			<html>
				<head>
				</head>
				<body>
					<h4> Application Date:${new Date().toUTCString()} </h4>
					<h3> Full Name : ${firstName.value} ${lastName.value} </h4>
					<h3> Mobile No : ${phone.value} </h3>
					<h4>Department: ${department.value}</h4>
					<h4>Application Date and Time: ${appointmentDate.value} ${appointmentTime.value}</h4>
					<h4>Message : ${message.value}</h4>
				
				<body>
			</html>
		`;

		Email.send({
		  //Host: "smtp.gmail.com",
		  SecureToken:"a0e99564-6ccc-4104-9293-5b29f2ebe8cf",
		  //Username: "emsl.mostofakamal@gmail.com",
		  //Password: "mk6683mk*",
		  To: 'mostofa1990mkp@gmail.com',
		  // From: "mostofakamal1990@gmail.com",
		  From: "01720246683@gmail.com",
		  Subject: "Appointments",
		  Body: html,
		  //a0e99564-6ccc-4104-9293-5b29f2ebe8cf 
		 
		})
		  .then(function (message) {
			console.log(message);
			  //alert("Mail has been sent successfully")
			  appointmentMessage[0].style.display='block';
			  successMessage();
		  }).catch(function(error){
			appointmentMessage[1].style.display='block';
			successMessage();
		  });
	  }


	  function successMessage(){
		let appointmentMessage =document.getElementsByClassName('message-appointments');

		setTimeout(function(){
			appointmentMessage[0].style.display='none';
		},4000);
	  }




	  // Click button Type For sending Mails
	  document.getElementById('submitAppointment').addEventListener('click', function(){
		let department = document.getElementById("department").value;
		let firstName = document.getElementById("firstName");
		let lastName = document.getElementById("lastName");
		let phone = document.getElementById("phone");
		let appointmentDate = document.getElementById("appointmentDate");
		let appointmentTime = document.getElementById("appointmentTime");
		let message = document.getElementById('message');
		let errorM = document.getElementsByClassName('errorM');

		//console.log( new Date().getDay());
		if(firstName.value.trim().length <3){
			errorM[0].style.border ="1px solid red";
			console.log("hello")
			return false;
		}
		errorM[0].style.border ="1px solid blue";

		if(lastName.value.trim().length <3){
			errorM[1].style.border ="1px solid red";
			return false;
		}
		errorM[1].style.border ="1px solid blue";

		if(phone.value.trim().length >=11 && phone.value.trim().length <=14){
			errorM[3].style.border ="1px solid blue";
			
		}
		else{
			errorM[3].style.border ="1px solid red";
			return false;
		}


		if(appointmentDate.value.trim().length >=8 && lastName.value.trim().length <=9){
			errorM[4].style.border ="1px solid blue";
			
		} 
		else{
			errorM[4].style.border ="1px solid red";
		}

		if(message.value.trim().length < 10){
			errorM[6].style.border ="1px solid red";
			return false;
		}
		errorM[6].style.border ="1px solid blue";
		
		
		sendEmail();

	  });

	  

	//   document.getElementById('readmore').addEventListener("click", function(){
	// 	  alert("ok this button work properly");
	//   })