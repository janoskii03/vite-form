<template>
    <v-container style="max-width: 1280px;">
        <v-sheet class="mx-auto" width="600">
            <div class="text-h2 mb-4">Login Form</div>
            <v-form ref="form" @submit="onSubmit">
                <v-text-field v-model="account" label="account"></v-text-field>
                <div>{{ errors.account }}</div>
                <v-text-field v-model="password" :counter="12" label="Password"></v-text-field>
                <div>{{ errors.password }}</div>
                <v-text-field v-model="confirmPassword" :counter="12" label="ConfirmPassword"></v-text-field>
                <div>{{ errors.confirmPassword }}</div>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <div>{{ errors.email }}</div>
                <v-container fluid>
                    <v-checkbox v-model="rememberAccount" color="success" label="記住密碼"></v-checkbox>
                </v-container>
                <div class="d-flex flex-column">
                    <v-btn class="mt-4" color="success" block @click="onSubmit">
                        Validate
                    </v-btn>


                </div>
            </v-form>
        </v-sheet>
    </v-container>
</template>
<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';


const validationSchema = yup.object({
    account: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    email: yup.string().email().required(),
});


const { handleSubmit, defineField, errors } = useForm({
    validationSchema,
    initialValues: {
        account: '',
        password: '',
        confirmPassword: '',
        email: '',
    },
});

const rememberAccount = ref(false);

const [account] = defineField('account');
const [password] = defineField('password');
const [confirmPassword] = defineField('confirmPassword');
const [email] = defineField('email');


const onSubmit = handleSubmit((values, { resetForm }) => {
    console.log('success submit', values);
    if (values.password !== values.confirmPassword) {
        return;
    }
    resetForm();
})
</script>
