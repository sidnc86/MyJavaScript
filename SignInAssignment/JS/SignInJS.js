function welcome(uname, pass, heading, para, form, btn, error, contentContainer)
{
	var userName = document.getElementById(uname).value;
var password = document.getElementById(pass).value;
	if ((userName.length > 0)&&(password.length > 0)) 
	{
		userName = "Welcome " + userName;
		document.getElementById(heading).innerHTML = userName;
		document.getElementById(para).innerHTML = "You are successfully signed into our potal";
		document.getElementById(form).setAttribute("style", "display: none;");
		document.getElementById(btn).setAttribute("style", "display: none;");
		document.getElementById(error).setAttribute("style", "display: none;");
		document.getElementById(contentContainer).setAttribute("aria-live", "assertive");
	}
	else {
		document.getElementById(error).removeAttribute("role", "alert");
		document.getElementById(error).setAttribute("role", "alert");
		document.getElementById(error).innerHTML = "Please enter the details for required fields which are marked using *";
		document.getElementById(error).setAttribute("tabindex", "-1");
		document.getElementById(error).focus();
	}
}
