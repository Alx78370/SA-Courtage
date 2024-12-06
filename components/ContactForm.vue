<script setup lang="ts">
import type { Message } from '@/types/Message'
import { reset } from '@formkit/core'

const mail = useMail()
const submitted = ref(false)
const validationMessages = ref({
  required: () => ('Ce champ est obligatoire'),
  email: () => ('Veuillez saisir une adresse email valide'),
})
const fullName = ref({
  firstName: '',
  lastName: '',
})

async function sendMail(formData: Message) {
  const { email, message } = formData
  try {
    await mail.send({
      from: `Formulaire de contact <${import.meta.env.VITE_MAIL_USER}>`,
      to: import.meta.env.VITE_MAIL_TO,
      replyTo: email,
      subject: `Demande de contact de ${fullName.value.firstName} ${fullName.value.lastName}`,
      text: message,

    })
    submitted.value = true
    reset('contact-form')
  }
  catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
  }
}
</script>

<template>
  <div class="border-2 rounded-3xl bg-white shadow-2xl p-5">
    <div class="border-b-2 mb-3 pb-3">
      <h3 class="text-4xl border-b-2 mb-3 pb-3">
        Contactez-moi !
      </h3>
      <p>
        Vous avez une question, un projet ou une demande de devis ? N'hésitez pas à me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les plus brefs délais.
      </p>
    </div>
    <FormKit
      id="contact-form"
      data-aos="fade-right"
      type="form"
      submit-label="Envoyer"
      class="space-y-4"
      @submit="sendMail"
    >
      <FormKit
        v-model="fullName" type="group"
      >
        <div class="">
          <FormKit
            type="text"
            label="Prénom*"
            name="firstName"
            placeholder="Votre prénom"
            validation="required"
            validation-visibility="dirty"
            :validation-messages="validationMessages"
          />
          <FormKit
            type="text"
            name="lastName"
            label="Nom*"
            placeholder="Votre nom"
            validation="required"
            validation-visibility="dirty"
            :validation-messages="validationMessages"
          />
        </div>
      </formkit>
      <FormKit
        type="email"
        label="Email*"
        name="email"
        validation="required|email"
        placeholder="Votre adresse email"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
      <FormKit
        type="textarea"
        label="Message*"
        name="message"
        validation="required"
        placeholder="Votre message"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
    </FormKit>
    <div v-if="submitted">
      <p class="text-md text-green-500">
        {{ 'Votre message a bien été envoyé.' }}
      </p>
    </div>
  </div>
</template>
