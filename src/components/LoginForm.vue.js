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
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ style: ({}) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.VSheet;
    /** @type { [typeof __VLS_components.VSheet, typeof __VLS_components.vSheet, typeof __VLS_components.VSheet, typeof __VLS_components.vSheet, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        ...{ class: ("mx-auto") },
        width: ("600"),
    }));
    const __VLS_9 = __VLS_8({
        ...{ class: ("mx-auto") },
        width: ("600"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-h2 mb-4") },
    });
    const __VLS_13 = {}.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ 'onSubmit': {} },
        ref: ("form"),
    }));
    const __VLS_15 = __VLS_14({
        ...{ 'onSubmit': {} },
        ref: ("form"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    // @ts-ignore navigation for `const form = ref()`
    /** @type { typeof __VLS_ctx.form } */ ;
    var __VLS_19 = {};
    let __VLS_20;
    const __VLS_21 = {
        onSubmit: (__VLS_ctx.onSubmit)
    };
    let __VLS_16;
    let __VLS_17;
    const __VLS_22 = {}.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
        modelValue: ((__VLS_ctx.account)),
        label: ("account"),
    }));
    const __VLS_24 = __VLS_23({
        modelValue: ((__VLS_ctx.account)),
        label: ("account"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.errors.account);
    const __VLS_28 = {}.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        modelValue: ((__VLS_ctx.password)),
        counter: ((12)),
        label: ("Password"),
    }));
    const __VLS_30 = __VLS_29({
        modelValue: ((__VLS_ctx.password)),
        counter: ((12)),
        label: ("Password"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.errors.password);
    const __VLS_34 = {}.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
        modelValue: ((__VLS_ctx.confirmPassword)),
        counter: ((12)),
        label: ("ConfirmPassword"),
    }));
    const __VLS_36 = __VLS_35({
        modelValue: ((__VLS_ctx.confirmPassword)),
        counter: ((12)),
        label: ("ConfirmPassword"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.errors.confirmPassword);
    const __VLS_40 = {}.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        modelValue: ((__VLS_ctx.email)),
        label: ("Email"),
    }));
    const __VLS_42 = __VLS_41({
        modelValue: ((__VLS_ctx.email)),
        label: ("Email"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.errors.email);
    const __VLS_46 = {}.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */ ;
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
        fluid: (true),
    }));
    const __VLS_48 = __VLS_47({
        fluid: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = {}.VCheckbox;
    /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        modelValue: ((__VLS_ctx.rememberAccount)),
        color: ("success"),
        label: ("記住密碼"),
    }));
    const __VLS_54 = __VLS_53({
        modelValue: ((__VLS_ctx.rememberAccount)),
        color: ("success"),
        label: ("記住密碼"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_51.slots.default;
    var __VLS_51;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-flex flex-column") },
    });
    const __VLS_58 = {}.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */ ;
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({
        ...{ 'onClick': {} },
        ...{ class: ("mt-4") },
        color: ("success"),
        block: (true),
    }));
    const __VLS_60 = __VLS_59({
        ...{ 'onClick': {} },
        ...{ class: ("mt-4") },
        color: ("success"),
        block: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    let __VLS_64;
    const __VLS_65 = {
        onClick: (__VLS_ctx.onSubmit)
    };
    let __VLS_61;
    let __VLS_62;
    __VLS_63.slots.default;
    var __VLS_63;
    __VLS_18.slots.default;
    var __VLS_18;
    __VLS_12.slots.default;
    var __VLS_12;
    __VLS_5.slots.default;
    var __VLS_5;
    ['mx-auto', 'text-h2', 'mb-4', 'd-flex', 'flex-column', 'mt-4',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'form': __VLS_19,
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            errors: errors,
            rememberAccount: rememberAccount,
            account: account,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
            onSubmit: onSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
