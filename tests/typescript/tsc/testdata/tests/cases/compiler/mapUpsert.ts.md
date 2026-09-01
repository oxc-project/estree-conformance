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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 22
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
                    }
                  ],
                  "start": 22,
                  "end": 38
                },
                "start": 19,
                "end": 38
              },
              "start": 17,
              "end": 38
            },
            "start": 14,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
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
            "name": "mapR",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 71
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 72,
                      "end": 78
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  ],
                  "start": 71,
                  "end": 87
                },
                "start": 60,
                "end": 87
              },
              "start": 58,
              "end": 87
            },
            "start": 54,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 87
        }
      ],
      "declare": true,
      "start": 40,
      "end": 88
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
            "name": "mapW",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 116
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSObjectKeyword",
                      "start": 117,
                      "end": 123
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  ],
                  "start": 116,
                  "end": 132
                },
                "start": 109,
                "end": 132
              },
              "start": 107,
              "end": 132
            },
            "start": 103,
            "end": 132
          },
          "init": null,
          "definite": false,
          "start": 103,
          "end": 132
        }
      ],
      "declare": true,
      "start": 89,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 156
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 156
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 157,
            "end": 162
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 164,
            "end": 167
          }
        ],
        "optional": false,
        "start": 141,
        "end": 168
      },
      "directive": null,
      "start": 141,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 193
          },
          "optional": false,
          "computed": false,
          "start": 170,
          "end": 193
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 194,
            "end": 199
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 207,
              "end": 210
            },
            "id": null,
            "generator": false,
            "start": 201,
            "end": 210
          }
        ],
        "optional": false,
        "start": 170,
        "end": 211
      },
      "directive": null,
      "start": 170,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 236
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 236
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 237,
            "end": 242
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 250,
                    "end": 256
                  },
                  "start": 248,
                  "end": 256
                },
                "start": 245,
                "end": 256
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 261,
              "end": 264
            },
            "id": null,
            "generator": false,
            "start": 244,
            "end": 264
          }
        ],
        "optional": false,
        "start": 213,
        "end": 265
      },
      "directive": null,
      "start": 213,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 271
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 283
          },
          "optional": false,
          "computed": false,
          "start": 267,
          "end": 283
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 284,
            "end": 286
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 288,
            "end": 291
          }
        ],
        "optional": false,
        "start": 267,
        "end": 292
      },
      "directive": null,
      "start": 267,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 298
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 318
          },
          "optional": false,
          "computed": false,
          "start": 294,
          "end": 318
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 319,
            "end": 321
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 329,
              "end": 332
            },
            "id": null,
            "generator": false,
            "start": 323,
            "end": 332
          }
        ],
        "optional": false,
        "start": 294,
        "end": 333
      },
      "directive": null,
      "start": 294,
      "end": 334
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 359
          },
          "optional": false,
          "computed": false,
          "start": 335,
          "end": 359
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 360,
            "end": 362
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 370,
                    "end": 376
                  },
                  "start": 368,
                  "end": 376
                },
                "start": 365,
                "end": 376
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 381,
              "end": 384
            },
            "id": null,
            "generator": false,
            "start": 364,
            "end": 384
          }
        ],
        "optional": false,
        "start": 335,
        "end": 385
      },
      "directive": null,
      "start": 335,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 413
          },
          "optional": false,
          "computed": false,
          "start": 398,
          "end": 413
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 414,
            "end": 419
          }
        ],
        "optional": false,
        "start": 398,
        "end": 420
      },
      "directive": null,
      "start": 398,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 437
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 438,
            "end": 443
          },
          {
            "type": "Literal",
            "value": "value",
            "raw": "\"value\"",
            "start": 445,
            "end": 452
          }
        ],
        "optional": false,
        "start": 422,
        "end": 453
      },
      "directive": null,
      "start": 422,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 458
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 470
          },
          "optional": false,
          "computed": false,
          "start": 455,
          "end": 470
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 471,
            "end": 476
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 484,
              "end": 487
            },
            "id": null,
            "generator": false,
            "start": 478,
            "end": 487
          }
        ],
        "optional": false,
        "start": 455,
        "end": 488
      },
      "directive": null,
      "start": 455,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 493
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 513
          },
          "optional": false,
          "computed": false,
          "start": 490,
          "end": 513
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 514,
            "end": 519
          }
        ],
        "optional": false,
        "start": 490,
        "end": 520
      },
      "directive": null,
      "start": 490,
      "end": 521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 525
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 545
          },
          "optional": false,
          "computed": false,
          "start": 522,
          "end": 545
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 546,
            "end": 551
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 553,
            "end": 556
          }
        ],
        "optional": false,
        "start": 522,
        "end": 557
      },
      "directive": null,
      "start": 522,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 562
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 582
          },
          "optional": false,
          "computed": false,
          "start": 559,
          "end": 582
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 583,
            "end": 588
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "value",
              "raw": "\"value\"",
              "start": 596,
              "end": 603
            },
            "id": null,
            "generator": false,
            "start": 590,
            "end": 603
          }
        ],
        "optional": false,
        "start": 559,
        "end": 604
      },
      "directive": null,
      "start": 559,
      "end": 605
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 610
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 622
          },
          "optional": false,
          "computed": false,
          "start": 606,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 623,
            "end": 625
          }
        ],
        "optional": false,
        "start": 606,
        "end": 626
      },
      "directive": null,
      "start": 606,
      "end": 627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 632
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 644
          },
          "optional": false,
          "computed": false,
          "start": 628,
          "end": 644
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 645,
            "end": 647
          },
          {
            "type": "Literal",
            "value": "value",
            "raw": "\"value\"",
            "start": 649,
            "end": 656
          }
        ],
        "optional": false,
        "start": 628,
        "end": 657
      },
      "directive": null,
      "start": 628,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 663
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 675
          },
          "optional": false,
          "computed": false,
          "start": 659,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 676,
            "end": 678
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 686,
              "end": 689
            },
            "id": null,
            "generator": false,
            "start": 680,
            "end": 689
          }
        ],
        "optional": false,
        "start": 659,
        "end": 690
      },
      "directive": null,
      "start": 659,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 696
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 716
          },
          "optional": false,
          "computed": false,
          "start": 692,
          "end": 716
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 717,
            "end": 719
          }
        ],
        "optional": false,
        "start": 692,
        "end": 720
      },
      "directive": null,
      "start": 692,
      "end": 721
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 726
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 746
          },
          "optional": false,
          "computed": false,
          "start": 722,
          "end": 746
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 747,
            "end": 749
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 751,
            "end": 754
          }
        ],
        "optional": false,
        "start": 722,
        "end": 755
      },
      "directive": null,
      "start": 722,
      "end": 756
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapW",
            "optional": false,
            "typeAnnotation": null,
            "start": 757,
            "end": 761
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 781
          },
          "optional": false,
          "computed": false,
          "start": 757,
          "end": 781
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 782,
            "end": 784
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "value",
              "raw": "\"value\"",
              "start": 792,
              "end": 799
            },
            "id": null,
            "generator": false,
            "start": 786,
            "end": 799
          }
        ],
        "optional": false,
        "start": 757,
        "end": 800
      },
      "directive": null,
      "start": 757,
      "end": 801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapR",
            "optional": false,
            "typeAnnotation": null,
            "start": 840,
            "end": 844
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 856
          },
          "optional": false,
          "computed": false,
          "start": 840,
          "end": 856
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 857,
            "end": 862
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 864,
            "end": 867
          }
        ],
        "optional": false,
        "start": 840,
        "end": 868
      },
      "directive": null,
      "start": 840,
      "end": 869
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapR",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 874
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsertComputed",
            "optional": false,
            "typeAnnotation": null,
            "start": 875,
            "end": 894
          },
          "optional": false,
          "computed": false,
          "start": 870,
          "end": 894
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 895,
            "end": 900
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 908,
              "end": 911
            },
            "id": null,
            "generator": false,
            "start": 902,
            "end": 911
          }
        ],
        "optional": false,
        "start": 870,
        "end": 912
      },
      "directive": null,
      "start": 870,
      "end": 913
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 913
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
    "value": "map",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "mapR",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "ReadonlyMap",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 89,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "mapW",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 145,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 174,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 204,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 217,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "mapW",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 272,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "mapW",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 299,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 326,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "mapW",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 340,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 365,
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
    "value": "object",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 378,
    "end": 380
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 402,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 426,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 438,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "map",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 459,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 481,
    "end": 483
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 484,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 494,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 514,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 526,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 546,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 563,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 583,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 593,
    "end": 595
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "mapW",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 611,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "mapW",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 633,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "mapW",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 664,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 683,
    "end": 685
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "mapW",
    "start": 692,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 697,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "mapW",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 727,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 751,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "mapW",
    "start": 757,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 762,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 789,
    "end": 791
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 792,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "mapR",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 845,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "mapR",
    "start": 870,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 875,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "String",
    "value": "\"key\"",
    "start": 895,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 905,
    "end": 907
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  }
]
```
