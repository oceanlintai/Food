class Courses {
    constructor(name, price) {
        this.prd_id = 0
        this.prd_name = name
        this.prd_price = price
    }

    addCourseSQL() {
        let sql = `INSERT INTO course (name, price) \
                   VALUES('${this.prd_name}',${this.prd_price})`
        return sql
    }

    updateCourseByIdSQL(prd_id) {
        let sql = `UPDATE course SET name="${this.prd_name}" , price="${this.prd_price}" WHERE sid=${prd_id} `
        return sql
    }

    static getCourseByIdSQL(prd_id) {
        let sql = `SELECT * FROM course WHERE sid = ${prd_id}`
        return sql
    }

    static deleteCourseByIdSQL(prd_id) {
        let sql = `DELETE FROM course WHERE sid = ${prd_id}`
        return sql
    }

    static getAllCourseSQL() {
        let sql = `SELECT * FROM course`
        return sql
    }


}

export default Courses
