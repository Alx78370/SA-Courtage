export interface Message {
  email: string;
  subject: string;
  message: string;
  document?: { file: File }[];
}
