__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 90
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 93,
                              "end": 100
                            },
                            "start": 91,
                            "end": 100
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 89,
                          "end": 101
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 102,
                            "end": 103
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 106,
                              "end": 112
                            },
                            "start": 104,
                            "end": 112
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 102,
                          "end": 112
                        }
                      ],
                      "start": 87,
                      "end": 113
                    },
                    "start": 85,
                    "end": 113
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 114
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 122
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 127
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 129,
                              "end": 136
                            },
                            "start": 127,
                            "end": 136
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 126,
                          "end": 137
                        }
                      ],
                      "start": 124,
                      "end": 139
                    },
                    "start": 122,
                    "end": 139
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 117,
                  "end": 140
                }
              ],
              "start": 76,
              "end": 143
            },
            "declare": false,
            "start": 48,
            "end": 143
          }
        ],
        "start": 22,
        "end": 145
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 157,
            "end": 162
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "s",
                "start": 163,
                "end": 164
              },
              "value": null,
              "start": 163,
              "end": 164
            }
          ],
          "selfClosing": true,
          "start": 156,
          "end": 167
        },
        "children": [],
        "closingElement": null,
        "start": 156,
        "end": 167
      },
      "directive": null,
      "start": 156,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 170,
            "end": 175
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 176,
                "end": 177
              },
              "value": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            }
          ],
          "selfClosing": true,
          "start": 169,
          "end": 187
        },
        "children": [],
        "closingElement": null,
        "start": 169,
        "end": 187
      },
      "directive": null,
      "start": 169,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 190,
            "end": 195
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 189,
          "end": 198
        },
        "children": [],
        "closingElement": null,
        "start": 189,
        "end": 198
      },
      "directive": null,
      "start": 189,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 208,
            "end": 213
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 214,
                "end": 215
              },
              "value": null,
              "start": 214,
              "end": 215
            }
          ],
          "selfClosing": true,
          "start": 207,
          "end": 218
        },
        "children": [],
        "closingElement": null,
        "start": 207,
        "end": 218
      },
      "directive": null,
      "start": 207,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 221,
            "end": 226
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 227,
                "end": 228
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 230,
                  "end": 235
                },
                "start": 229,
                "end": 236
              },
              "start": 227,
              "end": 236
            }
          ],
          "selfClosing": true,
          "start": 220,
          "end": 239
        },
        "children": [],
        "closingElement": null,
        "start": 220,
        "end": 239
      },
      "directive": null,
      "start": 220,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 242,
            "end": 247
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 248,
                "end": 249
              },
              "value": null,
              "start": 248,
              "end": 249
            }
          ],
          "selfClosing": true,
          "start": 241,
          "end": 252
        },
        "children": [],
        "closingElement": null,
        "start": 241,
        "end": 252
      },
      "directive": null,
      "start": 241,
      "end": 253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 253
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 157,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "s",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 170,
    "end": 175
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "JSXText",
    "value": "'true'",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 208,
    "end": 213
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 221,
    "end": 226
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 227,
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
    "type": "Boolean",
    "value": "false",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 242,
    "end": 247
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  }
]
```
