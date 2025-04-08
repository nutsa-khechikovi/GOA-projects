number = []
for i in range(10):
    num = int(input("enter your number: "))
    number.append(num)
    for num in number:
        if num % 2 == 0:
            print("even")
        else:
            print("odd")
