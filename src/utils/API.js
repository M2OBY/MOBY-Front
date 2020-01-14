import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
  //  credentials : 'same-origin'
  //  credentials : 'same-origin'

}

const headers1 = {
    'Content-Type': 'application/json',
    //  credentials : 'same-origin'
    //  credentials : 'same-origin'

   'Authorization': 'Bearer '+localStorage.getItem("token")
}
const burl = "http://localhost:5000"

export default {

    login : function(email,password) {


        return axios.post(burl + '/users/login',{
            'email' : email,
            'password' : password
        },{
            headers: headers

        ,},)

        }
        //window.localStorage.setItem("secretToken", query.token);

    ,     verif : function(token) {
        return axios.post(burl + '/users/verify',{
            'secretToken' : token

        },{
            headers: headers,
        },)
    },
    profil : function(username,dateNaissance, name, genre, prenom, ville, mobile){
        return axios.post(burl + '/users/profil/',{
            'email' : localStorage.getItem("email"),
            'password' : localStorage.getItem('password'),
            'genre' : genre,
            'dateNaissance' : dateNaissance,
            'name' : name,
            'prenom' : prenom,
            'ville' : ville,
            'mobile': mobile,
        },{
             headers: headers
        })
}, affichageProfil : function(email){
        console.log("Token-Page-AffichgageProfil",localStorage.getItem("token"))
    return axios.post(burl + '/users/profil',{
        'email' : localStorage.getItem("email"),
        'password':localStorage.getItem("password")
    },{
        headers: headers
    })
},
    signup : function(send){ console.log("send",send)
        return axios.post(burl + '/users/register',send,{headers: headers})
    },



    upload : function(send){
        console.log(send)
        return axios.post(burl + '/media',send,{headers: headers})
    }, charger : function(send){
        console.log(burl + '/media/files/'+send)
        return axios.get(burl + '/media/files/'+send,{headers: headers})
    },

    current : function(){

        return axios.get(burl + '/users/current',{headers: headers1})
    },


    isAuth : function() {

        return (localStorage.getItem('email') !== null);


    },

    logout : function() {
        localStorage.clear();
    }
}
