__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Segment",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 19
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 29
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "optional": false,
              "start": 23,
              "end": 37
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "optional": false,
              "start": 39,
              "end": 52
            }
          ],
          "start": 22,
          "end": 53
        },
        "declare": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SegmentAnnotated",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 84
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 162
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "optional": false,
              "start": 156,
              "end": 170
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 239
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              },
              "optional": false,
              "start": 234,
              "end": 247
            }
          ],
          "start": 87,
          "end": 249
        },
        "declare": false,
        "start": 63,
        "end": 250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 56,
      "end": 250
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Segment",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 274
                },
                "typeArguments": null,
                "start": 267,
                "end": 274
              },
              "start": 265,
              "end": 274
            },
            "start": 264,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 274
        }
      ],
      "declare": true,
      "start": 252,
      "end": 275
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SegmentAnnotated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 307
                },
                "typeArguments": null,
                "start": 291,
                "end": 307
              },
              "start": 289,
              "end": 307
            },
            "start": 288,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 288,
          "end": 307
        }
      ],
      "declare": true,
      "start": 276,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  }
                ],
                "start": 324,
                "end": 340
              },
              "start": 322,
              "end": 340
            },
            "start": 321,
            "end": 340
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 340
        }
      ],
      "declare": true,
      "start": 309,
      "end": 341
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 359
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 361,
                      "end": 367
                    },
                    "optional": false,
                    "start": 358,
                    "end": 367
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    },
                    "optional": false,
                    "start": 369,
                    "end": 378
                  }
                ],
                "start": 357,
                "end": 379
              },
              "start": 355,
              "end": 379
            },
            "start": 354,
            "end": 379
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 379
        }
      ],
      "declare": true,
      "start": 342,
      "end": 380
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 383
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 387
        },
        "start": 382,
        "end": 387
      },
      "directive": null,
      "start": 382,
      "end": 388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 390
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 394
        },
        "start": 389,
        "end": 394
      },
      "directive": null,
      "start": 389,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 397
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 401
        },
        "start": 396,
        "end": 401
      },
      "directive": null,
      "start": 396,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 405
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 409
        },
        "start": 404,
        "end": 409
      },
      "directive": null,
      "start": 404,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 412
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 416
        },
        "start": 411,
        "end": 416
      },
      "directive": null,
      "start": 411,
      "end": 417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 419
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 423
        },
        "start": 418,
        "end": 423
      },
      "directive": null,
      "start": 418,
      "end": 424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 427
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 431
        },
        "start": 426,
        "end": 431
      },
      "directive": null,
      "start": 426,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 434
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 438
        },
        "start": 433,
        "end": 438
      },
      "directive": null,
      "start": 433,
      "end": 439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 441
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 445
        },
        "start": 440,
        "end": 445
      },
      "directive": null,
      "start": 440,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 449
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 453
        },
        "start": 448,
        "end": 453
      },
      "directive": null,
      "start": 448,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 456
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 460
        },
        "start": 455,
        "end": 460
      },
      "directive": null,
      "start": 455,
      "end": 461
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 463
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 467
        },
        "start": 462,
        "end": 467
      },
      "directive": null,
      "start": 462,
      "end": 468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithOptAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 496
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 505
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 507,
                "end": 513
              },
              "optional": false,
              "start": 500,
              "end": 513
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 521
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 524,
                "end": 530
              },
              "optional": true,
              "start": 515,
              "end": 530
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 539
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 541,
                    "end": 547
                  },
                  "start": 541,
                  "end": 549
                },
                "optional": false,
                "start": 535,
                "end": 549
              },
              "start": 532,
              "end": 549
            }
          ],
          "start": 499,
          "end": 550
        },
        "declare": false,
        "start": 477,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 470,
      "end": 551
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Func",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 569
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
                "start": 570,
                "end": 571
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 580,
                  "end": 583
                },
                "start": 580,
                "end": 585
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 570,
              "end": 585
            }
          ],
          "start": 569,
          "end": 586
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "optional": false,
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
                    "start": 596,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 596,
                  "end": 597
                },
                "start": 594,
                "end": 597
              },
              "value": null,
              "start": 590,
              "end": 597
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 602,
              "end": 606
            },
            "start": 599,
            "end": 606
          },
          "start": 589,
          "end": 606
        },
        "declare": false,
        "start": 560,
        "end": 607
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 553,
      "end": 607
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
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 626
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 629,
                  "end": 633
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 637,
                  "end": 640
                },
                "start": 629,
                "end": 640
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 648
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SegmentAnnotated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 649,
                      "end": 665
                    }
                  ],
                  "start": 648,
                  "end": 666
                },
                "start": 644,
                "end": 666
              },
              "start": 629,
              "end": 666
            },
            "definite": false,
            "start": 622,
            "end": 666
          }
        ],
        "declare": false,
        "start": 616,
        "end": 667
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 609,
      "end": 667
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useState",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 693
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 694,
                "end": 695
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 694,
              "end": 695
            }
          ],
          "start": 693,
          "end": 696
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "initial",
            "optional": false,
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
                  "start": 706,
                  "end": 707
                },
                "typeArguments": null,
                "start": 706,
                "end": 707
              },
              "start": 704,
              "end": 707
            },
            "start": 697,
            "end": 707
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 716
                },
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 719
                  },
                  "typeArguments": null,
                  "start": 718,
                  "end": 719
                },
                "optional": false,
                "start": 711,
                "end": 719
              },
              {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 727
                },
                "elementType": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 736,
                      "end": 740
                    },
                    "start": 733,
                    "end": 740
                  },
                  "start": 729,
                  "end": 740
                },
                "optional": false,
                "start": 721,
                "end": 740
              }
            ],
            "start": 710,
            "end": 741
          },
          "start": 708,
          "end": 741
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 755,
                  "end": 759
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 763,
                  "end": 766
                },
                "start": 755,
                "end": 766
              },
              "start": 748,
              "end": 767
            }
          ],
          "start": 742,
          "end": 769
        },
        "expression": false,
        "start": 676,
        "end": 769
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 669,
      "end": 769
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Iter",
          "optional": false,
          "typeAnnotation": null,
          "start": 784,
          "end": 788
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 795
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "step",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 801
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 803,
                      "end": 809
                    },
                    "optional": false,
                    "start": 797,
                    "end": 809
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 821
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 823,
                      "end": 829
                    },
                    "optional": false,
                    "start": 811,
                    "end": 829
                  }
                ],
                "start": 796,
                "end": 830
              }
            ],
            "start": 795,
            "end": 831
          },
          "start": 791,
          "end": 831
        },
        "declare": false,
        "start": 779,
        "end": 832
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 772,
      "end": 832
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "readSegment",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 861
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 869
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 876
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 880,
                    "end": 886
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 888,
                    "end": 894
                  }
                ],
                "start": 879,
                "end": 895
              },
              "start": 877,
              "end": 895
            },
            "start": 862,
            "end": 895
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 897,
          "end": 899
        },
        "expression": false,
        "start": 841,
        "end": 899
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 834,
      "end": 899
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
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 1001
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1004,
                  "end": 1008
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1012,
                  "end": 1015
                },
                "start": 1004,
                "end": 1015
              },
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1029
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readSegment",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1037,
                          "end": 1048
                        },
                        "typeArguments": null,
                        "start": 1030,
                        "end": 1048
                      }
                    ],
                    "start": 1029,
                    "end": 1049
                  },
                  "start": 1019,
                  "end": 1049
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1050,
                    "end": 1051
                  },
                  "start": 1050,
                  "end": 1051
                },
                "start": 1019,
                "end": 1052
              },
              "start": 1004,
              "end": 1052
            },
            "definite": false,
            "start": 998,
            "end": 1052
          }
        ],
        "declare": false,
        "start": 992,
        "end": 1053
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 985,
      "end": 1053
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecursiveTupleA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1067,
          "end": 1082
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "initial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1093
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1095,
                "end": 1101
              },
              "optional": false,
              "start": 1086,
              "end": 1101
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1107
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1124
                },
                "typeArguments": null,
                "start": 1109,
                "end": 1124
              },
              "optional": false,
              "start": 1103,
              "end": 1124
            }
          ],
          "start": 1085,
          "end": 1125
        },
        "declare": false,
        "start": 1062,
        "end": 1126
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1055,
      "end": 1126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecursiveTupleB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1140,
          "end": 1155
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1159,
                "end": 1164
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1166,
                "end": 1172
              },
              "optional": false,
              "start": 1159,
              "end": 1172
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "ptr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1177
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1194
                },
                "typeArguments": null,
                "start": 1179,
                "end": 1194
              },
              "optional": false,
              "start": 1174,
              "end": 1194
            }
          ],
          "start": 1158,
          "end": 1195
        },
        "declare": false,
        "start": 1135,
        "end": 1196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1128,
      "end": 1196
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1213,
                  "end": 1228
                },
                "typeArguments": null,
                "start": 1213,
                "end": 1228
              },
              "start": 1211,
              "end": 1228
            },
            "start": 1210,
            "end": 1228
          },
          "init": null,
          "definite": false,
          "start": 1210,
          "end": 1228
        }
      ],
      "declare": true,
      "start": 1198,
      "end": 1229
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1260
                },
                "typeArguments": null,
                "start": 1245,
                "end": 1260
              },
              "start": 1243,
              "end": 1260
            },
            "start": 1242,
            "end": 1260
          },
          "init": null,
          "definite": false,
          "start": 1242,
          "end": 1260
        }
      ],
      "declare": true,
      "start": 1230,
      "end": 1261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1263,
          "end": 1264
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1267,
          "end": 1268
        },
        "start": 1263,
        "end": 1268
      },
      "directive": null,
      "start": 1263,
      "end": 1269
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1270,
          "end": 1271
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1275
        },
        "start": 1270,
        "end": 1275
      },
      "directive": null,
      "start": 1270,
      "end": 1276
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 1290,
          "end": 1302
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1306,
                "end": 1311
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1313,
                "end": 1319
              },
              "optional": false,
              "start": 1306,
              "end": 1319
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1324,
                  "end": 1328
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecusiveRest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1330,
                      "end": 1342
                    },
                    "typeArguments": null,
                    "start": 1330,
                    "end": 1342
                  },
                  "start": 1330,
                  "end": 1344
                },
                "optional": false,
                "start": 1324,
                "end": 1344
              },
              "start": 1321,
              "end": 1344
            }
          ],
          "start": 1305,
          "end": 1345
        },
        "declare": false,
        "start": 1285,
        "end": 1346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1278,
      "end": 1346
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRest2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1359,
          "end": 1372
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1376,
              "end": 1382
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecusiveRest2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1387,
                    "end": 1400
                  },
                  "typeArguments": null,
                  "start": 1387,
                  "end": 1400
                },
                "start": 1387,
                "end": 1402
              },
              "start": 1384,
              "end": 1402
            }
          ],
          "start": 1375,
          "end": 1403
        },
        "declare": false,
        "start": 1354,
        "end": 1404
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1347,
      "end": 1404
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecusiveRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1433
                },
                "typeArguments": null,
                "start": 1421,
                "end": 1433
              },
              "start": 1419,
              "end": 1433
            },
            "start": 1418,
            "end": 1433
          },
          "init": null,
          "definite": false,
          "start": 1418,
          "end": 1433
        }
      ],
      "declare": true,
      "start": 1406,
      "end": 1434
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecusiveRest2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1463
                },
                "typeArguments": null,
                "start": 1450,
                "end": 1463
              },
              "start": 1448,
              "end": 1463
            },
            "start": 1447,
            "end": 1463
          },
          "init": null,
          "definite": false,
          "start": 1447,
          "end": 1463
        }
      ],
      "declare": true,
      "start": 1435,
      "end": 1464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1466,
          "end": 1467
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1470,
          "end": 1471
        },
        "start": 1466,
        "end": 1471
      },
      "directive": null,
      "start": 1466,
      "end": 1472
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1473,
          "end": 1474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1478
        },
        "start": 1473,
        "end": 1478
      },
      "directive": null,
      "start": 1473,
      "end": 1479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1498,
        "end": 1499
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
              "start": 1500,
              "end": 1501
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1510,
                "end": 1513
              },
              "start": 1510,
              "end": 1515
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1500,
            "end": 1515
          }
        ],
        "start": 1499,
        "end": 1516
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1521
          },
          "optional": false,
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
                "start": 1523,
                "end": 1524
              },
              "typeArguments": null,
              "start": 1523,
              "end": 1524
            },
            "start": 1521,
            "end": 1524
          },
          "value": null,
          "start": 1517,
          "end": 1524
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1527,
            "end": 1528
          },
          "typeArguments": null,
          "start": 1527,
          "end": 1528
        },
        "start": 1525,
        "end": 1528
      },
      "body": null,
      "expression": false,
      "start": 1481,
      "end": 1529
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1547,
        "end": 1548
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 1555,
              "end": 1561
            },
            "start": 1553,
            "end": 1561
          },
          "start": 1549,
          "end": 1561
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "index",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1570,
              "end": 1576
            },
            "start": 1568,
            "end": 1576
          },
          "start": 1563,
          "end": 1576
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 1579,
          "end": 1585
        },
        "start": 1577,
        "end": 1585
      },
      "body": null,
      "expression": false,
      "start": 1530,
      "end": 1586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getArgsForInjection",
        "optional": false,
        "typeAnnotation": null,
        "start": 1604,
        "end": 1623
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
              "start": 1624,
              "end": 1625
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1642
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1644,
                        "end": 1647
                      },
                      "start": 1644,
                      "end": 1649
                    },
                    "start": 1642,
                    "end": 1649
                  },
                  "value": null,
                  "start": 1635,
                  "end": 1649
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1654,
                  "end": 1657
                },
                "start": 1651,
                "end": 1657
              },
              "start": 1634,
              "end": 1657
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1624,
            "end": 1657
          }
        ],
        "start": 1623,
        "end": 1658
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1662,
                "end": 1663
              },
              "typeArguments": null,
              "start": 1662,
              "end": 1663
            },
            "start": 1660,
            "end": 1663
          },
          "start": 1659,
          "end": 1663
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Parameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1676
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1678
                },
                "typeArguments": null,
                "start": 1677,
                "end": 1678
              }
            ],
            "start": 1676,
            "end": 1679
          },
          "start": 1666,
          "end": 1679
        },
        "start": 1664,
        "end": 1679
      },
      "body": null,
      "expression": false,
      "start": 1587,
      "end": 1680
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
              "name": "argumentsOfGAsFirstArgument",
              "optional": false,
              "typeAnnotation": null,
              "start": 1695,
              "end": 1722
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1726
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getArgsForInjection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1727,
                    "end": 1746
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1747,
                      "end": 1748
                    }
                  ],
                  "optional": false,
                  "start": 1727,
                  "end": 1749
                }
              ],
              "optional": false,
              "start": 1725,
              "end": 1750
            },
            "definite": false,
            "start": 1695,
            "end": 1750
          }
        ],
        "declare": false,
        "start": 1689,
        "end": 1751
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1682,
      "end": 1751
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
              "name": "argumentsOfG",
              "optional": false,
              "typeAnnotation": null,
              "start": 1818,
              "end": 1830
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1833,
                "end": 1834
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getArgsForInjection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1838,
                      "end": 1857
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1859
                      }
                    ],
                    "optional": false,
                    "start": 1838,
                    "end": 1860
                  },
                  "start": 1835,
                  "end": 1860
                }
              ],
              "optional": false,
              "start": 1833,
              "end": 1861
            },
            "definite": false,
            "start": 1818,
            "end": 1861
          }
        ],
        "declare": false,
        "start": 1812,
        "end": 1862
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1805,
      "end": 1862
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1899
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Segment",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 63,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "SegmentAnnotated",
    "start": 68,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 252,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Segment",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 276,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "SegmentAnnotated",
    "start": 291,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 309,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 342,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 350,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "d",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "c",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 470,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 477,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "WithOptAndRest",
    "start": 482,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 535,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 553,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 560,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 572,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 599,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 609,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 616,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Null",
    "value": "null",
    "start": 629,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 634,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 637,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 641,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "SegmentAnnotated",
    "start": 649,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 669,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "useState",
    "start": 685,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "initial",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 706,
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
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 711,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 733,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 736,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 748,
    "end": 754
  },
  {
    "type": "Null",
    "value": "null",
    "start": 755,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 760,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 772,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 779,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "Iter",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 797,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "iterations",
    "start": 811,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 834,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 841,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "readSegment",
    "start": 850,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 871,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 985,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 992,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1019,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "readSegment",
    "start": 1037,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "RecursiveTupleA",
    "start": 1067,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "initial",
    "start": 1086,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1095,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1103,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "RecursiveTupleA",
    "start": 1109,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "RecursiveTupleB",
    "start": 1140,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "ptr",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "RecursiveTupleB",
    "start": 1179,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1198,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1206,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "RecursiveTupleA",
    "start": 1213,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "RecursiveTupleB",
    "start": 1245,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1278,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 1290,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1306,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1324,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 1330,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1354,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest2",
    "start": 1359,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1376,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest2",
    "start": 1387,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1406,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1414,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 1421,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1435,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1443,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest2",
    "start": 1450,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1489,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1502,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1530,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1538,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 1549,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1555,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1563,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1587,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1595,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "getArgsForInjection",
    "start": 1604,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1626,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1638,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1666,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1682,
    "end": 1688
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "argumentsOfGAsFirstArgument",
    "start": 1695,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "getArgsForInjection",
    "start": 1727,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1812,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "argumentsOfG",
    "start": 1818,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1835,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "getArgsForInjection",
    "start": 1838,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  }
]
```
