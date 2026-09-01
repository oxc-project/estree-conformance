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
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    },
                    "start": 27,
                    "end": 35
                  },
                  "start": 26,
                  "end": 35
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 49
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 37,
                  "end": 49
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 97,
                                "end": 100
                              },
                              "start": 97,
                              "end": 102
                            },
                            "start": 95,
                            "end": 102
                          },
                          "start": 86,
                          "end": 102
                        },
                        "init": null,
                        "definite": false,
                        "start": 86,
                        "end": 102
                      }
                    ],
                    "declare": false,
                    "start": 82,
                    "end": 103
                  }
                ],
                "start": 51,
                "end": 121
              },
              "expression": false,
              "start": 25,
              "end": 121
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 15,
            "end": 121
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 137
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    },
                    "start": 147,
                    "end": 155
                  },
                  "start": 138,
                  "end": 155
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
                    "start": 160,
                    "end": 164
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 157,
                  "end": 164
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 210
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 213,
                          "end": 215
                        },
                        "definite": false,
                        "start": 201,
                        "end": 215
                      }
                    ],
                    "declare": false,
                    "start": 197,
                    "end": 216
                  }
                ],
                "start": 166,
                "end": 234
              },
              "expression": false,
              "start": 137,
              "end": 234
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 126,
            "end": 234
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 256
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    },
                    "start": 266,
                    "end": 274
                  },
                  "start": 257,
                  "end": 274
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 311
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 314,
                          "end": 316
                        },
                        "definite": false,
                        "start": 302,
                        "end": 316
                      }
                    ],
                    "declare": false,
                    "start": 298,
                    "end": 317
                  }
                ],
                "start": 276,
                "end": 335
              },
              "expression": false,
              "start": 256,
              "end": 335
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 239,
            "end": 335
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 349
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 353,
                      "end": 359
                    },
                    "start": 351,
                    "end": 359
                  },
                  "start": 350,
                  "end": 359
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 373
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 361,
                  "end": 373
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 349,
              "end": 375
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 340,
            "end": 375
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 412
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 416,
                      "end": 422
                    },
                    "start": 414,
                    "end": 422
                  },
                  "start": 413,
                  "end": 422
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 436
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 424,
                  "end": 436
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 412,
              "end": 438
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 403,
            "end": 438
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 475
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 479,
                      "end": 482
                    },
                    "start": 477,
                    "end": 482
                  },
                  "start": 476,
                  "end": 482
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 496
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 484,
                  "end": 496
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 532,
                                "end": 535
                              },
                              "start": 532,
                              "end": 537
                            },
                            "start": 530,
                            "end": 537
                          },
                          "start": 521,
                          "end": 537
                        },
                        "init": null,
                        "definite": false,
                        "start": 521,
                        "end": 537
                      }
                    ],
                    "declare": false,
                    "start": 517,
                    "end": 538
                  }
                ],
                "start": 498,
                "end": 556
              },
              "expression": false,
              "start": 475,
              "end": 556
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 466,
            "end": 556
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 571
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 583,
                      "end": 589
                    },
                    "start": 581,
                    "end": 589
                  },
                  "start": 572,
                  "end": 589
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
                    "start": 594,
                    "end": 598
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 591,
                  "end": 598
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 571,
              "end": 600
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 561,
            "end": 600
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 638
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 650,
                      "end": 656
                    },
                    "start": 648,
                    "end": 656
                  },
                  "start": 639,
                  "end": 656
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
                    "start": 661,
                    "end": 665
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 658,
                  "end": 665
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 638,
              "end": 667
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 628,
            "end": 667
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 705
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 717,
                      "end": 720
                    },
                    "start": 715,
                    "end": 720
                  },
                  "start": 706,
                  "end": 720
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
                    "start": 725,
                    "end": 729
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 722,
                  "end": 729
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 765,
                              "end": 768
                            },
                            "start": 763,
                            "end": 768
                          },
                          "start": 754,
                          "end": 768
                        },
                        "init": null,
                        "definite": false,
                        "start": 754,
                        "end": 768
                      }
                    ],
                    "declare": false,
                    "start": 750,
                    "end": 769
                  }
                ],
                "start": 731,
                "end": 787
              },
              "expression": false,
              "start": 705,
              "end": 787
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 695,
            "end": 787
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 808
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 820,
                      "end": 826
                    },
                    "start": 818,
                    "end": 826
                  },
                  "start": 809,
                  "end": 826
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 808,
              "end": 828
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 792,
            "end": 828
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 852,
              "end": 861
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 873,
                      "end": 879
                    },
                    "start": 871,
                    "end": 879
                  },
                  "start": 862,
                  "end": 879
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 861,
              "end": 881
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 845,
            "end": 881
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 914
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 926,
                      "end": 929
                    },
                    "start": 924,
                    "end": 929
                  },
                  "start": 915,
                  "end": 929
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 968,
                              "end": 971
                            },
                            "start": 966,
                            "end": 971
                          },
                          "start": 957,
                          "end": 971
                        },
                        "init": null,
                        "definite": false,
                        "start": 957,
                        "end": 971
                      }
                    ],
                    "declare": false,
                    "start": 953,
                    "end": 972
                  }
                ],
                "start": 931,
                "end": 990
              },
              "expression": false,
              "start": 914,
              "end": 990
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 898,
            "end": 990
          }
        ],
        "start": 9,
        "end": 992
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 992
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1008,
        "end": 1010
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1027
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1031,
                      "end": 1037
                    },
                    "start": 1029,
                    "end": 1037
                  },
                  "start": 1028,
                  "end": 1037
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1042,
                    "end": 1051
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1039,
                  "end": 1051
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1027,
              "end": 1053
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1017,
            "end": 1053
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1091,
              "end": 1095
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1107,
                      "end": 1113
                    },
                    "start": 1105,
                    "end": 1113
                  },
                  "start": 1096,
                  "end": 1113
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
                    "start": 1118,
                    "end": 1122
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1115,
                  "end": 1122
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1095,
              "end": 1124
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1084,
            "end": 1124
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1172
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1184,
                      "end": 1190
                    },
                    "start": 1182,
                    "end": 1190
                  },
                  "start": 1173,
                  "end": 1190
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1172,
              "end": 1192
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1155,
            "end": 1192
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1233
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1237,
                      "end": 1243
                    },
                    "start": 1235,
                    "end": 1243
                  },
                  "start": 1234,
                  "end": 1243
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1257
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1245,
                  "end": 1257
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1233,
              "end": 1259
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1224,
            "end": 1259
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1296
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1300,
                      "end": 1306
                    },
                    "start": 1298,
                    "end": 1306
                  },
                  "start": 1297,
                  "end": 1306
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1320
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1308,
                  "end": 1320
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1296,
              "end": 1322
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1287,
            "end": 1322
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1360
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1372,
                      "end": 1378
                    },
                    "start": 1370,
                    "end": 1378
                  },
                  "start": 1361,
                  "end": 1378
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
                    "start": 1383,
                    "end": 1387
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1380,
                  "end": 1387
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1360,
              "end": 1389
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1350,
            "end": 1389
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1427
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    },
                    "start": 1437,
                    "end": 1445
                  },
                  "start": 1428,
                  "end": 1445
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
                    "start": 1450,
                    "end": 1454
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1447,
                  "end": 1454
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1427,
              "end": 1456
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1417,
            "end": 1456
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1500
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1512,
                      "end": 1518
                    },
                    "start": 1510,
                    "end": 1518
                  },
                  "start": 1501,
                  "end": 1518
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1500,
              "end": 1520
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1484,
            "end": 1520
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1544,
              "end": 1553
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
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1565,
                      "end": 1571
                    },
                    "start": 1563,
                    "end": 1571
                  },
                  "start": 1554,
                  "end": 1571
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1553,
              "end": 1573
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1537,
            "end": 1573
          }
        ],
        "start": 1011,
        "end": 1587
      },
      "abstract": false,
      "declare": true,
      "start": 994,
      "end": 1587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1595,
        "end": 1597
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1611,
              "end": 1614
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1618,
                    "end": 1632
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1615,
                  "end": 1632
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1648,
                          "end": 1657
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1660,
                          "end": 1662
                        },
                        "definite": false,
                        "start": 1648,
                        "end": 1662
                      }
                    ],
                    "declare": false,
                    "start": 1644,
                    "end": 1663
                  }
                ],
                "start": 1634,
                "end": 1681
              },
              "expression": false,
              "start": 1614,
              "end": 1681
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1604,
            "end": 1681
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1703
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1720,
                          "end": 1729
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1732,
                          "end": 1734
                        },
                        "definite": false,
                        "start": 1720,
                        "end": 1734
                      }
                    ],
                    "declare": false,
                    "start": 1716,
                    "end": 1735
                  }
                ],
                "start": 1706,
                "end": 1753
              },
              "expression": false,
              "start": 1703,
              "end": 1753
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1686,
            "end": 1753
          }
        ],
        "start": 1598,
        "end": 1755
      },
      "abstract": false,
      "declare": false,
      "start": 1589,
      "end": 1755
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1755
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 15,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 239,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "fooNoError",
    "start": 246,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 257,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 268,
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
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 340,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 364,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 403,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 416,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 424,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 466,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 487,
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
    "value": "var",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 521,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 572,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 594,
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
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 628,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 639,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "public",
    "start": 695,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 706,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 750,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 754,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 765,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 792,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 799,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 809,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 820,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 845,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 852,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 862,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 898,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 905,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 915,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 957,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
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
    "type": "Identifier",
    "value": "declare",
    "start": 994,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1042,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "public",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1096,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1118,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "fooNoError",
    "start": 1162,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1173,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1224,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1248,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1287,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1311,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1350,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1361,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1372,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1383,
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
    "value": ";",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1417,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "f41",
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
    "value": "arguments",
    "start": 1428,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1447,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1450,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1484,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1491,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1501,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1537,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1544,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1554,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1565,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1589,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1595,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1611,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 1618,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1648,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1660,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1686,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "fooNoError",
    "start": 1693,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
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
    "value": "var",
    "start": 1716,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1720,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755
  }
]
```
