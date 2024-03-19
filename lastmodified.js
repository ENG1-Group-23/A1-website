window.onload = function () {
    document.getElementById("lmdate").innerHTML =
        new Date(document.lastModified)
            .toLocaleDateString("en-GB", {
                weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric',
                hour: 'numeric', minute: 'numeric',
                second: 'numeric', hour12: false,
                timeZone: 'UTC', timeZoneName: 'short' }
            );
}

