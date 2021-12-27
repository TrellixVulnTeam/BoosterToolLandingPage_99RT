const mongoose          = require('mongoose');

//const { AUTH_APP_MONGODB_HOST, AUTH_APP_MONGODB_DATABASE} = process.env;
//const MONGODB_URI_LOCAL = `mongodb://${AUTH_APP_MONGODB_HOST}/${ AUTH_APP_MONGODB_DATABASE}`;
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD


// cambiar a prod para produccion y quitar los // para que funcione al 100
mongoose.connect(MONGODB_URI_PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(db => console.log('DB conected succesfully'))
    .catch(err => console.log(err));