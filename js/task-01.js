const amountCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${amountCategories.length}`);

amountCategories.forEach((catalog) => {
    console.log('Category:', catalog.firstElementChild.textContent);
    console.log('Elements:', catalog.lastElementChild.children.length);
})