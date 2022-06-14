"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentData = void 0;
class StudentData {
    constructor(name, score, next) {
        this.name = name;
        this.score = score;
        this.next = next;
    }
    readData() {
        return { name: this.name, Score: this.score };
    }
}
exports.StudentData = StudentData;
