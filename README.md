clone me, bundle, rake db:migrate, rails s

in localhost:3000 you'll see a link for "populate more people with Ajax"

click it and wait

page should reload the list with the new entries.

important files: 

PeopleController#populate
PeopleController#refresh

views/people/index.html.erb
views/people/_people_table.html.erb

config/routes.rb

app/assets/javascripts/people.js
