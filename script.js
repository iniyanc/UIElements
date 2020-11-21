$('#submit-btn').on('click', () => {
    if ($('#re-password-field').val() !== $('#password-field').val()) {
        $('#error-text').text('Passwords do not match.');
    }
    else $('#error-text').text('');
});