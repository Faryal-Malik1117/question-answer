let a = 5;

let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
console.log("exp1:", exp1);

let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
console.log("exp2:", exp2);

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
console.log("exp3:", exp3);

let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
console.log("exp4:", exp4);

let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
console.log("exp5:", exp5);

let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
console.log("exp6:", exp6);

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
console.log("exp7:", exp7);

let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
console.log("exp8:", exp8);

let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
console.log("exp9:", exp9);

let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
console.log("exp10:", exp10);
let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
console.log("exp11:", exp11);

let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
console.log("exp12:", exp12);

let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
console.log("exp13:", exp13);

let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
console.log("exp14:", exp14);

let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
console.log("exp15:", exp15);

let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
console.log("exp16:", exp16);

let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
console.log("exp17:", exp17);

let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
console.log("exp18:", exp18);

let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
console.log("exp19:", exp19);

//let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "




