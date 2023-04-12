const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost/crud-mongo';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
