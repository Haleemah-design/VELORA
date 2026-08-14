/* =========================================
   VÉLORA — MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. SELECT ELEMENTS
========================================= */

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

const favoriteButtons = document.querySelectorAll(".favorite-btn");

const newsletterForm = document.querySelector(".newsletter-form");

const searchButton = document.querySelector(".search-btn");

const searchItems = document.querySelectorAll(".search-item");

const revealElements = document.querySelectorAll(
    ".intro-content, .intro-image, .stay-card, .destination-card, .signature-content, .signature-image, .service-item, .cta-content, .newsletter-content"
);


/* =========================================
   2. MOBILE MENU
========================================= */

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        navActions.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

}


/* =========================================
   3. CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
========================================= */

const allNavLinks = document.querySelectorAll(
    ".nav-links a, .nav-actions a"
);

allNavLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        navActions.classList.remove("active");

        menuButton.classList.remove("active");

    });

});


/* =========================================
   4. NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   5. FAVORITE / WISHLIST BUTTONS
========================================= */

favoriteButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {

            button.innerHTML = "♥";

            button.setAttribute(
                "aria-label",
                "Remove from favorites"
            );

        } else {

            button.innerHTML = "♡";

            button.setAttribute(
                "aria-label",
                "Add to favorites"
            );

        }

    });

});


/* =========================================
   6. SEARCH BAR INTERACTION
========================================= */


/* =========================================
   HOMEPAGE SEARCH BAR
========================================= */


const searchForm =
    document.querySelector(
        "#searchForm"
    );


const destinationInput =
    document.querySelector(
        "#destination"
    );


const homepageCheckIn =
    document.querySelector(
        "#checkIn"
    );


const homepageCheckOut =
    document.querySelector(
        "#checkOut"
    );


const increaseGuests =
    document.querySelector(
        "#increaseGuests"
    );


const decreaseGuests =
    document.querySelector(
        "#decreaseGuests"
    );


const guestCountDisplay =
    document.querySelector(
        "#guestCount"
    );


let guestCount = 1;


if (
    homepageCheckIn
) {

    const today =
        new Date()
        .toISOString()
        .split("T")[0];


    homepageCheckIn.min =
        today;

}


if (
    homepageCheckOut
) {

    const today =
        new Date()
        .toISOString()
        .split("T")[0];


    homepageCheckOut.min =
        today;

}


/* INCREASE GUESTS */

if (
    increaseGuests
) {

    increaseGuests.addEventListener(
        "click",
        () => {


            if (
                guestCount < 16
            ) {

                guestCount++;


                guestCountDisplay.textContent =
                    guestCount;

            }

        }

    );

}


/* DECREASE GUESTS */

if (
    decreaseGuests
) {

    decreaseGuests.addEventListener(
        "click",
        () => {


            if (
                guestCount > 1
            ) {

                guestCount--;


                guestCountDisplay.textContent =
                    guestCount;

            }

        }

    );

}


/* CHECK-OUT MUST BE AFTER CHECK-IN */

if (
    homepageCheckIn
) {

    homepageCheckIn.addEventListener(
        "change",
        () => {


            homepageCheckOut.min =
                homepageCheckIn.value;

        }

    );

}


/* SEARCH */

if (
    searchForm
) {

    searchForm.addEventListener(
        "submit",
        (event) => {


            event.preventDefault();


            const destination =
                destinationInput.value;


            const checkIn =
                homepageCheckIn.value;


            const checkOut =
                homepageCheckOut.value;


            if (
                !destination ||
                !checkIn ||
                !checkOut
            ) {

                alert(
                    "Please complete all search fields."
                );


                return;

            }


            if (
                checkOut <= checkIn
            ) {

                alert(
                    "Check-out must be after check-in."
                );


                return;

            }


            const searchData = {

                destination,

                checkIn,

                checkOut,

                guests:
                    guestCount

            };


            localStorage.setItem(

                "veloraSearch",

                JSON.stringify(
                    searchData
                )

            );


            window.location.href =
                "stays.html";

        }

    );

}



/* =========================================
   8. NEWSLETTER FORM
========================================= */

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector(
            "input[type='email']"
        );

        const email = emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        if (!validateEmail(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert(
            "Thank you for subscribing to the VÉLORA Journal."
        );

        emailInput.value = "";

    });

}


/* =========================================
   9. EMAIL VALIDATION
========================================= */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================================
   10. SCROLL REVEAL ANIMATION
========================================= */

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   11. SMOOTH SCROLLING
========================================= */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);

internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        const targetElement =
            document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* =========================================
   PROPERTY CARD NAVIGATION
========================================= */

