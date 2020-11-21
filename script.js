//Main page
$('page-link').on('click', () => {
    window.location.replace('/pages/form.html')
});

// Form
$('#submit-btn').on('click', () => {
    if ($('#re-password-field').val() !== $('#password-field').val()) {
        $('#error-text').text('Passwords do not match.');
    }
    else $('#error-text').text('');
});


// Table
$.getJSON('../data.json', data => {
    $('tbody').html(
        $.map(data, row => {
            return (`
                <tr>
                    <td>${row.userID}</td>
                    <td>${row.name}</td>
                    <td>${row.userName}</td>
                    <td>${row.email}</td>
                </tr>
            `)
        })
    );
});