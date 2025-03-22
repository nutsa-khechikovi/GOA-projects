import random
rendom_num = random.randint(1, 10)
num = int(input("guess the number: "))
while True:
    if num== rendom_num:
        print("you win")
    else:
        print("try again")
        num = int(input("guess the number: "))

        print("try again")
        num = int(input("guess the number: "))