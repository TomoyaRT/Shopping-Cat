import { describe, it } from "https://deno.land/std@0.156.0/testing/bdd.ts"
import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts"

describe("這只是個簡單的測試", () => {
  it("1 + 1 等於多少", () => {
    expect(1 + 1).toBe(2)
  })

  it("真的假不了！", () => {
    expect(true).not.toBe(false)
  })
})
