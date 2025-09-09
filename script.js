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
                    .then(data => {
                        data.plants.forEach(element => {
                            console.log(element);
                        
                        })

                        console.log("data:", data);

                        let trees = document.getElementById("display-trees");
                        trees.innerHTML = "";
                        
                        for (const plant of data.plants) {
                            let createDiv = document.createElement("div");
                            createDiv.innerHTML = `
                                <h1 id="${plant.id}">${plant.name}</h1>
                                <div class="">
                                    <img src="${plant.image}"/>
                                </div>
                                <p>${plant.description}</p>
                                <div>
                                    <span>${plant.category}</span>
                                    <span>${plant.price}</span>
                                </div>
                                <button id="btn-${plant.id}">Add to Cart</button>
                            `
                            trees.appendChild(createDiv);

                            let plantModal = document.getElementById(`${plant.id}`);
                            plantModal.addEventListener('click', (e) => {
                                console.log("The plant is clicked!");
                                let treeDetailsUrl = `https://openapi.programming-hero.com/api/plant/${plant.id}`;
                                
                                fetch(treeDetailsUrl)
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log("Modal data", data)
                                          
                                        let modalBox = document.getElementById("modal");
                                        modalBox.innerHTML = "";
                                        let modalElements = document.createElement('div');

                                        modalElements.innerHTML = `
                                            <div class="modal-box">
                                                <div class="h-50 w-50">
                                                    <img src="${data.plants.image}"/>
                                                </div>
                                                <h3 class="text-lg font-bold">${data.plants.name}</h3>
                                                <p class="py-4">${data.plants.category}</p>
                                                <p>${data.plants.description}</p>
                                                <p>${data.plants.price}</p>
                                                <div class="modal-action">
                                                <form method="dialog">
                                                    <!-- if there is a button in form, it will close the modal -->
                                                    <button class="btn">Close</button>
                                                </form>
                                                </div>
                                            </div>
                                        `

                                        modalBox.appendChild(modalElements);
                                        
                                        modalBox.showModal();
                                    });
                            })

                            let addToCart = document.getElementById(`btn-${plant.id}`);

                            addToCart.addEventListener('click', (e) => {
                                console.log("Cart Clicked!");
                                let selectCart = document.getElementById("cart");
                                let cartItem = document.createElement('div');

                                cartItem.innerHTML = `
                                    <h4>${plant.name}</h4>
                                    <p>${plant.price}</p>
                                `

                                selectCart.appendChild(cartItem);
                            })
                        }
                    })

            })
            // console.log(element.category_name);
        }
    });
