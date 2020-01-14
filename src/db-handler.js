const mongoose = require('mongoose')
const env = require('dotenv')

function connectdb () {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        process.env.DB_CONNECT,
        { useUnifiedTopology: true, useNewUrlParser: true },
        () => console.log('Connected to MongoDB')
      )
      .then((res, err) => {
        if (err) return reject(err)
        resolve()
      })
  })
}

function closedb () {
  return mongoose.disconnect()
}

module.exports = { connectdb, closedb }
