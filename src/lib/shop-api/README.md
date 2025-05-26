# Shop API Client Documentation

This directory contains the GraphQL client setup for connecting to the Vendure JS API. The client is built using Graffle and provides type-safe GraphQL operations.

## Setup

The shop API client is already configured with:

- Authentication token handling
- Locale support
- Automatic cookie management for auth tokens
- Type-safe GraphQL operations

## Usage

### Basic Query Example

```typescript
import { shopClient } from './shopClient';

// Example query
const result = await shopClient.query({
  products: {
    items: {
      id: true,
      name: true,
      description: true,
      // Add more fields as needed
    },
  },
});
```

### Basic Mutation Example

```typescript
import { shopClient } from './shopClient';

// Example mutation
const result = await shopClient.mutation({
  addItemToOrder: {
    id: true,
    total: true,
    // Add more fields as needed
  },
});
```

## Features

1. **Authentication**

   - Automatic token handling through cookies
   - Token refresh on API responses
   - Secure token storage

2. **Internationalization**

   - Automatic locale handling
   - Language code support in API requests

3. **Type Safety**

   - Full TypeScript support
   - Generated types for all GraphQL operations
   - Autocomplete for available fields

4. **Error Handling**
   - Built-in error types
   - GraphQL error handling

## Configuration

The client is configured in `shopClient.ts` with the following features:

- Credentials inclusion for cross-origin requests
- Automatic auth token management
- Locale support
- Custom fetcher implementation

## Available Operations

The client supports all Vendure GraphQL operations including:

- Queries (products, orders, customers, etc.)
- Mutations (add to cart, checkout, etc.)
- Subscriptions (real-time updates)

## Best Practices

1. Always use the type-safe query/mutation builders
2. Handle errors appropriately using try/catch
3. Use the provided auth token management
4. Include necessary fields in your queries to avoid over-fetching

## Environment Variables

The client requires the following environment variable:

- `VENDURE_API_URL`: The URL of your Vendure API endpoint
