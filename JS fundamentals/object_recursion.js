let user = {
    name : 'gokul',
    address: {
        personal : {
            city : 'salem',
            state : 'TN' 
        },
        office : {
            city: 'hyderabad'
        }
    }, 
    food: {
        favorite: 'nonveg'
    }
}

function MagicFunc(user,pre) {
    let obj = {};
    function search(user,prefix) {
        Object.keys(user).forEach(ele=>{
            if(typeof user[ele] == 'object') {
                search(user[ele],prefix+'_'+ele);
            } else {
                obj[prefix+'_'+ele] = user[ele];
            }
        })
    }
    search(user,pre)
    return obj;
}
let res = MagicFunc(user,'user');
console.log(res)