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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
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
            "start": 10,
            "end": 20
          }
        ],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
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
            "start": 33,
            "end": 43
          }
        ],
        "start": 31,
        "end": 45
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 65
                },
                "typeArguments": null,
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
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
            "start": 56,
            "end": 66
          }
        ],
        "start": 54,
        "end": 68
      },
      "abstract": false,
      "declare": false,
      "start": 46,
      "end": 68
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 86
                },
                "typeArguments": null,
                "start": 82,
                "end": 86
              },
              "start": 80,
              "end": 86
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
            "start": 79,
            "end": 87
          }
        ],
        "start": 77,
        "end": 89
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 89
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "namedClasses",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "typeArguments": null,
                  "start": 116,
                  "end": 117
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 121
                  },
                  "typeArguments": null,
                  "start": 120,
                  "end": 121
                }
              ],
              "start": 116,
              "end": 121
            },
            "start": 114,
            "end": 121
          },
          "start": 113,
          "end": 121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 133,
                "end": 136
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
              },
              "start": 133,
              "end": 141
            },
            "consequent": {
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 154
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 156
                      },
                      "optional": false,
                      "computed": false,
                      "start": 153,
                      "end": 156
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 159,
                      "end": 162
                    },
                    "start": 153,
                    "end": 162
                  },
                  "directive": null,
                  "start": 153,
                  "end": 163
                }
              ],
              "start": 143,
              "end": 169
            },
            "alternate": {
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "optional": false,
                      "computed": false,
                      "start": 185,
                      "end": 188
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 191,
                      "end": 192
                    },
                    "start": 185,
                    "end": 192
                  },
                  "directive": null,
                  "start": 185,
                  "end": 193
                }
              ],
              "start": 175,
              "end": 199
            },
            "start": 129,
            "end": 199
          }
        ],
        "start": 123,
        "end": 201
      },
      "expression": false,
      "start": 91,
      "end": 201
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleClasses",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 227
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  },
                  "typeArguments": null,
                  "start": 231,
                  "end": 232
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "typeArguments": null,
                  "start": 235,
                  "end": 236
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "typeArguments": null,
                  "start": 239,
                  "end": 240
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 243,
                  "end": 244
                }
              ],
              "start": 231,
              "end": 244
            },
            "start": 229,
            "end": 244
          },
          "start": 228,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 256,
                "end": 259
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              },
              "start": 256,
              "end": 264
            },
            "consequent": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 283,
                                "end": 289
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 292,
                                  "end": 296
                                },
                                "typeArguments": null,
                                "start": 292,
                                "end": 296
                              }
                            ],
                            "start": 283,
                            "end": 296
                          },
                          "start": 281,
                          "end": 296
                        },
                        "start": 280,
                        "end": 296
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 300
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 302
                        },
                        "optional": false,
                        "computed": false,
                        "start": 299,
                        "end": 302
                      },
                      "definite": false,
                      "start": 280,
                      "end": 302
                    }
                  ],
                  "declare": false,
                  "start": 276,
                  "end": 303
                }
              ],
              "start": 266,
              "end": 309
            },
            "alternate": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 332,
                                "end": 338
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 341,
                                  "end": 347
                                },
                                "typeArguments": null,
                                "start": 341,
                                "end": 347
                              }
                            ],
                            "start": 332,
                            "end": 347
                          },
                          "start": 330,
                          "end": 347
                        },
                        "start": 329,
                        "end": 347
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 351
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 350,
                        "end": 353
                      },
                      "definite": false,
                      "start": 329,
                      "end": 353
                    }
                  ],
                  "declare": false,
                  "start": 325,
                  "end": 354
                }
              ],
              "start": 315,
              "end": 360
            },
            "start": 252,
            "end": 360
          }
        ],
        "start": 246,
        "end": 362
      },
      "expression": false,
      "start": 203,
      "end": 362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "anonymousClasses",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 396
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 398,
                          "end": 404
                        },
                        "start": 396,
                        "end": 404
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 395,
                      "end": 405
                    }
                  ],
                  "start": 393,
                  "end": 407
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 413
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 415,
                          "end": 421
                        },
                        "start": 413,
                        "end": 421
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 412,
                      "end": 422
                    }
                  ],
                  "start": 410,
                  "end": 424
                }
              ],
              "start": 393,
              "end": 424
            },
            "start": 391,
            "end": 424
          },
          "start": 390,
          "end": 424
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 436,
                "end": 439
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "start": 436,
              "end": 444
            },
            "consequent": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 463,
                            "end": 469
                          },
                          "start": 461,
                          "end": 469
                        },
                        "start": 460,
                        "end": 469
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 473
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 475
                        },
                        "optional": false,
                        "computed": false,
                        "start": 472,
                        "end": 475
                      },
                      "definite": false,
                      "start": 460,
                      "end": 475
                    }
                  ],
                  "declare": false,
                  "start": 456,
                  "end": 476
                }
              ],
              "start": 446,
              "end": 482
            },
            "alternate": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 505,
                            "end": 511
                          },
                          "start": 503,
                          "end": 511
                        },
                        "start": 502,
                        "end": 511
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 515
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 517
                        },
                        "optional": false,
                        "computed": false,
                        "start": 514,
                        "end": 517
                      },
                      "definite": false,
                      "start": 502,
                      "end": 517
                    }
                  ],
                  "declare": false,
                  "start": 498,
                  "end": 518
                }
              ],
              "start": 488,
              "end": 524
            },
            "start": 432,
            "end": 524
          }
        ],
        "start": 426,
        "end": 526
      },
      "expression": false,
      "start": 364,
      "end": 526
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AWithOptionalProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 551
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 558,
                "end": 564
              },
              "start": 556,
              "end": 564
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
            "start": 554,
            "end": 565
          }
        ],
        "start": 552,
        "end": 567
      },
      "abstract": false,
      "declare": false,
      "start": 528,
      "end": 567
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BWithOptionalProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 591
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 595
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 598,
                "end": 604
              },
              "start": 596,
              "end": 604
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
            "start": 594,
            "end": 605
          }
        ],
        "start": 592,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 568,
      "end": 607
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positiveTestClassesWithOptionalProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 618,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "AWithOptionalProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 680
                  },
                  "typeArguments": null,
                  "start": 663,
                  "end": 680
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BWithOptionalProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 700
                  },
                  "typeArguments": null,
                  "start": 683,
                  "end": 700
                }
              ],
              "start": 663,
              "end": 700
            },
            "start": 661,
            "end": 700
          },
          "start": 660,
          "end": 700
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 712,
                "end": 715
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "start": 712,
              "end": 720
            },
            "consequent": {
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 733
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 735
                      },
                      "optional": false,
                      "computed": false,
                      "start": 732,
                      "end": 735
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 738,
                      "end": 741
                    },
                    "start": 732,
                    "end": 741
                  },
                  "directive": null,
                  "start": 732,
                  "end": 742
                }
              ],
              "start": 722,
              "end": 748
            },
            "alternate": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 773,
                            "end": 779
                          },
                          "start": 771,
                          "end": 779
                        },
                        "start": 770,
                        "end": 779
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 782,
                            "end": 783
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AWithOptionalProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 795,
                            "end": 812
                          },
                          "start": 782,
                          "end": 812
                        },
                        "consequent": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 827,
                            "end": 828
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 829,
                            "end": 830
                          },
                          "optional": false,
                          "computed": false,
                          "start": 827,
                          "end": 830
                        },
                        "alternate": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 845,
                            "end": 846
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 847,
                            "end": 848
                          },
                          "optional": false,
                          "computed": false,
                          "start": 845,
                          "end": 848
                        },
                        "start": 782,
                        "end": 848
                      },
                      "definite": false,
                      "start": 770,
                      "end": 848
                    }
                  ],
                  "declare": false,
                  "start": 764,
                  "end": 848
                }
              ],
              "start": 754,
              "end": 854
            },
            "start": 708,
            "end": 854
          }
        ],
        "start": 702,
        "end": 856
      },
      "expression": false,
      "start": 609,
      "end": 856
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inParenthesizedExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 867,
        "end": 892
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 897
                  },
                  "typeArguments": null,
                  "start": 896,
                  "end": 897
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 900,
                    "end": 901
                  },
                  "typeArguments": null,
                  "start": 900,
                  "end": 901
                }
              ],
              "start": 896,
              "end": 901
            },
            "start": 894,
            "end": 901
          },
          "start": 893,
          "end": 901
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 913,
                "end": 916
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 922
              },
              "start": 913,
              "end": 923
            },
            "consequent": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 942,
                            "end": 948
                          },
                          "start": 940,
                          "end": 948
                        },
                        "start": 939,
                        "end": 948
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 951,
                          "end": 952
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 953,
                          "end": 954
                        },
                        "optional": false,
                        "computed": false,
                        "start": 951,
                        "end": 954
                      },
                      "definite": false,
                      "start": 939,
                      "end": 954
                    }
                  ],
                  "declare": false,
                  "start": 935,
                  "end": 955
                }
              ],
              "start": 925,
              "end": 961
            },
            "alternate": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 984,
                            "end": 990
                          },
                          "start": 982,
                          "end": 990
                        },
                        "start": 981,
                        "end": 990
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 993,
                          "end": 994
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 995,
                          "end": 996
                        },
                        "optional": false,
                        "computed": false,
                        "start": 993,
                        "end": 996
                      },
                      "definite": false,
                      "start": 981,
                      "end": 996
                    }
                  ],
                  "declare": false,
                  "start": 977,
                  "end": 997
                }
              ],
              "start": 967,
              "end": 1003
            },
            "start": 909,
            "end": 1003
          }
        ],
        "start": 903,
        "end": 1005
      },
      "expression": false,
      "start": 858,
      "end": 1005
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithUnionProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1013,
        "end": 1031
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1038
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1040,
                      "end": 1041
                    },
                    "typeArguments": null,
                    "start": 1040,
                    "end": 1041
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1044,
                      "end": 1045
                    },
                    "typeArguments": null,
                    "start": 1044,
                    "end": 1045
                  }
                ],
                "start": 1040,
                "end": 1045
              },
              "start": 1038,
              "end": 1045
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
            "start": 1034,
            "end": 1046
          }
        ],
        "start": 1032,
        "end": 1048
      },
      "abstract": false,
      "declare": false,
      "start": 1007,
      "end": 1048
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1069
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassWithUnionProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1091
              },
              "typeArguments": null,
              "start": 1073,
              "end": 1091
            },
            "start": 1071,
            "end": 1091
          },
          "start": 1070,
          "end": 1091
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1103,
                "end": 1106
              },
              "operator": "in",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1116
                },
                "optional": false,
                "computed": false,
                "start": 1110,
                "end": 1116
              },
              "start": 1103,
              "end": 1116
            },
            "consequent": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1135,
                            "end": 1141
                          },
                          "start": 1133,
                          "end": 1141
                        },
                        "start": 1132,
                        "end": 1141
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1144,
                            "end": 1145
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1150
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1144,
                          "end": 1150
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1151,
                          "end": 1152
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1144,
                        "end": 1152
                      },
                      "definite": false,
                      "start": 1132,
                      "end": 1152
                    }
                  ],
                  "declare": false,
                  "start": 1128,
                  "end": 1153
                }
              ],
              "start": 1118,
              "end": 1159
            },
            "alternate": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1182,
                            "end": 1188
                          },
                          "start": 1180,
                          "end": 1188
                        },
                        "start": 1179,
                        "end": 1188
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1191,
                            "end": 1192
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1193,
                            "end": 1197
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1191,
                          "end": 1197
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1198,
                          "end": 1199
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1191,
                        "end": 1199
                      },
                      "definite": false,
                      "start": 1179,
                      "end": 1199
                    }
                  ],
                  "declare": false,
                  "start": 1175,
                  "end": 1200
                }
              ],
              "start": 1165,
              "end": 1206
            },
            "start": 1099,
            "end": 1206
          }
        ],
        "start": 1093,
        "end": 1208
      },
      "expression": false,
      "start": 1050,
      "end": 1208
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedClassWithProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1216,
        "end": 1235
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
              "name": "outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1243
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassWithUnionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1263
                },
                "typeArguments": null,
                "start": 1245,
                "end": 1263
              },
              "start": 1243,
              "end": 1263
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
            "start": 1238,
            "end": 1264
          }
        ],
        "start": 1236,
        "end": 1266
      },
      "abstract": false,
      "declare": false,
      "start": 1210,
      "end": 1266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "innestedProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1293
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NestedClassWithProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1316
              },
              "typeArguments": null,
              "start": 1297,
              "end": 1316
            },
            "start": 1295,
            "end": 1316
          },
          "start": 1294,
          "end": 1316
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1328,
                "end": 1331
              },
              "operator": "in",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1335,
                    "end": 1336
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "outer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1337,
                    "end": 1342
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1335,
                  "end": 1342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1347
                },
                "optional": false,
                "computed": false,
                "start": 1335,
                "end": 1347
              },
              "start": 1328,
              "end": 1347
            },
            "consequent": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1366,
                            "end": 1372
                          },
                          "start": 1364,
                          "end": 1372
                        },
                        "start": 1363,
                        "end": 1372
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1375,
                              "end": 1376
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "outer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1377,
                              "end": 1382
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1375,
                            "end": 1382
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1383,
                            "end": 1387
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1375,
                          "end": 1387
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1388,
                          "end": 1389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1375,
                        "end": 1389
                      },
                      "definite": false,
                      "start": 1363,
                      "end": 1389
                    }
                  ],
                  "declare": false,
                  "start": 1359,
                  "end": 1390
                }
              ],
              "start": 1349,
              "end": 1396
            },
            "alternate": {
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1419,
                            "end": 1425
                          },
                          "start": 1417,
                          "end": 1425
                        },
                        "start": 1416,
                        "end": 1425
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1428,
                              "end": 1429
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "outer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1430,
                              "end": 1435
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1428,
                            "end": 1435
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1436,
                            "end": 1440
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1428,
                          "end": 1440
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1441,
                          "end": 1442
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1428,
                        "end": 1442
                      },
                      "definite": false,
                      "start": 1416,
                      "end": 1442
                    }
                  ],
                  "declare": false,
                  "start": 1412,
                  "end": 1443
                }
              ],
              "start": 1402,
              "end": 1449
            },
            "start": 1324,
            "end": 1449
          }
        ],
        "start": 1318,
        "end": 1451
      },
      "expression": false,
      "start": 1268,
      "end": 1451
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InMemberOfClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1474
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1495
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1498
                    },
                    "typeArguments": null,
                    "start": 1497,
                    "end": 1498
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1501,
                      "end": 1502
                    },
                    "typeArguments": null,
                    "start": 1501,
                    "end": 1502
                  }
                ],
                "start": 1497,
                "end": 1502
              },
              "start": 1495,
              "end": 1502
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
            "start": 1481,
            "end": 1503
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 1508,
              "end": 1514
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1531,
                        "end": 1534
                      },
                      "operator": "in",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1538,
                          "end": 1542
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1543,
                          "end": 1547
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1538,
                        "end": 1547
                      },
                      "start": 1531,
                      "end": 1547
                    },
                    "consequent": {
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1570,
                                    "end": 1576
                                  },
                                  "start": 1568,
                                  "end": 1576
                                },
                                "start": 1567,
                                "end": 1576
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1579,
                                    "end": 1583
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1584,
                                    "end": 1588
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1579,
                                  "end": 1588
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1589,
                                  "end": 1590
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1579,
                                "end": 1590
                              },
                              "definite": false,
                              "start": 1567,
                              "end": 1590
                            }
                          ],
                          "declare": false,
                          "start": 1563,
                          "end": 1591
                        }
                      ],
                      "start": 1549,
                      "end": 1601
                    },
                    "alternate": {
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
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1628,
                                    "end": 1634
                                  },
                                  "start": 1626,
                                  "end": 1634
                                },
                                "start": 1625,
                                "end": 1634
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1637,
                                    "end": 1641
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1642,
                                    "end": 1646
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1637,
                                  "end": 1646
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1647,
                                  "end": 1648
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1637,
                                "end": 1648
                              },
                              "definite": false,
                              "start": 1625,
                              "end": 1648
                            }
                          ],
                          "declare": false,
                          "start": 1621,
                          "end": 1649
                        }
                      ],
                      "start": 1607,
                      "end": 1659
                    },
                    "start": 1527,
                    "end": 1659
                  }
                ],
                "start": 1517,
                "end": 1665
              },
              "expression": false,
              "start": 1514,
              "end": 1665
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1508,
            "end": 1665
          }
        ],
        "start": 1475,
        "end": 1667
      },
      "abstract": false,
      "declare": false,
      "start": 1453,
      "end": 1667
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelfAssert",
        "optional": false,
        "typeAnnotation": null,
        "start": 1701,
        "end": 1711
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1719
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1721,
                "end": 1727
              },
              "start": 1719,
              "end": 1727
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
            "start": 1718,
            "end": 1728
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 1733,
              "end": 1739
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1756,
                        "end": 1759
                      },
                      "operator": "in",
                      "right": {
                        "type": "ThisExpression",
                        "start": 1763,
                        "end": 1767
                      },
                      "start": 1756,
                      "end": 1767
                    },
                    "consequent": {
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1790,
                                    "end": 1796
                                  },
                                  "start": 1788,
                                  "end": 1796
                                },
                                "start": 1787,
                                "end": 1796
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1799,
                                  "end": 1803
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1804,
                                  "end": 1805
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1799,
                                "end": 1805
                              },
                              "definite": false,
                              "start": 1787,
                              "end": 1805
                            }
                          ],
                          "declare": false,
                          "start": 1783,
                          "end": 1806
                        }
                      ],
                      "start": 1769,
                      "end": 1816
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1822,
                      "end": 1833
                    },
                    "start": 1752,
                    "end": 1833
                  }
                ],
                "start": 1742,
                "end": 1839
              },
              "expression": false,
              "start": 1739,
              "end": 1839
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1733,
            "end": 1839
          }
        ],
        "start": 1712,
        "end": 1841
      },
      "abstract": false,
      "declare": false,
      "start": 1695,
      "end": 1841
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Indexed",
        "optional": false,
        "typeAnnotation": null,
        "start": 1853,
        "end": 1860
      },
      "typeParameters": null,
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1871,
                    "end": 1877
                  },
                  "start": 1869,
                  "end": 1877
                },
                "start": 1868,
                "end": 1877
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1880,
                "end": 1883
              },
              "start": 1878,
              "end": 1883
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1867,
            "end": 1884
          }
        ],
        "start": 1861,
        "end": 1886
      },
      "declare": false,
      "start": 1843,
      "end": 1886
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1897,
        "end": 1898
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Indexed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1902,
                "end": 1909
              },
              "typeArguments": null,
              "start": 1902,
              "end": 1909
            },
            "start": 1900,
            "end": 1909
          },
          "start": 1899,
          "end": 1909
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1921,
                "end": 1924
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1928,
                "end": 1929
              },
              "start": 1921,
              "end": 1929
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1948,
                      "end": 1949
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1950,
                      "end": 1951
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1948,
                    "end": 1951
                  },
                  "start": 1941,
                  "end": 1952
                }
              ],
              "start": 1931,
              "end": 1958
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 1972,
                  "end": 1975
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1979,
                  "end": 1980
                },
                "start": 1972,
                "end": 1980
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1999,
                        "end": 2000
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2001,
                        "end": 2002
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1999,
                      "end": 2002
                    },
                    "start": 1992,
                    "end": 2003
                  }
                ],
                "start": 1982,
                "end": 2009
              },
              "alternate": null,
              "start": 1968,
              "end": 2009
            },
            "start": 1917,
            "end": 2009
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 2021,
                  "end": 2024
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2028,
                  "end": 2029
                },
                "start": 2021,
                "end": 2029
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2033,
                  "end": 2034
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2035,
                  "end": 2036
                },
                "optional": false,
                "computed": false,
                "start": 2033,
                "end": 2036
              },
              "start": 2021,
              "end": 2036
            },
            "start": 2014,
            "end": 2037
          }
        ],
        "start": 1911,
        "end": 2039
      },
      "expression": false,
      "start": 1888,
      "end": 2039
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2039
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
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 91,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "namedClasses",
    "start": 100,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 203,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "multipleClasses",
    "start": 212,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 256,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 260,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "b",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "anonymousClasses",
    "start": 373,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 436,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 514,
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
    "value": "b",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 528,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "AWithOptionalProp",
    "start": 534,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 558,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 568,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "BWithOptionalProp",
    "start": 574,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 609,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "positiveTestClassesWithOptionalProperties",
    "start": 618,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "AWithOptionalProp",
    "start": 663,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "BWithOptionalProp",
    "start": 683,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 712,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 716,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 764,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 784,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "AWithOptionalProp",
    "start": 795,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 845,
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
    "value": "b",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 858,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "inParenthesizedExpression",
    "start": 867,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 913,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 917,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 935,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 984,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "ClassWithUnionProp",
    "start": 1013,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1050,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "inProperty",
    "start": 1059,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "ClassWithUnionProp",
    "start": 1073,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1099,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1135,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1160,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1210,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "NestedClassWithProp",
    "start": 1216,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 1238,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "ClassWithUnionProp",
    "start": 1245,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "innestedProperty",
    "start": 1277,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "NestedClassWithProp",
    "start": 1297,
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
    "value": "{",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1332,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1347,
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
    "value": "let",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 1377,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1383,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1397,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "=",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 1430,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1453,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "InMemberOfClass",
    "start": 1459,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1481,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1491,
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
    "value": "A",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "inThis",
    "start": 1508,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1535,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1538,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1543,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1579,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1602,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1628,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1637,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1642,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1695,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "SelfAssert",
    "start": 1701,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "inThis",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1756,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1760,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1763,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1783,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1799,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1817,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1843,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "Indexed",
    "start": 1853,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1871,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1880,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1888,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "Indexed",
    "start": 1902,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1917,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1921,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1925,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1941,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1963,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1968,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1972,
    "end": 1975
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1976,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1992,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2014,
    "end": 2020
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 2021,
    "end": 2024
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2025,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2030,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039
  }
]
```
