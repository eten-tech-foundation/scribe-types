// Document types for the Scribe application

import { BaseEntity } from './common';

export interface Document extends BaseEntity {
  title: string;
  content: string;
  ownerId: string;
  isPublic: boolean;
  tags: string[];
  lastModifiedBy: string;
  version: number;
  status: DocumentStatus;
  wordCount: number;
  characterCount: number;
  language?: string;
  metadata?: DocumentMetadata;
}

export enum DocumentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
  DELETED = 'deleted'
}

export interface DocumentMetadata {
  template?: string;
  category?: string;
  priority?: DocumentPriority;
  collaborators?: string[];
  comments?: DocumentComment[];
  customFields?: Record<string, any>;
}

export enum DocumentPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export interface DocumentComment {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  position?: {
    start: number;
    end: number;
  };
  resolved: boolean;
  replies?: DocumentComment[];
}

export interface CreateDocumentRequest {
  title: string;
  content?: string;
  isPublic?: boolean;
  tags?: string[];
  metadata?: Partial<DocumentMetadata>;
}

export interface UpdateDocumentRequest {
  title?: string;
  content?: string;
  isPublic?: boolean;
  tags?: string[];
  status?: DocumentStatus;
  metadata?: Partial<DocumentMetadata>;
}

export interface DocumentShareRequest {
  documentId: string;
  userIds: string[];
  permissions: DocumentPermissions;
}

export interface DocumentPermissions {
  read: boolean;
  write: boolean;
  delete: boolean;
  share: boolean;
}

export interface DocumentVersion {
  id: string;
  documentId: string;
  version: number;
  title: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  changeNote?: string;
}
