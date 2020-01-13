import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
  //  credentials : 'same-origin'
  //  credentials : 'same-origin'

}
const AuthStr = 'Bearer '.concat(localStorage.getItem("secretToken"));
const headers1 = {
    'Content-Type': 'application/json',
    //  credentials : 'same-origin'
    //  credentials : 'same-origin'
    "Authorization": "Bearer " + localStorage.getItem("secretToken")
}
const burl = "http://localhost:5000"

export default {

    login : function(email,password) {
        console.log('login',localStorage.getItem("secretToken"))

        return axios.post(burl + '/users/login',{
            'email' : email,
            'password' : password
        },{
            headers: headers
        ,},)
    },     verif : function(token) {
        return axios.post(burl + '/users/verify',{
            'secretToken' : token

        },{
            headers: headers,
        },)
    },
    profil : function(email, password,age, nom, sex, prenom){
        return axios.post(burl + '/users/Profil/',{
            'email' : email,
            'password' : password,
            'sex' : sex,
            'age' : age,
            'nom' : nom,
            'prenom' : prenom
        },{
             headers: headers
        })
}, affichageProfil : function(email){
    return axios.post(burl + '/users/profil',{
        'email' : email,
    },{
        headers: headers1
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

    isAuth : function() {
        return (localStorage.getItem('secretToken') !== null);
    },

    logout : function() {
        localStorage.clear();
    }
}
