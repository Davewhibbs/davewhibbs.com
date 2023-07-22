var i = 0;
var txt = 'A <b>Senior Front End Developer</b> at <b>EVERSANA INTOUCH</b>, building web applications for patients and healthcare providers.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("bio").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}