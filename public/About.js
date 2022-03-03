
//Selectors 
const td = document.querySelectorAll('td')
let searchedValue = localStorage.getItem('searchValue')

//Fetch
fetch(`/api/${searchedValue}`).then((resp) => resp.json())
.then((data) => { 
    if (data.length === 0) {
        return;
    }

    let result = data.data;

    document.querySelector(".phone-brand").textContent = result.phones[0].brand;
    document.querySelector(".about_box span").textContent = result.phones[0].phone_name;
    document.querySelector(".phone_img").src = result.phones[0].image;

    fetch(result.phones[0].detail)
    .then((respo) => respo.json())
      .then((data) =>{
        const dResult = data.data
        console.log(dResult)
        td[0].textContent = dResult.specifications[1].specs[1].val[0]
        td[1].textContent = dResult.specifications[2].specs[2].val[0]
        td[2].textContent = dResult.specifications[4].specs[0].val[0]
        td[3].textContent = dResult.specifications[5].specs[1].val[0]
        td[4].textContent = dResult.specifications[6].specs[0].val[0]
        td[5].textContent = dResult.specifications[12].specs[1].val[0]
      })
    .catch(err => console.log(err))
})
.catch((error) => {console.log(error)})


