document.addEventListener("DOMContentLoaded", function () {
    var svg = d3.select("body")
        .append("svg")
        .attr("width", 200)
        .attr("height", 1200);


    svg.append("rect")
        .attr("x", 50)
        .attr("y", 50)
        .attr("width", 100)
        .attr("height", 600)
        .attr("fill", "yellow")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .attr("fill-opacity", 0.5)
        .attr("stroke-opacity", 1);
});