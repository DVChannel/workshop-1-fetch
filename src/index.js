/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
const formatPrice = (price) => {
const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: "currency", currency: "USD", 
    }).format(price);

    return newPrice;
};

window
.fetch(`${baseUrl}/api/avo`)
.then((respuesta) => respuesta.json())
.then((responseJson) =>{
    const todosLosItems = [];
    responseJson.data.forEach((item) =>  {
    const imagen = document.createElement('img');
    imagen.src = `${baseUrl}${item.image}`;
    const title = document.createElement("h2");
    title.textContent = item.name;
title.className = "muygrande";

const price = document.createElement("div");
    price.textContent = formatPrice(item.price);


    const container = document.createElement("div");
    container.append(imagen, title, price);
    todosLosItems.push(container);
});
appNode.append(...todosLosItems);
});

