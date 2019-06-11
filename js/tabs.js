$('#tab-en').on('click', function () {
  console.log('english clicked');
  $('.episode--grid').hide();
  // remove class on link
  $('.episode--grid__en').show().fadeTo();
  // add class on new link
  // show my id
});

$('#tab-fr').on('click', function () {
  console.log('french clicked');
  $('.episode--grid').hide();
  // remove class on link
  $('.episode--grid__fr').show().fadeTo();
  // add class on new link

  // show my id
});

$(function () {
  $('#tab-en').trigger('click');
});