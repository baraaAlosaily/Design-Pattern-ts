// A Row in the Table

import Column from './Column'

export default class Row {
    columns: Column[]

    constructor(column_count: number) {
        this.columns = []
        for (let i = 0; i < column_count; i++) {
            this.columns.push(new Column())
        }
    }
    getData(): string {
        // Format the row before returning it to the table
        let ret = ''
        this.columns.forEach((column) => {
            ret = `${ret}${column.getData()}|`
        })
        return ret
    }
}