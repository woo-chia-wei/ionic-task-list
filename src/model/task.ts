export class Task{

    constructor(title){
        this.title = title;
        this.isDone = false;
        this.isEdit = false;
    }

    id: number;
    title: string;
    isDone: boolean;
    isEdit: false;
}