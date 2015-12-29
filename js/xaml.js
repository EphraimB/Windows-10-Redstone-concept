function splitView()
{
    var splitView = document.getElementsByClassName("splitView")[0];
    var hamburgerButton = document.getElementsByClassName("hamburgerButton")[0];

    var splitViewExpanded = document.getElementsByClassName("splitViewExpanded")[0];
    var hamburgerButtonExpanded = document.getElementsByClassName("hamburgerButtonExpanded")[0];

    splitView.style.display = "none";
    splitViewExpanded.style.display = "inline";

    hamburgerButtonExpanded.onclick = function()
    {
        splitViewExpanded.style.display = "none";
        splitView.style.display = "inline";
    };

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