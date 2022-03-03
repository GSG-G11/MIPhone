//Selectors 
const btn = document.querySelector('input[type="submit"]');
const search = document.querySelector('input[type="text"]');
const topsContainer = document.querySelector('.row');

//Fetch --------------------------------------------
//fetch phone api 
  fetch('/api')
 .then((respo) => respo.json())
   .then((data) => {
    if (data.length === 0) {
        return;
    }
    let result = data.data
    const phoneImg= document.querySelectorAll('.brand-child img')
    const phoneName= document.querySelectorAll('.brand-child span')
    const phonePrice= document.querySelectorAll('.brand-child h3 strong')
    
    phoneName.forEach((ele, i) =>{
        ele.textContent= result.phones[i].phone_name
    })

    // fetch phone det. api 
    phoneImg.forEach((ele, i) =>{
        fetch(result.phones[i].detail)
        .then((respo) => respo.json())
        .then((data) => {
            let dResult = data.data
            ele.src = dResult.thumbnail            
        })
        .catch((err) => console.log(err))
    })

    phonePrice.forEach((ele, i) =>{
        fetch(result.phones[i].detail)
        .then((respo) => respo.json())
        .then((data) => {
            let dResult = data.data
            ele.textContent = dResult.specifications[12].specs[ dResult.specifications[12].specs.length -1].val[0].split('/')[0]
        })
        .catch((err) => console.log(err))

    })
   })
   .catch(error => console.log(error));

//Events --------------------------------------------
search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        btn.click();
    }
});

btn.addEventListener('click', (e) => {
    const searchValue = search.value;
    if (searchValue === '') {
        return;
    }
    localStorage.setItem('searchValue', searchValue);
    const url = `api/${searchValue}`;
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            const result = data.data;
            if (data.length === 0) {
                return;
            }
            document.querySelector(".phone-brand").textContent = result.phones[0].brand;
            document.querySelector(".about_box span a").textContent = result.phones[0].phone_name;
            document.querySelector(".phone_img").src = result.phones[0].image;
            fetch(result.phones[0].detail)
            .then((resp) => resp.json())
            .then((data) => {
                const result = data.data;
                if (data.length === 0) {
                    return;
                }
                document.querySelector("#descrept").textContent = `the phone price is ${result.specifications[12].specs[ result.specifications[12].specs.length -1].val},  `;
            })
            .catch((error) => {
                console.log(error);
            });

        })
        .catch((err) => console.log(err));
        
        search.value = '';
});


