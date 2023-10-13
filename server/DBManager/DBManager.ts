import { MongoClient, Db } from "mongodb";

class DBManager {
  private readonly client: MongoClient;
  readonly database: Db;

  private static _instance?: DBManager;

  static get instance(): DBManager {
    if (!DBManager._instance) {
      throw new Error("DBManager not initialized!");
    }
    return DBManager._instance;
  }

  private constructor(
    database: Db,
    client: MongoClient
  ) {
    this.database = database;
    this.client = client;
  }
  
  static async init(config: {
    prod: boolean;
    DB_URL: string;
    DB_NAME: string;
  }) {
    if (DBManager._instance) {
      throw Error("DBManager instance already exists!");
    }
  
    const client = await MongoClient.connect(config.DB_URL);
    const database = client.db(
      config.DB_NAME +
        (config.prod || config.DB_NAME.endsWith("--test") ? "" : "--DEV")
    );

    if (!database) {
      throw Error("Database not found!");
    }

    DBManager._instance = new DBManager(database, client);
    console.log("DBManager: Connected to database " + database.databaseName);
  }

  static destroy() {
    DBManager._instance?.client?.close();
    DBManager._instance = undefined;
  }
}

DBManager.init({
  prod: false,
  DB_URL: "mongodb://localhost:27017", // TODO: make configurable
  DB_NAME: "test", // TODO: make configurable
});

export default DBManager;
