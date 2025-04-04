var birthDate = new Date("08/30/2011");
function updateTime() {
    var currentDate = new Date();
    document.getElementById('age_span').innerHTML = ((currentDate.getTime() - birthDate.getTime()) / 31536000000).toPrecision(10);
}

setInterval(updateTime, 100);
updateTime();