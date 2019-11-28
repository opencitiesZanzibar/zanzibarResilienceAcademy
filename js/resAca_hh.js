
var map = new L.map('map').setView([-6.165480, 39.220000], 16 );

map.setMaxBounds(map.getBounds());

var ZMImagelayer = L.tileLayer('https://tiles.openaerialmap.org/5ae38a540b093000130afe2d/0/5ae38a540b093000130afe2e/{z}/{x}/{y}.png',{ errorTileUrl:"not working"});
var osmlayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

//STYLES
var style_buildings = {
    "color":"#c2c2c2",
    "weight": 0,
    "opacity": 1,
    "fillColor": "#c2c2c2",
    "fillOpacity": 1
};
var style_shehia = {
    "color":"#4f4e4d",
    "weight": 0.5,
    "opacity": 1,
    "fillColor": "#4f4e4d",
    "fillOpacity": 0
};
var styleWater = {
    "color":"#4f4e4d",
    "weight": 0.5,
    "opacity": 0,
    "fillColor": "#8ADAFA",
    "fillOpacity": 0.5
};


//building type style
function buildingTColor(test) {
    return  test === 'residential' ? '#bd7811' :
            test === 'religious'  ? '#11ff4c' :
            test === 'school'  ? '#f0ff11' :
            test === 'commercialresidential'  ? '#0440d8' :
            test === 'commercial'  ? '#d321ff' :
            test === 'public'  ? '#ddd585' :
                '#0e0e0e';
}

function typeStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: buildingTColor(feature.properties.buildType),
        fillOpacity:0.4
    };
}

//building material style
function buildingMColor(test) {
    return  test === 'brick' ? '#bd7811' :
            test === 'cement_block'  ? '#5315d9' :
            test === 'concrete'  ? '#5315d9' :
            test === 'earth'  ? '#6775e0' :
            test === 'stone'  ? '#d321ff' :
                '#0e0e0e';
}

function materStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: buildingMColor(feature.properties.buildMater),
        fillOpacity:0.4
    };
}

//building roof style
function buildingRColor(test) {
    return  test === 'grass' ? '#79eb32' :
            test === 'cement'  ? '#bb8aef' :
            test === 'metal'  ? '#d321ff' :
            test === 'tiles'  ? '#6775e0' :
            test === 'wood'  ? '#eb870c' :
                '#0e0e0e';
}

function roofStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: buildingRColor(feature.properties.buildRoof),
        fillOpacity:0.4
    };
}

//building age style
function buildingAColor(test) {
    return  test === 'pre_2000' ? '#4d6dec' :
            test === 'post_2000'  ? '#2bec11' :
                '#0e0e0e';
}

function ageStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: buildingAColor(feature.properties.buildAge),
        fillOpacity:0.4
    };
}

//water style
function waterColor(test) {
    return  test === 'yes' ? '#36ed25' :
            test === 'no'  ? '#f60c20' :
                '#0e0e0e';
}

function waterStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: waterColor(feature.properties.water),
        fillOpacity:0.4
    };
}

//electricity style
function elecColor(test) {
    return  test === 'yes' ? '#36ed25' :
            test === 'no'  ? '#f60c20' :
                '#0e0e0e';
}

function elecStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: elecColor(feature.properties.elec),
        fillOpacity:0.4
    };
}
//sanitation style
function sanColor(test) {
    return  test === 'NoConnection' ? '#e91931' :
            test === 'Other'  ? '#18e923' :
            test === 'Private'  ? '#e917e9' :
            test === 'Public'  ? '#e7ff49' :
                '#0e0e0e';
}

function sanStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: sanColor(feature.properties.sanitation),
        fillOpacity:0.4
    };
}
//community flooding style
function commFColor(test) {
    return  test === 'Yes' ? '#36ed25' :
            test === 'No'  ? '#f60c20' :
                '#0e0e0e';
}


function commFStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: commFColor(feature.properties.commFlood),
        fillOpacity:0.4
    };
}
//house flooding style
function hseFColor(test) {
    return  test === 'Yes' ? '#36ed25' :
            test === 'No'  ? '#f60c20' :
                '#0e0e0e';
}


function hseFStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0,
        fillColor: hseFColor(feature.properties.hseFlood),
        fillOpacity:0.4
    };
}


//flooding type style
function floodingColor(b) {
    return b == 'no' ? '#ff0000' :
           b == 'yes' ? '#00cc00' :
                      '#9e9e9e';
}

function floodingStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0.5,
        fillColor: floodingColor(feature.properties.flooding),
        fillOpacity:0.4
    };
}

