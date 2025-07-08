// User types for user management

import { BaseEntity } from './common';

export interface User extends BaseEntity {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: number; // Role ID (integer) referencing roles.id
  createdBy?: number; // User ID (integer) referencing users.id
  isActive: boolean;
}

export interface UserRole {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  name: string;
  resource: string;
  action: string;
}

export interface UserProfile {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: number; // Role ID (integer) referencing roles.id
}

export interface UpdateUserRequest {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: number; // Role ID (integer) referencing roles.id
  isActive?: boolean;
}
