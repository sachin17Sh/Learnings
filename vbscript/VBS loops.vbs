' //Foor loop
dim a 
a=5
for a=1to 5
' msgbox("Hello") 
next



' ///// For each 
dim game
game = array("cricket", "volleyball","hockey","Football")
dim mygames
for each item in game'
mygames=mygames&item&vbnewline
next
' msgbox(mygames)


' ////While loop

dim cards
cards = 5
while cards<=10
cards=cards+1
'msgbox("cards")
wend



' /////Do while
dim z
 z= 1
do while z<10
'msgbox("oya")
z=z+1
loop

'Dim c 
c = 15;

Do While (c < 10)
    c = c + 1
    MsgBox(c)
Loop