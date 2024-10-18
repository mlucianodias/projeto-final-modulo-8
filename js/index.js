        const form = document.getElementById('formFilme');
        const submitBtn = document.getElementById('submitBtn');
        const termo = document.getElementById('termo');
        const inputs = form.querySelectorAll('input[required], select[required]');

        // Habilita o botão de enviar quando o termo for selecionado
        termo.addEventListener('change', function() {
            submitBtn.disabled = !termo.checked;
        });

        // Valida o formulário ao enviar
        form.addEventListener('submit', function(event) {
            let isValid = true;

            inputs.forEach(input => {
                const errorMessage = input.nextElementSibling;
                
                if (!input.checkValidity()) {
                    isValid = false;
                    input.classList.add('invalid');
                    errorMessage.style.display = 'block';
                } else {
                    input.classList.remove('invalid');
                    errorMessage.style.display = 'none';
                }
            });

            if (!isValid) {
                event.preventDefault(); // Impede o envio do formulário
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        });