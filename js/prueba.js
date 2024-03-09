
    window.onload = function() {
      const canvas = document.getElementById('lienzoP');
      const ctx = canvas.getContext('2d');

      // Función para dibujar botón con hover
      function drawButton(text, x, y, width, height) {
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(x, y, width, height);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(text, x + width / 2, y + height / 2 + 10);

        // Evento mouseenter
        canvas.addEventListener('mouseenter', function(event) {
          const rect = canvas.getBoundingClientRect();
          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;

          if (mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
            ctx.fillStyle = '#45a049';
            ctx.fillRect(x, y, width, height);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(text, x + width / 2, y + height / 2 + 10);
          }
        });

        // Evento mouseleave
        canvas.addEventListener('mouseleave', function(event) {
          ctx.fillStyle = '#4CAF50';
          ctx.fillRect(x, y, width, height);

          ctx.font = 'bold 24px Arial';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.fillText(text, x + width / 2, y + height / 2 + 10);
        });
      }

      // Dibujar botones
      drawButton('Jugar', 300, 200, 200, 50);
      drawButton('Instrucciones', 300, 270, 200, 50);
      drawButton('Puntaje', 300, 340, 200, 50);
    };
