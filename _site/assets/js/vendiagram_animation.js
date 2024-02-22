document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        document.fonts.load('10pt "Raleway"'),
        document.fonts.load('10pt "Roboto Condensed"')
    ]).then(function () {
        const canvas = document.getElementById('vendiagramCanvas');
        if (!canvas) {
            console.error('Canvas element for Venn diagram animation not found!');
            return;
        }
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        const radius = 120;
        let circles = [
            { text: 'Heart', opacity: 0, fadeIn: true },
            { text: 'Brain', opacity: 0, fadeIn: false },
            { text: 'Mind', opacity: 0, fadeIn: false }
        ];
        let currentFadeIndex = 0; // Index of the circle currently fading in
        let fadingOut = false; // Flag to indicate if we are in the fading out phase

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        function updateOpacity() {
            if (!fadingOut) {
                if (circles[currentFadeIndex].fadeIn) {
                    circles[currentFadeIndex].opacity += 0.01;
                    if (circles[currentFadeIndex].opacity >= 1) {
                        circles[currentFadeIndex].opacity = 1;
                        circles[currentFadeIndex].fadeIn = false; // Stop fading in
                        currentFadeIndex++; // Move to the next circle
                        if (currentFadeIndex < circles.length) {
                            circles[currentFadeIndex].fadeIn = true; // Start fading in next circle
                        } else {
                            fadingOut = true; // Start fading out when all circles have faded in
                        }
                    }
                }
            } else {
                let allFadedOut = true;
                circles.forEach(circle => {
                    circle.opacity -= 0.01;
                    if (circle.opacity > 0) {
                        allFadedOut = false;
                    } else {
                        circle.opacity = 0;
                    }
                });

                if (allFadedOut) {
                    fadingOut = false;
                    currentFadeIndex = 0;
                    circles.forEach((circle, index) => {
                        circle.opacity = 0;
                        circle.fadeIn = index === 0; // Only the first circle starts fading in again
                    });
                }
            }
        }

        function drawCircleWithText(x, y, text, opacity) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.stroke();

            ctx.font = `${radius/5}px "Raleway"`;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fillText(text, x - ctx.measureText(text).width / 2, y + radius/10);
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            updateOpacity();

            const xOffset = radius * Math.cos(Math.PI / 5);
            const yOffset = radius * Math.sin(Math.PI / 4);

            drawCircleWithText(width / 2, height / 2 - yOffset, circles[0].text, circles[0].opacity);
            drawCircleWithText(width / 2 - xOffset, height / 2 + yOffset, circles[1].text, circles[1].opacity);
            drawCircleWithText(width / 2 + xOffset, height / 2 + yOffset, circles[2].text, circles[2].opacity);

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas(); // Adjust canvas size initially
        draw(); // Start the animation
    });
});
