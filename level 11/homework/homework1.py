
for i in range(1, 10):
    num = int(input("guess the number: "))
    if num == i:
        print("you win")
    else:
        print("try again")
        num = int(input("guess the number: "))

