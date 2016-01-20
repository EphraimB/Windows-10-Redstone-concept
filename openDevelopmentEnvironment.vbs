Dim oShell, oShellApplication

Set oShell = WScript.CreateObject("WScript.Shell")
Set oShellApplication = CreateObject("Shell.Application")

oShell.Run("notepad.exe index.html")

oShell.Run("notepad.exe css\style.css")
oShell.Run("notepad.exe css\xaml.css")
oShell.Run("notepad.exe css\3D.css")

oShell.Run("notepad.exe js\script.js")
oShell.Run("notepad.exe js\xaml.js")

oShell.Run("index.html")
oShell.Run("http://www.github.com")