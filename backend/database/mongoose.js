const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const url = 'mongodb+srv://jmcdmoreno19:Tacobell%2322@testingcluster.rsp5krz.mongodb.net/?retryWrites=true&w=majority&appName=TestingCluster'

mongoose.connect(url).then(()=>{
  console.log('connected')
}).catch(err => {
  console.log(err)
})

module.exports = mongoose;