// Exercise 4.3

const svg = d3.select("#e2 .responsive-svg-container").append("svg").attr("viewBox", "0 0 1200 1600").style("border", "1px solid black");
svg.append("rect").attr("x", 10).attr("y", 10).attr("width", 414).attr("height", 16).attr("fill", "blue");




// Exercise 4.4
d3.csv("./data/newDataTV.csv", d => ({ Brand_Reg: d.Brand_Reg, "Count(Model_No)": +d["Count(Model_No)"] }))
    .then(d => { console.log(d) });