// src/utils/fileUtils.ts

/**
 * Convertit un fichier en base64.
 * @param file Le fichier à convertir.
 * @returns Une promesse qui résout en une chaîne encodée en base64.
 */
export function readAsBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result as string;
			resolve(result.split(",")[1]); // Supprime le préfixe `data:` URI
		};
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}
