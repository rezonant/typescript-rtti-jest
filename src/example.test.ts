import 'reflect-metadata';
import { reflect } from 'typescript-rtti';

describe('example', () => {
    it('supports reflection', () => {
        class A {
            foo : number;
        }

        let reflClass = reflect(A);
        expect(reflClass.getProperty('foo').type.isClass(Number)).toBeTruthy();
    });
});