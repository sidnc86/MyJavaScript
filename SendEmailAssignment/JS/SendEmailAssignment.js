function sentMail(frontPage, backPage, toName, sub, message, heading, details, messageDetails, error)
{
	let to = document.getElementById(toName).value;
	let subject = document.getElementById(sub).value;
	let msg = document.getElementById(message).value;
	
	if ((to.length > 5)&&(subject.length > 3)&&(msg.length > 5))
	{
		document.getElementById(frontPage).setAttribute("style", "display: none;");
		document.getElementById(backPage).setAttribute("style", "display: initial;");
		
		document.getElementById(heading).innerHTML = subject;
		document.getElementById(details).innerHTML = "Sent to: " + to + "<br>Sent at: " + Date();
		document.getElementById(messageDetails).innerHTML = "Message:<br>" + msg;
		document.getElementById(heading).setAttribute("tabindex", "-1");
		document.getElementById(heading).focus();
	}
	else {
		document.getElementById(error).setAttribute("tabindex", "-1");
		document.getElementById(error).removeAttribute("role", "alert");
		document.getElementById(error).setAttribute("role", "alert");
		document.getElementById(error).innerHTML = "Please enter the details for all the required fields";
		document.getElementById(error).focus();
	}
}

function sendAnotherMail(frontPage, backPage)
{
	document.getElementById(frontPage).setAttribute("style", "display: initial;");
	document.getElementById(backPage).setAttribute("style", "display: none;");
}

function appendAttachments()
{
	let attachment = '<span><input type="file"><br><br></span>';
	document.getElementById("file").innerHTML += attachment;
	
}


function darkMode(btn)
{
	let btnName = document.getElementById(btn).innerHTML;
	if (btnName == "Enable Dark Mode")
	{
		document.getElementById(btn).innerHTML = "Disable Dark Mode";
		document.querySelectorAll('*').forEach((e)=>e.setAttribute('style', 'background-color: black; color: white;'));
	}
	else {
		document.getElementById(btn).innerHTML = "Enable Dark Mode";
		document.querySelectorAll('*').forEach((e)=>e.removeAttribute('style'));
	}
}