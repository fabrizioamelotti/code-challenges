function licenseKeyFormatting(stringParam, k) {
    // 1. Remove all dashes & upper case
    const cleanedString = stringParam.replaceAll("-", "").toUpperCase();

    // 2. Calculate the length of the first group
    const firstGroupLength = cleanedString.length % k;
    const result = [];

    // 3. Add the first group (if it exists)
    if (firstGroupLength > 0) {
        result.push(cleanedString.slice(0, firstGroupLength));
    }

    // 4. Process the remaining characters
    for (let i = firstGroupLength; i < cleanedString.length; i += k) {
        result.push(cleanedString.slice(i, i + k));
    }

    // 5. Join all groups with a dash
    return result.join('-');
}

console.log('TESTING');
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // Output: "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); // Output: "2-5G-3J"
console.log(licenseKeyFormatting("1-22-333-4444-55555", 3)); // Output: "122-333-444-455-555"
