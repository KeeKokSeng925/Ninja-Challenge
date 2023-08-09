//1
const section = document.createElement("section");
section.setAttribute('id','s1');
document.body.appendChild(section);

const title = document.createElement("h1");
const para = document.createElement("p");
title.style.color = "DarkGreen"
title.style.textAlign = "center"
title.innerHTML = "What do I think of JS";
para.innerHTML = "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else";


document.getElementById("s1").appendChild(title);
document.getElementById("s1").appendChild(para);

//2

var myskill = document.createElement("LI");
var skill = document.createTextNode("I can fly");
myskill.appendChild(skill);
document.getElementById("skills-list").appendChild(myskill);

var myeducation = document.createElement("LI");
var education = document.createTextNode("Professional Jet Pilot, TopGun");
myeducation.appendChild(education);
document.getElementById("education-list").appendChild(myeducation);

//3

var ep = document.createElement("TR");
ep.setAttribute('id','ep1');
document.getElementById("employment-table").appendChild(ep);

var e1 = document.createElement("TD");
var e2 = document.createElement("TD");
var e3 = document.createElement("TD");
var et1 = document.createTextNode("Professional Jet Pilot");
var et2 = document.createTextNode("US Air Force");
var et3 = document.createTextNode("2000 - 2009");
e1.appendChild(et1);
e2.appendChild(et2);
e3.appendChild(et3);
document.getElementById("ep1").appendChild(e1);
document.getElementById("ep1").appendChild(e2);
document.getElementById("ep1").appendChild(e3);

//4

var img = document.createElement("img");
img.src = "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fbb28c90c-2cc9-11ea-a2d1-c31ad393952a.jpg?crop=1714%2C964%2C0%2C89&resize=1500";
document.getElementById("skill-images").appendChild(img);
