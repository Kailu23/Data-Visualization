var svg = d3.select("body")
    .append("svg")
    .attr("width", 600)
    .attr("height", 400);

var materials = [
    { x: 100, color: "gray", bounce: 0.3 },
    { x: 300, color: "orange", bounce: 0.6 },
    { x: 500, color: "blue", bounce: 0.45 }
];

materials.forEach(function(m) {

    var groundY = 300;

    var ball = svg.append("circle")
        .attr("cx", m.x)
        .attr("cy", 50)
        .attr("r", 15)
        .style("fill", "red");

    svg.append("rect")
        .attr("x", m.x - 30)
        .attr("y", groundY)
        .attr("width", 60)
        .attr("height", 20)
        .style("fill", m.color);

    var bounceHeight = 150;

    function fall() {

        ball.transition()
            .duration(800)
            .attr("cy", groundY - 15)
            .each("end", function() {

                bounceHeight = bounceHeight * m.bounce;

                if (bounceHeight < 5) return;

                d3.select(this).transition()
                    .duration(600)
                    .attr("cy", groundY - 15 - bounceHeight)
                    .each("end", fall);
            });
    }

    fall();
});