<template>
    <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
            <br>
            <div class="card border-dark col">
                <div class="card-body">
                    <form>
                        <legend>Registration</legend>
                        <div class="form-group row">
                            <label for="userEmail" class="col-3 col-form-label">Email</label>
                            <div class="col-8">
                                <input type="email" class="form-control" id="userEmail"  required v-model="regUser.userEmail">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="userPass" class="col-3 col-form-label">Password</label>
                            <div class="col-8">
                                <input type="password"  class="form-control" id="userPass" required v-model="regUser.userPass">
                            </div>
                        </div>
                        <button class="btn btn-primary" @click.prevent="submitReg">Register</button>
                    </form>
                    <br>
                    <div class="alert alert-dismissible alert-danger" v-if="alertVisible === 'error'">
                      <button type="button" class="close" @click="dismissAlert">&times;</button>
                      <strong>{{errCode}}</strong> <br> Something went wrong! Try to submit again.
                    </div>
                    <div class="alert alert-dismissible alert-success"  v-if="alertVisible === 'success'">
                      <button type="button" class="close" @click="dismissAlert">&times;</button>
                      <strong>Well done!</strong> You've successfully registered! Now you can <router-link tag="a" to="/login">log in</router-link>.
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../axios-auth';

    export default {
        data() {
            return {
                regUser: {
                    userEmail: '',
                    userPass: ''
                },
                alertVisible: '',
                errCode: '',
                responseEmail: ''
            }
        },
        methods: {
            submitReg() {
                axios.post('/signupNewUser?key=AIzaSyBUczyi7_AOFjsr4E0M7stBy0b7Fz1tNr0', {
                    email: this.regUser.userEmail,
                    password: this.regUser.userPass,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log('RESPONSE ON RREGISTRATION', res.data);
                    this.regUser.userEmail = '';
                    this.regUser.userPass = '';
                    this.alertVisible = 'success';
                    this.responseEmail = res.data.email;
                })
                .catch(err => {
                    console.log(err.response.data.error.message, 'REQUESWT ERROR');
                    var codeText = '';
                    var err = err.response.data.error.message;
                    switch(err) {
                        case 'MISSING_PASSWORD':
                            codeText = 'Please enter password';
                            break;
                        case 'INVALID_EMAIL':
                            codeText = 'Please, enter valid email';
                            break;
                        case 'WEAK_PASSWORD : Password should be at least 6 characters':
                            codeText = 'Password should be at least 6 characters';
                            break;
                        case 'EMAIL_EXISTS':
                            codeText = 'This email already exists. Please log in.';
                            break;
                        deault:
                            codeText = err;
                    }
                    this.errCode = codeText;
                    this.alertVisible = 'error';
                });
            },
            dismissAlert() {
                this.alertVisible = '';
                this.errCode = '';
            }
        }
    }
</script>
