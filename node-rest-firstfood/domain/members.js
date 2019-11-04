class Members {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addMemberSQL() {
        let sql = `INSERT INTO customer_information (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateMemberByIdSQL(prd_id) {
        let sql = `UPDATE customer_information SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getMemberByIdSQL(prd_id) {
        let sql = `SELECT * FROM customer_information WHERE sid = ${prd_id}`
        return sql
    }

    static deleteMemberByIdSQL(prd_id) {
        let sql = `DELETE FROM customer_information WHERE sid = ${prd_id}`
        return sql
    }

    static getAllMemberSQL() {
        let sql = `SELECT * FROM customer_information`
        return sql
    }


}

export default Members
