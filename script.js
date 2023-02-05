

const header = document.getElementById('header'); // gets the header element

// if user scroll more than 40 from the top it will change the background color to black
function scrollColor() {
    if(document.body.scrollTop > 40 ||  document.documentElement.scrollTop > 40) { 
        header.style.background = '#0c0c0c';
    } else {
        header.style.background = 'none'; // if the user scrolls back to the top, it reverts to the initial state or transparent background
    }
}

//invokes the function
window.onscroll = function() {
    scrollColor();
};