//waste type style
function wasteColor(b) {
    return b == 'designated_point' ? '#1452ed' :
           b == 'informal_dumpsite' ? '#f0e115' :
                      '#ed1435';
}

function wasteStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0.5,
        fillColor: wasteColor(feature.properties.waste),
        fillOpacity:0.4
    };
}

//amenities type style
function amenitiesColor(b) {
    return b == 'market' ? '#342af0' :
           b == 'open_spaces' ? '#f22be8' :
           b == 'open_spaces playgrounds' ? '#e6f02a' :
           b == 'playgrounds' ? '#f0942a' :
                      '#bdbdbd';
}

function amenitiesStyle(feature,map) {
    return { 
        opacity:0.5,
        weight:0.5,
        fillColor: amenitiesColor(feature.properties.amenities),
        fillOpacity:0.4
    };
}

//LEGENDS

//TYPE
var legend_phy = L.control({position: 'bottomleft'});

legend_phy.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["residential", "religious","public","commercial","school","commercialresidential","No data"],
        labels = [];
    div.innerHTML += '<b>Building Type</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + buildingTColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//MATERIAL
var legend_material = L.control({position: 'bottomleft'});

legend_material.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["brick", "cement_block","earth","stone","No data"],
        labels = [];
    div.innerHTML += '<b>Building Material</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + buildingMColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//ROOF
var legend_roof = L.control({position: 'bottomleft'});

legend_roof.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["tiles","wood","metal", "No data"],
        labels = [];
    div.innerHTML += '<b>Building Roof</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + buildingRColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//AGE
var legend_age = L.control({position: 'bottomleft'});

legend_age.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["pre_2000", "post_2000", "No data"],
        labels = [];
    div.innerHTML += '<b>Building Roof</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + buildingAColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//water
var legend_water = L.control({position: 'bottomleft'});

legend_water.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["yes", "no","No data"],
        labels = [];
    div.innerHTML += '<b>Water Availability</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + waterColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//electricity
var legend_elec = L.control({position: 'bottomleft'});

legend_elec.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["yes", "no","No data"],
        labels = [];
    div.innerHTML += '<b>Electricity Availability</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + elecColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//sanitation
var legend_san = L.control({position: 'bottomleft'});

legend_san.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["NoConnection", "Private","Public","No data"],
        labels = [];
    div.innerHTML += '<b>Sanitation Availability</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + sanColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//community flooding
var legend_commFlood = L.control({position: 'bottomleft'});

legend_commFlood.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["Yes", "No","No data"],
        labels = [];
    div.innerHTML += '<b>Community Flooding</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + commFColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};
//household flooding
var legend_hseFlood = L.control({position: 'bottomleft'});

legend_hseFlood.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["Yes", "No","No data"],
        labels = [];
    div.innerHTML += '<b>Household Flooding</b><br>' 
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + commFColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i] ?  '<br>' : '+');
    }
    return div;
};


//MAP INTERACTIONS
function zoomToShehia(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachShehia(feature, layer) {
    layer.bindPopup('Shehia:'+ feature.properties.Ward_Name);
    layer.on({
        click: zoomToShehia   
    });
}


//sidebar
var sidebar = L.control.sidebar({container: 'sidebar',position: 'right'}).addTo(map);


//DATA
var water = L.geoJson(waterAOI,{style:styleWater}).addTo(map);
var shehias = L.geoJson(shehiaAOI,{style:style_shehia,onEachFeature:onEachShehia}).addTo(map);

filtered=L.featureGroup();
filter=L.geoJson(allBuildings,{style:style_buildings});
filtered = L.featureGroup().addLayer(filter);
filtered.addTo(map);


var buildingsfilt;


//UNDERSCORE
var residential;
var business;
var religious;
var educational;
var salon;
var office;
var workshop;
var shop;
var cafe;


//QUESTION 1 BUILDINGS
//type
function buildings1(allBuildings){
    bType = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.buildType);
    });
//pie
    var pie = new d3pie("pie", {
        header: {
            title: {
                text: "Building Types"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Residential", value: bType.residential },
                { label: "Religious", value: bType.religious },
                { label: "Commercial", value: bType.commercial },
                { label: "School", value: bType.school },
                { label: "Mixed", value: bType.commercialresidential },
                { label: "Other", value: bType.null },
                { label: "Public", value: bType.public }

            ]
        }
    });

}
//material
function buildings2(allBuildings){
    bMaterial = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.buildMater);
    });
