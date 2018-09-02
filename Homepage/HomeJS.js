var fb_logo = document.getElementById("fb_logo");
    
fb_logo.addEventListener("mouseover", addBlue);
fb_logo.addEventListener("mouseleave", deleteBlue);

var ig_logo = document.getElementById("ig_logo");
    
ig_logo.addEventListener("mouseover", addOrange);
ig_logo.addEventListener("mouseleave", deleteOrange);

function addBlue () {
    fb_logo.src="Resources/Social/facebook_blue.svg";
};

function deleteBlue () {
    fb_logo.src="Resources/Social/facebook.svg";
}

function addOrange () {
    ig_logo.src="Resources/Social/instagram_orange.svg";
};

function deleteOrange () {
    ig_logo.src="Resources/Social/instagram.svg";
}
