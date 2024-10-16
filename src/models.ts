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
  document_initials: string;
  phone_number_initials: string;
  company_id: string;
}

export interface Role {
  code: number;
  description: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  company_id: string;
  init_date: Date;
  end_date: Date;
  status: EventStatus;
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
}

export interface TicketSale{
  id: string;
  event_id: string;
  name: string;
  description: string;
  price: number;
  entries: number;
  active: boolean;
}

export enum EventStatus {
  OPENED = "Aberto",
  FINISHED = "Finalizado",
  SCHEDULED = "Agendado",
  IN_PROGRESS = "Em andamento",
  CANCELED = "Cancelado",
}

export interface Ticket {
  id: string;
  event_id: string;
  user_id: string;
  description: string;
  valid_in: Date;
  expired_in: Date;
  status: TicketStatus;
  code: string;
  last_time_consumed: Date;
}

export enum TicketStatus {
  AVAILABLE = "Aguardando validação",
  CONSUMED = "Validado",
  EXPIRED = "Expirado",
}

export interface Enrollment {
  id: string;
  event_id: string;
  user_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
