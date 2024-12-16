function selectOption(option) {
    // Remove "selected" class from all options
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

    // Add "selected" class to the clicked option
    option.classList.add('selected');

    // Set the radio button as checked
    option.querySelector('input[type="radio"]').checked = true;
}
