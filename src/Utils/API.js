import axios from 'axios';

const headers = {

    'Content-Type': 'application/json'

}

const burl = "http://localhost:5000"
export default {

    login : function(email,password) {

        return axios.post(burl + '/user/login',{

            'email' : email,

            'password' : password

        },{

            headers: headers

        })

    },

    signup : function(send){

        return axios.post(burl + '/user/signup',send,{headers: headers})

    },

    isAuth : function() {

        return (localStorage.getItem('token') !== null);

    },

    getUser : function() {

        return (localStorage.getItem('user'));

    },

    logout : function() {

        localStorage.clear();

    }
}