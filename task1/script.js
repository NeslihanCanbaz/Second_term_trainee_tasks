// --- Karanlık Mod ---
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    modeToggle.textContent = "☀️ Light Mode";
  } else {
    modeToggle.textContent = "🌙 Dark Mode";
  }
});

// --- Geri Sayım Sayacı ---

const bitisTarihi = new Date("2026-07-31T00:00:00").getTime();

const sayacID = setInterval(() => {
  const simdi = new Date().getTime();
  const kalanSure = bitisTarihi - simdi;

  if (kalanSure < 0) {
    clearInterval(sayacID);
    document.querySelector(".countdown-numbers").textContent =
      "Internship finished! 🎉";
    return;
  }

  const gun = Math.floor(kalanSure / (1000 * 60 * 60 * 24));
  const saat = Math.floor(
    (kalanSure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const dakika = Math.floor((kalanSure % (1000 * 60 * 60)) / (1000 * 60));
  const saniye = Math.floor((kalanSure % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(gun).padStart(2, "0");
  document.getElementById("hours").textContent = String(saat).padStart(2, "0");
  document.getElementById("minutes").textContent = String(dakika).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(saniye).padStart(
    2,
    "0",
  );
}, 1000);
