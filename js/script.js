// script.js

function calculateType(type) {
    if (type === 'luas') {
        document.getElementById('luasForm').classList.remove('hidden');
        document.getElementById('kelilingForm').classList.add('hidden');
    } else if (type === 'keliling') {
        document.getElementById('kelilingForm').classList.remove('hidden');
        document.getElementById('luasForm').classList.add('hidden');
    }
}

function calculate(kind) {
    var resultElement;
    var formulaForm;

    if (kind === 'luas') {
        resultElement = document.getElementById('resultLuas');
        formulaForm = document.getElementById('luasTriangleForm');
    } else if (kind === 'keliling') {
        resultElement = document.getElementById('resultKeliling');
        formulaForm = document.getElementById('kelilingTriangleForm');
    }

    // Mendapatkan nilai dari formulir
    var value1 = parseFloat(document.getElementById('alasLuas').value);
    var value2 = parseFloat(document.getElementById('tinggiLuas').value);

    // Melakukan perhitungan berdasarkan jenis (luas atau keliling)
    var result;
    if (kind === 'luas') {
        result = 0.5 * value1 * value2;
        document.getElementById('luasFormulaAlas').textContent = value1;
        document.getElementById('luasFormulaTinggi').textContent = value2;
    } else if (kind === 'keliling') {
        var sisiA = parseFloat(document.getElementById('sisiA').value);
        var sisiB = parseFloat(document.getElementById('sisiB').value);
        var sisiC = parseFloat(document.getElementById('sisiC').value);

        result = sisiA + sisiB + sisiC;

        // Tampilkan nilai sisi pada rumus keliling
        document.getElementById('sisiAValue').textContent = sisiA;
        document.getElementById('sisiBValue').textContent = sisiB;
        document.getElementById('sisiCValue').textContent = sisiC;
    }

    // Menampilkan hasil
    resultElement.textContent = '' + result;
}

function resetForm(formId) {
    document.getElementById(formId).reset();
    document.getElementById('resultLuas').textContent = '';
    document.getElementById('resultKeliling').textContent = '';
    document.getElementById('luasFormulaAlas').textContent = '';
    document.getElementById('luasFormulaTinggi').textContent = '';
    document.getElementById('sisiAValue').textContent = '';
    document.getElementById('sisiBValue').textContent = '';
    document.getElementById('sisiCValue').textContent = '';
}
