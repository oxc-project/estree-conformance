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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 93,
                    "end": 95
                  },
                  "start": 91,
                  "end": 95
                },
                "start": 90,
                "end": 95
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 101,
                  "end": 104
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 100,
                "end": 105
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 107,
                  "end": 110
                },
                "start": 105,
                "end": 111
              },
              "start": 100,
              "end": 111
            },
            "id": null,
            "generator": false,
            "start": 89,
            "end": 111
          },
          "definite": false,
          "start": 83,
          "end": 111
        }
      ],
      "declare": false,
      "start": 77,
      "end": 112
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 132,
                "end": 135
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 131,
              "end": 138
            },
            "children": [],
            "closingElement": null,
            "start": 131,
            "end": 138
          },
          "definite": false,
          "start": 126,
          "end": 138
        }
      ],
      "declare": false,
      "start": 120,
      "end": 139
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 152,
                "end": 155
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 151,
              "end": 156
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 158,
                "end": 161
              },
              "start": 156,
              "end": 162
            },
            "start": 151,
            "end": 162
          },
          "definite": false,
          "start": 146,
          "end": 162
        }
      ],
      "declare": false,
      "start": 140,
      "end": 163
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 205,
                "end": 208
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 209,
                    "end": 217
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 220,
                          "end": 223
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 219,
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
                      "start": 219,
                      "end": 230
                    },
                    "start": 218,
                    "end": 231
                  },
                  "start": 209,
                  "end": 231
                }
              ],
              "selfClosing": true,
              "start": 204,
              "end": 234
            },
            "children": [],
            "closingElement": null,
            "start": 204,
            "end": 234
          },
          "definite": false,
          "start": 199,
          "end": 234
        }
      ],
      "declare": false,
      "start": 193,
      "end": 235
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 244
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 248,
                "end": 251
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 252,
                    "end": 255
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 256,
                    "end": 259
                  },
                  "start": 252,
                  "end": 259
                }
              ],
              "selfClosing": false,
              "start": 247,
              "end": 260
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 261,
                    "end": 264
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 260,
                  "end": 265
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 267,
                    "end": 270
                  },
                  "start": 265,
                  "end": 271
                },
                "start": 260,
                "end": 271
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 273,
                "end": 276
              },
              "start": 271,
              "end": 277
            },
            "start": 247,
            "end": 277
          },
          "definite": false,
          "start": 242,
          "end": 277
        }
      ],
      "declare": false,
      "start": 236,
      "end": 278
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
            "name": "k5",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 291,
                "end": 294
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 295,
                    "end": 298
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 299,
                    "end": 302
                  },
                  "start": 295,
                  "end": 302
                }
              ],
              "selfClosing": false,
              "start": 290,
              "end": 303
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 304,
                    "end": 307
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 303,
                  "end": 308
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 310,
                    "end": 313
                  },
                  "start": 308,
                  "end": 314
                },
                "start": 303,
                "end": 314
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 315,
                    "end": 318
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 314,
                  "end": 319
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 321,
                    "end": 324
                  },
                  "start": 319,
                  "end": 325
                },
                "start": 314,
                "end": 325
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 327,
                "end": 330
              },
              "start": 325,
              "end": 331
            },
            "start": 290,
            "end": 331
          },
          "definite": false,
          "start": 285,
          "end": 331
        }
      ],
      "declare": false,
      "start": 279,
      "end": 332
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 332
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
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 106,
    "end": 107
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 157,
    "end": 158
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 205,
    "end": 208
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 220,
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
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 236,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 248,
    "end": 251
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 266,
    "end": 267
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 267,
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
    "value": "Tag",
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
    "value": "const",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 291,
    "end": 294
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 309,
    "end": 310
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 320,
    "end": 321
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 326,
    "end": 327
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  }
]
```
