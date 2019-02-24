
var images = ['../images/hangman.png','../images/rock-paper-scissors.png'];
var showImage;
var count = 0;

$('#start').click(function() {
  startSlideshow();
  // $('#image-holder').animate({
  //   width: "70%",
  //   opacity: 0.4,
  //   marginLeft: "0.6in",
  //   fontSize: "3em",
  //   borderWidth: "10px"
  // }, 1500 );
});
$('#stop').click(function() {
  stopSlideshow();
});


function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>").animate({
    width: "100%",
    opacity: 1,
    marginRight: "0.6in",
  }, 1500 );;
}

function nextImage() {

  count++

  $("#image-holder").html("<img src='images/loading.gif' width='400px'>").animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    borderWidth: "10px"
  }, 1500 );


  setTimeout(displayImage, 1000);

  if (count === images.length) {
    count = 0;
  }
  
}
function startSlideshow() {

  showImage = setInterval(nextImage, 1000);

}
function stopSlideshow() {

  clearInterval(showImage);

}

displayImage();
