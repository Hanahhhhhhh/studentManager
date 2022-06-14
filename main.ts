import {ScoreList} from "./ScoreList";


const ll = new ScoreList()

ll.insertFirst("Tuan", 8)
ll.insertFirst("Ha", 9)
ll.insertFirst("Bao", 2)
ll.insertLast("Dong", 4)
ll.insertLast("Duy", 3)

console.log(ll.findByName("Ha"))

