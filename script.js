function getContainerHeight() {
  
    const headingSectionHeight = $(".heading-section").height();
    const image01Height = $(".img01").outerHeight(true);
    const mainButtonHeight = $(".main-button").outerHeight(true);
    const contentPaddingTop = parseInt($(".content").css("padding-top"));
    const boxSection = $(".box-section").outerHeight(true);
    const slideIndicator = $(".slide-indicator").outerHeight(true);
    let contentHeight;
    if ($(window).width() <= 375) {
      contentHeight = headingSectionHeight + image01Height + mainButtonHeight + contentPaddingTop + boxSection + slideIndicator;
      $(".content").height(contentHeight);
    } else {
      contentHeight =
        headingSectionHeight +
        image01Height +
        mainButtonHeight +
        contentPaddingTop;
      $(".content").height(contentHeight);
    }
  }

  function slider() {

    var click = false;
    const userTouchDistance = 25;
    var startX;
    var distanceTouch;
    const content = document.querySelector(".content");
    const imageNodeList = document.querySelectorAll(".image");
    var currentZindex = 1;
    var currentSlide = 1;
    
    content.addEventListener("touchstart", function(e) {
      click = true;
      startX = e.touches[0].clientX;
    });
    content.addEventListener("touchmove", function(e) {
      if (!click) return;
    //   const imagesArray = Array.from(document.querySelectorAll(".image img"));
    //   if (imagesArray.includes(e.target)) {
    //     distanceTouch = e.touches[0].clientX - startX;
    //   }
    });
    content.addEventListener("touchend", function(e) {
      if (!click) return;
      click = false;
  
      if (distanceTouch < -userTouchDistance) {
        if (currentSlide == imageNodeList.length) return;
        currentSlide++;
  
        changeSlide(currentSlide);
        changeSlideIndicator(currentSlide);
      } else if (distanceTouch > userTouchDistance) {
        if (currentSlide == 1) return;
  
        currentSlide--;
        changeSlide(currentSlide);
        changeSlideIndicator(currentSlide);
      }
  
      function changeSlide(currentSlide) {
        var image = document.querySelector(`.img0${currentSlide}`);
        imageNodeList.forEach(img => {
          img.style.opacity = 0;
        });
        currentZindex++;
        image.style.zIndex = currentZindex;
        image.style.opacity = 1;
      }
      function changeSlideIndicator(currentSlide) {
        const indicator = document.querySelectorAll(".slide-indicator div");
        console.log(indicator, "child");
  
        indicator.forEach(child => {
          child.classList.remove("active");
        });
        indicator[currentSlide - 1].classList.add("active");
      }
    });
  }

  window.onload = function() {
    $(window).resize(function() {
      getContainerHeight();
    });
    getContainerHeight();
  
    // Slider on mobile
    slider();
  };
  
  