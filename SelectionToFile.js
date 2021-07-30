app.displayDialogs = DialogModes.NO;

var pngSaveOptions = new PNGSaveOptions();
pngSaveOptions.compression = 9;

var hasSelection;
var docRef;
try {
  hasSelection = !!app.activeDocument.selection.bounds;
} catch (err) {
  hasSelection = false;
}

if (hasSelection) {
  app.activeDocument.selection.copy(true);
  var w = app.activeDocument.selection.bounds[2];
  var h = app.activeDocument.selection.bounds[3];
  docRef = app.documents.add(w, h);
  docRef.paste();
} else {
  docRef = app.activeDocument;
}
var file = File.saveDialog("Export as PNG to...");
if (file && ((file.exists && confirm("Overwrite " + file + "?")) || !file.exists)) {
  docRef.saveAs(file, pngSaveOptions, !hasSelection, Extension.LOWERCASE);
  if (hasSelection) {
    docRef.close(SaveOptions.DONOTSAVECHANGES);
  }
}