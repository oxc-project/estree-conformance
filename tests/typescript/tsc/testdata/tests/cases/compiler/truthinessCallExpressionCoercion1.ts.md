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
        "name": "onlyErrorsWhenTestingNonNullableFunctionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
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
                  "type": "TSBooleanKeyword",
                  "start": 70,
                  "end": 77
                },
                "start": 67,
                "end": 77
              },
              "start": 64,
              "end": 77
            },
            "start": 62,
            "end": 77
          },
          "start": 54,
          "end": 77
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 96,
                  "end": 103
                },
                "start": 93,
                "end": 103
              },
              "start": 90,
              "end": 103
            },
            "start": 88,
            "end": 103
          },
          "start": 79,
          "end": 103
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 132
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 146
                  },
                  "optional": false,
                  "computed": false,
                  "start": 135,
                  "end": 146
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required",
                    "raw": "'required'",
                    "start": 147,
                    "end": 157
                  }
                ],
                "optional": false,
                "start": 135,
                "end": 158
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 170
              },
              "start": 124,
              "end": 170
            },
            "directive": null,
            "start": 124,
            "end": 171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "optional",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 195
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 205
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 209
                  },
                  "optional": false,
                  "computed": false,
                  "start": 198,
                  "end": 209
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "'optional'",
                    "start": 210,
                    "end": 220
                  }
                ],
                "optional": false,
                "start": 198,
                "end": 221
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 233
              },
              "start": 187,
              "end": 233
            },
            "directive": null,
            "start": 187,
            "end": 234
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 260
                  },
                  "prefix": true,
                  "start": 251,
                  "end": 260
                },
                "prefix": true,
                "start": 250,
                "end": 260
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 274
                  },
                  "optional": false,
                  "computed": false,
                  "start": 263,
                  "end": 274
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "not required",
                    "raw": "'not required'",
                    "start": 275,
                    "end": 289
                  }
                ],
                "optional": false,
                "start": 263,
                "end": 290
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 302
              },
              "start": 250,
              "end": 302
            },
            "directive": null,
            "start": 250,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 327
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 319,
                "end": 329
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 339
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 343
                  },
                  "optional": false,
                  "computed": false,
                  "start": 332,
                  "end": 343
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required call",
                    "raw": "'required call'",
                    "start": 344,
                    "end": 359
                  }
                ],
                "optional": false,
                "start": 332,
                "end": 360
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 372
              },
              "start": 319,
              "end": 372
            },
            "directive": null,
            "start": 319,
            "end": 373
          }
        ],
        "start": 105,
        "end": 375
      },
      "expression": false,
      "start": 0,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 412
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 434
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
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 450
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 451,
                          "end": 457
                        },
                        "optional": false,
                        "computed": false,
                        "start": 446,
                        "end": 457
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 446,
                      "end": 459
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 462,
                      "end": 465
                    },
                    "start": 446,
                    "end": 465
                  },
                  "start": 439,
                  "end": 466
                }
              ],
              "start": 437,
              "end": 468
            },
            "expression": false,
            "start": 421,
            "end": 468
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 491
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 501
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 505
                  },
                  "optional": false,
                  "computed": false,
                  "start": 494,
                  "end": 505
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "test",
                    "raw": "'test'",
                    "start": 506,
                    "end": 512
                  }
                ],
                "optional": false,
                "start": 494,
                "end": 513
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 525
              },
              "start": 487,
              "end": 525
            },
            "directive": null,
            "start": 487,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 546
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 556
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 560
                  },
                  "optional": false,
                  "computed": false,
                  "start": 549,
                  "end": 560
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 565
                  }
                ],
                "optional": false,
                "start": 549,
                "end": 566
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 578
              },
              "start": 542,
              "end": 578
            },
            "directive": null,
            "start": 542,
            "end": 579
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 599
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 606
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 602,
                "end": 608
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 620
              },
              "start": 595,
              "end": 620
            },
            "directive": null,
            "start": 595,
            "end": 621
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 641
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 659,
                          "end": 663
                        },
                        "id": null,
                        "generator": false,
                        "start": 653,
                        "end": 663
                      }
                    ],
                    "start": 652,
                    "end": 664
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 672
                  },
                  "optional": false,
                  "computed": false,
                  "start": 652,
                  "end": 672
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 681,
                              "end": 685
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 681,
                            "end": 687
                          },
                          "directive": null,
                          "start": 681,
                          "end": 688
                        }
                      ],
                      "start": 679,
                      "end": 690
                    },
                    "id": null,
                    "generator": false,
                    "start": 673,
                    "end": 690
                  }
                ],
                "optional": false,
                "start": 652,
                "end": 691
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 711
              },
              "start": 637,
              "end": 711
            },
            "directive": null,
            "start": 637,
            "end": 712
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 735
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 753,
                          "end": 757
                        },
                        "id": null,
                        "generator": false,
                        "start": 747,
                        "end": 757
                      }
                    ],
                    "start": 746,
                    "end": 758
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 766
                  },
                  "optional": false,
                  "computed": false,
                  "start": 746,
                  "end": 766
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 771
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 777,
                              "end": 781
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 777,
                            "end": 783
                          },
                          "directive": null,
                          "start": 777,
                          "end": 783
                        }
                      ],
                      "start": 775,
                      "end": 785
                    },
                    "id": null,
                    "generator": false,
                    "start": 767,
                    "end": 785
                  }
                ],
                "optional": false,
                "start": 746,
                "end": 786
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 806
              },
              "start": 731,
              "end": 806
            },
            "directive": null,
            "start": 731,
            "end": 807
          }
        ],
        "start": 415,
        "end": 809
      },
      "expression": false,
      "start": 377,
      "end": 809
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 840
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
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 856
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 872
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 888,
                              "end": 891
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
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 903,
                                      "end": 907
                                    },
                                    "start": 896,
                                    "end": 908
                                  }
                                ],
                                "start": 894,
                                "end": 910
                              },
                              "expression": false,
                              "start": 891,
                              "end": 910
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 888,
                            "end": 910
                          }
                        ],
                        "start": 874,
                        "end": 920
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 869,
                      "end": 920
                    }
                  ],
                  "start": 859,
                  "end": 926
                },
                "definite": false,
                "start": 855,
                "end": 926
              }
            ],
            "declare": false,
            "start": 849,
            "end": 926
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 945,
                    "end": 946
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 950
                  },
                  "optional": false,
                  "computed": false,
                  "start": 945,
                  "end": 950
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 954
                },
                "optional": false,
                "computed": false,
                "start": 945,
                "end": 954
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 957,
                    "end": 964
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 965,
                    "end": 968
                  },
                  "optional": false,
                  "computed": false,
                  "start": 957,
                  "end": 968
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'",
                    "start": 969,
                    "end": 980
                  }
                ],
                "optional": false,
                "start": 957,
                "end": 981
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 984,
                "end": 993
              },
              "start": 945,
              "end": 993
            },
            "directive": null,
            "start": 945,
            "end": 994
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1011
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1015
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1010,
                  "end": 1015
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1019
                },
                "optional": false,
                "computed": false,
                "start": 1010,
                "end": 1019
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1023
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1027
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1022,
                  "end": 1027
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1031
                },
                "optional": false,
                "computed": false,
                "start": 1022,
                "end": 1031
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1043
              },
              "start": 1010,
              "end": 1043
            },
            "directive": null,
            "start": 1010,
            "end": 1044
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
                  "name": "chrome",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1054,
                  "end": 1060
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
                        "name": "platformKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1073,
                        "end": 1085
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "subtleCrypto",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1101,
                              "end": 1113
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
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "sign",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1163,
                                            "end": 1167
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
                                              "body": [],
                                              "start": 1170,
                                              "end": 1172
                                            },
                                            "expression": false,
                                            "start": 1167,
                                            "end": 1172
                                          },
                                          "method": true,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1163,
                                          "end": 1172
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "exportKey",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1194,
                                            "end": 1203
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
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true",
                                                    "start": 1215,
                                                    "end": 1219
                                                  },
                                                  "start": 1208,
                                                  "end": 1219
                                                }
                                              ],
                                              "start": 1206,
                                              "end": 1221
                                            },
                                            "expression": false,
                                            "start": 1203,
                                            "end": 1221
                                          },
                                          "method": true,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1194,
                                          "end": 1221
                                        }
                                      ],
                                      "start": 1141,
                                      "end": 1239
                                    },
                                    "start": 1134,
                                    "end": 1239
                                  }
                                ],
                                "start": 1116,
                                "end": 1253
                              },
                              "expression": false,
                              "start": 1113,
                              "end": 1253
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1101,
                            "end": 1253
                          }
                        ],
                        "start": 1087,
                        "end": 1263
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1073,
                      "end": 1263
                    }
                  ],
                  "start": 1063,
                  "end": 1269
                },
                "definite": false,
                "start": 1054,
                "end": 1269
              }
            ],
            "declare": false,
            "start": 1050,
            "end": 1269
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chrome",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1288,
                      "end": 1294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "platformKeys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1307
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1288,
                    "end": 1307
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subtleCrypto",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1320
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1288,
                  "end": 1320
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1288,
                "end": 1322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exportKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1332
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1332
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "chrome",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1344,
                            "end": 1350
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "platformKeys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1351,
                            "end": 1363
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1344,
                          "end": 1363
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "subtleCrypto",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1364,
                          "end": 1376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1344,
                        "end": 1376
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1344,
                      "end": 1378
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1379,
                      "end": 1388
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1344,
                    "end": 1388
                  },
                  "directive": null,
                  "start": 1344,
                  "end": 1388
                }
              ],
              "start": 1334,
              "end": 1394
            },
            "alternate": null,
            "start": 1284,
            "end": 1394
          }
        ],
        "start": 843,
        "end": 1396
      },
      "expression": false,
      "start": 811,
      "end": 1396
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1407
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
              "name": "maybeIsUser",
              "optional": false,
              "typeAnnotation": null,
              "start": 1414,
              "end": 1425
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1434,
                    "end": 1441
                  },
                  "start": 1431,
                  "end": 1441
                },
                "start": 1428,
                "end": 1441
              },
              "start": 1426,
              "end": 1441
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1414,
            "end": 1442
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isUser",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1454
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
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1474,
                      "end": 1478
                    },
                    "start": 1467,
                    "end": 1479
                  }
                ],
                "start": 1457,
                "end": 1485
              },
              "expression": false,
              "start": 1454,
              "end": 1485
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1448,
            "end": 1485
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1495
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1525,
                          "end": 1529
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isUser",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1530,
                          "end": 1536
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1525,
                        "end": 1536
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1539,
                            "end": 1546
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1547,
                            "end": 1550
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1539,
                          "end": 1550
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "this.isUser",
                            "raw": "'this.isUser'",
                            "start": 1551,
                            "end": 1564
                          }
                        ],
                        "optional": false,
                        "start": 1539,
                        "end": 1565
                      },
                      "alternate": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1568,
                        "end": 1577
                      },
                      "start": 1525,
                      "end": 1577
                    },
                    "directive": null,
                    "start": 1525,
                    "end": 1578
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1602,
                          "end": 1606
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "maybeIsUser",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1607,
                          "end": 1618
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1602,
                        "end": 1618
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1621,
                            "end": 1628
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1629,
                            "end": 1632
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1621,
                          "end": 1632
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "this.maybeIsUser",
                            "raw": "'this.maybeIsUser'",
                            "start": 1633,
                            "end": 1651
                          }
                        ],
                        "optional": false,
                        "start": 1621,
                        "end": 1652
                      },
                      "alternate": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1655,
                        "end": 1664
                      },
                      "start": 1602,
                      "end": 1664
                    },
                    "directive": null,
                    "start": 1602,
                    "end": 1665
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1693,
                        "end": 1697
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isUser",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1698,
                        "end": 1704
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1693,
                      "end": 1704
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1720,
                                "end": 1724
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isUser",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1725,
                                "end": 1731
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1720,
                              "end": 1731
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1720,
                            "end": 1733
                          },
                          "directive": null,
                          "start": 1720,
                          "end": 1734
                        }
                      ],
                      "start": 1706,
                      "end": 1744
                    },
                    "alternate": null,
                    "start": 1689,
                    "end": 1744
                  }
                ],
                "start": 1498,
                "end": 1750
              },
              "expression": false,
              "start": 1495,
              "end": 1750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1491,
            "end": 1750
          }
        ],
        "start": 1408,
        "end": 1752
      },
      "abstract": false,
      "declare": false,
      "start": 1398,
      "end": 1752
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1752
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
    "value": "onlyErrorsWhenTestingNonNullableFunctionType",
    "start": 9,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 93,
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
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "'required'",
    "start": 147,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 187,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "'optional'",
    "start": 210,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 224,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 252,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "'not required'",
    "start": 275,
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
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 319,
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
    "value": "?",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 332,
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
    "value": "log",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "'required call'",
    "start": 344,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 363,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "onlyErrorsWhenUnusedInBody",
    "start": 386,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 421,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 439,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
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
    "value": ">",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 506,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 516,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 549,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 611,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 656,
    "end": 658
  },
  {
    "type": "Null",
    "value": "null",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
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
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 702,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 731,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 750,
    "end": 752
  },
  {
    "type": "Null",
    "value": "null",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 759,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 777,
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
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 797,
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
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 811,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "checksPropertyAccess",
    "start": 820,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 849,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 896,
    "end": 902
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 957,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "String",
    "value": "'x.foo.bar'",
    "start": 969,
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
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 984,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1034,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "chrome",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "platformKeys",
    "start": 1073,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "subtleCrypto",
    "start": 1101,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "sign",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
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
    "value": "exportKey",
    "start": 1194,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "chrome",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "platformKeys",
    "start": 1295,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "subtleCrypto",
    "start": 1308,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "exportKey",
    "start": 1323,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "chrome",
    "start": 1344,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "platformKeys",
    "start": 1351,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "subtleCrypto",
    "start": 1364,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "exportKey",
    "start": 1379,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1398,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "maybeIsUser",
    "start": 1414,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1434,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "isUser",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1467,
    "end": 1473
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1474,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1525,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "isUser",
    "start": 1530,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1539,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "String",
    "value": "'this.isUser'",
    "start": 1551,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1568,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1602,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "maybeIsUser",
    "start": 1607,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1621,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1629,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "String",
    "value": "'this.maybeIsUser'",
    "start": 1633,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1655,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1689,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1693,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "isUser",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1720,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "isUser",
    "start": 1725,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752
  }
]
```
