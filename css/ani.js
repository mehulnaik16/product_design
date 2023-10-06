const textElement = document.getElementById('textElement');
        const textOptions = ["Your privacy matters.", "Lighter on the planet.", "More power to you."];
        let currentIndex = 0;
        function fadeInText() {
            let opacity = 0;
            const increment = 0.02;

            const fadeInterval = setInterval(() => {
                opacity += increment;
                textElement.style.opacity = opacity.toFixed(2);

                if (opacity >= 1) {
                    clearInterval(fadeInterval);
                    currentIndex = (currentIndex + 1) % textOptions.length;
                    textElement.textContent = textOptions[currentIndex];
                    setTimeout(fadeOutText, 500);
                }
            }, 10);
        }
        function fadeOutText() {
            let opacity = 1;
            const increment = -0.02;

            const fadeInterval = setInterval(() => {
                opacity += increment;
                textElement.style.opacity = opacity.toFixed(2);

                if (opacity <= 0) {
                    clearInterval(fadeInterval); 
                    setTimeout(fadeInText, 500);
                }
            }, 10);
        }
        fadeInText();