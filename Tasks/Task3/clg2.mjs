class College {
    constructor(clgName, batch) {
        this.clgName = clgName
        this.batch = batch
    }

    get clgName() {
        console.log(`Student is from ${this._clgName} college`)
    }

    set clgName(n) {
        this._clgName = n
    }

    get batch() {
        console.log(`Student is from ${this._batch} batch`)
    }

    set batch(n) {
        this._batch = n
    }
}

export default College