__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 8,
                "end": 12
              },
              "start": 6,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 22,
                "end": 31
              },
              "start": 20,
              "end": 31
            },
            "start": 18,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 31
        }
      ],
      "declare": false,
      "start": 14,
      "end": 32
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 45
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 49,
          "end": 53
        },
        "start": 47,
        "end": 53
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 63,
              "end": 67
            },
            "start": 56,
            "end": 68
          }
        ],
        "start": 54,
        "end": 70
      },
      "expression": false,
      "start": 34,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUndefinedKeyword",
          "start": 86,
          "end": 95
        },
        "start": 84,
        "end": 95
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
              "start": 105,
              "end": 114
            },
            "start": 98,
            "end": 115
          }
        ],
        "start": 96,
        "end": 117
      },
      "expression": false,
      "start": 71,
      "end": 117
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 125
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 155,
                    "end": 159
                  },
                  "start": 148,
                  "end": 160
                }
              ],
              "start": 146,
              "end": 162
            },
            "expression": false,
            "start": 128,
            "end": 162
          },
          "definite": false,
          "start": 123,
          "end": 162
        }
      ],
      "declare": false,
      "start": 119,
      "end": 162
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 169
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 185,
                "end": 194
              },
              "start": 183,
              "end": 194
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
                    "start": 204,
                    "end": 213
                  },
                  "start": 197,
                  "end": 214
                }
              ],
              "start": 195,
              "end": 216
            },
            "expression": false,
            "start": 172,
            "end": 216
          },
          "definite": false,
          "start": 167,
          "end": 216
        }
      ],
      "declare": false,
      "start": 163,
      "end": 216
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 224
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 231,
                "end": 235
              },
              "start": 229,
              "end": 235
            },
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 239,
              "end": 243
            },
            "id": null,
            "generator": false,
            "start": 227,
            "end": 243
          },
          "definite": false,
          "start": 222,
          "end": 243
        }
      ],
      "declare": false,
      "start": 218,
      "end": 244
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 251
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 258,
                "end": 267
              },
              "start": 256,
              "end": 267
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 280
            },
            "id": null,
            "generator": false,
            "start": 254,
            "end": 280
          },
          "definite": false,
          "start": 249,
          "end": 280
        }
      ],
      "declare": false,
      "start": 245,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 294
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p0",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "start": 299,
              "end": 303
            },
            "start": 297,
            "end": 303
          },
          "start": 295,
          "end": 303
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 305,
        "end": 308
      },
      "expression": false,
      "start": 283,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 325,
              "end": 334
            },
            "start": 323,
            "end": 334
          },
          "start": 321,
          "end": 334
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 336,
        "end": 339
      },
      "expression": false,
      "start": 309,
      "end": 339
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 347
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
                "name": "p2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 364,
                    "end": 368
                  },
                  "start": 362,
                  "end": 368
                },
                "start": 360,
                "end": 368
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 370,
              "end": 373
            },
            "expression": false,
            "start": 350,
            "end": 373
          },
          "definite": false,
          "start": 345,
          "end": 373
        }
      ],
      "declare": false,
      "start": 341,
      "end": 373
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 380
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
                "name": "p3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 397,
                    "end": 406
                  },
                  "start": 395,
                  "end": 406
                },
                "start": 393,
                "end": 406
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 408,
              "end": 411
            },
            "expression": false,
            "start": 383,
            "end": 411
          },
          "definite": false,
          "start": 378,
          "end": 411
        }
      ],
      "declare": false,
      "start": 374,
      "end": 411
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 428,
                    "end": 432
                  },
                  "start": 426,
                  "end": 432
                },
                "start": 424,
                "end": 432
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 437,
              "end": 440
            },
            "id": null,
            "generator": false,
            "start": 423,
            "end": 440
          },
          "definite": false,
          "start": 417,
          "end": 440
        }
      ],
      "declare": false,
      "start": 413,
      "end": 440
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 448
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p5",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 456,
                    "end": 465
                  },
                  "start": 454,
                  "end": 465
                },
                "start": 452,
                "end": 465
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 470,
              "end": 473
            },
            "id": null,
            "generator": false,
            "start": 451,
            "end": 473
          },
          "definite": false,
          "start": 445,
          "end": 473
        }
      ],
      "declare": false,
      "start": 441,
      "end": 473
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 483
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
              "name": "m0",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 492
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNullKeyword",
                  "start": 496,
                  "end": 500
                },
                "start": 494,
                "end": 500
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 510,
                      "end": 514
                    },
                    "start": 503,
                    "end": 515
                  }
                ],
                "start": 501,
                "end": 517
              },
              "expression": false,
              "start": 492,
              "end": 517
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 490,
            "end": 517
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 524
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 528,
                  "end": 537
                },
                "start": 526,
                "end": 537
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
                      "start": 547,
                      "end": 556
                    },
                    "start": 540,
                    "end": 557
                  }
                ],
                "start": 538,
                "end": 559
              },
              "expression": false,
              "start": 524,
              "end": 559
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 522,
            "end": 559
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 567
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
                  "name": "p6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 572,
                      "end": 576
                    },
                    "start": 570,
                    "end": 576
                  },
                  "start": 568,
                  "end": 576
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 578,
                "end": 581
              },
              "expression": false,
              "start": 567,
              "end": 581
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 565,
            "end": 581
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 588
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
                  "name": "p7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 593,
                      "end": 602
                    },
                    "start": 591,
                    "end": 602
                  },
                  "start": 589,
                  "end": 602
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 604,
                "end": 607
              },
              "expression": false,
              "start": 588,
              "end": 607
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 586,
            "end": 607
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a0",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 619
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNullKeyword",
                  "start": 623,
                  "end": 627
                },
                "start": 621,
                "end": 627
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 637,
                      "end": 641
                    },
                    "start": 630,
                    "end": 642
                  }
                ],
                "start": 628,
                "end": 644
              },
              "expression": false,
              "start": 619,
              "end": 644
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 613,
            "end": 644
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 655
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 659,
                  "end": 668
                },
                "start": 657,
                "end": 668
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
                      "start": 678,
                      "end": 687
                    },
                    "start": 671,
                    "end": 688
                  }
                ],
                "start": 669,
                "end": 690
              },
              "expression": false,
              "start": 655,
              "end": 690
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 649,
            "end": 690
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 702
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
                  "name": "p8",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 707,
                      "end": 711
                    },
                    "start": 705,
                    "end": 711
                  },
                  "start": 703,
                  "end": 711
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 713,
                "end": 716
              },
              "expression": false,
              "start": 702,
              "end": 716
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 696,
            "end": 716
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 727
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
                  "name": "p9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 732,
                      "end": 741
                    },
                    "start": 730,
                    "end": 741
                  },
                  "start": 728,
                  "end": 741
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 743,
                "end": 746
              },
              "expression": false,
              "start": 727,
              "end": 746
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 721,
            "end": 746
          }
        ],
        "start": 484,
        "end": 748
      },
      "abstract": false,
      "declare": false,
      "start": 475,
      "end": 748
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
        "start": 756,
        "end": 758
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
              "start": 761,
              "end": 772
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
                  "name": "p10",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 778,
                      "end": 782
                    },
                    "start": 776,
                    "end": 782
                  },
                  "start": 773,
                  "end": 782
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 784,
                "end": 787
              },
              "expression": false,
              "start": 772,
              "end": 787
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 761,
            "end": 787
          }
        ],
        "start": 759,
        "end": 789
      },
      "abstract": false,
      "declare": false,
      "start": 750,
      "end": 789
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
        "start": 796,
        "end": 798
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
              "start": 801,
              "end": 812
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
                  "name": "p11",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 818,
                      "end": 827
                    },
                    "start": 816,
                    "end": 827
                  },
                  "start": 813,
                  "end": 827
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 829,
                "end": 832
              },
              "expression": false,
              "start": 812,
              "end": 832
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 801,
            "end": 832
          }
        ],
        "start": 799,
        "end": 834
      },
      "abstract": false,
      "declare": false,
      "start": 790,
      "end": 834
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 844
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
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 853
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 851,
            "end": 854
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
              "start": 859,
              "end": 870
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
                  "name": "p12",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 876,
                      "end": 880
                    },
                    "start": 874,
                    "end": 880
                  },
                  "start": 871,
                  "end": 880
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 882,
                "end": 885
              },
              "expression": false,
              "start": 870,
              "end": 885
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 859,
            "end": 885
          }
        ],
        "start": 845,
        "end": 887
      },
      "abstract": false,
      "declare": false,
      "start": 836,
      "end": 887
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 895,
        "end": 897
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
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 906
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 904,
            "end": 907
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
              "start": 912,
              "end": 923
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
                  "name": "p13",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 929,
                      "end": 938
                    },
                    "start": 927,
                    "end": 938
                  },
                  "start": 924,
                  "end": 938
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 940,
                "end": 943
              },
              "expression": false,
              "start": 923,
              "end": 943
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 912,
            "end": 943
          }
        ],
        "start": 898,
        "end": 945
      },
      "abstract": false,
      "declare": false,
      "start": 889,
      "end": 945
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
            "name": "C6",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 953
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 964,
                    "end": 975
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
                        "name": "p12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 981,
                            "end": 985
                          },
                          "start": 979,
                          "end": 985
                        },
                        "start": 976,
                        "end": 985
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 987,
                      "end": 990
                    },
                    "expression": false,
                    "start": 975,
                    "end": 990
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 964,
                  "end": 990
                }
              ],
              "start": 962,
              "end": 992
            },
            "abstract": false,
            "declare": false,
            "start": 956,
            "end": 992
          },
          "definite": false,
          "start": 951,
          "end": 992
        }
      ],
      "declare": false,
      "start": 947,
      "end": 992
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
            "name": "C7",
            "optional": false,
            "typeAnnotation": null,
            "start": 997,
            "end": 999
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 1010,
                    "end": 1021
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
                        "name": "p13",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 1027,
                            "end": 1036
                          },
                          "start": 1025,
                          "end": 1036
                        },
                        "start": 1022,
                        "end": 1036
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1038,
                      "end": 1041
                    },
                    "expression": false,
                    "start": 1021,
                    "end": 1041
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1010,
                  "end": 1041
                }
              ],
              "start": 1008,
              "end": 1043
            },
            "abstract": false,
            "declare": false,
            "start": 1002,
            "end": 1043
          },
          "definite": false,
          "start": 997,
          "end": 1043
        }
      ],
      "declare": false,
      "start": 993,
      "end": 1043
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1064
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
              "start": 1065,
              "end": 1066
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1065,
            "end": 1066
          }
        ],
        "start": 1064,
        "end": 1067
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1045,
      "end": 1070
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 1071,
          "end": 1073
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 1074,
              "end": 1078
            }
          ],
          "start": 1073,
          "end": 1079
        },
        "arguments": [],
        "optional": false,
        "start": 1071,
        "end": 1081
      },
      "directive": null,
      "start": 1071,
      "end": 1082
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 1083,
          "end": 1085
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 1086,
              "end": 1095
            }
          ],
          "start": 1085,
          "end": 1096
        },
        "arguments": [],
        "optional": false,
        "start": 1083,
        "end": 1098
      },
      "directive": null,
      "start": 1083,
      "end": 1099
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1115,
        "end": 1116
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
              "start": 1117,
              "end": 1118
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1117,
            "end": 1118
          }
        ],
        "start": 1116,
        "end": 1119
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1120,
        "end": 1122
      },
      "abstract": false,
      "declare": true,
      "start": 1101,
      "end": 1122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1128
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 1129,
              "end": 1133
            }
          ],
          "start": 1128,
          "end": 1134
        },
        "arguments": [],
        "start": 1123,
        "end": 1136
      },
      "directive": null,
      "start": 1123,
      "end": 1137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1142,
          "end": 1143
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 1144,
              "end": 1153
            }
          ],
          "start": 1143,
          "end": 1154
        },
        "arguments": [],
        "start": 1138,
        "end": 1156
      },
      "directive": null,
      "start": 1138,
      "end": 1157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1157
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Null",
    "value": "null",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 34,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "f0",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Null",
    "value": "null",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 56,
    "end": 62
  },
  {
    "type": "Null",
    "value": "null",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 71,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 98,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 105,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Null",
    "value": "null",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Null",
    "value": "null",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 163,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 172,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 185,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 204,
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
    "value": "var",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Null",
    "value": "null",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 236,
    "end": 238
  },
  {
    "type": "Null",
    "value": "null",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
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
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 271,
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
    "value": "function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 292,
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
    "value": "p0",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Null",
    "value": "null",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 321,
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
    "value": "undefined",
    "start": 325,
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
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 350,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Null",
    "value": "null",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 397,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Null",
    "value": "null",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 456,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 475,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "m0",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Null",
    "value": "null",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 503,
    "end": 509
  },
  {
    "type": "Null",
    "value": "null",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 528,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 540,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 547,
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
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Null",
    "value": "null",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 586,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 593,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Null",
    "value": "null",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 630,
    "end": 636
  },
  {
    "type": "Null",
    "value": "null",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
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
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 659,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 671,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 678,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Null",
    "value": "null",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "set",
    "start": 721,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 728,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 732,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 750,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 761,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "p10",
    "start": 773,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Null",
    "value": "null",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 790,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 801,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "p11",
    "start": 813,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 818,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 836,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 842,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 859,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "p12",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Null",
    "value": "null",
    "start": 876,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 889,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 912,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "p13",
    "start": 924,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 929,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 947,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 964,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "p12",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Null",
    "value": "null",
    "start": 981,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 993,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 997,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1010,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "p13",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1027,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1045,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1053,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1086,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1144,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  }
]
```
