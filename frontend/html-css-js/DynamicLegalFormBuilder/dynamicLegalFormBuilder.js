
    const formContainer = document.getElementById('form-container');
    const addTextBtn = document.getElementById('add-text');
    const addDropdownBtn = document.getElementById('add-dropdown');
    const addDateBtn = document.getElementById('add-date');
    const submitBtn = document.getElementById('submit-form');

    addTextBtn.addEventListener('click', () => {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'field';

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Enter legal term';
      input.required = true;
      fieldDiv.appendChild(input);

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => fieldDiv.remove();
      fieldDiv.appendChild(removeBtn);

      formContainer.appendChild(fieldDiv);
    });

    addDropdownBtn.addEventListener('click', () => {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'field';

      const select = document.createElement('select');
      select.required = true;
      ['Civil', 'Criminal', 'Corporate'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
      });
      fieldDiv.appendChild(select);

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => fieldDiv.remove();
      fieldDiv.appendChild(removeBtn);

      formContainer.appendChild(fieldDiv);
    });

    addDateBtn.addEventListener('click', () => {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'field';

      const dateInput = document.createElement('input');
      dateInput.type = 'date';
      dateInput.required = true;
      fieldDiv.appendChild(dateInput);

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => fieldDiv.remove();
      fieldDiv.appendChild(removeBtn);

      formContainer.appendChild(fieldDiv);
    });

    submitBtn.addEventListener('click', () => {
      const inputs = formContainer.querySelectorAll('input, select');
      let htmlContent = '<h2>Submitted Intake Form</h2><ul>';

      inputs.forEach(input => {
        const label = input.placeholder || input.name || input.type;
        htmlContent += `<li><strong>${label}:</strong> ${input.value}</li>`;
      });

      htmlContent += '</ul>';

      const newWindow = window.open('', '_blank');
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Intake Form</title></head>
        <body>${htmlContent}</body>
        </html>
      `);
      newWindow.document.close();
    });