const fetch = require('node-fetch');
const serachRouter = require('express').Router();




serachRouter.get('/', (req, res) => {
    fetch(`https://api-mobilespecs.azharimm.site/v2/top-by-interest`)
      .then((resp) => resp.json())
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(400).send({error: "search result not found"}) );
  });



serachRouter.get('/:input', (req, res) => {
  let search = req.params.input;
  fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${search}`)
    .then((resp) => resp.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(400).send({error: "search result not found"}) );
});

module.exports = serachRouter;
