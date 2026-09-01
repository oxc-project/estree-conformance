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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    "start": 91,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 97
                }
              ],
              "start": 76,
              "end": 100
            },
            "declare": false,
            "start": 48,
            "end": 100
          }
        ],
        "start": 22,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 113,
                "end": 116
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x-y",
                    "start": 117,
                    "end": 120
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 121,
                    "end": 126
                  },
                  "start": 117,
                  "end": 126
                }
              ],
              "selfClosing": false,
              "start": 112,
              "end": 127
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 129,
                "end": 132
              },
              "start": 127,
              "end": 133
            },
            "start": 112,
            "end": 133
          },
          "definite": false,
          "start": 108,
          "end": 133
        }
      ],
      "declare": false,
      "start": 104,
      "end": 134
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 140
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 144,
                "end": 147
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xx-y",
                    "start": 148,
                    "end": 152
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 153,
                    "end": 158
                  },
                  "start": 148,
                  "end": 158
                }
              ],
              "selfClosing": false,
              "start": 143,
              "end": 159
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 161,
                "end": 164
              },
              "start": 159,
              "end": 165
            },
            "start": 143,
            "end": 165
          },
          "definite": false,
          "start": 139,
          "end": 165
        }
      ],
      "declare": false,
      "start": 135,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
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
                "name": "div",
                "start": 176,
                "end": 179
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x-yy",
                    "start": 180,
                    "end": 184
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 185,
                    "end": 190
                  },
                  "start": 180,
                  "end": 190
                }
              ],
              "selfClosing": false,
              "start": 175,
              "end": 191
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 197
            },
            "start": 175,
            "end": 197
          },
          "definite": false,
          "start": 171,
          "end": 197
        }
      ],
      "declare": false,
      "start": 167,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 208,
                "end": 211
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xx-yy",
                    "start": 212,
                    "end": 217
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 218,
                    "end": 223
                  },
                  "start": 212,
                  "end": 223
                }
              ],
              "selfClosing": false,
              "start": 207,
              "end": 224
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 226,
                "end": 229
              },
              "start": 224,
              "end": 230
            },
            "start": 207,
            "end": 230
          },
          "definite": false,
          "start": 203,
          "end": 230
        }
      ],
      "declare": false,
      "start": 199,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 259,
                "end": 262
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 263,
                    "end": 264
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 265,
                    "end": 270
                  },
                  "start": 263,
                  "end": 270
                }
              ],
              "selfClosing": false,
              "start": 258,
              "end": 271
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 273,
                "end": 276
              },
              "start": 271,
              "end": 277
            },
            "start": 258,
            "end": 277
          },
          "definite": false,
          "start": 254,
          "end": 277
        }
      ],
      "declare": false,
      "start": 250,
      "end": 278
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 288,
                "end": 291
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xx",
                    "start": 292,
                    "end": 294
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 295,
                    "end": 300
                  },
                  "start": 292,
                  "end": 300
                }
              ],
              "selfClosing": false,
              "start": 287,
              "end": 301
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 303,
                "end": 306
              },
              "start": 301,
              "end": 307
            },
            "start": 287,
            "end": 307
          },
          "definite": false,
          "start": 283,
          "end": 307
        }
      ],
      "declare": false,
      "start": 279,
      "end": 308
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 314
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 318,
                "end": 321
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xxx",
                    "start": 322,
                    "end": 325
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 326,
                    "end": 331
                  },
                  "start": 322,
                  "end": 331
                }
              ],
              "selfClosing": false,
              "start": 317,
              "end": 332
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 334,
                "end": 337
              },
              "start": 332,
              "end": 338
            },
            "start": 317,
            "end": 338
          },
          "definite": false,
          "start": 313,
          "end": 338
        }
      ],
      "declare": false,
      "start": 309,
      "end": 339
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 345
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 349,
                "end": 352
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xxxx",
                    "start": 353,
                    "end": 357
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 358,
                    "end": 363
                  },
                  "start": 353,
                  "end": 363
                }
              ],
              "selfClosing": false,
              "start": 348,
              "end": 364
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 366,
                "end": 369
              },
              "start": 364,
              "end": 370
            },
            "start": 348,
            "end": 370
          },
          "definite": false,
          "start": 344,
          "end": 370
        }
      ],
      "declare": false,
      "start": 340,
      "end": 371
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 381,
                "end": 384
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xxxxx",
                    "start": 385,
                    "end": 390
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 391,
                    "end": 396
                  },
                  "start": 385,
                  "end": 396
                }
              ],
              "selfClosing": false,
              "start": 380,
              "end": 397
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 399,
                "end": 402
              },
              "start": 397,
              "end": 403
            },
            "start": 380,
            "end": 403
          },
          "definite": false,
          "start": 376,
          "end": 403
        }
      ],
      "declare": false,
      "start": 372,
      "end": 404
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 404
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
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "any",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 113,
    "end": 116
  },
  {
    "type": "JSXIdentifier",
    "value": "x-y",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 128,
    "end": 129
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 144,
    "end": 147
  },
  {
    "type": "JSXIdentifier",
    "value": "xx-y",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 160,
    "end": 161
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
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
    "value": "var",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "value": "div",
    "start": 176,
    "end": 179
  },
  {
    "type": "JSXIdentifier",
    "value": "x-yy",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 185,
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
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 192,
    "end": 193
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 208,
    "end": 211
  },
  {
    "type": "JSXIdentifier",
    "value": "xx-yy",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "/",
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
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 259,
    "end": 262
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 272,
    "end": 273
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 273,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 288,
    "end": 291
  },
  {
    "type": "JSXIdentifier",
    "value": "xx",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 302,
    "end": 303
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 318,
    "end": 321
  },
  {
    "type": "JSXIdentifier",
    "value": "xxx",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 333,
    "end": 334
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 349,
    "end": 352
  },
  {
    "type": "JSXIdentifier",
    "value": "xxxx",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 365,
    "end": 366
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 381,
    "end": 384
  },
  {
    "type": "JSXIdentifier",
    "value": "xxxxx",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "JSXText",
    "value": "\"val\"",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 398,
    "end": 399
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  }
]
```
