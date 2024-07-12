export interface SessionData {
  access_token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  role: Role;
  birth_date: string;
  cpf_initials: string;
  phone_number_initials: string;
  company_id: string;
}

export interface Role {
  code: string;
  description: string;
}
