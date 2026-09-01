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
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 11,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "typeArguments": null,
          "start": 20,
          "end": 21
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        },
        "trueType": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
              },
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
                    "start": 46,
                    "end": 47
                  },
                  "typeArguments": null,
                  "start": 46,
                  "end": 47
                },
                "start": 44,
                "end": 47
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 47
            }
          ],
          "start": 37,
          "end": 49
        },
        "falseType": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 58
              },
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
                    "start": 60,
                    "end": 61
                  },
                  "typeArguments": null,
                  "start": 60,
                  "end": 61
                },
                "start": 58,
                "end": 61
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 62
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 70
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 73
                },
                "start": 70,
                "end": 73
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 73
            }
          ],
          "start": 52,
          "end": 75
        },
        "start": 20,
        "end": 75
      },
      "declare": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 92
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "initializer": null,
            "computed": false,
            "start": 99,
            "end": 102
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 111
            },
            "initializer": null,
            "computed": false,
            "start": 108,
            "end": 111
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 120
            },
            "initializer": null,
            "computed": false,
            "start": 117,
            "end": 120
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Batch",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 131
            },
            "initializer": null,
            "computed": false,
            "start": 126,
            "end": 131
          }
        ],
        "start": 93,
        "end": 133
      },
      "const": false,
      "declare": false,
      "start": 77,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReducerAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 166
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 177
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 181
                    },
                    "start": 167,
                    "end": 181
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 181
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 183,
                  "end": 189
                }
              ],
              "start": 166,
              "end": 190
            },
            "start": 160,
            "end": 190
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 201
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 212
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 216
                    },
                    "start": 202,
                    "end": 216
                  },
                  "typeArguments": null,
                  "start": 202,
                  "end": 216
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 218,
                  "end": 225
                }
              ],
              "start": 201,
              "end": 226
            },
            "start": 195,
            "end": 226
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 237
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 248
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 252
                    },
                    "start": 238,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 238,
                  "end": 252
                },
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              ],
              "start": 237,
              "end": 261
            },
            "start": 231,
            "end": 261
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 272
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 283
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Batch",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 289
                    },
                    "start": 273,
                    "end": 289
                  },
                  "typeArguments": null,
                  "start": 273,
                  "end": 289
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReducerAction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 291,
                    "end": 304
                  },
                  "start": 291,
                  "end": 306
                }
              ],
              "start": 272,
              "end": 307
            },
            "start": 266,
            "end": 307
          }
        ],
        "start": 158,
        "end": 307
      },
      "declare": false,
      "start": 135,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 329
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
              "type": "TSNeverKeyword",
              "start": 333,
              "end": 338
            },
            "start": 331,
            "end": 338
          },
          "start": 330,
          "end": 338
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        },
        "start": 339,
        "end": 346
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 368
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unreachable!",
                  "raw": "\"Unreachable!\"",
                  "start": 369,
                  "end": 383
                }
              ],
              "start": 359,
              "end": 384
            },
            "start": 353,
            "end": 385
          }
        ],
        "start": 347,
        "end": 387
      },
      "expression": false,
      "start": 309,
      "end": 387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 405
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReducerAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 427
              },
              "typeArguments": null,
              "start": 414,
              "end": 427
            },
            "start": 412,
            "end": 427
          },
          "start": 406,
          "end": 427
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 430,
          "end": 434
        },
        "start": 428,
        "end": 434
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 454
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 459
              },
              "optional": false,
              "computed": false,
              "start": 448,
              "end": 459
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 486
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
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
                "consequent": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 513,
                              "end": 519
                            },
                            "start": 511,
                            "end": 519
                          },
                          "start": 510,
                          "end": 519
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 522,
                            "end": 528
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 536
                          },
                          "optional": false,
                          "computed": false,
                          "start": 522,
                          "end": 536
                        },
                        "definite": false,
                        "start": 510,
                        "end": 536
                      }
                    ],
                    "declare": false,
                    "start": 504,
                    "end": 537
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 550,
                    "end": 556
                  }
                ],
                "start": 471,
                "end": 556
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 580
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 584
                  },
                  "optional": false,
                  "computed": false,
                  "start": 570,
                  "end": 584
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 607,
                              "end": 614
                            },
                            "start": 605,
                            "end": 614
                          },
                          "start": 604,
                          "end": 614
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 623
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 631
                          },
                          "optional": false,
                          "computed": false,
                          "start": 617,
                          "end": 631
                        },
                        "definite": false,
                        "start": 604,
                        "end": 631
                      }
                    ],
                    "declare": false,
                    "start": 598,
                    "end": 632
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 645,
                    "end": 651
                  }
                ],
                "start": 565,
                "end": 651
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 675
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 679
                  },
                  "optional": false,
                  "computed": false,
                  "start": 665,
                  "end": 679
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 702,
                              "end": 708
                            },
                            "start": 700,
                            "end": 708
                          },
                          "start": 699,
                          "end": 708
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 711,
                            "end": 717
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 718,
                            "end": 725
                          },
                          "optional": false,
                          "computed": false,
                          "start": 711,
                          "end": 725
                        },
                        "definite": false,
                        "start": 699,
                        "end": 725
                      }
                    ],
                    "declare": false,
                    "start": 693,
                    "end": 726
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 739,
                    "end": 745
                  }
                ],
                "start": 660,
                "end": 745
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 769
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Batch",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 775
                  },
                  "optional": false,
                  "computed": false,
                  "start": 759,
                  "end": 775
                },
                "consequent": [
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
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 789,
                            "end": 795
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 796,
                            "end": 803
                          },
                          "optional": false,
                          "computed": false,
                          "start": 789,
                          "end": 803
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 804,
                          "end": 807
                        },
                        "optional": false,
                        "computed": false,
                        "start": 789,
                        "end": 807
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 808,
                          "end": 815
                        }
                      ],
                      "optional": false,
                      "start": 789,
                      "end": 816
                    },
                    "directive": null,
                    "start": 789,
                    "end": 817
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 830,
                    "end": 836
                  }
                ],
                "start": 754,
                "end": 836
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 861,
                        "end": 872
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 873,
                          "end": 879
                        }
                      ],
                      "optional": false,
                      "start": 861,
                      "end": 880
                    },
                    "start": 854,
                    "end": 881
                  }
                ],
                "start": 845,
                "end": 881
              }
            ],
            "start": 441,
            "end": 887
          }
        ],
        "start": 435,
        "end": 889
      },
      "expression": false,
      "start": 389,
      "end": 889
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 889
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
    "value": "Action",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
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
    "value": "T",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 82,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Batch",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 135,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "ReducerAction",
    "start": 140,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 167,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 238,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 273,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Batch",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "ReducerAction",
    "start": 291,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 318,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 353,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"Unreachable!\"",
    "start": 369,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "ReducerAction",
    "start": 414,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 430,
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
    "value": "switch",
    "start": 441,
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
    "value": "action",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 471,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 476,
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
    "value": "Bar",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 504,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 529,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 565,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 570,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 598,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "boolean",
    "start": 607,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 645,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 660,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 665,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 693,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 754,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 759,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Batch",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 804,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 808,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 845,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 854,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 861,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "action",
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
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  }
]
```