/* =========================================
   PROPERTY CARD NAVIGATION
========================================= */

const stayCards = document.querySelectorAll(
    ".property-card, .stay-card"
);

stayCards.forEach((card) => {

    card.addEventListener("click", (event) => {

        if (
            event.target.closest(".favorite-btn")
        ) {

            return;

        }


        const propertySlug =
            card.dataset.property;


        if (!propertySlug) {

            return;

        }


        const currentPage =
            window.location.pathname;


        const isInsidePagesFolder =
            currentPage.includes("/pages/");


        if (isInsidePagesFolder) {

            window.location.href =
                `property.html?property=${propertySlug}`;

        } else {

            window.location.href =
                `pages/property.html?property=${propertySlug}`;

        }

    });

});

/* =========================================
   13. DESTINATION CARD INTERACTION
========================================= */

const destinationCards =
    document.querySelectorAll(
        ".destination-card"
    );

destinationCards.forEach((card) => {

    card.addEventListener("click", () => {

        const destination =
            card.querySelector("h3").textContent;

        console.log(
            `Selected destination: ${destination}`
        );

        // Later, this will show properties
        // available in the selected destination.

    });

});


/* =========================================
   14. HERO PARALLAX EFFECT
========================================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const scrollPosition =
        window.scrollY;

    const heroImagePosition =
        scrollPosition * 0.25;

    hero.style.backgroundPosition =
        `center ${heroImagePosition}px`;

});


   

           

if (
    homepageCheckIn
) {

    homepageCheckIn.addEventListener(
        "change",
        () => {


            homepageCheckOut.min =
                homepageCheckIn.value;

        }

    );

}



/* =========================================
   15. INITIAL PAGE LOAD ANIMATION
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =========================================
   STAYS PAGE FILTERING
========================================= */

const filterButton =
    document.querySelector("#filterButton");

const locationFilter =
    document.querySelector("#locationFilter");

const typeFilter =
    document.querySelector("#typeFilter");

const guestFilter =
    document.querySelector("#guestFilter");

const sortFilter =
    document.querySelector("#sortFilter");

const propertyCards =
    document.querySelectorAll(".property-card");

const resultsCount =
    document.querySelector("#resultsCount");


if (filterButton) {

    filterButton.addEventListener("click", () => {

        const selectedLocation =
            locationFilter.value;

        const selectedType =
            typeFilter.value;

        const selectedGuests =
            guestFilter.value;

        let visibleProperties = [];

        propertyCards.forEach((card) => {

            const location =
                card.dataset.location;

            const type =
                card.dataset.type;

            const guests =
                Number(card.dataset.guests);

            const locationMatch =
                selectedLocation === "all" ||
                location === selectedLocation;

            const typeMatch =
                selectedType === "all" ||
                type === selectedType;

            const guestMatch =
                selectedGuests === "all" ||
                guests >= Number(selectedGuests);

            if (
                locationMatch &&
                typeMatch &&
                guestMatch
            ) {

                card.style.display = "block";

                visibleProperties.push(card);

            } else {

                card.style.display = "none";

            }

        });

        resultsCount.textContent =
            visibleProperties.length;

    });

}

/* =========================================
   SORT PROPERTY RESULTS
========================================= */

if (sortFilter) {

    sortFilter.addEventListener("change", () => {

        const selectedSort =
            sortFilter.value;

        const grid =
            document.querySelector("#staysGrid");

        const cards =
            Array.from(
                document.querySelectorAll(".property-card")
            );

        if (selectedSort === "low") {

            cards.sort((a, b) => {

                return Number(a.dataset.price) -
                       Number(b.dataset.price);

            });

        }

        if (selectedSort === "high") {

            cards.sort((a, b) => {

                return Number(b.dataset.price) -
                       Number(a.dataset.price);

            });

        }

        cards.forEach((card) => {

            grid.appendChild(card);

        });

    });

}


/* =========================================
   PROPERTY BOOKING CALCULATOR
========================================= */

const checkInInput =
    document.querySelector("#checkIn");

const checkOutInput =
    document.querySelector("#checkOut");

const nightCount =
    document.querySelector("#nightCount");

const stayTotal =
    document.querySelector("#stayTotal");

const totalPrice =
    document.querySelector("#totalPrice");

const reserveButton =
    document.querySelector("#reserveButton");


let pricePerNight = 250000;

const serviceFee = 25000;


