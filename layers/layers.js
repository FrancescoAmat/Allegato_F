var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Confini_Comune_Milanodissolto_1 = new ol.format.GeoJSON();
var features_Confini_Comune_Milanodissolto_1 = format_Confini_Comune_Milanodissolto_1.readFeatures(json_Confini_Comune_Milanodissolto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confini_Comune_Milanodissolto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confini_Comune_Milanodissolto_1.addFeatures(features_Confini_Comune_Milanodissolto_1);
var lyr_Confini_Comune_Milanodissolto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confini_Comune_Milanodissolto_1, 
                style: style_Confini_Comune_Milanodissolto_1,
                popuplayertitle: 'Confini_Comune_Milano — dissolto',
                interactive: false,
                title: '<img src="styles/legend/Confini_Comune_Milanodissolto_1.png" /> Confini_Comune_Milano — dissolto'
            });
var format_Nonclassificate_2 = new ol.format.GeoJSON();
var features_Nonclassificate_2 = format_Nonclassificate_2.readFeatures(json_Nonclassificate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nonclassificate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nonclassificate_2.addFeatures(features_Nonclassificate_2);
var lyr_Nonclassificate_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nonclassificate_2, 
                style: style_Nonclassificate_2,
                popuplayertitle: 'Non classificate',
                interactive: true,
                title: '<img src="styles/legend/Nonclassificate_2.png" /> Non classificate'
            });
var format_Bassa1371ald_3 = new ol.format.GeoJSON();
var features_Bassa1371ald_3 = format_Bassa1371ald_3.readFeatures(json_Bassa1371ald_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bassa1371ald_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bassa1371ald_3.addFeatures(features_Bassa1371ald_3);
var lyr_Bassa1371ald_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bassa1371ald_3, 
                style: style_Bassa1371ald_3,
                popuplayertitle: 'Bassa 1-3/7 - 1 al dì',
                interactive: true,
                title: '<img src="styles/legend/Bassa1371ald_3.png" /> Bassa 1-3/7 - 1 al dì'
            });
var format_Media4571ald_4 = new ol.format.GeoJSON();
var features_Media4571ald_4 = format_Media4571ald_4.readFeatures(json_Media4571ald_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Media4571ald_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Media4571ald_4.addFeatures(features_Media4571ald_4);
var lyr_Media4571ald_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Media4571ald_4, 
                style: style_Media4571ald_4,
                popuplayertitle: 'Media 4-5/7 - 1 al dì',
                interactive: true,
                title: '<img src="styles/legend/Media4571ald_4.png" /> Media 4-5/7 - 1 al dì'
            });
var format_Alta671ald_5 = new ol.format.GeoJSON();
var features_Alta671ald_5 = format_Alta671ald_5.readFeatures(json_Alta671ald_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alta671ald_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alta671ald_5.addFeatures(features_Alta671ald_5);
var lyr_Alta671ald_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alta671ald_5, 
                style: style_Alta671ald_5,
                popuplayertitle: 'Alta 6/7 - 1 al dì',
                interactive: true,
                title: '<img src="styles/legend/Alta671ald_5.png" /> Alta 6/7 - 1 al dì'
            });
var format_Sensibile7723ald_6 = new ol.format.GeoJSON();
var features_Sensibile7723ald_6 = format_Sensibile7723ald_6.readFeatures(json_Sensibile7723ald_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sensibile7723ald_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sensibile7723ald_6.addFeatures(features_Sensibile7723ald_6);
var lyr_Sensibile7723ald_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sensibile7723ald_6, 
                style: style_Sensibile7723ald_6,
                popuplayertitle: 'Sensibile 7/7 - 2/3 al dì',
                interactive: true,
                title: '<img src="styles/legend/Sensibile7723ald_6.png" /> Sensibile 7/7 - 2/3 al dì'
            });
