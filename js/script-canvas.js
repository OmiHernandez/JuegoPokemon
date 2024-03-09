var canvas = document.getElementById('lienzoP');
canvas.width = 900;
canvas.height = 550;
var ctx = canvas.getContext('2d');

ctx.font = 'bold 48px Arial';
ctx.fillStyle = '#20234d';
ctx.textAlign = 'center';
ctx.fillText('Pokemon OWO', canvas.width / 2, 100);


function drawButton(text, x, y, width, height) {
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(x, y, width, height);

    ctx.roundRect(x, y, width, height, 10);
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(text, x + width / 2, y + height / 2 + 10);

    canvas.onmousemove = function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;


        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(x, y, width, height);

        ctx.roundRect(x, y, width, height, 10);
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(text, x + width / 2, y + height / 2 + 10);

        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(100, 450, 200, 50);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Jugar', 100 + 200 / 2, 450 + 50 / 2 + 10);


        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(350, 450, 200, 50);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Instrucciones', 350 + 200 / 2, 450 + 50 / 2 + 10);

        

        if (mouseX > 100 && mouseX < 300 && mouseY > 450 && mouseY < 500) {
            ctx.fillStyle = '#042206';
            ctx.fillRect(100, 450, 200, 50);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Jugar', 100 + 200 / 2, 450 + 50 / 2 + 10);

          } else if (mouseX > 350 && mouseX < 550 && mouseY > 450 && mouseY < 500) {
            //Instrucciones
            ctx.fillStyle = '#042206';
            ctx.fillRect(350, 450, 200, 50);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Instrucciones', 350 + 200 / 2, 450 + 50 / 2 + 10);
            
          } else if (mouseX > 600 && mouseX < 800 && mouseY > 450 && mouseY < 500) {
            ctx.fillStyle = '#042206';
            ctx.fillRect(x, y, width, height);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(text, x + width / 2, y + height / 2 + 10);
          }
      
      };

    

}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX > 100 && mouseX < 300 && mouseY > 450 && mouseY < 500) {
      alert('¡Has hecho clic en Jugar!');
    } else if (mouseX > 350 && mouseX < 550 && mouseY > 450 && mouseY < 500) {
      alert('¡Has hecho clic en Instrucciones!');
    } else if (mouseX > 600 && mouseX < 800 && mouseY > 450 && mouseY < 500) {
      alert('¡Has hecho clic en Puntaje!');
    }
});

  
drawButton('Jugar', 100, 450, 200, 50);
drawButton('Instrucciones', 350, 450, 200, 50);
drawButton('Tu Puntaje', 600, 450, 200, 50);
