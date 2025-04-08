names = []
for i in range(5):
    name = input("enter name:")
    names.append(name)
for name in names:
    if len(name)>5:
        print(f"{name} consists of more than five letters")