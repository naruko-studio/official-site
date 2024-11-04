import { describe, test, expect } from "vitest"
import { setup, $fetch } from "@nuxt/test-utils/e2e"

describe("なるこテスト", async () => {
  await setup({})

  test("Check Home", async () => {
    const html = await $fetch("/")
    expect(html).toContain("Welcome to Nuxt UI Starter")
  })
})
