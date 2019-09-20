const fillWord = require('./index');
describe('paddinleft',()=>{
    test('Cuando introduzco HOLA y la longitud maxima es 6 y introduczco X devuelve XXHOLA',
    ()=>{
        const result=fillWord ('HOLA',6,'X');
        expect(result).toBe('XXHOLA');
    });
    test('Cuando introduzco HOLA y la longitud maxima es 6 introduczco A devuelve AAHOLA',
    ()=>{
        const result=fillWord ('HOLA',6,'A');
        expect(result).toBe('AAHOLA');
    });
    test('Cuando introduzco ee y la longitud maxima es 4introduczco a  devuelve aaee',
    ()=>{
        const result=fillWord ('ee',4,'a');
        expect(result).toBe('aaee');
    });
    test('Cuando introduzco XXXX y la longitud maxima es 6 introduczco X devuelve XXXXXX',
    ()=>{
        const result=fillWord ('XXXX',6,'X');
        expect(result).toBe('XXXXXX');
    });
    test('Cuando introduzco hola mi amigo y la longitud maxima es 6 introduczco X devuelve hola mi amigo',
    ()=>{
        const result=fillWord ('hola mi amigo',6,'X');
        expect(result).toBe('hola mi amigo');
    });
    test('Cuando introduzco xxxx mi amigo y la longitud maxima es 0 introduczco xxxx devuelve hola mi amigo',
    ()=>{
        const result=fillWord ('xxxx',0,'x');
        expect(result).toBe('xxxx');
    });
    test('Cuando introduzco xxxx mi amigo y la longitud maxima es 5 introduczco aa devuelve hola mi amigo',
    ()=>{
        const result=fillWord ('xxxx',5,'aa');
        expect(result).toBe('axxxx');
    });

})
