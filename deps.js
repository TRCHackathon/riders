projects = ["Non Reproducible", "DuplicateIssue", "Unsupported", "Feature Request",      /* = 0Not Projects*/
            "SuperGUI", "LDS", "AtomGuiServer",                                         /* = 4 Projects below this*/
            "MopSupplementFile", "OrderRepeaterConfig",                                 /* = 7 Configs*/
            "infra-gui-base", "gti_client", "chart_tools",                               /* = 9 internal repos */
            "ticker_venues", "secmaster",                                                /* = 12 different teas */
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
  {from: 6,  to: 13}
]

function addValue(visNodes, name, value) {
    index = projects.indexOf(name);
    visNodes.update([{id:index, value:value}]);
}

function initTypes(visNodes) {
    visNodes.update([
        {id: 0, shape:"diamond"},
        {id: 1, shape:"diamond"},
        {id: 2, shape:"diamond"},
        {id: 3, shape:"diamond"},
        {id: 4, shape:"dot", value:10},
        {id: 5, shape:"dot", value: 5},
        {id: 6, shape:"dot", value: 7},
        {id: 7, shape:"square"},
        {id: 8, shape:"square"},
        {id: 9, shape:"dot"},
        {id: 10, shape:"dot"},
        {id: 11, shape:"dot"},
        {id: 12, shape:"triangle"},
        {id: 13, shape:"triangle"}
    ])
}

