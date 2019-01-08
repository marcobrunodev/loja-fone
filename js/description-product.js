const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  const index = 
});

function handleClick() {
  this.classList.toggle("-active");
}

function setActiveStar(index) {
  $stars.forEach(($star, key) => {
    $star.classList.remove('-active');

    if (key <= index) {
      $star.classList.add('-active');
    }
  })
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}

function middleStar(index) {
  $stars.forEach(function($star, key) {
    $star.classList.remove("-active");

    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}
