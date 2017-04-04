$( document ).ready(

);

function calculateOutput() {
  $("#result-line").html(operationString);
};
var operationString = '';
var resultString = 0;

function clearInput( ) {
  $("#intermediary-line").html("&nbsp;");
  $("#result-line").html("0");
  operationString = '';
}
$('button').click(function() {
  var currentVal = $(this).val();
  switch (currentVal) {
    case 'C':
      clearInput( );
      break;
    case '=':
      operationString = getResult(operationString);
      calculateOutput( );
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      if (containsOperator(operationString)) {
        operationString = getResult(operationString);
      }
      calculateOutput( );
      $("#intermediary-line").append(currentVal);
      operationString += currentVal
      break;
    default:
      $("#intermediary-line").append(currentVal);
      operationString += currentVal;
      break;
  }
});

var containsOperator = function (inputString) {
  if (inputString.indexOf('+') > 0 || inputString.indexOf('-') > 0 ||
      inputString.indexOf('*') > 0 || inputString.indexOf('/') > 0) {
    return true;
  }
}

var getResult = function (term) {
  var splitArr = [];
  var result = 0;
  if (term.indexOf('+') > 0) {
    splitArr = term.split('+');
    return parseInt(splitArr[0]) + parseInt(splitArr[1]);
  } else
  if (term.indexOf('-') > 0) {
    splitArr = term.split('-');
    return parseInt(splitArr[0]) - parseInt(splitArr[1]);
  }
  if (term.indexOf('*') > 0) {
    splitArr = term.split('*');
    return parseInt(splitArr[0]) * parseInt(splitArr[1]);
  }
  if (term.indexOf('/') > 0) {
    splitArr = term.split('/');
    return parseInt(splitArr[0]) / parseInt(splitArr[1]);
  }
}
