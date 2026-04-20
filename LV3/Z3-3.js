var widthSVG = 400;
var heightSVG = 400;

var svg = d3.select("body")
    .append("svg")
    .attr("width", widthSVG)
    .attr("height", heightSVG);

var rectWidth = 80;
var rectHeight = 50;

var startX = widthSVG - rectWidth;
var startY = heightSVG - rectHeight;

var rect = svg.append("rect")
    .attr("width", rectWidth)
    .attr("height", rectHeight)
    .style("fill", "blue")
    .attr("transform", "translate(" + startX + "," + startY + ")");

rect.transition()
    .duration(1000)
    .attrTween("transform", function() {
        return function(t) {
            var x = startX * (1 - t);
            return "translate(" + x + "," + startY + ")";
        };
    })
    .each("end", function() {

        d3.select(this).transition()
            .duration(1000)
            .attrTween("transform", function() {
                return function(t) {
                    var y = startY * (1 - t);
                    return "translate(0," + y + ")";
                };
            });
    });