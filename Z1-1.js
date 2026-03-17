document.addEventListener("DOMContentLoaded", function () {
    const body = d3.select("body");

    const div1 = body.append("div");
    div1.append("h2").text("Podnaslov 1");

    div1.append("p").text("Tekst 1.");

    const div2 = body.append("div");

    div2.append("h2").text("Podnaslov 2");

    div2.append("p").text("Tekst 2.");

    d3.selectAll("div")
        .attr("id", (d, i) => "ID" + (i + 1));

    d3.selectAll("p")
        .text("Proizvoljan sadržaj.");
});
