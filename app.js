document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://script.google.com/macros/s/AKfycbw0z3uJwi-JvuiT5kTwxXbTnOM5f9SS_SnIsouLp67d3Y6C04ug1avzSIUJha1QNiXR8g/exec?path=api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('data').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('data').innerText = 'Error fetching data: ' + error;
        });
}
