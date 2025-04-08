def square_numbers(input_list):
    return [n ** 2 for n in input_list]
numbers = [1, 2, 3, 4, 5]
squared_numbers = square_numbers(numbers)
print (squared_numbers)