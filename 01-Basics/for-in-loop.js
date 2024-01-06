//for-in-loop: it used for iterating over the enumerable properties of an object, it iterated through the keys(indices of an obj) , where it retrieves the keys/index instead of values.

const obj = {
    name:'Saba Azeem',
    "father name":'malik m azeem',
    age:24,
}

for(const keys in obj){
    console.log(keys+":"+obj[keys]);
}