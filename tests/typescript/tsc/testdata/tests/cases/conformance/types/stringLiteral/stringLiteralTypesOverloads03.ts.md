__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "start": 21,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 31
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
              "start": 36,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 15,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloOrWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 72
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "typeArguments": null,
          "start": 81,
          "end": 85
        }
      ],
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 96,
                "end": 103
              },
              "start": 94,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 104
          }
        ],
        "start": 86,
        "end": 106
      },
      "declare": false,
      "start": 50,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 127
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 140
          },
          "typeArguments": null,
          "start": 136,
          "end": 140
        }
      ],
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
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 151,
                "end": 158
              },
              "start": 149,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 159
          }
        ],
        "start": 141,
        "end": 161
      },
      "declare": false,
      "start": 108,
      "end": 161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 182
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 195
          },
          "typeArguments": null,
          "start": 191,
          "end": 195
        }
      ],
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
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 204
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 206,
                "end": 213
              },
              "start": 204,
              "end": 213
            },
            "accessibility": null,
            "static": false,
            "start": 202,
            "end": 214
          }
        ],
        "start": 196,
        "end": 216
      },
      "declare": false,
      "start": 163,
      "end": 216
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 229,
                  "end": 236
                },
                "start": 229,
                "end": 236
              },
              "start": 227,
              "end": 236
            },
            "start": 222,
            "end": 236
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 236
        }
      ],
      "declare": false,
      "start": 218,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "world",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 249,
                  "end": 256
                },
                "start": 249,
                "end": 256
              },
              "start": 247,
              "end": 256
            },
            "start": 242,
            "end": 256
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 256
        }
      ],
      "declare": false,
      "start": 238,
      "end": 257
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "helloOrWorld",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 276,
                      "end": 283
                    },
                    "start": 276,
                    "end": 283
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 286,
                      "end": 293
                    },
                    "start": 286,
                    "end": 293
                  }
                ],
                "start": 276,
                "end": 293
              },
              "start": 274,
              "end": 293
            },
            "start": 262,
            "end": 293
          },
          "init": null,
          "definite": false,
          "start": 262,
          "end": 293
        }
      ],
      "declare": false,
      "start": 258,
      "end": 294
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 306
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 310,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "start": 308,
            "end": 317
          },
          "start": 307,
          "end": 317
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 329
          },
          "typeArguments": null,
          "start": 320,
          "end": 329
        },
        "start": 318,
        "end": 329
      },
      "body": null,
      "expression": false,
      "start": 296,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 341
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 345,
                    "end": 352
                  },
                  "start": 345,
                  "end": 352
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "world",
                    "raw": "\"world\"",
                    "start": 355,
                    "end": 362
                  },
                  "start": 355,
                  "end": 362
                }
              ],
              "start": 345,
              "end": 362
            },
            "start": 343,
            "end": 362
          },
          "start": 342,
          "end": 362
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "HelloOrWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 377
          },
          "typeArguments": null,
          "start": 365,
          "end": 377
        },
        "start": 363,
        "end": 377
      },
      "body": null,
      "expression": false,
      "start": 331,
      "end": 378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 393,
                "end": 400
              },
              "start": 393,
              "end": 400
            },
            "start": 391,
            "end": 400
          },
          "start": 390,
          "end": 400
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 412
          },
          "typeArguments": null,
          "start": 403,
          "end": 412
        },
        "start": 401,
        "end": 412
      },
      "body": null,
      "expression": false,
      "start": 379,
      "end": 413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 424
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 428,
              "end": 434
            },
            "start": 426,
            "end": 434
          },
          "start": 425,
          "end": 434
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 441
          },
          "typeArguments": null,
          "start": 437,
          "end": 441
        },
        "start": 435,
        "end": 441
      },
      "body": null,
      "expression": false,
      "start": 414,
      "end": 442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 453
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 457,
            "end": 461
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 463,
                "end": 466
              },
              "start": 463,
              "end": 468
            },
            "start": 461,
            "end": 468
          },
          "value": null,
          "start": 454,
          "end": 468
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 471,
          "end": 474
        },
        "start": 469,
        "end": 474
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 497
            },
            "start": 481,
            "end": 498
          }
        ],
        "start": 475,
        "end": 500
      },
      "expression": false,
      "start": 443,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 514
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 518
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 524
              }
            ],
            "optional": false,
            "start": 517,
            "end": 525
          },
          "definite": false,
          "start": 506,
          "end": 525
        }
      ],
      "declare": false,
      "start": 502,
      "end": 526
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 531,
            "end": 539
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 543
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 549
              }
            ],
            "optional": false,
            "start": 542,
            "end": 550
          },
          "definite": false,
          "start": 531,
          "end": 550
        }
      ],
      "declare": false,
      "start": 527,
      "end": 551
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 564
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "helloOrWorld",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 581
              }
            ],
            "optional": false,
            "start": 567,
            "end": 582
          },
          "definite": false,
          "start": 556,
          "end": 582
        }
      ],
      "declare": false,
      "start": 552,
      "end": 583
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 595
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 599,
              "end": 605
            },
            "start": 597,
            "end": 605
          },
          "start": 596,
          "end": 605
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 612
          },
          "typeArguments": null,
          "start": 608,
          "end": 612
        },
        "start": 606,
        "end": 612
      },
      "body": null,
      "expression": false,
      "start": 585,
      "end": 613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 624
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 628,
                "end": 635
              },
              "start": 628,
              "end": 635
            },
            "start": 626,
            "end": 635
          },
          "start": 625,
          "end": 635
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 647
          },
          "typeArguments": null,
          "start": 638,
          "end": 647
        },
        "start": 636,
        "end": 647
      },
      "body": null,
      "expression": false,
      "start": 614,
      "end": 648
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 663,
                    "end": 670
                  },
                  "start": 663,
                  "end": 670
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "world",
                    "raw": "\"world\"",
                    "start": 673,
                    "end": 680
                  },
                  "start": 673,
                  "end": 680
                }
              ],
              "start": 663,
              "end": 680
            },
            "start": 661,
            "end": 680
          },
          "start": 660,
          "end": 680
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "HelloOrWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 683,
            "end": 695
          },
          "typeArguments": null,
          "start": 683,
          "end": 695
        },
        "start": 681,
        "end": 695
      },
      "body": null,
      "expression": false,
      "start": 649,
      "end": 696
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 707
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 711,
                "end": 718
              },
              "start": 711,
              "end": 718
            },
            "start": 709,
            "end": 718
          },
          "start": 708,
          "end": 718
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JustWorld",
            "optional": false,
            "typeAnnotation": null,
            "start": 721,
            "end": 730
          },
          "typeArguments": null,
          "start": 721,
          "end": 730
        },
        "start": 719,
        "end": 730
      },
      "body": null,
      "expression": false,
      "start": 697,
      "end": 731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 742
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 746,
            "end": 750
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 752,
                "end": 755
              },
              "start": 752,
              "end": 757
            },
            "start": 750,
            "end": 757
          },
          "value": null,
          "start": 743,
          "end": 757
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 760,
          "end": 763
        },
        "start": 758,
        "end": 763
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 786
            },
            "start": 770,
            "end": 787
          }
        ],
        "start": 764,
        "end": 789
      },
      "expression": false,
      "start": 732,
      "end": 789
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 803
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 807
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 813
              }
            ],
            "optional": false,
            "start": 806,
            "end": 814
          },
          "definite": false,
          "start": 795,
          "end": 814
        }
      ],
      "declare": false,
      "start": 791,
      "end": 815
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 820,
            "end": 828
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 838
              }
            ],
            "optional": false,
            "start": 831,
            "end": 839
          },
          "definite": false,
          "start": 820,
          "end": 839
        }
      ],
      "declare": false,
      "start": 816,
      "end": 840
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 853
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "helloOrWorld",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 870
              }
            ],
            "optional": false,
            "start": 856,
            "end": 871
          },
          "definite": false,
          "start": 845,
          "end": 871
        }
      ],
      "declare": false,
      "start": 841,
      "end": 872
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 872
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "HelloOrWorld",
    "start": 60,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 73,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "JustHello",
    "start": 118,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 128,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 163,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "JustWorld",
    "start": 173,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 249,
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
    "value": "let",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "helloOrWorld",
    "start": 262,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 284,
    "end": 285
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 296,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "JustHello",
    "start": 320,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 331,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 355,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "HelloOrWorld",
    "start": 365,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "JustWorld",
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 414,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 428,
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
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 481,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 488,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "fResult1",
    "start": 506,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 527,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "fResult2",
    "start": 531,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "let",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "fResult3",
    "start": 556,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "helloOrWorld",
    "start": 569,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 585,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 599,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 614,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "JustHello",
    "start": 638,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 649,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 663,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "HelloOrWorld",
    "start": 683,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 697,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "JustWorld",
    "start": 721,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 732,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 770,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 777,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 791,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "gResult1",
    "start": 795,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 808,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 816,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "gResult2",
    "start": 820,
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
    "value": "g",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 833,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 841,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "gResult3",
    "start": 845,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "helloOrWorld",
    "start": 858,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  }
]
```
