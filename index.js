/**
    Return a plural word according to the count parameter
 */
export function pluralize(word, count) {
    if(typeof word !== 'string') {
        return word;
    }

    return count > 1 ? word . "s" : word;
}

/**
    Return a word with the first letter capitalized
 */
export function capitalize(word) {
    if(typeof word !== 'string') {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}


/**
    Check if an element is in an array if you need to support IE
    We can use the includes Array.prototype.includes  for modern browsers
 */
export function in_array(element, arr) {
    return arr.indexOf(value) > -1;
}
