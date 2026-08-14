const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".close-lightbox");
const prevButton = document.querySelector(".prev-photo");
const nextButton = document.querySelector(".next-photo");

let currentImage = 0;

// Open lightbox
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImage = index;

        showImage();

        lightbox.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

// Display image
function showImage() {

    lightboxImage.src = galleryImages[currentImage].src;

}

// Next image
nextButton.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= galleryImages.length) {

        currentImage = 0;

    }

    showImage();

});

// Previous image
prevButton.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {

        currentImage = galleryImages.length - 1;

    }

    showImage();

});

// Close button
closeButton.addEventListener("click", closeLightbox);

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeLightbox();

    }

});

// Close with ESC key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeLightbox();

    }

});

function closeLightbox() {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

}