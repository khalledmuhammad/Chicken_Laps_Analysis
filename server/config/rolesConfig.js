const AccessControl = require('accesscontrol');


let grantsObject = {
    admin: {
    /* resource is profile */    
    profile: { 
        //these are the actions
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
    user: { 
            //these are the actions
                'create:any': ['*'],
                'read:any': ['*'],
                'update:any': ['*'],
                'delete:any': ['*']
            },
    alldata:{
            'read:any': ['*'],
        },
    data : {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']

    }    
    },
    user: {
    profile: {
            'create:own': ['*'],
            'read:own': ['*' , '!password' , '!date' , '!_id'] ,
            'update:own': ['*' , '!password' , '!date' , '!_id'],
            'delete:own': ['*']
        },
        data: {
            'create:own': ['*'],
            'read:own': ['*'] ,
            'update:own': ['*']
           
        }
    }
};
const roles = new AccessControl(grantsObject);
module.exports={roles}
