var time;
var closebtn = $('.close');

$("#accordion").accordion({
  collapsible: true,
  heightStyle: "content",
  header: ".playerwrapper .textwrapper"
});

$('video').each(function () {

  var player = videojs(this.id)
  var $parent = $(this).parents('.videowrapper');
  var $parentactive = $(this).parents('.ui-accordion-content');
  var $play = $parent.find('.play');
  var $rewind = $parent.find('.rewind');
  var $check = $parent.find('.check');
  var $modal = $parent.find('.myModal');
  var $checkmark = $(this).parents('.playerwrapper').find('.checkmark');

  $check.click(function() {
    $modal.css({'display': 'block'}),
    $checkmark.addClass("checked");
  });

  closebtn.click(function() {
    $modal.css({'display': 'none'}) 
  });

  player.on('ready', function () {

    $play.click(function () {

      if (!player.paused()) {
        player.pause();
        $(this).removeClass('pause');
        
      }
      else {
        player.play();
        $(this).addClass('pause');
        }
    });

    $rewind.click(function () {
      var time = player.currentTime();
      player.currentTime(time - 2);
    });
  });
});

// een black class togglen bij de elementen die donker worden gemaakt
$('#themeswitchbtn').click(function(){
  $('body').add('nav').add('main').add('.maincontainer').add('.playlist').toggleClass('black');
  $('#themeswitchbtn').toggleClass('darkswitch');
});


