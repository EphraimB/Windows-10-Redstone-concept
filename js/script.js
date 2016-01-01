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

        var closeWindow = document.getElementsByClassName("closeWindow")[0];

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        logonScreenId.style.display = "none";
        desktop.style.display = "inline"

        function rightClick()
        {
            var rightClick;

            var event = window.event;

            if(event.which)
            {
                rightClick = (event.which == 3);
            }

            else if(event.button)
            {
                rightClick = (event.button == 2);
            }

            alert(rightClick);
        };

        

        fileExplorerTile.onclick = function()
        {
            fileExplorerApp.style.display = "inline";

            closeWindow.onclick = function()
            {
                fileExplorerApp.style.display = "none";
            };

        };

        threeDimension.onclick = function()
        {
            threeDimensionStyleSheet.setAttribute("rel", "stylesheet");
            threeDimensionStyleSheet.setAttribute("href", "css/3D.css");

            document.head.appendChild(threeDimensionStyleSheet);
        };

    };

}, 5000);