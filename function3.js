function test(x = 10) {
    console.log(x);
}

test();           // 10
test(undefined);  // 10
test(null);       // null
test(0);          // 0
test(false);      // false
test("");         // ""