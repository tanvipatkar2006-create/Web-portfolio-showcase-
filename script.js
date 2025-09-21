// Simple interactivity for project cards
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(card => {
        card.addEventListener("click", () => {
            alert("You clicked on " + card.querySelector("h3").textContent);
        });
    });
});