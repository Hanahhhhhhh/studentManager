import {ScoreList} from "./ScoreList";

export class StudentData {
    name : string;
    score: number;
    next : any;


    constructor(name: string, score: number, next: any) {
        this.name = name;
        this.score = score;
        this.next = next;
    }

    readData() {
        return {name: this.name , Score: this.score}
    }

}
