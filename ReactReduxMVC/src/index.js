import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import HomePage from 'home/HomePage';

const baseUrl = 'http://localhost:57547';

$.ajax({
    url: baseUrl + "/api/values",
    context: document.body
}).done(function (e) {
    console.log("done");
    console.log(e);
});

console.log("howdy howitzer");