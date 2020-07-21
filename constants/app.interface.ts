import { dataType, ruleTrigger, Validator, PromiseValidtor, UserRole } from './app.type';

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  email: string;
  password: string;
  fullName: string;
  avatarUrl: string;
  gender?: number;
  roleId?: number;
  teamId?: number;
  jobPositionId?: number;
}

export interface ResetPasswordDTO {
  email: string;
}

export interface ResetPasswordActionDTO {
  newPassword: string;
  token: string;
}

export interface Map<T> {
  key: string;
  name: T;
}

export interface ConfigMaps<T> extends Record<string, T> {}

export interface FormRule {
  type?: dataType;
  required?: true | false;
  message?: string;
  validator?: Validator | PromiseValidtor;
  trigger?: ruleTrigger;
  min?: number;
  max?: number;
}

/**
 * Store
 */

export interface AuthResponse {
  token: string;
}

export interface UserState {
  fullName: string;
}
