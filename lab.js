var lab = [];

function labImages (rawDataObj) {

  this.title = rawDataObj.title;
  this.backgroundImage = rawDataObj.backgroundImage;
  this.icon = rawDataObj.icon;
}

labImages.prototype.toHTML = function() {
  var $newLab = $('.lab-images-set').clone();
  $newLab.find('.lab-each-image').html(this.backgroundImage);
  $newLab.find('h1').html(this.title);
  $newLab.find('click-icon').html(this.icon);
  return $newLab;
}

labImagesArray.forEach(function(labImageObject) {
  lab.push(new labImages(labImageObject));
});

lab.forEach(function(labImageObject) {
  $('lab-images-set').append(labImageObject.toHTML());
});
