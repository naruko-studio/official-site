// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import prettier from "eslint-plugin-prettier/recommended"

export default withNuxt(
  // Your custom configs here
  prettier,
  [
    {
      rules: {
        "vue/require-default-prop": "off",
      },
    },
  ],
)
