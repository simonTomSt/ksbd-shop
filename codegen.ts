import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VENDURE_API_URL,
  documents: 'src/**/*.graphql',
  generates: {
    'src/lib/vendure/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          // This tells codegen that the `Money` scalar is a number
          Money: 'number',
        },
        namingConvention: {
          // This ensures generated enums do not conflict with the built-in types.
          enumValues: 'keep',
        },
      },
    },
  },
}

export default config
