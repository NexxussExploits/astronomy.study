document.getElementById('runner-button').addEventListener('click', function() {
  var inputCode = document.getElementById('runner-input').value;
  var outputDiv = document.getElementById('runner-output');

  try {
    var result = eval(inputCode);
    outputDiv.textContent = result;
  } catch (error) {
    outputDiv.textContent = 'Error: ' + error.message;
  }
});
