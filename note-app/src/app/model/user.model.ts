import { Note } from "./note.model";

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  notes: Note[];
  token: string;
  activated: boolean;
}
