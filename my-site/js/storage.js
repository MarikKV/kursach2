function storageGet(key){
    const data = JSON.parse( localStorage.getItem(key) );
    return data;
}

function storageSave(key, value){
    localStorage.setItem(key, JSON.stringify(value) );
    return true;
}

