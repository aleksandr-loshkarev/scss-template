// pressing the foot to the bottom
function autoFooter() {
  if ($('.wrapper').length) {
    var height = $('.footer').innerHeight();

    $('.wrapper').css('padding-bottom', height).css('margin-bottom', -height);
  }
}
autoFooter();

$(window).on('resize', function() {
  autoFooter();
})