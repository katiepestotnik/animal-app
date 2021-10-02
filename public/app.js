const $input = $('#user-input'); 
const handleAPIEvent = (event) => {
    event.preventDefault();
    $.ajax({
        url: `https://dog.ceo/api/breed/${$input.val()}/images/random`
    }).then((data) => {
        apiData = data;
        const $photo = $('#dog-photo');
        $photo.attr('src', apiData.message);
        $photo.show();
    },
        (error) => {
            console.log(`There is a problem`, error);
        });
};
$('#index-form').on('submit', handleAPIEvent);