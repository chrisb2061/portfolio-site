//alert("Utils is linked");

//http://www.ilfilosofo.com/blog/2008/04/14/addevent-preserving-this/
//cross browser addEventListener
//when we call addEvent, you have to include an object, type, and function
function addEvent( obj, type, fn ) 
{
	if (obj.addEventListener)
	{
		obj.addEventListener(type, fn, false);
	}
	else if (obj.attachEvent) 
	{
		obj.attachEvent('on' + type, function() { return fn.apply(obj, new Array(window.event));});
	}
}


//http://www.javascriptkit.com/jsref/event.shtml
//cross browser preventDefault
function stopDefault(e)
{
	//alert('default action has been cancelled');
	var evt = window.event || e;
 	if (evt.preventDefault)  //W3C
	{
  		evt.preventDefault();
	}	
 	else //IE browser
	{ 
	
  		 //also possible: 
		 window.event.returnValue = false;
	}
}


//Peter Paul Koch - www.quirksmode.org
//dynamically getting style of element without need for inline style.
function getStyle(el,styleProp)
{
	var x = document.getElementById(el);
	if (x.currentStyle)
	{
		var y = x.currentStyle[styleProp];
	}
	else if (window.getComputedStyle)
	{
		var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
	}
	
	return y;
}


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}


function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
