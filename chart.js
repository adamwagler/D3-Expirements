// Width and height
var w = 600;
var h = 500;
var barPadding = 2;

var dataset = [ 98, 142, 358, 262, 211, 103, 170, 175, 109, 408, 428, 414 ];

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
        return i * (w / dataset.length);
        })
   .attr("y", function(d) {
        return h - (d);
        })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d) {
        return d;
        })
    .attr("fill", function(d) {
        return "rgb(0, " + Math.round((d*.5)) + ", 0)";
        });
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
        })
    .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 ;
                    })
    .attr ("y", function(d) {
        return h - (d) + 25;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "1em")
    .attr("fill", "white")
    .attr("text-anchor", "middle");



// Line graph
var points = [
    { x: 0,  y: 0  },
    { x: 25, y: 0 },
    { x: 75, y: 101 },
    { x: 125, y: 173 },
    { x: 175, y: 135 },
    { x: 225,  y: 119  },
    { x: 275, y: 50 },
    { x: 325, y: 145 },
    { x: 375, y: 123 },
    { x: 425, y: 130 },
    { x: 475, y: 54 },
    { x: 525, y: 177 },
    { x: 575, y: 145 },
    { x: 600, y: 98 }
]

var lineFn = d3.svg.line()
  .x(function(d) { return d.x })
  .y(function(d) { return h-d.y })
  .interpolate("cardinal")

svg.append("path")
          .style("fill", "none")
          .style("stroke", "blue")
          .style("stroke-width", 2)
          .attr("d", lineFn(points))
    