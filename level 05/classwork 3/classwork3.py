age = int(input("enter your age: "))
name = input("enter ur name: ")
if age > 18:
    print(name + " " + "you can enter club")
elif age <= 18:
    print(name + " " + "you cant enter club")