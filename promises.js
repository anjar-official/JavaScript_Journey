const promise = new Promise((resolve, reject) => {  
    let condition=10;
    
    if(condition <20) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});