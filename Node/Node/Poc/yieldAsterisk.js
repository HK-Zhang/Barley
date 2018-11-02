function* g1() {
    yield 2;
    yield 3;
    yield 4;
  }
  
  function* g2() {
    yield 1;
    yield* g1();
    yield 5;
  }
  
  var iterator = g2();
  
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: 4, done: false }
  console.log(iterator.next()); // { value: 5, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }  


  function* g4() {
    yield* [1, 2, 3];
    return "foo";
  }
  
  var result;
  
  function* g5() {
    result = yield* g4();
  }
  
  var iterator = g5();
  
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }, 
                                // 此时 g4() 返回了 { value: "foo", done: true }
  
  console.log(result);          // "foo"