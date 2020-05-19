Call, Apply, Bind difference


Apply is similar to call. The difference is with the way we send the arguments. 
Let's create a new function. 

function print2(b, c){
	console.log(this.a * b - c)
} 
If we used call for this we would do it next way: 
print2.call(obj, 2, 1) - first argument is object (our context) and 2 other arguments are varibles. 

Apply use array to send the arguments to the function: 
print2.apply(obj, [2,1])
The result is the same.

When we use .call() or .apply() we modify the context and invoke the function immediately.
But in some cases, we have to modify the context now but call function later. In those cases, we can use bind. Bind returns a function that, when later executed, will have the correct context. 

let print3 = print2.bind(obj)
print3(3,2)

In this example, we have created a new function print3. The context has been set as obj. And we call our new function later. Bind often is used in events. 
