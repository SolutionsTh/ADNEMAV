/* document.querySelectorAll(".slideshow").forEach((slideshow) => {
  let currentSlide = 0;
  const slides = slideshow.querySelectorAll(".slide");
  const prevBtn = slideshow.querySelector(".nav-prev");
  const nextBtn = slideshow.querySelector(".nav-next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Inicializa o primeiro slide
  showSlide(currentSlide);
});
 */





/* document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector(".uk-slideshow-items");
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll("li");
  let currentIndex = 0;
  let intervalId;
  let timeoutId;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoplay(interval = 4000) {
    stopAutoplay();
    intervalId = setInterval(nextSlide, interval);
  }

  function stopAutoplay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function pauseAndResume(delay = 5000) {
    stopAutoplay();
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      startAutoplay();
    }, delay);
  }

  // Exibir o primeiro slide
  showSlide(currentIndex);
  startAutoplay();

  // Detectar cliques nos botões já existentes
  document.querySelectorAll('[uk-slideshow-item="next"], [uk-slideshow-item="previous"]').forEach(btn => {
    btn.addEventListener("click", () => {
      // Atualiza índice baseado no slide visível
      slides.forEach((s, i) => {
        if (s.style.display === "block") currentIndex = i;
      });
      pauseAndResume(5000);
    });
  });
});
 */