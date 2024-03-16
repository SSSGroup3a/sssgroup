const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=leaves&type=track', {
    headers: {
    'Authorization': 'Bearer BQDCQIC464B2cq4LK00IaY0StxlAo8PSRTGMtvbEw31hLx9Od5AT_jjPM3kZkRgGe1F8xo5GTEiu9bYJUzfNjbuvJcvVy0951xPaqg4KPUaWEEbrOq4eYZMO8eJQWms7zV4FoE4Hi1fL2KpuEOOjh1Fxie-JieOqqwouuiLDrF5ttSuEQqZeJt7qNZ6LckT-0V4Qrhaj7ZI8hoUHI4U'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})
