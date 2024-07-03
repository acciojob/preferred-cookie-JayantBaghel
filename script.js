//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply preferences
function applyPreferences() {
    const fontsize = getCookie('fontsize');
    const fontcolor = getCookie('fontcolor');

    if (fontsize) {
        document.documentElement.style.setProperty('--fontsize', fontsize + 'px');
        document.getElementById('fontsize').value = fontsize;
    }
    if (fontcolor) {
        document.documentElement.style.setProperty('--fontcolor', fontcolor);
        document.getElementById('fontcolor').value = fontcolor;
    }
}

// Event listener for form submission
document.getElementById('preference-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fontsize = document.getElementById('fontsize').value;
    const fontcolor = document.getElementById('fontcolor').value;

    setCookie('fontsize', fontsize, 7);
    setCookie('fontcolor', fontcolor, 7);

    applyPreferences();
});

// Apply preferences on page load
window.onload = applyPreferences;
