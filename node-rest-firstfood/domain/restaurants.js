class Restaurants {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addRestaurantSQL() {
        let sql = `INSERT INTO restaurant (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateRestaurantByIdSQL(prd_id) {
        let sql = `UPDATE restaurant SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getRestaurantByIdSQL(prd_id) {
        let sql = `SELECT * FROM restaurant WHERE sid = ${prd_id}`
        return sql
    }

    static deleteRestaurantByIdSQL(prd_id) {
        let sql = `DELETE FROM restaurant WHERE sid = ${prd_id}`
        return sql
    }

    static getAllRestaurantSQL() {
        let sql = `SELECT * FROM restaurant`
        return sql
    }
    
}

export default Restaurants
