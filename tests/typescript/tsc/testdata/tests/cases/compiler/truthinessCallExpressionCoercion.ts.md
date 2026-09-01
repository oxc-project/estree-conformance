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
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 123
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 125,
              "end": 141
            },
            "alternate": null,
            "start": 111,
            "end": 141
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 159
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 161,
              "end": 174
            },
            "alternate": null,
            "start": 147,
            "end": 174
          },
          {
            "type": "IfStatement",
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
                  "start": 186,
                  "end": 194
                },
                "prefix": true,
                "start": 185,
                "end": 194
              },
              "prefix": true,
              "start": 184,
              "end": 194
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 196,
              "end": 209
            },
            "alternate": null,
            "start": 180,
            "end": 209
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 227
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 219,
              "end": 229
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 231,
              "end": 244
            },
            "alternate": null,
            "start": 215,
            "end": 244
          }
        ],
        "start": 105,
        "end": 246
      },
      "expression": false,
      "start": 0,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 283
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
              "start": 301,
              "end": 305
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
                          "start": 317,
                          "end": 321
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 317,
                        "end": 328
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 317,
                      "end": 330
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 333,
                      "end": 336
                    },
                    "start": 317,
                    "end": 336
                  },
                  "start": 310,
                  "end": 337
                }
              ],
              "start": 308,
              "end": 339
            },
            "expression": false,
            "start": 292,
            "end": 339
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 353
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 381
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 385
                      },
                      "optional": false,
                      "computed": false,
                      "start": 374,
                      "end": 385
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 386,
                        "end": 392
                      }
                    ],
                    "optional": false,
                    "start": 374,
                    "end": 393
                  },
                  "directive": null,
                  "start": 374,
                  "end": 394
                }
              ],
              "start": 355,
              "end": 400
            },
            "alternate": null,
            "start": 345,
            "end": 400
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 418
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 436,
                        "end": 443
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 447
                      },
                      "optional": false,
                      "computed": false,
                      "start": 436,
                      "end": 447
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 452
                      }
                    ],
                    "optional": false,
                    "start": 436,
                    "end": 453
                  },
                  "directive": null,
                  "start": 436,
                  "end": 454
                }
              ],
              "start": 420,
              "end": 460
            },
            "alternate": null,
            "start": 410,
            "end": 460
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 474
            },
            "consequent": {
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
                      "start": 492,
                      "end": 496
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 492,
                    "end": 498
                  },
                  "directive": null,
                  "start": 492,
                  "end": 499
                }
              ],
              "start": 476,
              "end": 505
            },
            "alternate": null,
            "start": 466,
            "end": 505
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
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
                              "start": 548,
                              "end": 552
                            },
                            "id": null,
                            "generator": false,
                            "start": 542,
                            "end": 552
                          }
                        ],
                        "start": 541,
                        "end": 553
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 561
                      },
                      "optional": false,
                      "computed": false,
                      "start": 541,
                      "end": 561
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
                                  "start": 582,
                                  "end": 586
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 582,
                                "end": 588
                              },
                              "directive": null,
                              "start": 582,
                              "end": 589
                            }
                          ],
                          "start": 568,
                          "end": 599
                        },
                        "id": null,
                        "generator": false,
                        "start": 562,
                        "end": 599
                      }
                    ],
                    "optional": false,
                    "start": 541,
                    "end": 600
                  },
                  "directive": null,
                  "start": 541,
                  "end": 601
                }
              ],
              "start": 525,
              "end": 607
            },
            "alternate": null,
            "start": 515,
            "end": 607
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 625
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
                              "start": 653,
                              "end": 657
                            },
                            "id": null,
                            "generator": false,
                            "start": 647,
                            "end": 657
                          }
                        ],
                        "start": 646,
                        "end": 658
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 659,
                        "end": 666
                      },
                      "optional": false,
                      "computed": false,
                      "start": 646,
                      "end": 666
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
                            "start": 667,
                            "end": 671
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
                                  "start": 689,
                                  "end": 693
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 689,
                                "end": 695
                              },
                              "directive": null,
                              "start": 689,
                              "end": 696
                            }
                          ],
                          "start": 675,
                          "end": 706
                        },
                        "id": null,
                        "generator": false,
                        "start": 667,
                        "end": 706
                      }
                    ],
                    "optional": false,
                    "start": 646,
                    "end": 707
                  },
                  "directive": null,
                  "start": 646,
                  "end": 708
                }
              ],
              "start": 627,
              "end": 714
            },
            "alternate": null,
            "start": 617,
            "end": 714
          }
        ],
        "start": 286,
        "end": 716
      },
      "expression": false,
      "start": 248,
      "end": 716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 747
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
                  "start": 762,
                  "end": 763
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
                        "start": 776,
                        "end": 779
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
                              "start": 795,
                              "end": 798
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
                                      "start": 810,
                                      "end": 814
                                    },
                                    "start": 803,
                                    "end": 815
                                  }
                                ],
                                "start": 801,
                                "end": 817
                              },
                              "expression": false,
                              "start": 798,
                              "end": 817
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 795,
                            "end": 817
                          }
                        ],
                        "start": 781,
                        "end": 827
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 776,
                      "end": 827
                    }
                  ],
                  "start": 766,
                  "end": 833
                },
                "definite": false,
                "start": 762,
                "end": 833
              }
            ],
            "declare": false,
            "start": 756,
            "end": 833
          },
          {
            "type": "IfStatement",
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
                  "start": 843,
                  "end": 844
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 848
                },
                "optional": false,
                "computed": false,
                "start": 843,
                "end": 848
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 852
              },
              "optional": false,
              "computed": false,
              "start": 843,
              "end": 852
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 854,
              "end": 870
            },
            "alternate": null,
            "start": 839,
            "end": 870
          },
          {
            "type": "IfStatement",
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
                  "start": 880,
                  "end": 881
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 882,
                  "end": 885
                },
                "optional": false,
                "computed": false,
                "start": 880,
                "end": 885
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 889
              },
              "optional": false,
              "computed": false,
              "start": 880,
              "end": 889
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 908
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 909,
                        "end": 912
                      },
                      "optional": false,
                      "computed": false,
                      "start": 907,
                      "end": 912
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 916
                    },
                    "optional": false,
                    "computed": false,
                    "start": 907,
                    "end": 916
                  },
                  "directive": null,
                  "start": 907,
                  "end": 917
                }
              ],
              "start": 891,
              "end": 923
            },
            "alternate": null,
            "start": 876,
            "end": 923
          }
        ],
        "start": 750,
        "end": 925
      },
      "expression": false,
      "start": 718,
      "end": 925
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
        "start": 933,
        "end": 936
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
              "start": 943,
              "end": 954
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
                    "start": 963,
                    "end": 970
                  },
                  "start": 960,
                  "end": 970
                },
                "start": 957,
                "end": 970
              },
              "start": 955,
              "end": 970
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
            "start": 943,
            "end": 971
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
              "start": 977,
              "end": 983
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
                      "start": 1003,
                      "end": 1007
                    },
                    "start": 996,
                    "end": 1008
                  }
                ],
                "start": 986,
                "end": 1014
              },
              "expression": false,
              "start": 983,
              "end": 1014
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 977,
            "end": 1014
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
              "start": 1020,
              "end": 1024
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
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1041,
                        "end": 1045
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isUser",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1052
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1041,
                      "end": 1052
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1054,
                      "end": 1074
                    },
                    "alternate": null,
                    "start": 1037,
                    "end": 1074
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1088,
                        "end": 1092
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeIsUser",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1093,
                        "end": 1104
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1088,
                      "end": 1104
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1106,
                      "end": 1123
                    },
                    "alternate": null,
                    "start": 1084,
                    "end": 1123
                  }
                ],
                "start": 1027,
                "end": 1129
              },
              "expression": false,
              "start": 1024,
              "end": 1129
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1020,
            "end": 1129
          }
        ],
        "start": 937,
        "end": 1131
      },
      "abstract": false,
      "declare": false,
      "start": 927,
      "end": 1131
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1206
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stats",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StatsBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1223
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1224,
                    "end": 1227
                  }
                ],
                "start": 1223,
                "end": 1228
              },
              "start": 1214,
              "end": 1228
            },
            "start": 1212,
            "end": 1228
          },
          "start": 1207,
          "end": 1228
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "stats",
                "optional": false,
                "typeAnnotation": null,
                "start": 1240,
                "end": 1245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1257
              },
              "optional": false,
              "computed": false,
              "start": 1240,
              "end": 1257
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1283
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1284,
                        "end": 1287
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1276,
                      "end": 1287
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "[Directory] ",
                              "cooked": "[Directory] "
                            },
                            "tail": false,
                            "start": 1288,
                            "end": 1303
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1314,
                            "end": 1316
                          }
                        ],
                        "expressions": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stats",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1303,
                              "end": 1308
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ctime",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1309,
                              "end": 1314
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1303,
                            "end": 1314
                          }
                        ],
                        "start": 1288,
                        "end": 1316
                      }
                    ],
                    "optional": false,
                    "start": 1276,
                    "end": 1317
                  },
                  "directive": null,
                  "start": 1276,
                  "end": 1317
                }
              ],
              "start": 1259,
              "end": 1323
            },
            "alternate": null,
            "start": 1236,
            "end": 1323
          }
        ],
        "start": 1230,
        "end": 1325
      },
      "expression": false,
      "start": 1196,
      "end": 1325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1337
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 1341,
                "end": 1347
              },
              "typeArguments": null,
              "start": 1341,
              "end": 1347
            },
            "start": 1339,
            "end": 1347
          },
          "start": 1338,
          "end": 1347
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 1352,
                "end": 1358
              },
              "typeArguments": null,
              "start": 1352,
              "end": 1358
            },
            "start": 1350,
            "end": 1358
          },
          "start": 1349,
          "end": 1358
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1370,
                  "end": 1371
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stats",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1377
                },
                "optional": false,
                "computed": false,
                "start": 1370,
                "end": 1377
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1389
              },
              "optional": false,
              "computed": false,
              "start": 1370,
              "end": 1389
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1408,
                          "end": 1409
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1410,
                          "end": 1415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1408,
                        "end": 1415
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1427
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1408,
                      "end": 1427
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1408,
                    "end": 1429
                  },
                  "directive": null,
                  "start": 1408,
                  "end": 1430
                }
              ],
              "start": 1391,
              "end": 1437
            },
            "alternate": null,
            "start": 1366,
            "end": 1437
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1446,
                  "end": 1447
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stats",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1453
                },
                "optional": false,
                "computed": false,
                "start": 1446,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1465
              },
              "optional": false,
              "computed": false,
              "start": 1446,
              "end": 1465
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1483,
                          "end": 1484
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1485,
                          "end": 1490
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1483,
                        "end": 1490
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1491,
                        "end": 1502
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1483,
                      "end": 1502
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1483,
                    "end": 1504
                  },
                  "directive": null,
                  "start": 1483,
                  "end": 1505
                }
              ],
              "start": 1467,
              "end": 1511
            },
            "alternate": null,
            "start": 1442,
            "end": 1511
          }
        ],
        "start": 1360,
        "end": 1513
      },
      "expression": false,
      "start": 1327,
      "end": 1513
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StatsBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1535
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
              "start": 1536,
              "end": 1537
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1536,
            "end": 1537
          }
        ],
        "start": 1535,
        "end": 1538
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDirectory",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1556
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1560,
                "end": 1567
              },
              "start": 1558,
              "end": 1567
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1545,
            "end": 1568
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctime",
              "optional": false,
              "typeAnnotation": null,
              "start": 1573,
              "end": 1578
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1580,
                "end": 1586
              },
              "start": 1578,
              "end": 1586
            },
            "accessibility": null,
            "static": false,
            "start": 1573,
            "end": 1587
          }
        ],
        "start": 1539,
        "end": 1589
      },
      "declare": false,
      "start": 1516,
      "end": 1589
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 1601,
        "end": 1607
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
              "name": "stats",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1619
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StatsBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1621,
                  "end": 1630
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1631,
                      "end": 1634
                    }
                  ],
                  "start": 1630,
                  "end": 1635
                },
                "start": 1621,
                "end": 1635
              },
              "start": 1619,
              "end": 1635
            },
            "accessibility": null,
            "static": false,
            "start": 1614,
            "end": 1636
          }
        ],
        "start": 1608,
        "end": 1638
      },
      "declare": false,
      "start": 1591,
      "end": 1638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1638
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
    "type": "Keyword",
    "value": "if",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 151,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 186,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 219,
    "end": 227
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
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 248,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "onlyErrorsWhenUnusedInBody",
    "start": 257,
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
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 292,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 310,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "if",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 349,
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
    "type": "Identifier",
    "value": "console",
    "start": 374,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 386,
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
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 414,
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
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 436,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 448,
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
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 545,
    "end": 547
  },
  {
    "type": "Null",
    "value": "null",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 621,
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
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 650,
    "end": 652
  },
  {
    "type": "Null",
    "value": "null",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 659,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "function",
    "start": 718,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "checksPropertyAccess",
    "start": 727,
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
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 776,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
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
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 803,
    "end": 809
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 839,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
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
    "value": "foo",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 913,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 927,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "maybeIsUser",
    "start": 943,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 960,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 963,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "isUser",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1020,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1041,
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
    "value": "isUser",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1088,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "maybeIsUser",
    "start": 1093,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1196,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1207,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "StatsBase",
    "start": 1214,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1224,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1240,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 1246,
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
    "value": "{",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1276,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Template",
    "value": "`[Directory] ${",
    "start": 1288,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "ctime",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1314,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 1341,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1372,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 1378,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1410,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 1416,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1448,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 1454,
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
    "type": "Identifier",
    "value": "a",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1485,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 1491,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1516,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "StatsBase",
    "start": 1526,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 1545,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1560,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "ctime",
    "start": 1573,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1591,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 1614,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "StatsBase",
    "start": 1621,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1631,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1637,
    "end": 1638
  }
]
```
