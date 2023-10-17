//1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((cut,index) => {
//     if (cut % 2 === 0) {
//         console.log( `${cut} ${index}`);
//     }
// });



//2
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr = arr.concat(arr2);

// console.log(newArr);  




//5
// const arr = [ 1, 3 ,5 ,2 , 4, 1, 4,56 ,23, 2, 1,3]

// const bir = arr.filter(value => value === 1);

// console.log(bir); 


//6
// const arr = [ 1, 3 ,5 ,2 , 4, 1, 4,56 ,23, 2, 1,3]

// const bir = arr.filter(value => !(value === 1));

// console.log(bir);  






//2
// const arr = [2, 4, 1, 3, 4, 1, 7, 9];

// const newArr = arr.slice(0, 4);

// console.log(newArr);  



// const arr = ["salam","1" , "2"] 
// arr.pop();
// console.log(arr);

// const arr = ["salam","1" , "2"] 
// arr.push("auye");
// console.log(arr);

// const arr = ["salam","1" , "2"] 
// arr.shift()
// console.log(arr);

// const arr = ["salam","1" , "2"] 
// arr.unshift("asa")
// console.log(arr);





// let arr1 = [1,12,3];
// let arr2 = arr1;
// arr2.push('d');
// console.log(arr2);




// let arr1 = [1, 2, 3];
// let arr2 = arr1.slice();
// console.log(arr2);


// const originalArray = [1, 2, 3, 4, 5]; 
// const copiedArray = [...originalArray]; 
// originalArray.push("d")
// console.log(copiedArray);



// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//     }
// }

// console.log("", biggest);


// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < biggest) {
//         biggest = arr[i];
//     }
// }

// console.log("", biggest);




//28
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 ]

// for (let i = 0; i < arr.length; i++) {
//     if (i%2===0) {
//         console.log(arr[i]);
//     }

// }

// arr.forEach((element,i) => i%2===0 ? console.log(arr[i]) : null 
// );


//29
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 ]

// for (let i = 0; i < arr.length; i++) {
//     if (i%2!==0) {
//         console.log(arr[i]);
//     }

// }

// array.forEach((element,i) => i%2===1 ? console.log(arr[i]) : null);


// //26
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 ]

// arr.forEach((cut,index) => {
//     if (cut % 2 === 0) {
//         console.log( ` ${index}`);
//     }
// });


//27
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 ]

// arr.forEach((cut,index) => {
//     if (cut%2!==0) {
//         console.log(`${index}`);

//     }

// });


//28
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 ]

// for (let i = 0; i < arr.length; i++) {
//     if (i%2!==0) {
//         console.log(arr[i]);
//     }

// }


//30

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let biggest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//     }
// }

// console.log(biggest);

// arr.forEach((element,i) =>arr[i]>biggest ? biggest = arr[i] : null );
// console.log(biggest);


//31
// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < biggest) {
//         biggest = arr[i];
//     }
// }

// console.log("", biggest);

// arr.forEach((element,i) =>arr[i]<biggest ? biggest = arr[i] : null );
// console.log(biggest);

//32


// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// let biggest = arr;
// arr.forEach((cut,) => {
//     if (cut % 2 == 0 && arr > biggest) {
//         biggest = arr[i]
//         console.log(`${cut}`);



//     }

// });


// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];



// console.log(Math.max(...arr.filter(num => num % 2 === 0)));








//32

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0 && arr[i] > biggest) {
//         biggest = arr[i];
//
//     }
// }

// console.log( biggest);


//33
// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0 && arr[i] < biggest) {
//         biggest = arr[i];
//
//     }
// }

// console.log( biggest);


// console.log(Math.min(...arr.filter(item => item%2===0)));



//34
// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0 && arr[i] > biggest) {
//         biggest = arr[i];
//     }
// }

// console.log( biggest);

// console.log(Math.min(...arr.filter(item => item%2!==0)));

//35
// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0 && arr[i] < biggest) {
//         biggest = arr[i];
//     }
// }

// console.log( biggest);

// console.log(Math.max(...arr.filter(item =>item%2!==0)));

//36
// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let minI = ""
// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//         minI = i
//     }
// }

// console.log( minI );

// console.log(arr.indexOf(Math.max(...arr)));

//38

// let arr = [3, 1, 4, 1, 5, 9,9,9, 2, 6, 5, 3, 5];
// let count = 0
// let biggest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//     }
//     else if (arr[i] === biggest) {
//         count++;
//     }
// }

// console.log( `${biggest} ${count}`);

// console.log(Math.max(...arr.filter));



// let arr = [3, 1, 4, 1, 5, 9,9,9, 2, 6, 5, 3, 5];
// let count = 0
// let max = Math.max(...arr)
// arr.forEach(element => element === max ? count++ : null);
// console.log(count);



//39

// let arr = [3, 1, 4, 1, 5, 9, 9, 9, 2, 6, 5, 3, 5, 1];
// let count = 0

// let min = Math.min(...arr)
// console.log(min);
// arr.forEach(element => element === min ? count++ : null);
// console.log(count);



//40


// let arr = [3, 1, 4, 1, 5, 9, 9, 9, 2, 6, 5, 3, 5, 1];
// let count = 0

// let max = Math.max(...arr)
// console.log(max);
// let indexOfMax = arr.indexOf(max);
// temp = arr[0]
// arr[0] = arr[indexOfMax]
// arr[indexOfMax] = temp 
// console.log(arr);


//41
// let arr = [3, 1, 4, 1, 5, 9, 9, 9, 2, 6, 5, 3, 5, 1];


// let min = Math.min(...arr)
// console.log(min);
// let minOfIndex = arr.indexOf(min)
// temp = arr[0]
// arr[0] = arr[minOfIndex]
// arr[minOfIndex] = temp

// console.log(arr);


//42
// let arr = [3, 1, 9];

// let min = Math.min(...arr)
// let max = Math.max(...arr)

// let indexOfMax = arr.indexOf(max);
// let indexOfMin = arr.indexOf(min);

// temp = arr[indexOfMax]
// arr[indexOfMax] = arr[indexOfMin]
// arr[indexOfMin] = temp
// console.log(arr);


//43
