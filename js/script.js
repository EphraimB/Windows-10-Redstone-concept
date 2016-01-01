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

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var desktopRightClickMenu = document.getElementById("desktopRightClickMenu");
        var fileExplorerTileRightClickMenu = document.getElementById("fileExplorerTileRightClickMenu");

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