var group_AllegatoFS1sett_26 = new ol.layer.Group({
                                layers: [lyr_Nonclassificate_2,lyr_Bassa1371ald_3,lyr_Media4571ald_4,lyr_Alta671ald_5,lyr_Sensibile7723ald_6,],
                                fold: 'open',
                                title: 'Allegato F S1 sett_26'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_Nonclassificate_2.setVisible(false);lyr_Bassa1371ald_3.setVisible(false);lyr_Media4571ald_4.setVisible(false);lyr_Alta671ald_5.setVisible(false);lyr_Sensibile7723ald_6.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_AllegatoFS1sett_26];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_Nonclassificate_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'Aggiorname': 'Aggiorname', 'N_giorni_a': 'N_giorni_a', 'N_turni_gi': 'N_turni_gi', });
lyr_Bassa1371ald_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TIPOLOGIA': 'TIPOLOGIA', 'INDIRIZZO': 'INDIRIZZO', 'Aggiorname': 'Aggiorname', 'N_giorni_a': 'N_giorni_a', 'N_turni_gi': 'N_turni_gi', });
lyr_Media4571ald_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TIPOLOGIA': 'TIPOLOGIA', 'INDIRIZZO': 'INDIRIZZO', 'Aggiorname': 'Aggiorname', 'N_giorni_a': 'N_giorni_a', 'N_turni_gi': 'N_turni_gi', });
lyr_Alta671ald_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TIPOLOGIA': 'TIPOLOGIA', 'INDIRIZZO': 'INDIRIZZO', 'Aggiorname': 'Aggiorname', 'N_giorni_a': 'N_giorni_a', 'N_turni_gi': 'N_turni_gi', });
lyr_Sensibile7723ald_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TIPOLOGIA': 'TIPOLOGIA', 'INDIRIZZO': 'INDIRIZZO', 'Aggiorname': 'Aggiorname', 'N_giorni_a': 'N_giorni_a', 'N_turni_gi': 'N_turni_gi', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_Nonclassificate_2.set('fieldImages', {'CD_VIARIO': 'TextEdit', 'TP_VIA': 'TextEdit', 'DSC_VIA': 'TextEdit', 'Aggiorname': 'TextEdit', 'N_giorni_a': 'TextEdit', 'N_turni_gi': 'TextEdit', });
lyr_Bassa1371ald_3.set('fieldImages', {'CD_VIARIO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'Aggiorname': 'TextEdit', 'N_giorni_a': 'TextEdit', 'N_turni_gi': 'TextEdit', });
lyr_Media4571ald_4.set('fieldImages', {'CD_VIARIO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'Aggiorname': 'TextEdit', 'N_giorni_a': 'TextEdit', 'N_turni_gi': 'TextEdit', });
lyr_Alta671ald_5.set('fieldImages', {'CD_VIARIO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'Aggiorname': 'TextEdit', 'N_giorni_a': 'TextEdit', 'N_turni_gi': 'TextEdit', });
lyr_Sensibile7723ald_6.set('fieldImages', {'CD_VIARIO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'Aggiorname': 'TextEdit', 'N_giorni_a': 'TextEdit', 'N_turni_gi': 'TextEdit', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETRO': 'no label', });
lyr_Nonclassificate_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'Aggiorname': 'inline label - always visible', 'N_giorni_a': 'inline label - always visible', 'N_turni_gi': 'inline label - always visible', });
lyr_Bassa1371ald_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TIPOLOGIA': 'inline label - always visible', 'INDIRIZZO': 'inline label - always visible', 'Aggiorname': 'inline label - always visible', 'N_giorni_a': 'inline label - always visible', 'N_turni_gi': 'inline label - always visible', });
lyr_Media4571ald_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TIPOLOGIA': 'inline label - always visible', 'INDIRIZZO': 'inline label - always visible', 'Aggiorname': 'inline label - always visible', 'N_giorni_a': 'inline label - always visible', 'N_turni_gi': 'inline label - always visible', });
lyr_Alta671ald_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TIPOLOGIA': 'inline label - always visible', 'INDIRIZZO': 'inline label - always visible', 'Aggiorname': 'inline label - always visible', 'N_giorni_a': 'inline label - always visible', 'N_turni_gi': 'inline label - always visible', });
lyr_Sensibile7723ald_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TIPOLOGIA': 'inline label - always visible', 'INDIRIZZO': 'inline label - always visible', 'Aggiorname': 'inline label - always visible', 'N_giorni_a': 'inline label - always visible', 'N_turni_gi': 'inline label - always visible', });
lyr_Sensibile7723ald_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});