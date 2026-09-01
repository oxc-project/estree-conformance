__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Page",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "close",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 18
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 29
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 30,
                      "end": 34
                    }
                  ],
                  "start": 29,
                  "end": 35
                },
                "start": 22,
                "end": 35
              },
              "start": 20,
              "end": 35
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 13,
            "end": 36
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 55
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ],
                  "start": 55,
                  "end": 63
                },
                "start": 48,
                "end": 63
              },
              "start": 46,
              "end": 63
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 37,
            "end": 63
          }
        ],
        "start": 12,
        "end": 64
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Browser",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "close",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 98
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 99,
                      "end": 103
                    }
                  ],
                  "start": 98,
                  "end": 104
                },
                "start": 91,
                "end": 104
              },
              "start": 89,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 82,
            "end": 104
          }
        ],
        "start": 81,
        "end": 105
      },
      "declare": false,
      "start": 66,
      "end": 106
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 129
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 140
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Browser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 148
                },
                "typeArguments": null,
                "start": 141,
                "end": 148
              }
            ],
            "start": 140,
            "end": 149
          },
          "start": 133,
          "end": 149
        },
        "start": 131,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 107,
      "end": 150
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Browser",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 186
              },
              "typeArguments": null,
              "start": 179,
              "end": 186
            },
            "start": 177,
            "end": 186
          },
          "start": 174,
          "end": 186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 196
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Page",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 201
                },
                "typeArguments": null,
                "start": 197,
                "end": 201
              }
            ],
            "start": 196,
            "end": 202
          },
          "start": 189,
          "end": 202
        },
        "start": 187,
        "end": 202
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 223
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 234
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ],
            "start": 234,
            "end": 242
          },
          "start": 227,
          "end": 242
        },
        "start": 225,
        "end": 242
      },
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
                  "name": "browser",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Browser",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 269
                          },
                          "typeArguments": null,
                          "start": 262,
                          "end": 269
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 272,
                          "end": 281
                        }
                      ],
                      "start": 262,
                      "end": 281
                    },
                    "start": 260,
                    "end": 281
                  },
                  "start": 253,
                  "end": 281
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 293
                },
                "definite": false,
                "start": 253,
                "end": 293
              }
            ],
            "declare": false,
            "start": 249,
            "end": 294
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "page",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Page",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 309,
                            "end": 313
                          },
                          "typeArguments": null,
                          "start": 309,
                          "end": 313
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 316,
                          "end": 325
                        }
                      ],
                      "start": 309,
                      "end": 325
                    },
                    "start": 307,
                    "end": 325
                  },
                  "start": 303,
                  "end": 325
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 337
                },
                "definite": false,
                "start": 303,
                "end": 337
              }
            ],
            "declare": false,
            "start": 299,
            "end": 338
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "browser",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 364
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 373,
                          "end": 378
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 373,
                        "end": 380
                      },
                      "start": 367,
                      "end": 380
                    },
                    "start": 357,
                    "end": 380
                  },
                  "directive": null,
                  "start": 357,
                  "end": 381
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "page",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 394
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 408
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "browser",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 416
                          }
                        ],
                        "optional": false,
                        "start": 403,
                        "end": 417
                      },
                      "start": 397,
                      "end": 417
                    },
                    "start": 390,
                    "end": 417
                  },
                  "directive": null,
                  "start": 390,
                  "end": 418
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "page",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 444
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "content",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 452
                        },
                        "optional": false,
                        "computed": false,
                        "start": 440,
                        "end": 452
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 440,
                      "end": 454
                    },
                    "start": 434,
                    "end": 454
                  },
                  "start": 427,
                  "end": 455
                },
                {
                  "type": "EmptyStatement",
                  "start": 455,
                  "end": 456
                }
              ],
              "start": 347,
              "end": 462
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "page",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 489
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "page",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 511,
                                "end": 515
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "close",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 521
                              },
                              "optional": false,
                              "computed": false,
                              "start": 511,
                              "end": 521
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 511,
                            "end": 523
                          },
                          "start": 505,
                          "end": 523
                        },
                        "directive": null,
                        "start": 505,
                        "end": 524
                      }
                    ],
                    "start": 491,
                    "end": 540
                  },
                  "alternate": null,
                  "start": 481,
                  "end": 540
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "browser",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 561
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "browser",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 583,
                                "end": 590
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "close",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 591,
                                "end": 596
                              },
                              "optional": false,
                              "computed": false,
                              "start": 583,
                              "end": 596
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 583,
                            "end": 598
                          },
                          "start": 577,
                          "end": 598
                        },
                        "directive": null,
                        "start": 577,
                        "end": 599
                      }
                    ],
                    "start": 563,
                    "end": 615
                  },
                  "alternate": null,
                  "start": 550,
                  "end": 615
                }
              ],
              "start": 471,
              "end": 621
            },
            "start": 343,
            "end": 621
          }
        ],
        "start": 243,
        "end": 623
      },
      "expression": false,
      "start": 204,
      "end": 623
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Aborter",
        "optional": false,
        "typeAnnotation": null,
        "start": 639,
        "end": 646
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
              "name": "abort",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 654
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 658,
                  "end": 662
                },
                "start": 656,
                "end": 662
              },
              "body": null,
              "expression": false,
              "start": 654,
              "end": 662
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 649,
            "end": 662
          }
        ],
        "start": 647,
        "end": 664
      },
      "abstract": false,
      "declare": true,
      "start": 625,
      "end": 664
    },
    {
      "type": "EmptyStatement",
      "start": 664,
      "end": 665
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
        "start": 672,
        "end": 675
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
              "name": "abortController",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 697
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Aborter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 706
                    },
                    "typeArguments": null,
                    "start": 699,
                    "end": 706
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 709,
                    "end": 718
                  }
                ],
                "start": 699,
                "end": 718
              },
              "start": 697,
              "end": 718
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 730
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 682,
            "end": 731
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "operation",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 752
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "abortController",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 774,
                          "end": 789
                        },
                        "optional": false,
                        "computed": false,
                        "start": 769,
                        "end": 789
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 803
                      },
                      "start": 769,
                      "end": 803
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
                                  "type": "ThisExpression",
                                  "start": 819,
                                  "end": 823
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "abortController",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 824,
                                  "end": 839
                                },
                                "optional": false,
                                "computed": false,
                                "start": 819,
                                "end": 839
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abort",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 840,
                                "end": 845
                              },
                              "optional": false,
                              "computed": false,
                              "start": 819,
                              "end": 845
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 819,
                            "end": 847
                          },
                          "directive": null,
                          "start": 819,
                          "end": 848
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 861,
                                "end": 865
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abortController",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 866,
                                "end": 881
                              },
                              "optional": false,
                              "computed": false,
                              "start": 861,
                              "end": 881
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 884,
                              "end": 893
                            },
                            "start": 861,
                            "end": 893
                          },
                          "directive": null,
                          "start": 861,
                          "end": 894
                        }
                      ],
                      "start": 805,
                      "end": 904
                    },
                    "alternate": null,
                    "start": 765,
                    "end": 904
                  },
                  {
                    "type": "TryStatement",
                    "block": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 931,
                                "end": 935
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abortController",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 936,
                                "end": 951
                              },
                              "optional": false,
                              "computed": false,
                              "start": 931,
                              "end": 951
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Aborter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 958,
                                "end": 965
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 954,
                              "end": 967
                            },
                            "start": 931,
                            "end": 967
                          },
                          "directive": null,
                          "start": 931,
                          "end": 968
                        }
                      ],
                      "start": 917,
                      "end": 978
                    },
                    "handler": {
                      "type": "CatchClause",
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 991
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1011,
                                  "end": 1015
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "abortController",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1016,
                                  "end": 1031
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1011,
                                "end": 1031
                              },
                              "operator": "!==",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1036,
                                "end": 1045
                              },
                              "start": 1011,
                              "end": 1045
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
                                          "type": "ThisExpression",
                                          "start": 1065,
                                          "end": 1069
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "abortController",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1070,
                                          "end": 1085
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1065,
                                        "end": 1085
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "abort",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1086,
                                        "end": 1091
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1065,
                                      "end": 1091
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 1065,
                                    "end": 1093
                                  },
                                  "directive": null,
                                  "start": 1065,
                                  "end": 1094
                                }
                              ],
                              "start": 1047,
                              "end": 1114
                            },
                            "alternate": null,
                            "start": 1007,
                            "end": 1114
                          }
                        ],
                        "start": 993,
                        "end": 1124
                      },
                      "start": 979,
                      "end": 1124
                    },
                    "finalizer": null,
                    "start": 913,
                    "end": 1124
                  }
                ],
                "start": 755,
                "end": 1130
              },
              "expression": false,
              "start": 752,
              "end": 1130
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 737,
            "end": 1130
          }
        ],
        "start": 676,
        "end": 1132
      },
      "abstract": false,
      "declare": false,
      "start": 666,
      "end": 1132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1132
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Page",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "close",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 30,
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
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 48,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 66,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Browser",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "close",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 107,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Browser",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 151,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Browser",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Page",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 204,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
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
    "value": "Promise",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "browser",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Browser",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 272,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 284,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Page",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 316,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 328,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "browser",
    "start": 357,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 367,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "browser",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 434,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "close",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "browser",
    "start": 554,
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
    "type": "Identifier",
    "value": "await",
    "start": 577,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "browser",
    "start": 583,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "close",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 625,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 633,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "Aborter",
    "start": 639,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "abort",
    "start": 649,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
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
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 666,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "abortController",
    "start": 682,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "Aborter",
    "start": 699,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 709,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 721,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 737,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "operation",
    "start": 743,
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
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "abortController",
    "start": 774,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 794,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 819,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "abortController",
    "start": 824,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "abort",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "abortController",
    "start": 866,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 884,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 913,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 931,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "abortController",
    "start": 936,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 954,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "Aborter",
    "start": 958,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 979,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 986,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1011,
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
    "value": "abortController",
    "start": 1016,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1036,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "abortController",
    "start": 1070,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "abort",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  }
]
```
