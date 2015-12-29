var windowsTenLogo = document.getElementById("windowsTenLogo");
var bootingScreen = document.getElementById("bootingScreen");

setTimeout(function finishedBooting()
{
    var logonScreenId = document.getElementById("logonScreen");
    var loginButton = document.getElementById("loginButton");

    bootingScreen.style.display = "none";

    function logonScreen()
    {
        document.body.style.background = "url(img/img0.jpg) 100% 100%";
        document.body.style.backgroundSize = "cover";

        logonScreenId.style.display = "inline";

        loginButton.onclick = function()
        {
            desktop();
        };

    };

    logonScreen();

    function desktop()
    {
        var desktop = document.getElementById("desktop");
        var fileExplorerTile = document.getElementById("fileExplorerTile");
        var fileExplorerApp = document.getElementById("fileExplorerApp");

        logonScreenId.style.display = "none";
        desktop.style.display = "inline"

        fileExplorerTile.onclick = function()
        {
            fileExplorerApp.style.display = "inline";
        };

    };

}, 5000);