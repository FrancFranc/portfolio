
/*-------------------------------------------------------
Handlebars for ALL Labs (script id="image-template-set")
---------------------------------------------------------*/

var labImagesArray = [];

//This is another way to use a constructor to duplicate an array of raw data objects
function LabImages (rawDataObj) {
  for (key in rawDataObj) {         //key is a built-in javascript, assign this key into rawDataObj
    this[key] = rawDataObj[key];    // key have different values, and get the key values
  }
};

//This method on each instance of Labs allows that object to create its own HTML
LabImages.prototype.toHTML = function() {
  var template = $('#lab-template-images').html();         //Get the template from HTML document
  var templateRender = Handlebars.compile(template);  //Use Handlebars to compile the HTML
  return templateRender(this);                        //return the HTML from this method
}

labData.forEach(function(labImageObject) {
  labImagesArray.push(new LabImages(labImageObject));
});

labImagesArray.forEach(function(labImageObject) {
  $('#all-labs').append(labImageObject.toHTML());
});



/*----------------------------------------------------------
Handlebars for EACH Labs (script id="lab-template-content")
------------------------------------------------------------*/

var labContentArray = [];

function LabContent (rawDataObj) {
  for (key in rawDataObj) {
    this[key] = rawDataObj[key];
  }
}

LabContent.prototype.toHTML = function() {
  var template = $('#lab-template-content').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
}

labData.forEach(function(labImageObject) {
  labContentArray.push(new LabContent(labImageObject));
});

labContentArray.forEach(function(labImageObject) {
  $('#lab-individuals').append(labImageObject.toHTML());
});



/*----------------------------------------------------------
                          Tabs
------------------------------------------------------------*/
$(() => {
  $('.tab-content').hide();
  $('#homepage').show();
})

$('a').on('click', function() {
  var $whereToGo = $(this).data('content')
  console.log($whereToGo);
  $('.tab-content').hide()
  $(`#${$whereToGo}`).fadeIn(500);
  if ($whereToGo==='homepage') {
    $('.tab-nav').show();
    $(this.parentNode.parentNode.parentNode.parentNode).hide();
  }
  else {
    $('.tab-nav').hide();
  }
})


// opening the lab on its own tab (when I click on the lab image)
