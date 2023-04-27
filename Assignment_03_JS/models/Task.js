'use strict';

class TaskTodo {
    id = 0;
    task = '';
    owner = '';
    isDone = false;

    //Properties
    get Id() {return this.id; }
    set Id(value){this.id = value;}

    get Task() {return this.task; }
    set Task(value){this.task = value;}

    get Owner() {return this.owner; }
    set Owner(value){this.owner = value;}

    get IsDone() {return this.isDone; }
    set IsDone(value){this.isDone = value;}

    //Constructor
    constructor (id ,task, owner, isDone){
        this.Id = id;
        this.Task = task;
        this.Owner = owner;
        this.IsDone = isDone;
    }
}