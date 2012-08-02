AC Tests
========

A small set of accelerated compositing tests to determine the internal impact of each different
technique for rendering a large set of data in a row format.

Usage
-----

Open the HTML file that corresponds to a test. Press any key to animate the rows

The Tests
---------

Each of the tests is represented by an HTML file and each is described below:

### Individual Layers

In this test, all vertical animation is done by animating individual layers rather than animating
their parent container

### Containers

In this test, all vertical animation is done by animating the container element. The container
itself is not a layer; each of the individual tiles is a layer.

### Big Layer

In this test, all vertical animation is done by animating the container element. The container
itself is a layer; none of the individual tiles are layers.

### Container of Containers

In this test, we don't actually animate the rows or their contents. Instead, we animate a single
outer container and simply reposition the rows within that contianer for recycling purposes. The
repositioning of the rows doesn't animate so it's a single operation
