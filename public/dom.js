const btn = document.querySelector('input[type="submit"]');
const search = document.querySelector('input[type="text"]');
const topsContainer = document.querySelector('.row');

btn.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        btn.click();
    }
});

btn.addEventListener('click', (e) => {
    const searchValue = search.value;
    if (searchValue === '') {
        return;
    }
    const url = `api/${searchValue}`;
    console.log(url);
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            const result = data.data;
            if (data.length === 0) {
                return;
            }
            document.querySelector(".phone-brand").textContent = result.phones[0].brand;
            document.querySelector("span").textContent = result.phones[0].phone_name;
            document.querySelector(".phone_img").src = result.phones[0].image;
        })
        .catch((err) => console.log(err));
});


