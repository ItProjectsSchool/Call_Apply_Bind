let obj = {
  a: 1
}
let obj2 = {
  a: 2
}

function print(){
  console.log(this.a)
}

print()

print.call(obj)
print.call(obj2) 

function print2(b, c){
 console.log(this.a * b - c)
} 

print2.call(obj, 2, 1)
print2.apply(obj, [2,1])

let print3 = print2.bind(obj)
print3(3,2)

