import antfu from '@antfu/eslint-config';

export default antfu(
  {
    typescript: true,
    vue: true,
    ignores: ['tsconfig*'],
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      'style/semi': ['error', 'always'],
    },
  },
);
