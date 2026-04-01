var data = [
    { period: "P1", ukupno: 637 },
    { period: "P2", ukupno: 221 },
    { period: "P3", ukupno: 236 },
    { period: "P4", ukupno: 1093 },
    { period: "P5", ukupno: 173 }
];

// Zadatak 2
var width = 500;
var height = 300;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var x = d3.scale.ordinal()
    .domain(data.map(function(d) {
        return d.period;
    }))
    .rangeBands([0, width], 0.1);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
        return d.ukupno;
    })])
    .range([height, 0]);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d) {
        return x(d.period);
    })
    .attr("y", function(d) {
        return y(d.ukupno);
    })
    .attr("width", x.rangeBand())
    .attr("height", function(d) {
        return height - y(d.ukupno);
    })
    .attr("fill", "blue");
