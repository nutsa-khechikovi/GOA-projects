from turtle import *
#draw the house
#draw the lines
shape("turtle")
width(5)
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#draw the door
forward(80)
left(90)
forward(80)
right(90)
forward(40)
right(90)
forward(80)
#give the pen direction
penup()
goto(200,200)
pendown()
#draw the roof
right(135)
forward(150)
left(93)
forward(141)
#draw window 1
left(42)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
#draw window 2
penup()
goto(200,200)
pendown()
left(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)

penup()
goto(0,0)
pendown()
exitonclick()