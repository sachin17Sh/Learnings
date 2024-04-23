Dim strDesktopPath  ' It will specify the location where the index.html file will be saved
Dim strHTMLContent  ' The HTML content will be written here 
Dim objFSO          ' It allows interaction with the file system
Dim objFile         ' It will represent the file that will be created 

strHTMLContent = "<!DOCTYPE html>" & vbCrLf & _
                "<html>" & vbCrLf & _
                "<head>" & vbCrLf & _
                "<title>Index</title>" & vbCrLf & _
                "</head>" & vbCrLf & _
                "<body>" & vbCrLf & _
                "<h3>Sachin Sharma</h3>" & vbCrLf & _
                "</body>" & vbCrLf & _
                "</html>"

Set objFSO = CreateObject("Scripting.FileSystemObject")

' Get the path to the user's desktop folder using the SpecialFolders collection
Set objShell = CreateObject("WScript.Shell")
strDesktopPath = objShell.SpecialFolders("Desktop")   


' Check if the folder path exists, if not, create it
If Not objFSO.FolderExists(strDesktopPath) Then
    objFSO.CreateFolder(strDesktopPath)
End If

Set objFile = objFSO.CreateTextFile(objFSO.BuildPath(strDesktopPath, "index.html"), True)
objFile.Write strHTMLContent
objFile.Close
