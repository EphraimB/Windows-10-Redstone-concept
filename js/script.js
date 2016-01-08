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

        var app = document.getElementsByClassName("app");

        var closeWindow = document.getElementsByClassName("closeWindow");
        var maximizeWindow = document.getElementsByClassName("maximizeWindow");

        var windowIsMaximized = false;

        var titleBar = document.getElementsByClassName("titleBar");

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var runningApp = document.getElementsByClassName("runningApp");

        var settingsAppRunning = document.getElementById("settingsAppRunning");

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
                tile[i].addEventListener("mousedown", mouseDownOnTile, false);
                tile[i].addEventListener("contextmenu", showTileContextMenu, false);
            }

            fileExplorerTile.addEventListener("click", openFileExplorerApp, false);
            settingsTile.addEventListener("click", openSettingsApp, false);

            window.addEventListener("mouseup", mouseUpOnTile, false);
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

        function mouseUpOnTile()
        {
            window.removeEventListener("mousemove", moveTile, true);
        };

        function mouseDownOnTile(event)
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
                settingsAppRunning.style.display = "inline";
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

        };

        window.onload = addWindowControlListeners();

        function addWindowControlListeners()
        {

            for(var i = 0; i < closeWindow.length; i++)
            {
                closeWindow[i].addEventListener("click", closeWindowClicked, false);
            }

        };

        function closeWindowClicked()
        {

            for(var i = 0; i < runningApp.length; i++)
            {
                runningApp[i].style.display = "none";
            }

            document.getElementById(this.parentNode.parentNode.parentNode.id).style.display = "none";

        };

        function windowMaximized()
        {
            windowIsMaximized = true;

            for(var i = 0; i < app.length; i++)
            {
                app[i].style.left = "0%";
                app[i].style.top = "0%";
                app[i].style.width = "100%";
                app[i].style.height = "100%";
            }

            maximizeWindow.onclick = function()
            {
                windowRestored();
            };

            function windowRestored()
            {
                windowIsMaximized = false;

                for(var i = 0; i < app.length; i++)
                {
                    app[i].style.left = "15%";
                    app[i].style.top = "25%";
                    app[i].style.width = "75%";
                    app[i].style.height = "50%";
                }

                maximizeWindow.onclick = function()
                {
                    windowMaximized();
                };

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

            for(var i = 0; i < titleBar.length; i++)
            {
                titleBar[i].addEventListener("mousedown", mouseDownOnTitleBar, false);
            }

            window.addEventListener("mouseup", mouseUpOnTitleBar, false);
        };

        function mouseUpOnTitleBar()
        {
            window.removeEventListener("mousemove", moveWindow, true);
        };

        function mouseDownOnTitleBar(event)
        {
            offY = event.clientY - parseInt(this.parentNode.offsetTop);
            offX = event.clientX - parseInt(this.parentNode.offsetLeft);

            sessionStorage.setItem("pickedWindow", this.parentNode.id);

            window.addEventListener("mousemove", moveWindow, true);
        };

        function moveWindow(event)
        {
            document.getElementById(sessionStorage.pickedWindow).style.top = (event.clientY - offY) + "px";
            document.getElementById(sessionStorage.pickedWindow).style.left = (event.clientX - offX) + "px";

            if(document.getElementById(sessionStorage.pickedWindow).style.left < "0%")
            {
                document.getElementById(sessionStorage.pickedWindow).style.left = "0%";
            }

            if(document.getElementById(sessionStorage.pickedWindow).style.top < "0%")
            {
                document.getElementById(sessionStorage.pickedWindow).style.top = "0%";
            }

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