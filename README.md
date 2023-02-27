# Vitest Snippets

[![Version](https://img.shields.io/visual-studio-marketplace/v/deinsoftware.vitest-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=deinsoftware.vitest-snippets)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/deinsoftware.vitest-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=deinsoftware.vitest-snippets)
[![Ratings](https://img.shields.io/visual-studio-marketplace/stars/deinsoftware.vitest-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=deinsoftware.vitest-snippets)
[![license](https://img.shields.io/github/license/deinsoftware/vscode-vitest-snippets)](LICENSE.md)
[![Open in VS Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/deinsoftware/vscode-vitest-snippets)

![Vitest](https://raw.githubusercontent.com/deinsoftware/vscode-vitest-snippet/main/.github/social/preview.png)

The quick and easy way to create and use Vitest with [VS Code](https://code.visualstudio.com/).

## Menu

- [Installation](#installation)
  - [Quick Launch](#quick-launch)
  - [Extension Manager](#extension-manager)
  - [Marketplace](#marketplace)
- [Supported Languages](#supported-languages)
- [Snippets](#snippets)
  - [Import](#import)
  - [Setup](#setup)
  - [Describe](#describe)
  - [Mock](#mock)
  - [It](#it)
  - [Test](#test)
  - [Expect](#expect)
  - [Assertion](#assertion)
- [Settings](#settings)
- [About](#about)

---

## Installation

### Quick Launch

Open the quick launch with <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (Win/Linux) or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (macOS).

Paste the following command and press `Enter`:

```shell
ext install deinsoftware.vitest-snippets
```

### Extension Manager

Open the extension manager with <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>X</kbd> (Win/Linux) or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>X</kbd> (macOS), search for `Vitest Snippets` and click on `[Install]` button.

### Marketplace

[Vitest Snippets](https://marketplace.visualstudio.com/items?itemName=deinsoftware.vitest-snippets)

⇧ [Back to menu](#menu)

---

## Supported Languages

| Language         | Extension |
| ---------------- | --------- |
| JavaScript       | `.js`     |

⇧ [Back to menu](#menu)

---

## Snippets

Below is a list of all available snippets and the triggers of each one. The **→** means the `TAB` key and `█` the final cursor position.

### Import

|  Trigger | Result                                            |
| -------: | ------------------------------------------------- |
|    `iv→` | `import { it, expect, describe } from 'vitest'█`  |

### Setup

|  Trigger | Result                                                          |
| -------: | --------------------------------------------------------------- |
|    `ae→` | <code>afterEach(() => {<br/>&nbsp;&nbsp;█<br/>})</code>         |
|    `aa→` | <code>afterAll(() => {<br/>&nbsp;&nbsp;█<br/>})</code>          |
|    `be→` | <code>beforeEach(() => {<br/>&nbsp;&nbsp;█<br/>})</code>        |
|   `bea→` | <code>beforeEach(async () => {<br/>&nbsp;&nbsp;█<br/>})</code>  |
|    `ba→` | <code>beforeAll(() => {<br/>&nbsp;&nbsp;█<br/>})</code>         |
|   `baa→` | <code>beforeAll(async () => {<br/>&nbsp;&nbsp;█<br/>})</code>   |

### Describe

|  Trigger | Result                                                                |
| -------: | --------------------------------------------------------------------- |
|     `d→` | <code>describe('group', () => {<br/>&nbsp;&nbsp;█<br/>})</code>       |
|    `do→` | <code>describe.only('group', () => {<br/>&nbsp;&nbsp;█<br/>})</code>  |
|    `ds→` | <code>describe.skip('group', () => {<br/>&nbsp;&nbsp;█<br/>})</code>  |

### Mock

|  Trigger | Result                                                                      |
| -------: | --------------------------------------------------------------------------- |
|    `vf→` | `vi.fn()█`                                                                  |
|  `vfrv→` | `vi.fn().mockResolvedValue(█)`                                              |
|    `cf→` | `const nameMock = vi.fn()█`                                                 |
|  `cfrv→` | `const nameMock = vi.fn().mockResolvedValue(█)`                             |
|   `mrv→` | `mock.mockReturnValue(█)`                                                   |
|  `mrvo→` | `mock.mockReturnValueOnce(█)`                                               |
|    `vs→` | `vi.spyOn(global, 'method')█`                                               |
|   `vsi→` | `vi.spyOn(global, 'method').mockImplementation(() => █)`                    |
|    `cs→` | `const methodSpy = vi.spyOn(global, 'method')█`                             |
|   `csi→` | `const methodSpy = vi.spyOn(global, 'method').mockImplementation(() => █)`  |

### It

|  Trigger | Result                                                            |
| -------: | ----------------------------------------------------------------- |
|     `i→` | <code>it('should', () => {<br/>&nbsp;&nbsp;█<br/>})</code>        |
|    `io→` | <code>it.only('should', () => {<br/>&nbsp;&nbsp;█<br/>})</code>   |
|    `is→` | <code>it.skip('should', () => {<br/>&nbsp;&nbsp;█<br/>})</code>   |
|    `it→` | `it.todo('should')█`                                              |
|    `ia→` | <code>it('should', async () => {<br/>&nbsp;&nbsp;█<br/>})</code>  |

### Test

|  Trigger | Result                                                             |
| -------: | ------------------------------------------------------------------ |
|     `t→` | <code>test('should', () => {<br/>&nbsp;&nbsp;█<br/>})</code>       |
|    `to→` | <code>test.only('should', () => {<br/>&nbsp;&nbsp;█<br/>})</code>  |
|    `ts→` | <code>test.skip('should', () => {<br/>&nbsp;&nbsp;█<br/>})</code>  |
|    `tt→` | `test.todo('should')█`                                             |
|    `ta→` | <code>test('should', async () => {<br/>&nbsp;&nbsp;█<br/>})</code> |

### Expect

|  Trigger | Result                     |
| -------: | -------------------------- |
|     `e→` | `expect(█)`                |
|    `ea→` | `expect.assertions(█)`     |
|   `eha→` | `expect.hasAssertions()█`  |
|   `erj→` | `expect( ).rejects█`       |
|   `ers→` | `expect( ).resolves`       |

### Assertion

|   Trigger | Result                                                                                      |
| --------: | ------------------------------------------------------------------------------------------- |
|     `tb→` | `expect( ).toBe( )█`                                                                        |
|   `tbct→` | `expect( ).toBeCloseTo( )█`                                                                 |
|    `tbd→` | `expect( ).toBeDefined( )█`                                                                 |
|    `tbf→` | `expect( ).toBeFalsy( )█`                                                                   |
|   `tbgt→` | `expect( ).toBeGreaterThan( )█`                                                             |
|  `tbgte→` | `expect( ).toBeGreaterThanOrEqual( )█`                                                      |
|    `tbi→` | `expect( ).toBeInstanceOf( )█`                                                              |
|   `tblt→` | `expect( ).toBeLessThan( )█`                                                                |
|  `tblte→` | `expect( ).toBeLessThanOrEqual( )█`                                                         |
|    `tbn→` | `expect( ).toBeNull( )█`                                                                    |
|    `tbt→` | `expect( ).toBeTruthy( )█`                                                                  |
|    `tbu→` | `expect( ).toBeUndefined( )█`                                                               |
|     `tc→` | `expect( ).toContain( )█`                                                                   |
|    `tce→` | `expect( ).toContainEqual( )█`                                                              |
|     `te→` | `expect( ).toEqual( )█`                                                                     |
|   `thbc→` | `expect( ).toHaveBeenCalled( )█`                                                            |
|  `thbct→` | `expect( ).toHaveBeenCalledTimes( )█`                                                       |
|  `thbcw→` | `expect( ).toHaveBeenCalledWith( )█`                                                        |
| `thblcw→` | `expect( ).toHaveBeenLastCalledWith( )█`                                                    |
|    `thl→` | `expect( ).toHaveLength( )█`                                                                |
|    `thp→` | `expect( ).toHaveProperty(keyPath, value)█`                                                 |
|     `tm→` | `expect( ).toMatch( )█`                                                                     |
|   `tmis→` | `expect( ).toMatchInlineSnapshot( )█`                                                       |
|    `tmo→` | `expect( ).toMatchObject( )█`                                                               |
|    `tse→` | `expect( ).toStrictEqual( )█`                                                               |
|     `tt→` | <code>expect(() => {<br/>&nbsp;&nbsp;█<br/>}).toThrow( )</code>                             |
|    `tte→` | <code>expect(() => {<br/>&nbsp;&nbsp;█<br/>}).toThrowError( )</code>                        |
| `ttemis→` | <code>expect(() => {<br/>&nbsp;&nbsp;█<br/>}).toThrowErrorMatchingInlineSnapshot( )</code>  |
|  `ttems→` | <code>expect(() => {<br/>&nbsp;&nbsp;█<br/>}).toThrowErrorMatchingSnapshot( )</code>        |

⇧ [Back to menu](#menu)

---

## Settings

The `editor.snippetSuggestions` setting in vscode `settings.json` will show snippets on top of the suggestion list.

```json
"editor.snippetSuggestions": "top"
```

⇧ [Back to menu](#menu)

---

## About

### Fork

- [vscode-jest-snippets](https://github.com/andys8/vscode-jest-snippets) - Jest snippets extension for VS Code

### Built With

- [VS Code](https://code.visualstudio.com/) - Code editing redefined.
- [Figma](https://www.figma.com/) - The collaborative interface design tool.

### Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [Const & Props Snippets](https://github.com/deinsoftware/vscode-vitest-snippets/tags) on GitHub.

### Authors

- **Camilo Martinez** [[Equiman](http://github.com/equiman)]

See also the list of [contributors](https://github.com/deinsoftware/vscode-vitest-snippets/contributors) who participated in this project.

### Sponsors

If this project helps you, consider buying me a cup of coffee.

[![GitHub Sponsors](https://img.shields.io/badge/-GitHub%20Sponsors-gray?style=flat&labelColor=171515&logo=github&logoColor=white&link=https://github.com/sponsors/deinsoftware)](https://github.com/sponsors/deinsoftware)
[![paypal](https://img.shields.io/badge/-PayPal-gray?style=flat&labelColor=00457C&logo=paypal&logoColor=white&link=https://paypal.me/equiman/3)](https://paypal.me/equiman/3)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

⇧ [Back to menu](#menu)
