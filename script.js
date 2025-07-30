function refreshWeather() {
    const refreshBtn = document.querySelector('.refresh-btn');
    refreshBtn.style.transform = 'rotate(720deg)';
    setTimeout(() => {
        const temps = document.querySelectorAll('.current-temp, .temp-high, .city-temp');
        temps.forEach(temp => {
            const currentTemp = parseInt(temp.textContent);
            const newTemp = currentTemp + Math.floor(Math.random() * 6) - 3;
            temp.textContent = newTemp + '°';
        });
        refreshBtn.style.transform = 'rotate(0deg)';
        document.body.style.filter = 'brightness(1.1)';
        setTimeout(() => {
            document.body.style.filter = 'brightness(1)';
        }, 200);
    }, 1000);
}
