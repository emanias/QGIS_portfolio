ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2100").setExtent([442876.409327, 3896814.607453, 513094.547797, 3943498.697952]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GEOLOGIKOISXIMATISMOICHANIAEM_1 = new ol.format.GeoJSON();
var features_GEOLOGIKOISXIMATISMOICHANIAEM_1 = format_GEOLOGIKOISXIMATISMOICHANIAEM_1.readFeatures(json_GEOLOGIKOISXIMATISMOICHANIAEM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2100'});
var jsonSource_GEOLOGIKOISXIMATISMOICHANIAEM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIKOISXIMATISMOICHANIAEM_1.addFeatures(features_GEOLOGIKOISXIMATISMOICHANIAEM_1);
var lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIKOISXIMATISMOICHANIAEM_1, 
                style: style_GEOLOGIKOISXIMATISMOICHANIAEM_1,
                popuplayertitle: "GEOLOGIKOI SXIMATISMOI CHANIA EM",
                interactive: true,
    title: 'GEOLOGIKOI SXIMATISMOI CHANIA EM<br />\
    <img src="styles/legend/GEOLOGIKOISXIMATISMOICHANIAEM_1_0.png" /> tj<br />\
    <img src="styles/legend/GEOLOGIKOISXIMATISMOICHANIAEM_1_1.png" /> Me<br />\
    <img src="styles/legend/GEOLOGIKOISXIMATISMOICHANIAEM_1_2.png" /> q<br />\
    <img src="styles/legend/GEOLOGIKOISXIMATISMOICHANIAEM_1_3.png" /> al<br />\
    <img src="styles/legend/GEOLOGIKOISXIMATISMOICHANIAEM_1_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1];
lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1.set('fieldAliases', {'id': 'id', 'GEO': 'GEO', });
lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1.set('fieldImages', {'id': 'TextEdit', 'GEO': 'TextEdit', });
lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1.set('fieldLabels', {'id': 'no label', 'GEO': 'no label', });
lyr_GEOLOGIKOISXIMATISMOICHANIAEM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});