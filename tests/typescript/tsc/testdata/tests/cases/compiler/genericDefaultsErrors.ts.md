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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 14,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f03",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 69
          }
        ],
        "start": 43,
        "end": 70
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 74,
          "end": 78
        },
        "start": 72,
        "end": 78
      },
      "body": null,
      "expression": false,
      "start": 23,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f04",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 109
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 110,
            "end": 126
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 138,
              "end": 144
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "typeArguments": null,
              "start": 147,
              "end": 148
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 148
          }
        ],
        "start": 109,
        "end": 149
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 153,
          "end": 157
        },
        "start": 151,
        "end": 157
      },
      "body": null,
      "expression": false,
      "start": 89,
      "end": 158
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f05",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 189,
            "end": 190
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 202,
              "end": 208
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "typeArguments": null,
              "start": 211,
              "end": 212
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 212
          }
        ],
        "start": 188,
        "end": 213
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        },
        "start": 215,
        "end": 221
      },
      "body": null,
      "expression": false,
      "start": 168,
      "end": 222
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f06",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 252
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 254
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 267
              },
              "typeArguments": null,
              "start": 266,
              "end": 267
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 276
          }
        ],
        "start": 252,
        "end": 277
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 281,
          "end": 285
        },
        "start": 279,
        "end": 285
      },
      "body": null,
      "expression": false,
      "start": 232,
      "end": 286
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 317
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 318,
            "end": 319
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 321,
            "end": 322
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 328,
              "end": 334
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 334
          }
        ],
        "start": 317,
        "end": 335
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 339,
          "end": 343
        },
        "start": 337,
        "end": 343
      },
      "body": null,
      "expression": false,
      "start": 297,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 345,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 345,
        "end": 350
      },
      "directive": null,
      "start": 345,
      "end": 351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 358,
          "end": 361
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 362,
                "end": 363
              },
              "start": 362,
              "end": 363
            }
          ],
          "start": 361,
          "end": 364
        },
        "arguments": [],
        "optional": false,
        "start": 358,
        "end": 366
      },
      "directive": null,
      "start": 358,
      "end": 367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 380
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 381,
                "end": 382
              },
              "start": 381,
              "end": 382
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 384,
                "end": 385
              },
              "start": 384,
              "end": 385
            }
          ],
          "start": 380,
          "end": 386
        },
        "arguments": [],
        "optional": false,
        "start": 377,
        "end": 388
      },
      "directive": null,
      "start": 377,
      "end": 389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 399
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 400,
                "end": 401
              },
              "start": 400,
              "end": 401
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 403,
                "end": 404
              },
              "start": 403,
              "end": 404
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 406,
                "end": 407
              },
              "start": 406,
              "end": 407
            }
          ],
          "start": 399,
          "end": 408
        },
        "arguments": [],
        "optional": false,
        "start": 396,
        "end": 410
      },
      "directive": null,
      "start": 396,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 421
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 422,
                "end": 423
              },
              "start": 422,
              "end": 423
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 425,
                "end": 426
              },
              "start": 425,
              "end": 426
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 428,
                "end": 429
              },
              "start": 428,
              "end": 429
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 431,
                "end": 432
              },
              "start": 431,
              "end": 432
            }
          ],
          "start": 421,
          "end": 433
        },
        "arguments": [],
        "optional": false,
        "start": 418,
        "end": 435
      },
      "directive": null,
      "start": 418,
      "end": 436
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 467
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 469
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 472
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "typeArguments": null,
              "start": 475,
              "end": 476
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 471,
            "end": 476
          }
        ],
        "start": 467,
        "end": 477
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 483
              },
              "typeArguments": null,
              "start": 482,
              "end": 483
            },
            "start": 480,
            "end": 483
          },
          "start": 478,
          "end": 483
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 486,
          "end": 490
        },
        "start": 484,
        "end": 490
      },
      "body": null,
      "expression": false,
      "start": 447,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 495
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 496,
              "end": 502
            }
          ],
          "start": 495,
          "end": 503
        },
        "arguments": [],
        "optional": false,
        "start": 492,
        "end": 505
      },
      "directive": null,
      "start": 492,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 516
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 517,
              "end": 523
            }
          ],
          "start": 516,
          "end": 524
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 525,
            "end": 528
          }
        ],
        "optional": false,
        "start": 513,
        "end": 529
      },
      "directive": null,
      "start": 513,
      "end": 530
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i00",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 554
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 556
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 555,
            "end": 556
          }
        ],
        "start": 554,
        "end": 557
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 558,
        "end": 561
      },
      "declare": false,
      "start": 541,
      "end": 561
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i00",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 581
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 583
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 586,
              "end": 592
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 582,
            "end": 592
          }
        ],
        "start": 581,
        "end": 593
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 594,
        "end": 597
      },
      "declare": false,
      "start": 568,
      "end": 597
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i01",
        "optional": false,
        "typeAnnotation": null,
        "start": 618,
        "end": 621
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 623
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 626,
              "end": 632
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 622,
            "end": 632
          }
        ],
        "start": 621,
        "end": 633
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 634,
        "end": 637
      },
      "declare": false,
      "start": 608,
      "end": 637
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i01",
        "optional": false,
        "typeAnnotation": null,
        "start": 654,
        "end": 657
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 659
            },
            "constraint": null,
            "default": {
              "type": "TSStringKeyword",
              "start": 662,
              "end": 668
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 658,
            "end": 668
          }
        ],
        "start": 657,
        "end": 669
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 670,
        "end": 673
      },
      "declare": false,
      "start": 644,
      "end": 673
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i04",
        "optional": false,
        "typeAnnotation": null,
        "start": 694,
        "end": 697
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 699
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 702,
              "end": 708
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 698,
            "end": 708
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 711
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 710,
            "end": 711
          }
        ],
        "start": 697,
        "end": 712
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 713,
        "end": 716
      },
      "declare": false,
      "start": 684,
      "end": 716
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i05",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 739
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 741
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 750,
              "end": 756
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 759,
              "end": 765
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 740,
            "end": 765
          }
        ],
        "start": 739,
        "end": 766
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 767,
        "end": 770
      },
      "declare": false,
      "start": 726,
      "end": 770
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i06",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 793
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 795
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 804,
              "end": 810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 794,
            "end": 810
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 822,
              "end": 828
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 831,
                "end": 832
              },
              "typeArguments": null,
              "start": 831,
              "end": 832
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 832
          }
        ],
        "start": 793,
        "end": 833
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 834,
        "end": 837
      },
      "declare": false,
      "start": 780,
      "end": 837
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i07",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 860
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 862
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 861,
            "end": 862
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 865
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 874,
              "end": 880
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 883,
                "end": 884
              },
              "typeArguments": null,
              "start": 883,
              "end": 884
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 864,
            "end": 884
          }
        ],
        "start": 860,
        "end": 885
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 886,
        "end": 889
      },
      "declare": false,
      "start": 847,
      "end": 889
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i08",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 912
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 914
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 913,
            "end": 914
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 917
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 927
              },
              "typeArguments": null,
              "start": 926,
              "end": 927
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 930,
              "end": 936
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 916,
            "end": 936
          }
        ],
        "start": 912,
        "end": 937
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 938,
        "end": 941
      },
      "declare": false,
      "start": 899,
      "end": 941
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i09",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 965
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 966,
            "end": 967
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 970
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 969,
            "end": 970
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 973
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 976,
              "end": 982
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 972,
            "end": 982
          }
        ],
        "start": 965,
        "end": 983
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 984,
        "end": 987
      },
      "declare": false,
      "start": 952,
      "end": 987
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i09t00",
        "optional": false,
        "typeAnnotation": null,
        "start": 993,
        "end": 999
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null,
          "start": 1002,
          "end": 1005
        },
        "typeArguments": null,
        "start": 1002,
        "end": 1005
      },
      "declare": false,
      "start": 988,
      "end": 1006
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i09t01",
        "optional": false,
        "typeAnnotation": null,
        "start": 1021,
        "end": 1027
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null,
          "start": 1030,
          "end": 1033
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1034,
                "end": 1035
              },
              "start": 1034,
              "end": 1035
            }
          ],
          "start": 1033,
          "end": 1036
        },
        "start": 1030,
        "end": 1036
      },
      "declare": false,
      "start": 1016,
      "end": 1037
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i09t02",
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1058
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1064
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1065,
                "end": 1066
              },
              "start": 1065,
              "end": 1066
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1068,
                "end": 1069
              },
              "start": 1068,
              "end": 1069
            }
          ],
          "start": 1064,
          "end": 1070
        },
        "start": 1061,
        "end": 1070
      },
      "declare": false,
      "start": 1047,
      "end": 1071
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i09t03",
        "optional": false,
        "typeAnnotation": null,
        "start": 1083,
        "end": 1089
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null,
          "start": 1092,
          "end": 1095
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1096,
                "end": 1097
              },
              "start": 1096,
              "end": 1097
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1099,
                "end": 1100
              },
              "start": 1099,
              "end": 1100
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1102,
                "end": 1103
              },
              "start": 1102,
              "end": 1103
            }
          ],
          "start": 1095,
          "end": 1104
        },
        "start": 1092,
        "end": 1104
      },
      "declare": false,
      "start": 1078,
      "end": 1105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i09t04",
        "optional": false,
        "typeAnnotation": null,
        "start": 1117,
        "end": 1123
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1129
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1130,
                "end": 1131
              },
              "start": 1130,
              "end": 1131
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1133,
                "end": 1134
              },
              "start": 1133,
              "end": 1134
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1136,
                "end": 1137
              },
              "start": 1136,
              "end": 1137
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1139,
                "end": 1140
              },
              "start": 1139,
              "end": 1140
            }
          ],
          "start": 1129,
          "end": 1141
        },
        "start": 1126,
        "end": 1141
      },
      "declare": false,
      "start": 1112,
      "end": 1142
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1163,
        "end": 1166
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
              "start": 1169,
              "end": 1170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1172,
                  "end": 1173
                },
                "typeArguments": null,
                "start": 1172,
                "end": 1173
              },
              "start": 1170,
              "end": 1173
            },
            "accessibility": null,
            "static": false,
            "start": 1169,
            "end": 1174
          }
        ],
        "start": 1167,
        "end": 1176
      },
      "declare": false,
      "start": 1153,
      "end": 1176
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1196,
        "end": 1199
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1201
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 1204,
              "end": 1210
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1200,
            "end": 1210
          }
        ],
        "start": 1199,
        "end": 1211
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1212,
        "end": 1214
      },
      "declare": false,
      "start": 1186,
      "end": 1214
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelfReference",
        "optional": false,
        "typeAnnotation": null,
        "start": 1282,
        "end": 1295
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1297
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelfReference",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1313
              },
              "typeArguments": null,
              "start": 1300,
              "end": 1313
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1296,
            "end": 1313
          }
        ],
        "start": 1295,
        "end": 1314
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1315,
        "end": 1317
      },
      "declare": false,
      "start": 1272,
      "end": 1317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1317
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
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 31,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 89,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "f04",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 168,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 176,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "f05",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 194,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 232,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 240,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "f06",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 270,
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
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 297,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 362,
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
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 447,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 455,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
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
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 513,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 541,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "i00",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 568,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "i00",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 586,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 608,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "i01",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 644,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "i01",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 684,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "i04",
    "start": 694,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 726,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "i05",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 742,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 780,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "i06",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 796,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 814,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 822,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 831,
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
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 847,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "i07",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 866,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 899,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "i08",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 918,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 930,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 952,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "i09",
    "start": 962,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 976,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 988,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "i09t00",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "i09",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1016,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "i09t01",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "i09",
    "start": 1030,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1047,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "i09t02",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "i09",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1078,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "i09t03",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "i09",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "i09t04",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "i09",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1153,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "i10",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1186,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "i10",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1204,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1272,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "SelfReference",
    "start": 1282,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "SelfReference",
    "start": 1300,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  }
]
```
