
function getContainerHeight(){
    // if($(window).width()==1920||$(window).width()==1920||$(window).width()==1920){
    //     // getContainerHeight();
    // }
    
    const headingSectionHeight = $('.heading-section').outerHeight(true);
    const image01Height = $('.img01').outerHeight(true);
    const mainButtonHeight = $('.main-button').outerHeight(true);
    const contentPaddingTop = parseInt($('.content').css('padding-top'));
    const boxSection = $('.box-section').outerHeight(true)
    const slideIndicator = $('.slide-indicator').outerHeight(true)
    let contentHeight;
    if($(window).width()<=375){
        contentHeight = headingSectionHeight+image01Height+mainButtonHeight+contentPaddingTop+boxSection+slideIndicator;
        $('.content').height(contentHeight);
    } else {
        contentHeight = headingSectionHeight+image01Height+mainButtonHeight+contentPaddingTop;
        $('.content').height(contentHeight);
    }
    
    console.log(contentHeight, 'contenet height');
    console.log(slideIndicator,'slide indicator');
    console.log(boxSection, 'box section');
    console.log(mainButtonHeight, 'main button');
    console.log(headingSectionHeight,'heading');
    console.log(image01Height,' imageheight');
    console.log(contentPaddingTop, 'padding top');
    
    
    
}

window.onload = function(){
    $(window).resize(function() {
        getContainerHeight();
    })
    getContainerHeight();
    // slider();
    // Slider on mobile

    var click = false;
    var startX;
    var endX;
    var distanceTouch;
    const content = document.querySelector('.content');
    const imageNodeList  = document.querySelectorAll('.image')
    var currentZindex = 1;
    var currentSlide = 1;
            content.addEventListener('touchstart', function(e){
                click = true;
                startX = e.touches[0].clientX;
                
            })
            content.addEventListener('touchmove', function(e){
                if(!click) return;
                const imagesArray = Array.from(document.querySelectorAll('.image img'));
                if(imagesArray.includes(e.target)) {
                    distanceTouch = e.touches[0].clientX - startX;
       
                } 
            })
            content.addEventListener('touchend', function(e){
                if(!click) return;
                click = false;

                if (distanceTouch<-100){
                    if(currentSlide==imageNodeList.length) return;
                    currentSlide++;

                    changeSlide(currentSlide);
                    changeSlideIndicator(currentSlide);
 
                } else if (distanceTouch> 100){
                    if(currentSlide==1) return;

                    currentSlide--;
                    changeSlide(currentSlide);
                    changeSlideIndicator(currentSlide);
                }
                
                function changeSlide(currentSlide){
                    var image = document.querySelector(`.img0${currentSlide}`)
                    imageNodeList.forEach((img)=>{
                        img.style.opacity = 0;
                    })
                    currentZindex++;
                    image.style.zIndex = currentZindex;
                    image.style.opacity = 1;
                }
                function changeSlideIndicator(currentSlide){
                    const indicator = document.querySelectorAll('.slide-indicator div')
                    console.log(indicator, 'child');
                    
                    indicator.forEach((child)=>{
                        child.classList.remove('active')
                    })
                    indicator[currentSlide-1].classList.add('active')
                }
                
            })
            
            
           
            
            

    
    
}