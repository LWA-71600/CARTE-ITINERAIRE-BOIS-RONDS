ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3947").setExtent([1764167.272832, 6125327.420037, 1813929.292885, 6161416.092238]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIMITESCOMMUNALES_1 = new ol.format.GeoJSON();
var features_LIMITESCOMMUNALES_1 = format_LIMITESCOMMUNALES_1.readFeatures(json_LIMITESCOMMUNALES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3947'});
var jsonSource_LIMITESCOMMUNALES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCOMMUNALES_1.addFeatures(features_LIMITESCOMMUNALES_1);
var lyr_LIMITESCOMMUNALES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCOMMUNALES_1, 
                style: style_LIMITESCOMMUNALES_1,
                popuplayertitle: "LIMITES COMMUNALES",
                interactive: false,
                title: '<img src="styles/legend/LIMITESCOMMUNALES_1.png" /> LIMITES COMMUNALES'
            });
var format_RNRDA_2 = new ol.format.GeoJSON();
var features_RNRDA_2 = format_RNRDA_2.readFeatures(json_RNRDA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3947'});
var jsonSource_RNRDA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RNRDA_2.addFeatures(features_RNRDA_2);
var lyr_RNRDA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RNRDA_2, 
                style: style_RNRDA_2,
                popuplayertitle: "RN RD A",
                interactive: false,
    title: 'RN RD A<br />\
    <img src="styles/legend/RNRDA_2_0.png" /> Autoroute<br />\
    <img src="styles/legend/RNRDA_2_1.png" /> Departementale<br />\
    <img src="styles/legend/RNRDA_2_2.png" /> Nationale<br />'
        });
var format_ROUTEDESBOISSOURCEDEPARTEMETN71_3 = new ol.format.GeoJSON();
var features_ROUTEDESBOISSOURCEDEPARTEMETN71_3 = format_ROUTEDESBOISSOURCEDEPARTEMETN71_3.readFeatures(json_ROUTEDESBOISSOURCEDEPARTEMETN71_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3947'});
var jsonSource_ROUTEDESBOISSOURCEDEPARTEMETN71_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROUTEDESBOISSOURCEDEPARTEMETN71_3.addFeatures(features_ROUTEDESBOISSOURCEDEPARTEMETN71_3);
var lyr_ROUTEDESBOISSOURCEDEPARTEMETN71_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROUTEDESBOISSOURCEDEPARTEMETN71_3, 
                style: style_ROUTEDESBOISSOURCEDEPARTEMETN71_3,
                popuplayertitle: "ROUTE DES BOIS SOURCE DEPARTEMETN71.",
                interactive: false,
                title: '<img src="styles/legend/ROUTEDESBOISSOURCEDEPARTEMETN71_3.png" /> ROUTE DES BOIS SOURCE DEPARTEMETN71.'
            });
var format_ITINERAIREBOISRONDS_4 = new ol.format.GeoJSON();
var features_ITINERAIREBOISRONDS_4 = format_ITINERAIREBOISRONDS_4.readFeatures(json_ITINERAIREBOISRONDS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3947'});
var jsonSource_ITINERAIREBOISRONDS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITINERAIREBOISRONDS_4.addFeatures(features_ITINERAIREBOISRONDS_4);
var lyr_ITINERAIREBOISRONDS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ITINERAIREBOISRONDS_4, 
                style: style_ITINERAIREBOISRONDS_4,
                popuplayertitle: "ITINERAIRE BOIS RONDS",
                interactive: false,
                title: '<img src="styles/legend/ITINERAIREBOISRONDS_4.png" /> ITINERAIRE BOIS RONDS'
            });
var format_INFORMATIONSCOMMUNALES_5 = new ol.format.GeoJSON();
var features_INFORMATIONSCOMMUNALES_5 = format_INFORMATIONSCOMMUNALES_5.readFeatures(json_INFORMATIONSCOMMUNALES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3947'});
var jsonSource_INFORMATIONSCOMMUNALES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMATIONSCOMMUNALES_5.addFeatures(features_INFORMATIONSCOMMUNALES_5);
var lyr_INFORMATIONSCOMMUNALES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFORMATIONSCOMMUNALES_5, 
                style: style_INFORMATIONSCOMMUNALES_5,
                popuplayertitle: "INFORMATIONS COMMUNALES",
                interactive: true,
                title: '<img src="styles/legend/INFORMATIONSCOMMUNALES_5.png" /> INFORMATIONS COMMUNALES'
            });
