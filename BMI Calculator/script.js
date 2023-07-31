function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerText = 'Please enter valid height and weight.';
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const roundedBMI = bmi.toFixed(2);

    let interpretation = '';
    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi < 24.9) {
        interpretation = 'Normal (Healthy Weight)';
    } else if (bmi < 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obese';
    }

    resultDiv.innerText = `Your BMI: ${roundedBMI}\nInterpretation: ${interpretation}`;
}
