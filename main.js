$( document ).ready(

);

function clearInput( ) {
  $( "#output-panel" ).empty();
}
$('button').click(function() {
  var currentVal = $(this).val();
  switch (currentVal) {
    case 'C':
      clearInput( );
      break;
    default:
      $("#output-panel").append(currentVal);
  }
});


// var getButtonValue = function($button) {
//     var label = $button.text();
//     $button.text('');
//     var buttonValue = $button.val();
//     $button.text(label);
//     return buttonValue;
// }
