# @eten-tech-foundation/scribe-types

TypeScript type definitions shared between Scribe web and server applications.

## Installation

```bash
npm install @eten-tech-foundation/scribe-types
```

## Usage

```typescript
import { 
  User, 
  LoginRequest, 
  LoginResponse, 
  ApiResponse, 
  PaginatedResponse 
} from '@eten-tech-foundation/scribe-types';

// Use the types in your application
const user: User = {
  id: '1',
  email: 'user@example.com',
  username: 'johndoe',
  isActive: true,
  isVerified: true,
  roles: [],
  createdAt: new Date(),
  updatedAt: new Date()
};

const loginRequest: LoginRequest = {
  email: 'user@example.com',
  password: 'password123'
};
```

## Available Types

### Common Types
- `BaseEntity` - Base interface for all entities
- `PaginationParams` - Parameters for pagination
- `PaginatedResponse<T>` - Response with pagination info
- `ErrorResponse` - Standard error response
- `SuccessResponse<T>` - Standard success response

### API Types
- `HttpMethod` - HTTP method types
- `ApiRequest<T>` - API request interface
- `ApiResponse<T>` - API response interface
- `ApiError` - API error interface
- `ApiEndpoint` - API endpoint definition

### User Types
- `User` - Complete user entity
- `UserRole` - User role definition
- `Permission` - Permission definition
- `UserProfile` - Public user profile
- `CreateUserRequest` - Create user request
- `UpdateUserRequest` - Update user request

### Authentication Types
- `LoginRequest` - Login request
- `LoginResponse` - Login response
- `RegisterRequest` - Registration request
- `RefreshTokenRequest` - Refresh token request
- `RefreshTokenResponse` - Refresh token response
- `ResetPasswordRequest` - Reset password request
- `ConfirmResetPasswordRequest` - Confirm reset password request
- `ChangePasswordRequest` - Change password request
- `AuthTokens` - Authentication tokens
- `JwtPayload` - JWT payload structure

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Publish to npm
npm publish
```

## License

MIT
