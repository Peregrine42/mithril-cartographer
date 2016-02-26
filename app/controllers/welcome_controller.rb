class WelcomeController < ApplicationController
  def index
    @layers = [
      { 
        name: 'terrain', 
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      },
      {
        name: 'devices',
        points: [
          { 
            name: '72xx108',
            long: 52.0594, 
            lat: 1.1556
          },
          { 
            name: '72xx109',
            long: 52.0600,
            lat: 1.1556
          }
        ]
      }
    ]
  end
end
