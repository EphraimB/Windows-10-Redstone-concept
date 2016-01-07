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
        var settingsTile = document.getElementById("settingsTile");
        var fileExplorerApp = document.getElementById("fileExplorerApp");
        var settingsApp = document.getElementById("settingsApp");

        var closeWindow = document.getElementsByClassName("closeWindow")[0];
        var maximizeWindow = document.getElementsByClassName("maximizeWindow")[0];

        var windowIsMaximized = false;

        var titleBar = document.getElementsByClassName("titleBar")[0];

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var fileExplorerAppRunning = document.getElementById("fileExplorerAppRunning");

        var desktopContextMenu = document.getElementById("desktopContextMenu");
        var tileContextMenu = document.getElementById("tileContextMenu");

        var resizeMenu = document.getElementById("resizeMenu");
        var resizeSubMenu = document.getElementById("resizeSubMenu");

        var smallTile = document.getElementById("smallTile");
        var mediumTile = document.getElementById("mediumTile");
        var wideTile = document.getElementById("wideTile");
        var largeTile = document.getElementById("largeTile");

        var power = document.getElementById("power");
        var powerMenu = document.getElementById("powerMenu");

        var restart = document.getElementById("restart");
        var lock = document.getElementById("lock");
        var shutDown = document.getElementById("shutDown");

        logonScreenId.style.display = "none";
        desktop.style.display = "inline"

        desktop.oncontextmenu = function()
        {
            desktopContextMenu.style.display = "inline";
            return false;
        };

        desktop.onclick = function()
        {
            desktopContextMenu.style.display = "none";
            tileContextMenu.style.display = "none";

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

        restart.onclick = function()
        {
            window.location.reload(true);
        };

        lock.onclick = function()
        {
            desktop.style.display = "none";

            logonScreen();
        };

        shutDown.onclick = function()
        {
            window.close();
        };

        window.onload = addTileListeners();

        var offsetX;
        var offsetY;

        function addTileListeners()
        {
            var flag = 0;

            for(var i = 0; i < tile.length; i++)
            {
                tile[i].addEventListener("mousedown", mouseDown, false);
                tile[i].addEventListener("contextmenu", showTileContextMenu, false);
            }

            fileExplorerTile.addEventListener("click", openFileExplorerApp, false);
            settingsTile.addEventListener("click", openSettingsApp, false);

            window.addEventListener("mouseup", mouseUp, false);
        };

        function showTileContextMenu()
        {
            tileContextMenu.style.display = "inline";

            sessionStorage.setItem("pickedTile", this.id);

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
            document.getElementById(sessionStorage.pickedTile).style.width = "1%";
            document.getElementById(sessionStorage.pickedTile).style.height = "1%";
        };

        mediumTile.onclick = function()
        {
            document.getElementById(sessionStorage.pickedTile).style.width = "2%";
            document.getElementById(sessionStorage.pickedTile).style.height = "3%";
        };

        wideTile.onclick = function()
        {
            document.getElementById(sessionStorage.pickedTile).style.width = "8%";
            document.getElementById(sessionStorage.pickedTile).style.height = "3%";
        };

        largeTile.onclick = function()
        {
            document.getElementById(sessionStorage.pickedTile).style.width = "12%";
            document.getElementById(sessionStorage.pickedTile).style.height = "16%";
        };

        function mouseUp()
        {
            window.removeEventListener("mousemove", moveTile, true);
        };

        function mouseDown(event)
        {
            flag = 0;

            offsetY = event.clientY - parseInt(this.offsetTop);
            offsetX = event.clientX - parseInt(this.offsetLeft);

            sessionStorage.setItem("pickedTile", this.id);

            window.addEventListener("mousemove", moveTile, true);
        };

        function moveTile(event)
        {
            flag = 1;

            document.getElementById(sessionStorage.pickedTile).style.top = (event.clientY - offsetY) + "px";
            document.getElementById(sessionStorage.pickedTile).style.left = (event.clientX - offsetX) + "px";
        };

        function openSettingsApp()
        {

            if(flag == 0)
            {
                settingsApp.style.display = "inline";
            }

        };

        function openFileExplorerApp()
        {

            if(flag == 0)
            {
                fileExplorerAppRunning.style.display = "inline";
                fileExplorerApp.style.display = "inline";
            }

            closeWindow.onclick = function()
            {
                fileExplorerApp.style.display = "none";
                fileExplorerAppRunning.style.display = "none";
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