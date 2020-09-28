class ProductManage {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.data = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    deleteProduct(index){
        this.products.splice(index,1);
    }
    getHtml(){
        let table = `<table border="0px solid black" cellspacing="0" class="table table-striped">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Description</th>
                        </tr>`;
        for (let i = 0; i < this.products.length; i++) {
            table += "<tr>"+this.products[i].getHtml() + this.getAction(i)+'</tr>';
        }
        table+=`</table>`;
        return table;
    }

    getAction(index){
        let action = `<td><button class="btn btn-warning" onclick="edit(${index})">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="del(${index})">Delete</button></td>`;
        return action;
    }

    getProductByIndex(index){
        return this.products[index];
    }
}
