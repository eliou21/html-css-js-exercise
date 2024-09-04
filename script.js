document.addEventListener("DOMContentLoaded", function () {
    // Get all the cards
    var cards = document.querySelectorAll('.card');

    // Loop through each card and add a click event listener
    cards.forEach(function (card) {
        card.addEventListener('click', function (event) {
            // Check if the clicked element is the "More Details" button
            if (event.target.tagName === 'BUTTON') {
                // Prevent the background color from changing
                return;
            }

            // Get the parent row of the clicked card
            var row = this.closest('.row');

            // Generate a random color
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

            // Change the background color of the row to the random color
            row.style.backgroundColor = randomColor;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Show the modal
        $('#sendMessage').modal('show');

        // Clear the form fields after showing the modal
        contactForm.reset();
    });
});
