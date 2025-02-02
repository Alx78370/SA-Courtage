<script setup lang="ts">
import type { Message } from "@/types/Message";

const mail = useMail();
const submitted = ref(false);
const validationMessages = ref({
  required: () => "Ce champ est obligatoire",
  email: () => "Veuillez saisir une adresse email valide",
});
const fullName = ref({
  firstName: "",
  lastName: "",
});

async function sendMail(formData: Message) {
  const { email, message } = formData;
  try {
    await mail.send({
      from: `Formulaire de contact <${import.meta.env.VITE_MAIL_USER}>`,
      to: import.meta.env.VITE_MAIL_TO,
      replyTo: email,
      subject: `Demande de contact de ${fullName.value.firstName} ${fullName.value.lastName}`,
      text: message,
    });
    submitted.value = true;
    reset("contact-form");
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
  }
}
</script>

<template>
  <div class="bg-white">
    <div class="border-b-2 border-slate-300 mb-3 pb-3">
      <h2 class="text-center pb-5 text-2xl md:text-3xl font-semibold px-5">Contactez-moi !</h2>
    </div>
    <div class="w-full h-[465px] flex flex-col justify-center items-center md:flex-row md:justify-between gap-10">
      <div class="hidden md:block md:w-1/2 h-full">
        <img src="/images/SA_contact.webp" alt="" class="h-full w-full object-cover rounded-2xl">
      </div>
      <div class="w-1/2">
        <FormKit
          id="contact-form"
          data-aos="fade-right"
          type="form"
          submit-label="Envoyer"
          class="space-y-4"
          @submit="sendMail"
        >
          <FormKit v-model="fullName" type="group">
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
          </FormKit>
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
      </div>
    </div>
    <div v-if="submitted">
      <p class="text-md text-green-500">
        {{ "Votre message a bien été envoyé." }}
      </p>
    </div>
  </div>
</template>
