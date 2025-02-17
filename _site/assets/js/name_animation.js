document.addEventListener('DOMContentLoaded', function () {
  Promise.all([
      document.fonts.load('10pt "Raleway"')
  ]).then(function () {
      const canvas = document.getElementById('nameCanvas');
      if (!canvas) {
          console.error('Canvas element not found!');
          return;
      }
      const ctx = canvas.getContext('2d');
      const pixelRatio = window.devicePixelRatio || 1;

      function resizeCanvas() {
          const block = document.querySelector('.initial-block');
          canvas.width = block.clientWidth * pixelRatio; // Increase canvas pixel dimensions
          canvas.height = block.clientHeight * pixelRatio; // based on device pixel ratio
          canvas.style.width = block.clientWidth + 'px'; // Scale back down using CSS
          canvas.style.height = block.clientHeight + 'px';
          ctx.scale(pixelRatio, pixelRatio); // Scale drawing context to adjust for the increased canvas size
      }

      let amplitude = 50;
      let speed = 3;
      let frequency = 0.008; // Fixed frequency for consistent sine wave appearance
      let frame = 0;

      function draw() {
          frame += 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Dynamic text size based on canvas width
          const fontSize = Math.round((canvas.width / pixelRatio) / 1000 * 100);
          ctx.font = `${fontSize}px 'Raleway'`;
          ctx.fillStyle = "white";
          const text = "Morgan Fitzgerald";
          const textWidth = ctx.measureText(text).width;
          const textX = ((canvas.width / pixelRatio) - textWidth) / 2;
          const textY = (canvas.height / pixelRatio) / 2 + fontSize / 3;
          ctx.fillText(text, textX, textY);

          // Sine wave drawing logic
          ctx.shadowBlur = 20 * pixelRatio; // Adjust shadow blur for high-res
          ctx.shadowColor = "black";
          ctx.strokeStyle = "black";
          ctx.lineWidth = 2 * pixelRatio; // Adjust line width for high-res
          ctx.beginPath();
          for (let x = 0; x <= canvas.width / pixelRatio; x++) {
              let y = (canvas.height / pixelRatio) / 2 + amplitude * Math.sin(frequency * (x - frame * speed));
              ctx.lineTo(x, y);
          }
          ctx.stroke();

          requestAnimationFrame(draw);
      }

      window.addEventListener('resize', resizeCanvas, false);
      resizeCanvas(); // Adjust canvas size initially
      draw(); // Start the animation
  });
});
