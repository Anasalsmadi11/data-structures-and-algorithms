'use strict'
const Node= require('./Node')

class Stack{
    constructor(){
        this.top= null,
        this.size=0
    }
    isEmpty(){
        return this.top=== null
    }
    push(value){
        const newNode= new Node(value)
        newNode.next=this.top
        this.top= newNode
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return `sorry the stack is empty`
        }else{
            const temp = this.top
            // console.log("value1",this.top.value)
            this.top= this.top.next /// ordering matters
            // console.log("value2",this.top.next) /// the next here shouldnt be null cus the link between nodes will break if so
            temp.next=   null
            this.size--
            return temp.value
        }
    }
    peek(){
        if(this.isEmpty()){
            return `sorry can't peek the stack is empty`
        }else{
            return this.top.value
        }
    }
}

module.exports= Stack;