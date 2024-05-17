document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const categoryDropdown = document.getElementById('category');

    // Populate categories from local storage
    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.forEach(function (category) {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        categoryDropdown.appendChild(option);
    });

    productForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('description').value;
        const productPrice = document.getElementById('price').value;
        const productSKU = document.getElementById('suk').value;
        const productQuantity = document.getElementById('quantity').value;
        const selectedCategory = categoryDropdown.value;

        let valid = true;

        if (productName === "") {
            document.getElementById('span1').textContent = "Please enter a product name.";
            valid = false;
        } else {
            document.getElementById('span1').textContent = "";
        }

        if (selectedCategory === "") {
            document.getElementById('span2').textContent = "Please select a category.";
            valid = false;
        } else {
            document.getElementById('span2').textContent = "";
        }

        if (productDescription === "") {
            document.getElementById('span3').textContent = "Please enter a description.";
            valid = false;
        } else {
            document.getElementById('span3').textContent = "";
        }

        if (productQuantity === "" || productQuantity <= 0) {
            document.getElementById('span4').textContent = "Please enter a valid quantity (minimum 1).";
            valid = false;
        } else {
            document.getElementById('span4').textContent = "";
        }

        if (productPrice === "" || productPrice <= 0) {
            document.getElementById('span5').textContent = "Please enter a valid price.";
            valid = false;
        } else {
            document.getElementById('span5').textContent = "";
        }

        if (productSKU === "") {
            document.getElementById('span6').textContent = "Please enter a SKU number.";
            valid = false;
        } else {
            document.getElementById('span6').textContent = "";
        }

        if (valid) {
            saveProduct(productName, productDescription, productPrice, productSKU, selectedCategory, productQuantity);
            productForm.reset();
            window.location.href = "homePage.html";
        }
    });
});

function saveProduct(name, description, price, sku, category, quantity) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({
        name: name,
        description: description,
        price: price,
        sku: sku,
        quantity: quantity,
        category: category
    });
    localStorage.setItem('products', JSON.stringify(products));
}
