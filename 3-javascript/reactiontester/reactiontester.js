var start = new Date().getTime()

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function appearingShape() {
    var size = (Math.random() * 200 + 50)
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%"

    } else {
        document.getElementById("shape").style.borderRadius = "0"
    }
    document.getElementById("shape").style.top = Math.random() * 300 + "px"
    document.getElementById("shape").style.left = Math.random() * 500 + "px"
    document.getElementById("shape").style.width = size + "px"
    document.getElementById("shape").style.height = size + "px"
    document.getElementById("shape").style.backgroundColor = getRandomColor()

    document.getElementById("shape").style.display = "block"
    start = new Date().getTime()

}

function appearafterDelay() {
    setTimeout(appearingShape, Math.random() * 2000)
}
appearafterDelay()
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none"

    var end = new Date().getTime()
    var reactionTime = (end - start) / 1000

    document.getElementById("mentionTime").innerHTML = reactionTime + " s"

    appearafterDelay()



}