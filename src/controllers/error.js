const express = require('express');
const path = require('path');

const notFound = (req,res,next) =>{
    res.status(404).sendFile(path.join())
}
