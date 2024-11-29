// plane floating

var imgmovement = document.getElementsByClassName("image");

document.onmousemove = function(event) {
    // Get exact pixel positions for the cursor
    var x = event.clientX;
    var y = event.clientY;

    for (var i = 0; i < imgmovement.length; i++) {
        // Set the image position to follow the cursor
        imgmovement[i].style.left = x + "px";
        imgmovement[i].style.top = y + "px";

        // Optional: Center the image around the cursor (adjust based on your image size)
        imgmovement[i].style.transform = "translate(-50%, -50%)";
    }
};