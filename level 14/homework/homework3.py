numbers = []
for i in range(10):
    number = int(input("enter your word:"))
    numbers.append(i)
for i in numbers:
    if i % 2 == 0:
        print(f"{i} is even")
    else:
        print(f"{i} is odd")
