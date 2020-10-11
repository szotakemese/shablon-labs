let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton {
    constructor(enforcer) {
        this.LinksList = {}
        if (enforcer !== singletonEnforcer)
            throw "Instantiation failed: use Singleton.getInstance() instead of new.";
    }
    static get _instance() {
        if (!this[singleton])
            this[singleton] = new Singleton(singletonEnforcer);
        return this[singleton]
    }
    static set _instance(v){throw "Can't change constant property!"}
    static getInstance(){return this._instance;}
    
    addLink(link){
        if(this.LinksList.hasOwnProperty(link)){
            this.LinksList[link] +=1;
        }
        else{
            this.LinksList[link] = 1;
        }
    }

    printAllLinks(){
        if (Object.keys(this.LinksList).length){
            for (let link in this.LinksList)
                console.log(`Link: ${link} (links added: ${this.LinksList[link]});`);
        }
        else console.log("No links");
    }

    clearAllLinks(){
        this.LinksList = {}
        console.log("Links' list cleared!");
    }
}

export default Singleton