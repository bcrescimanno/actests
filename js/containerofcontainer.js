var CONFIG = {
    baseOffset: 10,
    width: 325,
    baseTop: 0,
    height: 500,
    containers: 4,
    currentTop: 0,
    topOffset: 0,
    topOffsetBy: 0
};

function handleKeyInput() {
    var move = document.getElementById("movingWrapper"),
        containers = document.getElementsByClassName("container"),
        newTop = CONFIG.topOffset - CONFIG.height,
        newOffset;


    newOffset = (CONFIG.topOffsetBy * CONFIG.height) + (CONFIG.height * CONFIG.containers);
    CONFIG.topOffsetBy++;

    move.style.webkitTransform = 
        "translate3d(0, " + newTop + "px, 0)";

    containers[CONFIG.currentTop].style.webkitTransform =
        "translate3d(0, " + newOffset + "px, 0)";

    CONFIG.topOffset = newTop;
    CONFIG.currentTop = (CONFIG.currentTop === 3) ? 0 : CONFIG.currentTop + 1;
}

function setup () {
    var containers = document.getElementsByClassName("container"),
        numContainers = containers.length,
        topIndex = CONFIG.currentTop,
        offsetFromTop,
        j,
        items,
        i,
        x,
        y,
        numItems;

    for (j = 0; j < numContainers; j++) {
        items = containers[j].getElementsByClassName("item");

        offsetFromTop = Math.abs(j - topIndex);
        y = CONFIG.baseTop + (offsetFromTop * CONFIG.height);
        containers[j].style.webkitTransform = 
            "translate3d(0, " + y + "px, 0)";

        for (i = 0, numItems = items.length; i < numItems; i++) {
            x = CONFIG.baseOffset + (i * CONFIG.width);
            items[i].style.webkitTransform = 
                "translate3d(" + x + "px, 0, 0)";
        }
    }

    document.addEventListener("keydown", handleKeyInput, true);

}
