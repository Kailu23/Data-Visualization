var svg = d3.select('body')
    .append("svg")
    .attr('width', 1200)
    .attr('height', 1200);

var cx = 800, cy = 600;

svg.append('circle')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 30)
    .style('fill', "yellow")
    .style('fill-opacity', 1);

var planets = [
    { name: "Merkur", r: 50, size: 4, speed: 1500, color: "#a9a9a9" },
    { name: "Venera", r: 80, size: 6, speed: 2500, color: "#e6b800" },
    { name: "Zemlja", r: 110, size: 7, speed: 3000, color: "#1f77ff" },
    { name: "Mars", r: 140, size: 5, speed: 3500, color: "#cc3300" },
    { name: "Jupiter", r: 190, size: 12, speed: 5000, color: "#d2a679" },
    { name: "Saturn", r: 240, size: 11, speed: 6500, color: "#e6d8ad" },
    { name: "Uran", r: 290, size: 9, speed: 8000, color: "#66ffff" },
    { name: "Neptun", r: 340, size: 9, speed: 9500, color: "#3366ff" }
];

planets.forEach(function(p) {
    var planet = svg
        .append('circle')
        .attr('r', p.size)
        .style('fill', p.color)
        .style('fill-opacity', 1);

    var label = svg.append("text")
        .text(p.name)
        .style('font-size', "10px");

    function rotate() {
        planet.transition()
            .duration(p.speed)
            .attrTween("transform", function() {
                return function(t) {
                    var angle = t * 2 * Math.PI;
                    var x = cx + p.r * Math.cos(angle);
                    var y = cy + p.r * Math.sin(angle);

                    label.attr('x', x + 10)
                        .attr('y', y);

                    return "translate(" + x + "," + y + ")";
                };
            })
            .each("end", rotate);
    }
    rotate()
});
