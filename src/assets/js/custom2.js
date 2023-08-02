
new Vue({
    el: '#app',
    data: {
        IsShowLoginSection: true,
        IsShowRegisterSection: false,
        UserName: ''
    },
    methods: {
        ShowRegisterSection: function () {
            this.IsShowLoginSection = false;
            this.IsShowRegisterSection = true;
        },
        ShowLoginSection: function () {
            this.IsShowLoginSection = true;
            this.IsShowRegisterSection = false;
        },
        CheckUserName: function () {

            var input = this.$refs.UserNameInput;

            if (this.UserName === '') {
                input.classList.remove('success');
                input.classList.add('error');
            } else {
                input.classList.remove('error');
                input.classList.add('success');
            }
        }
    },
    watch: {
        UserName: function () {
            this.CheckUserName();
        }
    },
});