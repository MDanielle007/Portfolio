// Select the elements you want to apply the fade-in effect to
const elementsToFadeIn = document.querySelectorAll('.fade-in');

// Create a new IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Get the animation name from the element's data-fade attribute
            const animationName = entry.target.getAttribute('data-fade');
            console.log(animationName);
            // Get the delay time from the element's data-delay attribute
            const delayTime = entry.target.getAttribute('data-delay') || 0;
            console.log(delayTime);
            // Add the animation class with the correct animation name and delay time
            entry.target.style.animationDelay = `${delayTime}ms`;
            // Add the animation class with the correct animation name
            entry.target.classList.add(`fade-in-${animationName}`);
            // Stop observing the element (since we only want to apply the animation once)
            observer.unobserve(entry.target);
        }
    });
});

// Loop over the elements and register them with the observer
elementsToFadeIn.forEach((element) => {
    observer.observe(element);
});
