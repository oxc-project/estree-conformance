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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 92
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 109
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              },
              "start": 147,
              "end": 155
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 156
          }
        ],
        "start": 93,
        "end": 158
      },
      "declare": false,
      "start": 77,
      "end": 158
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
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 179
                },
                "typeArguments": null,
                "start": 174,
                "end": 179
              },
              "start": 172,
              "end": 179
            },
            "start": 167,
            "end": 179
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 185
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 187,
                  "end": 188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 184,
                "end": 188
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 193,
                  "end": 194
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 190,
                "end": 194
              }
            ],
            "start": 182,
            "end": 196
          },
          "definite": false,
          "start": 167,
          "end": 196
        }
      ],
      "declare": false,
      "start": 161,
      "end": 197
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 207
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 218,
                    "end": 223
                  },
                  "start": 216,
                  "end": 223
                },
                "start": 211,
                "end": 223
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
                  "start": 229,
                  "end": 232
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 228,
                "end": 233
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 240
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 242
                    },
                    "optional": false,
                    "computed": false,
                    "start": 235,
                    "end": 242
                  },
                  "start": 233,
                  "end": 244
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 246,
                  "end": 249
                },
                "start": 244,
                "end": 250
              },
              "start": 228,
              "end": 250
            },
            "id": null,
            "generator": false,
            "start": 210,
            "end": 250
          },
          "definite": false,
          "start": 204,
          "end": 250
        }
      ],
      "declare": false,
      "start": 198,
      "end": 251
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 267
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 271,
                "end": 274
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 284
                  },
                  "start": 275,
                  "end": 285
                }
              ],
              "selfClosing": false,
              "start": 270,
              "end": 286
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 288,
                "end": 291
              },
              "start": 286,
              "end": 292
            },
            "start": 270,
            "end": 292
          },
          "definite": false,
          "start": 265,
          "end": 292
        }
      ],
      "declare": false,
      "start": 259,
      "end": 293
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 302
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 306,
                "end": 309
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "d",
                    "start": 310,
                    "end": 311
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 313,
                      "end": 314
                    },
                    "start": 312,
                    "end": 315
                  },
                  "start": 310,
                  "end": 315
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 325
                  },
                  "start": 316,
                  "end": 326
                }
              ],
              "selfClosing": false,
              "start": 305,
              "end": 327
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 329,
                "end": 332
              },
              "start": 327,
              "end": 333
            },
            "start": 305,
            "end": 333
          },
          "definite": false,
          "start": 300,
          "end": 333
        }
      ],
      "declare": false,
      "start": 294,
      "end": 334
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 353
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 357,
                "end": 360
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 361,
                    "end": 362
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 364,
                      "end": 365
                    },
                    "start": 363,
                    "end": 366
                  },
                  "start": 361,
                  "end": 366
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 376
                  },
                  "start": 367,
                  "end": 377
                }
              ],
              "selfClosing": false,
              "start": 356,
              "end": 378
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 380,
                "end": 383
              },
              "start": 378,
              "end": 384
            },
            "start": 356,
            "end": 384
          },
          "definite": false,
          "start": 351,
          "end": 384
        }
      ],
      "declare": false,
      "start": 345,
      "end": 385
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 394
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 398,
                "end": 401
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 402,
                    "end": 403
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 405,
                      "end": 406
                    },
                    "start": 404,
                    "end": 407
                  },
                  "start": 402,
                  "end": 407
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 408,
                    "end": 409
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 411,
                      "end": 412
                    },
                    "start": 410,
                    "end": 413
                  },
                  "start": 408,
                  "end": 413
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 418,
                    "end": 423
                  },
                  "start": 414,
                  "end": 424
                }
              ],
              "selfClosing": false,
              "start": 397,
              "end": 425
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 427,
                "end": 430
              },
              "start": 425,
              "end": 431
            },
            "start": 397,
            "end": 431
          },
          "definite": false,
          "start": 392,
          "end": 431
        }
      ],
      "declare": false,
      "start": 386,
      "end": 432
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 445,
                "end": 448
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 449,
                    "end": 450
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 452,
                      "end": 453
                    },
                    "start": 451,
                    "end": 454
                  },
                  "start": 449,
                  "end": 454
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "d",
                    "start": 455,
                    "end": 456
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 458,
                      "end": 459
                    },
                    "start": 457,
                    "end": 460
                  },
                  "start": 455,
                  "end": 460
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 470
                  },
                  "start": 461,
                  "end": 471
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 479
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 481,
                          "end": 482
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 478,
                        "end": 482
                      }
                    ],
                    "start": 476,
                    "end": 484
                  },
                  "start": 472,
                  "end": 485
                }
              ],
              "selfClosing": false,
              "start": 444,
              "end": 486
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 488,
                "end": 491
              },
              "start": 486,
              "end": 492
            },
            "start": 444,
            "end": 492
          },
          "definite": false,
          "start": 439,
          "end": 492
        }
      ],
      "declare": false,
      "start": 433,
      "end": 493
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 502
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 506,
                "end": 509
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 510,
                    "end": 511
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 513,
                      "end": 514
                    },
                    "start": 512,
                    "end": 515
                  },
                  "start": 510,
                  "end": 515
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "d",
                    "start": 516,
                    "end": 517
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 519,
                      "end": 520
                    },
                    "start": 518,
                    "end": 521
                  },
                  "start": 516,
                  "end": 521
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 531
                  },
                  "start": 522,
                  "end": 532
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 539,
                          "end": 540
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 542,
                          "end": 543
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 539,
                        "end": 543
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 546
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 548,
                          "end": 549
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 545,
                        "end": 549
                      }
                    ],
                    "start": 537,
                    "end": 551
                  },
                  "start": 533,
                  "end": 552
                }
              ],
              "selfClosing": false,
              "start": 505,
              "end": 553
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 555,
                "end": 558
              },
              "start": 553,
              "end": 559
            },
            "start": 505,
            "end": 559
          },
          "definite": false,
          "start": 500,
          "end": 559
        }
      ],
      "declare": false,
      "start": 494,
      "end": 560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 560
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
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 245,
    "end": 246
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 287,
    "end": 288
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 306,
    "end": 309
  },
  {
    "type": "JSXIdentifier",
    "value": "d",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 328,
    "end": 329
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 357,
    "end": 360
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 371,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
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
    "value": "Foo",
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
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 386,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 398,
    "end": 401
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 426,
    "end": 427
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 445,
    "end": 448
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "JSXIdentifier",
    "value": "d",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 487,
    "end": 488
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 506,
    "end": 509
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "JSXIdentifier",
    "value": "d",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 554,
    "end": 555
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  }
]
```
