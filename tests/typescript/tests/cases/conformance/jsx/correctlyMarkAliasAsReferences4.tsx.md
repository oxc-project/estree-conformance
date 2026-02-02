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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "attributeName",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 185,
                            "end": 191
                          },
                          "start": 183,
                          "end": 191
                        },
                        "start": 170,
                        "end": 191
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 194,
                          "end": 196
                        },
                        "start": 194,
                        "end": 196
                      },
                      "start": 192,
                      "end": 196
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 169,
                    "end": 196
                  }
                ],
                "start": 168,
                "end": 197
              },
              "start": 166,
              "end": 197
            },
            "start": 154,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 154,
          "end": 197
        }
      ],
      "declare": false,
      "start": 150,
      "end": 197
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
            "start": 202,
            "end": 203
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 207,
                "end": 213
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
                    "start": 218,
                    "end": 229
                  },
                  "start": 214,
                  "end": 230
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 231,
                    "end": 240
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
                        "start": 242,
                        "end": 244
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "class1",
                          "raw": "'class1'",
                          "start": 245,
                          "end": 253
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
                                "start": 257,
                                "end": 263
                              },
                              "value": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 265,
                                "end": 269
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 257,
                              "end": 269
                            }
                          ],
                          "start": 255,
                          "end": 271
                        }
                      ],
                      "optional": false,
                      "start": 242,
                      "end": 272
                    },
                    "start": 241,
                    "end": 273
                  },
                  "start": 231,
                  "end": 273
                }
              ],
              "selfClosing": true,
              "start": 206,
              "end": 276
            },
            "children": [],
            "closingElement": null,
            "start": 206,
            "end": 276
          },
          "definite": false,
          "start": 202,
          "end": 276
        }
      ],
      "declare": false,
      "start": 198,
      "end": 277
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 83,
  "end": 277
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
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "attributeName",
    "start": 170,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "''",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 218,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "String",
    "value": "'class1'",
    "start": 245,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "class2",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  }
]
```
