let votes = {
    Java: 0,
    Python: 0,
    JavaScript: 0,
    totalVotes: 0
};

// Create chart instance globally so it can be updated
let pollChart;

document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedOption = document.querySelector('input[name="language"]:checked');
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    const votedLanguage = selectedOption.value;
    votes[votedLanguage]++;
    votes.totalVotes++;

    updatePollResult();
    updateChart(); // Update chart instead of re-initializing
});

function updatePollResult() {
    const javaPercentage = ((votes.Java / votes.totalVotes) * 100).toFixed(2);
    const pythonPercentage = ((votes.Python / votes.totalVotes) * 100).toFixed(2);
    const javascriptPercentage = ((votes.JavaScript / votes.totalVotes) * 100).toFixed(2);

    document.getElementById('pollResult').innerHTML = `
        <p>Java: ${javaPercentage}%</p>
        <p>Python: ${pythonPercentage}%</p>
        <p>JavaScript: ${javascriptPercentage}%</p>
    `;
}

function updateChart() {
    const ctx = document.getElementById('pollChart').getContext('2d');

    // Data to be updated dynamically
    const chartData = {
        labels: ['Java', 'Python', 'JavaScript'],
        datasets: [{
            label: 'Vote Percentage',
            data: [
                (votes.Java / votes.totalVotes) * 100,
                (votes.Python / votes.totalVotes) * 100,
                (votes.JavaScript / votes.totalVotes) * 100
            ],
            backgroundColor: ['#007BFF', '#28A745', '#DC3545'],
            borderColor: ['#0056b3', '#218838', '#c82333'],
            borderWidth: 1
        }]
    };

    if (pollChart) {
        // If chart already exists, update the data and re-render
        pollChart.data = chartData;
        pollChart.update();
    } else {
        // First time creating the chart
        const config = {
            type: 'pie',  // Pie chart type
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
                            }
                        }
                    }
                }
            }
        };
        pollChart = new Chart(ctx, config); // Initialize the chart
    }
}