function calculateBooking() {

    if (
        !checkInInput ||
        !checkOutInput
    ) {

        return;

    }


    const checkIn =
        new Date(checkInInput.value);

    const checkOut =
        new Date(checkOutInput.value);


    if (
        checkInInput.value &&
        checkOutInput.value &&
        checkOut > checkIn
    ) {

        const difference =
            checkOut - checkIn;

        const nights =
            difference /
            (1000 * 60 * 60 * 24);


        const stayPrice =
            nights * pricePerNight;


        const total =
            stayPrice + serviceFee;


        nightCount.textContent =
            nights;


        stayTotal.textContent =
            `₦${stayPrice.toLocaleString()}`;


        totalPrice.textContent =
            `₦${total.toLocaleString()}`;

    }

}


if (checkInInput) {

    checkInInput.addEventListener(
        "change",
        calculateBooking
    );

}


if (checkOutInput) {

    checkOutInput.addEventListener(
        "change",
        calculateBooking
    );


}


if (reserveButton) {

    reserveButton.addEventListener(
        "click",
        () => {

            if (
                !checkInInput.value ||
                !checkOutInput.value
            ) {

                alert(
                    "Please select your check-in and check-out dates."
                );

                return;
            }


            const checkIn =
                new Date(checkInInput.value);

            const checkOut =
                new Date(checkOutInput.value);


            const timeDifference =
                checkOut - checkIn;


            const nights =
                Math.ceil(
                    timeDifference /
                    (1000 * 60 * 60 * 24)
                );


            const stayPrice =
                pricePerNight * nights;


            const total =
                stayPrice + serviceFee;


            const reservation = {

                propertyName:
                    "Stay Somewhere Extraordinary ",

                image:
                    "d2.jpeg",

                checkIn:
                    checkInInput.value,

                checkOut:
                    checkOutInput.value,

                guests:
                    1,

                nights:
                    nights,

                total:
                    total

            };


            localStorage.setItem(
                "reservation",
                JSON.stringify(reservation)
            );


            window.location.href =
                "booking.html";

        }
    );

}

/* =========================================
   VÉLORA PROPERTY DATA
========================================= */

const properties = {

    "olive-residence": {

        name: "The Olive Residence",

        location: "Lekki Phase 1, Lagos",

        country: "LAGOS, NIGERIA",

        price: 250000,

        guests: 4,

        bedrooms: 3,

        beds: 3,

        bathrooms: 2,

        rating: "4.98",

        reviews: 24,

        mainImage: "a.jpeg",

        images: [

"a.jpeg",
"liv.jpeg",
"bed.jpeg",
"out.jpeg",
        ],

        description: `
            Designed for slow mornings, warm evenings,
            and unforgettable stays. The Olive Residence
            is a carefully considered space where architecture,
            comfort, and nature come together.
        `,

        amenities: [

            "Beautiful interiors",

            "Swimming pool",

            "Free parking",

            "High-speed Wi-Fi",

            "Air conditioning",

            "Fully equipped kitchen"

        ]

    },


    "casa-verde": {

        name: "Casa Verde",

        location: "Cape Town, South Africa",

        country: "CAPE TOWN, SOUTH AFRICA",

        price: 180000,

        guests: 3,

        bedrooms: 2,

        beds: 2,

        bathrooms: 2,

        rating: "4.95",

        reviews: 18,

        mainImage: "../images/stay-2.jpg",

        images: [

            "../images/stay-2.jpg",

            "../images/interior-1.jpg",

            "../images/interior-2.jpg",

            "../images/interior-3.jpg"

        ],

        description: `
            A refined villa surrounded by beautiful landscapes,
            warm natural textures, and the quiet beauty of Cape Town.
        `,

        amenities: [

            "Ocean views",

            "Swimming pool",

            "Free parking",

            "High-speed Wi-Fi",

            "Air conditioning",

            "Outdoor dining"

        ]

    },


    "mare-house": {

        name: "The Maré House",

        location: "Lagos, Nigeria",

        country: "LAGOS, NIGERIA",

        price: 300000,

        guests: 6,

        bedrooms: 4,

        beds: 4,

        bathrooms: 3,

        rating: "4.99",

        reviews: 31,

        mainImage: "../images/stay-3.jpg",

        images: [

            "../images/stay-3.jpg",

            "../images/interior-1.jpg",

            "../images/interior-2.jpg",

            "../images/interior-3.jpg"

        ],

        description: `
            A spacious private residence created for long,
            luxurious stays with family and friends.
        `,

        amenities: [

            "Private pool",

            "Large garden",

            "Free parking",

            "High-speed Wi-Fi",

            "Air conditioning",

            "Fully equipped kitchen"

        ]

    }

};



/* =========================================
   DYNAMIC PROPERTY DETAILS
========================================= */

const propertyPage =
    document.querySelector("#propertyName");


