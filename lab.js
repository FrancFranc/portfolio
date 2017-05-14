
 // create an array called 'lab'
var labs = [];

// create an object called "lab", passing the parameter called "rawDataObj"
function Lab (rawDataObj) {
  this.backgroundImage = rawDataObj.backgroundImage;
  this.title = rawDataObj.title;
  this.year = rawDataObj.year;
  this.description = rawDataObj.description;
  this.labURL = rawDataObj.labURL;
}

// create a method, which is a prototype of the above constructor "Lab"
Lab.prototype.toHTML = function() {
  var $newLab = $('.template.lab-image').clone();
  $newLab.css('background-image', `url("${this.backgroundImage}")`);
  $newLab.find('h1').html(this.title);
  $newLab.removeClass('template');
  return $newLab;
}

// push the new object "labImages" into the array "lab"
// the parameter is the object in labImagesArray
labData.forEach(function(labImageObject) {
  labs.push(new Lab(labImageObject));
});

labs.forEach(function(labImageObject) {
  $('.lab-each-image').append(labImageObject.toHTML());
});


// tabs
$(document).ready(function() {
  $('.tab').on('click', function() {
    var $whereToGo = $(this).data('content')
    $('.tab-content').hide()
    $(`#${$whereToGo}`).fadeIn(500);
  })
  $('.tab-nav .tab:first').click();
})
