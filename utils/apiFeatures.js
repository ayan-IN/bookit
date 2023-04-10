class APIFeatures {
  constructor(query, queryStr) {
    this.query = query
    this.queryStr = queryStr
  }
  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: 'i',
          },
        }
      : {}
    // console.log(this.query)
    this.query = this.query.find({ ...location })
    return this
  }
  filter() {
    const queryCopy = { ...this.queryStr }

    //* Removing unnecessary fileds from query
    const removeFields = ['location']
    removeFields.forEach((element) => delete queryCopy[element])

    this.query = this.query.find(queryCopy)
    return this
  }
  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1
    console.log('Quesry String : ', this.queryStr)
    console.log('CurrentPage : ', currentPage)
    const skipItemCount = resPerPage * (currentPage - 1)
    console.log('skip : ', skipItemCount)

    this.query = this.query.limit(resPerPage).skip(skipItemCount)
    console.log('Query : ', this.query)
    return this
  }
}
export default APIFeatures
