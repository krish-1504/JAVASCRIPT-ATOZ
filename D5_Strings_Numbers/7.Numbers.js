num = NaN
num = Infinity
num = -Infinity


num.toString();


let y = new Number(10);


y = BigInt(1234567890123456789012345)
// Arithmetic between a BigInt and a Number is not allowed


Number.isInteger(10) // true or false
Number.isSafeInteger(10);

//Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.


n = parseInt("10");
n = parseFloat("10");

n = Number.MAX_SAFE_INTEGER;
n = Number.MAX_VALUE;
n = Number.MIN_SAFE_INTEGER;
n = Number.MIN_VALUE;
n = Number.NaN;