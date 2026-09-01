__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 32
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
                    "start": 33,
                    "end": 34
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 33,
                  "end": 34
                }
              ],
              "start": 32,
              "end": 35
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        },
                        "start": 52,
                        "end": 60
                      },
                      "start": 47,
                      "end": 60
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    },
                    "start": 61,
                    "end": 64
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 46,
                  "end": 65
                }
              ],
              "start": 36,
              "end": 71
            },
            "declare": false,
            "start": 19,
            "end": 71
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Equals",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 93
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
                    "start": 94,
                    "end": 95
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 94,
                  "end": 95
                }
              ],
              "start": 93,
              "end": 96
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
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 113
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 121,
                            "end": 122
                          },
                          "typeArguments": null,
                          "start": 121,
                          "end": 122
                        },
                        "start": 119,
                        "end": 122
                      },
                      "start": 114,
                      "end": 122
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 125,
                      "end": 132
                    },
                    "start": 123,
                    "end": 132
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 133
                }
              ],
              "start": 97,
              "end": 139
            },
            "declare": false,
            "start": 77,
            "end": 139
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 157
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 158,
              "end": 165
            },
            "abstract": false,
            "declare": false,
            "start": 145,
            "end": 165
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 181
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
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
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 213
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
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 224
                            },
                            "typeArguments": null,
                            "start": 220,
                            "end": 224
                          },
                          "start": 218,
                          "end": 224
                        },
                        "start": 214,
                        "end": 224
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 227,
                        "end": 234
                      },
                      "start": 225,
                      "end": 234
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "ThisExpression",
                              "start": 253,
                              "end": 257
                            },
                            "operator": "===",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 266
                            },
                            "start": 253,
                            "end": 266
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 275,
                              "end": 279
                            },
                            "start": 268,
                            "end": 280
                          },
                          "alternate": null,
                          "start": 249,
                          "end": 280
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 299,
                                    "end": 303
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 316
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 299,
                                  "end": 316
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 299,
                                "end": 318
                              },
                              "operator": "&&",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 326
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 327,
                                    "end": 339
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 322,
                                  "end": 339
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 322,
                                "end": 341
                              },
                              "start": 299,
                              "end": 341
                            },
                            "prefix": true,
                            "start": 297,
                            "end": 342
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 351,
                              "end": 356
                            },
                            "start": 344,
                            "end": 357
                          },
                          "alternate": null,
                          "start": 293,
                          "end": 357
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
                                "name": "propCount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 374,
                                "end": 383
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 386,
                                    "end": 390
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPropertyCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 391,
                                    "end": 407
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 386,
                                  "end": 407
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 386,
                                "end": 409
                              },
                              "definite": false,
                              "start": 374,
                              "end": 409
                            }
                          ],
                          "declare": false,
                          "start": 370,
                          "end": 410
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "propCount",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 427,
                              "end": 436
                            },
                            "operator": "!==",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 441,
                                  "end": 445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getPropertyCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 446,
                                  "end": 462
                                },
                                "optional": false,
                                "computed": false,
                                "start": 441,
                                "end": 462
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 441,
                              "end": 464
                            },
                            "start": 427,
                            "end": 464
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 473,
                              "end": 478
                            },
                            "start": 466,
                            "end": 479
                          },
                          "alternate": null,
                          "start": 423,
                          "end": 479
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
                                "name": "sigCount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 496,
                                "end": 504
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 507,
                                    "end": 511
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getSignatureCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 512,
                                    "end": 529
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 507,
                                  "end": 529
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 507,
                                "end": 531
                              },
                              "definite": false,
                              "start": 496,
                              "end": 531
                            }
                          ],
                          "declare": false,
                          "start": 492,
                          "end": 532
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sigCount",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 557
                            },
                            "operator": "!==",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 562,
                                  "end": 566
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getSignatureCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 567,
                                  "end": 584
                                },
                                "optional": false,
                                "computed": false,
                                "start": 562,
                                "end": 584
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 562,
                              "end": 586
                            },
                            "start": 549,
                            "end": 586
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 595,
                              "end": 600
                            },
                            "start": 588,
                            "end": 601
                          },
                          "alternate": null,
                          "start": 545,
                          "end": 601
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "propCount",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 618,
                            "end": 627
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ForStatement",
                                "init": {
                                  "type": "VariableDeclaration",
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 656,
                                        "end": 657
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 660,
                                        "end": 661
                                      },
                                      "definite": false,
                                      "start": 656,
                                      "end": 661
                                    }
                                  ],
                                  "declare": false,
                                  "start": 652,
                                  "end": 661
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 663,
                                    "end": 664
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "propCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 667,
                                    "end": 676
                                  },
                                  "start": 663,
                                  "end": 676
                                },
                                "update": {
                                  "type": "UpdateExpression",
                                  "operator": "++",
                                  "prefix": false,
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 678,
                                    "end": 679
                                  },
                                  "start": 678,
                                  "end": 681
                                },
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
                                            "name": "thisProp",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 709,
                                            "end": 717
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 720,
                                                "end": 724
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getProperty",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 725,
                                                "end": 736
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 720,
                                              "end": 736
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 737,
                                                "end": 738
                                              }
                                            ],
                                            "optional": false,
                                            "start": 720,
                                            "end": 739
                                          },
                                          "definite": false,
                                          "start": 709,
                                          "end": 739
                                        }
                                      ],
                                      "declare": false,
                                      "start": 705,
                                      "end": 740
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
                                            "name": "thatProp",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 765,
                                            "end": 773
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "that",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 776,
                                                "end": 780
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPropertyByName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 781,
                                                "end": 798
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 776,
                                              "end": 798
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 799,
                                                  "end": 807
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 808,
                                                  "end": 812
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 799,
                                                "end": 812
                                              }
                                            ],
                                            "optional": false,
                                            "start": 776,
                                            "end": 813
                                          },
                                          "definite": false,
                                          "start": 765,
                                          "end": 813
                                        }
                                      ],
                                      "declare": false,
                                      "start": 761,
                                      "end": 814
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "thatProp",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 841,
                                              "end": 849
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 853,
                                                  "end": 861
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 862,
                                                  "end": 867
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 853,
                                                "end": 867
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 872,
                                                  "end": 880
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 881,
                                                  "end": 886
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 872,
                                                "end": 886
                                              },
                                              "start": 853,
                                              "end": 886
                                            },
                                            "start": 841,
                                            "end": 886
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 890,
                                                  "end": 898
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 899,
                                                  "end": 903
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 890,
                                                "end": 903
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "equals",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 904,
                                                "end": 910
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 890,
                                              "end": 910
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 911,
                                                  "end": 919
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 920,
                                                  "end": 924
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 911,
                                                "end": 924
                                              }
                                            ],
                                            "optional": false,
                                            "start": 890,
                                            "end": 925
                                          },
                                          "start": 841,
                                          "end": 925
                                        },
                                        "prefix": true,
                                        "start": 839,
                                        "end": 926
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 935,
                                          "end": 940
                                        },
                                        "start": 928,
                                        "end": 941
                                      },
                                      "alternate": null,
                                      "start": 835,
                                      "end": 941
                                    }
                                  ],
                                  "start": 683,
                                  "end": 959
                                },
                                "start": 647,
                                "end": 959
                              }
                            ],
                            "start": 629,
                            "end": 973
                          },
                          "alternate": null,
                          "start": 614,
                          "end": 973
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sigCount",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 990,
                            "end": 998
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "setEquals",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1023,
                                      "end": 1032
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1033,
                                            "end": 1037
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1038,
                                            "end": 1051
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1033,
                                          "end": 1051
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1033,
                                        "end": 1053
                                      },
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "that",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1055,
                                            "end": 1059
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1060,
                                            "end": 1073
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1055,
                                          "end": 1073
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1055,
                                        "end": 1075
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1023,
                                    "end": 1076
                                  },
                                  "prefix": true,
                                  "start": 1022,
                                  "end": 1076
                                },
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 1085,
                                    "end": 1090
                                  },
                                  "start": 1078,
                                  "end": 1091
                                },
                                "alternate": null,
                                "start": 1018,
                                "end": 1091
                              }
                            ],
                            "start": 1000,
                            "end": 1105
                          },
                          "alternate": null,
                          "start": 986,
                          "end": 1105
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1125,
                            "end": 1129
                          },
                          "start": 1118,
                          "end": 1130
                        }
                      ],
                      "start": 235,
                      "end": 1140
                    },
                    "expression": false,
                    "start": 213,
                    "end": 1140
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 207,
                  "end": 1140
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperties",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1162
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
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Property",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1174
                          },
                          "typeArguments": null,
                          "start": 1166,
                          "end": 1174
                        },
                        "start": 1166,
                        "end": 1176
                      },
                      "start": 1164,
                      "end": 1176
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 1198,
                            "end": 1200
                          },
                          "start": 1191,
                          "end": 1201
                        }
                      ],
                      "start": 1177,
                      "end": 1211
                    },
                    "expression": false,
                    "start": 1162,
                    "end": 1211
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1149,
                  "end": 1211
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1231
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1239,
                            "end": 1245
                          },
                          "start": 1237,
                          "end": 1245
                        },
                        "start": 1232,
                        "end": 1245
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1248,
                          "end": 1256
                        },
                        "typeArguments": null,
                        "start": 1248,
                        "end": 1256
                      },
                      "start": 1246,
                      "end": 1256
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
                            "start": 1278,
                            "end": 1287
                          },
                          "start": 1271,
                          "end": 1288
                        }
                      ],
                      "start": 1257,
                      "end": 1298
                    },
                    "expression": false,
                    "start": 1231,
                    "end": 1298
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1220,
                  "end": 1298
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPropertyByName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1307,
                    "end": 1324
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1331,
                            "end": 1337
                          },
                          "start": 1329,
                          "end": 1337
                        },
                        "start": 1325,
                        "end": 1337
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1340,
                          "end": 1348
                        },
                        "typeArguments": null,
                        "start": 1340,
                        "end": 1348
                      },
                      "start": 1338,
                      "end": 1348
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
                            "start": 1370,
                            "end": 1379
                          },
                          "start": 1363,
                          "end": 1380
                        }
                      ],
                      "start": 1349,
                      "end": 1390
                    },
                    "expression": false,
                    "start": 1324,
                    "end": 1390
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1307,
                  "end": 1390
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPropertyCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1415
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
                        "type": "TSNumberKeyword",
                        "start": 1419,
                        "end": 1425
                      },
                      "start": 1417,
                      "end": 1425
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1447,
                            "end": 1448
                          },
                          "start": 1440,
                          "end": 1449
                        }
                      ],
                      "start": 1426,
                      "end": 1459
                    },
                    "expression": false,
                    "start": 1415,
                    "end": 1459
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1399,
                  "end": 1459
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSignature",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1468,
                    "end": 1480
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1488,
                            "end": 1494
                          },
                          "start": 1486,
                          "end": 1494
                        },
                        "start": 1481,
                        "end": 1494
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Signature",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1506
                        },
                        "typeArguments": null,
                        "start": 1497,
                        "end": 1506
                      },
                      "start": 1495,
                      "end": 1506
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
                            "start": 1528,
                            "end": 1537
                          },
                          "start": 1521,
                          "end": 1538
                        }
                      ],
                      "start": 1507,
                      "end": 1548
                    },
                    "expression": false,
                    "start": 1480,
                    "end": 1548
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1468,
                  "end": 1548
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSignatureCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1557,
                    "end": 1574
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
                        "type": "TSNumberKeyword",
                        "start": 1578,
                        "end": 1584
                      },
                      "start": 1576,
                      "end": 1584
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1606,
                            "end": 1607
                          },
                          "start": 1599,
                          "end": 1608
                        }
                      ],
                      "start": 1585,
                      "end": 1618
                    },
                    "expression": false,
                    "start": 1574,
                    "end": 1618
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1557,
                  "end": 1618
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSignatures",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1627,
                    "end": 1640
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
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Signature",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1644,
                            "end": 1653
                          },
                          "typeArguments": null,
                          "start": 1644,
                          "end": 1653
                        },
                        "start": 1644,
                        "end": 1655
                      },
                      "start": 1642,
                      "end": 1655
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 1677,
                            "end": 1679
                          },
                          "start": 1670,
                          "end": 1680
                        }
                      ],
                      "start": 1656,
                      "end": 1690
                    },
                    "expression": false,
                    "start": 1640,
                    "end": 1690
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1627,
                  "end": 1690
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1699,
                    "end": 1710
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
                        "type": "TSBooleanKeyword",
                        "start": 1714,
                        "end": 1721
                      },
                      "start": 1712,
                      "end": 1721
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1743,
                            "end": 1748
                          },
                          "start": 1736,
                          "end": 1749
                        }
                      ],
                      "start": 1722,
                      "end": 1759
                    },
                    "expression": false,
                    "start": 1710,
                    "end": 1759
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1699,
                  "end": 1759
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isObjectType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1768,
                    "end": 1780
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
                        "type": "TSBooleanKeyword",
                        "start": 1784,
                        "end": 1791
                      },
                      "start": 1782,
                      "end": 1791
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1813,
                            "end": 1818
                          },
                          "start": 1806,
                          "end": 1819
                        }
                      ],
                      "start": 1792,
                      "end": 1829
                    },
                    "expression": false,
                    "start": 1780,
                    "end": 1829
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1768,
                  "end": 1829
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isTypeParameter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1838,
                    "end": 1853
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
                        "type": "TSBooleanKeyword",
                        "start": 1857,
                        "end": 1864
                      },
                      "start": 1855,
                      "end": 1864
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1886,
                            "end": 1891
                          },
                          "start": 1879,
                          "end": 1892
                        }
                      ],
                      "start": 1865,
                      "end": 1902
                    },
                    "expression": false,
                    "start": 1853,
                    "end": 1902
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1838,
                  "end": 1902
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSubTypeOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1911,
                    "end": 1922
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1929,
                              "end": 1933
                            },
                            "typeArguments": null,
                            "start": 1929,
                            "end": 1933
                          },
                          "start": 1927,
                          "end": 1933
                        },
                        "start": 1923,
                        "end": 1933
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1935,
                      "end": 1946
                    },
                    "expression": false,
                    "start": 1922,
                    "end": 1946
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1911,
                  "end": 1946
                }
              ],
              "start": 197,
              "end": 1952
            },
            "abstract": false,
            "declare": false,
            "start": 171,
            "end": 1952
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1972
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1981,
              "end": 1987
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
                    "start": 1998,
                    "end": 2009
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
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2023,
                              "end": 2029
                            },
                            "start": 2021,
                            "end": 2029
                          },
                          "start": 2017,
                          "end": 2029
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2010,
                        "end": 2029
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2044,
                                "end": 2048
                              },
                              "typeArguments": null,
                              "start": 2044,
                              "end": 2048
                            },
                            "start": 2042,
                            "end": 2048
                          },
                          "start": 2038,
                          "end": 2048
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2031,
                        "end": 2048
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PropertyFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2064,
                                "end": 2077
                              },
                              "typeArguments": null,
                              "start": 2064,
                              "end": 2077
                            },
                            "start": 2062,
                            "end": 2077
                          },
                          "start": 2057,
                          "end": 2077
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2050,
                        "end": 2077
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
                              "type": "Super",
                              "start": 2093,
                              "end": 2098
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2093,
                            "end": 2100
                          },
                          "directive": null,
                          "start": 2093,
                          "end": 2101
                        }
                      ],
                      "start": 2079,
                      "end": 2111
                    },
                    "expression": false,
                    "start": 2009,
                    "end": 2111
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1998,
                  "end": 2111
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2120,
                    "end": 2126
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Property",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2134,
                              "end": 2142
                            },
                            "typeArguments": null,
                            "start": 2134,
                            "end": 2142
                          },
                          "start": 2132,
                          "end": 2142
                        },
                        "start": 2127,
                        "end": 2142
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2145,
                        "end": 2152
                      },
                      "start": 2143,
                      "end": 2152
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2174,
                                    "end": 2178
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2179,
                                    "end": 2183
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2174,
                                  "end": 2183
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2188,
                                    "end": 2193
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2194,
                                    "end": 2198
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2188,
                                  "end": 2198
                                },
                                "start": 2174,
                                "end": 2198
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2218,
                                    "end": 2222
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2223,
                                    "end": 2228
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2218,
                                  "end": 2228
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2233,
                                    "end": 2238
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2239,
                                    "end": 2244
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2233,
                                  "end": 2244
                                },
                                "start": 2218,
                                "end": 2244
                              },
                              "start": 2174,
                              "end": 2244
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2264,
                                    "end": 2268
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2269,
                                    "end": 2273
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2264,
                                  "end": 2273
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2274,
                                  "end": 2280
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2264,
                                "end": 2280
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2281,
                                    "end": 2286
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2287,
                                    "end": 2291
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2281,
                                  "end": 2291
                                }
                              ],
                              "optional": false,
                              "start": 2264,
                              "end": 2292
                            },
                            "start": 2174,
                            "end": 2292
                          },
                          "start": 2167,
                          "end": 2293
                        }
                      ],
                      "start": 2153,
                      "end": 2303
                    },
                    "expression": false,
                    "start": 2126,
                    "end": 2303
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2120,
                  "end": 2303
                }
              ],
              "start": 1988,
              "end": 2309
            },
            "abstract": false,
            "declare": false,
            "start": 1958,
            "end": 2309
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropertyFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 2320,
              "end": 2333
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2344,
                    "end": 2352
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2355,
                    "end": 2356
                  },
                  "computed": false,
                  "start": 2344,
                  "end": 2356
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2366,
                    "end": 2373
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2376,
                    "end": 2377
                  },
                  "computed": false,
                  "start": 2366,
                  "end": 2377
                }
              ],
              "start": 2334,
              "end": 2383
            },
            "const": false,
            "declare": false,
            "start": 2315,
            "end": 2383
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Signature",
              "optional": false,
              "typeAnnotation": null,
              "start": 2395,
              "end": 2404
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 2413,
              "end": 2419
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
                    "start": 2430,
                    "end": 2441
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
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typeParameters",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TypeParameter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2465,
                                  "end": 2478
                                },
                                "typeArguments": null,
                                "start": 2465,
                                "end": 2478
                              },
                              "start": 2465,
                              "end": 2480
                            },
                            "start": 2463,
                            "end": 2480
                          },
                          "start": 2449,
                          "end": 2480
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2442,
                        "end": 2480
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parameters",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2501,
                                  "end": 2510
                                },
                                "typeArguments": null,
                                "start": 2501,
                                "end": 2510
                              },
                              "start": 2501,
                              "end": 2512
                            },
                            "start": 2499,
                            "end": 2512
                          },
                          "start": 2489,
                          "end": 2512
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2482,
                        "end": 2512
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "returnType",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2533,
                                "end": 2537
                              },
                              "typeArguments": null,
                              "start": 2533,
                              "end": 2537
                            },
                            "start": 2531,
                            "end": 2537
                          },
                          "start": 2521,
                          "end": 2537
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2514,
                        "end": 2537
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
                              "type": "Super",
                              "start": 2553,
                              "end": 2558
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2553,
                            "end": 2560
                          },
                          "directive": null,
                          "start": 2553,
                          "end": 2561
                        }
                      ],
                      "start": 2539,
                      "end": 2571
                    },
                    "expression": false,
                    "start": 2441,
                    "end": 2571
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2430,
                  "end": 2571
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equalsNoReturn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2580,
                    "end": 2594
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signature",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2602,
                              "end": 2611
                            },
                            "typeArguments": null,
                            "start": 2602,
                            "end": 2611
                          },
                          "start": 2600,
                          "end": 2611
                        },
                        "start": 2595,
                        "end": 2611
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2614,
                        "end": 2621
                      },
                      "start": 2612,
                      "end": 2621
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2643,
                                        "end": 2647
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2648,
                                        "end": 2658
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2643,
                                      "end": 2658
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2659,
                                      "end": 2665
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2643,
                                    "end": 2665
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2670,
                                        "end": 2675
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2676,
                                        "end": 2686
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2670,
                                      "end": 2686
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2687,
                                      "end": 2693
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2670,
                                    "end": 2693
                                  },
                                  "start": 2643,
                                  "end": 2693
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2713,
                                        "end": 2717
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2718,
                                        "end": 2732
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2713,
                                      "end": 2732
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2733,
                                      "end": 2739
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2713,
                                    "end": 2739
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2744,
                                        "end": 2749
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2750,
                                        "end": 2764
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2744,
                                      "end": 2764
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2765,
                                      "end": 2771
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2744,
                                    "end": 2771
                                  },
                                  "start": 2713,
                                  "end": 2771
                                },
                                "start": 2643,
                                "end": 2771
                              },
                              "operator": "&&",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arrayEquals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2791,
                                  "end": 2802
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2803,
                                      "end": 2807
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2808,
                                      "end": 2818
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2803,
                                    "end": 2818
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2820,
                                      "end": 2825
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2826,
                                      "end": 2836
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2820,
                                    "end": 2836
                                  }
                                ],
                                "optional": false,
                                "start": 2791,
                                "end": 2837
                              },
                              "start": 2643,
                              "end": 2837
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arrayEquals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2857,
                                "end": 2868
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2869,
                                    "end": 2873
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2874,
                                    "end": 2888
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2869,
                                  "end": 2888
                                },
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2890,
                                    "end": 2895
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2896,
                                    "end": 2910
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2890,
                                  "end": 2910
                                }
                              ],
                              "optional": false,
                              "start": 2857,
                              "end": 2911
                            },
                            "start": 2643,
                            "end": 2911
                          },
                          "start": 2636,
                          "end": 2912
                        }
                      ],
                      "start": 2622,
                      "end": 2922
                    },
                    "expression": false,
                    "start": 2594,
                    "end": 2922
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2580,
                  "end": 2922
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2931,
                    "end": 2937
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signature",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2945,
                              "end": 2954
                            },
                            "typeArguments": null,
                            "start": 2945,
                            "end": 2954
                          },
                          "start": 2943,
                          "end": 2954
                        },
                        "start": 2938,
                        "end": 2954
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2957,
                        "end": 2964
                      },
                      "start": 2955,
                      "end": 2964
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2986,
                                  "end": 2990
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equalsNoReturn",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2991,
                                  "end": 3005
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2986,
                                "end": 3005
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3006,
                                  "end": 3011
                                }
                              ],
                              "optional": false,
                              "start": 2986,
                              "end": 3012
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3032,
                                    "end": 3036
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3037,
                                    "end": 3047
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3032,
                                  "end": 3047
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3048,
                                  "end": 3054
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3032,
                                "end": 3054
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3055,
                                    "end": 3060
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3061,
                                    "end": 3071
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3055,
                                  "end": 3071
                                }
                              ],
                              "optional": false,
                              "start": 3032,
                              "end": 3072
                            },
                            "start": 2986,
                            "end": 3072
                          },
                          "start": 2979,
                          "end": 3073
                        }
                      ],
                      "start": 2965,
                      "end": 3083
                    },
                    "expression": false,
                    "start": 2937,
                    "end": 3083
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2931,
                  "end": 3083
                }
              ],
              "start": 2420,
              "end": 3089
            },
            "abstract": false,
            "declare": false,
            "start": 2389,
            "end": 3089
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3110
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 3119,
              "end": 3125
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
                    "start": 3136,
                    "end": 3147
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
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3161,
                              "end": 3167
                            },
                            "start": 3159,
                            "end": 3167
                          },
                          "start": 3155,
                          "end": 3167
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3148,
                        "end": 3167
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3182,
                                "end": 3186
                              },
                              "typeArguments": null,
                              "start": 3182,
                              "end": 3186
                            },
                            "start": 3180,
                            "end": 3186
                          },
                          "start": 3176,
                          "end": 3186
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3169,
                        "end": 3186
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ParameterFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3202,
                                "end": 3216
                              },
                              "typeArguments": null,
                              "start": 3202,
                              "end": 3216
                            },
                            "start": 3200,
                            "end": 3216
                          },
                          "start": 3195,
                          "end": 3216
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3188,
                        "end": 3216
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
                              "type": "Super",
                              "start": 3232,
                              "end": 3237
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 3232,
                            "end": 3239
                          },
                          "directive": null,
                          "start": 3232,
                          "end": 3240
                        }
                      ],
                      "start": 3218,
                      "end": 3250
                    },
                    "expression": false,
                    "start": 3147,
                    "end": 3250
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3136,
                  "end": 3250
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3259,
                    "end": 3265
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Parameter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3273,
                              "end": 3282
                            },
                            "typeArguments": null,
                            "start": 3273,
                            "end": 3282
                          },
                          "start": 3271,
                          "end": 3282
                        },
                        "start": 3266,
                        "end": 3282
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3305,
                                    "end": 3309
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3310,
                                    "end": 3314
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3305,
                                  "end": 3314
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3319,
                                    "end": 3324
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3325,
                                    "end": 3329
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3319,
                                  "end": 3329
                                },
                                "start": 3305,
                                "end": 3329
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3349,
                                    "end": 3353
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3354,
                                    "end": 3359
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3349,
                                  "end": 3359
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3364,
                                    "end": 3369
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3370,
                                    "end": 3375
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3364,
                                  "end": 3375
                                },
                                "start": 3349,
                                "end": 3375
                              },
                              "start": 3305,
                              "end": 3375
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3395,
                                    "end": 3399
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3400,
                                    "end": 3404
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3395,
                                  "end": 3404
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3405,
                                  "end": 3411
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3395,
                                "end": 3411
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3412,
                                    "end": 3417
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3418,
                                    "end": 3422
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3412,
                                  "end": 3422
                                }
                              ],
                              "optional": false,
                              "start": 3395,
                              "end": 3423
                            },
                            "start": 3305,
                            "end": 3423
                          },
                          "start": 3298,
                          "end": 3424
                        }
                      ],
                      "start": 3284,
                      "end": 3434
                    },
                    "expression": false,
                    "start": 3265,
                    "end": 3434
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3259,
                  "end": 3434
                }
              ],
              "start": 3126,
              "end": 3440
            },
            "abstract": false,
            "declare": false,
            "start": 3095,
            "end": 3440
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParameterFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 3451,
              "end": 3465
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3476,
                    "end": 3484
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3487,
                    "end": 3488
                  },
                  "computed": false,
                  "start": 3476,
                  "end": 3488
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3498,
                    "end": 3502
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3505,
                    "end": 3506
                  },
                  "computed": false,
                  "start": 3498,
                  "end": 3506
                }
              ],
              "start": 3466,
              "end": 3512
            },
            "const": false,
            "declare": false,
            "start": 3446,
            "end": 3512
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
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3526,
                  "end": 3540
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3543,
                      "end": 3549
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3550,
                      "end": 3559
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3543,
                    "end": 3559
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3560,
                    "end": 3574
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3543,
                  "end": 3574
                },
                "definite": false,
                "start": 3526,
                "end": 3574
              }
            ],
            "declare": false,
            "start": 3522,
            "end": 3575
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3590,
              "end": 3601
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 3602,
                    "end": 3603
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3602,
                  "end": 3603
                }
              ],
              "start": 3601,
              "end": 3604
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3610,
                      "end": 3613
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3614,
                            "end": 3615
                          },
                          "typeArguments": null,
                          "start": 3614,
                          "end": 3615
                        }
                      ],
                      "start": 3613,
                      "end": 3616
                    },
                    "start": 3610,
                    "end": 3616
                  },
                  "start": 3608,
                  "end": 3616
                },
                "start": 3605,
                "end": 3616
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3623,
                    "end": 3629
                  },
                  "start": 3621,
                  "end": 3629
                },
                "start": 3618,
                "end": 3629
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3632,
                  "end": 3633
                },
                "typeArguments": null,
                "start": 3632,
                "end": 3633
              },
              "start": 3630,
              "end": 3633
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3649,
                          "end": 3663
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3664,
                          "end": 3668
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3649,
                        "end": 3668
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3669,
                          "end": 3672
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3674,
                          "end": 3677
                        }
                      ],
                      "optional": false,
                      "start": 3649,
                      "end": 3678
                    },
                    "prefix": true,
                    "start": 3648,
                    "end": 3678
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3687,
                      "end": 3696
                    },
                    "start": 3680,
                    "end": 3697
                  },
                  "alternate": null,
                  "start": 3644,
                  "end": 3697
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3713,
                      "end": 3716
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3717,
                      "end": 3720
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3713,
                    "end": 3721
                  },
                  "start": 3706,
                  "end": 3722
                }
              ],
              "start": 3634,
              "end": 3728
            },
            "expression": false,
            "start": 3581,
            "end": 3728
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3743,
              "end": 3754
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 3755,
                    "end": 3756
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3755,
                  "end": 3756
                }
              ],
              "start": 3754,
              "end": 3757
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3763,
                      "end": 3766
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3767,
                            "end": 3768
                          },
                          "typeArguments": null,
                          "start": 3767,
                          "end": 3768
                        }
                      ],
                      "start": 3766,
                      "end": 3769
                    },
                    "start": 3763,
                    "end": 3769
                  },
                  "start": 3761,
                  "end": 3769
                },
                "start": 3758,
                "end": 3769
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3776,
                    "end": 3782
                  },
                  "start": 3774,
                  "end": 3782
                },
                "start": 3771,
                "end": 3782
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3785,
                "end": 3792
              },
              "start": 3783,
              "end": 3792
            },
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasOwnProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3810,
                        "end": 3824
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "call",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3825,
                        "end": 3829
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3810,
                      "end": 3829
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3830,
                        "end": 3833
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3835,
                        "end": 3838
                      }
                    ],
                    "optional": false,
                    "start": 3810,
                    "end": 3839
                  },
                  "start": 3803,
                  "end": 3840
                }
              ],
              "start": 3793,
              "end": 3846
            },
            "expression": false,
            "start": 3734,
            "end": 3846
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayContains",
              "optional": false,
              "typeAnnotation": null,
              "start": 3861,
              "end": 3874
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 3875,
                    "end": 3876
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3885,
                      "end": 3891
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3892,
                            "end": 3893
                          },
                          "typeArguments": null,
                          "start": 3892,
                          "end": 3893
                        }
                      ],
                      "start": 3891,
                      "end": 3894
                    },
                    "start": 3885,
                    "end": 3894
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3875,
                  "end": 3894
                }
              ],
              "start": 3874,
              "end": 3895
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3899,
                        "end": 3900
                      },
                      "typeArguments": null,
                      "start": 3899,
                      "end": 3900
                    },
                    "start": 3899,
                    "end": 3902
                  },
                  "start": 3897,
                  "end": 3902
                },
                "start": 3896,
                "end": 3902
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3910,
                      "end": 3911
                    },
                    "typeArguments": null,
                    "start": 3910,
                    "end": 3911
                  },
                  "start": 3908,
                  "end": 3911
                },
                "start": 3904,
                "end": 3911
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3914,
                "end": 3921
              },
              "start": 3912,
              "end": 3921
            },
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
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3936,
                        "end": 3939
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3942,
                          "end": 3943
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3944,
                          "end": 3950
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3942,
                        "end": 3950
                      },
                      "definite": false,
                      "start": 3936,
                      "end": 3950
                    }
                  ],
                  "declare": false,
                  "start": 3932,
                  "end": 3951
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3969,
                          "end": 3970
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 3973,
                          "end": 3974
                        },
                        "definite": false,
                        "start": 3969,
                        "end": 3974
                      }
                    ],
                    "declare": false,
                    "start": 3965,
                    "end": 3974
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3976,
                      "end": 3977
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3980,
                      "end": 3983
                    },
                    "start": 3976,
                    "end": 3983
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3985,
                      "end": 3986
                    },
                    "start": 3985,
                    "end": 3988
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4008,
                              "end": 4012
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "equals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4013,
                              "end": 4019
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4008,
                            "end": 4019
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4020,
                                "end": 4021
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4022,
                                "end": 4023
                              },
                              "optional": false,
                              "computed": true,
                              "start": 4020,
                              "end": 4024
                            }
                          ],
                          "optional": false,
                          "start": 4008,
                          "end": 4025
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 4034,
                            "end": 4038
                          },
                          "start": 4027,
                          "end": 4039
                        },
                        "alternate": null,
                        "start": 4004,
                        "end": 4039
                      }
                    ],
                    "start": 3990,
                    "end": 4049
                  },
                  "start": 3960,
                  "end": 4049
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 4065,
                    "end": 4070
                  },
                  "start": 4058,
                  "end": 4071
                }
              ],
              "start": 3922,
              "end": 4077
            },
            "expression": false,
            "start": 3852,
            "end": 4077
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayEquals",
              "optional": false,
              "typeAnnotation": null,
              "start": 4092,
              "end": 4103
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 4104,
                    "end": 4105
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4114,
                      "end": 4120
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4121,
                            "end": 4122
                          },
                          "typeArguments": null,
                          "start": 4121,
                          "end": 4122
                        }
                      ],
                      "start": 4120,
                      "end": 4123
                    },
                    "start": 4114,
                    "end": 4123
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4104,
                  "end": 4123
                }
              ],
              "start": 4103,
              "end": 4124
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4128,
                        "end": 4129
                      },
                      "typeArguments": null,
                      "start": 4128,
                      "end": 4129
                    },
                    "start": 4128,
                    "end": 4131
                  },
                  "start": 4126,
                  "end": 4131
                },
                "start": 4125,
                "end": 4131
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4136,
                        "end": 4137
                      },
                      "typeArguments": null,
                      "start": 4136,
                      "end": 4137
                    },
                    "start": 4136,
                    "end": 4139
                  },
                  "start": 4134,
                  "end": 4139
                },
                "start": 4133,
                "end": 4139
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4142,
                "end": 4149
              },
              "start": 4140,
              "end": 4149
            },
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
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4164,
                        "end": 4167
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4170,
                          "end": 4171
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4172,
                          "end": 4178
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4170,
                        "end": 4178
                      },
                      "definite": false,
                      "start": 4164,
                      "end": 4178
                    }
                  ],
                  "declare": false,
                  "start": 4160,
                  "end": 4179
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4192,
                        "end": 4193
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4194,
                        "end": 4200
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4192,
                      "end": 4200
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4205,
                      "end": 4208
                    },
                    "start": 4192,
                    "end": 4208
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 4217,
                      "end": 4222
                    },
                    "start": 4210,
                    "end": 4223
                  },
                  "alternate": null,
                  "start": 4188,
                  "end": 4223
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4241,
                          "end": 4242
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4245,
                          "end": 4246
                        },
                        "definite": false,
                        "start": 4241,
                        "end": 4246
                      }
                    ],
                    "declare": false,
                    "start": 4237,
                    "end": 4246
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4248,
                      "end": 4249
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4252,
                      "end": 4255
                    },
                    "start": 4248,
                    "end": 4255
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4257,
                      "end": 4258
                    },
                    "start": 4257,
                    "end": 4260
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
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
                                  "start": 4281,
                                  "end": 4282
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4283,
                                  "end": 4284
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4281,
                                "end": 4285
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "equals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4286,
                                "end": 4292
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4281,
                              "end": 4292
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4293,
                                  "end": 4294
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4295,
                                  "end": 4296
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4293,
                                "end": 4297
                              }
                            ],
                            "optional": false,
                            "start": 4281,
                            "end": 4298
                          },
                          "prefix": true,
                          "start": 4280,
                          "end": 4298
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 4307,
                            "end": 4312
                          },
                          "start": 4300,
                          "end": 4313
                        },
                        "alternate": null,
                        "start": 4276,
                        "end": 4313
                      }
                    ],
                    "start": 4262,
                    "end": 4323
                  },
                  "start": 4232,
                  "end": 4323
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4339,
                    "end": 4343
                  },
                  "start": 4332,
                  "end": 4344
                }
              ],
              "start": 4150,
              "end": 4350
            },
            "expression": false,
            "start": 4083,
            "end": 4350
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "setEquals",
              "optional": false,
              "typeAnnotation": null,
              "start": 4365,
              "end": 4374
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 4375,
                    "end": 4376
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4385,
                      "end": 4391
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4392,
                            "end": 4393
                          },
                          "typeArguments": null,
                          "start": 4392,
                          "end": 4393
                        }
                      ],
                      "start": 4391,
                      "end": 4394
                    },
                    "start": 4385,
                    "end": 4394
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4375,
                  "end": 4394
                }
              ],
              "start": 4374,
              "end": 4395
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4399,
                        "end": 4400
                      },
                      "typeArguments": null,
                      "start": 4399,
                      "end": 4400
                    },
                    "start": 4399,
                    "end": 4402
                  },
                  "start": 4397,
                  "end": 4402
                },
                "start": 4396,
                "end": 4402
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4407,
                        "end": 4408
                      },
                      "typeArguments": null,
                      "start": 4407,
                      "end": 4408
                    },
                    "start": 4407,
                    "end": 4410
                  },
                  "start": 4405,
                  "end": 4410
                },
                "start": 4404,
                "end": 4410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4413,
                "end": 4420
              },
              "start": 4411,
              "end": 4420
            },
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
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4435,
                        "end": 4438
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4441,
                          "end": 4442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4443,
                          "end": 4449
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4441,
                        "end": 4449
                      },
                      "definite": false,
                      "start": 4435,
                      "end": 4449
                    }
                  ],
                  "declare": false,
                  "start": 4431,
                  "end": 4450
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4463,
                        "end": 4464
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4465,
                        "end": 4471
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4463,
                      "end": 4471
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4476,
                      "end": 4479
                    },
                    "start": 4463,
                    "end": 4479
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 4488,
                      "end": 4493
                    },
                    "start": 4481,
                    "end": 4494
                  },
                  "alternate": null,
                  "start": 4459,
                  "end": 4494
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4512,
                          "end": 4513
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4516,
                          "end": 4517
                        },
                        "definite": false,
                        "start": 4512,
                        "end": 4517
                      }
                    ],
                    "declare": false,
                    "start": 4508,
                    "end": 4517
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4519,
                      "end": 4520
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4523,
                      "end": 4526
                    },
                    "start": 4519,
                    "end": 4526
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4528,
                      "end": 4529
                    },
                    "start": 4528,
                    "end": 4531
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arrayContains",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4552,
                              "end": 4565
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4566,
                                "end": 4567
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4569,
                                  "end": 4570
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4571,
                                  "end": 4572
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4569,
                                "end": 4573
                              }
                            ],
                            "optional": false,
                            "start": 4552,
                            "end": 4574
                          },
                          "prefix": true,
                          "start": 4551,
                          "end": 4574
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 4583,
                            "end": 4588
                          },
                          "start": 4576,
                          "end": 4589
                        },
                        "alternate": null,
                        "start": 4547,
                        "end": 4589
                      }
                    ],
                    "start": 4533,
                    "end": 4599
                  },
                  "start": 4503,
                  "end": 4599
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4615,
                    "end": 4619
                  },
                  "start": 4608,
                  "end": 4620
                }
              ],
              "start": 4421,
              "end": 4626
            },
            "expression": false,
            "start": 4356,
            "end": 4626
          }
        ],
        "start": 13,
        "end": 4628
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 4628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4628
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 19,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 177,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 182,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 268,
    "end": 274
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "isObjectType",
    "start": 304,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 319,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "isObjectType",
    "start": 327,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 344,
    "end": 350
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "propCount",
    "start": 374,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "getPropertyCount",
    "start": 391,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "propCount",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 437,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "getPropertyCount",
    "start": 446,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 466,
    "end": 472
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "sigCount",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "getSignatureCount",
    "start": 512,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 545,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "sigCount",
    "start": 549,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 558,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 562,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "getSignatureCount",
    "start": 567,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 588,
    "end": 594
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 595,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "propCount",
    "start": 618,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "propCount",
    "start": 667,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 679,
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
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "thisProp",
    "start": 709,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 725,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "thatProp",
    "start": 765,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "getPropertyByName",
    "start": 781,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "thisProp",
    "start": 799,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 808,
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
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "thatProp",
    "start": 841,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 850,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "thisProp",
    "start": 853,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "thatProp",
    "start": 872,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 887,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "thisProp",
    "start": 890,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 899,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 904,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "thatProp",
    "start": 911,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 928,
    "end": 934
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
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
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "sigCount",
    "start": 990,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1018,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "setEquals",
    "start": 1023,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "getSignatures",
    "start": 1038,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
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
    "value": ",",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "getSignatures",
    "start": 1060,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1085,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Boolean",
    "value": "true",
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
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "getProperties",
    "start": 1149,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 1166,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "return",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 1220,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1232,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 1248,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1271,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1278,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "getPropertyByName",
    "start": 1307,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1325,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1331,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1363,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1370,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "getPropertyCount",
    "start": 1399,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1419,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1440,
    "end": 1446
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "getSignature",
    "start": 1468,
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
    "value": "index",
    "start": 1481,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1488,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 1497,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1528,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "getSignatureCount",
    "start": 1557,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1578,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1599,
    "end": 1605
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "getSignatures",
    "start": 1627,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 1644,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1670,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "isPrimitive",
    "start": 1699,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1714,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1736,
    "end": 1742
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1743,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "isObjectType",
    "start": 1768,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1784,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1806,
    "end": 1812
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1813,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "isTypeParameter",
    "start": 1838,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1857,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1879,
    "end": 1885
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1886,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "isSubTypeOf",
    "start": 1911,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1923,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1929,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1958,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 1964,
    "end": 1972
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1973,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1981,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1998,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2010,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2023,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2031,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2038,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2044,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2050,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 2057,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "PropertyFlags",
    "start": 2064,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2093,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 2120,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2127,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 2134,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2145,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2167,
    "end": 2173
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2174,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2179,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2184,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2188,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2194,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2199,
    "end": 2201
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2218,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 2223,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2229,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2233,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 2239,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2245,
    "end": 2247
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2264,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2269,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 2274,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2281,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2315,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "PropertyFlags",
    "start": 2320,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 2344,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 2366,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2389,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 2395,
    "end": 2404
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2405,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2413,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2430,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2442,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "typeParameters",
    "start": 2449,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "TypeParameter",
    "start": 2465,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2482,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 2489,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "Parameter",
    "start": 2501,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2514,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "returnType",
    "start": 2521,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2533,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2553,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "equalsNoReturn",
    "start": 2580,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2595,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 2602,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2614,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2636,
    "end": 2642
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2643,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 2648,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2659,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2666,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2670,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 2676,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2687,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2694,
    "end": 2696
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2713,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "typeParameters",
    "start": 2718,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2733,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2740,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2744,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "typeParameters",
    "start": 2750,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2765,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2772,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "arrayEquals",
    "start": 2791,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2803,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 2808,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2820,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 2826,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2838,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "arrayEquals",
    "start": 2857,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2869,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "typeParameters",
    "start": 2874,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2890,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "typeParameters",
    "start": 2896,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 2931,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2938,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 2945,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2957,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2979,
    "end": 2985
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2986,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "equalsNoReturn",
    "start": 2991,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 3006,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3013,
    "end": 3015
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3032,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "returnType",
    "start": 3037,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 3048,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 3055,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "returnType",
    "start": 3061,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3095,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "Parameter",
    "start": 3101,
    "end": 3110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3111,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3119,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3136,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3148,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3155,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3161,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3169,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3176,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 3182,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3188,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 3195,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "ParameterFlags",
    "start": 3202,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3232,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 3259,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 3266,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "Parameter",
    "start": 3273,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3298,
    "end": 3304
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3305,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3310,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3315,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 3319,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3325,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3330,
    "end": 3332
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3349,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 3354,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3360,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 3364,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 3370,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3376,
    "end": 3378
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3395,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3400,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 3405,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 3412,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3418,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3446,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "ParameterFlags",
    "start": 3451,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 3476,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 3498,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3522,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 3526,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3543,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 3550,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 3560,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3581,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 3590,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3605,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 3610,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3618,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3623,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3644,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 3649,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 3664,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3669,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3674,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3680,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3687,
    "end": 3696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3706,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3713,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3717,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3734,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "hasProperty",
    "start": 3743,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3758,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 3763,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3771,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3776,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3785,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3803,
    "end": 3809
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 3810,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 3825,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3830,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3835,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3852,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "arrayContains",
    "start": 3861,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3877,
    "end": 3884
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 3885,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3902,
    "end": 3903
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 3904,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3914,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3932,
    "end": 3935
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 3936,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3944,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3960,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3965,
    "end": 3968
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 3980,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3986,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4004,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4008,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 4013,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4027,
    "end": 4033
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4034,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4058,
    "end": 4064
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4065,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4083,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "arrayEquals",
    "start": 4092,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4106,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 4114,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4142,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4160,
    "end": 4163
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 4164,
    "end": 4167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4172,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4188,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4194,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4201,
    "end": 4204
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 4205,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4210,
    "end": 4216
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4217,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4232,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4237,
    "end": 4240
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 4252,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4258,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4276,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 4286,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4300,
    "end": 4306
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4307,
    "end": 4312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4332,
    "end": 4338
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4339,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4356,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "setEquals",
    "start": 4365,
    "end": 4374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4374,
    "end": 4375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4377,
    "end": 4384
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 4385,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4413,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4431,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 4435,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4443,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4459,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4462,
    "end": 4463
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4465,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4472,
    "end": 4475
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 4476,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4481,
    "end": 4487
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4488,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4503,
    "end": 4506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4508,
    "end": 4511
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4516,
    "end": 4517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 4523,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4529,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4547,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Identifier",
    "value": "arrayContains",
    "start": 4552,
    "end": 4565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4566,
    "end": 4567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4567,
    "end": 4568
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4570,
    "end": 4571
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4576,
    "end": 4582
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4583,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4608,
    "end": 4614
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4615,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4627,
    "end": 4628
  }
]
```
