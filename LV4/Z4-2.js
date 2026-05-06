var width = 600,
    height = 600,
    radius = 150;

var data = [
    { name: "Jabuke", value: 17 },
    { name: "Kruška", value: 4 },
    { name: "Banana", value: 83 },
    { name: "Jagoda", value: 47 },
    { name: "Ribiz", value: 1 }
];

var color = d3.scale.category10();

var pie = d3.layout.pie()
    .value(function (d) { return d.value; });

var arc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arcBig = d3.svg.arc()
    .outerRadius(155)
    .innerRadius(0);

var tabs = d3.select("body")
    .append("div")
    .style('display', "flex")
    .style('justify-content', "center")
    .style('gap', '8px')
    .style('margin-top', "40px")
    .style('margin-bottom', "20px");

var names = ["problem", "a", "b"];

tabs.selectAll("button")
    .data(names)
    .enter()
    .append("button")
    .text(function (d) { return d.toUpperCase(); })
    .on("click", function (d) {
        d3.selectAll(".panel").style("display", "none");
        d3.select("#panel-" + d)
            .style("display", "flex")
            .style('justify-content', "center");
    });

var panels = d3.select("body")
    .selectAll(".panel")
    .data(names)
    .enter()
    .append("div")
    .attr("id", function (d) { return "panel-" + d; })
    .attr("class", "panel")
    .style("display", function (d, i) { return i === 0 ? "flex" : "none"; })
    .style('justify-content', "center");

function drawPie(container, arcGen, labelMode) {

    var svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g");

    g.append("path")
        .attr("d", arcGen)
        .attr("fill", function (d, i) { return color(i); })
        .attr("stroke", "#fff");



    if (labelMode === "inside") {

        g.append("text")
            .attr("transform", function (d) {
                return "translate(" + arcGen.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .text(function (d) {
                return d.data.name + " " + d.data.value;
            });

    }

    if (labelMode === "outside") {

        var outerArc = d3.svg.arc()
            .innerRadius(radius * 1.1)
            .outerRadius(radius * 1.1);

        g.append("polyline")
            .attr("points", function (d, i) {
                var p1 = arcGen.centroid(d);
                var p2 = outerArc.centroid(d);
                var p3 = outerArc.centroid(d);

                var side = p3[0] > 0 ? 1 : -1;

                p3[0] = radius * 1.45 * side;

                if (side > 0) {
                    p3[1] += i * 10;
                } else {
                    p3[1] -= i * 10;
                }

                return [p1, p2, p3];
            })
            .attr("fill", "none")
            .attr("stroke", function (d, i) { return color(i); });

        g.append("text")
            .attr("transform", function (d, i) {
                var pos = outerArc.centroid(d);

                var side = pos[0] > 0 ? 1 : -1;

                pos[0] = radius * 1.45 * side;

                if (side > 0) {
                    pos[1] += i * 10;
                } else {
                    pos[1] -= i * 10;
                }

                return "translate(" + pos + ")";
            })
            .attr("text-anchor", function (d) {
                var pos = outerArc.centroid(d);
                return pos[0] > 0 ? "start" : "end";
            })
            .text(function (d) {
                return d.data.name + " (" + d.data.value + ")";
            });
    }

    if (labelMode === "rotated") {

        g.append("text")
            .attr("transform", function (d) {
                var c = arcGen.centroid(d);
                var angle = (d.startAngle + d.endAngle) / 2;
                return "translate(" + c + ") rotate(" + (angle * 180 / Math.PI) + ")";
            })
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .text(function (d) {
                return d.data.name + " " + d.data.value;
            });

    }
}

drawPie(d3.select("#panel-problem"), arc, "inside");

drawPie(d3.select("#panel-a"), arcBig, "outside");

drawPie(d3.select("#panel-b"), arc, "rotated");