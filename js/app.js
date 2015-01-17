$(document).foundation();
			$(function(){
			var act;
				$('.fullPage').css({'min-height':$(window).height()});
				$(window).on('scroll', function(){
					/* PARALLAX LIKE BG EFFECT cancel
					if($(window).width() >=870){*/
						$('body').css({"background-position": "20% -" + $(window).scrollTop()/2 + "px"});
					//}
					
					/* MAGELLAN LIKE NAV EFFECT */
					if($(window).scrollTop() + 20 > $('#webapps').offset().top)
					{
						act = "#webapps";
						if($(window).scrollTop() + 20 > $('#deskapps').offset().top)
						{
							act = "#deskapps";
							if($(window).scrollTop() + 20 > $('#invest').offset().top)
							 {
								act = "#invest";
								if($(window).scrollTop() + 20 > $('#harvest').offset().top)
								{
									act = "#harvest";
								}
							}
						}
					} 
					else 
					{
						act = "";
					}
					if(act != "")
					{
						$('.top-bar section li:not(.has-form) a:not(.button)').removeClass('activeLink');
						$('.top-bar section li:not(.has-form) a:not(.button)[href="' + act + '"]').addClass('activeLink');
					}
					else 
					{
						$('.top-bar section li:not(.has-form) a:not(.button)').removeClass('activeLink');
					}
					
				});
				$('.top-bar .toggle-topbar.menu-icon a').on('click', function(e){
					e.preventDefault();
				});
				$('.top-bar section li:not(.has-form) a:not(.button)').on('click', function(e){
					e.preventDefault();
					var a = $(this);
					$('html, body').stop().animate({
						scrollTop: $(a.attr('href')).offset().top
					}, 800, 'swing');
				});
				$('#captch').realperson({dot: "°", length: 9, regenerate: '<span class="fa fa-refresh"></span> Ask for new code'});
					$('form').on('submit', function(){
						$.ajax({
							type: "POST",
							url: 'js/realperson/jquery.realperson.php',
							data: {defaultReal: $('#captch').val(), defaultRealHash: $('input[name="captchHash"]').val()},
							success: function(dat){
								$('#result').append(dat);
							}
						});
						return false;
					});
			});