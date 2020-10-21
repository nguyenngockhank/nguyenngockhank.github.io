import "strings"

// Return the minimum number of characters to make the password strong
func minimumNumber(password string) int {
    lower_case := "abcdefghijklmnopqrstuvwxyz"
    upper_case := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    special_characters := "!@#$%^&*()-+"
    numbers := "0123456789"

    var hasLower, hasUpper, hasSpecial, hasNumber bool; // false in default

    var n = len(password)
    for i := 0; i < n; i++ {
		ch := password[i:i+1] // substring

        if (!hasLower && strings.Index(lower_case, ch) >= 0) {
            hasLower = true
		}
        if (!hasUpper && strings.Index(upper_case, ch) >= 0) {
            hasUpper = true
        }
        if (!hasSpecial && strings.Index(special_characters, ch) >= 0) {
            hasSpecial = true
        }
        if (!hasNumber && strings.Index(numbers, ch) >= 0) {
            hasNumber = true
        }
		if (hasLower && hasUpper && hasSpecial && hasNumber) {
			break;
		}
	}
    
	var err = 0
    if (!hasLower) {
        err++
    }
    if (!hasUpper) {
        err++
    }
    if (!hasSpecial) {
        err++
    }
    if (!hasNumber) {
        err++
	}
	
    // dont need to add more chars 
    if (n > 6) {
        return err
	}
    var numLackChar = 6 - n;
	// no ternary operator 
	if numLackChar >= err {
		return numLackChar
	}
    return  err
}

