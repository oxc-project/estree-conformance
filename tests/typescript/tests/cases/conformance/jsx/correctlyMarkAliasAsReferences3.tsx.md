__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "classnames",
        "raw": "\"classnames\"",
        "start": 15,
        "end": 27
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"classnames\"",
    "start": 15,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cx",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 97
          },
          "start": 90,
          "end": 97
        }
      ],
      "source": {
        "type": "Literal",
        "value": "classnames",
        "raw": "'classnames'",
        "start": 103,
        "end": 115
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 116
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 134
          },
          "start": 124,
          "end": 134
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 140,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 117,
      "end": 148
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 154,
          "end": 165
        }
      ],
      "declare": false,
      "start": 150,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 172
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 176,
                "end": 182
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 198
                  },
                  "start": 183,
                  "end": 199
                }
              ],
              "selfClosing": false,
              "start": 175,
              "end": 200
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n            ",
                "raw": "\n            ",
                "start": 200,
                "end": 213
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 214,
                    "end": 218
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "className",
                        "start": 219,
                        "end": 228
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 232
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "class1",
                              "raw": "'class1'",
                              "start": 233,
                              "end": 241
                            },
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "class2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 245,
                                    "end": 251
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 253,
                                    "end": 257
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 245,
                                  "end": 257
                                }
                              ],
                              "start": 243,
                              "end": 259
                            }
                          ],
                          "optional": false,
                          "start": 230,
                          "end": 260
                        },
                        "start": 229,
                        "end": 261
                      },
                      "start": 219,
                      "end": 261
                    }
                  ],
                  "selfClosing": true,
                  "start": 213,
                  "end": 264
                },
                "children": [],
                "closingElement": null,
                "start": 213,
                "end": 264
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 264,
                "end": 273
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 275,
                "end": 281
              },
              "start": 273,
              "end": 282
            },
            "start": 175,
            "end": 282
          },
          "definite": false,
          "start": 171,
          "end": 282
        }
      ],
      "declare": false,
      "start": 167,
      "end": 283
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 83,
  "end": 283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 98,
    "end": 102
  },
  {
    "type": "String",
    "value": "'classnames'",
    "start": 103,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 135,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 154,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 187,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 200,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 214,
    "end": 218
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 219,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "'class1'",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "class2",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 264,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 274,
    "end": 275
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  }
]
```
