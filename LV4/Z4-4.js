var width = 820,
    height = 500;

var data = {
    name: "flare",
    children: [{
        name: "analytics",
        children: [
            {
                name: "cluster", children: [
                    { name: "AgglomerativeCluster" },
                    { name: "CommunityStructure" },
                    { name: "MergeEdge" }
                ]
            },
            {
                name: "graph", children: [
                    { name: "BetweennessCentrality" },
                    { name: "LinkDistance" }
                ]
            }
        ]
    }]
};

var tree = d3.layout.cluster()
    .size([height, width - 200]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.y, d.x]; });

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(80,20)");

var root = data;

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

root.children.forEach(collapse);

function update() {

    var nodes = tree.nodes(root),
        links = tree.links(nodes);

    var link = svg.selectAll(".link")
        .data(links, function (d) { return d.target.name; });

    link.enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#bbb")
        .attr("stroke-width", "1.5px");

    link.attr("d", diagonal);

    link.exit().remove();

    var node = svg.selectAll(".node")
        .data(nodes, function (d) { return d.name; });

    var nodeEnter = node.enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    nodeEnter.append("circle")
        .attr("r", 6)
        .attr("fill", "#fff")
        .attr("stroke", "#6a9fd8")
        .attr("stroke-width", "2px")
        .on("click", click);

    nodeEnter.append("text")
        .attr("dy", 4)
        .attr("font-size", "13px")
        .attr("fill", "#333");

    node.select("text")
        .attr("dx", function (d) {
            return d.children || d._children ? -10 : 10;
        })
        .attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function (d) { return d.name; });

    node.attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
    });

    node.exit().remove();
}

function click(d) {

    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }

    update();
}

update();