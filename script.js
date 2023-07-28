// JavaScript for profile image and cake slideshow

// Profile image data
var profileImages = [
    "image/beti.jpg",
    "image/beti2.jpg",
    
   
];

var currentImageIndex = 0;
var profileImageElement = document.getElementById("profileImage");

function changeProfileImage() {
    profileImageElement.src = profileImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % profileImages.length;
}

// setting intrval
var profileInterval = 5000; // Change image on every 5 sec.
setInterval(changeProfileImage, profileInterval);

var cakeIndex = 0;
var cakeElements = document.getElementsByClassName("cake-image");

function changeCakeImage() {
    cakeElements[cakeIndex].classList.remove("show");
    cakeIndex = (cakeIndex + 1) % cakeImages.length;
    cakeElements[cakeIndex].classList.add("show");
}

// Set the interval (in milliseconds) for changing the cake image one by one
var cakeInterval = 3000; // Change cake image every 3 sec
setInterval(changeCakeImage, cakeInterval);

