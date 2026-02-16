document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("[data-enter-chasm]");
  if (!btn) return;

  const target = btn.getAttribute("data-target") || btn.getAttribute("href");

  const overlay = document.createElement("div");
  overlay.className = "chasm-overlay";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.location.href = target;
      return;
    }

    overlay.classList.add("is-active");
    document.body.classList.add("is-falling");

    window.setTimeout(() => {
      window.location.href = target;
    }, 560);
  });
});
