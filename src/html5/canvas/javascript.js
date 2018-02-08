draw();

function draw() {
    var canvas = document.getElementById('canvasElement');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    };

    var canvas = document.getElementById('secondTest');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var rainbow = ctx.createLinearGradient(0,0,170,0);
        rainbow.addColorStop(0,"#e53935");
        rainbow.addColorStop(0.1,"#f4511e");
        rainbow.addColorStop(0.2,"#ffb300");
        rainbow.addColorStop(0.3,"#ffeb3b");
        rainbow.addColorStop(0.4,"#43a047");
        rainbow.addColorStop(0.5,"#00796b");
        rainbow.addColorStop(0.6,"#00acc1");
        rainbow.addColorStop(0.7,"#1e88e5");
        rainbow.addColorStop(0.8,"#3949ab");
        rainbow.addColorStop(0.9,"#5e35b1");
        rainbow.addColorStop(1,"#8e24aa");

        ctx.fillStyle = rainbow;
        ctx.fillRect(0, 0, 300, 300);
    };
};