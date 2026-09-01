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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 26,
                  "end": 30
                },
                "prefix": true,
                "start": 25,
                "end": 30
              },
              "prefix": true,
              "start": 24,
              "end": 30
            },
            "consequent": {
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
                          "name": "valid",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 51,
                          "end": 56
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 58,
                          "end": 62
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 51,
                        "end": 62
                      }
                    ],
                    "start": 49,
                    "end": 64
                  },
                  "start": 42,
                  "end": 64
                }
              ],
              "start": 32,
              "end": 70
            },
            "alternate": null,
            "start": 20,
            "end": 70
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 84
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 82,
              "end": 86
            },
            "start": 75,
            "end": 86
          }
        ],
        "start": 14,
        "end": 88
      },
      "expression": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
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
                          "name": "valid",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 121
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 123,
                            "end": 130
                          },
                          "start": 121,
                          "end": 130
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 116,
                        "end": 131
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "msg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 135
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 138,
                            "end": 147
                          },
                          "start": 136,
                          "end": 147
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 132,
                        "end": 147
                      }
                    ],
                    "start": 114,
                    "end": 149
                  },
                  "start": 111,
                  "end": 149
                },
                "start": 108,
                "end": 149
              },
              "start": 106,
              "end": 149
            },
            "start": 104,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 149
        }
      ],
      "declare": true,
      "start": 90,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 151,
          "end": 155
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "msg",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 159
        },
        "optional": false,
        "computed": false,
        "start": 151,
        "end": 159
      },
      "directive": null,
      "start": 151,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 249
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
            "type": "IfStatement",
            "test": {
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
                    "start": 261,
                    "end": 265
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 272
                  },
                  "optional": false,
                  "computed": false,
                  "start": 261,
                  "end": 272
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 261,
                "end": 274
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 277,
                "end": 280
              },
              "start": 261,
              "end": 280
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "utilValidate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 311
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 299,
                    "end": 313
                  },
                  "start": 292,
                  "end": 314
                }
              ],
              "start": 282,
              "end": 320
            },
            "alternate": null,
            "start": 258,
            "end": 320
          },
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
                    "name": "valid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 339
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 341,
                    "end": 345
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 334,
                  "end": 345
                }
              ],
              "start": 332,
              "end": 347
            },
            "start": 325,
            "end": 348
          }
        ],
        "start": 252,
        "end": 350
      },
      "expression": false,
      "start": 232,
      "end": 350
    },
    {
      "type": "EmptyStatement",
      "start": 350,
      "end": 351
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "utilValidate",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 383
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
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
                    "name": "valid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 398
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 400,
                      "end": 407
                    },
                    "start": 398,
                    "end": 407
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 393,
                  "end": 408
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "msg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 416
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 419,
                      "end": 428
                    },
                    "start": 417,
                    "end": 428
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 413,
                  "end": 429
                }
              ],
              "start": 387,
              "end": 431
            },
            {
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
                    "name": "valid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 445
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 447,
                      "end": 454
                    },
                    "start": 445,
                    "end": 454
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 440,
                  "end": 455
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "msg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 460,
                    "end": 463
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 465,
                      "end": 471
                    },
                    "start": 463,
                    "end": 471
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 460,
                  "end": 472
                }
              ],
              "start": 434,
              "end": 474
            }
          ],
          "start": 387,
          "end": 474
        },
        "start": 385,
        "end": 474
      },
      "body": null,
      "expression": false,
      "start": 354,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "validate",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 484
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 476,
          "end": 486
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "msg",
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 490
        },
        "optional": false,
        "computed": false,
        "start": 476,
        "end": 490
      },
      "directive": null,
      "start": 476,
      "end": 491
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "normalise_trace_logs",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 604
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 607,
                "end": 610
              },
              "start": 607,
              "end": 612
            },
            "start": 605,
            "end": 612
          },
          "start": 600,
          "end": 612
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "normalised",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 621,
                  "end": 631
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 634,
                  "end": 636
                },
                "definite": false,
                "start": 621,
                "end": 636
              }
            ],
            "declare": false,
            "start": 617,
            "end": 637
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 653,
                    "end": 656
                  },
                  "prefix": true,
                  "start": 646,
                  "end": 656
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 661,
                  "end": 669
                },
                "start": 646,
                "end": 669
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 673,
                    "end": 676
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "includes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 685
                  },
                  "optional": false,
                  "computed": false,
                  "start": 673,
                  "end": 685
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "%c",
                    "raw": "\"%c\"",
                    "start": 686,
                    "end": 690
                  }
                ],
                "optional": false,
                "start": 673,
                "end": 691
              },
              "start": 646,
              "end": 691
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
                        "name": "normalised",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 713
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 718
                      },
                      "optional": false,
                      "computed": false,
                      "start": 703,
                      "end": 718
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 721,
                              "end": 724
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 721,
                              "end": 724
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 721,
                            "end": 724
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "highlighted",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 726,
                              "end": 737
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 739,
                                  "end": 742
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "includes",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 743,
                                  "end": 751
                                },
                                "optional": false,
                                "computed": false,
                                "start": 739,
                                "end": 751
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "\"foo\"",
                                  "start": 752,
                                  "end": 757
                                }
                              ],
                              "optional": false,
                              "start": 739,
                              "end": 758
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 726,
                            "end": 758
                          }
                        ],
                        "start": 719,
                        "end": 760
                      }
                    ],
                    "optional": false,
                    "start": 703,
                    "end": 761
                  },
                  "directive": null,
                  "start": 703,
                  "end": 762
                }
              ],
              "start": 693,
              "end": 768
            },
            "alternate": {
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
                        "name": "normalised",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 794
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 795,
                        "end": 799
                      },
                      "optional": false,
                      "computed": false,
                      "start": 784,
                      "end": 799
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 802,
                              "end": 805
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 802,
                              "end": 805
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 802,
                            "end": 805
                          }
                        ],
                        "start": 800,
                        "end": 807
                      }
                    ],
                    "optional": false,
                    "start": 784,
                    "end": 808
                  },
                  "directive": null,
                  "start": 784,
                  "end": 809
                }
              ],
              "start": 774,
              "end": 815
            },
            "start": 642,
            "end": 815
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "normalised",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 834
            },
            "start": 817,
            "end": 835
          }
        ],
        "start": 614,
        "end": 837
      },
      "expression": false,
      "start": 570,
      "end": 837
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "equal",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 853
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
              "start": 854,
              "end": 855
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 854,
            "end": 855
          }
        ],
        "start": 853,
        "end": 856
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_actual",
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
                "start": 866,
                "end": 867
              },
              "typeArguments": null,
              "start": 866,
              "end": 867
            },
            "start": 864,
            "end": 867
          },
          "start": 857,
          "end": 867
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_expected",
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
                "start": 880,
                "end": 881
              },
              "typeArguments": null,
              "start": 880,
              "end": 881
            },
            "start": 878,
            "end": 881
          },
          "start": 869,
          "end": 881
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 884,
          "end": 888
        },
        "start": 882,
        "end": 888
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 889,
        "end": 891
      },
      "expression": false,
      "start": 839,
      "end": 891
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 893,
          "end": 898
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "normalise_trace_logs",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 919
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 920,
                "end": 922
              }
            ],
            "optional": false,
            "start": 899,
            "end": 923
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 933,
                      "end": 936
                    },
                    "value": {
                      "type": "Literal",
                      "value": "effect",
                      "raw": "'effect'",
                      "start": 938,
                      "end": 946
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 933,
                    "end": 946
                  }
                ],
                "start": 931,
                "end": 948
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 956,
                      "end": 959
                    },
                    "value": {
                      "type": "Literal",
                      "value": "$derived",
                      "raw": "'$derived'",
                      "start": 961,
                      "end": 971
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 956,
                    "end": 971
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "highlighted",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 984
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 986,
                      "end": 990
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 973,
                    "end": 990
                  }
                ],
                "start": 954,
                "end": 992
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1000,
                      "end": 1003
                    },
                    "value": {
                      "type": "Literal",
                      "value": "double",
                      "raw": "'double'",
                      "start": 1005,
                      "end": 1013
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1000,
                    "end": 1013
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "highlighted",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1015,
                      "end": 1026
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1028,
                      "end": 1033
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1015,
                    "end": 1033
                  }
                ],
                "start": 998,
                "end": 1035
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1043,
                      "end": 1046
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1048,
                      "end": 1049
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1043,
                    "end": 1049
                  }
                ],
                "start": 1041,
                "end": 1051
              }
            ],
            "start": 925,
            "end": 1054
          }
        ],
        "optional": false,
        "start": 893,
        "end": 1055
      },
      "directive": null,
      "start": 893,
      "end": 1056
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1056
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 25,
    "end": 26
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 82,
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
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 90,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "f1",
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
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 156,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 241,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 266,
    "end": 272
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
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 292,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "utilValidate",
    "start": 299,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 354,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "utilValidate",
    "start": 371,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 400,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 419,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 432,
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
    "value": "valid",
    "start": 440,
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
    "value": "boolean",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 570,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "normalise_trace_logs",
    "start": 579,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 621,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 646,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 657,
    "end": 660
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 661,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 670,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 673,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 677,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "String",
    "value": "\"%c\"",
    "start": 686,
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
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 703,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 714,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "highlighted",
    "start": 726,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 743,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 752,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 784,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 802,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 817,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 824,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 839,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 848,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "_actual",
    "start": 857,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "_expected",
    "start": 869,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "normalise_trace_logs",
    "start": 899,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "String",
    "value": "'effect'",
    "start": 938,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "String",
    "value": "'$derived'",
    "start": 961,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "highlighted",
    "start": 973,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "String",
    "value": "'double'",
    "start": 1005,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "highlighted",
    "start": 1015,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  }
]
```
