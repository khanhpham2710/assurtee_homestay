$(function(){
	var pcFlag = false;
	var moFlag = false;

	//input
	$('.txt-input').on('focus', function(e) {
		$(e.currentTarget).closest('.form-cont').addClass('is-input')
	}).on('blur', function(e) {
		$(e.currentTarget).closest('.form-cont').removeClass('is-input')
	});
	
	//tab
	$(document).on('click', '.tab-link', function(e){
		e.preventDefault();
		const $this = $(e.currentTarget);
		const $tabWrap = $this.closest('.tab-wrap');
		const currentIndex = $this.closest('.tab-item').index();

		$tabWrap.find('.tab-item').removeClass('is-active');
		$this.closest('.tab-item').addClass('is-active');

		$tabWrap.find('.tab-panel').removeClass('is-active');
		$tabWrap.find('.tab-panel').eq(currentIndex).addClass('is-active');
	})

	//accordion
	$(document).on('click', '[data-role="accordion-title"]', function(e){
		e.preventDefault();
		const $this = $(e.currentTarget);
		const $accordionWrap = $this.closest('[data-role="accordion-wrap"]');
		const accordionType = $accordionWrap.attr('data-accordion-type');
		const $accordionItem = $this.closest('[data-role="accordion-item"]');

		$accordionItem.toggleClass('is-active');

		if (accordionType === 'single') {
			$accordionItem.siblings('[data-role="accordion-item"]').removeClass('is-active');
		}

		$accordionWrap.find('[data-role="accordion-status"]').each(function(idx, el){
			if ($(el).closest('[data-role="accordion-item"]').hasClass('is-active')) {
				$(el).text('닫기')
			} else {
				$(el).text('펼쳐보기')
			}
		});
	})

	//main slide
	$('[data-slide="wrap"]').each(function(idx, el){
		let swiperOpt;
		if ($(el).closest('.main-section').hasClass('main-section-slide')) {
			swiperOpt = {
				slidesPerView: 1,
				effect: 'fade',
				speed: 1000,
				fadeEffect: {
					crossFade: true
				},
				autoplay: {
					delay: 3000,
				},
				loop: true,
			}
		} else if ($(el).closest('.main-section').hasClass('main-section-bottom')) {
			swiperOpt = {
				slidesPerView: 1,
				speed: 1000,
				autoplay: {
					delay: 3000,
				},
				loop: true,
				pagination: {
					el: '.bottom-pagination',
					type: 'bullets',
				},
			}
		} else {
			swiperOpt = {
				slidesPerView: 'auto',
				breakpoints: {
					769: {
						navigation: {
							prevEl: '.swiper-prev',
							nextEl: '.swiper-next',
						},
					}
				},
			}
		}
		new Swiper(el, swiperOpt);
	});

	//main 위로가기
	$('.btnTop').on('click',function(){
		$('html, body').stop().animate({scrollTop:0},500)
	})

	//main 아래로가기
	$('.btn-scroll-down').on('click', function(e) {
		const nowSection = $(e.currentTarget).closest('.main-section').index();
		const calcPadding = parseInt($('.main-section').eq(nowSection+1).css('padding-top'));
		const headerHeight = $('.header').innerHeight();
		
		$('html, body').stop().animate({scrollTop:$('.main-section').eq(nowSection+1)[0].offsetTop - headerHeight + calcPadding},500)
	})

	//항목 선택
	$('.openSelect .btn-sel').on('click',function(e){
		var $this = $(this);

		if($this.closest('.openSelect').hasClass('able')){
			$this.closest('.selbox-wrap').toggleClass('open');
			const scrollCheck = $this.closest('.selbox-wrap').find('.scroll');
			const calendarCheck = $this.closest('.selbox-wrap').find('.form-calendar');
			
			if (calendarCheck.length > 0 && !$this.find('.sel-val').hasClass('selected')) {
				const currentDate = calendarCheck.datepicker("getDate");
				calendarCheck.find('.ui-datepicker-today').removeClass('ui-datepicker-days-cell-over ui-datepicker-current-day').find('.ui-state-default').removeClass('ui-state-active')
			}

			if (scrollCheck.length > 0) {
				window.myScroll.forEach(function(scroll){
					if (scroll.wrapper === scrollCheck[0]) {
						scroll.refresh();
					}
				})

				if (window.myScroll.findIndex((item) => item.wrapper === scrollCheck[0]) < 0) {
					const newScroll = new IScroll(scrollCheck[0], {
						scrollbars: true,
						mouseWheel: true,
						interactiveScrollbars: true,
						tab: true,
						click: false,
						snap: true,
						fadeScrollbars: false,
						bounce:false,
						momentum:false,
						preventDefaultException: { tagName:/.*/ }
					});
					window.myScroll.push(newScroll);
				}
			}

			$('.wrap').prepend('<div class="scroll-dimmed"></div>');
			$('body').css('overflow-y','hidden');
			$('body').addClass('popup-active');
			$('.scroll-dimmed').off('click').on('click', function(){
				$('selbox-wrap.open').find('.layer-close').trigger('click')
			})
		}
	});

	$(document).on('click', '.layer-close', function(e){
		var $this = $(this);
		$('.scroll-dimmed').remove();
		$('body').css('overflow-y','');
		$('body').removeClass('popup-active');
		$this.closest('.selbox-wrap').removeClass('open');
	});

	$(document).on('click', '.selbox-wrap label' ,function(e){
		const elText = $(this).find('.sel-txt').text();
		$(this).closest('.selbox-wrap').toggleClass('open');
		$(this).closest('.selbox-wrap').find('.openSelect .sel-val').addClass('selected').text(elText);
		$(this).closest('.selbox-wrap').find('.openSelect .base-input').val(elText);
		
		if ($(this).closest('.selbox-wrap').find('.openSelect').attr('data-sel-group') !== undefined) {
			const group = $(this).closest('.selbox-wrap').find('.openSelect').attr('data-sel-group')
			const currentIndex = parseInt($(this).closest('.selbox-wrap').find('.openSelect').attr('data-sel-step'));
			$(`[data-sel-group="${group}"][data-sel-step="${currentIndex+1}"]`).addClass('able');
		}

		$('.scroll-dimmed').remove();
		$('body').css('overflow-y','');
		$('body').removeClass('popup-active');
	});

	$('.layer-calendar .btn').on('click', function(e){
		var $this = $(this);
		if (!$this.hasClass('.btn--disabled')) {
			$('.scroll-dimmed').remove();
			$('body').css('overflow-y','');
			$('body').removeClass('popup-active');
			$this.closest('.selbox-wrap').removeClass('open');
		}
	});

	/* Footer */
  $('.btn_site').on('click',function(){
		var $siteBox = $(this).closest('.site_select');
		var openCheck = 'is_open';
		if( $siteBox.hasClass( openCheck ) ){
			$siteBox.removeClass( openCheck );
		}else {
			$siteBox.addClass( openCheck );
		}
	});

	/* Tooltip */
	$(document).on('click', '.tooltip-btn', function(e){
		var $this = $(this),
		    activeShow = 'is-show',
        tooltip = $this.closest('.tooltip');

		tooltip.toggleClass(activeShow)
	});
	
	$(document).on('click', '[data-role="call"]', function(e){
		var $this = $(this),
		telNumber = $this.text(),
		pooup = document.querySelector('[data-role="layer-call"]')

		e.preventDefault();
		popOpen(pooup, telNumber);
	});

	$(document).on('click', '[data-role="layer-close"]', function(e){
		var $this = $(this),
			$popup = $this.closest('[data-popup-type]')[0];
		e.preventDefault();
		popClose($popup)
	});

	$(window).on({
		scroll:function(e){
			var winTop = $(document).scrollTop();

			if(winTop > 0){
				$('body').addClass('fixed');
				if ($('.main-section-slide').length > 0) {
					if (winTop >= $('.main-section-slide').height()) {
						$('body').addClass('header-shadow');
					} else {
						$('body').removeClass('header-shadow');
					}
				}
			} else {
				$('body').removeClass('fixed');
			}
		},
		load:function(){
			window.myScroll = new Array();
			$('.scroll').each(function(idx, el){
				$(this).attr('id', `scroll_${idx}`);
				window.myScroll.push(new IScroll(`#scroll_${idx}`, {
					scrollbars: true,
					mouseWheel: true,
					interactiveScrollbars: true,
					tab: true,
					click: false,
					snap: true,
					fadeScrollbars: false,
					bounce:false,
					momentum:false,
					preventDefaultException: { tagName:/.*/ }
				}));
			})

			$.datepicker.setDefaults({
				closeText: "선택하기",
				dateFormat: 'yy.mm.dd',
				showMonthAfterYear: true,
				yearSuffix: "년",
				monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
				monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
				dayNamesMin: ['일','월','화','수','목','금','토'],
				dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
				onSelect : function( dateText, inst ){
					const $this = $(this);
					$this.closest('.selbox-wrap').find('.inp-cal .sel-val').addClass('selected').text(dateText);
					$this.closest('.selbox-wrap').find('.btn').removeAttr('disabled').removeClass('btn--disabled');

					if ($this.hasClass('date-start')) {
						to.datepicker( "option", "minDate", getDate( this ) );
					} else {
						from.datepicker( "option", "maxDate", getDate( this ) );
					}
				}
			});

			var dateFormat = "yy.mm.dd",
				from = $( ".date-start").datepicker().on( "change", function() {
					to.datepicker( "option", "minDate", getDate( this ) );
				}),
				to = $( ".date-end").datepicker().on( "change", function() {
					from.datepicker( "option", "maxDate", getDate( this ) );
				});

			function getDate( element ) {
				let date;
				try {
					date = $.datepicker.parseDate( dateFormat, element.value );
				} catch( error ) {
					date = null;
				}

				return date;
			}
		},
		resize: function(){
			if ($(window).width() < 1080) {
				if (moFlag === false) {
					moFlag = true;
					pcFlag = false;
				}
			} else {
				if (pcFlag === false) {
					pcFlag = true;
					moFlag = false;
				}
			}
		}
	});
});

//팝업노출
function popOpen(el, num=null){
	if ($(el).parent().closest('[data-popup-type]').length > 0 && $(el).parent().closest('[data-popup-type]').hasClass('is-active')) {
		$('.scroll-dimmed').css('opacity', '0');
		$(el).parent().closest('[data-popup-type]').prepend('<div class="modal-dimmed"></div>')
	}
	if ($(el).attr('data-popup-type') === 'layer' && $('.scroll-dimmed').length < 1) {
		$('.wrap').prepend('<div class="scroll-dimmed"></div>');
	}
	if (num !== null) {
		$(el).find('.popup-title').text(num);
	}
	$('body').css('overflow-y','hidden');
	$('body').addClass('popup-active');
	$(el).addClass('is-active');
}

function popClose(el){
	$(el).removeClass('is-active');
	if ($('.modal-dimmed').length > 0) {
		$('.modal-dimmed').remove();
		$('.scroll-dimmed').css('opacity', '');
	} else {
		$('body').css('overflow-y', '');
		$('body').removeClass('popup-active');
		$('.scroll-dimmed').remove();
	}
}