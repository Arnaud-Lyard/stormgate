import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnv } from 'vite';

const config: CodegenConfig = {
  schema: `${process.env.VITE_APP_API_TARGET}/graphql`,
  documents: './src/common/apollo/graphql/**/*.graphql',
  overwrite: true,
  watch: false,
  generates: {
    'src/common/apollo/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo', 'fragment-matcher'],
      config: { withCompositionFunctions: true },
    },
  },
}

export default config
