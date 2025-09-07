let url = "https://openapi.programming-hero.com/api/categories";

fetch(url)
    .then(res => res.json())
    .then(data => {
        let category = document.getElementById("categories");
        
        for (const element of data.categories) {
            let tree = document.createElement("li");
            tree.innerText = element.category_name;

            category.appendChild(tree);

            tree.addEventListener('click', (e) => {
                console.log("The category is clicked!");
                let url2 = `https://openapi.programming-hero.com/api/category/${element.id}`;

                fetch(url2)
                    .then(res => res.json())
                    .then(data => data.plants.forEach(element => {
                        console.log(element);
                }))

            })
            // console.log(element.category_name);
        }
    });


let treeDetailsUrl = "https://openapi.programming-hero.com/api/plant/1";

fetch(treeDetailsUrl)
    .then(res => res.json())
    .then(data => console.log(data))


