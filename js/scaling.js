/*global CONFIG: true */

(function(CONFIG, exports) {

    function redraw () {
        var containers = document.getElementsByClassName("container"),
        numContainers = containers.length,
        topIndex = CONFIG.currentTop,
        transform,
        offsetFromTop,
        j,
        y;

        for (j = 0; j < numContainers; j++) {
            offsetFromTop = 0;
            if (j > topIndex) {
                offsetFromTop = j - topIndex;
            } else if (j < topIndex) {
                offsetFromTop = CONFIG.containers + (j - topIndex); 
            } 
            y = CONFIG.baseTop + (offsetFromTop * CONFIG.height);
            transform = "translate3d(0, " + y + "px, 0)";
            if (offsetFromTop !== 0) {
                transform += " scale(0.75)";
            }
            containers[j].style.webkitTransform = transform;
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
        topIndex = CONFIG.currentTop,
        offsetFromTop,
        transform,
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
            transform = "translate3d(0, " + y + "px, 0)";
            if(offsetFromTop !== 0) {
                transform += " scale(0.75)";
            }
            containers[j].style.webkitTransform = transform;

            for (i = 0, numItems = items.length; i < numItems; i++) {
                x = CONFIG.baseOffset + (i * CONFIG.width);
                items[i].style.webkitTransform = 
                    "translate3d(" + x + "px, 0, 0)";
            }
        }

        document.addEventListener("keydown", handleKeyInput, true);

    }

    exports.setup = setup;

})(CONFIG, window);
