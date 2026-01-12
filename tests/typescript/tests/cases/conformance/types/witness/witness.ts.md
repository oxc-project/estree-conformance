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
            "name": "varInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 27
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 37
          },
          "definite": false,
          "start": 20,
          "end": 37
        }
      ],
      "declare": false,
      "start": 16,
      "end": 38
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
            "name": "pInit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "start": 50,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 60
        }
      ],
      "declare": false,
      "start": 46,
      "end": 61
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 73
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 79
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 87
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 87
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
                  "name": "pInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 106,
                      "end": 109
                    },
                    "start": 104,
                    "end": 109
                  },
                  "start": 99,
                  "end": 109
                },
                "init": null,
                "definite": false,
                "start": 99,
                "end": 109
              }
            ],
            "declare": false,
            "start": 95,
            "end": 110
          }
        ],
        "start": 89,
        "end": 112
      },
      "expression": false,
      "start": 62,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InitClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 128
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 139,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 139,
              "end": 145
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 135,
            "end": 146
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 153
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
                          "start": 170,
                          "end": 171
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 174,
                            "end": 178
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 180
                          },
                          "optional": false,
                          "computed": false,
                          "start": 174,
                          "end": 180
                        },
                        "definite": false,
                        "start": 170,
                        "end": 180
                      }
                    ],
                    "declare": false,
                    "start": 166,
                    "end": 181
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
                              "type": "TSAnyKeyword",
                              "start": 197,
                              "end": 200
                            },
                            "start": 195,
                            "end": 200
                          },
                          "start": 194,
                          "end": 200
                        },
                        "init": null,
                        "definite": false,
                        "start": 194,
                        "end": 200
                      }
                    ],
                    "declare": false,
                    "start": 190,
                    "end": 201
                  }
                ],
                "start": 156,
                "end": 207
              },
              "expression": false,
              "start": 153,
              "end": 207
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 151,
            "end": 207
          }
        ],
        "start": 129,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 113,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnReturn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 244
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
                "name": "fnReturn1",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 269
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 260,
              "end": 271
            },
            "start": 253,
            "end": 272
          }
        ],
        "start": 247,
        "end": 274
      },
      "expression": false,
      "start": 226,
      "end": 274
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
                "type": "TSAnyKeyword",
                "start": 282,
                "end": 285
              },
              "start": 280,
              "end": 285
            },
            "start": 279,
            "end": 285
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 285
        }
      ],
      "declare": false,
      "start": 275,
      "end": 286
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
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnReturn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 304
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 295,
            "end": 306
          },
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": false,
      "start": 287,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnReturn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 327
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
              "name": "fnReturn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 352
            },
            "start": 336,
            "end": 353
          }
        ],
        "start": 330,
        "end": 355
      },
      "expression": false,
      "start": 309,
      "end": 355
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
            "name": "fnr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 372,
                    "end": 375
                  },
                  "start": 369,
                  "end": 375
                },
                "start": 366,
                "end": 375
              },
              "start": 364,
              "end": 375
            },
            "start": 360,
            "end": 375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnReturn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 387
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 378,
            "end": 389
          },
          "definite": false,
          "start": 360,
          "end": 389
        }
      ],
      "declare": false,
      "start": 356,
      "end": 390
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
            "name": "co1",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 408
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 415
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 417,
                "end": 418
              }
            ],
            "start": 412,
            "end": 418
          },
          "definite": false,
          "start": 405,
          "end": 419
        }
      ],
      "declare": false,
      "start": 401,
      "end": 420
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
            "name": "co1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 430,
                "end": 436
              },
              "start": 428,
              "end": 436
            },
            "start": 425,
            "end": 436
          },
          "init": null,
          "definite": false,
          "start": 425,
          "end": 436
        }
      ],
      "declare": false,
      "start": 421,
      "end": 437
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
            "name": "co2",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 445
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 449,
                "end": 450
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 452,
                "end": 453
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co2",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 458
              }
            ],
            "start": 449,
            "end": 458
          },
          "definite": false,
          "start": 442,
          "end": 459
        }
      ],
      "declare": false,
      "start": 438,
      "end": 460
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
            "name": "co2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 470,
                "end": 473
              },
              "start": 468,
              "end": 473
            },
            "start": 465,
            "end": 473
          },
          "init": null,
          "definite": false,
          "start": 465,
          "end": 473
        }
      ],
      "declare": false,
      "start": 461,
      "end": 474
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
            "name": "co3",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 482
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 489
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co2",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 494
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co3",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 499
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 504
              }
            ],
            "start": 486,
            "end": 504
          },
          "definite": false,
          "start": 479,
          "end": 505
        }
      ],
      "declare": false,
      "start": 475,
      "end": 506
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
            "name": "co3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 516,
                "end": 522
              },
              "start": 514,
              "end": 522
            },
            "start": 511,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 511,
          "end": 522
        }
      ],
      "declare": false,
      "start": 507,
      "end": 523
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
            "name": "as1",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 546
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "as1",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 553
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 556,
              "end": 557
            },
            "start": 550,
            "end": 557
          },
          "definite": false,
          "start": 543,
          "end": 558
        }
      ],
      "declare": false,
      "start": 539,
      "end": 559
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
            "name": "as1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "start": 564,
            "end": 575
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 575
        }
      ],
      "declare": false,
      "start": 560,
      "end": 576
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
            "name": "as2",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 584
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "as2",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 591
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "as2",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 597
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 600,
                "end": 601
              },
              "start": 594,
              "end": 601
            },
            "start": 588,
            "end": 601
          },
          "definite": false,
          "start": 581,
          "end": 602
        }
      ],
      "declare": false,
      "start": 577,
      "end": 603
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
            "name": "as2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 613,
                "end": 619
              },
              "start": 611,
              "end": 619
            },
            "start": 608,
            "end": 619
          },
          "init": null,
          "definite": false,
          "start": 608,
          "end": 619
        }
      ],
      "declare": false,
      "start": 604,
      "end": 620
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
            "name": "cnd1",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 645
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cnd1",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 652
            },
            "consequent": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 655,
              "end": 656
            },
            "alternate": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 659,
              "end": 660
            },
            "start": 648,
            "end": 660
          },
          "definite": false,
          "start": 641,
          "end": 660
        }
      ],
      "declare": false,
      "start": 637,
      "end": 661
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
            "name": "cnd1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              },
              "start": 670,
              "end": 678
            },
            "start": 666,
            "end": 678
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 678
        }
      ],
      "declare": false,
      "start": 662,
      "end": 679
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
            "name": "cnd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 688
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cnd1",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 695
            },
            "consequent": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cnd1",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 702
              },
              "consequent": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 705,
                "end": 707
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 710,
                "end": 712
              },
              "start": 698,
              "end": 712
            },
            "alternate": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 715,
              "end": 717
            },
            "start": 691,
            "end": 717
          },
          "definite": false,
          "start": 684,
          "end": 717
        }
      ],
      "declare": false,
      "start": 680,
      "end": 718
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
            "name": "cnd2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 729,
                "end": 735
              },
              "start": 727,
              "end": 735
            },
            "start": 723,
            "end": 735
          },
          "init": null,
          "definite": false,
          "start": 723,
          "end": 735
        }
      ],
      "declare": false,
      "start": 719,
      "end": 736
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
            "name": "or1",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 751
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "or1",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 757
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 761,
              "end": 763
            },
            "start": 754,
            "end": 763
          },
          "definite": false,
          "start": 748,
          "end": 763
        }
      ],
      "declare": false,
      "start": 744,
      "end": 764
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
            "name": "or1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 774,
                "end": 777
              },
              "start": 772,
              "end": 777
            },
            "start": 769,
            "end": 777
          },
          "init": null,
          "definite": false,
          "start": 769,
          "end": 777
        }
      ],
      "declare": false,
      "start": 765,
      "end": 778
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
            "name": "or2",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 786
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 789,
              "end": 791
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "or2",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 798
            },
            "start": 789,
            "end": 798
          },
          "definite": false,
          "start": 783,
          "end": 798
        }
      ],
      "declare": false,
      "start": 779,
      "end": 799
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
            "name": "or2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 809,
                "end": 812
              },
              "start": 807,
              "end": 812
            },
            "start": 804,
            "end": 812
          },
          "init": null,
          "definite": false,
          "start": 804,
          "end": 812
        }
      ],
      "declare": false,
      "start": 800,
      "end": 813
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
            "name": "or3",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 821
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "or3",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 827
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "or3",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 834
            },
            "start": 824,
            "end": 834
          },
          "definite": false,
          "start": 818,
          "end": 834
        }
      ],
      "declare": false,
      "start": 814,
      "end": 835
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
            "name": "or3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 845,
                "end": 848
              },
              "start": 843,
              "end": 848
            },
            "start": 840,
            "end": 848
          },
          "init": null,
          "definite": false,
          "start": 840,
          "end": 848
        }
      ],
      "declare": false,
      "start": 836,
      "end": 849
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
            "name": "and1",
            "optional": false,
            "typeAnnotation": null,
            "start": 861,
            "end": 865
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "and1",
              "optional": false,
              "typeAnnotation": null,
              "start": 868,
              "end": 872
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 876,
              "end": 878
            },
            "start": 868,
            "end": 878
          },
          "definite": false,
          "start": 861,
          "end": 878
        }
      ],
      "declare": false,
      "start": 857,
      "end": 879
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
            "name": "and1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 890,
                "end": 896
              },
              "start": 888,
              "end": 896
            },
            "start": 884,
            "end": 896
          },
          "init": null,
          "definite": false,
          "start": 884,
          "end": 896
        }
      ],
      "declare": false,
      "start": 880,
      "end": 897
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
            "name": "and2",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 906
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 909,
              "end": 911
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "and2",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 919
            },
            "start": 909,
            "end": 919
          },
          "definite": false,
          "start": 902,
          "end": 919
        }
      ],
      "declare": false,
      "start": 898,
      "end": 920
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
            "name": "and2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 931,
                "end": 934
              },
              "start": 929,
              "end": 934
            },
            "start": 925,
            "end": 934
          },
          "init": null,
          "definite": false,
          "start": 925,
          "end": 934
        }
      ],
      "declare": false,
      "start": 921,
      "end": 935
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
            "name": "and3",
            "optional": false,
            "typeAnnotation": null,
            "start": 940,
            "end": 944
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "and3",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 951
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "and3",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 959
            },
            "start": 947,
            "end": 959
          },
          "definite": false,
          "start": 940,
          "end": 959
        }
      ],
      "declare": false,
      "start": 936,
      "end": 960
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
            "name": "and3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 971,
                "end": 974
              },
              "start": 969,
              "end": 974
            },
            "start": 965,
            "end": 974
          },
          "init": null,
          "definite": false,
          "start": 965,
          "end": 974
        }
      ],
      "declare": false,
      "start": 961,
      "end": 975
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1021
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
                "name": "fnCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1043
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1037,
              "end": 1045
            },
            "start": 1030,
            "end": 1046
          }
        ],
        "start": 1024,
        "end": 1048
      },
      "expression": false,
      "start": 1006,
      "end": 1048
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
            "name": "fnCallResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 1053,
            "end": 1065
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1074
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1068,
            "end": 1076
          },
          "definite": false,
          "start": 1053,
          "end": 1076
        }
      ],
      "declare": false,
      "start": 1049,
      "end": 1077
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
            "name": "fnCallResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1096,
                "end": 1099
              },
              "start": 1094,
              "end": 1099
            },
            "start": 1082,
            "end": 1099
          },
          "init": null,
          "definite": false,
          "start": 1082,
          "end": 1099
        }
      ],
      "declare": false,
      "start": 1078,
      "end": 1100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnArg1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1134
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1151
              },
              "typeArguments": null,
              "start": 1138,
              "end": 1151
            },
            "start": 1136,
            "end": 1151
          },
          "start": 1135,
          "end": 1151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1156,
              "end": 1162
            },
            "start": 1154,
            "end": 1162
          },
          "start": 1153,
          "end": 1162
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
                  "name": "x",
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnArg1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1188,
                                "end": 1194
                              },
                              "typeArguments": null,
                              "start": 1181,
                              "end": 1194
                            },
                            "start": 1179,
                            "end": 1194
                          },
                          "start": 1178,
                          "end": 1194
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1199,
                              "end": 1205
                            },
                            "start": 1197,
                            "end": 1205
                          },
                          "start": 1196,
                          "end": 1205
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1210,
                          "end": 1214
                        },
                        "start": 1207,
                        "end": 1214
                      },
                      "start": 1177,
                      "end": 1214
                    },
                    "start": 1175,
                    "end": 1214
                  },
                  "start": 1174,
                  "end": 1214
                },
                "init": null,
                "definite": false,
                "start": 1174,
                "end": 1214
              }
            ],
            "declare": false,
            "start": 1170,
            "end": 1215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1220,
                "end": 1226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fnArg1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1227,
                  "end": 1233
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1235,
                  "end": 1236
                }
              ],
              "optional": false,
              "start": 1220,
              "end": 1237
            },
            "directive": null,
            "start": 1220,
            "end": 1238
          }
        ],
        "start": 1164,
        "end": 1240
      },
      "expression": false,
      "start": 1119,
      "end": 1240
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1251,
        "end": 1260
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
              "type": "TSFunctionType",
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
                      "type": "TSStringKeyword",
                      "start": 1268,
                      "end": 1274
                    },
                    "start": 1266,
                    "end": 1274
                  },
                  "start": 1265,
                  "end": 1274
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1279,
                  "end": 1285
                },
                "start": 1276,
                "end": 1285
              },
              "start": 1264,
              "end": 1285
            },
            "start": 1262,
            "end": 1285
          },
          "start": 1261,
          "end": 1285
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1288,
          "end": 1294
        },
        "start": 1286,
        "end": 1294
      },
      "body": null,
      "expression": false,
      "start": 1242,
      "end": 1295
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1305,
        "end": 1314
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
              "type": "TSFunctionType",
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
                      "start": 1322,
                      "end": 1328
                    },
                    "start": 1320,
                    "end": 1328
                  },
                  "start": 1319,
                  "end": 1328
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                },
                "start": 1330,
                "end": 1339
              },
              "start": 1318,
              "end": 1339
            },
            "start": 1316,
            "end": 1339
          },
          "start": 1315,
          "end": 1339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1342,
          "end": 1348
        },
        "start": 1340,
        "end": 1348
      },
      "body": null,
      "expression": false,
      "start": 1296,
      "end": 1349
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1368
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
              "type": "TSFunctionType",
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
                      "type": "TSAnyKeyword",
                      "start": 1376,
                      "end": 1379
                    },
                    "start": 1374,
                    "end": 1379
                  },
                  "start": 1373,
                  "end": 1379
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1384,
                  "end": 1387
                },
                "start": 1381,
                "end": 1387
              },
              "start": 1372,
              "end": 1387
            },
            "start": 1370,
            "end": 1387
          },
          "start": 1369,
          "end": 1387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1390,
          "end": 1393
        },
        "start": 1388,
        "end": 1393
      },
      "body": null,
      "expression": false,
      "start": 1350,
      "end": 1394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1413
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
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1425,
              "end": 1434
            },
            "start": 1418,
            "end": 1435
          }
        ],
        "start": 1416,
        "end": 1437
      },
      "expression": false,
      "start": 1395,
      "end": 1437
    },
    {
      "type": "EmptyStatement",
      "start": 1437,
      "end": 1438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnArg2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1455
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
                "name": "overload1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1480
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fnArg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1481,
                  "end": 1487
                }
              ],
              "optional": false,
              "start": 1471,
              "end": 1488
            },
            "start": 1464,
            "end": 1489
          }
        ],
        "start": 1458,
        "end": 1491
      },
      "expression": false,
      "start": 1440,
      "end": 1491
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 1496,
            "end": 1497
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArg2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1506
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1500,
            "end": 1508
          },
          "definite": false,
          "start": 1496,
          "end": 1508
        }
      ],
      "declare": false,
      "start": 1492,
      "end": 1509
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
        "start": 1572,
        "end": 1573
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
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1580,
              "end": 1583
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1608,
                            "end": 1612
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1613,
                            "end": 1616
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1608,
                          "end": 1616
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1608,
                        "end": 1618
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1603,
                      "end": 1621
                    },
                    "start": 1596,
                    "end": 1622
                  }
                ],
                "start": 1586,
                "end": 1628
              },
              "expression": false,
              "start": 1583,
              "end": 1628
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1580,
            "end": 1628
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1633,
              "end": 1636
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1661,
                            "end": 1665
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1666,
                            "end": 1669
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1661,
                          "end": 1669
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1661,
                        "end": 1671
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1656,
                      "end": 1672
                    },
                    "start": 1649,
                    "end": 1673
                  }
                ],
                "start": 1639,
                "end": 1679
              },
              "expression": false,
              "start": 1636,
              "end": 1679
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1633,
            "end": 1679
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1684,
              "end": 1687
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
                              "type": "TSConstructorType",
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1711,
                                  "end": 1712
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1717,
                                  "end": 1723
                                },
                                "start": 1714,
                                "end": 1723
                              },
                              "start": 1707,
                              "end": 1723
                            },
                            "start": 1705,
                            "end": 1723
                          },
                          "start": 1704,
                          "end": 1723
                        },
                        "init": null,
                        "definite": false,
                        "start": 1704,
                        "end": 1723
                      }
                    ],
                    "declare": false,
                    "start": 1700,
                    "end": 1724
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1744,
                        "end": 1745
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1746,
                            "end": 1750
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1751,
                            "end": 1754
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1746,
                          "end": 1754
                        }
                      ],
                      "start": 1740,
                      "end": 1755
                    },
                    "start": 1733,
                    "end": 1756
                  }
                ],
                "start": 1690,
                "end": 1762
              },
              "expression": false,
              "start": 1687,
              "end": 1762
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1684,
            "end": 1762
          }
        ],
        "start": 1574,
        "end": 1764
      },
      "abstract": false,
      "declare": false,
      "start": 1566,
      "end": 1764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1778
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1799,
                          "end": 1800
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        },
                        "start": 1802,
                        "end": 1811
                      },
                      "start": 1794,
                      "end": 1811
                    },
                    "start": 1792,
                    "end": 1811
                  },
                  "start": 1791,
                  "end": 1811
                },
                "init": null,
                "definite": false,
                "start": 1791,
                "end": 1811
              }
            ],
            "declare": false,
            "start": 1787,
            "end": 1812
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1828,
                "end": 1829
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1830,
                  "end": 1833
                }
              ],
              "start": 1824,
              "end": 1834
            },
            "start": 1817,
            "end": 1835
          }
        ],
        "start": 1781,
        "end": 1837
      },
      "expression": false,
      "start": 1766,
      "end": 1837
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
            "name": "fn5r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1846
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1849,
              "end": 1852
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1849,
            "end": 1854
          },
          "definite": false,
          "start": 1842,
          "end": 1854
        }
      ],
      "declare": false,
      "start": 1838,
      "end": 1855
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
            "name": "propAcc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1930
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1939,
                  "end": 1940
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propAcc1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1942,
                    "end": 1950
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1951,
                    "end": 1952
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1942,
                  "end": 1952
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1939,
                "end": 1952
              }
            ],
            "start": 1933,
            "end": 1954
          },
          "definite": false,
          "start": 1922,
          "end": 1954
        }
      ],
      "declare": false,
      "start": 1918,
      "end": 1955
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
            "name": "propAcc1",
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
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1972,
                      "end": 1973
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1975,
                        "end": 1978
                      },
                      "start": 1973,
                      "end": 1978
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1972,
                    "end": 1979
                  }
                ],
                "start": 1970,
                "end": 1981
              },
              "start": 1968,
              "end": 1981
            },
            "start": 1960,
            "end": 1981
          },
          "init": null,
          "definite": false,
          "start": 1960,
          "end": 1981
        }
      ],
      "declare": false,
      "start": 1956,
      "end": 1981
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2034
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
                    "start": 2052,
                    "end": 2053
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2056,
                      "end": 2058
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2059,
                      "end": 2060
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2056,
                    "end": 2060
                  },
                  "definite": false,
                  "start": 2052,
                  "end": 2060
                }
              ],
              "declare": false,
              "start": 2048,
              "end": 2061
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2041,
            "end": 2061
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
                  "typeAnnotation": null,
                  "start": 2070,
                  "end": 2071
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2074,
                  "end": 2075
                },
                "definite": false,
                "start": 2070,
                "end": 2075
              }
            ],
            "declare": false,
            "start": 2066,
            "end": 2076
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
                      "type": "TSAnyKeyword",
                      "start": 2088,
                      "end": 2091
                    },
                    "start": 2086,
                    "end": 2091
                  },
                  "start": 2085,
                  "end": 2091
                },
                "init": null,
                "definite": false,
                "start": 2085,
                "end": 2091
              }
            ],
            "declare": false,
            "start": 2081,
            "end": 2092
          }
        ],
        "start": 2035,
        "end": 2094
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2022,
      "end": 2094
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
        "start": 2144,
        "end": 2146
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2153,
              "end": 2154
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 2157,
                "end": 2161
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2163
              },
              "optional": false,
              "computed": false,
              "start": 2157,
              "end": 2163
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2153,
            "end": 2164
          }
        ],
        "start": 2147,
        "end": 2176
      },
      "abstract": false,
      "declare": false,
      "start": 2138,
      "end": 2176
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
            "name": "c2inst",
            "optional": false,
            "typeAnnotation": null,
            "start": 2181,
            "end": 2187
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2194,
                "end": 2196
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2190,
              "end": 2198
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2199,
              "end": 2200
            },
            "optional": false,
            "computed": false,
            "start": 2190,
            "end": 2200
          },
          "definite": false,
          "start": 2181,
          "end": 2200
        }
      ],
      "declare": false,
      "start": 2177,
      "end": 2201
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
            "name": "c2inst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2214,
                "end": 2217
              },
              "start": 2212,
              "end": 2217
            },
            "start": 2206,
            "end": 2217
          },
          "init": null,
          "definite": false,
          "start": 2206,
          "end": 2217
        }
      ],
      "declare": false,
      "start": 2202,
      "end": 2218
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
        "start": 2266,
        "end": 2268
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
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 2282,
              "end": 2283
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2286,
                "end": 2288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 2289,
                "end": 2290
              },
              "optional": false,
              "computed": false,
              "start": 2286,
              "end": 2290
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2275,
            "end": 2291
          }
        ],
        "start": 2269,
        "end": 2293
      },
      "abstract": false,
      "declare": false,
      "start": 2260,
      "end": 2293
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 2298,
            "end": 2300
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2303,
              "end": 2305
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 2306,
              "end": 2307
            },
            "optional": false,
            "computed": false,
            "start": 2303,
            "end": 2307
          },
          "definite": false,
          "start": 2298,
          "end": 2307
        }
      ],
      "declare": false,
      "start": 2294,
      "end": 2308
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2317,
                "end": 2320
              },
              "start": 2315,
              "end": 2320
            },
            "start": 2313,
            "end": 2320
          },
          "init": null,
          "definite": false,
          "start": 2313,
          "end": 2320
        }
      ],
      "declare": false,
      "start": 2309,
      "end": 2321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 2362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "varInit",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "varInit",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "InitClass",
    "start": 119,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "fnReturn1",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "return",
    "start": 253,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "fnReturn1",
    "start": 260,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "fnReturn1",
    "start": 295,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "fnReturn2",
    "start": 318,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 336,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "fnReturn2",
    "start": 343,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "fnr2",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 369,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "fnReturn2",
    "start": 378,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 421,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 475,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "co3",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 486,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "co3",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 501,
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
    "type": "Keyword",
    "value": "var",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "co3",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 539,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "as1",
    "start": 543,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "as1",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "as1",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 637,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 641,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 680,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "cnd2",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 703,
    "end": 704
  },
  {
    "type": "String",
    "value": "''",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "String",
    "value": "''",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "cnd2",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 744,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "or1",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "or1",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 758,
    "end": 760
  },
  {
    "type": "String",
    "value": "''",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "or1",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 779,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "or2",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "String",
    "value": "''",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 792,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "or2",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 800,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "or2",
    "start": 804,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 809,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 814,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 828,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 840,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 857,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "and1",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "and1",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 873,
    "end": 875
  },
  {
    "type": "String",
    "value": "''",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 880,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "and1",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 890,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 898,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "and2",
    "start": 902,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "String",
    "value": "''",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 912,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "and2",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 921,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "and2",
    "start": 925,
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
    "value": "any",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 952,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 961,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 965,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 971,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1006,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "fnCall",
    "start": 1015,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "fnCall",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "fnCallResult",
    "start": 1053,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "fnCall",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "fnCallResult",
    "start": 1082,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1119,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1156,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1181,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1188,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1210,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1242,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1251,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1279,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1296,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1305,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1330,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1333,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1350,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1359,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1395,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1404,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1425,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "function",
    "start": 1440,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "fnArg2",
    "start": 1449,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1464,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1471,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "fnArg2",
    "start": 1481,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "fnArg2",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1566,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "fn1",
    "start": 1580,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1596,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1649,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1661,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1666,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1700,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1707,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1740,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1746,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1751,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1766,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1817,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1838,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "fn5r",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1849,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "propAcc1",
    "start": 1922,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "propAcc1",
    "start": 1942,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1956,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "propAcc1",
    "start": 1960,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2022,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 2032,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 2056,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2066,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "var",
    "start": 2081,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2088,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2138,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2157,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "c2inst",
    "start": 2181,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2190,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2202,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "c2inst",
    "start": 2206,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2214,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2260,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2266,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2275,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2286,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2294,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2303,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 2313,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2317,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2320,
    "end": 2321
  }
]
```
