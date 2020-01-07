import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',

}
const burl = "http://localhost:5000"
export default {
    login : function(email,password) {

        return axios.post(burl + '/users/login',{
            'email' : email,
            'password' : password
        },{
            headers: headers
        })
    },     verif : function(token) {
        return axios.post(burl + '/users/verify',{
            'token' : token

        },{
            headers: headers
        })
    },
    profil : function(email, password,Age, Nom, Sex, prenom){
        return axios.post(burl + '/user/Profil/miseajour',{
            'email' : email,
            'password' : password,
            'sex' : Sex,
            'age' : Age,
            'nom' : Nom,
            'prenom' : prenom
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
    },

    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },

    logout : function() {
        localStorage.clear();
    }
}
