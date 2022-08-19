"use strict";
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
    class Stack {
        static elementNotEmpty = (el) => el !== undefined;
        index;
        constructor() {
            this.index = -1;
        }
        get length() {
            return this.index + 1;
        }
        push(data) {
            this.index += 1;
            this[this.index] = data;
        }
        pop() {
            const lastElement = this[this.index];
            if (Stack.elementNotEmpty(lastElement)) {
                delete this[this.index];
                this.index -= 1;
                return lastElement;
            }
            return null;
        }
    }
    const numberStack = new Stack();
    const stringStack = new Stack();
    const numberArrStack = new Stack();
    console.group('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log('numberStack', numberStack);
        console.log('stringStack', stringStack);
        console.log('numberArrStack', numberArrStack);
    }
    console.groupEnd();
    console.group('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
    {
        numberStack.push(1);
        numberStack.push(4);
        numberStack.push(12);
        stringStack.push('Some');
        stringStack.push('text');
        stringStack.push('goes');
        stringStack.push('here');
        numberArrStack.push([1]);
        numberArrStack.push([12, 2]);
        numberArrStack.push([7, 9]);
        console.log('numberStack', numberStack);
        console.log('stringStack', stringStack);
        console.log('numberArrStack', numberArrStack);
    }
    console.groupEnd();
    console.group('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
    {
        console.log('numberStack', numberStack.pop());
        console.log('numberStack', numberStack.pop());
        console.log('numberStack', numberStack.pop());
        console.log('numberStack', numberStack.pop());
        console.log('numberStack', numberStack.pop());
        console.log('numberStack', numberStack);
        console.log('stringStack', stringStack.pop());
        console.log('stringStack', stringStack.pop());
        console.log('stringStack', stringStack.pop());
        console.log('stringStack', stringStack.pop());
        console.log('stringStack', stringStack.pop());
        console.log('stringStack', stringStack);
        const removeValue = numberArrStack.pop();
        console.log({ removeValue });
        console.log('numberArrStack', numberArrStack.pop());
        console.log('numberArrStack', numberArrStack.pop());
        console.log('numberArrStack', numberArrStack.pop());
        console.log('numberArrStack', numberArrStack.pop());
        console.log('numberArrStack', numberArrStack.pop());
        console.log('numberArrStack', numberArrStack);
    }
    console.groupEnd();
    console.group('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        console.log('numberStack.length', numberStack.length);
        numberStack.push(6);
        numberStack.push(7);
        console.log('numberStack.length', numberStack.length);
        numberStack.pop();
        console.log('numberStack.length', numberStack.length);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    class Queue {
    }
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map