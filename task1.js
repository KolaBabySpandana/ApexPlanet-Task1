document.addEventListener('DOMContentLoaded', function() {

    const myButton = document.getElementById('interactiveButton');

    if (myButton) {

        myButton.addEventListener('click', function() {
            
            alert('Contact mobile :(+91)9989 776661, Mail at :info@adityauniversity.in');
        });
    } else {
        
        console.error('Error: Button element with ID "interactiveButton" not found.');
    }

}); 