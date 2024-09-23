
let currentIndex = 0; // Start with the first image
const scrollContainer = document.querySelector('.caursol');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const dots = document.querySelectorAll('.dot');
const imageWidth = scrollContainer.querySelector('img').clientWidth;

function currentSlide(index) {
    currentIndex = index - 1; 
    scrollContainer.scrollLeft = imageWidth * currentIndex; 
    updateDots(); 
}

// Function to update the active dot
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Function to scroll the images to the right
function scrollNext() {
    if (currentIndex < dots.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    scrollContainer.scrollLeft = imageWidth * currentIndex;
    updateDots();
}

// Function to scroll the images to the left
function scrollBack() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = dots.length - 1; 
    }
    scrollContainer.scrollLeft = imageWidth * currentIndex;
    updateDots();
}

// Add click event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});

// Using next and back icons
next.addEventListener('click', scrollNext);
back.addEventListener('click', scrollBack);

// Auto-scroll 
let autoScroll = setInterval(scrollNext, 3000); 

// Pause auto-scroll on hover
scrollContainer.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
});

// Resume auto-scroll when not hovering
scrollContainer.addEventListener('mouseleave', () => {
    autoScroll = setInterval(scrollNext, 3000); 
});
// Initialize active dot on load
updateDots();
