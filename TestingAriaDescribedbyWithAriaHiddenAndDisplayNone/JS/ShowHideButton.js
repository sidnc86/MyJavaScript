function hideForm(btn, form)
{
	var btnName = document.getElementById(btn).innerHTML;
	if (btnName == "Hide Form")
	{
		document.getElementById(btn).innerHTML = "Show Form";
		document.getElementById(btn).setAttribute("aria-expanded", "false");
		document.getElementById(form).setAttribute("style", "display: none;");
	}
	else if (btnName == "Show Form") {
		document.getElementById(btn).innerHTML = "Hide Form";
		document.getElementById(btn).setAttribute("aria-expanded", "true");
		document.getElementById(form).setAttribute("style", "display : initial;");
	}
}