if (propertyPage) {


    const urlParameters =
        new URLSearchParams(
            window.location.search
        );


    const propertySlug =
        urlParameters.get("property");


    const property =
        properties[propertySlug];

        if (property) {

    pricePerNight =
        property.price;

}


    if (property) {


        const propertyCountry =
            document.querySelector(
                "#propertyCountry"
            );


        const propertyName =
            document.querySelector(
                "#propertyName"
            );


        const propertyLocation =
            document.querySelector(
                "#propertyLocation"
            );


        const propertyRating =
            document.querySelector(
                "#propertyRating"
            );


        const mainPropertyImage =
            document.querySelector(
                "#mainPropertyImage"
            );


        const propertyDetails =
            document.querySelector(
                "#propertyDetails"
            );


        const propertyDescription =
            document.querySelector(
                "#propertyDescription"
            );


        const propertyPrice =
            document.querySelector(
                "#propertyPrice"
            );


        const amenitiesGrid =
            document.querySelector(
                "#amenitiesGrid"
            );


        propertyCountry.textContent =
            property.country;


        propertyName.textContent =
            property.name;


        propertyLocation.textContent =
            property.location;


        propertyRating.textContent =
            `${property.rating} · ${property.reviews} reviews`;


        mainPropertyImage.src =
            property.mainImage;


        mainPropertyImage.alt =
            property.name;


        propertyDetails.textContent =
            `${property.guests} guests · ${property.bedrooms} bedrooms · ${property.beds} beds · ${property.bathrooms} bathrooms`;


        propertyDescription.textContent =
            property.description;


        propertyPrice.textContent =
            `₦${property.price.toLocaleString()}`;


        amenitiesGrid.innerHTML = "";


        property.amenities.forEach(
            (amenity) => {


                const amenityElement =
                    document.createElement(
                        "div"
                    );


                amenityElement.className =
                    "amenity";


                amenityElement.innerHTML = `

                    <span>✦</span>

                    <p>${amenity}</p>

                `;


                amenitiesGrid.appendChild(
                    amenityElement
                );


            }
        );


    }

}

/* =========================================
   SIGN IN FUNCTIONALITY
========================================= */

const signInForm =
    document.querySelector("#signInForm");


const togglePassword =
    document.querySelector("#togglePassword");


const signInPassword =
    document.querySelector("#signInPassword");


/* SHOW / HIDE PASSWORD */

if (
    togglePassword &&
    signInPassword
) {

    togglePassword.addEventListener(
        "click",
        () => {

            if (
                signInPassword.type ===
                "password"
            ) {

                signInPassword.type =
                    "text";

                togglePassword.textContent =
                    "Hide";

            } else {

                signInPassword.type =
                    "password";

                togglePassword.textContent =
                    "Show";

            }

        }
    );

}


/* SIGN IN FORM */

if (signInForm) {

    signInForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const email =
                document.querySelector(
                    "#signInEmail"
                ).value.trim();


            const password =
                signInPassword.value;


            if (
                !email ||
                !password
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            /*
             * Temporary front-end login.
             * Real authentication will later
             * use a backend/database.
             */

            localStorage.setItem(
                "veloraUser",
                JSON.stringify({

                    email: email,

                    signedIn: true

                })
            );


            alert(
                "Welcome back to VÉLORA ✨"
            );


            window.location.href =
                "velora.html";

        }

    );

}

/* =========================================
   CASA VERDE BOOKING FORM
========================================= */

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    const checkIn = document.querySelector("#check-in");
    const checkOut = document.querySelector("#check-out");
    const guests = document.querySelector("#guests");

    const today = new Date().toISOString().split("T")[0];

    // Prevent selecting dates in the past
    checkIn.min = today;
    checkOut.min = today;


    // Update checkout minimum date
    checkIn.addEventListener("change", function () {

        checkOut.min = checkIn.value;

        if (checkOut.value && checkOut.value <= checkIn.value) {
            checkOut.value = "";
        }

    });


    // Submit booking
    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!checkIn.value || !checkOut.value || !guests.value) {

            alert("Please select your dates and number of guests.");

            return;

        }


        const startDate = new Date(checkIn.value);
        const endDate = new Date(checkOut.value);


        if (endDate <= startDate) {

            alert("Check-out must be after check-in.");

            return;

        }


        const timeDifference = endDate - startDate;

        const numberOfNights =
            timeDifference / (1000 * 60 * 60 * 24);


        const pricePerNight = 250000;

        const totalPrice =
            numberOfNights * pricePerNight;


        alert(
            `Casa Verde booking request\n\n` +
            `${numberOfNights} night(s)\n` +
            `${guests.value}\n\n` +
            `Estimated total: ₦${totalPrice.toLocaleString()}`
        );

    });

}
