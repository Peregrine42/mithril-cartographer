class WelcomeController < ApplicationController
  def index
    points = Document.all.map(&:attributes)
    puts points.inspect

    @layers = [
      { 
        name: 'terrain', 
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      },
      {
        name: 'devices',
        points: points
      }
    ]
  end
end
