import { MongoClient, Db } from "mongodb";

class DBManager {
  ready: boolean = false;
  private readonly client: MongoClient;
  readonly database: Db;

  private static _instance?: DBManager;

  static get instance(): DBManager | undefined {
    return DBManager._instance;
  }

  private constructor(
    db: Db,
    client: MongoClient,
    cb: (dbmanager: DBManager) => void
  ) {
    if (DBManager.instance && DBManager.instance.ready) {
      console.warn(
        "DBManager instance already exists! Class DBManager is a singleton!"
      );
    }

    this.database = db;
    this.client = client;

    this.ready = true;

    DBManager._instance = this;

    cb(this);
  }

  static init(config: {
    prod: boolean;
    DB_URL: string;
    DB_NAME: string;
  }): Promise<DBManager> {
    return new Promise(async (resolve: (value: DBManager) => void, reject) => {
      if (DBManager.instance) return resolve(DBManager.instance);

      try {
        const client = await MongoClient.connect(config.DB_URL);
        const db = client.db(
          config.DB_NAME +
            (config.prod || config.DB_NAME.endsWith("--test") ? "" : "--DEV")
        );

        if (!db) return;

        new DBManager(db, client, resolve);
      } catch (err) {
        reject(err);
        return;
      }
    });
  }

  static destroy() {
    DBManager.instance?.client?.close();
    DBManager._instance = undefined;
  }
}

export default DBManager;
