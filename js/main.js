 document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
   	  const src = e.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })

// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  var modalImages = document.querySelectorAll(".gallery-img");
  var modalImg = document.querySelector(".modal-img");
  var modalAudio = document.getElementById("modal-audio");

  modalImages.forEach(function (image) {
    image.addEventListener("click", function () {
      var imageSrc = image.getAttribute("src");
      var audioSrc = image.getAttribute("data-audio");
      modalImg.setAttribute("src", imageSrc);
      modalAudio.innerHTML = '<source src="' + audioSrc + '" type="audio/mpeg">';
      modalAudio.load();
      modalAudio.play();
    });
  });
});
