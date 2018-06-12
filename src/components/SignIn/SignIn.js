import { validationMixin } from 'vuelidate'
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
        form: {
            email: null,
            password: null
        },
        userSaved: false,
        sending: false,
        lastUser: null
    }),
    validations: {
        form: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(3)
            }
        }
    },
    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm () {
            this.$v.$reset();
            this.form.email = null;
            this.form.password = null;
        },
        saveUser () {
            this.sending = true;

            // Instead of this timeout, here you can call your API
            window.setTimeout(() => {
                this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
                this.userSaved = true;
                this.sending = false;
                this.clearForm();


            }, 1500)
        },
        validateUser () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveUser()
            }
        },
        fetchData: function(){

        }
    }
}