//pie
    var pie = new d3pie("pie", {
        header: {
            title: {
                text: "Building Material"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Brick", value: bMaterial.brick },
                { label: "Cement", value: bMaterial.cement_block },
                { label: "Concrete", value: bMaterial.concrete},
                { label: "Earth", value: bMaterial.earth },
                { label: "Other", value: bMaterial.null },
                { label: "Stone", value: bMaterial.stone }
            ]
        }
    });

}
//material
function buildings3(allBuildings){
    bRoof = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.buildRoof);
    });
//pie
    var pie = new d3pie("pie", {
        header: {
            title: {
                text: "Roofing Types"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Tiles", value: bRoof.tiles },
                { label: "Cement", value: bRoof.cement_block },
                { label: "Wood", value: bRoof.wood },
                { label: "Iron Sheets", value: bRoof.metal },
                { label: "Grass", value: bRoof.grass },
                { label: "No data", value: bRoof.null },
            ]
        }
    });

}
//age
function buildings4(allBuildings){
    bAge = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.buildAge);
    });
//pie
    var pie = new d3pie("pie", {
        header: {
            title: {
                text: "Building Age"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Pre 2000", value: bAge.pre_2000 },
                { label: "Post 2000", value: bAge.post_2000 }
            ]
        }
    });

}

//QUESTION 2 WATER ELECTRICITY AND SANITATION
//water
function buildings5(allBuildings){
    water = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.water);
    });
//pie
    var pie = new d3pie("pie1", {
        header: {
            title: {
                text: "Connection to water"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Yes", value: water.yes},
                { label: "No", value: water.no }
            ]
        }
    });

}
//electricity
function buildings6(allBuildings){
    elec = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.elec);
    });
//pie
    var pie = new d3pie("pie1", {
        header: {
            title: {
                text: "Connection to Electricity"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Yes", value: elec.yes},
                { label: "No", value: elec.no }
            ]
        }
    });

}
//sanitation and waste
function buildings7(allBuildings){
    san = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.sanitation);
    });
    informal = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.wmInformal);
    });
    console.log(informal[1]);
    designated = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.wmDesP);
    });
    burns= _.countBy(allBuildings.features, function(th){ 
        return (th.properties.wmBurn);
    });
    openDrain = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.wmThrow);
    });
//pie
    var pie = new d3pie("pie1", {
        header: {
            title: {
                text: "Connection to Sewerage line"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Private", value: san.Private},
                { label: "Other", value: san.other},
                { label: "Public", value: san.Public},
                { label: "No Connection", value: san.NoConnection }
            ]
        }
    });
//graphs
    var svg_6 = dimple.newSvg("#chartContainer6", 350, 200);
    var data_6 = [
        { waste: "Informal dumpsite ", count: informal[1] },
        { waste: "Designated", count: designated[1]},
        { waste: "Burn", count: burns[1]},
        { waste: "Open Drainage", count:openDrain[1] }
    ];
    var myChart6 = new dimple.chart(svg_6, data_6);
    myChart6.setBounds(50, 40, 300, 100)
    var x = myChart6.addCategoryAxis("x", "waste");
    myChart6.addMeasureAxis("y", "count");
    myChart6.addColorAxis("count",["red","blue","#008000"]);
    myChart6.addSeries(null, dimple.plot.bar);
    myChart6.draw();

}

//QUESTION 3 COMMUNITY FLOODING
//community flooding
function buildings8(allBuildings){
    commF = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.commFlood);
    });
    //drainage
    lackDrainage = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.cfDrainage);
    });
    terrain = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.cfTerrain);
    });
    blocked = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.cfBlocked);
    });
    //effects
    destruction = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.faDestruct);
    });
    displacement = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.faDisplace);
    });
    livelihoods = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.faDisrupt);
    });
    diseases = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.faSicknes);
    });
//pie
    var pie = new d3pie("pie2", {
        header: {
            title: {
                text: "Flooding in the Community"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Yes", value: commF.Yes},
                { label: "No", value: commF.No }
            ]
        }
    });
    //causes bar plot
    var svg_3 = dimple.newSvg("#chartContainer3", 350, 200);
    var data_3 = [
        { cause: "Lack Drainage ", count: lackDrainage[1] },
        { cause: "Terrain", count: terrain[1]},
        { cause: "Blocked Drainage", count:blocked[1] }
    ];
    var myChart3 = new dimple.chart(svg_3, data_3);
    myChart3.setBounds(50, 40, 300, 100)
    var x = myChart3.addCategoryAxis("x", "cause");
    myChart3.addMeasureAxis("y", "count");
    myChart3.addColorAxis("count",["red","blue","#008000"]);
    myChart3.addSeries(null, dimple.plot.bar);
    myChart3.draw();
    //effects bar plot
    var svg_4 = dimple.newSvg("#chartContainer4", 350, 200);
    var data_4 = [
        { effect: "Destruction ", count: destruction[1] },
        { effect: "Displacement", count: displacement[1]},
        { effect: "Disruption of livelihoods", count: livelihoods[1]},
        { effect: "Causes diseases", count:diseases[1] }
    ];
    var myChart4 = new dimple.chart(svg_4, data_4);
    myChart4.setBounds(50, 40, 300, 100)
    var x = myChart4.addCategoryAxis("x", "effect");
    myChart4.addMeasureAxis("y", "count");
    myChart4.addColorAxis("count",["red","blue","#008000"]);
    myChart4.addSeries(null, dimple.plot.bar);
    myChart4.draw();

}

