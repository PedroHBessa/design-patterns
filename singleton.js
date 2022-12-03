class Logger {
  log = [];
  logMessage(message) {
    this.log.push(message);
    console.log(this.log);
  }
}
class LoggerSingleton {
  static getInstance() {
    if (!LoggerSingleton.instance) {
      LoggerSingleton.instance = new Logger();
    }
    return LoggerSingleton.instance;
  }
}
const logger1 = LoggerSingleton.getInstance();
logger1.logMessage("myLog1");

const logger2 = LoggerSingleton.getInstance();
logger2.logMessage("myLog2");

class Cacher {
  cache = [];
  cacheData(data) {
    this.cache.push(data);
    console.log(this.cache);
  }
  getCache() {
    return this.cache;
  }
}

class CacherSingleton {
  static getInstance() {
    if (!CacherSingleton.instance) {
      CacherSingleton.instance = new Cacher();
    }
    return CacherSingleton.instance;
  }
}

const cacher1 = CacherSingleton.getInstance();
cacher1.cacheData("myData1");
const cacher2 = CacherSingleton.getInstance();
cacher2.cacheData("myData2");

const getDataFromServer = () => {
  const cacheInstance = CacherSingleton.getInstance();
  const myCache = cacheInstance.getCache();
  const data = myCache.filter((e) => e === "myData1");

  if (data.length !== 0)
    return console.log("i have the data on cache: " + data);

  console.log("fetching data...");
};

getDataFromServer();
