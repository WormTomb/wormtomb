const contactContainer = document.getElementById('contact-container');
const envelope = document.getElementById('envelope');
const closedUrl = "../wormtomb/assets/img/icons/envelope_closed.png";
const openedUrl = "../wormtomb/assets/img/icons/envelope_opened.png";

contactContainer.addEventListener('mouseenter', (event) => {
    envelope.src = openedUrl;
});

contactContainer.addEventListener('mouseleave', (event) => {
    envelope.src = closedUrl;
});

