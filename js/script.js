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
        var feedbackTile = document.getElementById("feedbackTile");

        var fileExplorerApp = document.getElementById("fileExplorerApp");
        var settingsApp = document.getElementById("settingsApp");
        var feedbackApp = document.getElementById("feedbackApp");

        var app = document.getElementsByClassName("app");

        var leftBorder = document.getElementsByClassName("leftBorder");
        var rightBorder = document.getElementsByClassName("rightBorder");
        var topBorder = document.getElementsByClassName("topBorder");
        var bottomBorder = document.getElementsByClassName("bottomBorder");

        var closeWindow = document.getElementsByClassName("closeWindow");
        var maximizeWindow = document.getElementsByClassName("maximizeWindow");
        var minimizeWindow = document.getElementsByClassName("minimizeWindow");

        var windowIsMaximized = false;

        var titleBar = document.getElementsByClassName("titleBar");

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var runningApp = document.getElementsByClassName("runningApp");

        var settingsAppRunning = document.getElementById("settingsAppRunning");

        var feedbackAppRunning = document.getElementById("feedbackAppRunning");

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

        desktop.oncontextmenu = function(event)
        {
            desktopContextMenu.style.left = event.clientX + "px";
            desktopContextMenu.style.top = event.clientY + "px";

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
                tile[i].addEventListener("touchstart", mouseDownOnTile, false);

                tile[i].addEventListener("contextmenu", showTileContextMenu, false);
            }

            fileExplorerTile.addEventListener("click", openFileExplorerApp, false);
            settingsTile.addEventListener("click", openSettingsApp, false);
            feedbackTile.addEventListener("click", openFeedbackApp, false);

            window.addEventListener("mouseup", mouseUpOnTile, false);
            window.addEventListener("touchend", mouseUpOnTile, false);
        };

        function showTileContextMenu(event)
        {
            tileContextMenu.style.left = event.clientX + "px";

            sessionStorage.setItem("tileContextMenuPositionX", event.clientX + "px");
            sessionStorage.setItem("tileContextMenuPositionY", event.clientY + "px");
            sessionStorage.setItem("tileContextMenuWidth", tileContextMenu.style.width + "px");

            tileContextMenu.style.top = event.clientY + "px";

            tileContextMenu.style.display = "inline";

            sessionStorage.setItem("pickedTile", this.id);

            return false;
        };

        resizeMenu.onmouseover = function()
        {
            resizeSubMenu.style.left = sessionStorage.tileContextMenuPositionX + sessionStorage.tileContextMenuWidth;
            resizeSubMenu.style.top = sessionStorage.tileContextMenuPositionY;

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
            window.removeEventListener("touchend", moveTile, true);
        };

        function mouseDownOnTile(event)
        {
            flag = 0;

            offsetY = event.clientY - parseInt(this.offsetTop);
            offsetX = event.clientX - parseInt(this.offsetLeft);

            sessionStorage.setItem("pickedTile", this.id);

            window.addEventListener("mousemove", moveTile, true);
            window.addEventListener("touchmove", moveTile, true);
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

        function openFeedbackApp()
        {

            if(flag == 0)
            {
                feedbackAppRunning.style.display = "inline";
                feedbackApp.style.display = "inline";
            }

        };

        window.onload = addWindowControlListeners();

        function addWindowControlListeners()
        {

            for(var i = 0; i < closeWindow.length; i++)
            {
                closeWindow[i].addEventListener("click", closeWindowClicked, false);
            }

            for(var i = 0; i < maximizeWindow.length; i++)
            {
                maximizeWindow[i].addEventListener("click", windowMaximizedClicked, false);
            }

            for(var i = 0; i < minimizeWindow.length; i++)
            {
                minimizeWindow[i].addEventListener("click", windowMinimizedClicked, false);
            }

        };

        function closeWindowClicked()
        {

            if(this.parentNode.parentNode.parentNode.id == "fileExplorerApp")
            {
                fileExplorerAppRunning.style.display = "none";
            }

            if(this.parentNode.parentNode.parentNode.id == "settingsApp")
            {
                settingsAppRunning.style.display = "none";
            }

            if(this.parentNode.parentNode.parentNode.id == "feedbackApp")
            {
                feedbackAppRunning.style.display = "none";
            }

            document.getElementById(this.parentNode.parentNode.parentNode.id).style.display = "none";

        };

        function windowMaximizedClicked()
        {
            windowIsMaximized = true;

            document.getElementById(this.parentNode.parentNode.parentNode.id).style.left = "0%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.top = "0%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.width = "100%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.height = "93%";

            this.removeEventListener("click", windowMaximizedClicked, false);
            this.addEventListener("click", windowRestored, false);
        };

        function windowRestored()
        {
            windowIsMaximized = false;

            document.getElementById(this.parentNode.parentNode.parentNode.id).style.left = "15%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.top = "25%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.width = "75%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.height = "50%";

            this.removeEventListener("click", windowRestored, false);
            this.addEventListener("click", windowMaximizedClicked, false);
        };

        function windowMinimizedClicked()
        {
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.display = "none";
        };

        window.onload = addTitleBarListeners();

        var offX;
        var offY;

        function addTitleBarListeners()
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

        window.onload = addWindowBorderListeners();

        function addWindowBorderListeners()
        {

            for(var i = 0; i < topBorder.length; i++)
            {
                topBorder[i].addEventListener("mousedown", topBorderMouseDown, false);
            }

            for(var i = 0; i < bottomBorder.length; i++)
            {
                bottomBorder[i].addEventListener("mousedown", bottomBorderMouseDown, false);
            }

            for(var i = 0; i < leftBorder.length; i++)
            {
                leftBorder[i].addEventListener("mousedown", leftBorderMouseDown, false);
            }

            for(var i = 0; i < rightBorder.length; i++)
            {
                rightBorder[i].addEventListener("mousedown", rightBorderMouseDown, false);
            }

            window.addEventListener("mouseup", mouseUpOnBorders, false);
        };

        function mouseUpOnBorders()
        {
            window.removeEventListener("mousemove", resizeWindowOnTop, true);
            window.removeEventListener("mousemove", resizeWindowOnBottom, true);
            window.removeEventListener("mousemove", resizeWindowOnLeft, true);
            window.removeEventListener("mousemove", resizeWindowOnRight, true);
        };

        function topBorderMouseDown(event)
        {
            offsetY = event.clientY - parseInt(this.offsetTop);

            sessionStorage.setItem("pickedWindow", this.parentNode.id);

            window.addEventListener("mousemove", resizeWindowOnTop, true);
        };

        function bottomBorderMouseDown(event)
        {
            offsetY = event.clientY - parseInt(this.offsetTop);

            sessionStorage.setItem("pickedWindow", this.parentNode.id);

            window.addEventListener("mousemove", resizeWindowOnBottom, true);
        };

        function leftBorderMouseDown(event)
        {
            offsetX = event.clientX - parseInt(this.offsetLeft);

            sessionStorage.setItem("pickedWindow", this.parentNode.id);

            window.addEventListener("mousemove", resizeWindowOnLeft, true);
        };

        function rightBorderMouseDown(event)
        {
            offsetX = event.clientX - parseInt(this.offsetLeft);

            sessionStorage.setItem("pickedWindow", this.parentNode.id);

            window.addEventListener("mousemove", resizeWindowOnRight, true);
        };

        function resizeWindowOnTop(event)
        {
            document.getElementById(sessionStorage.pickedWindow).style.height = (event.clientY - offsetY) + "px";
        };

        function resizeWindowOnBottom(event)
        {
            document.getElementById(sessionStorage.pickedWindow).style.height = (event.clientY - offsetY) + "px";
        };

        function resizeWindowOnLeft(event)
        {
            document.getElementById(sessionStorage.pickedWindow).style.width = (event.clientX - offsetX) + "px";
        };

        function resizeWindowOnRight(event)
        {
            document.getElementById(sessionStorage.pickedWindow).style.width = (event.clientX - offsetX) + "px";
        };

        window.onload = addTaskbarListeners();

        function addTaskbarListeners()
        {
            settingsAppRunning.addEventListener("click", settingsAppRunningClicked, false);
            fileExplorerAppRunning.addEventListener("click", fileExplorerAppRunningClicked, false);
            feedbackAppRunning.addEventListener("click", feedbackAppRunningClicked, false);
        };

        function settingsAppRunningClicked()
        {
            settingsApp.style.display = "inline";
        };

        function fileExplorerAppRunningClicked()
        {
            fileExplorerApp.style.display = "inline";
        };

        function feedbackAppRunningClicked()
        {
            feedbackApp.style.display = "inline";
        }

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