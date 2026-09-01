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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 21
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 30,
              "end": 32
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 32
          }
        ],
        "start": 10,
        "end": 33
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      },
                      "start": 50,
                      "end": 58
                    },
                    "start": 48,
                    "end": 58
                  },
                  "start": 46,
                  "end": 58
                },
                "init": null,
                "definite": false,
                "start": 46,
                "end": 58
              }
            ],
            "declare": false,
            "start": 42,
            "end": 59
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 88,
                            "end": 94
                          },
                          "start": 88,
                          "end": 96
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 99,
                          "end": 103
                        }
                      ],
                      "start": 88,
                      "end": 103
                    },
                    "start": 86,
                    "end": 103
                  },
                  "start": 84,
                  "end": 103
                },
                "init": null,
                "definite": false,
                "start": 84,
                "end": 103
              }
            ],
            "declare": false,
            "start": 80,
            "end": 104
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          },
                          "start": 133,
                          "end": 141
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 144,
                          "end": 153
                        }
                      ],
                      "start": 133,
                      "end": 153
                    },
                    "start": 131,
                    "end": 153
                  },
                  "start": 129,
                  "end": 153
                },
                "init": null,
                "definite": false,
                "start": 129,
                "end": 153
              }
            ],
            "declare": false,
            "start": 125,
            "end": 154
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 187,
                            "end": 193
                          },
                          "start": 187,
                          "end": 195
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 198,
                          "end": 207
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 210,
                          "end": 214
                        }
                      ],
                      "start": 187,
                      "end": 214
                    },
                    "start": 185,
                    "end": 214
                  },
                  "start": 183,
                  "end": 214
                },
                "init": null,
                "definite": false,
                "start": 183,
                "end": 214
              }
            ],
            "declare": false,
            "start": 179,
            "end": 215
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 249,
                        "end": 255
                      },
                      "start": 249,
                      "end": 257
                    },
                    "start": 247,
                    "end": 257
                  },
                  "start": 244,
                  "end": 257
                },
                "init": null,
                "definite": true,
                "start": 244,
                "end": 257
              }
            ],
            "declare": false,
            "start": 240,
            "end": 258
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 291,
                      "end": 294
                    },
                    "start": 289,
                    "end": 294
                  },
                  "start": 287,
                  "end": 294
                },
                "init": null,
                "definite": false,
                "start": 287,
                "end": 294
              }
            ],
            "declare": false,
            "start": 283,
            "end": 295
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
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 328,
                      "end": 335
                    },
                    "start": 326,
                    "end": 335
                  },
                  "start": 324,
                  "end": 335
                },
                "init": null,
                "definite": false,
                "start": 324,
                "end": 335
              }
            ],
            "declare": false,
            "start": 320,
            "end": 336
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
                  "name": "x8",
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
                        "start": 369,
                        "end": 370
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 370
                    },
                    "start": 367,
                    "end": 370
                  },
                  "start": 365,
                  "end": 370
                },
                "init": null,
                "definite": false,
                "start": 365,
                "end": 370
              }
            ],
            "declare": false,
            "start": 361,
            "end": 371
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
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 407
                      },
                      "typeArguments": null,
                      "start": 400,
                      "end": 407
                    },
                    "start": 398,
                    "end": 407
                  },
                  "start": 396,
                  "end": 407
                },
                "init": null,
                "definite": false,
                "start": 396,
                "end": 407
              }
            ],
            "declare": false,
            "start": 392,
            "end": 408
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
                  "name": "x10",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 445
                      },
                      "typeArguments": null,
                      "start": 438,
                      "end": 445
                    },
                    "start": 436,
                    "end": 445
                  },
                  "start": 433,
                  "end": 445
                },
                "init": null,
                "definite": false,
                "start": 433,
                "end": 445
              }
            ],
            "declare": false,
            "start": 429,
            "end": 446
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
                  "name": "x11",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 487
                      },
                      "typeArguments": null,
                      "start": 480,
                      "end": 487
                    },
                    "start": 478,
                    "end": 487
                  },
                  "start": 475,
                  "end": 487
                },
                "init": null,
                "definite": false,
                "start": 475,
                "end": 487
              }
            ],
            "declare": false,
            "start": 471,
            "end": 488
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 526
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 546
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 547,
                        "end": 550
                      },
                      "optional": false,
                      "computed": false,
                      "start": 539,
                      "end": 550
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 553
                      }
                    ],
                    "optional": false,
                    "start": 539,
                    "end": 554
                  },
                  "directive": null,
                  "start": 539,
                  "end": 555
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 564,
                        "end": 571
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 575
                      },
                      "optional": false,
                      "computed": false,
                      "start": 564,
                      "end": 575
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 578
                      }
                    ],
                    "optional": false,
                    "start": 564,
                    "end": 579
                  },
                  "directive": null,
                  "start": 564,
                  "end": 580
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 596
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 600
                      },
                      "optional": false,
                      "computed": false,
                      "start": 589,
                      "end": 600
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 603
                      }
                    ],
                    "optional": false,
                    "start": 589,
                    "end": 604
                  },
                  "directive": null,
                  "start": 589,
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 621
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 622,
                        "end": 625
                      },
                      "optional": false,
                      "computed": false,
                      "start": 614,
                      "end": 625
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 626,
                        "end": 628
                      }
                    ],
                    "optional": false,
                    "start": 614,
                    "end": 629
                  },
                  "directive": null,
                  "start": 614,
                  "end": 630
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 646
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 647,
                        "end": 650
                      },
                      "optional": false,
                      "computed": false,
                      "start": 639,
                      "end": 650
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 653
                      }
                    ],
                    "optional": false,
                    "start": 639,
                    "end": 654
                  },
                  "directive": null,
                  "start": 639,
                  "end": 655
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 671
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 675
                      },
                      "optional": false,
                      "computed": false,
                      "start": 664,
                      "end": 675
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 678
                      }
                    ],
                    "optional": false,
                    "start": 664,
                    "end": 679
                  },
                  "directive": null,
                  "start": 664,
                  "end": 680
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 689,
                        "end": 696
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 700
                      },
                      "optional": false,
                      "computed": false,
                      "start": 689,
                      "end": 700
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 703
                      }
                    ],
                    "optional": false,
                    "start": 689,
                    "end": 704
                  },
                  "directive": null,
                  "start": 689,
                  "end": 705
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 721
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 722,
                        "end": 725
                      },
                      "optional": false,
                      "computed": false,
                      "start": 714,
                      "end": 725
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 726,
                        "end": 728
                      }
                    ],
                    "optional": false,
                    "start": 714,
                    "end": 729
                  },
                  "directive": null,
                  "start": 714,
                  "end": 730
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 746
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 747,
                        "end": 750
                      },
                      "optional": false,
                      "computed": false,
                      "start": 739,
                      "end": 750
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 751,
                        "end": 753
                      }
                    ],
                    "optional": false,
                    "start": 739,
                    "end": 754
                  },
                  "directive": null,
                  "start": 739,
                  "end": 755
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 771
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 775
                      },
                      "optional": false,
                      "computed": false,
                      "start": 764,
                      "end": 775
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 776,
                        "end": 779
                      }
                    ],
                    "optional": false,
                    "start": 764,
                    "end": 780
                  },
                  "directive": null,
                  "start": 764,
                  "end": 781
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 797
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 801
                      },
                      "optional": false,
                      "computed": false,
                      "start": 790,
                      "end": 801
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 805
                      }
                    ],
                    "optional": false,
                    "start": 790,
                    "end": 806
                  },
                  "directive": null,
                  "start": 790,
                  "end": 807
                }
              ],
              "start": 529,
              "end": 813
            },
            "expression": false,
            "start": 514,
            "end": 813
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 830
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 846
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 849,
                        "end": 851
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 855,
                        "end": 858
                      },
                      "start": 849,
                      "end": 858
                    },
                    "start": 843,
                    "end": 858
                  },
                  "directive": null,
                  "start": 843,
                  "end": 859
                }
              ],
              "start": 833,
              "end": 865
            },
            "expression": false,
            "start": 818,
            "end": 865
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 873
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 870,
              "end": 875
            },
            "directive": null,
            "start": 870,
            "end": 876
          }
        ],
        "start": 36,
        "end": 878
      },
      "expression": false,
      "start": 0,
      "end": 878
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 891
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
              "start": 892,
              "end": 893
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 892,
            "end": 893
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 902
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 911,
              "end": 913
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 895,
            "end": 913
          }
        ],
        "start": 891,
        "end": 914
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 931,
                        "end": 937
                      },
                      "start": 931,
                      "end": 939
                    },
                    "start": 929,
                    "end": 939
                  },
                  "start": 927,
                  "end": 939
                },
                "init": null,
                "definite": false,
                "start": 927,
                "end": 939
              }
            ],
            "declare": false,
            "start": 923,
            "end": 940
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 969,
                            "end": 975
                          },
                          "start": 969,
                          "end": 977
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 980,
                          "end": 984
                        }
                      ],
                      "start": 969,
                      "end": 984
                    },
                    "start": 967,
                    "end": 984
                  },
                  "start": 965,
                  "end": 984
                },
                "init": null,
                "definite": false,
                "start": 965,
                "end": 984
              }
            ],
            "declare": false,
            "start": 961,
            "end": 985
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 1014,
                            "end": 1020
                          },
                          "start": 1014,
                          "end": 1022
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1025,
                          "end": 1034
                        }
                      ],
                      "start": 1014,
                      "end": 1034
                    },
                    "start": 1012,
                    "end": 1034
                  },
                  "start": 1010,
                  "end": 1034
                },
                "init": null,
                "definite": false,
                "start": 1010,
                "end": 1034
              }
            ],
            "declare": false,
            "start": 1006,
            "end": 1035
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 1068,
                            "end": 1074
                          },
                          "start": 1068,
                          "end": 1076
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1079,
                          "end": 1088
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 1091,
                          "end": 1095
                        }
                      ],
                      "start": 1068,
                      "end": 1095
                    },
                    "start": 1066,
                    "end": 1095
                  },
                  "start": 1064,
                  "end": 1095
                },
                "init": null,
                "definite": false,
                "start": 1064,
                "end": 1095
              }
            ],
            "declare": false,
            "start": 1060,
            "end": 1096
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      },
                      "start": 1130,
                      "end": 1138
                    },
                    "start": 1128,
                    "end": 1138
                  },
                  "start": 1125,
                  "end": 1138
                },
                "init": null,
                "definite": true,
                "start": 1125,
                "end": 1138
              }
            ],
            "declare": false,
            "start": 1121,
            "end": 1139
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1172,
                      "end": 1175
                    },
                    "start": 1170,
                    "end": 1175
                  },
                  "start": 1168,
                  "end": 1175
                },
                "init": null,
                "definite": false,
                "start": 1168,
                "end": 1175
              }
            ],
            "declare": false,
            "start": 1164,
            "end": 1176
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
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1209,
                      "end": 1216
                    },
                    "start": 1207,
                    "end": 1216
                  },
                  "start": 1205,
                  "end": 1216
                },
                "init": null,
                "definite": false,
                "start": 1205,
                "end": 1216
              }
            ],
            "declare": false,
            "start": 1201,
            "end": 1217
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
                  "name": "x8",
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
                        "start": 1250,
                        "end": 1251
                      },
                      "typeArguments": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "start": 1248,
                    "end": 1251
                  },
                  "start": 1246,
                  "end": 1251
                },
                "init": null,
                "definite": false,
                "start": 1246,
                "end": 1251
              }
            ],
            "declare": false,
            "start": 1242,
            "end": 1252
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
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1281,
                        "end": 1288
                      },
                      "typeArguments": null,
                      "start": 1281,
                      "end": 1288
                    },
                    "start": 1279,
                    "end": 1288
                  },
                  "start": 1277,
                  "end": 1288
                },
                "init": null,
                "definite": false,
                "start": 1277,
                "end": 1288
              }
            ],
            "declare": false,
            "start": 1273,
            "end": 1289
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1318
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1319,
                  "end": 1322
                },
                "optional": false,
                "computed": false,
                "start": 1311,
                "end": 1322
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1325
                }
              ],
              "optional": false,
              "start": 1311,
              "end": 1326
            },
            "directive": null,
            "start": 1311,
            "end": 1327
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1339
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1343
                },
                "optional": false,
                "computed": false,
                "start": 1332,
                "end": 1343
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1346
                }
              ],
              "optional": false,
              "start": 1332,
              "end": 1347
            },
            "directive": null,
            "start": 1332,
            "end": 1348
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1353,
                  "end": 1360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1364
                },
                "optional": false,
                "computed": false,
                "start": 1353,
                "end": 1364
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1365,
                  "end": 1367
                }
              ],
              "optional": false,
              "start": 1353,
              "end": 1368
            },
            "directive": null,
            "start": 1353,
            "end": 1369
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1374,
                  "end": 1381
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1385
                },
                "optional": false,
                "computed": false,
                "start": 1374,
                "end": 1385
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1386,
                  "end": 1388
                }
              ],
              "optional": false,
              "start": 1374,
              "end": 1389
            },
            "directive": null,
            "start": 1374,
            "end": 1390
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1395,
                  "end": 1402
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1403,
                  "end": 1406
                },
                "optional": false,
                "computed": false,
                "start": 1395,
                "end": 1406
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1409
                }
              ],
              "optional": false,
              "start": 1395,
              "end": 1410
            },
            "directive": null,
            "start": 1395,
            "end": 1411
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1416,
                  "end": 1423
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1424,
                  "end": 1427
                },
                "optional": false,
                "computed": false,
                "start": 1416,
                "end": 1427
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1428,
                  "end": 1430
                }
              ],
              "optional": false,
              "start": 1416,
              "end": 1431
            },
            "directive": null,
            "start": 1416,
            "end": 1432
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1444
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1448
                },
                "optional": false,
                "computed": false,
                "start": 1437,
                "end": 1448
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1451
                }
              ],
              "optional": false,
              "start": 1437,
              "end": 1452
            },
            "directive": null,
            "start": 1437,
            "end": 1453
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1469
                },
                "optional": false,
                "computed": false,
                "start": 1458,
                "end": 1469
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1470,
                  "end": 1472
                }
              ],
              "optional": false,
              "start": 1458,
              "end": 1473
            },
            "directive": null,
            "start": 1458,
            "end": 1474
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1486
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1487,
                  "end": 1490
                },
                "optional": false,
                "computed": false,
                "start": 1479,
                "end": 1490
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1493
                }
              ],
              "optional": false,
              "start": 1479,
              "end": 1494
            },
            "directive": null,
            "start": 1479,
            "end": 1495
          }
        ],
        "start": 917,
        "end": 1497
      },
      "expression": false,
      "start": 880,
      "end": 1497
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1510
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
            "kind": "let",
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
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1526,
                        "end": 1532
                      },
                      "start": 1526,
                      "end": 1534
                    },
                    "start": 1524,
                    "end": 1534
                  },
                  "start": 1523,
                  "end": 1534
                },
                "init": null,
                "definite": false,
                "start": 1523,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1519,
            "end": 1535
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1571
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1584,
                        "end": 1585
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1586,
                        "end": 1594
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1584,
                      "end": 1594
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1584,
                    "end": 1596
                  },
                  "directive": null,
                  "start": 1584,
                  "end": 1597
                }
              ],
              "start": 1574,
              "end": 1603
            },
            "expression": false,
            "start": 1559,
            "end": 1603
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1608,
                "end": 1611
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1608,
              "end": 1613
            },
            "directive": null,
            "start": 1608,
            "end": 1614
          }
        ],
        "start": 1513,
        "end": 1616
      },
      "expression": false,
      "start": 1499,
      "end": 1616
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1627,
        "end": 1629
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
            "kind": "let",
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
                      "start": 1645,
                      "end": 1651
                    },
                    "start": 1643,
                    "end": 1651
                  },
                  "start": 1642,
                  "end": 1651
                },
                "init": null,
                "definite": false,
                "start": 1642,
                "end": 1651
              }
            ],
            "declare": false,
            "start": 1638,
            "end": 1652
          },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1691,
                    "end": 1694
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1718,
                                "end": 1719
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1720,
                                "end": 1728
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1718,
                              "end": 1728
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1718,
                            "end": 1730
                          },
                          "start": 1711,
                          "end": 1731
                        }
                      ],
                      "start": 1697,
                      "end": 1741
                    },
                    "expression": false,
                    "start": 1694,
                    "end": 1741
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1691,
                  "end": 1741
                }
              ],
              "start": 1681,
              "end": 1747
            },
            "start": 1674,
            "end": 1748
          }
        ],
        "start": 1632,
        "end": 1750
      },
      "expression": false,
      "start": 1618,
      "end": 1750
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1767,
                "end": 1773
              },
              "start": 1765,
              "end": 1773
            },
            "start": 1764,
            "end": 1773
          },
          "init": null,
          "definite": false,
          "start": 1764,
          "end": 1773
        }
      ],
      "declare": true,
      "start": 1752,
      "end": 1774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1807
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1817
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1818,
                  "end": 1826
                },
                "optional": false,
                "computed": false,
                "start": 1816,
                "end": 1826
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1816,
              "end": 1828
            },
            "directive": null,
            "start": 1816,
            "end": 1829
          }
        ],
        "start": 1810,
        "end": 1831
      },
      "expression": false,
      "start": 1796,
      "end": 1831
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1847,
        "end": 1849
      },
      "exportKind": "value",
      "start": 1832,
      "end": 1850
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1861,
        "end": 1863
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1881,
                      "end": 1887
                    },
                    "start": 1879,
                    "end": 1887
                  },
                  "start": 1876,
                  "end": 1887
                },
                "init": null,
                "definite": false,
                "start": 1876,
                "end": 1887
              }
            ],
            "declare": false,
            "start": 1872,
            "end": 1888
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1924
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1928,
              "end": 1930
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1942,
                        "end": 1949
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1950,
                        "end": 1953
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1942,
                      "end": 1953
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1954,
                        "end": 1957
                      }
                    ],
                    "optional": false,
                    "start": 1942,
                    "end": 1958
                  },
                  "directive": null,
                  "start": 1942,
                  "end": 1959
                }
              ],
              "start": 1932,
              "end": 1965
            },
            "start": 1916,
            "end": 1965
          }
        ],
        "start": 1866,
        "end": 1967
      },
      "expression": false,
      "start": 1852,
      "end": 1967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1978,
        "end": 1980
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1998,
                      "end": 2004
                    },
                    "start": 1996,
                    "end": 2004
                  },
                  "start": 1993,
                  "end": 2004
                },
                "init": null,
                "definite": false,
                "start": 1993,
                "end": 2004
              }
            ],
            "declare": false,
            "start": 1989,
            "end": 2005
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2038,
              "end": 2041
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2045,
              "end": 2047
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2059,
                        "end": 2066
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2067,
                        "end": 2070
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2059,
                      "end": 2070
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2071,
                        "end": 2074
                      }
                    ],
                    "optional": false,
                    "start": 2059,
                    "end": 2075
                  },
                  "directive": null,
                  "start": 2059,
                  "end": 2076
                }
              ],
              "start": 2049,
              "end": 2082
            },
            "start": 2033,
            "end": 2082
          }
        ],
        "start": 1983,
        "end": 2084
      },
      "expression": false,
      "start": 1969,
      "end": 2084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2095,
        "end": 2097
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2117
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2134,
                        "end": 2135
                      },
                      "init": null,
                      "definite": false,
                      "start": 2134,
                      "end": 2135
                    }
                  ],
                  "declare": false,
                  "start": 2130,
                  "end": 2136
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
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2155,
                            "end": 2157
                          },
                          "start": 2153,
                          "end": 2157
                        },
                        "start": 2149,
                        "end": 2157
                      },
                      "init": null,
                      "definite": false,
                      "start": 2149,
                      "end": 2157
                    }
                  ],
                  "declare": false,
                  "start": 2145,
                  "end": 2158
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2189,
                          "end": 2190
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2195,
                            "end": 2199
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 2192,
                          "end": 2199
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2188,
                      "end": 2200
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2203,
                        "end": 2206
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2203,
                      "end": 2208
                    },
                    "start": 2188,
                    "end": 2208
                  },
                  "directive": null,
                  "start": 2188,
                  "end": 2209
                }
              ],
              "start": 2120,
              "end": 2215
            },
            "expression": false,
            "start": 2106,
            "end": 2215
          }
        ],
        "start": 2100,
        "end": 2217
      },
      "expression": false,
      "start": 2086,
      "end": 2217
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2235,
        "end": 2238
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 2243,
              "end": 2249
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 2254,
                  "end": 2260
                },
                "start": 2254,
                "end": 2262
              },
              "start": 2251,
              "end": 2262
            }
          ],
          "start": 2242,
          "end": 2263
        },
        "start": 2240,
        "end": 2263
      },
      "body": null,
      "expression": false,
      "start": 2218,
      "end": 2264
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2275,
        "end": 2277
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
                      "type": "TSNumberKeyword",
                      "start": 2297,
                      "end": 2303
                    },
                    "start": 2295,
                    "end": 2303
                  },
                  "start": 2294,
                  "end": 2303
                },
                "init": null,
                "definite": false,
                "start": 2294,
                "end": 2303
              }
            ],
            "declare": false,
            "start": 2288,
            "end": 2304
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2348,
              "end": 2351
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2370,
                        "end": 2371
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2374,
                        "end": 2375
                      },
                      "definite": false,
                      "start": 2370,
                      "end": 2375
                    }
                  ],
                  "declare": false,
                  "start": 2366,
                  "end": 2376
                }
              ],
              "start": 2354,
              "end": 2384
            },
            "expression": false,
            "start": 2339,
            "end": 2384
          }
        ],
        "start": 2280,
        "end": 2388
      },
      "expression": false,
      "start": 2266,
      "end": 2388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rw",
        "optional": false,
        "typeAnnotation": null,
        "start": 2402,
        "end": 2404
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
            "kind": "let",
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
                      "type": "TSNumberKeyword",
                      "start": 2420,
                      "end": 2426
                    },
                    "start": 2418,
                    "end": 2426
                  },
                  "start": 2417,
                  "end": 2426
                },
                "init": null,
                "definite": false,
                "start": 2417,
                "end": 2426
              }
            ],
            "declare": false,
            "start": 2413,
            "end": 2427
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inside",
              "optional": false,
              "typeAnnotation": null,
              "start": 2458,
              "end": 2464
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2477,
                      "end": 2478
                    },
                    "start": 2477,
                    "end": 2480
                  },
                  "directive": null,
                  "start": 2477,
                  "end": 2481
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2490,
                        "end": 2497
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2498,
                        "end": 2501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2490,
                      "end": 2501
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2502,
                        "end": 2503
                      }
                    ],
                    "optional": false,
                    "start": 2490,
                    "end": 2504
                  },
                  "directive": null,
                  "start": 2490,
                  "end": 2505
                }
              ],
              "start": 2467,
              "end": 2518
            },
            "expression": false,
            "start": 2449,
            "end": 2518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "inside",
                "optional": false,
                "typeAnnotation": null,
                "start": 2523,
                "end": 2529
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2523,
              "end": 2531
            },
            "directive": null,
            "start": 2523,
            "end": 2532
          }
        ],
        "start": 2407,
        "end": 2534
      },
      "expression": false,
      "start": 2393,
      "end": 2534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rw",
          "optional": false,
          "typeAnnotation": null,
          "start": 2535,
          "end": 2537
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2535,
        "end": 2539
      },
      "directive": null,
      "start": 2535,
      "end": 2540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createBinder",
        "optional": false,
        "typeAnnotation": null,
        "start": 2551,
        "end": 2563
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2582,
                      "end": 2588
                    },
                    "start": 2580,
                    "end": 2588
                  },
                  "start": 2576,
                  "end": 2588
                },
                "init": null,
                "definite": false,
                "start": 2576,
                "end": 2588
              }
            ],
            "declare": false,
            "start": 2572,
            "end": 2589
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bindSourceFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 2626,
              "end": 2640
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2644,
                    "end": 2650
                  },
                  "start": 2642,
                  "end": 2650
                },
                "start": 2641,
                "end": 2650
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2662,
                      "end": 2666
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2669,
                      "end": 2670
                    },
                    "start": 2662,
                    "end": 2670
                  },
                  "directive": null,
                  "start": 2662,
                  "end": 2671
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
                        "name": "file",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2681,
                        "end": 2685
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2686,
                        "end": 2694
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2681,
                      "end": 2694
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2681,
                    "end": 2696
                  },
                  "directive": null,
                  "start": 2681,
                  "end": 2697
                }
              ],
              "start": 2652,
              "end": 2703
            },
            "expression": false,
            "start": 2617,
            "end": 2703
          }
        ],
        "start": 2566,
        "end": 2705
      },
      "expression": false,
      "start": 2542,
      "end": 2705
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "transformClassFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 2716,
        "end": 2736
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
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassPropertySubstitutionFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 2750,
              "end": 2780
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassAliases",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2791,
                    "end": 2803
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2806,
                      "end": 2807
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2811,
                      "end": 2812
                    },
                    "start": 2806,
                    "end": 2812
                  },
                  "computed": false,
                  "start": 2791,
                  "end": 2812
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassStaticThisOrSuperReference",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2822,
                    "end": 2853
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2856,
                      "end": 2857
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2861,
                      "end": 2862
                    },
                    "start": 2856,
                    "end": 2862
                  },
                  "computed": false,
                  "start": 2822,
                  "end": 2862
                }
              ],
              "start": 2781,
              "end": 2869
            },
            "const": false,
            "declare": false,
            "start": 2745,
            "end": 2869
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
                  "name": "enabledSubstitutions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassPropertySubstitutionFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2901,
                        "end": 2931
                      },
                      "typeArguments": null,
                      "start": 2901,
                      "end": 2931
                    },
                    "start": 2899,
                    "end": 2931
                  },
                  "start": 2879,
                  "end": 2931
                },
                "init": null,
                "definite": false,
                "start": 2879,
                "end": 2931
              }
            ],
            "declare": false,
            "start": 2875,
            "end": 2932
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableSubstitutionForClassAliases",
              "optional": false,
              "typeAnnotation": null,
              "start": 2965,
              "end": 2998
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "|=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "enabledSubstitutions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3011,
                      "end": 3031
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassPropertySubstitutionFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3035,
                        "end": 3065
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassAliases",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3066,
                        "end": 3078
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3035,
                      "end": 3078
                    },
                    "start": 3011,
                    "end": 3078
                  },
                  "directive": null,
                  "start": 3011,
                  "end": 3079
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
                        "name": "enabledSubstitutions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3089,
                        "end": 3109
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3110,
                        "end": 3118
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3089,
                      "end": 3118
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3089,
                    "end": 3120
                  },
                  "directive": null,
                  "start": 3089,
                  "end": 3121
                }
              ],
              "start": 3001,
              "end": 3127
            },
            "expression": false,
            "start": 2956,
            "end": 3127
          }
        ],
        "start": 2739,
        "end": 3129
      },
      "expression": false,
      "start": 2707,
      "end": 3129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "NonNull",
    "start": 14,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 80,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "Null",
    "value": "null",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 129,
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
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 144,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Null",
    "value": "null",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 287,
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
    "value": "any",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 328,
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
    "value": "let",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "NonNull",
    "start": 400,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "NonNull",
    "start": 438,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "NonNull",
    "start": 480,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 514,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 539,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 589,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 601,
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
    "value": "console",
    "start": 614,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "console",
    "start": 639,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 672,
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
    "value": "x6",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 689,
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
    "value": "log",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 714,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 739,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 764,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 776,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 790,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 802,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 818,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 843,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 852,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "function",
    "start": 880,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 889,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "NonNull",
    "start": 895,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 903,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 923,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 927,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 931,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 961,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 965,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 978,
    "end": 979
  },
  {
    "type": "Null",
    "value": "null",
    "start": 980,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1010,
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
    "value": "number",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1025,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1079,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 1168,
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
    "value": "any",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1209,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "NonNull",
    "start": 1281,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1311,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1332,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1344,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1353,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1361,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1374,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1395,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 1407,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1416,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1437,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1445,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 1449,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1458,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1466,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 1470,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1479,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 1491,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1499,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1519,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1559,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1568,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1586,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1608,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1618,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1627,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1645,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1691,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1711,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1720,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1752,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1760,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1767,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1796,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1805,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1832,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1839,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1852,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1861,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1876,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1881,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1921,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1925,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1942,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1954,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1969,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1978,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1989,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1998,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2033,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2038,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2059,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2067,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2071,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2086,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 2095,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2106,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2130,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2145,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2149,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2192,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2195,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2203,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2218,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2226,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2235,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2251,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2254,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2266,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 2275,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2288,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2297,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2339,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2348,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2366,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2393,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "rw",
    "start": 2402,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2413,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2420,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2449,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "inside",
    "start": 2458,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2478,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2490,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2498,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "inside",
    "start": 2523,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "rw",
    "start": 2535,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2542,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "createBinder",
    "start": 2551,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2572,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 2576,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2582,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2617,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "bindSourceFile",
    "start": 2626,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2644,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 2662,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 2681,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2686,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2707,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "transformClassFields",
    "start": 2716,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2745,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "ClassPropertySubstitutionFlags",
    "start": 2750,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "ClassAliases",
    "start": 2791,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2808,
    "end": 2810
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "ClassStaticThisOrSuperReference",
    "start": 2822,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2858,
    "end": 2860
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2875,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "enabledSubstitutions",
    "start": 2879,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "ClassPropertySubstitutionFlags",
    "start": 2901,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2956,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "enableSubstitutionForClassAliases",
    "start": 2965,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "enabledSubstitutions",
    "start": 3011,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 3032,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "ClassPropertySubstitutionFlags",
    "start": 3035,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "ClassAliases",
    "start": 3066,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "enabledSubstitutions",
    "start": 3089,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3110,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3128,
    "end": 3129
  }
]
```
