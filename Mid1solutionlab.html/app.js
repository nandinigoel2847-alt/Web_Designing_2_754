 function calculate() {
         
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);

        
            if (isNaN(n1) || isNaN(n2)) {
                alert("Please enter valid numbers");
                return;
            }

        
            const sum = n1 + n2;
            const diff = n1 - n2;
            const prod = n1 * n2;

            document.getElementById('sumText').innerText = sum;
            document.getElementById('diffText').innerText = diff;
            document.getElementById('prodText').innerText = prod;
            document.getElementById('results').classList.remove('d-none');
        }