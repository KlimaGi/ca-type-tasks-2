/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui
  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias turėti savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutini mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null
  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c
    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.
  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d
    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.
  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓
type ForEachCallback<T> = (value: T) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
class ListNode<T> {
  constructor(
    public data: T,
    public next: ListNode<T> | null = null
  ) { }
};

// 1.
class List<Type> {
  // 2.
  private head: ListNode<Type> | null;
  private tail: ListNode<Type> | null;

  // 2.
  constructor(data?: Type) {
    if (data !== undefined) {
      this.head = new ListNode(data);
      this.tail = this.head;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  // 3.
  public unshift = (data: Type): void => {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  // 4.
  public push = (data: Type): void => {
    const newNode = new ListNode(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  // 5.
  public forEach = (callback: ForEachCallback<Type>): void => {
    if (this.head === null) return;

    let currentNode: ListNode<Type> = this.head;

    while (true) {
      if (currentNode.next === null) break;
      callback(currentNode.data);
      currentNode = currentNode.next;
    }
  };
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
// 2. |  3. |  5.
const stringList: List<string> = new List();
const numberList: List<number> = new List(5);

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
  const stringNode1: ListNode<string> = { data: 'step', next: null };
  const stringNode2: ListNode<string> = { data: 'forward', next: stringNode1 };
  console.log('stringNode1', stringNode1);
  console.log('stringNode2', stringNode2);
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
  console.log('empty string list', stringList);

  console.log('number list', numberList);
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
  console.log('string list', stringList);
  console.log('pridedamas 1', 'pirmas');
  stringList.unshift('pirmas');
  console.log('sarasas po pridejimo', { ...stringList });

  console.log('pridedamas 2', 'antras');
  stringList.unshift('antras');
  console.log('sarasas po pridejimo', { ...stringList });

  console.log('pridedamas 3', 'trecias');
  stringList.unshift('trecias');
  console.log('sarasas po pridejimo', { ...stringList });
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
  console.log('number list', numberList);

  console.log('pridedamas mazgas 1', 1);
  numberList.push(1);
  console.log('sarasas po pridejimo', { ...numberList });

  console.log('pridedamas mazgas 2', 2);
  numberList.push(2);
  console.log('sarasas po pridejimo', { ...numberList });

  console.log('pridedamas mazgas 3', 3);
  numberList.push(3);
  console.log('sarasas po pridejimo', { ...numberList });
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  console.log('string saraso spausdinimas');
  stringList.forEach((str) => console.log(str));

  const stringArr: string[] = [];
  const putInStringArr = (x: number): void => {
    stringArr.push(String(x));
  };

  console.log('number saraso spausdinimas');
  numberList.forEach(putInStringArr);
  const numberListStringRepresentation: string = stringArr.join(' -> ');
  console.log(numberListStringRepresentation);
}
console.groupEnd();