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
        "name": "TestWithStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 21
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
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 28,
              "end": 33
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 36,
              "end": 37
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 28,
            "end": 37
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dd",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 51
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestWithStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 73
                },
                "typeArguments": null,
                "arguments": [],
                "start": 54,
                "end": 75
              },
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "start": 76,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 54,
              "end": 81
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 42,
            "end": 82
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "X_ z_ zz",
              "raw": "\"X_ z_ zz\"",
              "start": 101,
              "end": 111
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 126
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
                      "type": "PrivateIdentifier",
                      "name": "foo",
                      "start": 137,
                      "end": 141
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 145,
                      "end": 147
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 137,
                    "end": 147
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 157
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TestWithStatics",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 193
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 174,
                                "end": 195
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "prop",
                                "start": 196,
                                "end": 201
                              },
                              "optional": false,
                              "computed": false,
                              "start": 174,
                              "end": 201
                            },
                            "directive": null,
                            "start": 174,
                            "end": 201
                          }
                        ],
                        "start": 160,
                        "end": 217
                      },
                      "expression": false,
                      "start": 157,
                      "end": 217
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 156,
                    "end": 217
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 234
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 243,
                        "end": 253
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
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 268,
                              "end": 269
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TestWithStatics",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 294,
                                          "end": 309
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 290,
                                        "end": 311
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "prop",
                                        "start": 312,
                                        "end": 317
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 290,
                                      "end": 317
                                    },
                                    "directive": null,
                                    "start": 290,
                                    "end": 317
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 344,
                                          "end": 349
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 340,
                                        "end": 351
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 352,
                                        "end": 356
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 340,
                                      "end": 356
                                    },
                                    "directive": null,
                                    "start": 340,
                                    "end": 357
                                  }
                                ],
                                "start": 272,
                                "end": 377
                              },
                              "expression": false,
                              "start": 269,
                              "end": 377
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 268,
                            "end": 377
                          }
                        ],
                        "start": 254,
                        "end": 387
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 237,
                      "end": 387
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 226,
                    "end": 387
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 405
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
                                      "name": "m",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 452,
                                      "end": 453
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
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestWithStatics",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 482,
                                                  "end": 497
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 478,
                                                "end": 499
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "prop",
                                                "start": 500,
                                                "end": 505
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 478,
                                              "end": 505
                                            },
                                            "directive": null,
                                            "start": 478,
                                            "end": 505
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 536,
                                                  "end": 541
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 532,
                                                "end": 543
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "foo",
                                                "start": 544,
                                                "end": 548
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 532,
                                              "end": 548
                                            },
                                            "directive": null,
                                            "start": 532,
                                            "end": 549
                                          }
                                        ],
                                        "start": 456,
                                        "end": 573
                                      },
                                      "expression": false,
                                      "start": 453,
                                      "end": 573
                                    },
                                    "kind": "method",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 452,
                                    "end": 573
                                  }
                                ],
                                "start": 434,
                                "end": 587
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 428,
                              "end": 587
                            },
                            "start": 421,
                            "end": 587
                          }
                        ],
                        "start": 407,
                        "end": 597
                      },
                      "expression": false,
                      "start": 405,
                      "end": 597
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 397,
                    "end": 597
                  }
                ],
                "start": 127,
                "end": 603
              },
              "abstract": false,
              "declare": false,
              "start": 115,
              "end": 603
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 93,
            "end": 603
          }
        ],
        "start": 22,
        "end": 605
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 605
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNonStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 627
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
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 634,
              "end": 639
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 642,
              "end": 643
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 634,
            "end": 643
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dd",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNonStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 671
                },
                "typeArguments": null,
                "arguments": [],
                "start": 653,
                "end": 673
              },
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "start": 674,
                "end": 679
              },
              "optional": false,
              "computed": false,
              "start": 653,
              "end": 679
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 648,
            "end": 680
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "X_ z_ zz",
              "raw": "\"X_ z_ zz\"",
              "start": 692,
              "end": 702
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 717
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
                      "type": "PrivateIdentifier",
                      "name": "foo",
                      "start": 728,
                      "end": 732
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 736,
                      "end": 738
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 728,
                    "end": 738
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 748
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TestNonStatics",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 769,
                                  "end": 783
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 765,
                                "end": 785
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "prop",
                                "start": 786,
                                "end": 791
                              },
                              "optional": false,
                              "computed": false,
                              "start": 765,
                              "end": 791
                            },
                            "directive": null,
                            "start": 765,
                            "end": 791
                          }
                        ],
                        "start": 751,
                        "end": 807
                      },
                      "expression": false,
                      "start": 748,
                      "end": 807
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 747,
                    "end": 807
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 817
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 836
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
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 851,
                              "end": 852
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TestNonStatics",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 877,
                                          "end": 891
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 873,
                                        "end": 893
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "prop",
                                        "start": 894,
                                        "end": 899
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 873,
                                      "end": 899
                                    },
                                    "directive": null,
                                    "start": 873,
                                    "end": 899
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 926,
                                          "end": 931
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 922,
                                        "end": 933
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 934,
                                        "end": 938
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 922,
                                      "end": 938
                                    },
                                    "directive": null,
                                    "start": 922,
                                    "end": 939
                                  }
                                ],
                                "start": 855,
                                "end": 959
                              },
                              "expression": false,
                              "start": 852,
                              "end": 959
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 851,
                            "end": 959
                          }
                        ],
                        "start": 837,
                        "end": 969
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 820,
                      "end": 969
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 816,
                    "end": 969
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 987
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
                                      "name": "m",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1034,
                                      "end": 1035
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
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestNonStatics",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1064,
                                                  "end": 1078
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 1060,
                                                "end": 1080
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "prop",
                                                "start": 1081,
                                                "end": 1086
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1060,
                                              "end": 1086
                                            },
                                            "directive": null,
                                            "start": 1060,
                                            "end": 1086
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1117,
                                                  "end": 1122
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 1113,
                                                "end": 1124
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "foo",
                                                "start": 1125,
                                                "end": 1129
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1113,
                                              "end": 1129
                                            },
                                            "directive": null,
                                            "start": 1113,
                                            "end": 1130
                                          }
                                        ],
                                        "start": 1038,
                                        "end": 1154
                                      },
                                      "expression": false,
                                      "start": 1035,
                                      "end": 1154
                                    },
                                    "kind": "method",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 1034,
                                    "end": 1154
                                  }
                                ],
                                "start": 1016,
                                "end": 1168
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 1010,
                              "end": 1168
                            },
                            "start": 1003,
                            "end": 1168
                          }
                        ],
                        "start": 989,
                        "end": 1178
                      },
                      "expression": false,
                      "start": 987,
                      "end": 1178
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 979,
                    "end": 1178
                  }
                ],
                "start": 718,
                "end": 1184
              },
              "abstract": false,
              "declare": false,
              "start": 706,
              "end": 1184
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 691,
            "end": 1184
          }
        ],
        "start": 628,
        "end": 1186
      },
      "abstract": false,
      "declare": false,
      "start": 607,
      "end": 1186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1186
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
    "value": "TestWithStatics",
    "start": 6,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 42,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 58,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"X_ z_ zz\"",
    "start": 101,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 145,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 178,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
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
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 226,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "InnerInner",
    "start": 243,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 268,
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
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 294,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 312,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
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
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 421,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 428,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 482,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 500,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 536,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 543,
    "end": 544
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 613,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 657,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 674,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 691,
    "end": 692
  },
  {
    "type": "String",
    "value": "\"X_ z_ zz\"",
    "start": 692,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 706,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 712,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 736,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 769,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 786,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 820,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "InnerInner",
    "start": 826,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 873,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 877,
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
    "value": ".",
    "start": 893,
    "end": 894
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 894,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 926,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 934,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 979,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1010,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
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
    "type": "Keyword",
    "value": "new",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 1064,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1113,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 1117,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  }
]
```
