var width = 960;
var height = 700;

var projection = d3.geo.mercator()
    .center([16, 45.5])
    .scale(5000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var zoom = d3.behavior.zoom()
    .scaleExtent([1, 8])
    .on("zoom", zoomed);

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom);

var g = svg.append("g");

var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px")
    .style("background", "black")
    .style("color", "white")
    .style("border-radius", "5px")
    .style("pointer-events", "none")
    .style("opacity", 0);

var info = d3.select('body')
    .append("div")
    .style('margin-top', "20px")
    .style('font-size', "18px");

var countyData = {
    "Grad Zagreb": 790017,
    "Splitsko-Dalmatinska": 454798,
    "Osjecko-Baranjska": 259481,
    "Primorsko-Goranska": 265419,
    "Zagrebacka": 299985
};

var color = d3.scale
    .linear()
    .domain([0, 800000])
    .range(["lightblue", "darkblue"]);

function zoomed() {
    g.attr(
        "transform",
        "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"
    );
}

d3.json("cro.json", function (error, data) {

    if (error) {
        console.log(error);
        return;
    }

    var counties = topojson.feature(
        data,
        data.objects.layer1
    ).features;

    g.selectAll("path")
        .data(counties)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", function (d) {
            var value = d.properties.population;

            if (value) {
                return color(value);
            }

            return "gray";
        })
        .style("stroke", "white")
        .style("stroke-width", 1)
        .on("mouseover", function (d) {

            tooltip
                .style("opacity", 1)
                .html(d.properties.name)
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 20) + "px");
        })
        .on("mouseout", function () {

            tooltip.style("opacity", 0);
        })
        .on("click", function (d) {
            info.html(
                "<h2>" + d.properties.name + "</h2>" +
                "<p>Broj stanovnika: " + d.properties.population + "</p>"
            );
        });
});