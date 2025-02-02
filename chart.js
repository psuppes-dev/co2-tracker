document.addEventListener('DOMContentLoaded', function() {
    new Chart(document.getElementById('totalEmissionsChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Deutschland', 'USA', 'China'],
            datasets: [{
                data: [800, 1590, 2150],
                backgroundColor: '#2ecc71',
                borderColor: '#27ae60',
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: false  // Legende komplett ausblenden
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CO2 Emissionen (t)'
                    }
                }
            }
        }
    });
});