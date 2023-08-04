/** @jest-environment jsdom */

const { validarIdade } = require("./script.js")
test('teste de idade', function () {
    var resultado = validarIdade(10);
    expect(resultado).toBe(false);
})

test('teste de idade', function () {
    var resultado = validarIdade(19);
    expect(resultado).toBe(true);
})