document.addEventListener("DOMContentLoaded", function () {
    const data = d3.range(10);

    const divs = d3.select("body")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("id", (d, i) => "ID" + (i + 1));

    divs.append("h2")
        .text((d, i) => "Podnaslov " + (i + 1));

    divs.append("p")
        .text((d, i) => "Tekst " + (i + 1) + ".");
});