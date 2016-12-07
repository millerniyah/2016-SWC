// A simple bar chart
var width = 500;
var height =500;

var margin = {top: 25,
		  left:25,
		  right: 25,
		  bottom:25};

var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);

// Generate data

var data =
		[{x:"White", y:450},
		{x:"Hispanic", y:831},
		{x:"African American", y:2306},];

// Create scales
var xScale = d3.scaleBand()
	.domain(["White","Hispanic","African American",])
  	.rangeRound([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
	.domain([250,2500])
  	.range([height-margin.bottom, margin.top]);

// Draw axes
var xAxis = svg.append("g")
	.attr("transform","translate(0," + (height-margin.bottom) + ")")
	.call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
	.attr("transform","translate(" + margin.left + ",0)")
	.call(d3.axisLeft().scale(yScale).ticks(5));

// Draw bars for bar chart
var barWidth = 40;
var bars = svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
      	.attr("x", function(d) {
		  return xScale(d.x) + xScale.bandwidth()/2 - barWidth/2;
		})
		.attr("y", function(d) { return yScale(d.y); })
		.attr("width", barWidth)
		.attr("height", function(d) {
		  return height - margin.bottom - yScale(d.y);
		})
    .attr("fill","orange");

    //http://www.vanityfair.com/news/2016/07/data-police-racial-bias
    //http://mappingpoliceviolence.org/
