function gotoDetails(data) {
  window.location.href = "./course-detail.html";
  sessionStorage.setItem("goto", data);
}

(function displaySelectedCourse() {
  let selectedCourse = sessionStorage.getItem("goto");
  let cards = document.querySelectorAll(".card-detail");

  cards.forEach((card) => {
    if (card.dataset.course === selectedCourse) {
      card.classList.remove("hidden");
    }
  });
})();