//QUESTION 4 HOUSEHOLD FLOODING
//household flooding
function buildings9(allBuildings){
    hFlood = _.countBy(allBuildings.features, function(p){ 
        return (p.properties.hseFlood);
    });
    wOutside = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.hfWater);
    });
    leaks = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.hfLeak);
    });
    none = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.conNobody);
    });
    Ladmin = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.conAdmin);
    });
    neighbours = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.conNeigh);
    });
    family = _.countBy(allBuildings.features, function(th){ 
        return (th.properties.conFam);
    });
//pie
    var pie = new d3pie("pie3", {
        header: {
            title: {
                text: "Household Flooding"
            }
        },
        size: {
            canvasHeight: 300,
            canvasWidth: 350
        },
        data: {
            content: [
                { label: "Yes", value: hFlood.Yes},
                { label: "No", value: hFlood.No }
            ]
        }
    });
    //causes bar plot
    var svg_7 = dimple.newSvg("#chartContainer7", 350, 200);
    var data_7 = [
        { cause: "Water from outside ", count: wOutside[1] },
        { cause: "Leaking roof", count:leaks[1] }
    ];
    var myChart7 = new dimple.chart(svg_7, data_7);
    myChart7.setBounds(50, 40, 300, 100)
    var x = myChart7.addCategoryAxis("x", "cause");
    myChart7.addMeasureAxis("y", "count");
    myChart7.addColorAxis("count",["red","blue","#008000"]);
    myChart7.addSeries(null, dimple.plot.bar);
    myChart7.draw();


    var svg_5 = dimple.newSvg("#chartContainer5", 350, 200);
    var data_5 = [
        { contact: "No-one ", count: none[1] },
        { contact: "Sheha", count: Ladmin[1]},
        { contact: "Neighbours", count: neighbours[1]},
        { contact: "Family", count:family[1] }
    ];
    var myChart5 = new dimple.chart(svg_5, data_5);
    myChart5.setBounds(50, 40, 300, 100)
    var x = myChart5.addCategoryAxis("x", "contact");
    myChart5.addMeasureAxis("y", "count");
    myChart5.addColorAxis("count",["red","blue","#008000"]);
    myChart5.addSeries(null, dimple.plot.bar);
    myChart5.draw();

}

//collapsible
$('#firstCollapseMenu').collapsible({
    accordion: true,
    accordionUpSpeed: 400,
    accordionDownSpeed: 400,
    collapseSpeed: 400,
    contentOpen: null,
    arrowRclass: 'arrow-r',
    arrowDclass: 'arrow-d',
    animate: true
});


