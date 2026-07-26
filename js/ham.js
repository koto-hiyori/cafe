$(function () {
  const ham = document.querySelector(".hamburger");
  const nav = document.querySelector(".sp-nav");
  ham.addEventListener("click", function () {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
  });
  nav.addEventListener("click", function () {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
  });

  $(".top-slide").slick({
    dots: true,
    autoplaySpeed: 3000,
    speed: 700,
    fade: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          dots: false,
        },
      },
    ],
  });

  //クリックで動く
  $(".btn-open").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).text("閉じる");
    } else {
      $(this).text("続きを見る");
    }
    $(this).prev("div").slideToggle();
  });
});
