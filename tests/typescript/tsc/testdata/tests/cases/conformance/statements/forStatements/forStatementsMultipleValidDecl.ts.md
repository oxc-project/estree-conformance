__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "start": 38,
              "end": 47
            },
            "init": null,
            "definite": false,
            "start": 38,
            "end": 47
          }
        ],
        "declare": false,
        "start": 34,
        "end": 47
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 52,
        "end": 55
      },
      "start": 29,
      "end": 55
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 69,
              "end": 70
            },
            "definite": false,
            "start": 65,
            "end": 70
          }
        ],
        "declare": false,
        "start": 61,
        "end": 70
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 75,
        "end": 78
      },
      "start": 56,
      "end": 78
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 110
              },
              "start": 93,
              "end": 110
            },
            "definite": false,
            "start": 89,
            "end": 110
          }
        ],
        "declare": false,
        "start": 85,
        "end": 110
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 118
      },
      "start": 80,
      "end": 118
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "declSpace",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 202
      },
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
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "init": {
                    "type": "Literal",
                    "value": "this is a string",
                    "raw": "'this is a string'",
                    "start": 224,
                    "end": 242
                  },
                  "definite": false,
                  "start": 220,
                  "end": 242
                }
              ],
              "declare": false,
              "start": 216,
              "end": 242
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 247,
              "end": 250
            },
            "start": 211,
            "end": 250
          }
        ],
        "start": 205,
        "end": 252
      },
      "expression": false,
      "start": 184,
      "end": 252
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 281
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 283
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 285,
                "end": 291
              },
              "start": 283,
              "end": 291
            },
            "accessibility": null,
            "static": false,
            "start": 282,
            "end": 292
          }
        ],
        "start": 269,
        "end": 294
      },
      "declare": false,
      "start": 253,
      "end": 294
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 313
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 313
                },
                "start": 306,
                "end": 313
              },
              "start": 305,
              "end": 313
            },
            "init": null,
            "definite": false,
            "start": 305,
            "end": 313
          }
        ],
        "declare": false,
        "start": 301,
        "end": 313
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 318,
        "end": 321
      },
      "start": 296,
      "end": 321
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 331,
              "end": 332
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 338
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 340,
                    "end": 341
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 337,
                  "end": 341
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 344
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 346,
                    "end": 347
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 343,
                  "end": 347
                }
              ],
              "start": 335,
              "end": 349
            },
            "definite": false,
            "start": 331,
            "end": 349
          }
        ],
        "declare": false,
        "start": 327,
        "end": 349
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 354,
        "end": 357
      },
      "start": 322,
      "end": 357
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 375
                  },
                  "typeArguments": null,
                  "start": 370,
                  "end": 375
                },
                "start": 368,
                "end": 375
              },
              "start": 367,
              "end": 375
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 383,
                    "end": 384
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 380,
                  "end": 384
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 389,
                    "end": 398
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 386,
                  "end": 398
                }
              ],
              "start": 378,
              "end": 400
            },
            "definite": false,
            "start": 367,
            "end": 400
          }
        ],
        "declare": false,
        "start": 363,
        "end": 400
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 405,
        "end": 408
      },
      "start": 358,
      "end": 408
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 418,
              "end": 419
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 425
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 427,
                    "end": 428
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 424,
                  "end": 428
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "value": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 450
                    },
                    "start": 433,
                    "end": 450
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 430,
                  "end": 450
                }
              ],
              "start": 422,
              "end": 452
            },
            "definite": false,
            "start": 418,
            "end": 452
          }
        ],
        "declare": false,
        "start": 414,
        "end": 452
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 457,
        "end": 460
      },
      "start": 409,
      "end": 460
    },
    {
      "type": "ForStatement",
      "init": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 475,
                        "end": 476
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 478,
                          "end": 484
                        },
                        "start": 476,
                        "end": 484
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 475,
                      "end": 485
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 487
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 489,
                          "end": 495
                        },
                        "start": 487,
                        "end": 495
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 486,
                      "end": 496
                    }
                  ],
                  "start": 473,
                  "end": 498
                },
                "start": 471,
                "end": 498
              },
              "start": 470,
              "end": 498
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 504
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 506,
                    "end": 507
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 503,
                  "end": 507
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 510
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 512,
                    "end": 513
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 509,
                  "end": 513
                }
              ],
              "start": 501,
              "end": 515
            },
            "definite": false,
            "start": 470,
            "end": 515
          }
        ],
        "declare": false,
        "start": 466,
        "end": 515
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 520,
        "end": 523
      },
      "start": 461,
      "end": 523
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 533,
              "end": 534
            },
            "init": {
              "type": "TSTypeAssertion",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 541
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 543,
                        "end": 549
                      },
                      "start": 541,
                      "end": 549
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 540,
                    "end": 550
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 552
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 551,
                    "end": 561
                  }
                ],
                "start": 538,
                "end": 563
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 566,
                      "end": 567
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 569,
                      "end": 570
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 566,
                    "end": 570
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 573
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 584
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 572,
                    "end": 584
                  }
                ],
                "start": 564,
                "end": 586
              },
              "start": 537,
              "end": 586
            },
            "definite": false,
            "start": 533,
            "end": 586
          }
        ],
        "declare": false,
        "start": 529,
        "end": 586
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 591,
        "end": 594
      },
      "start": 524,
      "end": 594
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "typeArguments": null,
                  "start": 607,
                  "end": 615
                },
                "start": 605,
                "end": 615
              },
              "start": 604,
              "end": 615
            },
            "init": null,
            "definite": false,
            "start": 604,
            "end": 615
          }
        ],
        "declare": false,
        "start": 600,
        "end": 615
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 620,
        "end": 623
      },
      "start": 595,
      "end": 623
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 636
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 652,
                      "end": 658
                    },
                    "start": 650,
                    "end": 658
                  },
                  "start": 649,
                  "end": 658
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 669,
                      "end": 671
                    },
                    "start": 662,
                    "end": 672
                  }
                ],
                "start": 660,
                "end": 674
              },
              "expression": false,
              "start": 639,
              "end": 674
            },
            "definite": false,
            "start": 634,
            "end": 674
          }
        ],
        "declare": false,
        "start": 630,
        "end": 674
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 679,
        "end": 682
      },
      "start": 625,
      "end": 682
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 694
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 701,
                      "end": 707
                    },
                    "start": 699,
                    "end": 707
                  },
                  "start": 698,
                  "end": 707
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 712,
                "end": 713
              },
              "id": null,
              "generator": false,
              "start": 697,
              "end": 713
            },
            "definite": false,
            "start": 692,
            "end": 713
          }
        ],
        "declare": false,
        "start": 688,
        "end": 713
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 718,
        "end": 721
      },
      "start": 683,
      "end": 721
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 739,
                          "end": 745
                        },
                        "start": 737,
                        "end": 745
                      },
                      "start": 736,
                      "end": 745
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 750,
                      "end": 756
                    },
                    "start": 747,
                    "end": 756
                  },
                  "start": 735,
                  "end": 756
                },
                "start": 733,
                "end": 756
              },
              "start": 731,
              "end": 756
            },
            "init": null,
            "definite": false,
            "start": 731,
            "end": 756
          }
        ],
        "declare": false,
        "start": 727,
        "end": 756
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 761,
        "end": 764
      },
      "start": 722,
      "end": 764
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 784,
                              "end": 790
                            },
                            "start": 782,
                            "end": 790
                          },
                          "start": 781,
                          "end": 790
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 793,
                          "end": 799
                        },
                        "start": 791,
                        "end": 799
                      },
                      "start": 780,
                      "end": 799
                    }
                  ],
                  "start": 778,
                  "end": 801
                },
                "start": 776,
                "end": 801
              },
              "start": 774,
              "end": 801
            },
            "init": null,
            "definite": false,
            "start": 774,
            "end": 801
          }
        ],
        "declare": false,
        "start": 770,
        "end": 801
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 806,
        "end": 809
      },
      "start": 765,
      "end": 809
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 821
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 829,
                        "end": 835
                      },
                      "start": 827,
                      "end": 835
                    },
                    "start": 826,
                    "end": 835
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 840,
                    "end": 846
                  },
                  "start": 837,
                  "end": 846
                },
                "start": 825,
                "end": 846
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 848,
                "end": 852
              },
              "start": 824,
              "end": 852
            },
            "definite": false,
            "start": 819,
            "end": 852
          }
        ],
        "declare": false,
        "start": 815,
        "end": 852
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 857,
        "end": 860
      },
      "start": 810,
      "end": 860
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 881,
                    "end": 883
                  },
                  "typeArguments": null,
                  "start": 874,
                  "end": 883
                },
                "start": 872,
                "end": 883
              },
              "start": 870,
              "end": 883
            },
            "init": null,
            "definite": false,
            "start": 870,
            "end": 883
          }
        ],
        "declare": false,
        "start": 866,
        "end": 883
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 888,
        "end": 891
      },
      "start": 861,
      "end": 891
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 905,
                    "end": 911
                  },
                  "start": 905,
                  "end": 913
                },
                "start": 903,
                "end": 913
              },
              "start": 902,
              "end": 913
            },
            "init": null,
            "definite": false,
            "start": 902,
            "end": 913
          }
        ],
        "declare": false,
        "start": 898,
        "end": 913
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 918,
        "end": 921
      },
      "start": 893,
      "end": 921
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 931,
              "end": 932
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 936,
                  "end": 939
                },
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 941,
                  "end": 944
                }
              ],
              "start": 935,
              "end": 945
            },
            "definite": false,
            "start": 931,
            "end": 945
          }
        ],
        "declare": false,
        "start": 927,
        "end": 945
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 950,
        "end": 953
      },
      "start": 922,
      "end": 953
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 963,
              "end": 964
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 968,
                  "end": 974
                },
                "start": 968,
                "end": 976
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 977,
                "end": 979
              },
              "start": 967,
              "end": 979
            },
            "definite": false,
            "start": 963,
            "end": 979
          }
        ],
        "declare": false,
        "start": 959,
        "end": 979
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 984,
        "end": 987
      },
      "start": 954,
      "end": 987
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  },
                  "start": 1000,
                  "end": 1008
                },
                "start": 998,
                "end": 1008
              },
              "start": 997,
              "end": 1008
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1011,
              "end": 1013
            },
            "definite": false,
            "start": 997,
            "end": 1013
          }
        ],
        "declare": false,
        "start": 993,
        "end": 1013
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1018,
        "end": 1021
      },
      "start": 988,
      "end": 1021
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 1031,
              "end": 1032
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1044
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1045,
                    "end": 1051
                  }
                ],
                "start": 1044,
                "end": 1052
              },
              "arguments": [],
              "start": 1035,
              "end": 1054
            },
            "definite": false,
            "start": 1031,
            "end": 1054
          }
        ],
        "declare": false,
        "start": 1027,
        "end": 1054
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1059,
        "end": 1062
      },
      "start": 1022,
      "end": 1062
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1083
                  },
                  "typeArguments": null,
                  "start": 1075,
                  "end": 1083
                },
                "start": 1073,
                "end": 1083
              },
              "start": 1072,
              "end": 1083
            },
            "init": null,
            "definite": false,
            "start": 1072,
            "end": 1083
          }
        ],
        "declare": false,
        "start": 1068,
        "end": 1083
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1088,
        "end": 1091
      },
      "start": 1063,
      "end": 1091
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 1091
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
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
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 101,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 184,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "declSpace",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "'this is a string'",
    "start": 224,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 253,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 441,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 529,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 575,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 600,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 607,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 639,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 683,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 709,
    "end": 711
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 747,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 765,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 784,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 810,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 837,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Null",
    "value": "null",
    "start": 848,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 870,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 874,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 898,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 905,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 927,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 931,
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
    "value": "[",
    "start": 935,
    "end": 936
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 936,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 959,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 988,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 993,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1075,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  }
]
```
