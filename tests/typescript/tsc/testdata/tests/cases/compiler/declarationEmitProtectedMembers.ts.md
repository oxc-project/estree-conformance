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
        "start": 38,
        "end": 40
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
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
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
            "start": 47,
            "end": 67
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
              "start": 83,
              "end": 84
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 110
                      },
                      "optional": false,
                      "computed": false,
                      "start": 104,
                      "end": 110
                    },
                    "start": 97,
                    "end": 111
                  }
                ],
                "start": 87,
                "end": 117
              },
              "expression": false,
              "start": 84,
              "end": 117
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 73,
            "end": 117
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
              "start": 137,
              "end": 145
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
                  "name": "a",
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
                  "start": 146,
                  "end": 155
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 157,
                "end": 160
              },
              "expression": false,
              "start": 145,
              "end": 160
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 123,
            "end": 160
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
              "start": 179,
              "end": 187
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
                      "value": 0,
                      "raw": "0",
                      "start": 199,
                      "end": 200
                    },
                    "start": 192,
                    "end": 201
                  }
                ],
                "start": 190,
                "end": 203
              },
              "expression": false,
              "start": 187,
              "end": 203
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 165,
            "end": 203
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 209,
            "end": 237
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 262
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 282,
                        "end": 286
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 289
                      },
                      "optional": false,
                      "computed": false,
                      "start": 282,
                      "end": 289
                    },
                    "start": 275,
                    "end": 290
                  }
                ],
                "start": 265,
                "end": 296
              },
              "expression": false,
              "start": 262,
              "end": 296
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 243,
            "end": 296
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 335
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    },
                    "start": 337,
                    "end": 345
                  },
                  "start": 336,
                  "end": 345
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 347,
                "end": 350
              },
              "expression": false,
              "start": 335,
              "end": 350
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 302,
            "end": 350
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 388
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
                      "value": 0,
                      "raw": "0",
                      "start": 400,
                      "end": 401
                    },
                    "start": 393,
                    "end": 402
                  }
                ],
                "start": 391,
                "end": 404
              },
              "expression": false,
              "start": 388,
              "end": 404
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 355,
            "end": 404
          }
        ],
        "start": 41,
        "end": 406
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 406
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
        "start": 460,
        "end": 462
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 473
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 491
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 517,
                            "end": 518
                          },
                          "optional": false,
                          "computed": false,
                          "start": 511,
                          "end": 518
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 511,
                        "end": 520
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 523,
                          "end": 527
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 529
                        },
                        "optional": false,
                        "computed": false,
                        "start": 523,
                        "end": 529
                      },
                      "start": 511,
                      "end": 529
                    },
                    "start": 504,
                    "end": 530
                  }
                ],
                "start": 494,
                "end": 536
              },
              "expression": false,
              "start": 491,
              "end": 536
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 480,
            "end": 536
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 560
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 580,
                            "end": 585
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 586,
                            "end": 588
                          },
                          "optional": false,
                          "computed": false,
                          "start": 580,
                          "end": 588
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 580,
                        "end": 590
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 593,
                          "end": 597
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sx",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 598,
                          "end": 600
                        },
                        "optional": false,
                        "computed": false,
                        "start": 593,
                        "end": 600
                      },
                      "start": 580,
                      "end": 600
                    },
                    "start": 573,
                    "end": 601
                  }
                ],
                "start": 563,
                "end": 607
              },
              "expression": false,
              "start": 560,
              "end": 607
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 541,
            "end": 607
          }
        ],
        "start": 474,
        "end": 609
      },
      "abstract": false,
      "declare": false,
      "start": 454,
      "end": 609
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
        "start": 666,
        "end": 668
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 679
      },
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
              "start": 686,
              "end": 687
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 689,
                "end": 695
              },
              "start": 687,
              "end": 695
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
            "start": 686,
            "end": 696
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 710
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 712,
                "end": 718
              },
              "start": 710,
              "end": 718
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
            "start": 701,
            "end": 719
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
              "start": 724,
              "end": 725
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
                          "start": 745,
                          "end": 750
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 751,
                          "end": 752
                        },
                        "optional": false,
                        "computed": false,
                        "start": 745,
                        "end": 752
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 745,
                      "end": 754
                    },
                    "start": 738,
                    "end": 755
                  }
                ],
                "start": 728,
                "end": 761
              },
              "expression": false,
              "start": 725,
              "end": 761
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 724,
            "end": 761
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 775
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
                          "start": 795,
                          "end": 800
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 801,
                          "end": 803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 795,
                        "end": 803
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 795,
                      "end": 805
                    },
                    "start": 788,
                    "end": 806
                  }
                ],
                "start": 778,
                "end": 812
              },
              "expression": false,
              "start": 775,
              "end": 812
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 766,
            "end": 812
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 841
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
                      "value": 1,
                      "raw": "1",
                      "start": 853,
                      "end": 854
                    },
                    "start": 846,
                    "end": 855
                  }
                ],
                "start": 844,
                "end": 857
              },
              "expression": false,
              "start": 841,
              "end": 857
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 818,
            "end": 857
          }
        ],
        "start": 680,
        "end": 859
      },
      "abstract": false,
      "declare": false,
      "start": 660,
      "end": 859
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
        "start": 907,
        "end": 909
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
              "start": 916,
              "end": 927
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
                  "type": "TSParameterProperty",
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 941,
                        "end": 947
                      },
                      "start": 939,
                      "end": 947
                    },
                    "start": 938,
                    "end": 947
                  },
                  "readonly": false,
                  "static": false,
                  "start": 928,
                  "end": 947
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 959,
                    "end": 960
                  },
                  "readonly": false,
                  "static": false,
                  "start": 949,
                  "end": 960
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 962,
                "end": 965
              },
              "expression": false,
              "start": 927,
              "end": 965
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 916,
            "end": 965
          }
        ],
        "start": 910,
        "end": 967
      },
      "abstract": false,
      "declare": false,
      "start": 901,
      "end": 967
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 967
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 73,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 97,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 123,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 146,
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
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 165,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 179,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 192,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 199,
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
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 209,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 219,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 243,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 253,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 275,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 302,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 312,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "staticSetter",
    "start": 323,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 355,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 365,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "staticGetter",
    "start": 376,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 393,
    "end": 399
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 454,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 460,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 463,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 480,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 504,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 541,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 551,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 573,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "sf",
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
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 598,
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
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 660,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 666,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 669,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 701,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 738,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
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
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 766,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 788,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 818,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "staticGetter",
    "start": 829,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 846,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 901,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 916,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 928,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 949,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  }
]
```
