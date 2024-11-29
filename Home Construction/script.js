    <script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxETTkQ70cwdfMyufLTZecXCAHfjK05fU6iTssFMV5D8QL28Eyc50Icvb9JgEDtQeA6/exec';
    const form = document.forms['submit-to-google-sheet'];
    const successAlert = document.getElementById('success-alert');
    const errorAlert = document.getElementById('error-alert');

    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                successAlert.style.display = 'block';
                errorAlert.style.display = 'none';
                form.reset();
                setTimeout(() => { successAlert.style.display = 'none'; }, 3000);
            })
            .catch(error => {
                errorAlert.style.display = 'block';
                successAlert.style.display = 'none';
                setTimeout(() => { errorAlert.style.display = 'none'; }, 3000);
                console.error('Error!', error.message);
            });
    });
    </script>