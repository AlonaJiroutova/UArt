$("#about-open, #btn-about").click(() => {
  $(".about").css("display", "flex");
  $(".header__text-box, .pattern-main-big, .navigation-bar").css(
    "display",
    "none"
  );
});

$(".contact-open").click(() => {
  $(".contact").css("display", "flex");
  $(
    ".header__text-box, .pattern-main-big, .navigation-bar, .btn-container-artists, .about-artist"
  ).css("display", "none");
  $(".main-section-artists").css("height", "150vh");
});

$(".close-icon").click(() => {
  $(".about, .contact").css("display", "none");
  $(".header__text-box, .pattern-main-big, .navigation-bar").css(
    "display",
    "block"
  );
  $(".btn-container-artists").css("display", "flex");
  $(".main-section-artists").css("height", "150vh");
});

$(".open-list-of-artists, .btn-container-artists").click(() => {
  $(".list-of-artists-wraper").css("display", "flex");
  $(".main-section-artists").css("height", "100vh");
  $(".about-artist, .btn-container-artists").css("display", "none");
});

$(".close-icon-artists").click(() => {
  $(".list-of-artists-wraper").css("display", "none");
  $(".btn-container-artists").css("display", "flex");
  $(".main-section-artists").css("height", "150vh");
});

// carousel

function carousel(artistName) {
  let carouselObj = $(`li.${artistName}-carousel--item`);
  console.log(carouselObj);
  let lastItemNumber = carouselObj.length - 1;
  let imgIndex = 0;
  $.each(carouselObj, function (index, element) {
    $(element).css("display", "none");
    $(carouselObj[imgIndex]).css("display", "block");
  });
  $(".btn-next").click(() => {
    $(carouselObj[imgIndex]).css("display", "none");
    imgIndex++;
    $(carouselObj[imgIndex]).css("display", "block");
    if (imgIndex > lastItemNumber) {
      imgIndex = 0;
      $(carouselObj[imgIndex]).css("display", "block");
    }
  });
  $(".btn-prev").click(() => {
    $(carouselObj[imgIndex]).css("display", "none");
    imgIndex--;
    $(carouselObj[imgIndex]).css("display", "block");

    if (imgIndex < 0) {
      imgIndex = lastItemNumber;
      $(carouselObj[imgIndex]).css("display", "block");
    }
  });
}

function choosingPainter() {
  const artistList = $("a.artist-btn");
  console.log(artistList);

  $.each(artistList, function (index, element) {
    let carouselExecuted = false;
    $(element).click((e) => {
      let chosenArtist = $(this).attr("id");
      let containingClass = $(this).hasClass("painters-btn");
      let artistName = chosenArtist.slice(0, -4);
      $(".list-of-artists-wraper").css("display", "none");
      $(".main-section-artists").css("height", "max-content");
      $(`#${artistName}-section`).css("display", "flex");

      if (!carouselExecuted && containingClass) {
        carousel(artistName);
        carouselExecuted = true;
      }
    });
  });
}

choosingPainter();

