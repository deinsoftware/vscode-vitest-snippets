const importSnippets = require("../snippets/import.json")
const setupSnippets = require("../snippets/setup.json")
const describeSnippets = require("../snippets/describe.json")
const mockSnippets = require("../snippets/mock.json")
const itSnippets = require("../snippets/it.json")
const testSnippets = require("../snippets/test.json")
const expectSnippets = require("../snippets/expect.json")
const assertionSnippets = require("../snippets/assertion.json")

const snippets = {
  ...importSnippets,
  ...setupSnippets,
  ...describeSnippets,
  ...mockSnippets,
  ...itSnippets,
  ...testSnippets,
  ...expectSnippets,
  ...assertionSnippets,
}

const unique = (xs) => [...new Set(xs)]

describe("snippets.json", () => {
  it("has entries", () => {
    expect(Object.keys(snippets).length).toBeGreaterThan(0)
  })

  it("has unique prefixes", () => {
    const prefixes = Object.values(snippets).map((x) => x.prefix)
    expect(prefixes).toEqual(unique(prefixes))
  })

  describe.each(Object.keys(snippets))("%s", (k) => {
    it("has prefix", () => {
      const { prefix } = snippets[k]
      expect(prefix).toBeDefined()
      expect(prefix).not.toEqual("")
    })

    it("has body", () => {
      const { body } = snippets[k]
      expect(body).toBeDefined()
      expect(body).not.toEqual("")
    })

    it("has description", () => {
      const { description } = snippets[k]
      expect(description).toBeDefined()
      expect(description).not.toEqual("")
    })
  })
})