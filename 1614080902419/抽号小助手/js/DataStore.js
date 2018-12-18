class DataStore{
    //构建单例
    static getInstance(){
        if(!DataStore.instance){
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    constructor(){
        this.socket = '';  //抽奖的socket
        this.params = '';  //抽奖的参数
    }
}
module.exports = DataStore;