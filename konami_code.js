const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    if (parseInt(e.which || e.detail) === code[index]) {
      index++;
    } else {
      index = 0;
    }

    if (index === 10) {
      alert("You did it!");
      index = 0;
    }
  });
}

init();
