window.onload = function () {
  var tela = document.getElementById("tela");
  var context = tela.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 60);
  const vel = 1;
  var vx = (vy = 0);
  var px = (py = 10);
  var tam = 20;
  var qp = 20;
  var ax = (ay = 15);
  var trail = [];
  tail = 5;

  function game() {
    px += vx;
    py += vy;

    if (px < 0) {
      px = qp - 1;
    }
    if (px > qp - 1) {
      px = 0;
    }
    if (py < 0) {
      py = qp - 1;
    }
    if (py > qp - 1) {
      py = 0;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, 400, 400);

    context.fillStyle = "red";
    context.fillRect(ax * tam, ay * tam, tam, tam);

    context.fillStyle = "gray";
    for (var i = 0; i < trail.length; i++) {
      context.fillRect(trail[i].x * tam, trail[i].y * tam, tam - 1, tam - 1);
      if (trail[i].x == px && trail[i].y == py) {
        vx = vy = 0;
        tail = 5;
      }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax == px && ay == py) {
      tail++;
      ax = Math.floor(Math.random() * qp);
      ay = Math.floor(Math.random() * qp);
    }
  }

  function keyPush(event) {
    switch (event.keyCode) {
      case 37: // left
        vx = -vel;
        vy = 0;
        break;
      case 38: // up
        vx = 0;
        vy = -vel;
        break;
      case 39: // right
        vx = vel;
        vy = 0;
        break;
      case 40: // down
        vx = 0;
        vy = vel;
        break;

      default:
        break;
    }
  }
};
