def clear_list():
    list = [1, 2, 3, 4, 5, 6, 7]
    user_input = input("do u you want to remove the list?(yes or no): ")
    if user_input == "Yes":
        list.clear()
        print("clear")
    else:
        print("unclear")
