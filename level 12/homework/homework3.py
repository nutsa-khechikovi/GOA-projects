number = int(input("enter your number: "))
count = 0
for divider in range (2,(number // 2) + 1):
    if number % divider == 0:
        count = count + 1
if count == 0:
    print("number is prime")
else:
    print("number is not prime")

