import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';
import calcMonthWorkDays from '../helpers/calc-month-work-days.js';
class WorkPerson extends Employee {
    hourPay;
    fullTimeEquivalent;
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay = () => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
    toString() {
        return `${this.getPersonInfo()
            + formatLine(`hour pay: ${this.hourPay}`, 1)
            + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
    }
}
export default WorkPerson;
//# sourceMappingURL=work-person.js.map