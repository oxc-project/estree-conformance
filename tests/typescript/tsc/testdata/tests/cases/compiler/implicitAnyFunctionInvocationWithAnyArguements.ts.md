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
            "name": "arg0",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 33
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 36,
            "end": 40
          },
          "definite": false,
          "start": 29,
          "end": 40
        }
      ],
      "declare": false,
      "start": 25,
      "end": 41
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
            "name": "anyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 74
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 78,
                "end": 82
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 93
              }
            ],
            "start": 77,
            "end": 94
          },
          "definite": false,
          "start": 66,
          "end": 94
        }
      ],
      "declare": false,
      "start": 62,
      "end": 95
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
            "name": "objL",
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 143,
                    "end": 145
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 146,
                    "end": 148
                  }
                ],
                "start": 141,
                "end": 150
              },
              "start": 139,
              "end": 150
            },
            "start": 135,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 150
        }
      ],
      "declare": true,
      "start": 123,
      "end": 150
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
            "name": "funcL",
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
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 203
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 208,
                    "end": 214
                  },
                  "start": 205,
                  "end": 214
                },
                "start": 200,
                "end": 214
              },
              "start": 198,
              "end": 214
            },
            "start": 193,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 214
        }
      ],
      "declare": true,
      "start": 181,
      "end": 215
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "temp1",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 230
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 235
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 237,
        "end": 240
      },
      "expression": false,
      "start": 216,
      "end": 240
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionExprC",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 288
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "subReplace",
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
                      "start": 305,
                      "end": 311
                    },
                    "start": 303,
                    "end": 311
                  },
                  "start": 302,
                  "end": 311
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 319
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 321,
                        "end": 324
                      },
                      "start": 321,
                      "end": 326
                    },
                    "start": 319,
                    "end": 326
                  },
                  "value": null,
                  "start": 313,
                  "end": 326
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 331,
                  "end": 337
                },
                "start": 328,
                "end": 337
              },
              "start": 301,
              "end": 337
            },
            "start": 299,
            "end": 337
          },
          "start": 289,
          "end": 337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 339,
        "end": 342
      },
      "expression": false,
      "start": 262,
      "end": 342
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionExprC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 370
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "eq",
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 380,
                      "end": 383
                    },
                    "start": 378,
                    "end": 383
                  },
                  "start": 376,
                  "end": 383
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 389,
                      "end": 392
                    },
                    "start": 387,
                    "end": 392
                  },
                  "start": 385,
                  "end": 392
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 397,
                  "end": 403
                },
                "start": 394,
                "end": 403
              },
              "start": 375,
              "end": 403
            },
            "start": 373,
            "end": 403
          },
          "start": 371,
          "end": 403
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 405,
        "end": 408
      },
      "expression": false,
      "start": 343,
      "end": 408
    },
    {
      "type": "EmptyStatement",
      "start": 408,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testObjLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 433
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objLit",
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 447,
                      "end": 450
                    },
                    "start": 445,
                    "end": 450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 444,
                  "end": 451
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 453
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 455,
                      "end": 458
                    },
                    "start": 453,
                    "end": 458
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 452,
                  "end": 458
                }
              ],
              "start": 442,
              "end": 460
            },
            "start": 440,
            "end": 460
          },
          "start": 434,
          "end": 460
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 462,
        "end": 465
      },
      "expression": false,
      "start": 410,
      "end": 465
    },
    {
      "type": "EmptyStatement",
      "start": 465,
      "end": 466
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFuncLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 492
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcLit",
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 505
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 510,
                  "end": 516
                },
                "start": 507,
                "end": 516
              },
              "start": 502,
              "end": 516
            },
            "start": 500,
            "end": 516
          },
          "start": 493,
          "end": 516
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 518,
        "end": 521
      },
      "expression": false,
      "start": 468,
      "end": 521
    },
    {
      "type": "EmptyStatement",
      "start": 521,
      "end": 522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testFunctionExprC2",
          "optional": false,
          "typeAnnotation": null,
          "start": 555,
          "end": 573
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v1",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 577
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v2",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 581
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 586,
              "end": 587
            },
            "id": null,
            "generator": false,
            "start": 574,
            "end": 587
          }
        ],
        "optional": false,
        "start": 555,
        "end": 588
      },
      "directive": null,
      "start": 555,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testObjLiteral",
          "optional": false,
          "typeAnnotation": null,
          "start": 590,
          "end": 604
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "objL",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 609
          }
        ],
        "optional": false,
        "start": 590,
        "end": 610
      },
      "directive": null,
      "start": 590,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testFuncLiteral",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 627
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "funcL",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 633
          }
        ],
        "optional": false,
        "start": 612,
        "end": 634
      },
      "directive": null,
      "start": 612,
      "end": 635
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 642
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 650
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 651,
                "end": 655
              }
            ],
            "optional": false,
            "start": 645,
            "end": 656
          },
          "definite": false,
          "start": 641,
          "end": 656
        }
      ],
      "declare": false,
      "start": 637,
      "end": 657
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 676
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg0",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 681
              }
            ],
            "optional": false,
            "start": 671,
            "end": 682
          },
          "definite": false,
          "start": 662,
          "end": 682
        }
      ],
      "declare": false,
      "start": 658,
      "end": 683
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 695
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 703
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "anyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 712
              }
            ],
            "optional": false,
            "start": 698,
            "end": 713
          },
          "definite": false,
          "start": 688,
          "end": 713
        }
      ],
      "declare": false,
      "start": 684,
      "end": 714
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noError",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 732
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "variable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 743,
              "end": 746
            },
            "start": 741,
            "end": 746
          },
          "start": 733,
          "end": 746
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 756,
              "end": 759
            },
            "start": 754,
            "end": 759
          },
          "start": 748,
          "end": 759
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 761,
        "end": 764
      },
      "expression": false,
      "start": 716,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noError",
          "optional": false,
          "typeAnnotation": null,
          "start": 765,
          "end": 772
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 773,
            "end": 777
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 779,
            "end": 781
          }
        ],
        "optional": false,
        "start": 765,
        "end": 782
      },
      "directive": null,
      "start": 765,
      "end": 783
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noError",
          "optional": false,
          "typeAnnotation": null,
          "start": 784,
          "end": 791
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 801
          },
          {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 804,
              "end": 807
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 808,
              "end": 810
            },
            "start": 803,
            "end": 810
          }
        ],
        "optional": false,
        "start": 784,
        "end": 811
      },
      "directive": null,
      "start": 784,
      "end": 812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noError",
          "optional": false,
          "typeAnnotation": null,
          "start": 813,
          "end": 820
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 821,
            "end": 825
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 828,
                "end": 832
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 834,
                "end": 843
              }
            ],
            "start": 827,
            "end": 844
          }
        ],
        "optional": false,
        "start": 813,
        "end": 845
      },
      "directive": null,
      "start": 813,
      "end": 846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noError",
          "optional": false,
          "typeAnnotation": null,
          "start": 847,
          "end": 854
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 855,
            "end": 864
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "anyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 874
          }
        ],
        "optional": false,
        "start": 847,
        "end": 875
      },
      "directive": null,
      "start": 847,
      "end": 876
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
        "start": 884,
        "end": 885
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
              "start": 892,
              "end": 903
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
                  "name": "emtpyArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 916,
                      "end": 919
                    },
                    "start": 914,
                    "end": 919
                  },
                  "start": 904,
                  "end": 919
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variable",
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
                  "start": 921,
                  "end": 934
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 936,
                "end": 943
              },
              "expression": false,
              "start": 903,
              "end": 943
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 892,
            "end": 943
          }
        ],
        "start": 886,
        "end": 945
      },
      "abstract": false,
      "declare": false,
      "start": 878,
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
            "name": "newC",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 955
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 963
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 964,
                "end": 966
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 977
              }
            ],
            "start": 958,
            "end": 978
          },
          "definite": false,
          "start": 951,
          "end": 978
        }
      ],
      "declare": false,
      "start": 947,
      "end": 979
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
            "name": "newC1",
            "optional": false,
            "typeAnnotation": null,
            "start": 984,
            "end": 989
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 998,
                "end": 1000
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1006
              }
            ],
            "start": 992,
            "end": 1007
          },
          "definite": false,
          "start": 984,
          "end": 1007
        }
      ],
      "declare": false,
      "start": 980,
      "end": 1008
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
            "name": "newC2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1013,
            "end": 1018
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1025,
              "end": 1026
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1028,
                  "end": 1031
                },
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1032,
                  "end": 1034
                },
                "start": 1027,
                "end": 1034
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1036,
                "end": 1040
              }
            ],
            "start": 1021,
            "end": 1041
          },
          "definite": false,
          "start": 1013,
          "end": 1041
        }
      ],
      "declare": false,
      "start": 1009,
      "end": 1041
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 1042
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "arg0",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Null",
    "value": "null",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "anyArray",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Null",
    "value": "null",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 84,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 123,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "objL",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
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
    "value": "v",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 181,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "funcL",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 201,
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
    "value": "=>",
    "start": 205,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
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
    "value": "function",
    "start": 216,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 231,
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
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 262,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "testFunctionExprC",
    "start": 271,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "subReplace",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 343,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "testFunctionExprC2",
    "start": 352,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "eq",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 385,
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
    "value": "any",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
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
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "testObjLiteral",
    "start": 419,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "objLit",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 468,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "testFuncLiteral",
    "start": 477,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "funcLit",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 507,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "testFunctionExprC2",
    "start": 555,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 579,
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
    "value": "=>",
    "start": 583,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "testObjLiteral",
    "start": 590,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "objL",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "testFuncLiteral",
    "start": 612,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "funcL",
    "start": 628,
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
    "value": "var",
    "start": 637,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 645,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Null",
    "value": "null",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 671,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "arg0",
    "start": 677,
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
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 684,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 688,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 698,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "anyArray",
    "start": 704,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 716,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "noError",
    "start": 725,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 733,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 748,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 756,
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
    "type": "Identifier",
    "value": "noError",
    "start": 765,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Null",
    "value": "null",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "noError",
    "start": 784,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 792,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 804,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "noError",
    "start": 813,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Null",
    "value": "null",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 827,
    "end": 828
  },
  {
    "type": "Null",
    "value": "null",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 834,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "noError",
    "start": 847,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 855,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "anyArray",
    "start": 866,
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
    "type": "Keyword",
    "value": "class",
    "start": 878,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 892,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "emtpyArray",
    "start": 904,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 921,
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
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 936,
    "end": 937
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
    "value": "newC",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 958,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 968,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 980,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "newC1",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 992,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "arg0",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "newC2",
    "start": 1013,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  }
]
```
