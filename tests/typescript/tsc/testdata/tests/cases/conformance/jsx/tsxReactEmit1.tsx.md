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
            "start": 132,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 133
        }
      ],
      "declare": false,
      "start": 128,
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
            "name": "selfClosed1",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 150
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 154,
                "end": 157
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 153,
              "end": 160
            },
            "children": [],
            "closingElement": null,
            "start": 153,
            "end": 160
          },
          "definite": false,
          "start": 139,
          "end": 160
        }
      ],
      "declare": false,
      "start": 135,
      "end": 161
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
            "name": "selfClosed2",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 177
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 181,
                "end": 184
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 185,
                    "end": 186
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 187,
                    "end": 190
                  },
                  "start": 185,
                  "end": 190
                }
              ],
              "selfClosing": true,
              "start": 180,
              "end": 193
            },
            "children": [],
            "closingElement": null,
            "start": 180,
            "end": 193
          },
          "definite": false,
          "start": 166,
          "end": 193
        }
      ],
      "declare": false,
      "start": 162,
      "end": 194
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
            "name": "selfClosed3",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 210
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 214,
                "end": 217
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 218,
                    "end": 219
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 220,
                    "end": 223
                  },
                  "start": 218,
                  "end": 223
                }
              ],
              "selfClosing": true,
              "start": 213,
              "end": 226
            },
            "children": [],
            "closingElement": null,
            "start": 213,
            "end": 226
          },
          "definite": false,
          "start": 199,
          "end": 226
        }
      ],
      "declare": false,
      "start": 195,
      "end": 227
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
            "name": "selfClosed4",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 243
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 247,
                "end": 250
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 251,
                    "end": 252
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 253,
                    "end": 256
                  },
                  "start": 251,
                  "end": 256
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 257,
                    "end": 258
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "'0'",
                    "start": 259,
                    "end": 262
                  },
                  "start": 257,
                  "end": 262
                }
              ],
              "selfClosing": true,
              "start": 246,
              "end": 265
            },
            "children": [],
            "closingElement": null,
            "start": 246,
            "end": 265
          },
          "definite": false,
          "start": 232,
          "end": 265
        }
      ],
      "declare": false,
      "start": 228,
      "end": 266
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
            "name": "selfClosed5",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 282
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 286,
                "end": 289
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 290,
                    "end": 291
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 293,
                      "end": 294
                    },
                    "start": 292,
                    "end": 295
                  },
                  "start": 290,
                  "end": 295
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 296,
                    "end": 297
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "'0'",
                    "start": 298,
                    "end": 301
                  },
                  "start": 296,
                  "end": 301
                }
              ],
              "selfClosing": true,
              "start": 285,
              "end": 304
            },
            "children": [],
            "closingElement": null,
            "start": 285,
            "end": 304
          },
          "definite": false,
          "start": 271,
          "end": 304
        }
      ],
      "declare": false,
      "start": 267,
      "end": 305
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
            "name": "selfClosed6",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 321
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 325,
                "end": 328
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 329,
                    "end": 330
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 332,
                      "end": 335
                    },
                    "start": 331,
                    "end": 336
                  },
                  "start": 329,
                  "end": 336
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 337,
                    "end": 338
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "'0'",
                    "start": 339,
                    "end": 342
                  },
                  "start": 337,
                  "end": 342
                }
              ],
              "selfClosing": true,
              "start": 324,
              "end": 345
            },
            "children": [],
            "closingElement": null,
            "start": 324,
            "end": 345
          },
          "definite": false,
          "start": 310,
          "end": 345
        }
      ],
      "declare": false,
      "start": 306,
      "end": 346
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
            "name": "selfClosed7",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 362
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 366,
                "end": 369
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 370,
                    "end": 371
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 374
                    },
                    "start": 372,
                    "end": 375
                  },
                  "start": 370,
                  "end": 375
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 376,
                    "end": 377
                  },
                  "value": {
                    "type": "Literal",
                    "value": "p",
                    "raw": "'p'",
                    "start": 378,
                    "end": 381
                  },
                  "start": 376,
                  "end": 381
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 382,
                    "end": 383
                  },
                  "value": null,
                  "start": 382,
                  "end": 383
                }
              ],
              "selfClosing": true,
              "start": 365,
              "end": 386
            },
            "children": [],
            "closingElement": null,
            "start": 365,
            "end": 386
          },
          "definite": false,
          "start": 351,
          "end": 386
        }
      ],
      "declare": false,
      "start": 347,
      "end": 387
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
            "name": "openClosed1",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 404
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 408,
                "end": 411
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 407,
              "end": 412
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 414,
                "end": 417
              },
              "start": 412,
              "end": 418
            },
            "start": 407,
            "end": 418
          },
          "definite": false,
          "start": 393,
          "end": 418
        }
      ],
      "declare": false,
      "start": 389,
      "end": 419
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
            "name": "openClosed2",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 435
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 439,
                "end": 442
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 443,
                    "end": 444
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 445,
                    "end": 448
                  },
                  "start": 443,
                  "end": 448
                }
              ],
              "selfClosing": false,
              "start": 438,
              "end": 449
            },
            "children": [
              {
                "type": "JSXText",
                "value": "foo",
                "raw": "foo",
                "start": 449,
                "end": 452
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 454,
                "end": 457
              },
              "start": 452,
              "end": 458
            },
            "start": 438,
            "end": 458
          },
          "definite": false,
          "start": 424,
          "end": 458
        }
      ],
      "declare": false,
      "start": 420,
      "end": 459
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
            "name": "openClosed3",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 475
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 479,
                "end": 482
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 483,
                    "end": 484
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 485,
                    "end": 488
                  },
                  "start": 483,
                  "end": 488
                }
              ],
              "selfClosing": false,
              "start": 478,
              "end": 489
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 491
                },
                "start": 489,
                "end": 492
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 494,
                "end": 497
              },
              "start": 492,
              "end": 498
            },
            "start": 478,
            "end": 498
          },
          "definite": false,
          "start": 464,
          "end": 498
        }
      ],
      "declare": false,
      "start": 460,
      "end": 499
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
            "name": "openClosed4",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 515
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 519,
                "end": 522
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 523,
                    "end": 524
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 525,
                    "end": 528
                  },
                  "start": 523,
                  "end": 528
                }
              ],
              "selfClosing": false,
              "start": 518,
              "end": 529
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 535
                  },
                  "start": 530,
                  "end": 535
                },
                "start": 529,
                "end": 536
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 542
            },
            "start": 518,
            "end": 542
          },
          "definite": false,
          "start": 504,
          "end": 542
        }
      ],
      "declare": false,
      "start": 500,
      "end": 543
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
            "name": "openClosed5",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 559
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 563,
                "end": 566
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 567,
                    "end": 568
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 569,
                    "end": 572
                  },
                  "start": 567,
                  "end": 572
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 573,
                    "end": 574
                  },
                  "value": null,
                  "start": 573,
                  "end": 574
                }
              ],
              "selfClosing": false,
              "start": 562,
              "end": 575
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 576,
                    "end": 577
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 581
                  },
                  "start": 576,
                  "end": 581
                },
                "start": 575,
                "end": 582
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 584,
                "end": 587
              },
              "start": 582,
              "end": 588
            },
            "start": 562,
            "end": 588
          },
          "definite": false,
          "start": 548,
          "end": 588
        }
      ],
      "declare": false,
      "start": 544,
      "end": 589
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 606
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rewrites1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 622,
                          "end": 631
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 635,
                              "end": 638
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 634,
                            "end": 639
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 646,
                                  "end": 650
                                },
                                "id": null,
                                "generator": false,
                                "start": 640,
                                "end": 650
                              },
                              "start": 639,
                              "end": 651
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 653,
                              "end": 656
                            },
                            "start": 651,
                            "end": 657
                          },
                          "start": 634,
                          "end": 657
                        },
                        "definite": false,
                        "start": 622,
                        "end": 657
                      }
                    ],
                    "declare": false,
                    "start": 618,
                    "end": 658
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
                          "name": "rewrites2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 674
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 678,
                              "end": 681
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 677,
                            "end": 682
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 684,
                                    "end": 685
                                  },
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 690,
                                      "end": 691
                                    },
                                    "start": 687,
                                    "end": 691
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 693,
                                    "end": 694
                                  }
                                ],
                                "start": 683,
                                "end": 695
                              },
                              "start": 682,
                              "end": 696
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 698,
                              "end": 701
                            },
                            "start": 696,
                            "end": 702
                          },
                          "start": 677,
                          "end": 702
                        },
                        "definite": false,
                        "start": 665,
                        "end": 702
                      }
                    ],
                    "declare": false,
                    "start": 661,
                    "end": 703
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
                          "name": "rewrites3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 710,
                          "end": 719
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 723,
                              "end": 726
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 722,
                            "end": 727
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 729,
                                      "end": 730
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 729,
                                      "end": 730
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 729,
                                    "end": 730
                                  }
                                ],
                                "start": 728,
                                "end": 731
                              },
                              "start": 727,
                              "end": 732
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 734,
                              "end": 737
                            },
                            "start": 732,
                            "end": 738
                          },
                          "start": 722,
                          "end": 738
                        },
                        "definite": false,
                        "start": 710,
                        "end": 738
                      }
                    ],
                    "declare": false,
                    "start": 706,
                    "end": 739
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
                          "name": "rewrites4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 747,
                          "end": 756
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 760,
                              "end": 763
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "a",
                                  "start": 764,
                                  "end": 765
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "ThisExpression",
                                      "start": 773,
                                      "end": 777
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 767,
                                    "end": 777
                                  },
                                  "start": 766,
                                  "end": 778
                                },
                                "start": 764,
                                "end": 778
                              }
                            ],
                            "selfClosing": false,
                            "start": 759,
                            "end": 779
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 781,
                              "end": 784
                            },
                            "start": 779,
                            "end": 785
                          },
                          "start": 759,
                          "end": 785
                        },
                        "definite": false,
                        "start": 747,
                        "end": 785
                      }
                    ],
                    "declare": false,
                    "start": 743,
                    "end": 786
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
                          "name": "rewrites5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 793,
                          "end": 802
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 806,
                              "end": 809
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "a",
                                  "start": 810,
                                  "end": 811
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 814,
                                        "end": 815
                                      },
                                      {
                                        "type": "SpreadElement",
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 820,
                                          "end": 821
                                        },
                                        "start": 817,
                                        "end": 821
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 823,
                                        "end": 824
                                      }
                                    ],
                                    "start": 813,
                                    "end": 825
                                  },
                                  "start": 812,
                                  "end": 826
                                },
                                "start": 810,
                                "end": 826
                              }
                            ],
                            "selfClosing": false,
                            "start": 805,
                            "end": 827
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 829,
                              "end": 832
                            },
                            "start": 827,
                            "end": 833
                          },
                          "start": 805,
                          "end": 833
                        },
                        "definite": false,
                        "start": 793,
                        "end": 833
                      }
                    ],
                    "declare": false,
                    "start": 789,
                    "end": 834
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
                          "name": "rewrites6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 841,
                          "end": 850
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 854,
                              "end": 857
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "a",
                                  "start": 858,
                                  "end": 859
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 862,
                                          "end": 863
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 862,
                                          "end": 863
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false,
                                        "start": 862,
                                        "end": 863
                                      }
                                    ],
                                    "start": 861,
                                    "end": 864
                                  },
                                  "start": 860,
                                  "end": 865
                                },
                                "start": 858,
                                "end": 865
                              }
                            ],
                            "selfClosing": false,
                            "start": 853,
                            "end": 866
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 868,
                              "end": 871
                            },
                            "start": 866,
                            "end": 872
                          },
                          "start": 853,
                          "end": 872
                        },
                        "definite": false,
                        "start": 841,
                        "end": 872
                      }
                    ],
                    "declare": false,
                    "start": 837,
                    "end": 873
                  }
                ],
                "start": 614,
                "end": 876
              },
              "expression": false,
              "start": 611,
              "end": 876
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 610,
            "end": 876
          }
        ],
        "start": 607,
        "end": 878
      },
      "abstract": false,
      "declare": false,
      "start": 591,
      "end": 878
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
            "name": "whitespace1",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 895
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 899,
                "end": 902
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 898,
              "end": 903
            },
            "children": [
              {
                "type": "JSXText",
                "value": "      ",
                "raw": "      ",
                "start": 903,
                "end": 909
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 911,
                "end": 914
              },
              "start": 909,
              "end": 915
            },
            "start": 898,
            "end": 915
          },
          "definite": false,
          "start": 884,
          "end": 915
        }
      ],
      "declare": false,
      "start": 880,
      "end": 916
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
            "name": "whitespace2",
            "optional": false,
            "typeAnnotation": null,
            "start": 921,
            "end": 932
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 936,
                "end": 939
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 935,
              "end": 940
            },
            "children": [
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 940,
                "end": 942
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "start": 942,
                "end": 945
              },
              {
                "type": "JSXText",
                "value": "    ",
                "raw": "    ",
                "start": 945,
                "end": 949
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 951,
                "end": 954
              },
              "start": 949,
              "end": 955
            },
            "start": 935,
            "end": 955
          },
          "definite": false,
          "start": 921,
          "end": 955
        }
      ],
      "declare": false,
      "start": 917,
      "end": 956
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
            "name": "whitespace3",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 972
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 976,
                "end": 979
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 975,
              "end": 980
            },
            "children": [
              {
                "type": "JSXText",
                "value": "  \n      ",
                "raw": "  \n      ",
                "start": 980,
                "end": 989
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                },
                "start": 989,
                "end": 992
              },
              {
                "type": "JSXText",
                "value": "    \n      ",
                "raw": "    \n      ",
                "start": 992,
                "end": 1003
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 1005,
                "end": 1008
              },
              "start": 1003,
              "end": 1009
            },
            "start": 975,
            "end": 1009
          },
          "definite": false,
          "start": 961,
          "end": 1009
        }
      ],
      "declare": false,
      "start": 957,
      "end": 1010
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1010
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
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "selfClosed1",
    "start": 139,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "selfClosed2",
    "start": 166,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 181,
    "end": 184
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "selfClosed3",
    "start": 199,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 214,
    "end": 217
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "JSXText",
    "value": "'1'",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "selfClosed4",
    "start": 232,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 247,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 253,
    "end": 256
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "JSXText",
    "value": "'0'",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 263,
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
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "selfClosed5",
    "start": 271,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 285,
    "end": 286
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 286,
    "end": 289
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "JSXText",
    "value": "'0'",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "selfClosed6",
    "start": 310,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 325,
    "end": 328
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "JSXText",
    "value": "'0'",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "selfClosed7",
    "start": 351,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "type": "JSXIdentifier",
    "value": "x",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "JSXText",
    "value": "'p'",
    "start": 378,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "openClosed1",
    "start": 393,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 413,
    "end": 414
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 420,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "openClosed2",
    "start": 424,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 439,
    "end": 442
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "JSXText",
    "value": "foo",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 453,
    "end": 454
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "openClosed3",
    "start": 464,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 479,
    "end": 482
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 493,
    "end": 494
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "openClosed4",
    "start": 504,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 519,
    "end": 522
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "/",
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
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "openClosed5",
    "start": 548,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 563,
    "end": 566
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 569,
    "end": 572
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 583,
    "end": 584
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 591,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 618,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "rewrites1",
    "start": 622,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 643,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 652,
    "end": 653
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "rewrites2",
    "start": 665,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 697,
    "end": 698
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 706,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "rewrites3",
    "start": 710,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 722,
    "end": 723
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 723,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 733,
    "end": 734
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "rewrites4",
    "start": 747,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 759,
    "end": 760
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 760,
    "end": 763
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 780,
    "end": 781
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 781,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 789,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "rewrites5",
    "start": 793,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 806,
    "end": 809
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 828,
    "end": 829
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 837,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "rewrites6",
    "start": 841,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 853,
    "end": 854
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 854,
    "end": 857
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 867,
    "end": 868
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 880,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "whitespace1",
    "start": 884,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 898,
    "end": 899
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 902,
    "end": 903
  },
  {
    "type": "JSXText",
    "value": "      ",
    "start": 903,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 910,
    "end": 911
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 917,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "whitespace2",
    "start": 921,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 935,
    "end": 936
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 936,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 939,
    "end": 940
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 940,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  },
  {
    "type": "JSXText",
    "value": "    ",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 950,
    "end": 951
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 957,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "whitespace3",
    "start": 961,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 975,
    "end": 976
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 979,
    "end": 980
  },
  {
    "type": "JSXText",
    "value": "  \n      ",
    "start": 980,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "JSXText",
    "value": "    \n      ",
    "start": 992,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  }
]
```
