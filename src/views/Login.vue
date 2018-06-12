<template>
    <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
            <br>
            <div class="card border-dark col">
                <div class="card-body">
                    <form>
                        <legend>Log In</legend>
                        <div class="form-group row">
                            <label for="userEmail" class="col-3 col-form-label">Email</label>
                            <div class="col-8">
                                <input type="email" class="form-control" id="userEmail" required v-model="logUser.userEmail">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="userPass" class="col-3 col-form-label">Password</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="userPass" required v-model="logUser.userPass">
                            </div>
                        </div>

                        <button class="btn btn-primary" @click.prevent="submitLogin">Log in</button>

                    </form>

                    <br>
                    <div class="alert alert-dismissible alert-danger" v-if="alertVisible === 'error'">
                      <button type="button" class="close" @click="dismissAlert">&times;</button>
                      <strong>{{errCode}}</strong> <br> Something went wrong! Try to submit again.
                    </div>
                    <div class="alert alert-dismissible alert-success"  v-if="alertVisible === 'success'">
                      <button type="button" class="close" @click="dismissAlert">&times;</button>
                      <strong>Hurray!</strong> You'll be redirected to Home page soon!
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
                logUser: {
                    userEmail: '',
                    userPass: ''
                },
                alertVisible: '',
                errCode: ''
            }
        },
        methods: {
            submitLogin() {
                axios.post('/verifyPassword?key=AIzaSyBUczyi7_AOFjsr4E0M7stBy0b7Fz1tNr0', {
                    email: this.logUser.userEmail,
                    password: this.logUser.userPass,
                    returnSecureToken: true
                })
                .then(res => {
                    this.alertVisible = 'success';
                    //console.log(res.data);
                    this.$store.dispatch('login', {email: this.logUser.userEmail, token: res.data.idToken, userId: res.data.localId });
                    this.logUser.userEmail = '';
                    this.logUser.userPass = '';
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
                        case 'INVALID_PASSWORD':
                            codeText = 'This password is wrong. Reset your password.';
                            break;
                        case 'EMAIL_NOT_FOUND':
                            codeText = 'This email isn\'t found. Please register or use another email.';
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
