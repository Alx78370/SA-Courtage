<script setup lang="ts">
import type { Message } from "@/types/Message";
import { readAsBase64 } from "@/utils/fileUtils";
import { reset } from "@formkit/core";

const mail = useMail();
const submitted = ref(false);
const validationMessages = ref({
  required: () => "Ce champ est obligatoire",
  email: () => "Veuillez saisir une adresse email valide",
  file: () =>
    "Seuls les fichiers PDF et les images PNG, JPG ou JPEG sont acceptés.",
});
const fullName = ref({
  firstName: "",
  lastName: "",
});

async function sendMail(formData: Message) {
  const { email, message, document } = formData;

  try {
    const attachments = [];

    if (document && document.length > 0) {
      for (const fileObj of document) {
        if (fileObj.file) {
          const file = fileObj.file;

          const base64Content = await readAsBase64(file);

          attachments.push({
            filename: file.name,
            content: base64Content,
            encoding: "base64",
          });
        }
      }
    }
    await mail.send({
      from: `Formulaire de contact <${import.meta.env.VITE_MAIL_USER}>`,
      to: import.meta.env.VITE_MAIL_TO,
      replyTo: email,
      subject: `Demande de devis pour assurance emprunteur par ${fullName.value.firstName} ${fullName.value.lastName}`,
      text: message || "Pas de message fourni.",
      attachments,
    });

    submitted.value = true;
    reset("contact-form");
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
  }
}
</script>

<template>
  <div class="bg-white p-5 md:px-24 lg:px-44 xl:px-[30%]">
    <div class="border-b-2 mb-3 pb-3">
      <h3 class="pb-3 text-2xl font-semibold text-center mb-3">
        Demande de devis pour assurance emprunteur
      </h3>
    </div>
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
        label="Message"
        name="message"
        placeholder="Votre message (facultatif)"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
      <FormKit
        type="file"
        label="Documents*"
        name="document"
        multiple="true"
        file-item-icon="fileDoc"
        no-files-icon="fileDoc"
        help="Pour séléctionner plusieurs fichiers, maintenez la touche Ctrl (ou Cmd sur Mac) enfoncée."
        accept=".pdf,.png,.jpg,.jpeg"
        validation="required|file"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
    </FormKit>
    <div v-if="submitted">
      <p class="text-md text-green-500">
        {{ "Votre document a bien été envoyé." }}
      </p>
    </div>
  </div>
</template>
