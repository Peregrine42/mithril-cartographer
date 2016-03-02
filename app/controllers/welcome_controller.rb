class WelcomeController < ApplicationController
  def index
    points = Document.where(type: "device").map(&:attributes)
    lines = Document.where(type: "link").map(&:attributes)

    @layers = [
      { 
        name: 'terrain', 
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      },
      {
        name: 'links',
        lines: lines
      },
      {
        name: 'devices',
        points: points
      }
    ]
  end
end
