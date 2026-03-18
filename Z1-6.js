document.addEventListener("DOMContentLoaded", function () {
    const svg = d3.select("body")
        .append("svg")
        .attr("width", 800)
        .attr("height", 500);

    svg.append("rect")
        .attr("x", 0)
        .attr("y", 350)
        .attr("width", 800)
        .attr("height", 150)
        .attr("fill", "green");

    svg
        .append("rect")
        .attr("x", 250)
        .attr("y", 200)
        .attr("width", 300)
        .attr("height", 150)
        .attr("fill", "#f4a261");

    svg.append("polygon")
        .attr("points", "250, 200 400, 100 550, 200")
        .attr("fill", "#db3e17");

    svg.append("rect")
        .attr("x", 370)
        .attr("y", 270)
        .attr("width", 60)
        .attr("height", 80)
        .attr("fill", "#6543212");


    svg.append("circle")
        .attr("cx", 420)
        .attr("cy", 310)
        .attr("r", 5)
        .attr("fill", "gold");


    svg
        .append("rect")
        .attr("x", 280)
        .attr("y", 230)
        .attr("width", 60)
        .attr("height", 50)
        .attr("fill", "lightblue");


    svg
        .append("rect")
        .attr("x", 460)
        .attr("y", 230)
        .attr("width", 60)
        .attr("height", 50)
        .attr("fill", "lightblue");


    svg
        .append("line")
        .attr("x1", 310)
        .attr("y1", 230)
        .attr("x2", 310)
        .attr("y2", 280)
        .attr("stroke", "black");

    svg
        .append("line")
        .attr("x1", 280)
        .attr("y1", 255)
        .attr("x2", 340)
        .attr("y2", 255)
        .attr("stroke", "black");

    svg
        .append("line")
        .attr("x1", 460)
        .attr("y1", 255)
        .attr("x2", 520)
        .attr("y2", 255)
        .attr("stroke", "black");

    svg
        .append("line")
        .attr("x1", 490)
        .attr("y1", 230)
        .attr("x2", 490)
        .attr("y2", 280)
        .attr("stroke", "black");

    svg
        .append("circle")
        .attr("cx", 700)
        .attr("cy", 80)
        .attr("r", 40)
        .attr("fill", "yellow");

    for (let i = 0; i < 8; i++) {
        svg
            .append("line")
            .attr("x1", 700)
            .attr("y1", 80)
            .attr("x2", 700 + 60 * Math.cos(i * Math.PI / 4))
            .attr("y2", 80 + 60 * Math.sin(i * Math.PI / 4))
            .attr("stroke", "orange")
            .attr("stroke-width", 2);
    }

    svg
        .append("ellipse")
        .attr("cx", 150)
        .attr("cy", 100)
        .attr("rx", 40)
        .attr("ry", 25)
        .attr("fill", "#0f92ca");

    svg
        .append("ellipse")
        .attr("cx", 180)
        .attr("cy", 100)
        .attr("rx", 40)
        .attr("ry", 25)
        .attr("fill", "#0f92ca");

    svg
        .append("ellipse")
        .attr("cx", 165)
        .attr("cy", 80)
        .attr("rx", 40)
        .attr("ry", 25)
        .attr("fill", "#0f92ca");

    svg
        .append("ellipse")
        .attr("cx", 300)
        .attr("cy", 120)
        .attr("rx", 35)
        .attr("ry", 20)
        .attr("fill", "#0f92ca");

    svg
        .append("ellipse")
        .attr("cx", 330)
        .attr("cy", 120)
        .attr("rx", 35)
        .attr("ry", 20)
        .attr("fill", "#0f92ca");
});