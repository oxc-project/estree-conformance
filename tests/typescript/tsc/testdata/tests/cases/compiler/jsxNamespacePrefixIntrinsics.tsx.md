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
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 53
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
                    "type": "Literal",
                    "value": "ns:element",
                    "raw": "\"ns:element\"",
                    "start": 60,
                    "end": 72
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
                            "type": "Literal",
                            "value": "ns:attribute",
                            "raw": "\"ns:attribute\"",
                            "start": 82,
                            "end": 96
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 98,
                              "end": 104
                            },
                            "start": 96,
                            "end": 104
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 82,
                          "end": 105
                        }
                      ],
                      "start": 74,
                      "end": 111
                    },
                    "start": 72,
                    "end": 111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 60,
                  "end": 112
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ns:NamespacedUpcaseAlsoIntrinsic",
                    "raw": "\"ns:NamespacedUpcaseAlsoIntrinsic\"",
                    "start": 117,
                    "end": 151
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 153,
                      "end": 156
                    },
                    "start": 151,
                    "end": 156
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 117,
                  "end": 157
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "NS:NamespacedUpcaseAlsoIntrinsic",
                    "raw": "\"NS:NamespacedUpcaseAlsoIntrinsic\"",
                    "start": 162,
                    "end": 196
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 198,
                      "end": 201
                    },
                    "start": 196,
                    "end": 201
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 162,
                  "end": 201
                }
              ],
              "start": 54,
              "end": 205
            },
            "declare": false,
            "start": 26,
            "end": 205
          }
        ],
        "start": 22,
        "end": 207
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 207
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
            "name": "valid",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 220
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 224,
                  "end": 226
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "element",
                  "start": 227,
                  "end": 234
                },
                "start": 224,
                "end": 234
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXNamespacedName",
                    "namespace": {
                      "type": "JSXIdentifier",
                      "name": "ns",
                      "start": 235,
                      "end": 237
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "attribute",
                      "start": 238,
                      "end": 247
                    },
                    "start": 235,
                    "end": 247
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yep",
                    "raw": "\"yep\"",
                    "start": 248,
                    "end": 253
                  },
                  "start": 235,
                  "end": 253
                }
              ],
              "selfClosing": true,
              "start": 223,
              "end": 256
            },
            "children": [],
            "closingElement": null,
            "start": 223,
            "end": 256
          },
          "definite": false,
          "start": 215,
          "end": 256
        }
      ],
      "declare": false,
      "start": 209,
      "end": 257
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
            "name": "validUpcase1",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 276
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 280,
                  "end": 282
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NamespacedUpcaseAlsoIntrinsic",
                  "start": 283,
                  "end": 312
                },
                "start": 280,
                "end": 312
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 279,
              "end": 315
            },
            "children": [],
            "closingElement": null,
            "start": 279,
            "end": 315
          },
          "definite": false,
          "start": 264,
          "end": 315
        }
      ],
      "declare": false,
      "start": 258,
      "end": 316
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
            "name": "validUpcase2",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 335
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "NS",
                  "start": 339,
                  "end": 341
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NamespacedUpcaseAlsoIntrinsic",
                  "start": 342,
                  "end": 371
                },
                "start": 339,
                "end": 371
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 338,
              "end": 374
            },
            "children": [],
            "closingElement": null,
            "start": 338,
            "end": 374
          },
          "definite": false,
          "start": 323,
          "end": 374
        }
      ],
      "declare": false,
      "start": 317,
      "end": 375
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
            "name": "invalid1",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 391
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "element",
                "start": 395,
                "end": 402
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 394,
              "end": 405
            },
            "children": [],
            "closingElement": null,
            "start": 394,
            "end": 405
          },
          "definite": false,
          "start": 383,
          "end": 405
        }
      ],
      "declare": false,
      "start": 377,
      "end": 406
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
            "name": "invalid2",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 421
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 425,
                  "end": 427
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "element",
                  "start": 428,
                  "end": 435
                },
                "start": 425,
                "end": 435
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "attribute",
                    "start": 436,
                    "end": 445
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nope",
                    "raw": "\"nope\"",
                    "start": 446,
                    "end": 452
                  },
                  "start": 436,
                  "end": 452
                }
              ],
              "selfClosing": true,
              "start": 424,
              "end": 455
            },
            "children": [],
            "closingElement": null,
            "start": 424,
            "end": 455
          },
          "definite": false,
          "start": 413,
          "end": 455
        }
      ],
      "declare": false,
      "start": 407,
      "end": 456
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
            "name": "invalid3",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 471
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 475,
                  "end": 477
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "element",
                  "start": 478,
                  "end": 485
                },
                "start": 475,
                "end": 485
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXNamespacedName",
                    "namespace": {
                      "type": "JSXIdentifier",
                      "name": "ns",
                      "start": 486,
                      "end": 488
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "invalid",
                      "start": 489,
                      "end": 496
                    },
                    "start": 486,
                    "end": 496
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nope",
                    "raw": "\"nope\"",
                    "start": 497,
                    "end": 503
                  },
                  "start": 486,
                  "end": 503
                }
              ],
              "selfClosing": true,
              "start": 474,
              "end": 506
            },
            "children": [],
            "closingElement": null,
            "start": 474,
            "end": 506
          },
          "definite": false,
          "start": 463,
          "end": 506
        }
      ],
      "declare": false,
      "start": 457,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 507
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
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 36,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"ns:element\"",
    "start": 60,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"ns:attribute\"",
    "start": 82,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"ns:NamespacedUpcaseAlsoIntrinsic\"",
    "start": 117,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "\"NS:NamespacedUpcaseAlsoIntrinsic\"",
    "start": 162,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 227,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "attribute",
    "start": 238,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "JSXText",
    "value": "\"yep\"",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "validUpcase1",
    "start": 264,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "NamespacedUpcaseAlsoIntrinsic",
    "start": 283,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "validUpcase2",
    "start": 323,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "NamespacedUpcaseAlsoIntrinsic",
    "start": 342,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "invalid1",
    "start": 383,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "JSXIdentifier",
    "value": "element",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 407,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "invalid2",
    "start": 413,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 428,
    "end": 435
  },
  {
    "type": "JSXIdentifier",
    "value": "attribute",
    "start": 436,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "JSXText",
    "value": "\"nope\"",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 457,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "invalid3",
    "start": 463,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 478,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "JSXText",
    "value": "\"nope\"",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  }
]
```
