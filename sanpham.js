class Product {
    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }
    constructor(name,price,color,desc) {
        this._name = name;
        this._price = price;
        this._color = color;
        this._desc = desc;
        this._img = "product_icon.png";
    }

    edit(name,price,color,desc){
        this.name = name;
        this.price = price;
        this.color = color;
        this.desc = desc;
    }
    getHtml(){
        let html = `<td><img src="${this.img}"></td>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.color}</td>
                    <td>${this.desc}</td>`;
        return html;
    }
}

