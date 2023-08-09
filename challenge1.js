//1
const bg = document.querySelector('body');
bg.style.backgroundColor = "red"

//2
const img1 = document.createElement('img');
img1.src = "https://www.goldderby.com/wp-content/uploads/2020/06/James-Bond-007-Logo.png?w=620&h=360&crop=1"
document.querySelector('header').appendChild(img1)
img1.style.width = "100%"
img1.style.height = "100%"

//3

const hs1 = document.getElementsByTagName('h2')[0];
const hs2 = document.getElementsByTagName('h2')[1];
const hs3 = document.getElementsByTagName('h2')[2];

var colors = ['purple'];
for(var i = 0; i < colors.length; i ++) {
    hs2.style.color = colors[i];
    hs1.style.color = colors[i];    
    hs3.style.color = colors[i];     
  }

//4


const skills = document.getElementById('skills-list');
const educations = document.getElementById('education-list');
const employments = document.getElementById('employment-table');
const table1 =  document.getElementsByTagName('tr')[0];
const table2 =  document.getElementsByTagName('tr')[1];

document.getElementById('name').innerHTML = "Kee Kok Seng";
document.getElementsByClassName('descriptions')[0].innerHTML = "I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.";
document.getElementsByClassName('descriptions')[1].innerHTML = "Guess what? I lied"
document.getElementById('name').style.color = "black";
document.getElementsByTagName('p')[0].style.color ="black";
document.getElementsByTagName('p')[1].style.color ="black";
skills.getElementsByTagName('li')[0].innerHTML = "I don't have such thing";
skills.getElementsByTagName('li')[1].innerHTML = "Actually i have one, i look like normal person but you never know i'm a ninja";
educations.getElementsByTagName('li')[0].innerHTML = "Computing & Communications Master Class, Harvard University ";
educations.getElementsByTagName('li')[1].innerHTML = "Technologies & Spaces Master Class, Stanford University";
table1.getElementsByTagName('td')[0].innerHTML = "Professional Network Security Engineer"
table1.getElementsByTagName('td')[1].innerHTML = "MI6"
table1.getElementsByTagName('td')[2].innerHTML = "2020 - Current"
table2.getElementsByTagName('td')[0].innerHTML = "Professional IT Technical Support"
table2.getElementsByTagName('td')[1].innerHTML = "NASA"
table2.getElementsByTagName('td')[2].innerHTML = "2010 - 2019"

//5

document.getElementById('my-face').src = "https://i.imgflip.com/14dc4i.jpg?a469866"

const img2 = document.getElementById('skill-images');
img2.getElementsByTagName('img')[0].src = "https://www.insurancejournal.com/app/uploads/2015/02/worker-fatalities.jpg"







  
