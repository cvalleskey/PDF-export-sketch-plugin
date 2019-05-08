
var defaultsKey = "com.davidwilliames.pdf-export"

var defaults = {
  exportToImages: true,
  excludeWithPrefix: true,
  exclusionPrefix: '-',
  imageExportScale: 2,
  includeSymbolArtboards: false,
  exportFormat: 'jpg',
  exportQuality: 80
}

var exportOptions = {
  allPages: "all-pages",
  currentPage: "current-page",
  selection: "selection"
}

function fetchDefaults() {
  var newDefaults = NSUserDefaults.standardUserDefaults().dictionaryForKey(defaultsKey)
  if(newDefaults != null) {
    defaults = newDefaults
  }
}

function saveDefaults() {
  NSUserDefaults.standardUserDefaults().setObject_forKey(defaults, defaultsKey)
  NSUserDefaults.standardUserDefaults().synchronize()
}
