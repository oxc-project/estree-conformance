__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
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
              "value": 1,
              "raw": "1",
              "start": 140,
              "end": 141
            },
            "start": 133,
            "end": 142
          }
        ],
        "start": 127,
        "end": 144
      },
      "expression": false,
      "start": 111,
      "end": 144
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
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 157,
                "end": 158
              }
            ],
            "optional": false,
            "start": 153,
            "end": 159
          },
          "definite": false,
          "start": 149,
          "end": 159
        }
      ],
      "declare": false,
      "start": 145,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 195
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                }
              ],
              "optional": false,
              "start": 192,
              "end": 198
            },
            "start": 185,
            "end": 199
          }
        ],
        "start": 179,
        "end": 201
      },
      "expression": false,
      "start": 162,
      "end": 201
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 216,
                "end": 217
              }
            ],
            "optional": false,
            "start": 211,
            "end": 218
          },
          "definite": false,
          "start": 206,
          "end": 218
        }
      ],
      "declare": false,
      "start": 202,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 234
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 250,
              "end": 256
            },
            "start": 243,
            "end": 257
          }
        ],
        "start": 237,
        "end": 259
      },
      "expression": false,
      "start": 221,
      "end": 259
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 266
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 269,
            "end": 275
          },
          "definite": false,
          "start": 264,
          "end": 275
        }
      ],
      "declare": false,
      "start": 260,
      "end": 276
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 291
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
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
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
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 296,
            "end": 299
          },
          "start": 295,
          "end": 299
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "start": 307,
            "end": 316
          }
        ],
        "start": 301,
        "end": 318
      },
      "expression": false,
      "start": 278,
      "end": 318
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 325
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 332
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 333,
                "end": 334
              }
            ],
            "optional": false,
            "start": 328,
            "end": 335
          },
          "definite": false,
          "start": 323,
          "end": 335
        }
      ],
      "declare": false,
      "start": 319,
      "end": 336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 351
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 353
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 365,
              "end": 369
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 388,
                    "end": 389
                  },
                  "start": 381,
                  "end": 390
                }
              ],
              "start": 371,
              "end": 396
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 419,
                    "end": 420
                  },
                  "start": 412,
                  "end": 421
                }
              ],
              "start": 402,
              "end": 427
            },
            "start": 361,
            "end": 427
          }
        ],
        "start": 355,
        "end": 429
      },
      "expression": false,
      "start": 338,
      "end": 429
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 436
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 443
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 444,
                "end": 445
              }
            ],
            "optional": false,
            "start": 439,
            "end": 446
          },
          "definite": false,
          "start": 434,
          "end": 446
        }
      ],
      "declare": false,
      "start": 430,
      "end": 447
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 463,
          "end": 464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 476,
              "end": 483
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 496
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 515,
                      "end": 517
                    },
                    "start": 508,
                    "end": 518
                  }
                ],
                "start": 498,
                "end": 524
              },
              "start": 488,
              "end": 524
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 554,
                    "end": 556
                  },
                  "start": 547,
                  "end": 557
                }
              ],
              "start": 537,
              "end": 563
            },
            "start": 472,
            "end": 563
          }
        ],
        "start": 466,
        "end": 565
      },
      "expression": false,
      "start": 449,
      "end": 565
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 572
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 579
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 580,
                "end": 581
              }
            ],
            "optional": false,
            "start": 575,
            "end": 582
          },
          "definite": false,
          "start": 570,
          "end": 582
        }
      ],
      "declare": false,
      "start": 566,
      "end": 583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 598
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 599,
          "end": 600
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "prefix": true,
              "start": 615,
              "end": 623
            },
            "start": 608,
            "end": 624
          }
        ],
        "start": 602,
        "end": 626
      },
      "expression": false,
      "start": 585,
      "end": 626
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 633
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 640
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 641,
                "end": 642
              }
            ],
            "optional": false,
            "start": 636,
            "end": 643
          },
          "definite": false,
          "start": 631,
          "end": 643
        }
      ],
      "declare": false,
      "start": 627,
      "end": 644
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 675
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 679,
              "end": 685
            },
            "start": 677,
            "end": 685
          },
          "start": 676,
          "end": 685
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                    "start": 702,
                    "end": 703
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 706
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 702,
                  "end": 706
                }
              ],
              "start": 700,
              "end": 708
            },
            "start": 693,
            "end": 709
          }
        ],
        "start": 687,
        "end": 711
      },
      "expression": false,
      "start": 662,
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 725
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 726,
                "end": 727
              }
            ],
            "optional": false,
            "start": 721,
            "end": 728
          },
          "definite": false,
          "start": 716,
          "end": 728
        }
      ],
      "declare": false,
      "start": 712,
      "end": 729
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 742
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 752
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 754,
                "end": 760
              },
              "start": 752,
              "end": 760
            },
            "accessibility": null,
            "static": false,
            "start": 749,
            "end": 761
          }
        ],
        "start": 743,
        "end": 763
      },
      "declare": false,
      "start": 731,
      "end": 763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 773,
        "end": 777
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 781,
              "end": 787
            },
            "start": 779,
            "end": 787
          },
          "start": 778,
          "end": 787
        }
      ],
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 803
                      },
                      "typeArguments": null,
                      "start": 802,
                      "end": 803
                    },
                    "start": 800,
                    "end": 803
                  },
                  "start": 799,
                  "end": 803
                },
                "init": null,
                "definite": false,
                "start": 799,
                "end": 803
              }
            ],
            "declare": false,
            "start": 795,
            "end": 804
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 817
            },
            "start": 809,
            "end": 818
          }
        ],
        "start": 789,
        "end": 824
      },
      "expression": false,
      "start": 764,
      "end": 824
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 829,
            "end": 831
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 839,
                "end": 840
              }
            ],
            "optional": false,
            "start": 834,
            "end": 841
          },
          "definite": false,
          "start": 829,
          "end": 841
        }
      ],
      "declare": false,
      "start": 825,
      "end": 842
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 850,
        "end": 851
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 861
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 863,
                "end": 869
              },
              "start": 861,
              "end": 869
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 858,
            "end": 870
          }
        ],
        "start": 852,
        "end": 872
      },
      "abstract": false,
      "declare": false,
      "start": 844,
      "end": 872
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 887
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 891,
              "end": 897
            },
            "start": 889,
            "end": 897
          },
          "start": 888,
          "end": 897
        }
      ],
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 912,
                        "end": 913
                      },
                      "typeArguments": null,
                      "start": 912,
                      "end": 913
                    },
                    "start": 910,
                    "end": 913
                  },
                  "start": 909,
                  "end": 913
                },
                "init": null,
                "definite": false,
                "start": 909,
                "end": 913
              }
            ],
            "declare": false,
            "start": 905,
            "end": 914
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 927
            },
            "start": 919,
            "end": 928
          }
        ],
        "start": 899,
        "end": 930
      },
      "expression": false,
      "start": 873,
      "end": 930
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 935,
            "end": 938
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 946
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 947,
                "end": 948
              }
            ],
            "optional": false,
            "start": 941,
            "end": 949
          },
          "definite": false,
          "start": 935,
          "end": 949
        }
      ],
      "declare": false,
      "start": 931,
      "end": 950
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 963
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 981,
                    "end": 982
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 985,
                    "end": 986
                  },
                  "definite": false,
                  "start": 981,
                  "end": 986
                }
              ],
              "declare": false,
              "start": 977,
              "end": 987
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 970,
            "end": 987
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1006
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1009,
                      "end": 1012
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1014,
                        "end": 1020
                      },
                      "start": 1012,
                      "end": 1020
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 1009,
                    "end": 1020
                  }
                ],
                "start": 1007,
                "end": 1022
              },
              "abstract": false,
              "declare": false,
              "start": 999,
              "end": 1022
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 992,
            "end": 1022
          }
        ],
        "start": 964,
        "end": 1024
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 952,
      "end": 1024
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1034,
        "end": 1039
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1056
            },
            "start": 1048,
            "end": 1057
          }
        ],
        "start": 1042,
        "end": 1059
      },
      "expression": false,
      "start": 1025,
      "end": 1059
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1064,
            "end": 1067
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1075
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1070,
            "end": 1077
          },
          "definite": false,
          "start": 1064,
          "end": 1077
        }
      ],
      "declare": false,
      "start": 1060,
      "end": 1078
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1113,
        "end": 1115
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
              "start": 1122,
              "end": 1123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "static": false,
            "start": 1122,
            "end": 1132
          }
        ],
        "start": 1116,
        "end": 1134
      },
      "declare": false,
      "start": 1103,
      "end": 1134
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1147
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1157,
                "end": 1163
              },
              "start": 1155,
              "end": 1163
            },
            "accessibility": null,
            "static": false,
            "start": 1154,
            "end": 1164
          }
        ],
        "start": 1148,
        "end": 1166
      },
      "declare": false,
      "start": 1135,
      "end": 1166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1181
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1200
                      },
                      "typeArguments": null,
                      "start": 1198,
                      "end": 1200
                    },
                    "start": 1196,
                    "end": 1200
                  },
                  "start": 1194,
                  "end": 1200
                },
                "init": null,
                "definite": false,
                "start": 1194,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1190,
            "end": 1201
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1213,
              "end": 1215
            },
            "start": 1206,
            "end": 1216
          }
        ],
        "start": 1184,
        "end": 1218
      },
      "expression": false,
      "start": 1167,
      "end": 1218
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1234
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1229,
            "end": 1236
          },
          "definite": false,
          "start": 1223,
          "end": 1236
        }
      ],
      "declare": false,
      "start": 1219,
      "end": 1237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1248,
        "end": 1250
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1262,
              "end": 1263
            },
            "start": 1255,
            "end": 1264
          }
        ],
        "start": 1253,
        "end": 1266
      },
      "expression": false,
      "start": 1239,
      "end": 1266
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1279
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1294
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1297,
                    "end": 1298
                  },
                  "definite": false,
                  "start": 1293,
                  "end": 1298
                }
              ],
              "declare": false,
              "start": 1289,
              "end": 1299
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1282,
            "end": 1299
          }
        ],
        "start": 1280,
        "end": 1301
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1267,
      "end": 1301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1316
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1332,
              "end": 1334
            },
            "start": 1325,
            "end": 1335
          }
        ],
        "start": 1319,
        "end": 1337
      },
      "expression": false,
      "start": 1302,
      "end": 1337
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
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1342,
            "end": 1345
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1348,
              "end": 1353
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1348,
            "end": 1355
          },
          "definite": false,
          "start": 1342,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1338,
      "end": 1356
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1366
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1378,
                "end": 1384
              },
              "start": 1376,
              "end": 1384
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1373,
            "end": 1385
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1401
            },
            "value": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1403
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1405,
                "end": 1408
              },
              "expression": false,
              "start": 1401,
              "end": 1408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1390,
            "end": 1408
          }
        ],
        "start": 1367,
        "end": 1410
      },
      "abstract": false,
      "declare": false,
      "start": 1358,
      "end": 1410
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1423
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 1441,
                    "end": 1442
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1445,
                    "end": 1446
                  },
                  "definite": false,
                  "start": 1441,
                  "end": 1446
                }
              ],
              "declare": false,
              "start": 1437,
              "end": 1447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1430,
            "end": 1447
          }
        ],
        "start": 1424,
        "end": 1449
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1411,
      "end": 1449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1464
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1480,
              "end": 1482
            },
            "start": 1473,
            "end": 1483
          }
        ],
        "start": 1467,
        "end": 1485
      },
      "expression": false,
      "start": 1450,
      "end": 1485
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
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1490,
            "end": 1493
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1496,
              "end": 1501
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1496,
            "end": 1503
          },
          "definite": false,
          "start": 1490,
          "end": 1503
        }
      ],
      "declare": false,
      "start": 1486,
      "end": 1504
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1511,
        "end": 1513
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1516,
              "end": 1517
            },
            "initializer": null,
            "computed": false,
            "start": 1516,
            "end": 1517
          }
        ],
        "start": 1514,
        "end": 1519
      },
      "const": false,
      "declare": false,
      "start": 1506,
      "end": 1519
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1530,
        "end": 1532
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 1546,
                    "end": 1547
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1550,
                    "end": 1551
                  },
                  "definite": false,
                  "start": 1546,
                  "end": 1551
                }
              ],
              "declare": false,
              "start": 1542,
              "end": 1552
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1535,
            "end": 1552
          }
        ],
        "start": 1533,
        "end": 1554
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1520,
      "end": 1554
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1569
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1587
            },
            "start": 1578,
            "end": 1588
          }
        ],
        "start": 1572,
        "end": 1590
      },
      "expression": false,
      "start": 1555,
      "end": 1590
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1598
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1601,
              "end": 1606
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1601,
            "end": 1608
          },
          "definite": false,
          "start": 1595,
          "end": 1608
        }
      ],
      "declare": false,
      "start": 1591,
      "end": 1609
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 111,
  "end": 1609
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 133,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 206,
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
    "value": "foo2",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 221,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 243,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 258,
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
    "value": "r3",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 278,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 307,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 323,
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
    "value": "foo4",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 338,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 412,
    "end": 418
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 449,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 529,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 580,
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
    "value": "foo7",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 608,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 615,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 627,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 662,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 693,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 731,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 764,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
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
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 809,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 844,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 882,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 905,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "return",
    "start": 919,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 941,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 952,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 970,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 983,
    "end": 984
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 992,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1025,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1070,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1103,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1135,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1167,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1206,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1213,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1229,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1239,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1248,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1267,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1302,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1311,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1332,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1338,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 1342,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1358,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1373,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1378,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1390,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1411,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1421,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1430,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1450,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1459,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1480,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1496,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1506,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1511,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1520,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1530,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1555,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1564,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1578,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1585,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 1595,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1601,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  }
]
```
