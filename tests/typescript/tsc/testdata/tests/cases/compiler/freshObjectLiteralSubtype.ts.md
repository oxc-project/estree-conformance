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
        "start": 590,
        "end": 610
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
              "start": 612,
              "end": 615
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 618,
                "end": 621
              },
              "start": 618,
              "end": 623
            },
            "start": 616,
            "end": 623
          },
          "start": 611,
          "end": 623
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
                  "start": 632,
                  "end": 642
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 645,
                  "end": 647
                },
                "definite": false,
                "start": 632,
                "end": 647
              }
            ],
            "declare": false,
            "start": 628,
            "end": 648
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
                    "start": 664,
                    "end": 667
                  },
                  "prefix": true,
                  "start": 657,
                  "end": 667
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 672,
                  "end": 680
                },
                "start": 657,
                "end": 680
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
                    "start": 684,
                    "end": 687
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "includes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 696
                  },
                  "optional": false,
                  "computed": false,
                  "start": 684,
                  "end": 696
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "%c",
                    "raw": "\"%c\"",
                    "start": 697,
                    "end": 701
                  }
                ],
                "optional": false,
                "start": 684,
                "end": 702
              },
              "start": 657,
              "end": 702
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
                        "start": 714,
                        "end": 724
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 725,
                        "end": 729
                      },
                      "optional": false,
                      "computed": false,
                      "start": 714,
                      "end": 729
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
                              "start": 732,
                              "end": 735
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 732,
                              "end": 735
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 732,
                            "end": 735
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
                              "start": 737,
                              "end": 748
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
                                  "start": 750,
                                  "end": 753
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "includes",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 754,
                                  "end": 762
                                },
                                "optional": false,
                                "computed": false,
                                "start": 750,
                                "end": 762
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "\"foo\"",
                                  "start": 763,
                                  "end": 768
                                }
                              ],
                              "optional": false,
                              "start": 750,
                              "end": 769
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 737,
                            "end": 769
                          }
                        ],
                        "start": 730,
                        "end": 771
                      }
                    ],
                    "optional": false,
                    "start": 714,
                    "end": 772
                  },
                  "directive": null,
                  "start": 714,
                  "end": 773
                }
              ],
              "start": 704,
              "end": 779
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
                        "start": 795,
                        "end": 805
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 806,
                        "end": 810
                      },
                      "optional": false,
                      "computed": false,
                      "start": 795,
                      "end": 810
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
                              "start": 813,
                              "end": 816
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 813,
                              "end": 816
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 813,
                            "end": 816
                          }
                        ],
                        "start": 811,
                        "end": 818
                      }
                    ],
                    "optional": false,
                    "start": 795,
                    "end": 819
                  },
                  "directive": null,
                  "start": 795,
                  "end": 820
                }
              ],
              "start": 785,
              "end": 826
            },
            "start": 653,
            "end": 826
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "normalised",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 845
            },
            "start": 828,
            "end": 846
          }
        ],
        "start": 625,
        "end": 848
      },
      "expression": false,
      "start": 581,
      "end": 848
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "equal",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 864
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
              "start": 865,
              "end": 866
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 865,
            "end": 866
          }
        ],
        "start": 864,
        "end": 867
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
                "start": 877,
                "end": 878
              },
              "typeArguments": null,
              "start": 877,
              "end": 878
            },
            "start": 875,
            "end": 878
          },
          "start": 868,
          "end": 878
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
                "start": 891,
                "end": 892
              },
              "typeArguments": null,
              "start": 891,
              "end": 892
            },
            "start": 889,
            "end": 892
          },
          "start": 880,
          "end": 892
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 895,
          "end": 899
        },
        "start": 893,
        "end": 899
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 900,
        "end": 902
      },
      "expression": false,
      "start": 850,
      "end": 902
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
          "start": 904,
          "end": 909
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
              "start": 910,
              "end": 930
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 931,
                "end": 933
              }
            ],
            "optional": false,
            "start": 910,
            "end": 934
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
                      "start": 944,
                      "end": 947
                    },
                    "value": {
                      "type": "Literal",
                      "value": "effect",
                      "raw": "'effect'",
                      "start": 949,
                      "end": 957
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 944,
                    "end": 957
                  }
                ],
                "start": 942,
                "end": 959
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
                      "start": 967,
                      "end": 970
                    },
                    "value": {
                      "type": "Literal",
                      "value": "$derived",
                      "raw": "'$derived'",
                      "start": 972,
                      "end": 982
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 967,
                    "end": 982
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
                      "start": 984,
                      "end": 995
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 997,
                      "end": 1001
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 984,
                    "end": 1001
                  }
                ],
                "start": 965,
                "end": 1003
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
                      "start": 1011,
                      "end": 1014
                    },
                    "value": {
                      "type": "Literal",
                      "value": "double",
                      "raw": "'double'",
                      "start": 1016,
                      "end": 1024
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1011,
                    "end": 1024
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
                      "start": 1026,
                      "end": 1037
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1039,
                      "end": 1044
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1026,
                    "end": 1044
                  }
                ],
                "start": 1009,
                "end": 1046
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
                      "start": 1054,
                      "end": 1057
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1059,
                      "end": 1060
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1054,
                    "end": 1060
                  }
                ],
                "start": 1052,
                "end": 1062
              }
            ],
            "start": 936,
            "end": 1065
          }
        ],
        "optional": false,
        "start": 904,
        "end": 1066
      },
      "directive": null,
      "start": 904,
      "end": 1067
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1067
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
    "start": 581,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "normalise_trace_logs",
    "start": 590,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 632,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 657,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 668,
    "end": 671
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 672,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 681,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 688,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "String",
    "value": "\"%c\"",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 714,
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
    "value": "push",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "highlighted",
    "start": 737,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 754,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 763,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 780,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 795,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 813,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 828,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "normalised",
    "start": 835,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 850,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 859,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "_actual",
    "start": 868,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "_expected",
    "start": 880,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 895,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "normalise_trace_logs",
    "start": 910,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "String",
    "value": "'effect'",
    "start": 949,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "String",
    "value": "'$derived'",
    "start": 972,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "highlighted",
    "start": 984,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 997,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "String",
    "value": "'double'",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "highlighted",
    "start": 1026,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  }
]
```
