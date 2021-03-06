var windowsTenLogo = document.getElementById("windowsTenLogo");
var bootingScreen = document.getElementById("bootingScreen");

var power = document.getElementsByClassName("power");
var powerMenu = document.getElementsByClassName("powerMenu");

var restart = document.getElementsByClassName("restart");
var lock = document.getElementsByClassName("lock");
var shutDown = document.getElementsByClassName("shutDown");

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

        window.onload = addLoginScreenListener();

        function addLoginScreenListener()
        {
            logonScreenId.addEventListener("contextmenu", logonScreenContextMenu, false);

            loginButton.addEventListener("click", desktop, false);
            loginButton.addEventListener("touchend", desktop, false);
        };

        function logonScreenContextMenu()
        {
            return false;
        };

        window.onload = addPowerListeners();

        function addPowerListeners()
        {

            for(var i = 0; i < power.length; i++)
            {
                power[i].addEventListener("click", powerToggleOn, false);
                power[i].addEventListener("touchend", powerToggleOn, false);
            }

            for(var j = 0; j < restart.length; j++)
            {
                restart[j].addEventListener("click", restartWindows, false);
                restart[j].addEventListener("touchend", restartWindows, false);
            }

            for(var l = 0; l < shutDown.length; l++)
            {
                shutDown[l].addEventListener("click", shutDownWindows, false);
                shutDown[l].addEventListener("touchend", shutDownWindows, false);
            }

        };

        function powerToggleOn()
        {

            for(var i = 0; i < powerMenu.length; i++)
            {
                powerMenu[i].style.display = "inline";
            }

            this.removeEventListener("click", powerToggleOn, false);
            this.removeEventListener("touchend", powerToggleOn, false);

            this.addEventListener("click", powerToggleOff, false);
            this.addEventListener("touchend", powerToggleOff, false);
        };

        function powerToggleOff()
        {

            for(var i = 0; i < powerMenu.length; i++)
            {
                powerMenu[i].style.display = "none";
            }

            this.removeEventListener("click", powerToggleOff, false);
            this.removeEventListener("touchend", powerToggleOff, false);

            this.addEventListener("click", powerToggleOn, false);
            this.addEventListener("touchend", powerToggleOn, false);
        };

        function restartWindows()
        {
            window.location.reload(true);
        };

        function shutDownWindows()
        {
            window.close();
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

        var backButton = document.getElementsByClassName("backButton");

        var appName = document.getElementsByClassName("appName");

        var settingsBackButton = document.getElementById("settingsBackButton");

        var threeDimension = document.getElementById("threeDimension");
        var threeDimensionStyleSheet = document.createElement("link");

        var taskbar = document.getElementById("taskbar");

        var runningApp = document.getElementsByClassName("runningApp");

        var settingsAppRunning = document.getElementById("settingsAppRunning");

        var homePage = document.getElementById("homePage");
        var personalizationPage = document.getElementById("personalizationPage");

        var personalizationIcon = document.getElementById("personalization");

        var feedbackAppRunning = document.getElementById("feedbackAppRunning");

        var desktopContextMenu = document.getElementById("desktopContextMenu");
        var tileContextMenu = document.getElementById("tileContextMenu");

        var resizeMenu = document.getElementById("resizeMenu");
        var resizeSubMenu = document.getElementById("resizeSubMenu");

        var smallTile = document.getElementById("smallTile");
        var mediumTile = document.getElementById("mediumTile");
        var wideTile = document.getElementById("wideTile");
        var largeTile = document.getElementById("largeTile");

        var onlongtouch;
        var timer;
        var lockTimer;
        var touchduration = 800;

        logonScreenId.style.display = "none";
        desktop.style.display = "inline"

        window.onload = addDesktopListeners();

        function addDesktopListeners()
        {
            desktop.addEventListener("click", desktopClicked, false);
            desktop.addEventListener("contextmenu", showDesktopContextMenu, false);
        };

        function showDesktopContextMenu(event)
        {
            desktopContextMenu.style.left = event.clientX + "px";
            desktopContextMenu.style.top = event.clientY + "px";

            desktopContextMenu.style.display = "inline";

            desktop.addEventListener("touchstart", desktopTouchStart, false);

            event.preventDefault();
        };

        function desktopClicked()
        {
            desktopContextMenu.style.display = "none";
            tileContextMenu.style.display = "none";

            resizeSubMenu.style.display = "none";
        };

        function desktopTouchStart()
        {
            desktopContextMenu.style.display = "none";

            tileContextMenu.style.display = "none";

            resizeSubMenu.style.display = "none";

            desktop.removeEventListener("touchstart", desktopTouchStart, false);
        };

        window.onload = addPowerListeners();

        function addPowerListeners()
        {

            for(var i = 0; i < power.length; i++)
            {
                power[i].addEventListener("click", powerToggleOn, false);
                power[i].addEventListener("touchend", powerToggleOn, false);
            }

            for(var j = 0; j < restart.length; j++)
            {
                restart[j].addEventListener("click", restartWindows, false);
                restart[j].addEventListener("touchend", restartWindows, false);
            }

            for(var k = 0; k < lock.length; k++)
            {
                lock[k].addEventListener("click", lockWindows, false);
                lock[k].addEventListener("touchend", lockWindows, false);
            }

            for(var l = 0; l < shutDown.length; l++)
            {
                shutDown[l].addEventListener("click", shutDownWindows, false);
                shutDown[l].addEventListener("touchend", shutDownWindows, false);
            }

        };

        function powerToggleOn()
        {

            for(var i = 0; i < powerMenu.length; i++)
            {
                powerMenu[i].style.display = "inline";
            }

            this.removeEventListener("click", powerToggleOn, false);
            this.removeEventListener("touchend", powerToggleOn, false);

            this.addEventListener("click", powerToggleOff, false);
            this.addEventListener("touchend", powerToggleOff, false);
        };

        function powerToggleOff()
        {

            for(var i = 0; i < powerMenu.length; i++)
            {
                powerMenu[i].style.display = "none";
            }

            this.removeEventListener("click", powerToggleOff, false);
            this.removeEventListener("touchend", powerToggleOff, false);

            this.addEventListener("click", powerToggleOn, false);
            this.addEventListener("touchend", powerToggleOn, false);
        };

        function restartWindows()
        {
            window.location.reload(true);
        };

        function lockWindows()
        {
            desktop.style.display = "none";

            logonScreen();
        };

        function shutDownWindows()
        {
            window.close();
        };

        window.onload = addTileListeners();

        var offsetX;
        var offsetY;

        var firstTouchPoint;

        var touchPointX;
        var touchPointY;

        function addTileListeners()
        {
            var flag = 0;

            for(var i = 0; i < tile.length; i++)
            {
                tile[i].addEventListener("mousedown", mouseDownOnTile, false);
                tile[i].addEventListener("touchstart", touchOnTile, false);

                tile[i].addEventListener("contextmenu", showTileContextMenu, false);
            }

            fileExplorerTile.addEventListener("click", openFileExplorerApp, false);
            fileExplorerTile.addEventListener("touchend", openFileExplorerApp, false);

            settingsTile.addEventListener("click", openSettingsApp, false);
            settingsTile.addEventListener("touchend", openSettingsApp, false);

            feedbackTile.addEventListener("click", openFeedbackApp, false);
            feedbackTile.addEventListener("touchend", openFeedbackApp, false);

            window.addEventListener("mouseup", mouseUpOnTile, false);
            window.addEventListener("touchend", touchUpOnTile, false);
        };

        function showTileContextMenu(event)
        {
            tileContextMenu.style.left = event.clientX + "px";

            sessionStorage.setItem("tileContextMenuPositionX", event.clientX);
            sessionStorage.setItem("tileContextMenuPositionY", event.clientY);

            tileContextMenu.style.top = event.clientY + "px";

            tileContextMenu.style.display = "inline";

            sessionStorage.setItem("pickedTile", this.id);

            return false;
        };

        resizeMenu.onmouseover = function()
        {
            resizeSubMenu.style.left = parseInt(sessionStorage.tileContextMenuPositionX) + parseInt(tileContextMenu.clientWidth) + "px";
            resizeSubMenu.style.top = sessionStorage.tileContextMenuPositionY + "px";

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

        function mouseUpOnTile(event)
        {
            window.removeEventListener("mousemove", moveTile, true);
        };

        function touchUpOnTile(event)
        {
            window.removeEventListener("touchmove", touchMoveTile, true);

            event.preventDefault();
        };

        function mouseDownOnTile(event)
        {
            flag = 0;

            offsetY = event.clientY - parseInt(this.offsetTop);
            offsetX = event.clientX - parseInt(this.offsetLeft);

            sessionStorage.setItem("pickedTile", this.id);

            window.addEventListener("mousemove", moveTile, true);
        };

        function touchOnTile(event)
        {
            flag = 0;

            firstTouchPoint = event.changedTouches[0];

            touchPointX = parseInt(firstTouchPoint.clientX);
            touchPointY = parseInt(firstTouchPoint.clientY);

            offsetY = parseInt(this.offsetTop);
            offsetX = parseInt(this.offsetLeft);

            sessionStorage.setItem("touchedTile", this.id);

            window.addEventListener("touchmove", touchMoveTile, true);

            event.preventDefault();
        };

        function moveTile(event)
        {
            flag = 1;

            document.getElementById(sessionStorage.pickedTile).style.top = (event.clientY - offsetY) + "px";
            document.getElementById(sessionStorage.pickedTile).style.left = (event.clientX - offsetX) + "px";
        };

        function touchMoveTile(event)
        {
            flag = 1;

            firstTouchPoint = event.changedTouches[0];

            document.getElementById(sessionStorage.touchedTile).style.top = offsetY + parseInt(firstTouchPoint.clientY) - touchPointY + "px";
            document.getElementById(sessionStorage.touchedTile).style.left = offsetX + parseInt(firstTouchPoint.clientX) - touchPointX + "px";

            event.preventDefault();
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
                closeWindow[i].addEventListener("touchend", closeWindowClicked, false);
            }

            for(var i = 0; i < maximizeWindow.length; i++)
            {
                maximizeWindow[i].addEventListener("click", windowMaximizedClicked, false);
                maximizeWindow[i].addEventListener("touchend", windowMaximizedClicked, false);
            }

            for(var i = 0; i < minimizeWindow.length; i++)
            {
                minimizeWindow[i].addEventListener("click", windowMinimizedClicked, false);
                minimizeWindow[i].addEventListener("touchend", windowMinimizedClicked, false);
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
            this.removeEventListener("touchend", windowMaximizedClicked, false);

            this.addEventListener("click", windowRestored, false);
            this.addEventListener("touchend", windowRestored, false);
        };

        function windowRestored()
        {
            windowIsMaximized = false;

            document.getElementById(this.parentNode.parentNode.parentNode.id).style.left = "15%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.top = "25%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.width = "75%";
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.height = "50%";

            this.removeEventListener("click", windowRestored, false);
            this.removeEventListener("touchend", windowRestored, false);

            this.addEventListener("click", windowMaximizedClicked, false);
            this.addEventListener("touchend", windowMaximizedClicked, false);
        };

        function windowMinimizedClicked()
        {
            document.getElementById(this.parentNode.parentNode.parentNode.id).style.display = "none";
        };

        window.onload = addTitleBarListeners();

        var offX;
        var offY;

        var firstTouchPoint;

        var touchPointX;
        var touchPointY;

        function addTitleBarListeners()
        {

            for(var i = 0; i < titleBar.length; i++)
            {
                titleBar[i].addEventListener("mousedown", mouseDownOnTitleBar, false);
                titleBar[i].addEventListener("touchstart", touchDownOnTitleBar, false);
            }

            window.addEventListener("mouseup", mouseUpOnTitleBar, false);
            window.addEventListener("touchend", touchUpOnTitleBar, false);
        };

        function mouseUpOnTitleBar()
        {
            window.removeEventListener("mousemove", moveWindow, true);
        };

        function touchUpOnTitleBar(event)
        {
            window.removeEventListener("touchmove", touchMoveWindow, true);
        };

        function mouseDownOnTitleBar(event)
        {
            offY = event.clientY - parseInt(this.parentNode.offsetTop);
            offX = event.clientX - parseInt(this.parentNode.offsetLeft);

            sessionStorage.setItem("pickedWindow", this.parentNode.id);

            window.addEventListener("mousemove", moveWindow, true);
        };

        function touchDownOnTitleBar(event)
        {

            firstTouchPoint = event.changedTouches[0];

            offY = parseInt(this.parentNode.offsetTop);
            offX = parseInt(this.parentNode.offsetLeft);

            touchPointX = parseInt(firstTouchPoint.clientX);
            touchPointY = parseInt(firstTouchPoint.clientY);

            sessionStorage.setItem("touchedWindow", this.parentNode.id);

            window.addEventListener("touchmove", touchMoveWindow, true);

            event.preventDefault();
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

        function touchMoveWindow(event)
        {
            firstTouchPoint = event.changedTouches[0];

            document.getElementById(sessionStorage.touchedWindow).style.left = offX + parseInt(firstTouchPoint.clientX) - touchPointX + "px";
            document.getElementById(sessionStorage.touchedWindow).style.top = offY + parseInt(firstTouchPoint.clientY) - touchPointY + "px";
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
            settingsAppRunning.addEventListener("touchend", settingsAppRunningClicked, false);

            fileExplorerAppRunning.addEventListener("click", fileExplorerAppRunningClicked, false);
            fileExplorerAppRunning.addEventListener("touchend", fileExplorerAppRunningClicked, false);

            feedbackAppRunning.addEventListener("click", feedbackAppRunningClicked, false);
            feedbackAppRunning.addEventListener("touchend", feedbackAppRunningClicked, false);
        };

        function settingsAppRunningClicked()
        {
            settingsApp.style.display = "inline";
        };

        function openSettingsHomePage()
        {
            personalizationPage.style.display = "none";
            homePage.style.display = "inline";

            settingsBackButton.style.display = "none";

            for(var i = 0; i < appName.length; i++)
            {
                appName[i].style.left = "0%";
            }

        };

        function openPersonalizationPage()
        {
            personalizationPage.style.display = "inline";

            for(var i = 0; i < appName.length; i++)
            {
                appName[i].style.left = "3%";
            }

            settingsBackButton.style.display = "inline";

            settingsBackButton.onclick = function()
            {
                openSettingsHomePage();
            };

        };

        personalizationIcon.onclick = function()
        {
            homePage.style.display = "none";
            openPersonalizationPage();
        };

        function fileExplorerAppRunningClicked()
        {
            fileExplorerApp.style.display = "inline";
        };

        function feedbackAppRunningClicked()
        {
            feedbackApp.style.display = "inline";
        }

        window.onload = threeDimensionListener();

        function threeDimensionListener()
        {
            threeDimension.addEventListener("click", enableThreeDimension, false);
            threeDimension.addEventListener("touchend", enableThreeDimension, false);
        };

        function enableThreeDimension()
        {
            threeDimensionStyleSheet.setAttribute("rel", "stylesheet");
            threeDimensionStyleSheet.setAttribute("href", "css/3D.css");

            document.head.appendChild(threeDimensionStyleSheet);

            threeDimension.removeEventListener("click", enableThreeDimension, false);
            threeDimension.removeEventListener("touchend", enableThreeDimension, false);

            threeDimension.addEventListener("click", disableThreeDimension, false);
            threeDimension.addEventListener("touchend", disableThreeDimension, false);
        };

        function disableThreeDimension()
        {
            document.head.removeChild(threeDimensionStyleSheet);

            threeDimension.removeEventListener("click", disableThreeDimension, false);
            threeDimension.removeEventListener("touchend", disableThreeDimension, false);

            threeDimension.addEventListener("click", enableThreeDimension, false);
            threeDimension.addEventListener("touchend", enableThreeDimension, false);
        };

    };

}, 5000);