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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 109
        }
      ],
      "declare": false,
      "start": 104,
      "end": 110
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
            "start": 115,
            "end": 126
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 130,
                "end": 133
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 129,
              "end": 136
            },
            "children": [],
            "closingElement": null,
            "start": 129,
            "end": 136
          },
          "definite": false,
          "start": 115,
          "end": 136
        }
      ],
      "declare": false,
      "start": 111,
      "end": 137
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
            "start": 142,
            "end": 153
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 157,
                "end": 160
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 161,
                    "end": 162
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 163,
                    "end": 166
                  },
                  "start": 161,
                  "end": 166
                }
              ],
              "selfClosing": true,
              "start": 156,
              "end": 169
            },
            "children": [],
            "closingElement": null,
            "start": 156,
            "end": 169
          },
          "definite": false,
          "start": 142,
          "end": 169
        }
      ],
      "declare": false,
      "start": 138,
      "end": 170
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
            "start": 175,
            "end": 186
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 190,
                "end": 193
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 194,
                    "end": 195
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 196,
                    "end": 199
                  },
                  "start": 194,
                  "end": 199
                }
              ],
              "selfClosing": true,
              "start": 189,
              "end": 202
            },
            "children": [],
            "closingElement": null,
            "start": 189,
            "end": 202
          },
          "definite": false,
          "start": 175,
          "end": 202
        }
      ],
      "declare": false,
      "start": 171,
      "end": 203
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
            "start": 208,
            "end": 219
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 223,
                "end": 226
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 227,
                    "end": 228
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 229,
                    "end": 232
                  },
                  "start": 227,
                  "end": 232
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 233,
                    "end": 234
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "'0'",
                    "start": 235,
                    "end": 238
                  },
                  "start": 233,
                  "end": 238
                }
              ],
              "selfClosing": true,
              "start": 222,
              "end": 241
            },
            "children": [],
            "closingElement": null,
            "start": 222,
            "end": 241
          },
          "definite": false,
          "start": 208,
          "end": 241
        }
      ],
      "declare": false,
      "start": 204,
      "end": 242
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
            "start": 247,
            "end": 258
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 262,
                "end": 265
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 266,
                    "end": 267
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 269,
                      "end": 270
                    },
                    "start": 268,
                    "end": 271
                  },
                  "start": 266,
                  "end": 271
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 272,
                    "end": 273
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "'0'",
                    "start": 274,
                    "end": 277
                  },
                  "start": 272,
                  "end": 277
                }
              ],
              "selfClosing": true,
              "start": 261,
              "end": 280
            },
            "children": [],
            "closingElement": null,
            "start": 261,
            "end": 280
          },
          "definite": false,
          "start": 247,
          "end": 280
        }
      ],
      "declare": false,
      "start": 243,
      "end": 281
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
            "start": 286,
            "end": 297
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 301,
                "end": 304
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 305,
                    "end": 306
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 308,
                      "end": 311
                    },
                    "start": 307,
                    "end": 312
                  },
                  "start": 305,
                  "end": 312
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 313,
                    "end": 314
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "'0'",
                    "start": 315,
                    "end": 318
                  },
                  "start": 313,
                  "end": 318
                }
              ],
              "selfClosing": true,
              "start": 300,
              "end": 321
            },
            "children": [],
            "closingElement": null,
            "start": 300,
            "end": 321
          },
          "definite": false,
          "start": 286,
          "end": 321
        }
      ],
      "declare": false,
      "start": 282,
      "end": 322
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
            "start": 327,
            "end": 338
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 342,
                "end": 345
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 346,
                    "end": 347
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 350
                    },
                    "start": 348,
                    "end": 351
                  },
                  "start": 346,
                  "end": 351
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 352,
                    "end": 353
                  },
                  "value": {
                    "type": "Literal",
                    "value": "p",
                    "raw": "'p'",
                    "start": 354,
                    "end": 357
                  },
                  "start": 352,
                  "end": 357
                }
              ],
              "selfClosing": true,
              "start": 341,
              "end": 360
            },
            "children": [],
            "closingElement": null,
            "start": 341,
            "end": 360
          },
          "definite": false,
          "start": 327,
          "end": 360
        }
      ],
      "declare": false,
      "start": 323,
      "end": 361
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
            "start": 367,
            "end": 378
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 382,
                "end": 385
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 381,
              "end": 386
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 388,
                "end": 391
              },
              "start": 386,
              "end": 392
            },
            "start": 381,
            "end": 392
          },
          "definite": false,
          "start": 367,
          "end": 392
        }
      ],
      "declare": false,
      "start": 363,
      "end": 393
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
            "start": 398,
            "end": 409
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 413,
                "end": 416
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 417,
                    "end": 418
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 419,
                    "end": 422
                  },
                  "start": 417,
                  "end": 422
                }
              ],
              "selfClosing": false,
              "start": 412,
              "end": 423
            },
            "children": [
              {
                "type": "JSXText",
                "value": "foo",
                "raw": "foo",
                "start": 423,
                "end": 426
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 428,
                "end": 431
              },
              "start": 426,
              "end": 432
            },
            "start": 412,
            "end": 432
          },
          "definite": false,
          "start": 398,
          "end": 432
        }
      ],
      "declare": false,
      "start": 394,
      "end": 433
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
            "start": 438,
            "end": 449
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 453,
                "end": 456
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 457,
                    "end": 458
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 459,
                    "end": 462
                  },
                  "start": 457,
                  "end": 462
                }
              ],
              "selfClosing": false,
              "start": 452,
              "end": 463
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
                  "start": 464,
                  "end": 465
                },
                "start": 463,
                "end": 466
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 468,
                "end": 471
              },
              "start": 466,
              "end": 472
            },
            "start": 452,
            "end": 472
          },
          "definite": false,
          "start": 438,
          "end": 472
        }
      ],
      "declare": false,
      "start": 434,
      "end": 473
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
            "start": 478,
            "end": 489
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 493,
                "end": 496
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 497,
                    "end": 498
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 499,
                    "end": 502
                  },
                  "start": 497,
                  "end": 502
                }
              ],
              "selfClosing": false,
              "start": 492,
              "end": 503
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
                    "start": 504,
                    "end": 505
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 509
                  },
                  "start": 504,
                  "end": 509
                },
                "start": 503,
                "end": 510
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 512,
                "end": 515
              },
              "start": 510,
              "end": 516
            },
            "start": 492,
            "end": 516
          },
          "definite": false,
          "start": 478,
          "end": 516
        }
      ],
      "declare": false,
      "start": 474,
      "end": 517
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
            "start": 522,
            "end": 533
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 537,
                "end": 540
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "n",
                    "start": 541,
                    "end": 542
                  },
                  "value": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "'m'",
                    "start": 543,
                    "end": 546
                  },
                  "start": 541,
                  "end": 546
                }
              ],
              "selfClosing": false,
              "start": 536,
              "end": 547
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
                    "start": 548,
                    "end": 549
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "start": 548,
                  "end": 553
                },
                "start": 547,
                "end": 554
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 556,
                "end": 559
              },
              "start": 554,
              "end": 560
            },
            "start": 536,
            "end": 560
          },
          "definite": false,
          "start": 522,
          "end": 560
        }
      ],
      "declare": false,
      "start": 518,
      "end": 561
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
        "start": 569,
        "end": 578
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
              "start": 582,
              "end": 583
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
                          "start": 594,
                          "end": 603
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 607,
                              "end": 610
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 606,
                            "end": 611
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
                                  "start": 618,
                                  "end": 622
                                },
                                "id": null,
                                "generator": false,
                                "start": 612,
                                "end": 622
                              },
                              "start": 611,
                              "end": 623
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 625,
                              "end": 628
                            },
                            "start": 623,
                            "end": 629
                          },
                          "start": 606,
                          "end": 629
                        },
                        "definite": false,
                        "start": 594,
                        "end": 629
                      }
                    ],
                    "declare": false,
                    "start": 590,
                    "end": 630
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
                          "start": 637,
                          "end": 646
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 650,
                              "end": 653
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 649,
                            "end": 654
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
                                    "start": 656,
                                    "end": 657
                                  },
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 662,
                                      "end": 663
                                    },
                                    "start": 659,
                                    "end": 663
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 665,
                                    "end": 666
                                  }
                                ],
                                "start": 655,
                                "end": 667
                              },
                              "start": 654,
                              "end": 668
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 670,
                              "end": 673
                            },
                            "start": 668,
                            "end": 674
                          },
                          "start": 649,
                          "end": 674
                        },
                        "definite": false,
                        "start": 637,
                        "end": 674
                      }
                    ],
                    "declare": false,
                    "start": 633,
                    "end": 675
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
                          "start": 682,
                          "end": 691
                        },
                        "init": {
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
                                      "start": 701,
                                      "end": 702
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 701,
                                      "end": 702
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 701,
                                    "end": 702
                                  }
                                ],
                                "start": 700,
                                "end": 703
                              },
                              "start": 699,
                              "end": 704
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 706,
                              "end": 709
                            },
                            "start": 704,
                            "end": 710
                          },
                          "start": 694,
                          "end": 710
                        },
                        "definite": false,
                        "start": 682,
                        "end": 710
                      }
                    ],
                    "declare": false,
                    "start": 678,
                    "end": 711
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
                          "start": 719,
                          "end": 728
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 732,
                              "end": 735
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "a",
                                  "start": 736,
                                  "end": 737
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
                                      "start": 745,
                                      "end": 749
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 739,
                                    "end": 749
                                  },
                                  "start": 738,
                                  "end": 750
                                },
                                "start": 736,
                                "end": 750
                              }
                            ],
                            "selfClosing": false,
                            "start": 731,
                            "end": 751
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 753,
                              "end": 756
                            },
                            "start": 751,
                            "end": 757
                          },
                          "start": 731,
                          "end": 757
                        },
                        "definite": false,
                        "start": 719,
                        "end": 757
                      }
                    ],
                    "declare": false,
                    "start": 715,
                    "end": 758
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
                          "start": 765,
                          "end": 774
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 778,
                              "end": 781
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "a",
                                  "start": 782,
                                  "end": 783
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
                                        "start": 786,
                                        "end": 787
                                      },
                                      {
                                        "type": "SpreadElement",
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 792,
                                          "end": 793
                                        },
                                        "start": 789,
                                        "end": 793
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 795,
                                        "end": 796
                                      }
                                    ],
                                    "start": 785,
                                    "end": 797
                                  },
                                  "start": 784,
                                  "end": 798
                                },
                                "start": 782,
                                "end": 798
                              }
                            ],
                            "selfClosing": false,
                            "start": 777,
                            "end": 799
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 801,
                              "end": 804
                            },
                            "start": 799,
                            "end": 805
                          },
                          "start": 777,
                          "end": 805
                        },
                        "definite": false,
                        "start": 765,
                        "end": 805
                      }
                    ],
                    "declare": false,
                    "start": 761,
                    "end": 806
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
                          "start": 813,
                          "end": 822
                        },
                        "init": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 826,
                              "end": 829
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "a",
                                  "start": 830,
                                  "end": 831
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
                                          "start": 834,
                                          "end": 835
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 834,
                                          "end": 835
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false,
                                        "start": 834,
                                        "end": 835
                                      }
                                    ],
                                    "start": 833,
                                    "end": 836
                                  },
                                  "start": 832,
                                  "end": 837
                                },
                                "start": 830,
                                "end": 837
                              }
                            ],
                            "selfClosing": false,
                            "start": 825,
                            "end": 838
                          },
                          "children": [],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 840,
                              "end": 843
                            },
                            "start": 838,
                            "end": 844
                          },
                          "start": 825,
                          "end": 844
                        },
                        "definite": false,
                        "start": 813,
                        "end": 844
                      }
                    ],
                    "declare": false,
                    "start": 809,
                    "end": 845
                  }
                ],
                "start": 586,
                "end": 848
              },
              "expression": false,
              "start": 583,
              "end": 848
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 582,
            "end": 848
          }
        ],
        "start": 579,
        "end": 850
      },
      "abstract": false,
      "declare": false,
      "start": 563,
      "end": 850
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
            "start": 856,
            "end": 867
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 871,
                "end": 874
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 870,
              "end": 875
            },
            "children": [
              {
                "type": "JSXText",
                "value": "      ",
                "raw": "      ",
                "start": 875,
                "end": 881
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 883,
                "end": 886
              },
              "start": 881,
              "end": 887
            },
            "start": 870,
            "end": 887
          },
          "definite": false,
          "start": 856,
          "end": 887
        }
      ],
      "declare": false,
      "start": 852,
      "end": 888
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
            "start": 893,
            "end": 904
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 908,
                "end": 911
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 907,
              "end": 912
            },
            "children": [
              {
                "type": "JSXText",
                "value": "  ",
                "raw": "  ",
                "start": 912,
                "end": 914
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 916
                },
                "start": 914,
                "end": 917
              },
              {
                "type": "JSXText",
                "value": "    ",
                "raw": "    ",
                "start": 917,
                "end": 921
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 923,
                "end": 926
              },
              "start": 921,
              "end": 927
            },
            "start": 907,
            "end": 927
          },
          "definite": false,
          "start": 893,
          "end": 927
        }
      ],
      "declare": false,
      "start": 889,
      "end": 928
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
            "start": 933,
            "end": 944
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 948,
                "end": 951
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 947,
              "end": 952
            },
            "children": [
              {
                "type": "JSXText",
                "value": "  \n      ",
                "raw": "  \n      ",
                "start": 952,
                "end": 961
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 962,
                  "end": 963
                },
                "start": 961,
                "end": 964
              },
              {
                "type": "JSXText",
                "value": "    \n      ",
                "raw": "    \n      ",
                "start": 964,
                "end": 975
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 977,
                "end": 980
              },
              "start": 975,
              "end": 981
            },
            "start": 947,
            "end": 981
          },
          "definite": false,
          "start": 933,
          "end": 981
        }
      ],
      "declare": false,
      "start": 929,
      "end": 982
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 982
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
    "value": "p",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
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
    "value": "selfClosed1",
    "start": 115,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "selfClosed2",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 157,
    "end": 160
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "selfClosed3",
    "start": 175,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "div",
    "start": 190,
    "end": 193
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "JSXText",
    "value": "'1'",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "selfClosed4",
    "start": 208,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 223,
    "end": 226
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
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
    "type": "JSXText",
    "value": "\"1\"",
    "start": 229,
    "end": 232
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "JSXText",
    "value": "'0'",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "selfClosed5",
    "start": 247,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 262,
    "end": 265
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "JSXText",
    "value": "'0'",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "selfClosed6",
    "start": 286,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 301,
    "end": 304
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "JSXText",
    "value": "'0'",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "selfClosed7",
    "start": 327,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 342,
    "end": 345
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "JSXText",
    "value": "'p'",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "openClosed1",
    "start": 367,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 382,
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
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 387,
    "end": 388
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "openClosed2",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 413,
    "end": 416
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423
  },
  {
    "type": "JSXText",
    "value": "foo",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 427,
    "end": 428
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "openClosed3",
    "start": 438,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 453,
    "end": 456
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 467,
    "end": 468
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "openClosed4",
    "start": 478,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 493,
    "end": 496
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 511,
    "end": 512
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "openClosed5",
    "start": 522,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 537,
    "end": 540
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "JSXText",
    "value": "'m'",
    "start": 543,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 555,
    "end": 556
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 563,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "rewrites1",
    "start": 594,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 615,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 624,
    "end": 625
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 633,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "rewrites2",
    "start": 637,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 669,
    "end": 670
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 670,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "rewrites3",
    "start": 682,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
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
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 705,
    "end": 706
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 715,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "rewrites4",
    "start": 719,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 731,
    "end": 732
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 732,
    "end": 735
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 742,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 745,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 752,
    "end": 753
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "rewrites5",
    "start": 765,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 777,
    "end": 778
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 778,
    "end": 781
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 789,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 800,
    "end": 801
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 801,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 809,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "rewrites6",
    "start": 813,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 826,
    "end": 829
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 839,
    "end": 840
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 840,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 852,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "whitespace1",
    "start": 856,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 874,
    "end": 875
  },
  {
    "type": "JSXText",
    "value": "      ",
    "start": 875,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 882,
    "end": 883
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "whitespace2",
    "start": 893,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 911,
    "end": 912
  },
  {
    "type": "JSXText",
    "value": "  ",
    "start": 912,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "JSXText",
    "value": "    ",
    "start": 917,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 922,
    "end": 923
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 929,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "whitespace3",
    "start": 933,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 947,
    "end": 948
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 948,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 951,
    "end": 952
  },
  {
    "type": "JSXText",
    "value": "  \n      ",
    "start": 952,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "JSXText",
    "value": "    \n      ",
    "start": 964,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 976,
    "end": 977
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 977,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  }
]
```
