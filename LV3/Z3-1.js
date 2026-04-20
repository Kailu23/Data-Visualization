var widthSVG = 500;

var svg = d3.select("body")
.append("svg")
.attr('width', widthSVG)
.attr('height', widthSVG);

var square = svg.append("rect")
.attr('x', 50)
.attr('y', 50)
.attr('width', 50)
.attr('height', 50)
.style('fill', "blue")
.style('fill-opacity', 0)
.style('stroke', "blue")
.style('opacity', 1);

square.transition()
.delay(3000)
.duration(5000)
.style('fill-opacity', "1")
.each("end", function () {
    d3.select(this).transition()
    .duration(3000)
    .attr('width', widthSVG / 2)
    .attr('height', widthSVG / 2)
    .style('opacity', 0);
})