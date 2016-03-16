var animal = {};

animal.username = 'Mittens';
animal['tagline'] = 'pet me';
var noises = [];
animal.noises = noises;

var count = 0;
for(var key in animal) {
	count++;
	if (key === 'username') {
		console.log('hi my name is ' + animal[key]);
	} else if (key === 'tagline') {
		console.log('I like to say ' + animal[key]);
	} 
}


var noiseArray = ['purr', 'bark']

noiseArray.unshift("hiss") // put the first of the position
noiseArray.push("meow") // put in the last of the position

noiseArray[3]

console.log(noiseArray.length)
// index start from 0 so the last index is 1 les sthan the length
console.log(noiseArray);
// --> Array ["hiss", "purr", "meow", "growl"]
animal.noises = noiseArray 
console.log(animal)
// --> Object {username: "Mittens", tagline: "Pet Me", noises: Array[4]}

var animals = [];

animals.push(animal);
// [{
// username:	"Mittens"
// tagline:	"pet me"
// noises:	["hiss", "purr", "bark", "meow"]
// }, {
// username:	"DaffyDuck"
// tagline:	"Yippee"
// noises:	["quack", "clak"]
// }]

var quackers = {username: "DaffyDuck", tagline: "Yippee", noises: ["quack", "clak"]}

// adding quackers to last index
animals[animals.length] = quackers;

console.log(animals);

var dog = {
	username: "Zabu",
	talgin: "Nice profile",
	noises: ["back", "woof", "wow"]
}

var honeyBadger = {}
honeyBadger.username = "Randall"
honeyBadger.tagline = "Honey badger dont care"
honeyBadger.noises = ["screech", "growl"]

animals.push(dog, honeyBadger);
console.log(animals.length)
// -> 4

// Question 1 and 2
function AnimalTestUser(username) {
	var argLength = arguments.length;
	var otherArgs = [];
	if (argLength > 1) {
		for (var i = 1; i < argLength; i++) {
			otherArgs.push(arguments[i])
		}
	}
	return {
		username: username,
		otherArgs: otherArgs
	}
}
var AnimalTest = function (username) {
	return {
		// string : argument
		'username': username
	}
}
var myCow = AnimalTest("Bessy");

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3])
console.log(testSheep)

// question 3
function AnimalCreator(username, species, tagline, noises) {
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: []
	};
	
}
var sheep = AnimalCreator('Cloud', 'Dog', 'Nice doggy', ['burp', 'click', 'chirp']);
console.log(sheep);
// Question 4 & 5
function addFriend(animal, friend) {
	//animal.friends.push(friend.username)
	animal.friends.push(friend);
}
var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['moo', 'moo'])
console.log(cow);
var llama = AnimalCreator('Zeny', 'llama', 'lllll', ['sdf', 'sdf']);
console.log(llama)
addFriend(sheep, cow);
console.log(sheep)
addFriend(sheep, llama);
console.log(sheep);

// Question 6
// add collection of 3 animals
var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

// Question 7
// this function allows the animals to have matches
function addMatchesArray(farm) {
	for (var animal in farm) {
		farm[animal].matches = [];
	}
}
addMatchesArray(myFarm);
console.log(myFarm[0]);

// Question 8
function giveMatches(farm) {
	for (var animal in farm) {
		farm[animal].matches.push(farm[animal].friends[0]);
	}
}
giveMatches(myFarm);
console.log(myFarm[0]);