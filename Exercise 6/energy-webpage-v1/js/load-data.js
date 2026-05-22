d3.csv("./data/Ex6.csv", d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize,
    screenTech: d.screenTech,
    energyConsumption: +d.energyConsumption,
    star: +d.star
})).then(d => {
    createHistogram(d);
    drawScatterPlot(d);
    populateFilters(d);
    createTooltip(d);
    handleMouseEvents()
}).catch((e) => console.log)