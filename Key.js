let ID = 0;
export class Key {
    id;
    constructor() {
        this.id = `${ID++}`;
    }
    toString() {
        return this.id;
    }
}
