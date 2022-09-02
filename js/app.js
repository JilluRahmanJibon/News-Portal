const loadNewsPortal = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const response = await fetch(url)
    const data = response.json()
    return data
}
const displayCatagorisNewsPortal = async () => {
    const displayCatagoris = await loadNewsPortal()

    // console.log(displayCatagoris);
    const catagorisContainer = document.getElementById('catagories-container');
    displayCatagoris.data.news_category.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('md:px-3')
        div.innerHTML = `
        
        <a href="">${data.category_name}</a>
        `
        catagorisContainer.appendChild(div)

    })
}
displayCatagorisNewsPortal()