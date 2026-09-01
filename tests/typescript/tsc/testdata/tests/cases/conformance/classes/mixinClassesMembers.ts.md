__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 16
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 23,
            "end": 40
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 45,
            "end": 65
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 70,
            "end": 88
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
              "start": 93,
              "end": 104
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 108,
                      "end": 114
                    },
                    "start": 106,
                    "end": 114
                  },
                  "start": 105,
                  "end": 114
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 104,
              "end": 116
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 93,
            "end": 116
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
              "start": 121,
              "end": 132
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 136,
                      "end": 142
                    },
                    "start": 134,
                    "end": 142
                  },
                  "start": 133,
                  "end": 142
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 132,
              "end": 144
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 121,
            "end": 144
          }
        ],
        "start": 17,
        "end": 146
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 164
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 182
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                    "start": 186,
                    "end": 190
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 192,
                        "end": 195
                      },
                      "start": 192,
                      "end": 197
                    },
                    "start": 190,
                    "end": 197
                  },
                  "value": null,
                  "start": 183,
                  "end": 197
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 182,
              "end": 199
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 171,
            "end": 199
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
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
            "start": 204,
            "end": 214
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 219,
            "end": 236
          }
        ],
        "start": 165,
        "end": 238
      },
      "abstract": false,
      "declare": true,
      "start": 148,
      "end": 238
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 256
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 274
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                    "start": 278,
                    "end": 282
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 284,
                        "end": 287
                      },
                      "start": 284,
                      "end": 289
                    },
                    "start": 282,
                    "end": 289
                  },
                  "value": null,
                  "start": 275,
                  "end": 289
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 274,
              "end": 291
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 263,
            "end": 291
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 301,
                  "end": 307
                },
                "start": 299,
                "end": 307
              },
              "body": null,
              "expression": false,
              "start": 297,
              "end": 308
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 296,
            "end": 308
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 325,
                  "end": 331
                },
                "start": 323,
                "end": 331
              },
              "body": null,
              "expression": false,
              "start": 321,
              "end": 332
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 313,
            "end": 332
          }
        ],
        "start": 257,
        "end": 334
      },
      "abstract": false,
      "declare": true,
      "start": 240,
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
            "name": "Mixed1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 367
                    },
                    "typeArguments": null,
                    "start": 358,
                    "end": 367
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 379
                    },
                    "typeArguments": null,
                    "start": 370,
                    "end": 379
                  }
                ],
                "start": 358,
                "end": 379
              },
              "start": 356,
              "end": 379
            },
            "start": 350,
            "end": 379
          },
          "init": null,
          "definite": false,
          "start": 350,
          "end": 379
        }
      ],
      "declare": true,
      "start": 336,
      "end": 380
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
            "name": "Mixed2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 412
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 412
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 415,
                    "end": 424
                  }
                ],
                "start": 403,
                "end": 424
              },
              "start": 401,
              "end": 424
            },
            "start": 395,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 395,
          "end": 424
        }
      ],
      "declare": true,
      "start": 381,
      "end": 425
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
            "name": "Mixed3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 457
                    },
                    "typeArguments": null,
                    "start": 448,
                    "end": 457
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 469
                    },
                    "typeArguments": null,
                    "start": 460,
                    "end": 469
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 472,
                    "end": 481
                  }
                ],
                "start": 448,
                "end": 481
              },
              "start": 446,
              "end": 481
            },
            "start": 440,
            "end": 481
          },
          "init": null,
          "definite": false,
          "start": 440,
          "end": 481
        }
      ],
      "declare": true,
      "start": 426,
      "end": 482
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
            "name": "Mixed4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 512,
                      "end": 514
                    },
                    "typeArguments": null,
                    "start": 505,
                    "end": 514
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 526
                    },
                    "typeArguments": null,
                    "start": 517,
                    "end": 526
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 538
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 538
                  }
                ],
                "start": 505,
                "end": 538
              },
              "start": 503,
              "end": 538
            },
            "start": 497,
            "end": 538
          },
          "init": null,
          "definite": false,
          "start": 497,
          "end": 538
        }
      ],
      "declare": true,
      "start": 483,
      "end": 539
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
            "name": "Mixed5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 569,
                      "end": 571
                    },
                    "typeArguments": null,
                    "start": 562,
                    "end": 571
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 583
                    },
                    "typeArguments": null,
                    "start": 574,
                    "end": 583
                  }
                ],
                "start": 562,
                "end": 583
              },
              "start": 560,
              "end": 583
            },
            "start": 554,
            "end": 583
          },
          "init": null,
          "definite": false,
          "start": 554,
          "end": 583
        }
      ],
      "declare": true,
      "start": 540,
      "end": 584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 597
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 612
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 619,
                    "end": 625
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 626,
                      "end": 633
                    }
                  ],
                  "start": 615,
                  "end": 634
                },
                "definite": false,
                "start": 610,
                "end": 634
              }
            ],
            "declare": false,
            "start": 606,
            "end": 635
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
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 646
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 653,
                    "end": 659
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 660,
                      "end": 662
                    }
                  ],
                  "start": 649,
                  "end": 663
                },
                "definite": false,
                "start": 644,
                "end": 663
              }
            ],
            "declare": false,
            "start": 640,
            "end": 664
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
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 675
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 688
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 689,
                      "end": 696
                    }
                  ],
                  "start": 678,
                  "end": 697
                },
                "definite": false,
                "start": 673,
                "end": 697
              }
            ],
            "declare": false,
            "start": 669,
            "end": 698
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
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 709
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 716,
                    "end": 722
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 723,
                      "end": 725
                    }
                  ],
                  "start": 712,
                  "end": 726
                },
                "definite": false,
                "start": 707,
                "end": 726
              }
            ],
            "declare": false,
            "start": 703,
            "end": 727
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
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 738
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 751
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 752,
                      "end": 759
                    }
                  ],
                  "start": 741,
                  "end": 760
                },
                "definite": false,
                "start": 736,
                "end": 760
              }
            ],
            "declare": false,
            "start": 732,
            "end": 761
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
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 772
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 785
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 786,
                      "end": 788
                    }
                  ],
                  "start": 775,
                  "end": 789
                },
                "definite": false,
                "start": 770,
                "end": 789
              }
            ],
            "declare": false,
            "start": 766,
            "end": 790
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
                  "typeAnnotation": null,
                  "start": 799,
                  "end": 801
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 808,
                    "end": 814
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 815,
                      "end": 822
                    }
                  ],
                  "start": 804,
                  "end": 823
                },
                "definite": false,
                "start": 799,
                "end": 823
              }
            ],
            "declare": false,
            "start": 795,
            "end": 824
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
                  "typeAnnotation": null,
                  "start": 833,
                  "end": 835
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 848
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 849,
                      "end": 851
                    }
                  ],
                  "start": 838,
                  "end": 852
                },
                "definite": false,
                "start": 833,
                "end": 852
              }
            ],
            "declare": false,
            "start": 829,
            "end": 853
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
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 864
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 877
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 867,
                  "end": 879
                },
                "definite": false,
                "start": 862,
                "end": 879
              }
            ],
            "declare": false,
            "start": 858,
            "end": 880
          }
        ],
        "start": 600,
        "end": 882
      },
      "expression": false,
      "start": 586,
      "end": 882
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 895
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
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 909
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 916,
                    "end": 922
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 923,
                      "end": 930
                    }
                  ],
                  "start": 912,
                  "end": 931
                },
                "definite": false,
                "start": 908,
                "end": 931
              }
            ],
            "declare": false,
            "start": 904,
            "end": 932
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 938
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 940
              },
              "optional": false,
              "computed": false,
              "start": 937,
              "end": 940
            },
            "directive": null,
            "start": 937,
            "end": 941
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 949
              },
              "optional": false,
              "computed": false,
              "start": 946,
              "end": 949
            },
            "directive": null,
            "start": 946,
            "end": 950
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixed1",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 961
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 963
              },
              "optional": false,
              "computed": false,
              "start": 955,
              "end": 963
            },
            "directive": null,
            "start": 955,
            "end": 964
          }
        ],
        "start": 898,
        "end": 966
      },
      "expression": false,
      "start": 884,
      "end": 966
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 977,
        "end": 979
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
                  "typeAnnotation": null,
                  "start": 992,
                  "end": 993
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1000,
                    "end": 1006
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1007,
                      "end": 1014
                    }
                  ],
                  "start": 996,
                  "end": 1015
                },
                "definite": false,
                "start": 992,
                "end": 1015
              }
            ],
            "declare": false,
            "start": 988,
            "end": 1016
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1021,
                "end": 1022
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1024
              },
              "optional": false,
              "computed": false,
              "start": 1021,
              "end": 1024
            },
            "directive": null,
            "start": 1021,
            "end": 1025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1031
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1033
              },
              "optional": false,
              "computed": false,
              "start": 1030,
              "end": 1033
            },
            "directive": null,
            "start": 1030,
            "end": 1034
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixed2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1045
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1047
              },
              "optional": false,
              "computed": false,
              "start": 1039,
              "end": 1047
            },
            "directive": null,
            "start": 1039,
            "end": 1048
          }
        ],
        "start": 982,
        "end": 1050
      },
      "expression": false,
      "start": 968,
      "end": 1050
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1063
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
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1077
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1090
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1091,
                      "end": 1098
                    }
                  ],
                  "start": 1080,
                  "end": 1099
                },
                "definite": false,
                "start": 1076,
                "end": 1099
              }
            ],
            "declare": false,
            "start": 1072,
            "end": 1100
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1108
              },
              "optional": false,
              "computed": false,
              "start": 1105,
              "end": 1108
            },
            "directive": null,
            "start": 1105,
            "end": 1109
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1114,
                "end": 1115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1117
              },
              "optional": false,
              "computed": false,
              "start": 1114,
              "end": 1117
            },
            "directive": null,
            "start": 1114,
            "end": 1118
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1123,
                  "end": 1124
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1126
                },
                "optional": false,
                "computed": false,
                "start": 1123,
                "end": 1126
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1123,
              "end": 1128
            },
            "directive": null,
            "start": 1123,
            "end": 1129
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixed3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1140
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1142
              },
              "optional": false,
              "computed": false,
              "start": 1134,
              "end": 1142
            },
            "directive": null,
            "start": 1134,
            "end": 1143
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
                  "name": "Mixed3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1155,
                  "end": 1156
                },
                "optional": false,
                "computed": false,
                "start": 1148,
                "end": 1156
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1148,
              "end": 1158
            },
            "directive": null,
            "start": 1148,
            "end": 1159
          }
        ],
        "start": 1066,
        "end": 1161
      },
      "expression": false,
      "start": 1052,
      "end": 1161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1174
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
                  "typeAnnotation": null,
                  "start": 1187,
                  "end": 1188
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1201
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1202,
                      "end": 1209
                    }
                  ],
                  "start": 1191,
                  "end": 1210
                },
                "definite": false,
                "start": 1187,
                "end": 1210
              }
            ],
            "declare": false,
            "start": 1183,
            "end": 1211
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1216,
                "end": 1217
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1219
              },
              "optional": false,
              "computed": false,
              "start": 1216,
              "end": 1219
            },
            "directive": null,
            "start": 1216,
            "end": 1220
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1225,
                "end": 1226
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1227,
                "end": 1228
              },
              "optional": false,
              "computed": false,
              "start": 1225,
              "end": 1228
            },
            "directive": null,
            "start": 1225,
            "end": 1229
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1234,
                  "end": 1235
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1236,
                  "end": 1237
                },
                "optional": false,
                "computed": false,
                "start": 1234,
                "end": 1237
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1234,
              "end": 1239
            },
            "directive": null,
            "start": 1234,
            "end": 1240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixed4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1253
              },
              "optional": false,
              "computed": false,
              "start": 1245,
              "end": 1253
            },
            "directive": null,
            "start": 1245,
            "end": 1254
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
                  "name": "Mixed4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1259,
                  "end": 1265
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1267
                },
                "optional": false,
                "computed": false,
                "start": 1259,
                "end": 1267
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1259,
              "end": 1269
            },
            "directive": null,
            "start": 1259,
            "end": 1270
          }
        ],
        "start": 1177,
        "end": 1272
      },
      "expression": false,
      "start": 1163,
      "end": 1272
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1283,
        "end": 1285
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
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1299
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixed5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1306,
                    "end": 1312
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1302,
                  "end": 1314
                },
                "definite": false,
                "start": 1298,
                "end": 1314
              }
            ],
            "declare": false,
            "start": 1294,
            "end": 1315
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1321
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1322,
                "end": 1323
              },
              "optional": false,
              "computed": false,
              "start": 1320,
              "end": 1323
            },
            "directive": null,
            "start": 1320,
            "end": 1324
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1330
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1332
                },
                "optional": false,
                "computed": false,
                "start": 1329,
                "end": 1332
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1329,
              "end": 1334
            },
            "directive": null,
            "start": 1329,
            "end": 1335
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixed5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1346
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1347,
                "end": 1348
              },
              "optional": false,
              "computed": false,
              "start": 1340,
              "end": 1348
            },
            "directive": null,
            "start": 1340,
            "end": 1349
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
                  "name": "Mixed5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1362
                },
                "optional": false,
                "computed": false,
                "start": 1354,
                "end": 1362
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1354,
              "end": 1364
            },
            "directive": null,
            "start": 1354,
            "end": 1365
          }
        ],
        "start": 1288,
        "end": 1367
      },
      "expression": false,
      "start": 1274,
      "end": 1367
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1375,
        "end": 1377
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixed1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1392
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1399,
              "end": 1410
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1423,
                        "end": 1428
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 1429,
                          "end": 1436
                        }
                      ],
                      "optional": false,
                      "start": 1423,
                      "end": 1437
                    },
                    "directive": null,
                    "start": 1423,
                    "end": 1438
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1447,
                        "end": 1451
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1452,
                        "end": 1453
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1447,
                      "end": 1453
                    },
                    "directive": null,
                    "start": 1447,
                    "end": 1454
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1463,
                        "end": 1467
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1468,
                        "end": 1469
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1463,
                      "end": 1469
                    },
                    "directive": null,
                    "start": 1463,
                    "end": 1470
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1479,
                        "end": 1483
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1484,
                        "end": 1485
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1479,
                      "end": 1485
                    },
                    "directive": null,
                    "start": 1479,
                    "end": 1486
                  }
                ],
                "start": 1413,
                "end": 1492
              },
              "expression": false,
              "start": 1410,
              "end": 1492
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1399,
            "end": 1492
          }
        ],
        "start": 1393,
        "end": 1494
      },
      "abstract": false,
      "declare": false,
      "start": 1369,
      "end": 1494
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1502,
        "end": 1504
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixed3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1513,
        "end": 1519
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1526,
              "end": 1537
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1550,
                        "end": 1555
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1556,
                          "end": 1558
                        }
                      ],
                      "optional": false,
                      "start": 1550,
                      "end": 1559
                    },
                    "directive": null,
                    "start": 1550,
                    "end": 1560
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1569,
                        "end": 1573
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1574,
                        "end": 1575
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1569,
                      "end": 1575
                    },
                    "directive": null,
                    "start": 1569,
                    "end": 1576
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1585,
                        "end": 1589
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1585,
                      "end": 1591
                    },
                    "directive": null,
                    "start": 1585,
                    "end": 1592
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1601,
                        "end": 1605
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1606,
                        "end": 1607
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1601,
                      "end": 1607
                    },
                    "directive": null,
                    "start": 1601,
                    "end": 1608
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1617,
                          "end": 1621
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1622,
                          "end": 1623
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1617,
                        "end": 1623
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1617,
                      "end": 1625
                    },
                    "directive": null,
                    "start": 1617,
                    "end": 1626
                  }
                ],
                "start": 1540,
                "end": 1632
              },
              "expression": false,
              "start": 1537,
              "end": 1632
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1526,
            "end": 1632
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1637,
              "end": 1638
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
                          "type": "Super",
                          "start": 1650,
                          "end": 1655
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1656,
                          "end": 1657
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1650,
                        "end": 1657
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1650,
                      "end": 1659
                    },
                    "start": 1643,
                    "end": 1660
                  }
                ],
                "start": 1641,
                "end": 1662
              },
              "expression": false,
              "start": 1638,
              "end": 1662
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1637,
            "end": 1662
          }
        ],
        "start": 1520,
        "end": 1664
      },
      "abstract": false,
      "declare": false,
      "start": 1496,
      "end": 1664
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1664
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 23,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
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
    "value": "constructor",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 148,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 171,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "p",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 219,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 240,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 248,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 263,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 313,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 336,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 344,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Mixed1",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 358,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 370,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 377,
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
    "value": "declare",
    "start": 381,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 389,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Mixed2",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 403,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 415,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 422,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 426,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 434,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 448,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 460,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 472,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 483,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Mixed4",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 505,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 517,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 529,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 540,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 548,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Mixed5",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 562,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 574,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 581,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 586,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Mixed1",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Mixed1",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 660,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "Mixed2",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 689,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Mixed2",
    "start": 716,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 732,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 736,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 741,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 745,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 752,
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
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 766,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 775,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 804,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Mixed4",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 815,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 829,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "Mixed4",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 849,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 858,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 867,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "Mixed5",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 884,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 912,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "Mixed1",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 923,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "Mixed1",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 968,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 977,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 988,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 996,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "Mixed2",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1007,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "Mixed2",
    "start": 1039,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1052,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1061,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1091,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 1148,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1163,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "Mixed4",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1202,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1227,
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
    "value": "x",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "Mixed4",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "Mixed4",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1274,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1283,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "Mixed5",
    "start": 1306,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "Mixed5",
    "start": 1340,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "Mixed5",
    "start": 1354,
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
    "value": "f",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1369,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1375,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1378,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "Mixed1",
    "start": 1386,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1399,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1423,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1429,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1447,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1479,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1496,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1502,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1505,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "Mixed3",
    "start": 1513,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1526,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1550,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1556,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1569,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1585,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1617,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1643,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1650,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1663,
    "end": 1664
  }
]
```
