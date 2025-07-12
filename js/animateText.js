  const phrases = [
    "new country.",
    "fresh start.",
    "feel at home."
  ];

  const hookText = document.getElementById("hook-text");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const visibleText = currentPhrase.substring(0, charIndex);

    hookText.textContent = visibleText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeEffect, 90); // typing speed
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 40); // deleting speed
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        // Move to next phrase
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(typeEffect, 1500); // pause before next action
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  });