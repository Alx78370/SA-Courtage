import type { FormKitNode } from "@formkit/core";

/**
 * Règle de validation personnalisée pour vérifier les types MIME des fichiers.
 * Autorise uniquement les fichiers PDF, PNG, JPG et JPEG.
 */
const fileValidation = function (node: FormKitNode) {
  const allowedMimeTypes = ["application/pdf", "image/png", "image/jpeg"];

  if (!node.value || !Array.isArray(node.value)) {
    return false;
  }

  return node.value.every((fileWrapper: { file: File }) => {
    const file = fileWrapper.file;
    return file && allowedMimeTypes.includes(file.type);
  });
};

export default fileValidation;
