// bring in schema
require("./models/travlr");
require("dotenv").config(); /** import the dotenv package and created a .env on root of project */

const mongoose = require("mongoose");
// const host = process.env.DB_HOST || "127.0.0.1";
// console.log(process.env.DB_HOST);  /*** This value is undefined ***/
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
// const dbURI = `mongodb://${host}/travlr`; /** if host is undefined how is this working without a .env? */
const dbURI = `mongodb+srv://${user}:${password}@cluster1.l3r7pjc.mongodb.net/`;
const readLine = require("readline");

// // avoid current server discovery and monitoring engine is depreciated
mongoose.set("useUnifiedTopology", true);

const connect = () => {
    setTimeout(
        () =>
            mongoose.connect(dbURI, {
                useNewUrlParser: true,
                useCreateIndex: true,
            }),
        1000
    );
};

mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connection error: `, err);
});

mongoose.connection.on("disconnected", () => {
    console.log(`Mongoose disconnected`);
});

if (process.platform == "win32") {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on("SIGINT", () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// nodemon restarts
process.once("SIGUSR2", () => {
    gracefulShutdown("nodemon restart", () => {
        process.kill(process.pid, "SIGUSR2");
    });
});

// app termination
process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => {
        process.exit(0);
    });
});

// Herokue app termination
process.on("SIGTERM", () => {
    gracefulShutdown("Heroku app shutdown", () => {
        process.exit(0);
    });
});

connect();

