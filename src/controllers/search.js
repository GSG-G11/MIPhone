
const SearchPhone = (phonename) =>{
    fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${phonename}`).then((resp) => resp.json())
}
