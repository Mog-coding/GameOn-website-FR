function testAllInput() {
    return [false, true, true]
}

function isFalseInput() {
    return testAllInput().every(function (element) {
        if (Boolean(element) === false) {
            return false;
        } else {
            return true;
        }
    }
    )
}

console.log(isFalseInput());