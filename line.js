var points = [
    { x: 100,  y: 10  },
    { x: 200, y: 200 },
    { x: 300, y: 400 },
    { x: 400, y: 100 },
    { x: 500, y: 150 },
    { x: 600,  y: 10  },
    { x: 700, y: 200 },
    { x: 800, y: 400 },
    { x: 900, y: 100 },
    { x: 1000, y: 150 },
    { x: 1100, y: 100 },
    { x: 1200, y: 150 }
]

var lineFn = d3.svg.line()
  .x(function(d) { return d.x/2 })
  .y(function(d) { return d.y })
  //.interpolate("cardinal")


//Create SVG element
var svg2 = d3.select("body")
            .append("svg")


svg2.append("path")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .attr("d", lineFn(points))