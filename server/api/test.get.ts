// this is a only GET request handler for /api/test
// ! only a example, you can delete this file
import DBManager from "../DBManager/DBManager";

export default eventHandler(async (event) => {
    // ! replace the config in the init with the useRunTimeConfig hook, which uses the runtimeConfig from nuxt.config.ts
    const { database } = DBManager.instance;

    database.collection("test").insertOne({
        test: "test",
    });

    return {
        statusCode: 200,
        test: database.collection("test").find({}).toArray(),
    };
});
