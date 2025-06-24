document.addEventListener("DOMContentLoaded", function () {
  const $cardlist = $(".adoption-cardlist");
  let isSlickInit = false;

  function toggleSlickByScreen() {
    if (window.innerWidth <= 767) {
      if (!isSlickInit) {
        $cardlist.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        });
        isSlickInit = true;
      }
    } else {
      if (isSlickInit) {
        $cardlist.slick("unslick");
        isSlickInit = false;
      }
    }
  }

  toggleSlickByScreen();
  window.addEventListener("resize", toggleSlickByScreen);

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("adopt-btn")) {
      const card = e.target.closest(".adoption-card");
      const catName = card?.getAttribute("data-catname");
      document.querySelector("#catname").value = catName;

      document.querySelector(".adoption-form-wrapper").style.display = "block";
      document.querySelector(".adoption-overlay").style.display = "block";
    }
  });

  document.querySelector(".form-close").addEventListener("click", closeForm);
  document
    .querySelector(".adoption-overlay")
    .addEventListener("click", closeForm);

  function closeForm() {
    document.querySelector(".adoption-form-wrapper").style.display = "none";
    document.querySelector(".adoption-overlay").style.display = "none";
  }

  document.querySelector("#submit-btn").addEventListener("click", function () {
    if (!document.querySelector("#read-rule").checked) {
      alert("請先勾選已詳閱領養須知！");
      return;
    }

    alert("感謝您的申請，我們會盡快與您聯絡！");
    closeForm();
  });
});
