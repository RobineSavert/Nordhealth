<template>
  <provet-stack class="n-reset n-width-100p">
    <provet-card>
      <p class="n-align-center n-margin-m">
        Our new super deluxe health care product will be available this Summer 2025!
        If you leave your e-mail address here, you will receive an update once it's ready to purchase!
      </p>
      <form @submit.prevent="submitForm">
        <div class="n-stack n-gap-s n-padding-be-l">
          <provet-input :id="'email-input'" v-model="formValues.email" label="E-mail" type="email" :expand="true" required  />
          <div class="n-error" v-if="errors.email" id="error" role="alert">{{ errors.email }}</div>
        </div>
        <div class="n-stack n-gap-s n-padding-be-l">
          <div class="flex flex-row" style="display: flex; flex-direction: row; align-items: flex-end;">
            <provet-input :id="'password-input'" v-model="formValues.password" label="Password" :type="showPassword ? 'text' : 'password'" :expand="true" required  />
            <provet-button type="button" variant="plain" @click="togglePassword" :disabled="!formValues.password">
              <provet-icon :name="passwordIcon"></provet-icon>
            </provet-button>
          </div>
          <div class="n-error" v-if="errors.password" id="error" role="alert">{{ errors.password }}</div>
        </div>
        <div class="n-stack n-gap-s n-padding-be-l">
          <provet-checkbox
              label="Receive occasional product updates and announcements"
              :checked="receiveUpdates"
              @change="handleCheckboxChange"
              :id="'check_receive_updates'"
          ></provet-checkbox>
        </div>
        <div class="n-stack n-gap-s n-padding-be-l">
          <provet-button-group aria-labelledby="label">
            <provet-button type="submit" variant="primary">
              <provet-icon slot="start" name="generic-port"></provet-icon>
              Sign up!
            </provet-button>
            <provet-button @click.prevent="clearForm()">Clear form</provet-button>
          </provet-button-group>
        </div>
      </form>
    </provet-card>
  </provet-stack>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from '~/stores/user'

const showPassword = ref(false);
const receiveUpdates = ref(false);

interface FormErrors {
  email?: string;
  password?: string;
  [key: string]: string | undefined;
}

interface FormValues {
  email: string;
  password: string;
}

const errors = ref<FormErrors>({});
const formValues = ref<FormValues>({
  email: '',
  password: ''
});




function handleCheckboxChange(event: Event) {
  const target = event.target as HTMLInputElement;
  receiveUpdates.value = target.checked;
}

function clearForm() {
  formValues.value.email = '';
  formValues.value.password = '';
}

const togglePassword = () => {

  if(formValues.value.password.length > 0) {
    showPassword.value = !showPassword.value;
  }
};

const passwordIcon = computed(() => {
  return showPassword.value ? 'interface-edit-on' : 'interface-edit-off'
})

const validateForm = () => {
  errors.value = {};

  if (!formValues.value.email) errors.value.email = 'Email is required';
  else if (!isValidEmail.value) errors.value.email = 'Please enter a valid email address';

  if (!formValues.value.password) {
    errors.value.password = 'Password is required';
  } else if (formValues.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters';
  }

  return Object.keys(errors.value).length === 0;
};

const isValidEmail = computed(() =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.value.email)
);


const submitForm = () => {
  if (validateForm()) {
    const userStore = useUserStore();
    userStore.setUserInfo(formValues.value.email, receiveUpdates.value)
    navigateTo('/success');
  }
}
</script>