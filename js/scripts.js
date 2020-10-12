$(document).ready(function () {
  $("#img-1").click(function () {
    $(".info-1").toggle();
    $("#img-1").toggle();
  });
});

$(document).ready(function () {
  $("#img-2").click(function (event) {
    $(".info-2").toggle();
    $("#img-2").toggle();
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#img-3").click(function (event) {
    $(".info-3").toggle();
    $("#img-3").toggle();
    event.preventDefault();
  });
});

$(document).ready(function () {
  $(".info-1").click(function (event) {
    $("#img-1").toggle();
    $(".info-1").toggle();
    event.preventDefault();
  });
});

$(document).ready(function () {
  $(".info-2").click(function (event) {
    $("#img-2").toggle();
    $(".info-2").toggle();
    event.preventDefault();
  });
});

$(document).ready(function () {
  $(".info-3").click(function (event) {
    $("#img-3").toggle();
    $(".info-3").toggle();
    event.preventDefault();
  });
});

$(document).ready(function () {
  let portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

  portfolioItems.forEach((portfolioItem) => {
    portfolioItem.addEventListener("mouseover", () => {
      portfolioItem.childNodes[1].classList.add("img-darken");
    });

    portfolioItem.addEventListener("mouseout", () => {
      portfolioItem.childNodes[1].classList.remove("img-darken");
    });
  });
});

