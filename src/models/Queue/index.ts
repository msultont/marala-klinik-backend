class Queue {
    private static QueuesDatabase: Array<number> = new Array<number>();
    private static currentQueue = 0;

    public static getAllQueues() {
        return this.QueuesDatabase;
    }

    public static getCurrentQueue() {
        return this.currentQueue;
    }

    public static getLastQueue() {
        if (this.QueuesDatabase.length === 0) return 0;
        else {
            const totalQueue = this.QueuesDatabase.length;
            return this.QueuesDatabase[totalQueue - 1];
        }
    }

    public static nextQueue() {
        this.currentQueue++;
    }

    public static addQueue() {
        if (this.getAllQueues().length === 0) this.QueuesDatabase.push(1);
        else this.QueuesDatabase.push(this.getLastQueue() + 1);
    }

    public static resetQueue() {
        this.QueuesDatabase = [];
        this.currentQueue = 0;
    }
}

export default Queue;
