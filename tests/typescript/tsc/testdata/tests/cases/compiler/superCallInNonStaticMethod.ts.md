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
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "instanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 39
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
                "start": 42,
                "end": 49
              },
              "expression": false,
              "start": 39,
              "end": 49
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 18,
            "end": 49
          }
        ],
        "start": 12,
        "end": 51
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 64
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
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
              "name": "instanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 132
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 145,
                          "end": 150
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 165
                        },
                        "optional": false,
                        "computed": false,
                        "start": 145,
                        "end": 165
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 145,
                      "end": 167
                    },
                    "directive": null,
                    "start": 145,
                    "end": 168
                  }
                ],
                "start": 135,
                "end": 174
              },
              "expression": false,
              "start": 132,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 111,
            "end": 174
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambdaInsideAnInstanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 259
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 292,
                                  "end": 297
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "instanceMethod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 298,
                                  "end": 312
                                },
                                "optional": false,
                                "computed": false,
                                "start": 292,
                                "end": 312
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 292,
                              "end": 314
                            },
                            "directive": null,
                            "start": 292,
                            "end": 315
                          }
                        ],
                        "start": 278,
                        "end": 325
                      },
                      "id": null,
                      "generator": false,
                      "start": 272,
                      "end": 325
                    },
                    "directive": null,
                    "start": 272,
                    "end": 325
                  }
                ],
                "start": 262,
                "end": 331
              },
              "expression": false,
              "start": 259,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 224,
            "end": 331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "objectLiteralInsideAnInstanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 432
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 466,
                            "end": 467
                          },
                          "value": {
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Super",
                                        "start": 493,
                                        "end": 498
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "instanceMethod",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 499,
                                        "end": 513
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 493,
                                      "end": 513
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 493,
                                    "end": 515
                                  },
                                  "directive": null,
                                  "start": 493,
                                  "end": 516
                                }
                              ],
                              "start": 475,
                              "end": 530
                            },
                            "id": null,
                            "generator": false,
                            "start": 469,
                            "end": 530
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 466,
                          "end": 530
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 545
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 547,
                                "end": 552
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "instanceMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 553,
                                "end": 567
                              },
                              "optional": false,
                              "computed": false,
                              "start": 547,
                              "end": 567
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 547,
                            "end": 569
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 544,
                          "end": 569
                        }
                      ],
                      "start": 452,
                      "end": 579
                    },
                    "start": 445,
                    "end": 580
                  }
                ],
                "start": 435,
                "end": 586
              },
              "expression": false,
              "start": 432,
              "end": 586
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 390,
            "end": 586
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 630
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 643,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 663
                        },
                        "optional": false,
                        "computed": false,
                        "start": 643,
                        "end": 663
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 643,
                      "end": 665
                    },
                    "directive": null,
                    "start": 643,
                    "end": 666
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 683,
                      "end": 684
                    },
                    "start": 676,
                    "end": 685
                  }
                ],
                "start": 633,
                "end": 691
              },
              "expression": false,
              "start": 630,
              "end": 691
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 611,
            "end": 691
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 735
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 743,
                      "end": 749
                    },
                    "start": 741,
                    "end": 749
                  },
                  "start": 736,
                  "end": 749
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 761,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 781
                        },
                        "optional": false,
                        "computed": false,
                        "start": 761,
                        "end": 781
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 761,
                      "end": 783
                    },
                    "directive": null,
                    "start": 761,
                    "end": 784
                  }
                ],
                "start": 751,
                "end": 790
              },
              "expression": false,
              "start": 735,
              "end": 790
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 716,
            "end": 790
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
              "start": 800,
              "end": 811
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
                        "start": 824,
                        "end": 829
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 824,
                      "end": 831
                    },
                    "directive": null,
                    "start": 824,
                    "end": 832
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 841,
                          "end": 846
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 847,
                          "end": 861
                        },
                        "optional": false,
                        "computed": false,
                        "start": 841,
                        "end": 861
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 841,
                      "end": 863
                    },
                    "directive": null,
                    "start": 841,
                    "end": 864
                  }
                ],
                "start": 814,
                "end": 870
              },
              "expression": false,
              "start": 811,
              "end": 870
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 800,
            "end": 870
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyInitializer",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 906
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 909,
                  "end": 914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "instanceMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 929
                },
                "optional": false,
                "computed": false,
                "start": 909,
                "end": 929
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 909,
              "end": 931
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 880,
            "end": 932
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 965
            },
            "typeAnnotation": null,
            "value": {
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 975,
                          "end": 980
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 981,
                          "end": 995
                        },
                        "optional": false,
                        "computed": false,
                        "start": 975,
                        "end": 995
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 975,
                      "end": 997
                    },
                    "directive": null,
                    "start": 975,
                    "end": 998
                  }
                ],
                "start": 974,
                "end": 1000
              },
              "id": null,
              "generator": false,
              "start": 968,
              "end": 1000
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 942,
            "end": 1001
          }
        ],
        "start": 79,
        "end": 1003
      },
      "abstract": false,
      "declare": false,
      "start": 53,
      "end": 1003
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1003
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
    "value": "Doing",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 25,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 59,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 65,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Doing",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 111,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 118,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 151,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 224,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "lambdaInsideAnInstanceMethod",
    "start": 231,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 298,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "objectLiteralInsideAnInstanceMethod",
    "start": 397,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 445,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 499,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 553,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 611,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 618,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 622,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 643,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 649,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 676,
    "end": 682
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 716,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 727,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 736,
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
    "value": "number",
    "start": 743,
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
    "value": "super",
    "start": 761,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 767,
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
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 800,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 824,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 847,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 880,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "propertyInitializer",
    "start": 887,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 909,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 915,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
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
    "type": "Keyword",
    "value": "public",
    "start": 942,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "functionProperty",
    "start": 949,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 971,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 975,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "instanceMethod",
    "start": 981,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  }
]
```
