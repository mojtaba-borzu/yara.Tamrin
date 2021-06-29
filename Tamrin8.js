let s= 3
let arr =[1,2,3,4,5,6]
for(let i = 0 ; i<3 ; i++){
arr.splice(0,0,arr.pop())
}
console.log(arr)

