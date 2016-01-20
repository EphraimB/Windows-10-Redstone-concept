Dim oShell

Set oShell = CreateObject("WScript.Shell")

If oShell.AppActivate("index - Notepad") Then
oShell.AppActivate("index - Notepad")
oShell.SendKeys "%{F4}"
End If

WScript.Sleep 500

If oShell.AppActivate("xaml - Notepad") Then
oShell.AppActivate("xaml - Notepad")
oShell.SendKeys "%{F4}"
End If

WScript.Sleep 500

If oShell.AppActivate("xaml - Notepad") Then
oShell.AppActivate("xaml - Notepad")
oShell.SendKeys "%{F4}"
End If

WScript.Sleep 500

If oShell.AppActivate("style - Notepad") Then
oShell.AppActivate("style - Notepad")
oShell.SendKeys "%{F4}"
End If

WScript.Sleep 500

If oShell.AppActivate("script - Notepad") Then
oShell.AppActivate("script - Notepad")
oShell.SendKeys "%{F4}"
End If

WScript.Sleep 500

If oShell.AppActivate("3D - Notepad") Then
oShell.AppActivate("3D - Notepad")
oShell.SendKeys "%{F4}"
End If