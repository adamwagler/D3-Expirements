// Width and height
var w = 500;
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