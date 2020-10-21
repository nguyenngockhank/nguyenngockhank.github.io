def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, number - 1):
        if number % i == 0: 
            return False
    return True


# usage
result = is_prime(10)