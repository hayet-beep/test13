var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '',
                interactive: false,
    title: '<br />\
    <img src="styles/legend/_0_0.png" /> <br />\
    <img src="styles/legend/_0_1.png" /> <br />\
    <img src="styles/legend/_0_2.png" /> <br />' });
var format_Gatehouse_1 = new ol.format.GeoJSON();
var features_Gatehouse_1 = format_Gatehouse_1.readFeatures(json_Gatehouse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gatehouse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gatehouse_1.addFeatures(features_Gatehouse_1);
var lyr_Gatehouse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gatehouse_1, 
                style: style_Gatehouse_1,
                popuplayertitle: 'Gatehouse',
                interactive: false,
                title: '<img src="styles/legend/Gatehouse_1.png" /> Gatehouse'
            });
var group_AccesOffices = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Acces Offices'});
var group_Gatehouse = new ol.layer.Group({
                                layers: [lyr__0,lyr_Gatehouse_1,],
                                fold: 'open',
                                title: 'Gatehouse'});
var group_LCSFacilities = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'LCS Facilities'});
var group_Parking = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Parking'});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '0- Fond de carte'});

lyr__0.setVisible(true);lyr_Gatehouse_1.setVisible(true);
var layersList = [group_Gatehouse];
lyr__0.set('fieldAliases', {'id': 'id', 'indi': 'indi', });
lyr_Gatehouse_1.set('fieldAliases', {'Indication': 'Indication', });
lyr__0.set('fieldImages', {'id': 'TextEdit', 'indi': 'TextEdit', });
lyr_Gatehouse_1.set('fieldImages', {'Indication': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'no label', 'indi': 'no label', });
lyr_Gatehouse_1.set('fieldLabels', {'Indication': 'no label', });
lyr_Gatehouse_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});