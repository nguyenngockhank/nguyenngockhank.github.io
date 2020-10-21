function minimumNumber(password) {
    // Return the minimum number of characters to make the password strong
    let err = 0
  
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    const numbers = "0123456789"

    let hasLower = false, hasUpper = false, hasSpecial = false, hasNumber = false;

    let n = password.length;
    for(let i = 0; i < n; ++i) {
        let ch = password.charAt(i);
        if (!hasLower && lower_case.indexOf(ch) >= 0) {
            hasLower = true
        }
        if (!hasUpper && upper_case.indexOf(ch) >= 0) {
            hasUpper = true
        }
        if (!hasSpecial && special_characters.indexOf(ch) >= 0) {
            hasSpecial = true
        }
        if (!hasNumber && numbers.indexOf(ch) >= 0) {
            hasNumber = true
        }

        if (hasLower && hasUpper && hasSpecial && hasNumber) break;
    }

    if (!hasLower) {
        ++err 
    }

    if (!hasUpper) {
        ++err 
    }

    if (!hasSpecial) {
        ++err 
    }

    if (!hasNumber) {
        ++err 
    }

    // dont need to add more chars 
    if (n > 6) {
        return err
    }

    let numLackChar = 6 - n;
    return numLackChar >= err ? numLackChar : err
}
