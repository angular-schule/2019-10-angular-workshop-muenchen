export class Customer {

    constructor(public id: number) {}

    fooBar(): string {
        setTimeout(() => {
            console.log('ID ist ' + this.id);
        }, 2000);
        
        return '';
    }

    bar(foo: string | number) {
        if (typeof foo === 'string') {
            return '';
        }

        return foo; // ist number
    }
}