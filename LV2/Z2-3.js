var data = [
  {period: "P1", ukupno: 637},
  {period: "P2", ukupno: 221},
  {period: "P3", ukupno: 236},
  {period: "P4", ukupno: 1093},
  {period: "P5", ukupno: 173}
];

var margin = {top: 20, bottom: 80, left: 60, right: 20};
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
  .domain(data.map(function(d){ return d.period; }))
  .rangeBands([0, width], 0.1);

var y = d3.scale.linear()
  .domain([0, d3.max(data, function(d){ return d.ukupno; })])
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

// stupci
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", function(d){ return x(d.period); })
  .attr("y", function(d){ return y(d.ukupno); })
  .attr("width", x.rangeBand())
  .attr("height", function(d){ return height - y(d.ukupno); })
  .attr("fill", "blue");


svg.append("text")
  .attr("x", width / 2)
  .attr("y", height + 60)
  .style("text-anchor", "middle")
  .style("font-size", "12px")
  .style("font-weight", "bold")
  .text("Razdoblje");

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", -45)
  .style("text-anchor", "middle")
  .style("font-size", "12px")
  .style("font-weight", "bold")
  .text("Dolasci turista (tis.)");
