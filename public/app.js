
const $input = $('#user-input'); 

const handleAPIEvent = (event) => {
    event.preventDefault();
    $.ajax({
        url: `https://api.agify.io/?name=${$input.val()}`
    }).then((data) => {
        apiData = data;
        const $age = $('#age')
        $age.text(` ${apiData.age}`)
    },
        (error) => {
            console.log(`There is a problem`, error)
        });
};


$('#index-form').on('submit', handleAPIEvent);