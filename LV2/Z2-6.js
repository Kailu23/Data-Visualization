var data = [
    { date: new Date(2022, 0, 1), value: 637 },
    { date: new Date(2022, 1, 1), value: 221 },
    { date: new Date(2022, 2, 1), value: 236 },
    { date: new Date(2022, 3, 1), value: 1093 },
    { date: new Date(2022, 4, 1), value: 173 }
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
var x = d3.time.scale()
    .domain(d3.extent(data, function(d) {
        return d.date;
    }))
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
        return d.value;
    })])
    .range([height, 0]);

// osi
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(d3.time.months, 1)
    .tickFormat(d3.time.format("%b"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

var line = d3.svg.line()
    .x(function(d) {
        return x(d.date);
    })
    .y(function(d) {
        return y(d.value);
    });

svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("d", line);
