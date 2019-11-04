class DinnerProducts {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addDinnerProductSQL() {
        let sql = `INSERT INTO dinner_list (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateDinnerProductByIdSQL(prd_id) {
        let sql = `UPDATE dinner_list SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getDinnerProductByIdSQL(prd_id) {
        let sql = `SELECT * FROM dinner_list WHERE sid = ${prd_id}`
        return sql
    }

    static deleteDinnerProductByIdSQL(prd_id) {
        let sql = `DELETE FROM dinner_list WHERE sid = ${prd_id}`
        return sql
    }

    static getAllDinnerProductSQL() {
        let sql = `SELECT * FROM dinner_list`
        return sql
    }
}

export default DinnerProducts
