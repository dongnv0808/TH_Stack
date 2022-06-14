"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
let stack = new stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
