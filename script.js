console.log("PetrolSupply Loaded 🚀");

// simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
