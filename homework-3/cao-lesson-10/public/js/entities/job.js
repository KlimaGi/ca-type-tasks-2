import formatLine from '../helpers/format-line.js';
class Job {
    title;
    pay;
    static instanceCount = 0;
    id;
    finished = false;
    payed = false;
    dateFinished;
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        Job.instanceCount += 1;
        this.id = `Job-${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
    completeJob = () => {
        this.finished = true;
        this.dateFinished = new Date();
    };
    setJobPayed = () => {
        this.payed = true;
    };
    getPay = () => this.pay;
    isFinished = () => this.finished;
    isPayed = () => this.payed;
    toString = () => {
        const { id, title, finished, pay, dateFinished, payed, } = this;
        return formatLine(`id: ${id}`, 2)
            + formatLine(`title: ${title}`, 2)
            + formatLine(`pay: ${pay}`, 2)
            + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
            + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
            + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
    };
}
export default Job;
//# sourceMappingURL=job.js.map