var windowsTenLogo = document.getElementById("windowsTenLogo");
var bootingScreen = document.getElementById("bootingScreen");

bootingScreen.oncontextmenu = function()
{
    return false;
};

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

        logonScreenId.oncontextmenu = function()
        {
            return false;
        };

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
        var maximizeWindow = document.getElementsByClassName("maximizeWindow")[0];

        var titleBar = document.getElementsByClassName("titleBar")[0];

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var desktopRightClickMenu = document.getElementById("desktopRightClickMenu");
        var fileExplorerTileRightClickMenu = document.getElementById("fileExplorerTileRightClickMenu");

        var power = document.getElementById("power");
        var powerMenu = document.getElementById("powerMenu");

        logonScreenId.style.display = "none";
        desktop.style.display = "inline"

        desktop.oncontextmenu = function()
        {
            desktopRightClickMenu.style.display = "inline";
            return false;
        };

        desktop.onclick = function()
        {
            desktopRightClickMenu.style.display = "none";
            fileExplorerTileRightClickMenu.style.display = "none";
        };

        power.onclick = function powerToggle()
        {
            powerMenu.style.display = "inline";

            power.onclick = function()
            {
                powerMenu.style.display = "none";

                power.onclick = function()
                {
                    powerToggle();
                };

            };

        };

        fileExplorerTile.oncontextmenu = function()
        {
            fileExplorerTileRightClickMenu.style.display = "inline";
            return false;
        };

        fileExplorerTile.onclick = function()
        {
            fileExplorerApp.style.display = "inline";

            fileExplorerApp.oncontextmenu = function()
            {
                
            };

            closeWindow.onclick = function()
            {
                fileExplorerApp.style.display = "none";
            };

            function windowMaximized()
            {
                fileExplorerApp.style.left = "0%";
                fileExplorerApp.style.top = "0%";
                fileExplorerApp.style.width = "100%";
                fileExplorerApp.style.height = "100%";

                maximizeWindow.onclick = function()
                {
                    windowRestored();
                };

            };

            function windowRestored()
            {
                fileExplorerApp.style.left = "15%";
                fileExplorerApp.style.top = "25%";
                fileExplorerApp.style.width = "75%";
                fileExplorerApp.style.height = "50%";

                maximizeWindow.onclick = function()
                {
                    windowMaximized();
                };

            };

            maximizeWindow.onclick = function()
            {
                windowMaximized();
            };

            window.onload = addListeners();

            var offX;
            var offY;

            function addListeners()
            {
                titleBar.addEventListener("mousedown", mouseDown, false);
                window.addEventListener("mouseup", mouseUp, false);
            };

            function mouseUp()
            {
                window.removeEventListener("mousemove", moveWindow, true);
            };

            function mouseDown(event)
            {
                offY = event.clientY - parseInt(fileExplorerApp.offsetTop);
                offX = event.clientX - parseInt(fileExplorerApp.offsetLeft);

                window.addEventListener("mousemove", moveWindow, true);
            };

            function moveWindow(event)
            {
                fileExplorerApp.style.top = (event.clientY - offY) + "px";
                fileExplorerApp.style.left = (event.clientX - offX) + "px";

                if(fileExplorerApp.style.left < "0%")
                {
                    fileExplorerApp.style.left = "0%";
                }

                if(fileExplorerApp.style.top < "0%")
                {
                    windowMaximized();
                }

            };

        };

        threeDimension.onclick = function enableThreeDimension()
        {
            threeDimensionStyleSheet.setAttribute("rel", "stylesheet");
            threeDimensionStyleSheet.setAttribute("href", "css/3D.css");

            document.head.appendChild(threeDimensionStyleSheet);

            threeDimension.onclick = function()
            {
                document.head.removeChild(threeDimensionStyleSheet);

                threeDimension.onclick = function()
                {
                    enableThreeDimension();
                };

            };

        };

    };

}, 5000);