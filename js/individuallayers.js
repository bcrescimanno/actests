var CONFIG = {
    baseOffset: 10,
    width: 325,
    baseTop: 0,
    height: 500,
    containers: 4,
    currentTop: 0
};

function redraw () {
    var containers = document.getElementsByClassName("container"),
        numContainers = containers.length,
        topIndex = CONFIG.currentTop,
        total = CONFIG.containers,
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

        for (i = 0, numItems = items.length; i < numItems; i++) {
            x = CONFIG.baseOffset + (i * CONFIG.width);
            y = CONFIG.baseTop + (offsetFromTop * CONFIG.height);
            items[i].style.webkitTransform = 
                "translate3d(" + x + "px, " + y + "px, 0)";
        }
    }
}

function handleKeyInput (e) {
    e.preventDefault();
    if (CONFIG.currentTop === (CONFIG.containers - 1)) {
        CONFIG.currentTop = 0;
    } else {
        CONFIG.currentTop += 1;
    }

    redraw();
}

function setup () {
    var containers = document.getElementsByClassName("container"),
        numContainers = containers.length,
        j,
        items,
        i,
        x,
        y,
        numItems;

    for (j = 0; j < numContainers; j++) {
        items = containers[j].getElementsByClassName("item");

        for (i = 0, numItems = items.length; i < numItems; i++) {
            x = CONFIG.baseOffset + (i * CONFIG.width);
            y = CONFIG.baseTop + (j * CONFIG.height);
            items[i].style.webkitTransform = 
                "translate3d(" + x + "px, " + y + "px, 0)";
        }
    }

    document.addEventListener("keydown", handleKeyInput, true);

}

