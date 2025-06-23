//首頁輪播(點擊)
function handleDishSlide() {
  const isMobile = () => window.innerWidth <= 767;
  const dishCardList = document.querySelector(".dish-cardlist");
  const mobileCarousel = document.querySelector(".mobile-carousel");
  const carouselWrapper = document.querySelector(".carousel-wrapper");

  let cards = [];
  let currentIndex = 0;

  function initCarousel() {
    cards = Array.from(document.querySelectorAll(".dish-card"));

    if (cards.length === 0) {
      console.warn("No .dish-card elements found to initialize carousel.");
      return;
    }

    carouselWrapper.innerHTML = "";

    cards.forEach((card, index) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");
      slide.classList.add("dish-carousel-slide");

      if (index === 0) slide.classList.add("active");
      slide.innerHTML = card.innerHTML;
      carouselWrapper.appendChild(slide);
    });

    if (currentIndex >= cards.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function showSlide(index) {
    const slides = document.querySelectorAll(".dish-carousel-slide");

    if (slides.length === 0) {
      console.warn("No .dish-carousel-slide elements found to show.");
      return;
    }
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
  }

  const prevButton = document.getElementById("prevMobile");
  const nextButton = document.getElementById("nextMobile");

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      if (cards.length > 0) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showSlide(currentIndex);
      }
    });
  } else {
    console.warn("Previous button (#prevMobile) not found.");
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      if (cards.length > 0) {
        currentIndex = (currentIndex + 1) % cards.length;
        showSlide(currentIndex);
      }
    });
  } else {
    console.warn("Next button (#nextMobile) not found.");
  }

  function handleResize() {
    if (isMobile()) {
      if (dishCardList) dishCardList.style.display = "none";
      if (mobileCarousel) mobileCarousel.style.display = "block";
      initCarousel();
    } else {
      if (dishCardList) dishCardList.style.display = "flex";
      if (mobileCarousel) mobileCarousel.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
}

//貓咪輪播
function handleMeowSlide() {
  const isMobile = () => window.innerWidth <= 767;
  const meowCardList = document.querySelector(".meow-cardlist");
  const meowCarousel = document.querySelector(".meow-carousel");
  const carouselWrapper = document.querySelector(".carousel-wrapper-meow");

  let meowCards = [];
  let meowIndex = 0;

  function initMeowCarousel() {
    meowCards = Array.from(document.querySelectorAll(".meow-card"));
    if (meowCards.length === 0) return;

    carouselWrapper.innerHTML = "";

    meowCards.forEach((card, index) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");
      slide.classList.add("meow-carousel-slide");
      if (index === 0) slide.classList.add("active");
      slide.innerHTML = card.innerHTML;
      carouselWrapper.appendChild(slide);
    });

    if (meowIndex >= meowCards.length) {
      meowIndex = 0;
    }
    showMeowSlide(meowIndex);
  }

  function showMeowSlide(index) {
    const slides = document.querySelectorAll(
      ".carousel-wrapper-meow .meow-carousel-slide"
    );
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
  }

  document.getElementById("prevMeow").addEventListener("click", function () {
    meowIndex = (meowIndex - 1 + meowCards.length) % meowCards.length;
    console.log(meowIndex);
    showMeowSlide(meowIndex);
  });

  document.getElementById("nextMeow").addEventListener("click", function () {
    meowIndex = (meowIndex + 1) % meowCards.length;
    console.log(meowIndex);
    showMeowSlide(meowIndex);
  });

  function handleResize() {
    if (isMobile()) {
      if (meowCardList) meowCardList.style.display = "none";
      if (meowCarousel) meowCarousel.style.display = "block";
      initMeowCarousel();
    } else {
      if (meowCardList) meowCardList.style.display = "flex";
      if (meowCarousel) meowCarousel.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // document
  //   .getElementById("meow-home-btn")
  //   .addEventListener("click", function () {
  //     document
  //       .getElementById("meow-home")
  //       .scrollIntoView({ behavior: "smooth" });
  //     handleResize();
  //   });
}

document.addEventListener("DOMContentLoaded", function () {
  handleDishSlide();
  handleMeowSlide();
});

//關於我們對話框

// document.addEventListener("DOMContentLoaded", function () {
//   const dias = document.querySelectorAll(".dia");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const target = entry.target;
//           const index = [...dias].indexOf(target); // 找出第幾個 .dia
//           setTimeout(() => {
//             target.classList.add("show");
//           }, index * 300); // 每個延遲 0.3 秒依序出現
//           observer.unobserve(target); // 出現後不再觀察
//         }
//       });
//     },
//     {
//       threshold: 0.2,
//     }
//   );

//   dias.forEach((dia) => {
//     observer.observe(dia);
//   });
// });

//領養流程按鈕切換
// let currentStep = 0;
// let cards = document.querySelectorAll(".step-card");
// let dots = document.querySelectorAll(".dot");
// let prevBtn = document.getElementById("pre-btn");
// let nextBtn = document.getElementById("next-btn");

// function stepProgress() {
//   cards.forEach((card, index) => {
//     card.classList.toggle("active", index === currentStep);
//   });
//   dots.forEach((dot, index) => {
//     dot.classList.toggle("active", index === currentStep);
//   });

//   prevBtn.disabled = currentStep === 0;
//   nextBtn.disabled = currentStep === cards.length - 1;
// }
// prevBtn.addEventListener("click", () => {
//   if (currentStep > 0) {
//     currentStep--;
//     stepProgress();
//   }
// });
// nextBtn.addEventListener("click", () => {
//   if (currentStep < cards.length - 1) {
//     currentStep++;
//     stepProgress();
//   }
// });

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentStep = index;
//     stepProgress();
//   });
// });

// stepProgress();

//必備物資 貓咪物品

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item[class*='box']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleItems = [...items];
          visibleItems.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("show");
            }, index * 300);
          });

          items.forEach((el) => observer.unobserve(el));
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  if (items.length > 0) {
    observer.observe(items[0]);
  }
});

//貓迷搖擺
document.addEventListener("DOMContentLoaded", function () {
  const cat = document.querySelector(".item.cat");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cat.classList.add("start-sway");
          observer.unobserve(cat);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (cat) observer.observe(cat);
});
