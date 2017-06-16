function fireflyField(field) {
  var numberOfFireFlies = Math.floor(window.innerWidth/5) * Math.floor(window.innerHeight/5);

  for(var i = 0; i < numberOfFireFlies; i++) {
    var firefly = document.createElement('div');
    firefly.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = randomColor();
    });
    firefly.addEventListener('mouseout', function (event) {
      (function (target) {
        setTimeout(function () {
          target.style.backgroundColor = 'transparent';
        }, 2000)
      })(event.target)

    });
    firefly.className = 'tile';
    field.append(firefly);
  }

}

function randomColor() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  return "rgb(" + r + "," + g + "," + b + ")";
}

fireflyField(document.getElementById('field'));
