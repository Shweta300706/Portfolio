function dash(event) {
    // Remove overline from all nav items
    const elements = document.getElementsByClassName("navic");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textDecoration = "overline";
    }
    
    // Add overline to the clicked item
    event.target.parentElement.style.textDecoration = "overline";
}
