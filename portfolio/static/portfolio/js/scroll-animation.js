  window.addEventListener("scroll", () => {
    const section = document.getElementById("coursework");
    const line = document.getElementById("timelineLine");

    if (!section || !line) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = (windowHeight - rect.top) / rect.height;
    progress = Math.min(Math.max(progress, 0), 1);

    line.style.transform = `scaleY(${progress})`;
  });