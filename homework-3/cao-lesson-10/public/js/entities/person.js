class Person {
    id;
    name;
    surname;
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonInfo = () => `${this.name} ${this.surname}, asm. kodas: ${this.id}:\n`;
}
export default Person;
//# sourceMappingURL=person.js.map