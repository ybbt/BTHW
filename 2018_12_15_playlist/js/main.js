var playList = [{
    author: "led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
},
{
    author: "queen",
    song: "bohemian rhapsody",
    duration: "2:30"
},
{
    author: "lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
},
{
    author: "deep purple",
    song: "smoke on the water",
    duration: "3:03"
},
{
    author: "jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
},
{
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
},
{
    author: "queen",
    song: "we will rock you",
    duration: "2:13"            
},
{
    author: "metallica",
    song: "enter sandman",
    duration: "3:03"            
}
];

var el = document.querySelector("#playlist");

for (i=0; i< playList.length; i++) {
    var elli = document.createElement('li');
    elli.classList.add("ba-tune");
   
    var t = document.querySelector('#tmpl');
   
    var cloneSvg = document.importNode(t.content, true);

    var eldiv = document.createElement('div');
    eldiv.classList.add("ba-tune__top");

    var elspand = document.createElement('span');
    elspand.classList.add("ba-tune__duration");
    elspand.textContent = playList[i].duration;

    var elspana = document.createElement('span');
    elspana.classList.add("ba-tune__author");
    elspana.textContent = ucFirst(playList[i].author);

    var eldivs = document.createElement('div');
    eldivs.classList.add("ba-tune__song"); 
    eldivs.textContent = playList[i].song;

    eldiv.appendChild(elspand);
    eldiv.appendChild(elspana);

    elli.appendChild(cloneSvg);
    elli.appendChild(eldiv);
    elli.appendChild(eldivs);

    el.appendChild(elli);
}

function ucFirst(str) {	
	return str.charAt(0).toUpperCase() + str.slice(1);	
};