require 'database_cleaner'
DatabaseCleaner.clean

Document.create!(
  type: 'device', name: 'Foo Device!', long: 52.0599, lat: 1.1556
)
Document.create!(
  type: 'device', name: 'Bar Device!', long: 52.0595, lat: 1.1556
)
