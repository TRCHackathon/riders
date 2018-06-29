projects = ["Non Reproducible", "DuplicateIssue", "Unsupported", "Feature Request",      /* = 0Not Projects*/
            "SuperGUI", "LDS", "AtomGuiServer",                                         /* = 4 Projects below this*/
            "MopSupplementFile", "OrderRepeaterConfig",                                 /* = 7 Configs*/
            "infra-gui-base", "gti_client", "chart_tools",                               /* = 9 internal repos */
            "ticker_venues", "secmaster",                                                /* = 12 different teas */
            "Firewall"
            ]


nodes = []

projects.forEach(function(name, index) {
  nodes.push({id: index, label:name, value:1})
});

edges = [
  {from: 4,  to: 5},
  {from: 4,  to: 6},
  {from: 6,  to: 7},
  {from: 6,  to: 8},
  {from: 4,  to: 9},
  {from: 4,  to: 10},
  {from: 6,  to: 10},
  {from: 4,  to: 11},
  {from: 6,  to: 12},
  {from: 6,  to: 13},
  {from: 4,  to: 14}
]

function addValue(visNodes, network, name, value) {
    index = projects.indexOf(name);
    console.log("searching for", name, index)
//    visNodes.update([{id:index, value:value}]);
    network.on("afterDrawing", function(ctx) {
        var ps = network.getPositions([index]);
        ctx.fillText(value, ps[index].x-5, ps[index].y-5);
    });
}

function addValueFor(visNodex, network, currentCounts, toolTip) {
    indexes = [];
    values = [];
    titles = []

    for (var key in currentCounts) {
        indexes.push(projects.indexOf(key));
        values.push(currentCounts[key]);
        titles.push(toolTip[key])
    }
    console.log(indexes)
    console.log(values)

    network.on("afterDrawing", function(ctx) {
        var ps = network.getPositions(indexes);
        indexes.forEach(function(i, index) {
            ctx.font = "20px Arial";
            ctx.fillText(values[index], ps[i].x-5, ps[i].y-5);
        });
    });

    indexes.forEach(function(index, i) {
        visNodex.update([{id:index, title:titles[i]}]);
    });
}

function initTypes(visNodes) {
    visNodes.update([
        {id: 0, shape:"diamond", value: 2},
        {id: 1, shape:"diamond", value: 2},
        {id: 2, shape:"diamond", value: 2},
        {id: 3, shape:"diamond", value: 2},
        {id: 4, shape:"dot", value:10},
        {id: 5, shape:"dot", value: 7},
        {id: 6, shape:"dot", value: 8},
        {id: 7, shape:"square", value: 2},
        {id: 8, shape:"square", value: 2},
        {id: 9, shape:"dot", value: 2},
        {id: 10, shape:"dot", value: 2},
        {id: 11, shape:"dot", value: 2},
        {id: 12, shape:"triangle", value: 2},
        {id: 13, shape:"triangle", value: 2},
        {id: 14, shape:"triangle", value: 2}
    ])
}

