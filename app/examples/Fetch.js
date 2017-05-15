{
    const root ='http://jsonplaceholder.typicode.com/posts/1';

    fetch(root, {method:"GET"})
        .then(response=>response.json())
        .then(json => console.log(json));
}

{
    const root = 'https://www.googleapis.com/books/v1/volumes?country=ES&q=isbn:0747532699';
        fetch(root, {method:"GET"})
        .then(response=>response.json())
        .then(json => console.log(json));
}