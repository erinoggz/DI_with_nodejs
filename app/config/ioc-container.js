 class IocContainer{
    _instance = null;
    _dependencyMap = {}
    constructor(){
        if(!this._instance) {
            this._instance = this;
        }
        
    }
    
    register(dependencyName, dependencies = [], constructor){    
        if (!dependencyName) {
            throw new Error('Invalid depdendency name provided');
        }
        if(this._dependencyMap[dependencyName]) {
            throw new Error("Dependency already registered");   
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        if (typeof constructor !== 'function') {
            this._dependencyMap[dependencyName] = constructor;
            return;
        }
        this._dependencyMap[dependencyName] = new constructor(...dependenciesImplementations);
    }

    resolve(dependencyName){
        if(!this._dependencyMap[dependencyName]) {
            throw new Error(`Unresolved dependency ${dependencyName}`);
        }
        return this._dependencyMap[dependencyName];
    }

    getDependenciesImplementations(dependencyName)  {
        return dependencyName.map(name=>this.resolve(name))
    }
}

module.exports  = new IocContainer();