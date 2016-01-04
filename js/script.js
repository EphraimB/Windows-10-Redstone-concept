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
        var tile = document.getElementsByClassName("tile");
        var fileExplorerTile = document.getElementById("fileExplorerTile");
        var fileExplorerApp = document.getElementById("fileExplorerApp");

        var closeWindow = document.getElementsByClassName("closeWindow")[0];
        var maximizeWindow = document.getElementsByClassName("maximizeWindow")[0];

        var windowIsMaximized = false;

        var titleBar = document.getElementsByClassName("titleBar")[0];

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var desktopRightClickMenu = document.getElementById("desktopRightClickMenu");
        var fileExplorerTileRightClickMenu = document.getElementById("fileExplorerTileRightClickMenu");

        var resizeMenu = document.getElementById("resizeMenu");
        var resizeSubMenu = document.getElementById("resizeSubMenu");

        var smallTile = document.getElementById("smallTile");
        var mediumTile = document.getElementById("mediumTile");
        var wideTile = document.getElementById("wideTile");
        var largeTile = document.getElementById("largeTile");

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

            resizeSubMenu.style.display = "none";
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

        resizeMenu.onmouseover = function()
        {
            resizeSubMenu.style.display = "inline";
        };

        resizeMenu.onmouseout = function()
        {
            resizeSubMenu.style.display = "none";
        };

        resizeSubMenu.onmouseover = function()
        {
            resizeSubMenu.style.display = "inline";
        };

        smallTile.onclick = function()
        {
            tile[1].style.width = "1%";
            tile[1].style.height = "1%";
        };

        mediumTile.onclick = function()
        {
            tile[1].style.width = "2%";
            tile[1].style.height = "3%";
        };

        wideTile.onclick = function()
        {
            tile[1].style.width = "8%";
            tile[1].style.height = "3%";
        };

        largeTile.onclick = function()
        {
            tile[1].style.width = "12%";
            tile[1].style.height = "16%";
        };

        window.onload = addTileListeners();

        var offsetX;
        var offsetY;

        var offsetTwoX;
        var offsetTwoY;

        function addTileListeners()
        {
            tile[0].addEventListener("mousedown", mouseDown, false);
            tile[1].addEventListener("mousedown", mouseDownTwo, false);

            window.addEventListener("mouseup", mouseUp, false);
        };

        function mouseUp()
        {
            window.removeEventListener("mousemove", moveFirstTile, true);
            window.removeEventListener("mousemove", moveSecondTile, true);
        };

        function mouseDown(event)
        {
            offsetY = event.clientY - parseInt(tile[0].offsetTop);
            offsetX = event.clientX - parseInt(tile[0].offsetLeft);

            window.addEventListener("mousemove", moveFirstTile, true);
        };

        function mouseDownTwo(event)
        {
            offsetTwoY = event.clientY - parseInt(tile[1].offsetTop);
            offsetTwoX = event.clientX - parseInt(tile[1].offsetLeft);

            window.addEventListener("mousemove", moveSecondTile, true);
        };

        function moveFirstTile(event)
        {
            tile[0].style.top = (event.clientY - offsetY) + "px";
            tile[0].style.left = (event.clientX - offsetX) + "px";
        };

        function moveSecondTile(event)
        {
            tile[1].style.top = (event.clientY - offsetTwoY) + "px";
            tile[1].style.left = (event.clientX - offsetTwoX) + "px";
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
                windowIsMaximized = true;

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
                windowIsMaximized = false;

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
                    fileExplorerApp.style.top = "0%";
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