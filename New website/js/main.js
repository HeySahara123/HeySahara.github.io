window.onload = () => {
  const slider = document.querySelector(".slider");
  const sliderLeft = slider.querySelector(".slider-left");
  const sliderRight = slider.querySelector(".slider-right");

  const slidesContent = sliderLeft.querySelectorAll(".slide-content");
  const slidesImages = sliderRight.querySelectorAll(".slide-main-image");

  const currentSlideNo = sliderRight.querySelectorAll(
    ".slider-slide-control-left-text"
  )[0];
  const sliderProgress = slider.querySelector(
    ".slider-slide-control-left-line"
  );

  const nextBtn = slider.querySelector(".next-btn");
  const prevBtn = slider.querySelector(".prev-btn");
  const sliderNextImage = sliderRight.querySelector(
    ".slider-next-prev-image img"
  );

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  sliderNextImage.parentElement.addEventListener("click", () => {
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  let slideCounter = 0;

  const nextSlide = () => {
    const activeContentSlide = sliderLeft.querySelector(
      ".slide-content.active"
    );
    const activeImageSlide = sliderRight.querySelector(
      ".slide-main-image.active"
    );

    // remove active classes
    activeContentSlide.classList.remove("active");
    activeImageSlide.classList.remove("active");

    // calculate next slide no.

    slideCounter = (slideCounter + 1) % slidesContent.length;

    // add active classes to Image,content, nextImage and other

    slidesContent[slideCounter].classList.add("active");
    slidesImages[slideCounter].classList.add("active");

    sliderNextImage.src =
      slidesImages[
        slideCounter === slidesImages.length - 1 ? 0 : slideCounter + 1
      ].querySelector("img").src;

    sliderProgress.style.setProperty(
      "--progress-width",
      `${(slideCounter + 1) * 20}%`
    );
    currentSlideNo.textContent = "0" + (slideCounter + 1);
  };

  const prevSlide = () => {
    const activeContentSlide = sliderLeft.querySelector(
      ".slide-content.active"
    );
    const activeImageSlide = sliderRight.querySelector(
      ".slide-main-image.active"
    );

    // remove active classes
    activeContentSlide.classList.remove("active");
    activeImageSlide.classList.remove("active");

    // calculate next slide no.

    slideCounter =
      (slideCounter - 1 + slidesContent.length) % slidesContent.length;

    // add active classes to Image,content, nextImage and other

    slidesContent[slideCounter].classList.add("active");
    slidesImages[slideCounter].classList.add("active");

    sliderNextImage.src =
      slidesImages[
        slideCounter === slidesImages.length - 1 ? 0 : slideCounter + 1
      ].querySelector("img").src;

    sliderProgress.style.setProperty(
      "--progress-width",
      `${(slideCounter + 1) * 20}%`
    );
    currentSlideNo.textContent = "0" + (slideCounter + 1);
  };
};
