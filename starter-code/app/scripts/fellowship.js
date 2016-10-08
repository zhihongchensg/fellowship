console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var midEarth = document.createElement('section')
  midEarth.setAttribute('id', 'middle-earth')
  var shireLand = document.createElement('article')
  var rivendell = document.createElement('article')
  var mordor = document.createElement('article')
  var shireLandH1 = document.createElement('h1')
  var rivendellH1 = document.createElement('h1')
  var mordorH1 = document.createElement('h1')
  var shireLandtxt = document.createTextNode('The Shire')
  var rivendelltxt = document.createTextNode('Rivendell')
  var mordortxt = document.createTextNode('Mordor')

  shireLandH1.appendChild(shireLandtxt)
  shireLand.appendChild(shireLandH1)
  midEarth.appendChild(shireLand)

  rivendellH1.appendChild(rivendelltxt)
  rivendell.appendChild(rivendellH1)
  midEarth.appendChild(rivendell)

  mordorH1.appendChild(mordortxt)
  mordor.appendChild(mordorH1)
  midEarth.appendChild(mordor)

  body.appendChild(midEarth)



  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {

  var list = document.createElement('ul')
  for (var x = 0; x < hobbits.length; x++) {
    var listItem = document.createElement('li')
    listItem.textContent = hobbits[x]
    listItem.className = 'hobbit'
    list.appendChild(listItem)
  }
var temp = document.querySelectorAll('article')
temp[0].appendChild(list)
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits();
// Part 3

var ShireBody = document.querySelectorAll('article')[0]
var Frodo = ShireBody.querySelectorAll('li')[0]

function keepItSecretKeepItSafe() {
  var theRing = document.createElement('div')
  theRing.setAttribute('id', 'the-ring')
  theRing.setAttribute('class', 'magic-imbued-jewelry')
  theRing.addEventListener('click', nazgulScreech)
  Frodo.appendChild(theRing)
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe();

// Part 4
var rivendell = body.querySelectorAll('article')[1]

function makeBuddies () {
  var aside = document.createElement('aside')
  var asideList = document.createElement('ul')
  for (var x = 0; x < buddies.length; x++) {
    var asideListItem = document.createElement('li')
    asideListItem.textContent = buddies[x]
    asideList.appendChild(asideListItem)
  }
  aside.appendChild(asideList)
  rivendell.appendChild(aside)
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies()


// Part 5


function beautifulStranger() {

rivendell.querySelectorAll('li')[3].textContent = 'Aragorn'

  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  temp = ShireBody.querySelector('ul')
  while (temp.hasChildNodes()) {
    rivendell.appendChild(temp.removeChild(temp.firstChild))
  }
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  // var the-fellowship = document.createElement('div')



}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
