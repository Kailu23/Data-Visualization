var widthSVG = 500;

var svg = d3.select("body")
    .append("svg")
    .attr("width", widthSVG)
    .attr("height", 500);

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function createSquares() {

    svg.selectAll("*").remove();

    for (var i = 0; i < 10; i++) {

        var size = rand(20, 60);

        var square = svg.append("rect")
            .attr("x", rand(0, widthSVG - size))
            .attr("y", rand(0, widthSVG - size))
            .attr("width", size)
            .attr("height", size)
            .style("fill", "blue")
            .style("fill-opacity", 0)
            .style("stroke", "blue")
            .style("opacity", 1);

        var delay = rand(1000, 4000);
        var fillDuration = rand(2000, 5000);
        var growthDuration = rand(2000, 5000);

        square.transition()
            .delay(delay)
            .duration(fillDuration)
            .style("fill-opacity", 1)
            .each("end", function() {

                d3.select(this).transition()
                    .duration(growthDuration)
                    .attr("width", widthSVG / 2)
                    .attr("height", widthSVG / 2)
                    .style("opacity", 0);
            });
    }

    setTimeout(createSquares, 12000);
}

createSquares();
