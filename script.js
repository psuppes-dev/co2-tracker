document.addEventListener("DOMContentLoaded", () => {
    const filterCountry = document.getElementById('filter-country');
    const filterCompany = document.getElementById('filter-company');
    const sortOrder = document.getElementById('sort-order');
    const table = document.getElementById('co2-table').getElementsByTagName('tbody')[0];
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("open-sidebar");
    const closeSidebar = document.getElementById("close-sidebar");

    // Sidebar öffnen/schließen
    openSidebar.addEventListener("click", () => {
        sidebar.classList.add("open");
    });

    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

    // Navigation für Header und Sidebar
    function handleNavigation(targetId) {
        // Alle Sektionen ausblenden
        const sections = document.querySelectorAll("main section");
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Zielsektion anzeigen
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = "block";
        }

        // Sidebar schließen nach Navigation
        sidebar.classList.remove("open");
    }

    // Event Listener für alle Navigations-Links (Header und Sidebar)
    document.querySelectorAll(".navbar .nav-link, #sidebar a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            
            // interne Links
            if (href.includes("#")) {
                const targetId = href.split("#")[1];
                handleNavigation(targetId);
            } else if (href.includes("html#")) {
                // Behandle Links wie "index.html#contact"
                const targetId = href.split("#")[1];
                handleNavigation(targetId);
            }
        });
    });

    // (Filter- und Sortier-Funktionen)
    function filterTable() {
        const countryFilter = filterCountry.value.toLowerCase();
        const companyFilter = filterCompany.value.toLowerCase();
        
        for (let row of table.rows) {
            const country = row.cells[0].textContent.toLowerCase();
            const company = row.cells[1].textContent.toLowerCase();
            
            if ((country.includes(countryFilter) || countryFilter === '') &&
                (company.includes(companyFilter) || companyFilter === '')) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }

    function sortTable(order) {
        let rows = Array.from(table.rows);
        rows.sort((a, b) => {
            const co2A = parseInt(a.cells[2].textContent);
            const co2B = parseInt(b.cells[2].textContent);
            return order === 'asc' ? co2A - co2B : co2B - co2A;
        });
        
        for (let row of rows) {
            table.appendChild(row);
        }
    }

    // Event-Listener für Filter und Sortierung
    filterCountry.addEventListener('change', filterTable);
    filterCompany.addEventListener('change', filterTable);
    sortOrder.addEventListener('change', () => {
        sortTable(sortOrder.value);
    });


    // Prüfe URL-Hash beim Laden
    const hash = window.location.hash;
    if (hash) {
        handleNavigation(hash.substring(1));
    }

    // RTL/LTR Toggle
    const toggleDirectionButton = document.getElementById("toggle-direction");
    toggleDirectionButton.addEventListener("click", () => {
        const body = document.body;
        if (body.classList.contains("rtl-direction")) {
            body.classList.remove("rtl-direction");
            body.classList.add("ltr-direction");
        } else {
            body.classList.remove("ltr-direction");
            body.classList.add("rtl-direction");
        }
    });
});