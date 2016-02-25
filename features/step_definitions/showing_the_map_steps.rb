Given(/^there are some devices in the database, with geographical data$/) do
  Document.create!(
    type: 'device', name: 'Foo Device!', long: 1.1556, lat: 52.0594
  )
end

When(/^I visit the homepage$/) do
  visit '/'
end

Then(/^I see the map$/) do
  expect(page.body).to have_content 'cartographer'
end
