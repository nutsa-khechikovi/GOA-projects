def filter_even_numbers(num_list):
    even_numbers = []
    for num in num_list:
        if num % 2 == 0:
            even_numbers.append(num)
    print(even_numbers)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = filter_even_numbers(numbers)
print(result)