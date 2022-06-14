export class Stack<T>{
    container: T[] = [];
    constructor(){

    }
    peek(): T{
        return this.container[this.container.length-1];
    }
    push(data: T): void{
        this.container.push(data);
    }
    pop(){
        return this.container.pop();
    }
    size(): number{
        return this.container.length;
    }
}