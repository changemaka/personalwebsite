var myImage = document.querySelector('#myImage');
var image1 = 'images/ddopro.jpg';
var image2 = 'images/ddoculture.png';

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	
	if(mySrc === image1){
		myImage.setAttribute('src', image2);
	} else {
		myImage.setAttribute('src', image1);
	}

}


//myButton is the name of the ID for button element
var myButton = document.querySelector('button');

//this code takes reference to the heading, and stores it inside a variable. 
var myHeading = document.querySelector('h2');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to my personal website, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to my personal website, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}



