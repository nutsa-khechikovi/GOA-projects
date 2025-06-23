def sort_array(source_array):
    odd_numbers = []
    result = []
    index = 0
    
    for num in source_array:    #titoeul ricxvs vamowmebt
        if num % 2 != 0:    #tu ricxvi ar iyopa orze
            odd_numbers.append(num)   #emateba siashi
    
    odd_numbers.sort();     # iqmneba sia kentebis
    
    for num in source_array:
        if num % 2 != 0:   # tu kentia emateba siashi
            result.append(odd_numbers[index])   #emateba siashi
            index += 1    #gadavdivart shemdegze
        else:
            result.append(num)
    
    return result