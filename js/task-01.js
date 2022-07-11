
const categoriesList = document.querySelectorAll( '.item')
console.log(`Number of categories:`, categoriesList.length)

categoriesList.forEach(function callback(element, index) {
    const categoriesTitle = element.querySelector('h2')
    console.log('Category:', categoriesTitle.textContent)

    const numberElements = element.querySelectorAll('ul li')
    console.log('Elements:', numberElements.length)
  });
