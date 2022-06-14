import {StudentData} from "./StudentData";


export class ScoreList<T> {
    head: StudentData | null
    tail: StudentData | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    //insertFirst() để thêm một nút vào đầu danh sách.
    insertFirst(name: string ,score: number): void {
        this.head = new StudentData(name, score, this.head);
        this.size++
        if (!this.tail) this.tail = this.head;
    }

    //insertLast(): để thêm một học sinh vào cuối danh sách.
    insertLast(name: string, score: number): void {
        let currentStudent
        let student = new StudentData(name, score, null)
        this.size++;
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let currentStudent = new StudentData(name, score, null)
            if (this.tail){
                this.tail.next = currentStudent;
                this.tail = currentStudent
            }
        }

        //if we do no have tail at all.
        // currentStudent = this.head
        // while (currentStudent.next) {
        //     currentStudent = currentStudent.next
        // }
        // currentStudent.next = student;
    }

    //de hien thi danh sach
    showList(): StudentData[] {
        let listData = [];
        let currentStudent = this.head;

        while (currentStudent) {
            listData.push(currentStudent)
            console.log([currentStudent.name, currentStudent.score]);
            currentStudent = currentStudent.next
        }
        return listData
    }


    //để đếm xem trong danh sách có bao nhiêu sinh viên thi lại (điểm ≤ 5).
    totalStudentsFail(): number {
        let count = 0;
        let reExamineStudent = []
        let currentStudent = this.head

        while (currentStudent !== null) {
            if (currentStudent.score <= 5) {
                count++;
                reExamineStudent.push([currentStudent.name, currentStudent.score]);
            }
            currentStudent = currentStudent.next;
        }
        return count
    }

    //để hiển thị (các) sinh viên có điểm cao nhất.
    listStudentMaxScore():any{
        let currentStudent = this.head;
        let maxStudentScore = 0;
        let maxStudentData: (string | number)[] = []
        while(currentStudent !== null){
            if (currentStudent.score > maxStudentScore){
                maxStudentScore = currentStudent.score
                maxStudentData = [currentStudent.name, currentStudent.score]
            }
            currentStudent = currentStudent.next
        }
        return maxStudentData
    }

    //findByName() để tìm kiếm và hiển thị (các) sinh viên theo tên.
    findByName(studentName:any):any {
        let result = []
        let currentStudent = this.head;
        while(currentStudent !==null){
            if (currentStudent.name.toUpperCase() === studentName.toUpperCase()) {
                return result = [currentStudent.name, currentStudent.score]
            }
            currentStudent = currentStudent.next
        }
        return "Student name is not exist";
    }
}

