// JavaScript Document

//alert("Main is linked");

addLoadEvent(init);
addLoadEvent(setupNav);
addLoadEvent(setupAlbum);
addLoadEvent (preparePlaceholder);

function init()
{
	var main = document.getElementById('main');
	var divs = main.getElementsByTagName('UL');
	
	for(var i=0; i < divs.length; i++)
	{
		divs[i].className = "hide";
	}
	
	divs[0].className = "show";
}

function setupNav()
{
	var main = document.getElementById('main');
	var links = main.getElementsByTagName('A');
	var l = links.length;
	
	//repeat loop to loop through the array, and with each loop we're going to add some behaviour onto it
	
	for(var i = 0; i < l; i++)
	{
		//link[i] is the object; the event is 'click', and stopDefault is the function. You can see in utils.js that addEvent required all of those things.
		addEvent(links[i], 'click', stopDefault);
		addEvent(links[i], 'click', doSlide);	
	}
	return true;
	
}

function preparePlaceholder ()
{
	//create image containuer
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id', 'placeholder');
	placeholder.setAttribute('src', 'images/addition1.jpg');
	placeholder.setAttribute('alt', 'my image gallery');

	//create text container
	var description = document.createElement('p');
	description.setAttribute('id', 'description');
	var descText = document.createTextNode('Front of house');
	description.appendChild(descText);
	
	//add new elements to the document
	//we want the image to go after the nav, and paragraph to go after the picture
	var nav = document.getElementById('nav');
	//insert the placeholder after the nav
	insertAfter(placeholder, nav);
	insertAfter(description, placeholder);
	
	return true;
}


//evt is in the function because it's going to happen when we click on a link

//setupNav function is calling doSlide function
function doSlide(evt)
{
	//create a cross browser reference to object clicked on
	var myEvent = window.event || evt;
	var myTarget = myEvent.srcElement ? myEvent.srcElement:myEvent.target;
	var captionText = myTarget.getAttribute('title') ? myTarget.getAttribute('title') : " ";
	
	/* Alternative to line above:
	basically, the ? means if and the : means else
	
	if(myEvent.srcElement)
	{
		myEvent.srcElement
	}
	else
	{
		myEvent.target
	}
}
	 */
	 
	 //swap out image src value
	 var pic = document.getElementById('placeholder');
	 var source = myTarget.href;
	 pic.src = source;
	 
	 
	 //swap out paragraph text
	 var para = document.getElementById('description');
	 var text = myTarget.title;
	 para.firstChild.nodeValue = text;
	 
	 setStatus(evt);
	 
	 return true;
}

function setStatus(evt)
{
	//create a cross browser reference to object clicked on
	var myEvent = window.event || evt;
	var myTarget = myEvent.srcElement ? myEvent.srcElement:myEvent.target;
	
	var nav = document.getElementById('main');
	var links = nav.getElementsByTagName('A');
	var l = links.length;
	
	
	
	for(var i = 0; i < l; i++)
	{
		links[i].className = "";
		
	}
	
	//this was called in doSlide
	myTarget.className = "status";
	
	return true;
}


// these function are for the show and hide

function setupAlbum()
{
	var nav = document.getElementById('nav');
	var links = nav.getElementsByTagName('A');
	
	for(var i=0; i < links.length; i++)
	{
			addEvent(links[i], 'click', showDiv);
	}
}


function showDiv(evt)
{
	var main = document.getElementById('main');
	var divs = main.getElementsByTagName('UL');
	
	for(var i=0; i < divs.length; i++)
	{
		divs[i].className = "hide";
	}
	
	var myhref = evt.target.href;
	var myArray = myhref.split('#');
	var myTarget = myArray[1];
	var container = document.getElementById(myTarget);
	container.className = "show";
	
	//show first image of Album    ///////////////////////////  newly added 8-2-2011
	var firstPic = container.getElementsByTagName('A')[0];
	var firstPicURL = firstPic.href;
	var firstPicCaption = firstPic.title;
	var placeholder = document.getElementById('placeholder');
	var caption = document.getElementById('description');
	
	placeholder.src = firstPicURL;
	caption.firstChild.nodeValue = firstPicCaption;	
}





