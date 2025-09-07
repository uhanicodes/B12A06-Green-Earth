let url = "https://openapi.programming-hero.com/api/categories";

fetch(url)
    .then(res => res.json())
    .then(data => {
        let category = document.getElementById("categories");
        
        for (const element of data.categories) {
            let tree = document.createElement("li");
            tree.innerText = element.category_name;

            category.appendChild(tree);
            console.log(element.category_name);
        }
    });