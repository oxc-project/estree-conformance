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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 122,
                "end": 125
              },
              "start": 120,
              "end": 125
            },
            "start": 115,
            "end": 125
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 125
        }
      ],
      "declare": true,
      "start": 103,
      "end": 126
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
            "start": 234,
            "end": 235
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 238,
            "end": 239
          },
          "definite": false,
          "start": 234,
          "end": 239
        }
      ],
      "declare": false,
      "start": 230,
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
            "name": "div",
            "start": 256,
            "end": 259
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 255,
          "end": 260
        },
        "children": [
          {
            "type": "JSXText",
            "value": "   ",
            "raw": "   ",
            "start": 260,
            "end": 263
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 265,
            "end": 268
          },
          "start": 263,
          "end": 269
        },
        "start": 255,
        "end": 269
      },
      "directive": null,
      "start": 255,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 295,
            "end": 298
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 294,
          "end": 299
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  ",
            "raw": "  ",
            "start": 299,
            "end": 301
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 303
            },
            "start": 301,
            "end": 304
          },
          {
            "type": "JSXText",
            "value": "    ",
            "raw": "    ",
            "start": 304,
            "end": 308
          }
        ],
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
        "start": 294,
        "end": 314
      },
      "directive": null,
      "start": 294,
      "end": 315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 332,
            "end": 335
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 331,
          "end": 336
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  \n      ",
            "raw": "  \n      ",
            "start": 336,
            "end": 345
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "start": 345,
            "end": 348
          },
          {
            "type": "JSXText",
            "value": "    \n      ",
            "raw": "    \n      ",
            "start": 348,
            "end": 359
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 361,
            "end": 364
          },
          "start": 359,
          "end": 365
        },
        "start": 331,
        "end": 365
      },
      "directive": null,
      "start": 331,
      "end": 366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 384,
            "end": 387
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 383,
          "end": 388
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n  ",
            "raw": "\n  ",
            "start": 388,
            "end": 391
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
            },
            "start": 391,
            "end": 394
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 394,
            "end": 399
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 401,
            "end": 404
          },
          "start": 399,
          "end": 405
        },
        "start": 383,
        "end": 405
      },
      "directive": null,
      "start": 383,
      "end": 406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 423,
            "end": 426
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 422,
          "end": 427
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  3  \n  ",
            "raw": "  3  \n  ",
            "start": 427,
            "end": 435
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 437,
            "end": 440
          },
          "start": 435,
          "end": 441
        },
        "start": 422,
        "end": 441
      },
      "directive": null,
      "start": 422,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 461,
            "end": 464
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 460,
          "end": 465
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  3  ",
            "raw": "  3  ",
            "start": 465,
            "end": 470
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 472,
            "end": 475
          },
          "start": 470,
          "end": 476
        },
        "start": 460,
        "end": 476
      },
      "directive": null,
      "start": 460,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 492,
            "end": 495
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 491,
          "end": 496
        },
        "children": [
          {
            "type": "JSXText",
            "value": "   \n   3    \n   ",
            "raw": "   \n   3    \n   ",
            "start": 496,
            "end": 512
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 514,
            "end": 517
          },
          "start": 512,
          "end": 518
        },
        "start": 491,
        "end": 518
      },
      "directive": null,
      "start": 491,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 538,
            "end": 541
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 537,
          "end": 542
        },
        "children": [
          {
            "type": "JSXText",
            "value": "   \n   ",
            "raw": "   \n   ",
            "start": 542,
            "end": 549
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 551,
            "end": 554
          },
          "start": 549,
          "end": 555
        },
        "start": 537,
        "end": 555
      },
      "directive": null,
      "start": 537,
      "end": 556
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 577,
            "end": 580
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 576,
          "end": 581
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  \n\n   foo\n\n bar   \n\n  ",
            "raw": "  \n\n   foo\n\n bar   \n\n  ",
            "start": 581,
            "end": 604
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 606,
            "end": 609
          },
          "start": 604,
          "end": 610
        },
        "start": 576,
        "end": 610
      },
      "directive": null,
      "start": 576,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 638,
            "end": 641
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 637,
          "end": 642
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n\n    hello\\\n\nworld\n",
            "raw": "\n\n    hello\\\n\nworld\n",
            "start": 642,
            "end": 662
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 664,
            "end": 667
          },
          "start": 662,
          "end": 668
        },
        "start": 637,
        "end": 668
      },
      "directive": null,
      "start": 637,
      "end": 669
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 695,
            "end": 698
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 694,
          "end": 699
        },
        "children": [
          {
            "type": "JSXText",
            "value": "  a\n    b  c\n    d  ",
            "raw": "  a\n    b  c\n    d  ",
            "start": 699,
            "end": 719
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 721,
            "end": 724
          },
          "start": 719,
          "end": 725
        },
        "start": 694,
        "end": 725
      },
      "directive": null,
      "start": 694,
      "end": 726
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 726
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
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 255,
    "end": 256
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
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
    "type": "JSXText",
    "value": "   ",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 264,
    "end": 265
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "JSXText",
    "value": "    ",
    "start": 304,
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
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "JSXText",
    "value": "  \n      ",
    "start": 336,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "JSXText",
    "value": "    \n      ",
    "start": 348,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 360,
    "end": 361
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 400,
    "end": 401
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 401,
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
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "JSXText",
    "value": "  3  \n  ",
    "start": 427,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 436,
    "end": 437
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "JSXText",
    "value": "  3  ",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 471,
    "end": 472
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "JSXText",
    "value": "   \n   3    \n   ",
    "start": 496,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 513,
    "end": 514
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 537,
    "end": 538
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542
  },
  {
    "type": "JSXText",
    "value": "   \n   ",
    "start": 542,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 550,
    "end": 551
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 577,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581
  },
  {
    "type": "JSXText",
    "value": "  \n\n   foo\n\n bar   \n\n  ",
    "start": 581,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 605,
    "end": 606
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "JSXText",
    "value": "\n\n    hello\\\n\nworld\n",
    "start": 642,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 663,
    "end": 664
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 698,
    "end": 699
  },
  {
    "type": "JSXText",
    "value": "  a\n    b  c\n    d  ",
    "start": 699,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 720,
    "end": 721
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  }
]
```
