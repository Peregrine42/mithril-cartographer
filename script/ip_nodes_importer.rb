require 'mongoid'
Mongoid.load!('config/mongoid.yml')

require './app/models/document'
require 'csv'
require 'database_cleaner'

DatabaseCleaner.clean

CSV.foreach("/Users/duncan/Desktop/notes/Nodes_IP.csv", headers: true) do |row|
  Document.create!(
    lat: row["Latitude"], long: row["Longitude"], name: row["Node Name"]
  )
end
