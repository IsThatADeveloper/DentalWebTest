var indexPageUrl = 'pages/appointment.html'; 

function openPage() {
    window.open(indexPageUrl,  target="_blank");
}

//load content
fetch('/content.json')
.then(response => response.json())
.then(data => {
    document.getElementById('title').textContent = data.ourService.title;
    document.getElementById('serviceDescription').textContent = data.ourService.description;
})
.catch(error => {
    console.error('Error loading the JSON file:', error);
});

// JavaScript to handle scroll animation
window.addEventListener('scroll', function() {
    const distanceFromTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // Define the sections you want to animate
    const sections = document.querySelectorAll('main, .service, .service-h1, .animated-section, .animation-section, .footer-flex ');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (distanceFromTop >= sectionTop - windowHeight / 1) {
            section.style.opacity = 1; 
        }
    });
});