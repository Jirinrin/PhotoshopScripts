var doc = app.activeDocument;
for (var i = 0; i < doc.layers.length; i++) {
  doc.activeLayer = doc.layers[i];
  app.doAction("Delete background", "Default Actions");
  doc.activeLayer.visible = false;
}