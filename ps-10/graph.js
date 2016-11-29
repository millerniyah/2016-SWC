// A simple scatter plot
var width = 500;
var height = 500;

var margin = {
	top: 25,
  left: 25,
  right: 25,
  bottom: 25
};

var svg = d3.select("body")
	.append("svg")
  .attr("width", width)
  .attr("height", height);

  //Declare data
  var data = [
  	{x: 3, y :2},
    {x: 4, y: 8},
    {x: 5, y: 8},
  	{x: 8, y: 4},
  	{x: 9, y: 6},
  	{x: 11, y:8}
  ];

// Create scales
var xScale = d3.scaleLinear()
	.domain([0,12])
  .range([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
	.domain([0,12])
  .range([height - margin.bottom, margin.top]);

// Draw axes
var xAxis = svg.append("g")
	.attr("transform","translate(0," + (height-margin.bottom) + ")")
	.call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
	.attr("transform","translate(" + margin.left + ",0)")
	.call(d3.axisLeft().scale(yScale));

//Draw circles for scatter plot
var circles = svg.selectAll("circle")
	.data(data)
  .enter()
  .append("circle")
  	.attr("cx", function(d) {return xScale(d.x);})
    .attr("cy", function(d) {return yScale(d.y);})
    .attr("r", 3);
