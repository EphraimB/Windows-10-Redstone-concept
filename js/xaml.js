var splitViewButton = document.getElementsByClassName("splitView");
var hamburgerButton = document.getElementsByClassName("hamburgerButton");

var splitViewExpanded = document.getElementsByClassName("splitViewExpanded");
var hamburgerButtonExpanded = document.getElementsByClassName("hamburgerButtonExpanded");

window.onload = addXAMLListeners();

function addXAMLListeners()
{

    for(var i = 0; i < splitViewButton.length; i++)
    {
        splitViewButton[i].addEventListener("click", splitView, false);
        splitViewButton[i].addEventListener("touchend", splitView, false);
    }

};

function splitView()
{

    for(var i = 0; i < splitViewButton.length; i++)
    {
        splitViewButton[i].style.display = "none";
    }

    for(var j = 0; j < splitViewExpanded.length; j++)
    {
        splitViewExpanded[j].style.display = "inline";
    }

    for(var k = 0; k < hamburgerButtonExpanded.length; k++)
    {
        hamburgerButtonExpanded[k].addEventListener("click", onSplitViewExpanded, false);
        hamburgerButtonExpanded[k].addEventListener("touchend", onSplitViewExpanded, false);
    }

};

function onSplitViewExpanded()
{

    for(var i = 0; i < splitViewExpanded.length; i++)
    {
        splitViewExpanded[i].style.display = "none";
    }

    for(var j = 0; j < splitViewButton.length; j++)
    {
        splitViewButton[j].style.display = "inline";
    }

};

function circularProgress()
{
    var circularProgress = document.getElementsByClassName("circularProgress")[0];

    var circularProgressDotOne = document.createElement("div");
    var circularProgressDotTwo = document.createElement("div");
    var circularProgressDotThree = document.createElement("div");
    var circularProgressDotFour = document.createElement("div");
    var circularProgressDotFive = document.createElement("div");

    document.body.appendChild(circularProgressDotOne);
    document.body.appendChild(circularProgressDotTwo);
    document.body.appendChild(circularProgressDotThree);
    document.body.appendChild(circularProgressDotFour);
    document.body.appendChild(circularProgressDotFive);
};