Call, Apply, Bind difference

In this article, I will show you the difference between call, apply and bind in js. <br/>
Let's start from an example. <br/>

We have a function print and 2 objects with same property a <br/>
let obj = {<br/>
	a: 1<br/>
}<br/>
let obj2 = {<br/>
	a: 2<br/>
}<br/>
<br/>
function print(){<br/>
	console.log(this.a)<br/>
}<br/>

For example, we want to print property from our objects using the function print. <br/>

If now you call print function result will be undefined. Why is it happening? <br/>
In js, we have such a thing like a context. In plain English, the context is something that calls the function. We can get access to the context using the word this. <br/>

When we use this in print() we use global context. Global context knew nothing about property a and it returns undefined. <br/>
If we changed context that has a property for our function print, we would get another result (not undefined). <br/>
We can change context using methods call, apply and bind. <br/>

Let's start from call. <br/>
If we do next: <br/>
print.call(obj)<br/>
print.call(obj2) <br/>
We will get next results.<br/> 
// 1<br/>
// 2<br/>

The method call change context of our function and set obj like the context in the first case and obj2 like the context in the second case. <br/>

Apply is similar to call. The difference is with the way we send the arguments. <br/>
Let's create a new function. <br/>
<br/>
function print2(b, c){<br/>
	console.log(this.a * b - c)<br/>
} <br/>
If we used call for this we would do it next way: <br/>
print2.call(obj, 2, 1) - first argument is object (our context) and 2 other arguments are varibles. <br/>

Apply use array to send the arguments to the function: <br/>
print2.apply(obj, [2,1])<br/>
The result is the same.<br/>

When we use .call() or .apply() we modify the context and invoke the function immediately.<br/>
But in some cases, we have to modify the context now but call function later. In those cases, we can use bind. Bind returns a function that, when later executed, will have the correct context. <br/>

let print3 = print2.bind(obj)<br/>
print3(3,2)<br/>

In this example, we have created a new function print3. The context has been set as obj. And we call our new function later. Bind often is used in events. <br/>
