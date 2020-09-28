
const PRODUCT = "product";
let store = new ProductManage("My Store");
display(store.getHtml());
let currentProduct = 0;

function display(table) {
    document.getElementById('product-manage').innerHTML = table;
}
function addProduct() {
    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;
    let color = document.getElementById("product-color").value;
    let desc = document.getElementById("product-desc").value;
    let img = document.getElementById("product-img").value;
    let product = new Product(name,price,color,desc);
    product.img = img;
    store.addProduct(product);
    display(store.getHtml());
    document.getElementById('form-add').reset();
}

function edit(index) {
    document.getElementById('form-edit').style.display = "inline-block";
    let product = store.getProductByIndex(index);
    document.getElementById('edit-name').value = product.name;
    document.getElementById('edit-price').value = product.price;
    document.getElementById('edit-color').value = product.color;
    document.getElementById('edit-desc').value = product.desc;
    document.getElementById('edit-img').value = product.img;
    currentProduct = index;
}

function editProduct() {
    let name = document.getElementById("edit-name").value;
    let price = document.getElementById("edit-price").value;
    let color = document.getElementById("edit-color").value;
    let desc = document.getElementById("edit-desc").value;
    let img = document.getElementById("edit-img").value;
    store.products[currentProduct].edit(name,price,color,desc);
    store.products[currentProduct].img = img;
    display(store.getHtml());
    document.getElementById('form-edit').reset();
    document.getElementById('form-edit').style.display = "none";
}

function del(index) {
    store.deleteProduct(index);
    display(store.getHtml());
}

