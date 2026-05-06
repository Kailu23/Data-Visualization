var width = 500;
var height = 500;
var outerRadius = 200;
var innerRadius = 0;

var data = [
    { name: 'jabuka', value: 17 },
    { name: 'kruska', value: 4 },
    { name: 'banana', value: 83 },
    { name: 'jagoda', value: 47 },
    { name: 'ribizla', value: 1 }
];

var color = d3.scale.category20();

var pie = d3.layout.pie()
    .value(function (d) { return d.value; });

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var pieArcs = svg.selectAll("g.pie")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "pie")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

pieArcs.append("path")
    .attr("fill", function (d, i) { return color(i); })
    .attr("d", arc);

pieArcs.append("text")
    .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text(function (d) {
        return d.data.name + " (" + d.data.value + ")";
    });
