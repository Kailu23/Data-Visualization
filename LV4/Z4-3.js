var width = 480,
    height = 480,
    radius = 130;

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

var labelArc = d3.svg.arc()
    .outerRadius(radius + 20)
    .innerRadius(radius + 20);

var container = d3.select("body")
    .style("display", "flex")
    .style("justify-content", "center")
    .style("align-items", "center")
    .style("gap", "30px")
    .style("min-height", "100vh");

var svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var log = container.append("div")
    .style("width", "240px")
    .style("background", "#1e1e1e")
    .style("border-radius", "6px")
    .style("padding", "12px")
    .style("min-height", "160px")
    .style("max-height", "280px")
    .style("overflow-y", "auto")
    .style("font-family", "monospace")
    .style("font-size", "12px")
    .style("color", "#6dcf8e")
    .html('<span style="color:#555">// klikni segment...</span>');

var first = true;

var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g");

g.append("path")
    .attr("class", "seg")
    .attr("d", arc)
    .attr("fill", function (d, i) { return color(i); })
    .attr("stroke", "#fff")
    .on("click", function (d) {

        console.log(d.data.name, d.data.value);

        if (first) {
            log.html("");
            first = false;
        }

        log.append("div")
            .style("margin-bottom", "4px")
            .html("<span style='color:#888'>></span> " +
                d.data.name + ": " + d.data.value + " kom");

        log.node().scrollTop = log.node().scrollHeight;
    });

g.append("text")
    .attr("transform", function (d) {
        return "translate(" + labelArc.centroid(d) + ")";
    })
    .attr("text-anchor", function (d) {
        var pos = labelArc.centroid(d);
        return pos[0] > 0 ? "start" : "end";
    })
    .attr("dominant-baseline", "middle")
    .attr("font-size", "12px")
    .attr("fill", "#333")
    .text(function (d) {
        return d.data.name + " (" + d.data.value + ")";
    });