$('h4').on('click', function(event){
    var bId= $(this).text()
    console.log(bId);
    if (bId==="Building Description") {
        console.log("success");
        $('.form-check').on('click', function(event){ 
            var formid= event.target.id ;
            console.log(formid);
            if (formid==="qn1") {
                map.addControl(legend_phy);
                map.removeControl(legend_material);
                map.removeControl(legend_roof);
                map.removeControl(legend_age);
                map.removeControl(legend_elec);
                map.removeControl(legend_water);
                map.removeControl(legend_san);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                var counts = _.countBy(allBuildings.features, function(p){ 
                        return (p.properties.buildType);
                });
                console.log(counts);
                $('.collaps').html('<div class="card card-body"><div id="pie"></div><br><div id=""></div></div>');                
                buildings1(allBuildings);
                filtered.setStyle(typeStyle);
            } 
            else if ((formid==="qn2")){
                map.addControl(legend_material);
                map.removeControl(legend_phy);
                map.removeControl(legend_roof);
                map.removeControl(legend_age);
                map.removeControl(legend_elec);
                map.removeControl(legend_water);
                map.removeControl(legend_san);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                $('.collaps').html('<div class="card card-body"><div id="pie"></div><br> <div id=""></div></div>');                
                buildings2(allBuildings);
                filtered.setStyle(materStyle);   
            }
            else if ((formid==="qn3")){
                map.addControl(legend_roof);
                map.removeControl(legend_phy);
                map.removeControl(legend_age);
                map.removeControl(legend_material);
                map.removeControl(legend_elec);
                map.removeControl(legend_water);
                map.removeControl(legend_san);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                $('.collaps').html('<div class="card card-body"><div id="pie"></div><br><div id=""></div></div>');                
                buildings3(allBuildings);
                filtered.setStyle(roofStyle);   
            }
            else{
                map.addControl(legend_age);
                map.removeControl(legend_roof);
                map.removeControl(legend_phy);
                map.removeControl(legend_material);
                map.removeControl(legend_elec);
                map.removeControl(legend_water);
                map.removeControl(legend_san);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                $('.collaps').html('<div class="card card-body"><div id="pie"></div><br><div id=""></div></div>');                
                buildings4(allBuildings);
                filtered.setStyle(ageStyle)            
            };  
        })

    } 
    else if ((bId==="Water, Sanitation, Electricity")){
        console.log("success");
        $('.form-check').on('click', function(event){ 
            var formid= event.target.id ;
            console.log(formid);
            if (formid==="qn1") {
                map.addControl(legend_water);
                map.removeControl(legend_material);
                map.removeControl(legend_phy);
                map.removeControl(legend_age);
                map.removeControl(legend_roof);
                map.removeControl(legend_elec);
                map.removeControl(legend_age);
                map.removeControl(legend_san);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                $('.collap').html('<div class="card1 card-body"><div id="pie1"></div><br> <div id=""></div></div>');                
                buildings5(allBuildings);
                filtered.setStyle(waterStyle);
            } 
            else if ((formid==="qn2")){
                map.addControl(legend_elec);
                map.removeControl(legend_phy);
                map.removeControl(legend_material);
                map.removeControl(legend_water);
                map.removeControl(legend_san);
                map.removeControl(legend_roof);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                $('.collap').html('<div class="card1 card-body"><div id="pie1"></div><br> <div id=""></div></div>');                
                buildings6(allBuildings);
                filtered.setStyle(elecStyle);   
            }
            else{
                map.addControl(legend_san);
                map.removeControl(legend_phy);
                map.removeControl(legend_water);
                map.removeControl(legend_elec);
                map.removeControl(legend_roof);
                map.removeControl(legend_material);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                $('.collap').html('<div class="card1 card-body"><div id="pie1"></div><br>Disposal of Household Waste <div id="chartContainer6"></div></div>');                
                buildings7(allBuildings);
                filtered.setStyle(sanStyle);
                //filtered.setStyle(ageStyle)            
            };  
        })

    }
    else if ((bId==="Community Flooding")){
        console.log("success");
        $('.form-check').on('click', function(event){ 
            var formid= event.target.id ;
            console.log(formid);
            if (formid==="qn1") {
                map.addControl(legend_commFlood);
                map.removeControl(legend_hseFlood);
                map.removeControl(legend_material);
                map.removeControl(legend_phy);
                map.removeControl(legend_water);
                map.removeControl(legend_roof);
                map.removeControl(legend_elec);
                map.removeControl(legend_age);
                map.removeControl(legend_san);
                $('.colla').html('<div class="card2 card-body"><div id="pie2"></div><br>Causes of Community flooding <div id="chartContainer3"></div><br>Effects of flooding <div id="chartContainer4"></div></div>');                
                buildings8(allBuildings);
                filtered.setStyle(commFStyle);
            } 
            else if ((formid==="qn2")){

            }
            else{
          
            };  
        })

    }
    else{
        console.log("successssssssssssssss");
        $('.form-check').on('click', function(event){ 
            var formid= event.target.id ;
            console.log(formid);
            if (formid==="qn1") {
                map.addControl(legend_hseFlood);
                map.removeControl(legend_commFlood);
                map.removeControl(legend_roof);
                map.removeControl(legend_age);
                map.removeControl(legend_phy);
                map.removeControl(legend_material);
                map.removeControl(legend_elec);
                map.removeControl(legend_age);
                map.removeControl(legend_san);
                $('.coll').html('<div class="card3 card-body"><div id="pie3"></div><br>Causes of Household flooding <div id="chartContainer7"></div><br>First point of contact incase of flooding <div id="chartContainer5"></div></div>');                
                buildings9(allBuildings);
                filtered.setStyle(hseFStyle);
            } 
            else if ((formid==="qn2")){

            }
            else{
          
            };  
        })

    };

})

var basemaps = {
            
            "Drone Image":ZMImagelayer,
            "OpenStreetMap":osmlayer
        };
L.control.layers(null,basemaps,{position:'topleft'}).addTo(map);

