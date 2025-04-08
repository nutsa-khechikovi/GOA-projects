def filter(word):
    vowels = "aeiouAEIOU"
    result = ""
    for char in word:
        if char in vowels:
            result += char
    return result
filter("nutsa")
print(filter)
