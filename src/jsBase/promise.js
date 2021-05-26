// var p = new Promise((resolve, reject) => {
//   resolve(2)
// })
// console.log('start');
// p.then( function(){ 
//   p.then( function(){ 
//   console.log( "C" ); 
//   } ); 
//   console.log( "A" ); 
//  } ); 
//  p.then( function(){ 
//   console.log( "B" ); 
//  } ); 
// var p3 = new Promise( function(resolve,reject){ 
//   resolve( "B" ); 
//  } ); 
//  var p1 = new Promise( function(resolve,reject){ 
//   resolve( p3 ); 
//  } ); 
//  p2 = new Promise( function(resolve,reject){ 
//   resolve( "A" ); 
//  } ); 
//  p1.then( function(v){ 
//   console.log( v ); 
//  } ); 
//  p2.then( function(v){ 
//   console.log( v ); 
//  } );
// var p1 = new Promise((resolve, reject) => {
//   resolve(42)
// })
// var p2  = Promise.resolve(42)
// console.log("p1:", p1, "p2:", p2)
// var p1 = Promise.resolve(42)
// p1.then(() => {
//   // console.log("null.name:", a.name);
//   return 1;
// })
// .then(()=> {
//   console.log();
//   return 2;
// })
// .then((val) => {
//   console.log("then3 val:", val);
//   return 3;
// }, (err) => {
//   console.log("then3 err:", err);
//   return 6;
// })
// .then((val) => {
//   console.log("then4 val:", val);
// })
// p1.then(val => {
//   console.log("val:", val);
// })
// var p1 = Promise.reject(42)
// p1.then(val => {
//   console.log("val:", val)
// })
// .catch(err=> {
//   console.log("err:", err);
// })
var fulfilledTh = { 
  then: function(cb) { cb( 42 ); } 
 }; 
 var rejectedTh = { 
  then: function(cb,errCb) { 
  errCb( "Oops" ); 
  } 
 };
 var p1 = Promise.resolve( fulfilledTh )
 p1.then((res) => {
   console.log("res:", res);
 })