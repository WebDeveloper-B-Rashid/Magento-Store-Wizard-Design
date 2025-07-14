document.addEventListener('DOMContentLoaded', () => {
    const cpuUsageElement = document.getElementById('cpu-usage');
    const cpuProgressBar = document.getElementById('cpu-progress');
    const memoryUsageElement = document.getElementById('memory-usage');
    const memoryProgressBar = document.getElementById('memory-progress');
    const diskSpaceElement = document.getElementById('disk-space');
    const diskProgressBar = document.getElementById('disk-progress');
    const restartButton = document.getElementById('restart-button');
    const actionMessage = document.getElementById('action-message');

    // Function to simulate fetching system data
    function getSystemData() {
        // Simulate random usage percentages
        const cpu = (Math.random() * 100).toFixed(1);
        const memory = (Math.random() * 100).toFixed(1);
        const disk = (Math.random() * 100).toFixed(1);

        // Simulate disk space used/total
        const totalDiskGB = 500;
        const usedDiskGB = (totalDiskGB * (disk / 100)).toFixed(1);

        cpuUsageElement.textContent = `${cpu}%`;
        cpuProgressBar.style.width = `${cpu}%`;

        memoryUsageElement.textContent = `${memory}%`;
        memoryProgressBar.style.width = `${memory}%`;

        diskSpaceElement.textContent = `${usedDiskGB}GB / ${totalDiskGB}GB (${disk}%)`;
        diskProgressBar.style.width = `${disk}%`;

        // Change progress bar color based on usage (optional)
        // You can add more complex logic here
        if (parseFloat(cpu) > 75) cpuProgressBar.style.backgroundColor = '#e74c3c'; // Red
        else if (parseFloat(cpu) > 50) cpuProgressBar.style.backgroundColor = '#f39c12'; // Yellow
        else cpuProgressBar.style.backgroundColor = '#2ecc71'; // Green

        if (parseFloat(memory) > 80) memoryProgressBar.style.backgroundColor = '#e74c3c';
        else if (parseFloat(memory) > 60) memoryProgressBar.style.backgroundColor = '#f39c12';
        else memoryProgressBar.style.backgroundColor = '#3498db';

        if (parseFloat(disk) > 90) diskProgressBar.style.backgroundColor = '#e74c3c';
        else if (parseFloat(disk) > 70) diskProgressBar.style.backgroundColor = '#f39c12';
        else diskProgressBar.style.backgroundColor = '#9b59b6';
    }

    // Update data every 3 seconds
    setInterval(getSystemData, 3000);

    // Initial data load
    getSystemData();

    // Event listener for the restart button
    restartButton.addEventListener('click', () => {
        actionMessage.textContent = 'Restarting service... Please wait.';
        actionMessage.style.color = '#f39c12'; // Orange for pending

        // Simulate an asynchronous operation (e.g., an API call to restart a service)
        setTimeout(() => {
            actionMessage.textContent = 'Service restarted successfully!';
            actionMessage.style.color = '#27ae60'; // Green for success
            // Optionally, refresh system data after restart
            getSystemData();
        }, 2000); // Simulate 2-second restart time
    });
});