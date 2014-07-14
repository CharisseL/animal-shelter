/*global prompt:true*/

var prompt = require('sync-prompt').prompt;

var people = [], dogs = [], cats =[], horses = [];

var person1 = {name:'bob', age:10, pets: []};
var person2 = {name:'sam', age:5};
var person3 = {name:'jill', age:7};

people.push(person1, person2, person3);

var option = prompt('Which animal (d)og, (c)at, (h)orse, or (q)uit?' );
while(option !=='q'){
  switch(option){
    case 'd':
     var  name = prompt('Name : ');
     var  age = prompt('Age :  ');
     var breed = prompt('What is your dog\'s breed?' );
     var dog = {name:name, age:age, breed:breed};
      dogs.push(dog);
      break;
    case 'c':
      name = prompt('What is your cat\'s name? ');
      age = prompt('How old is that damn cat? ');
      var size =parseInt(prompt('How much does your cat weigh? '));
      var cat ={name:name, age:age, size:size};
      cats.push(cat);

        break;
    case 'h':
      name = prompt('What is your horse\'s name? ');
      breed = prompt('What kind?' );
      var derby = prompt('Kentucky Derby name?' );
      var horse ={name:name, breed:breed, derby:derby};
      horses.push(horse);
      break;
  }

option = prompt('Which animal: (d)og, (c)at, (h)orse, (q)uit? ');
}

option = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');
while (option !== 'q'){
  for(var i = 0; i < people.length; i++){
    if(people[i].name[0] === option){
      var client = people[i];
      break;
    }
  }

  var animals;
  console.log(client);
  var choice = prompt('What type of pet? (d)og, (c)at, (b)ee: ');
  switch(choice){
    case 'd':
    console.log('Dogs:', dogs);
    break;
  case 'c':
    console.log('Cats:', cats);
    break;
  case 'h':
    console.log('horse:', horses);
    break;
}

name = prompt('What is the name of the animal you want to adopt? ');

for(i = 0); i< animals.length;i++){
  if(animals[i].name === name){
    var animal = animals[i];
    var index =i;
    break;
  }
}

console.log('Animal:', animal);


animals.splice(index,1);
client.pets.push(animal);
console.log('After adoption:', client);
console.log('Animals:' animals); 
option = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');
}



console.log('Dogs:', dogs);
console.log('Cats:', cats);
console.log('Horses:', horses);

