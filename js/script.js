
let next = document.querySelector('#next');
let back = document.querySelector('#back');
let scrollContainer = document.querySelector('.caursol');
let dotcontainer=document.querySelector('.dots-container')
let images=document.querySelector('.caursol img')

// Using mouse events for drag scrolling
let isDragging = false;
let startX = 0;

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    clearInterval(autoScroll); // Pause auto-scroll when dragging
});

scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
    autoScroll = setInterval(scrollNext, 3000); // Resume auto-scroll
});

scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent text selection
    scrollContainer.scrollLeft -= (e.clientX - startX);
    startX = e.clientX;
});

// Function to scroll the images to the right
function scrollNext() {
    scrollContainer.scrollLeft += 1200// Scroll by the container width
}

// Function to scroll the images to the left
function scrollBack() {
    scrollContainer.scrollLeft -= 1200;
}

// Auto-scroll functionality
let autoScroll = setInterval(scrollNext, 3000); // Change image every 3 seconds

// Pause auto-scroll on hover
scrollContainer.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
});

// Resume auto-scroll when not hovering
scrollContainer.addEventListener('mouseleave', () => {
    autoScroll = setInterval(scrollNext, 3000); 
});

// Using next and back icons for navigation
next.addEventListener('click', scrollNext);
back.addEventListener('click', scrollBack);

