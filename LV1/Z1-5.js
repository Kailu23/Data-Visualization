document.addEventListener("DOMContentLoaded", function () {
    const svg2 = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 200);

    const rings = [
        { cx: 100, cy: 80, color: "blue" },
        { cx: 200, cy: 80, color: "black" },
        { cx: 300, cy: 80, color: "red" },
        { cx: 150, cy: 115, color: "yellow" },
        { cx: 250, cy: 115, color: "green" }
    ];

    svg2.selectAll("circle")
        .data(rings)
        .enter()
        .append("circle")
        .attr("cx", d => d.cx)
        .attr("cy", d => d.cy)
        .attr("r", 40)
        .attr("fill", "none")
        .attr("stroke", d => d.color)
        .attr("stroke-width", 5);
});