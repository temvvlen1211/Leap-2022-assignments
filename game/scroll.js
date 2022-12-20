let windowHeight = window.innerHeight;
let documentHeight = document.body.offsetHeight;
let targetscrollY = documentHeight - windowHeight;

function getScrollTopPercent() {
  return Math.round((window.scrollY * 100) / targetscrollY);
}

function updateScrollProgress() {
  document.querySelector(".progress").innerHTML = getScrollTopPercent() + "%";
  document.querySelector(".progress-bar-inner").style.width =
    getScrollTopPercent() + "%";
}

document.addEventListener("scroll", updateScrollProgress);

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  documentHeight = document.body.offsetHeight;
  targetscrollY = documentHeight - windowHeight;
});
const runBoxTarget = document.querySelector(".run-box");
runBoxTarget.addEventListener("mousenter", function () {});

runBoxTarget.addEventListener("mouseout", function () {
  runBoxTarget.classList.remove("active");
});
