window.onload = function() {
  var imgElement = document.getElementById('myimage');
  imgElement.style.cursor = 'zoom-in'; // Change the mouse pointer to a magnifying glass

  var circle = document.createElement('div');
  circle.id = 'circle';
  document.body.appendChild(circle);

  var zoomedImg = imgElement.cloneNode();
  zoomedImg.style.width = imgElement.width * 3 + 'px'; // 3 times the original image width
  zoomedImg.style.height = imgElement.height * 3 + 'px'; // 3 times the original image height
  zoomedImg.style.objectFit = 'cover';
  circle.appendChild(zoomedImg);

  if(imgElement) {
    var moveListener = function(e) {
      var rect = this.getBoundingClientRect();
      var scaleX = this.width / (this.naturalWidth || this.width);
      var scaleY = this.height / (this.naturalHeight || this.height);

      var pageX = e.pageX || e.touches[0].pageX;
      var pageY = e.pageY || e.touches[0].pageY;

      // Adjust the calculation of the left and top properties
      zoomedImg.style.left = -((pageX - rect.left) * 3 - circle.offsetWidth / 2) + 'px';
      zoomedImg.style.top = -((pageY - rect.top) * 3 - circle.offsetHeight / 2) + 'px';

      // Position the circle 5px to the right and 5px below the mouse pointer
      circle.style.left = pageX + 5 + 'px';
      circle.style.top = pageY + 5 + 'px';
    };

    imgElement.addEventListener('mousemove', moveListener);
    imgElement.addEventListener('touchmove', moveListener);

    imgElement.addEventListener('mouseenter', function() {
      circle.style.display = 'block';
    });

    imgElement.addEventListener('mouseleave', function() {
      circle.style.display = 'none';
    });

    imgElement.addEventListener('touchstart', function() {
      circle.style.display = 'block';
    });

    imgElement.addEventListener('touchend', function() {
      circle.style.display = 'none';
    });
  }
};