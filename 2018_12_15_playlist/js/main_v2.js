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

    var t = document.querySelector('#tmpl');
    
    var spanD = t.content.querySelector(".ba-tune__duration");
    spanD.textContent = playList[i].duration;

    var spanA = t.content.querySelector(".ba-tune__author");
    spanA.textContent = ucFirst(playList[i].author);

    var div = t.content.querySelector(".ba-tune__song");
    div.textContent = playList[i].song;


    var cloneLi = document.importNode(t.content, true);

    el.appendChild(cloneLi);
}

function ucFirst(str) {	
	return str.charAt(0).toUpperCase() + str.slice(1);	
};