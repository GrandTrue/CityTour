function RequestLocationUpdates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var locationData = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                // �l�͔����� Unity
                if (window.unityInstance) {
                    unityInstance.SendMessage("GPSLocationManagerObject", "UpdateLocation", JSON.stringify(locationData));
                } else {
                    console.error("Unity instance is not available.");
                }
            },
            function (error) {
                console.error("Error obtaining location:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}