var format_PANNEAUXBOISRONDS_6 = new ol.format.GeoJSON();
var features_PANNEAUXBOISRONDS_6 = format_PANNEAUXBOISRONDS_6.readFeatures(json_PANNEAUXBOISRONDS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3947'});
var jsonSource_PANNEAUXBOISRONDS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANNEAUXBOISRONDS_6.addFeatures(features_PANNEAUXBOISRONDS_6);
var lyr_PANNEAUXBOISRONDS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANNEAUXBOISRONDS_6, 
                style: style_PANNEAUXBOISRONDS_6,
                popuplayertitle: "PANNEAUX BOIS RONDS",
                interactive: false,
                title: '<img src="styles/legend/PANNEAUXBOISRONDS_6.png" /> PANNEAUX BOIS RONDS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LIMITESCOMMUNALES_1.setVisible(true);lyr_RNRDA_2.setVisible(true);lyr_ROUTEDESBOISSOURCEDEPARTEMETN71_3.setVisible(true);lyr_ITINERAIREBOISRONDS_4.setVisible(true);lyr_INFORMATIONSCOMMUNALES_5.setVisible(true);lyr_PANNEAUXBOISRONDS_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LIMITESCOMMUNALES_1,lyr_RNRDA_2,lyr_ROUTEDESBOISSOURCEDEPARTEMETN71_3,lyr_ITINERAIREBOISRONDS_4,lyr_INFORMATIONSCOMMUNALES_5,lyr_PANNEAUXBOISRONDS_6];
lyr_LIMITESCOMMUNALES_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_com': 'nom_com', 'nom_com_m': 'nom_com_m', 'insee_com': 'insee_com', 'statut': 'statut', 'insee_can': 'insee_can', 'insee_arr': 'insee_arr', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', 'code_epci': 'code_epci', 'population': 'population', 'type': 'type', });
lyr_RNRDA_2.set('fieldAliases', {'fid': 'fid', 'ID_RTE500': 'ID_RTE500', 'VOCATION': 'VOCATION', 'NB_CHAUSSE': 'NB_CHAUSSE', 'NB_VOIES': 'NB_VOIES', 'ETAT': 'ETAT', 'ACCES': 'ACCES', 'RES_VERT': 'RES_VERT', 'SENS': 'SENS', 'NUM_ROUTE': 'NUM_ROUTE', 'RES_EUROPE': 'RES_EUROPE', 'LONGUEUR': 'LONGUEUR', 'CLASS_ADM': 'CLASS_ADM', });
lyr_ROUTEDESBOISSOURCEDEPARTEMETN71_3.set('fieldAliases', {'fid': 'fid', 'AXE': 'AXE', 'NOM_CLASSI': 'NOM_CLASSI', 'NUM_ARRETE': 'NUM_ARRETE', });
lyr_ITINERAIREBOISRONDS_4.set('fieldAliases', {'fid': 'fid', 'COMMUNE': 'COMMUNE', });
lyr_INFORMATIONSCOMMUNALES_5.set('fieldAliases', {'fid': 'fid', 'commune': 'commune', 'mail mairie': 'mail mairie', 'téléphone mairie': 'téléphone mairie', 'Insee': 'Insee', 'lien': 'lien', 'SITE COMMUNE': 'SITE COMMUNE', });
lyr_PANNEAUXBOISRONDS_6.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', });
lyr_LIMITESCOMMUNALES_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom_com': 'TextEdit', 'nom_com_m': 'TextEdit', 'insee_com': 'TextEdit', 'statut': 'TextEdit', 'insee_can': 'TextEdit', 'insee_arr': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'code_epci': 'TextEdit', 'population': 'TextEdit', 'type': 'TextEdit', });
lyr_RNRDA_2.set('fieldImages', {'fid': 'TextEdit', 'ID_RTE500': 'TextEdit', 'VOCATION': 'TextEdit', 'NB_CHAUSSE': 'TextEdit', 'NB_VOIES': 'TextEdit', 'ETAT': 'TextEdit', 'ACCES': 'TextEdit', 'RES_VERT': 'TextEdit', 'SENS': 'TextEdit', 'NUM_ROUTE': 'TextEdit', 'RES_EUROPE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'CLASS_ADM': 'TextEdit', });
lyr_ROUTEDESBOISSOURCEDEPARTEMETN71_3.set('fieldImages', {'fid': 'TextEdit', 'AXE': 'TextEdit', 'NOM_CLASSI': 'TextEdit', 'NUM_ARRETE': 'TextEdit', });
lyr_ITINERAIREBOISRONDS_4.set('fieldImages', {'fid': 'TextEdit', 'COMMUNE': 'TextEdit', });
lyr_INFORMATIONSCOMMUNALES_5.set('fieldImages', {'fid': 'TextEdit', 'commune': 'TextEdit', 'mail mairie': 'TextEdit', 'téléphone mairie': 'TextEdit', 'Insee': 'TextEdit', 'lien': 'TextEdit', 'SITE COMMUNE': 'TextEdit', });
lyr_PANNEAUXBOISRONDS_6.set('fieldImages', {'fid': '', 'NOM': '', });
lyr_LIMITESCOMMUNALES_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nom_com': 'no label', 'nom_com_m': 'no label', 'insee_com': 'no label', 'statut': 'no label', 'insee_can': 'no label', 'insee_arr': 'no label', 'insee_dep': 'no label', 'insee_reg': 'no label', 'code_epci': 'no label', 'population': 'no label', 'type': 'no label', });
lyr_RNRDA_2.set('fieldLabels', {'fid': 'no label', 'ID_RTE500': 'no label', 'VOCATION': 'no label', 'NB_CHAUSSE': 'no label', 'NB_VOIES': 'no label', 'ETAT': 'no label', 'ACCES': 'no label', 'RES_VERT': 'no label', 'SENS': 'no label', 'NUM_ROUTE': 'no label', 'RES_EUROPE': 'no label', 'LONGUEUR': 'no label', 'CLASS_ADM': 'no label', });
lyr_ROUTEDESBOISSOURCEDEPARTEMETN71_3.set('fieldLabels', {'fid': 'no label', 'AXE': 'no label', 'NOM_CLASSI': 'no label', 'NUM_ARRETE': 'no label', });
lyr_ITINERAIREBOISRONDS_4.set('fieldLabels', {'fid': 'no label', 'COMMUNE': 'no label', });
lyr_INFORMATIONSCOMMUNALES_5.set('fieldLabels', {'fid': 'no label', 'commune': 'header label - visible with data', 'mail mairie': 'header label - visible with data', 'téléphone mairie': 'header label - visible with data', 'Insee': 'header label - visible with data', 'lien': 'header label - visible with data', 'SITE COMMUNE': 'header label - visible with data', });
lyr_PANNEAUXBOISRONDS_6.set('fieldLabels', {'fid': 'no label', 'NOM': 'no label', });
lyr_PANNEAUXBOISRONDS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});