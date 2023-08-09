//wrong answer but just for record
//const textcolor = ['white', 'black'];
//document.getElementById('random-section').style.color = textcolor[Math.floor(Math.random() * textcolor.length)]

const text1 = document.getElementById("random-section");

if (document.getElementById("random-section").style.backgroundColor == "black"){
  text1.getElementsByTagName('p')[0].style.color = "white"
  text1.getElementsByTagName('p')[1].style.color = "white"
}
