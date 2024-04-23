' If statement 
dim X, y
 x= 20 
 y= 70
 if (x>15 and y<100) then  

 msgbox("ture")
 else msgbox("false")
 end if 


' ///if elseif
Dim z 
z = inputbox("please enter any number")

If (z >0 ) Then
    MsgBox "z is a positive integer  "
ElseIf z < 0 Then
    MsgBox "z is negative interger " 
Else
    MsgBox "Not a valid number"
End If


''anoter example dim a 
a= inputbox("Please enter the marks here ")
If a<=100 and a>=90 then 
msgbox(A)
else if (a<90 and a>75)THEN 
msgbox(B)
else if (a<=75 and a>55) then 
msgbox(C)
else if (a<=55 and a>33) then 
msgbox(D)
else 
msgbox("Fail")
end if 

' TO find given number is even  or odd
dim Number
Number=inputbox("Enter any number")
if (Number mod 2=0) then 
msgbox(Number &" is even number")
else 
msgbox( Number &" is odd number")
end if 


'checking given day is weekday or weekend
Dim day
day = "sunday"

Select Case day
    Case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        MsgBox "It's a weekday."
    Case "Saturday", "Sunday"
        MsgBox "It's a weekend."
    Case Else
        MsgBox "Invalid day."
End Select

'' another example 
 dim y = 10
 select case y
 case 1 
 msgbox("A is negative number") 
 case 2 
 msgbox("a is multiple of 3")
 case 3
 msgbox (" a is odd number ")
 case 4
 msgbox("a is even number")
 case else 
 msgbox("a is not a natural number")
 end select





''practice
 const Name= "Hello"
const numbers= 65
const p= #18/01/2024#
const q = #2:50PM#

msgbox(Name)
msgbox(numbers)
msgbox(p)
msgbox(q)
