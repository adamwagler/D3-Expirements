var w=960,h=500,
svg=d3.select("#chart")
.append("svg")
.attr("width",w)
.attr("height",h);

var text=svg
.append("text")
.text("hello world")
.attr("y",50)
.attr("x",50);

/* 
// averages calculations
var avgs=d3.nest()
    .key(function(d) {return d.continent;})
    .sortkey(d3.ascending)
    .rolup(function(d) {return {
        GERD:d3.mean(function(g) {return +g.GERD;}), 
        growth:d3.mean(d,function(g) {return +g.growth})
    }})
    .entries(csv);
    
    */

