/*global CONFIG */

(function(CONFIG, exports) {
    function redraw () {
        var containers = document.getElementsByClassName("container"),
        numContainers = containers.length,
        topIndex = CONFIG.currentTop,
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
            containers[j].style.webkitTransform = 
                "translate3d(0, " + y + "px, 0)";
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
        curContainer,
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
                    "translate(" + x + "px, 0)";
            }

            curContainer = containers[j];
        }

        document.addEventListener("keydown", handleKeyInput, true);

    }

    exports.setup = setup;


})(CONFIG, window);
