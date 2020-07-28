//Ex1 -
for (let i = 0; i < 255; i++) {
    console.log(i + ", " + String.fromCharCode(i));
}


//Ex2 -
let ascii = '';
for (let i = 33; i < 255; i++) {
    ascii += String.fromCharCode(i);
}

console.log(ascii);


//自己的
let allcode ="";
for(let i=33; i < 65536; i++){
    allcode += String.fromCharCode(i);
} 
console.log(allcode);


for(let j =33; j<65536; j++){
    console.log(j + " , " + String.fromCharCode(j));
}