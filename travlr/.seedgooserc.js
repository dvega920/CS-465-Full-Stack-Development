// .seedgooserc.js
module.exports = {
    modelBaseDirectory: 'app_api/database/models', // model directory name
    models: ['**/*.js', '!db.js'], // model matcher
    data: 'data', // data directory name
    db: 'mongodb+srv://admin:admin@cluster1.l3r7pjc.mongodb.net/' // db connection url
};