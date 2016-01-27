restaurants =
  [
    {"restaurant" : { "name" : "McDonald's", "food" : "burger" }},
    {"restaurant" : { "name" : "KFC",        "food" : "chicken" }},
    {"restaurant" : { "name" : "Pizza Hut",  "food" : "pizza" }}
  ];
 
for(var i = 0; i < restaurants.length; i++)
{
  if(restaurants[i].restaurant.food == 'pizza')
  {
    document.write(restaurants[i].restaurant.name)
  }
}
