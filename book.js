document.addEventListener("DOMContentLoaded", () => {

    const bookingDetails = document.getElementById("bookingDetails");
    const bookingForm = document.getElementById("bookingForm");

    // Get reservation data from localStorage
    const reservation = JSON.parse(localStorage.getItem("reservation"));

    if (!reservation) {

        bookingDetails.innerHTML = `
            <p>No reservation details found.</p>
            <a href="stays.html">Browse stays</a>
        `;

        return;
    }


    // Display reservation details
    bookingDetails.innerHTML = `

        <div class="booking-details-card">

            

            <h3>${reservation.propertyName}</h3>

            <div class="booking-info">
                <span>Check-in</span>
                <strong>${reservation.checkIn}</strong>
            </div>

            <div class="booking-info">
                <span>Check-out</span>
                <strong>${reservation.checkOut}</strong>
            </div>

            <div class="booking-info">
                <span>Guests</span>
                <strong>${reservation.guests}</strong>
            </div>

            <div class="booking-info">
                <span>Nights</span>
                <strong>${reservation.nights}</strong>
            </div>

            <div class="booking-total">
                <span>Total</span>
                <strong>₦${reservation.total.toLocaleString()}</strong>
            </div>

        </div>

    `;


    // Handle booking form submission
    bookingForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const firstName = document.getElementById("firstName").value;


        alert(
            `Thank you, ${firstName}! Your booking has been confirmed.`
        );


        // Remove reservation after booking
        localStorage.removeItem("reservation");


        // Return to homepage
        window.location.href = "index.html";

    });

});