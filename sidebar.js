// sidebar.js
document.addEventListener("DOMContentLoaded", () => {
    // Basis-Elemente für die Sidebar
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("open-sidebar");
    const closeSidebar = document.getElementById("close-sidebar");

    // Sidebar öffnen
    if (openSidebar) {
        openSidebar.addEventListener("click", () => {
            sidebar.classList.add("open");
        });
    }

    // Sidebar schließen
    if (closeSidebar) {
        closeSidebar.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    }

    // Links in der Sidebar
    const sidebarLinks = document.querySelectorAll("#sidebar a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    });
});