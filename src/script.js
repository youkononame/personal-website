var birthDate = new Date("08/30/2011");

function updateTime() {
    var currentDate = new Date();
    document.getElementById('age_span').innerHTML = ((currentDate.getTime() - birthDate.getTime()) / 31536000000).toPrecision(10);
}

window.onload = function() {
    draggable(document.getElementById('window'));
    draggable(document.getElementById('window2'));
}

function draggable(el) {
    el.addEventListener('mousedown', function(e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMoveHandler(e) {
            el.style.top = (e.clientY - offsetY) + 'px';
            el.style.left = (e.clientX - offsetX) + 'px';
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}

setInterval(updateTime, 100);
updateTime();

if (window.matchMedia("(max-width: 600px)").matches) {
    window.location.replace("mobile.html");
} else {
    window.location.replace("index.html");
}