__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "deprecatedRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 79
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "jsx-sort-default-props",
                  "raw": "\"jsx-sort-default-props\"",
                  "start": 86,
                  "end": 110
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 112,
                  "end": 116
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 86,
                "end": 116
              }
            ],
            "start": 82,
            "end": 118
          },
          "definite": false,
          "start": 64,
          "end": 118
        }
      ],
      "declare": false,
      "start": 58,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "allRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 134
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "no-unsafe",
                  "raw": "'no-unsafe'",
                  "start": 141,
                  "end": 152
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 154,
                  "end": 158
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 141,
                "end": 158
              }
            ],
            "start": 137,
            "end": 160
          },
          "definite": false,
          "start": 126,
          "end": 160
        }
      ],
      "declare": false,
      "start": 120,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 176
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "plugins",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 190
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "react",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deprecatedRules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 228
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deprecatedRules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 228
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 213,
                          "end": 228
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 241
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "allRules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 251
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 236,
                          "end": 251
                        }
                      ],
                      "start": 205,
                      "end": 258
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 198,
                    "end": 258
                  }
                ],
                "start": 192,
                "end": 263
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 183,
              "end": 263
            }
          ],
          "start": 179,
          "end": 266
        },
        "start": 162,
        "end": 266
      },
      "directive": null,
      "start": 162,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 268
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "deprecatedRules",
    "start": 64,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"jsx-sort-default-props\"",
    "start": 86,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "allRules",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "'no-unsafe'",
    "start": 141,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "plugins",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "react",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "deprecatedRules",
    "start": 213,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "rules",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "allRules",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "config",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 196
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 207
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 197,
          "end": 207
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 209,
        "end": 212
      },
      "expression": false,
      "start": 181,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 220
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 228
          },
          "optional": false,
          "computed": false,
          "start": 214,
          "end": 228
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 239
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 239
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 233,
              "end": 239
            }
          ],
          "start": 231,
          "end": 241
        },
        "start": 214,
        "end": 241
      },
      "directive": null,
      "start": 214,
      "end": 242
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 181,
  "end": 243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 181,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "configs",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eslintReact",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./eslint-plugin-react.js",
                "raw": "'./eslint-plugin-react.js'",
                "start": 28,
                "end": 54
              }
            ],
            "optional": false,
            "start": 20,
            "end": 55
          },
          "definite": false,
          "start": 6,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tseslint",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 71
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 81
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./typescript-eslint.js",
                "raw": "'./typescript-eslint.js'",
                "start": 82,
                "end": 106
              }
            ],
            "optional": false,
            "start": 74,
            "end": 107
          },
          "definite": false,
          "start": 63,
          "end": 107
        }
      ],
      "declare": false,
      "start": 57,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "tseslint",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 125
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "eslintReact",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 137
          }
        ],
        "optional": false,
        "start": 110,
        "end": 138
      },
      "directive": null,
      "start": 110,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "eslintReact",
    "start": 6,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "'./eslint-plugin-react.js'",
    "start": 28,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "tseslint",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "'./typescript-eslint.js'",
    "start": 82,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "tseslint",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "eslintReact",
    "start": 126,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  }
]
```
