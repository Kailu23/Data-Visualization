var data = [
    { period: "P1", ukupno: 637, domaci: 175, strani: 462 },
    { period: "P2", ukupno: 221, domaci: 113, strani: 108 },
    { period: "P3", ukupno: 236, domaci: 117, strani: 119 },
    { period: "P4", ukupno: 1093, domaci: 405, strani: 688 },
    { period: "P5", ukupno: 173, domaci: 99, strani: 74 }
];

var margin = { top: 20, bottom: 80, left: 60, right: 20 };
var width = 500 - margin.left - margin.right;
var height = 300 - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.bottom + margin.top)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// skale
var x = d3.scale.ordinal()
    .domain(data.map(function(d) { return d.period; }))
    .rangeBands([0, width], 0.1);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
        return Math.max(d.ukupno, d.domaci, d.strani);
    })])
    .range([height, 0]);

// osi
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .call(yAxis);
function drawLine(key, color) {
    var line = d3.svg.line()
        .x(function(d) {
            return x(d.period);
        })
        .y(function(d) {
            return y(d[key]);
        });
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", "2")
        .attr("d", line);
}

drawLine("ukupno", "blue");
drawLine("domaci", "green");
drawLine("strani", "red");
