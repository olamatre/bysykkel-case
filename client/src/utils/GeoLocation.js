export const getGeoLocation = async () => {
    var coordinates = {
        latitude: null,
        longitude: null
    }

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    
    const success = (pos) => {
        coordinates = {
            latidude: pos.coords.latidude,
            longitude: pos.coords.longitude
        }
    }
    
    const errors = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if (navigator.geolocation) {
        await navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success)
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options)
                } else if (result.state === "denied") {
                    //If denied then you have to show instructions to enable location
                }
                result.onchange = function () {
                    console.log(result.state);
                };
            });
    } else {
        alert("Sorry Not available!");
    }

    return {
        coordinates
    }
}