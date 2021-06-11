const { MongoClient, ObjectId } = require('mongodb')
const config = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const SRV = !config.dev ? '+srv' : ''
const MONGO_URI = `mongodb${SRV}://${USER}:${PASSWORD}@${config.dbHost}?retryWrites=true&w=majority`

class Mongo {
  constructor () {
    this.client = new MongoClient(
      MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    this.dbName = DB_NAME
  }

  connect () {
    if (!Mongo.connection) {
      Mongo.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err)
          }

          resolve(this.client.db(this.dbName))
        })
      })
    }

    return Mongo.connection
  }

  get (collection, query) {
    return this.connect()
      .then(db =>
        db.collection(collection)
          .find(query)
          .toArray())
  }

  create (collection, data) {
    return this.connect()
      .then(db =>
        db.collection(collection)
          .insertOne(data))
      .then(result => result.insertedId)
  }

  update (collection, id, data) {
    return this.connect()
      .then(db =>
        db.collection(collection)
          .updateOne(
            { _id: ObjectId(id) },
            { $set: data },
            { upsert: true }))
      .then(result => result.upsertedId || id)
  }

  delete (collection, id) {
    return this.connect()
      .then(db =>
        db.collection(collection)
          .deleteOne({ _id: ObjectId(id) }))
      .then(() => id)
  }
}

module.exports = new Mongo()
