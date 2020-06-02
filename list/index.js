/*
* JavaScript实现单链表
* 时间: 2020/6/2
* author: joinmouse
*/
class Update {
    constructor(payload, nextUpdate) {
        this.payload = payload
        this.nextUpdate = nextUpdate  // 指向下一个节点的指针
    }
}

class UpdateQueue {
    constructor() {
        this.baseState = null   // 原状态
        this.firstUpdate = null  // 第一个更新
        this.lastUpdate = null   // 最后一个更新
    }
    enqueueUpdate(update) {
        if(this.firstUpdate = null) {
            this.firstUpdate = update
            this.lastUpdate = update
        }else {
            this.lastUpdate.nextUpdate = update  // 让上一个节点的nextUpdate指向自己
            this.lastUpdate = update  // 让最后一个节点指向自己
        }
    }
    // 获取老状态，然后遍历链表，进行更新
    forceUpdate() {
        // let cureentState = 
    }
}
