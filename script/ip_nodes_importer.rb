require 'mongoid'
Mongoid.load!('config/mongoid.yml')

require './app/models/document'
require 'csv'
require 'database_cleaner'

DatabaseCleaner.clean

CSV.foreach("/Users/duncan/Desktop/notes/Nodes_IP.csv", headers: true) do |row|
  Document.create!(
    lat: row["Latitude"].strip,
    long: row["Longitude"].strip,
    name: row["Node Name"].strip,
    type: "device",
    code: row["1141 Code"].strip
  )
end

CSV.foreach("/Users/duncan/Desktop/notes/Links_IP.csv", headers: true) do |row|
  from_node = Document.where(
    code: row["From Node"].strip
  ).first

  to_node = Document.where(code: row["To Node"].strip).first

  raise "no from_node" unless from_node
  raise "no to_node" unless to_node


  Document.create!(
    from_node: row["From Node"].strip,
    to_node: row["To Node"].strip,
    name: row["Supporting Service"].strip,
    type: "link",
    coords: [[from_node.lat, from_node.long], [to_node.lat, to_node.long]]
  )
end
