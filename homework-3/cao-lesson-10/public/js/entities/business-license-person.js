import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';
class BuisnessLicencePerson extends Employee {
    jobs;
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this.jobs = jobs;
    }
    calcPay = () => {
        const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
        unpayedFinishedJobs.forEach((job) => job.setJobPayed());
        return calculatedPay;
    };
    toString() {
        const { jobs } = this;
        let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
export default BuisnessLicencePerson;
//# sourceMappingURL=business-license-person.js.map