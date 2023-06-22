document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-4f2e30b8' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
							imagesLoaded( element ).on( 'always', function() {
								element.style.visibility = 'visible';
							});
						}
						UAGBImageGalleryMasonry.init( {"block_id":"4f2e30b8","classMigrate":true,"readyToRender":true,"tileSize":294,"focusListObject":[],"mediaGallery":[{"sizes":{"full":{"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-roman-odintsov-5903101.jpg","height":4425,"width":2950,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":172,"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-roman-odintsov-5903101.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/home\/pexels-roman-odintsov-5903101-2\/","caption":"Pratos sempre frecos"},{"sizes":{"full":{"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-vincent-rivaud-2147491.jpg","height":4032,"width":3024,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":173,"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-vincent-rivaud-2147491.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/home\/pexels-vincent-rivaud-2147491-2\/","caption":"Cozinha de primeira"},{"sizes":{"full":{"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-mikhail-nilov-7780260.jpg","height":5755,"width":3826,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":174,"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-mikhail-nilov-7780260.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/home\/pexels-mikhail-nilov-7780260-2\/","caption":"Melhores pizzas"},{"sizes":{"full":{"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-polina-tankilevitch-4109111.jpg","height":1920,"width":1280,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":178,"url":"https:\/\/localhost\/wordpress\/wp-content\/uploads\/2023\/06\/pexels-polina-tankilevitch-4109111.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/home\/pexels-polina-tankilevitch-4109111\/","caption":"Pizzas deliciosas"}],"mediaIDs":[172,173,174,178],"feedLayout":"masonry","imageClickEvent":"lightbox","captionVisibility":"always","captionDisplayType":"bar-inside","imageCaptionAlignment":"bottom center","imageCaptionAlignment01":"bottom","columnsDesk":2,"columnsTab":4,"columnsMob":4,"focusList":[],"imageDisplayCaption":true,"galleryImageSize":"large","galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","imageCaptionAlignment02":"center","imageDefaultCaption":"No Caption","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","gridImageGap":8,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPages":1,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateUseLoader":true,"paginateLimit":9,"paginateButtonAlign":"center","paginateButtonText":"Load More Images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageEnableZoom":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, '.uagb-block-4f2e30b8' );
					}
				});
							window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-4f2e30b8' );
					if ( ! blockScope ) {
						return;
					}

					let lightboxSwiper = null;
					let thumbnailSwiper = null;
					const theBody = document.querySelector( 'body' );
					const updateCounter = ( curPage ) => {
						const lightbox = blockScope.nextElementSibling;
						const counter = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--count-page' );
						counter.innerHTML = parseInt( curPage ) + 1;
					};

					const enableLightbox = ( goTo ) => {
						if ( ! lightboxSwiper ) {
							return;
						}
						const lightbox = blockScope.nextElementSibling;
						lightbox.style.display = '';
						lightbox.focus();
						setTimeout( () => {
							lightboxSwiper.slideTo( goTo );
						}, 100 );
						setTimeout( () => {
							lightbox.style.opacity = 1;
							theBody.style.overflow = 'hidden';
						}, 250 );
					}
										const images = blockScope.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
					for ( let i = 0; i < images.length; i++ ) {
						images[ i ].style.cursor = 'pointer';
						images[ i ].addEventListener( 'click', () => enableLightbox( i ) );
					}
										let lightboxSettings = {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-4f2e30b8+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-4f2e30b8+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}};
															lightboxSwiper = new Swiper( ".uagb-block-4f2e30b8+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main",
						{"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-4f2e30b8+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-4f2e30b8+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}					);
										lightboxSwiper.on( 'activeIndexChange', ( swiperInstance ) => {
																	} );
															if ( blockScope.nextElementSibling.classList.contains( 'spectra-image-gallery__control-lightbox' ) ) {
												const lightbox = blockScope.nextElementSibling;
						lightbox.addEventListener( 'keydown', ( event ) => {
							if ( 27 === event.keyCode ) {
								theBody.style.overflow = '';
								lightbox.style.opacity = 0;
								setTimeout( () => {
									lightbox.style.display = 'none';
								}, 250 );
							}
						} );
						lightbox.style.display = 'none';
													const closeButton = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--close' );
							if ( closeButton ) {
								closeButton.addEventListener( 'click', () => {
									theBody.style.overflow = '';
									lightbox.style.opacity = 0;
									setTimeout( () => {
										lightbox.style.display = 'none';
									}, 250 );
								} );
							}
																							}
				} );
			 });