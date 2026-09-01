__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 89
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 93,
                "end": 96
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 92,
              "end": 97
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 97,
                "end": 98
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 99,
                    "end": 101
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 98,
                  "end": 102
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 102,
                    "end": 109
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 111,
                    "end": 113
                  },
                  "start": 109,
                  "end": 114
                },
                "start": 98,
                "end": 114
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 114,
                "end": 115
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 116,
                    "end": 118
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 115,
                  "end": 119
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " world ",
                    "raw": " world ",
                    "start": 119,
                    "end": 126
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 128,
                    "end": 130
                  },
                  "start": 126,
                  "end": 131
                },
                "start": 115,
                "end": 131
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 133,
                "end": 136
              },
              "start": 131,
              "end": 137
            },
            "start": 92,
            "end": 137
          },
          "definite": false,
          "start": 87,
          "end": 137
        }
      ],
      "declare": false,
      "start": 83,
      "end": 138
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 145
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 149,
                "end": 152
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 148,
              "end": 153
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 153,
                "end": 154
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 155,
                    "end": 157
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 154,
                  "end": 158
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 158,
                    "end": 165
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 167,
                    "end": 169
                  },
                  "start": 165,
                  "end": 170
                },
                "start": 154,
                "end": 170
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 170,
                "end": 171
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 179,
                          "end": 182
                        },
                        "start": 177,
                        "end": 182
                      },
                      "start": 173,
                      "end": 182
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 188,
                        "end": 190
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 187,
                      "end": 191
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "user",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 192,
                            "end": 196
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 201
                          },
                          "optional": false,
                          "computed": false,
                          "start": 192,
                          "end": 201
                        },
                        "start": 191,
                        "end": 202
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 204,
                        "end": 206
                      },
                      "start": 202,
                      "end": 207
                    },
                    "start": 187,
                    "end": 207
                  },
                  "id": null,
                  "generator": false,
                  "start": 172,
                  "end": 207
                },
                "start": 171,
                "end": 208
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 210,
                "end": 213
              },
              "start": 208,
              "end": 214
            },
            "start": 148,
            "end": 214
          },
          "definite": false,
          "start": 143,
          "end": 214
        }
      ],
      "declare": false,
      "start": 139,
      "end": 215
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 222
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 226,
                "end": 229
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 225,
              "end": 230
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 230,
                "end": 231
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 232,
                  "end": 233
                },
                "start": 231,
                "end": 234
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 234,
                "end": 235
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "That is a number",
                  "raw": "\"That is a number\"",
                  "start": 236,
                  "end": 254
                },
                "start": 235,
                "end": 255
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 255,
                "end": 256
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 258,
                "end": 261
              },
              "start": 256,
              "end": 262
            },
            "start": 225,
            "end": 262
          },
          "definite": false,
          "start": 220,
          "end": 262
        }
      ],
      "declare": false,
      "start": 216,
      "end": 263
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 263
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "JSXText",
    "value": " Hello ",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 110,
    "end": 111
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "JSXText",
    "value": " world ",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 127,
    "end": 128
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 132,
    "end": 133
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "JSXText",
    "value": " Hello ",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 166,
    "end": 167
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "JSXIdentifier",
    "value": "name",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 203,
    "end": 204
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 209,
    "end": 210
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "String",
    "value": "\"That is a number\"",
    "start": 236,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 257,
    "end": 258
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  }
]
```
