import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
    'withCredentials':true
}
const burl = "http://localhost:5000"
export default {
    login : function(email,password) {
        console.log("loginAPI",email,password)
        return axios.post(burl + '/users/login',{
            'email' : email,
            'password' : password
        },{
            headers: headers,'withCredentials':true
        })
    },     verif : function(token) {
        return axios.post(burl + '/users/verify',{
            'secretToken' : token

        },{
            headers: headers
        })
    },
    miseAjourProfil : function(email, password,Age, Nom, Sex, prenom){
        return axios.post(burl + '/users/Profil/miseajour',{
            'email' : email,
            'sex' : Sex,
            'age' : Age,
            'nom' : Nom,
            'prenom' : prenom
        },{
             headers: headers
        })
}, affichageProfil : function(email){
        return axios.post(burl + '/users/profil',{
            'email' : email,
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
