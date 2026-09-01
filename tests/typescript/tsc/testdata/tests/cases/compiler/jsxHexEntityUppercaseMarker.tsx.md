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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 40
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 98
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
                          "name": "div",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 116
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 118,
                            "end": 121
                          },
                          "start": 116,
                          "end": 121
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 113,
                        "end": 122
                      }
                    ],
                    "start": 99,
                    "end": 132
                  },
                  "declare": false,
                  "start": 71,
                  "end": 132
                }
              ],
              "start": 61,
              "end": 138
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 47,
            "end": 138
          }
        ],
        "start": 41,
        "end": 140
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 26,
      "end": 140
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "uppercaseMarkerText",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 174
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 178,
                  "end": 181
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 177,
                "end": 182
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "&#X41;",
                  "raw": "&#X41;",
                  "start": 182,
                  "end": 188
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 190,
                  "end": 193
                },
                "start": 188,
                "end": 194
              },
              "start": 177,
              "end": 194
            },
            "definite": false,
            "start": 155,
            "end": 194
          }
        ],
        "declare": false,
        "start": 149,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 142,
      "end": 195
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "uppercaseMarkerAttribute",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 233
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 237,
                  "end": 240
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "title",
                      "start": 241,
                      "end": 246
                    },
                    "value": {
                      "type": "Literal",
                      "value": "&#X42;",
                      "raw": "\"&#X42;\"",
                      "start": 247,
                      "end": 255
                    },
                    "start": 241,
                    "end": 255
                  }
                ],
                "selfClosing": true,
                "start": 236,
                "end": 258
              },
              "children": [],
              "closingElement": null,
              "start": 236,
              "end": 258
            },
            "definite": false,
            "start": 209,
            "end": 258
          }
        ],
        "declare": false,
        "start": 203,
        "end": 259
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 196,
      "end": 259
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lowercaseMarker",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 288
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 292,
                  "end": 295
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "title",
                      "start": 296,
                      "end": 301
                    },
                    "value": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"&#x42;\"",
                      "start": 302,
                      "end": 310
                    },
                    "start": 296,
                    "end": 310
                  }
                ],
                "selfClosing": false,
                "start": 291,
                "end": 311
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "A",
                  "raw": "&#x41;",
                  "start": 311,
                  "end": 317
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 319,
                  "end": 322
                },
                "start": 317,
                "end": 323
              },
              "start": 291,
              "end": 323
            },
            "definite": false,
            "start": 273,
            "end": 323
          }
        ],
        "declare": false,
        "start": 267,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 260,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "decimalEntity",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 351
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 355,
                  "end": 358
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "title",
                      "start": 359,
                      "end": 364
                    },
                    "value": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"&#66;\"",
                      "start": 365,
                      "end": 372
                    },
                    "start": 359,
                    "end": 372
                  }
                ],
                "selfClosing": false,
                "start": 354,
                "end": 373
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "A",
                  "raw": "&#65;",
                  "start": 373,
                  "end": 378
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 380,
                  "end": 383
                },
                "start": 378,
                "end": 384
              },
              "start": 354,
              "end": 384
            },
            "definite": false,
            "start": 338,
            "end": 384
          }
        ],
        "declare": false,
        "start": 332,
        "end": 385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 325,
      "end": 385
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 385
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 26,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 71,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 81,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 142,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "uppercaseMarkerText",
    "start": 155,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "JSXText",
    "value": "&#X41;",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 189,
    "end": 190
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 196,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "uppercaseMarkerAttribute",
    "start": 209,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 237,
    "end": 240
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "JSXText",
    "value": "\"&#X42;\"",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 260,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 267,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "lowercaseMarker",
    "start": 273,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 292,
    "end": 295
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "JSXText",
    "value": "\"&#x42;\"",
    "start": 302,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "JSXText",
    "value": "&#x41;",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 318,
    "end": 319
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 325,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "decimalEntity",
    "start": 338,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 355,
    "end": 358
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "JSXText",
    "value": "\"&#66;\"",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373
  },
  {
    "type": "JSXText",
    "value": "&#65;",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 379,
    "end": 380
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  }
]
```
