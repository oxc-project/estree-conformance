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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 21
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 24,
              "end": 26
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 27
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
              "start": 32,
              "end": 43
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "copy",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 73,
                                  "end": 77
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 78,
                                  "end": 82
                                },
                                "start": 73,
                                "end": 82
                              },
                              "typeArguments": null,
                              "start": 66,
                              "end": 82
                            },
                            "start": 64,
                            "end": 82
                          },
                          "start": 60,
                          "end": 82
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 85,
                          "end": 87
                        },
                        "definite": false,
                        "start": 60,
                        "end": 87
                      }
                    ],
                    "declare": false,
                    "start": 56,
                    "end": 88
                  }
                ],
                "start": 46,
                "end": 94
              },
              "expression": false,
              "start": 43,
              "end": 94
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 32,
            "end": 94
          }
        ],
        "start": 11,
        "end": 96
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 109
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
            },
            "typeAnnotation": null,
            "value": {
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
                    "start": 125,
                    "end": 128
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 130,
                    "end": 132
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 125,
                  "end": 132
                }
              ],
              "start": 123,
              "end": 134
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 135
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "this",
              "raw": "'this'",
              "start": 141,
              "end": 147
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 151,
              "end": 153
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 154
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
              "start": 159,
              "end": 170
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "copy",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 200,
                                  "end": 204
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 205,
                                  "end": 209
                                },
                                "start": 200,
                                "end": 209
                              },
                              "typeArguments": null,
                              "start": 193,
                              "end": 209
                            },
                            "start": 191,
                            "end": 209
                          },
                          "start": 187,
                          "end": 209
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
                                "start": 214,
                                "end": 217
                              },
                              "value": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 219,
                                "end": 221
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 214,
                              "end": 221
                            }
                          ],
                          "start": 212,
                          "end": 223
                        },
                        "definite": false,
                        "start": 187,
                        "end": 223
                      }
                    ],
                    "declare": false,
                    "start": 183,
                    "end": 224
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "ThisExpression",
                                    "start": 249,
                                    "end": 253
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 254,
                                    "end": 258
                                  },
                                  "start": 249,
                                  "end": 258
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 259,
                                  "end": 262
                                },
                                "start": 249,
                                "end": 262
                              },
                              "typeArguments": null,
                              "start": 242,
                              "end": 262
                            },
                            "start": 240,
                            "end": 262
                          },
                          "start": 237,
                          "end": 262
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 265,
                          "end": 267
                        },
                        "definite": false,
                        "start": 237,
                        "end": 267
                      }
                    ],
                    "declare": false,
                    "start": 233,
                    "end": 268
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
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "ThisExpression",
                                "start": 295,
                                "end": 299
                              },
                              "typeArguments": null,
                              "start": 288,
                              "end": 299
                            },
                            "start": 286,
                            "end": 299
                          },
                          "start": 282,
                          "end": 299
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "definite": false,
                        "start": 282,
                        "end": 306
                      }
                    ],
                    "declare": false,
                    "start": 278,
                    "end": 307
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 320
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 325
                      },
                      "optional": false,
                      "computed": false,
                      "start": 316,
                      "end": 325
                    },
                    "directive": null,
                    "start": 316,
                    "end": 326
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
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 352,
                                  "end": 356
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 357,
                                  "end": 361
                                },
                                "start": 352,
                                "end": 361
                              },
                              "typeArguments": null,
                              "start": 345,
                              "end": 361
                            },
                            "start": 343,
                            "end": 361
                          },
                          "start": 340,
                          "end": 361
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 364,
                          "end": 366
                        },
                        "definite": false,
                        "start": 340,
                        "end": 366
                      }
                    ],
                    "declare": false,
                    "start": 336,
                    "end": 367
                  }
                ],
                "start": 173,
                "end": 373
              },
              "expression": false,
              "start": 170,
              "end": 373
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 373
          }
        ],
        "start": 110,
        "end": 375
      },
      "abstract": false,
      "declare": false,
      "start": 98,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 392
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
            "kind": "let",
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 415,
                          "end": 419
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 422
                        },
                        "start": 415,
                        "end": 422
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 422
                    },
                    "start": 406,
                    "end": 422
                  },
                  "start": 405,
                  "end": 422
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 425,
                  "end": 426
                },
                "definite": false,
                "start": 405,
                "end": 426
              }
            ],
            "declare": false,
            "start": 401,
            "end": 427
          }
        ],
        "start": 395,
        "end": 429
      },
      "expression": false,
      "start": 378,
      "end": 429
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 445
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
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
                    "name": "no",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 456
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 458,
                      "end": 464
                    },
                    "start": 456,
                    "end": 464
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 454,
                  "end": 464
                }
              ],
              "start": 452,
              "end": 466
            },
            "start": 450,
            "end": 466
          },
          "start": 446,
          "end": 466
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 488,
                          "end": 492
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 495
                        },
                        "start": 488,
                        "end": 495
                      },
                      "typeArguments": null,
                      "start": 481,
                      "end": 495
                    },
                    "start": 479,
                    "end": 495
                  },
                  "start": 478,
                  "end": 495
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 498,
                  "end": 499
                },
                "definite": false,
                "start": 478,
                "end": 499
              }
            ],
            "declare": false,
            "start": 474,
            "end": 500
          }
        ],
        "start": 468,
        "end": 502
      },
      "expression": false,
      "start": 431,
      "end": 502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 518
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                        "name": "no",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 527,
                        "end": 529
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 531,
                          "end": 537
                        },
                        "start": 529,
                        "end": 537
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 527,
                      "end": 537
                    }
                  ],
                  "start": 525,
                  "end": 539
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 542,
                  "end": 551
                }
              ],
              "start": 525,
              "end": 551
            },
            "start": 523,
            "end": 551
          },
          "start": 519,
          "end": 551
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 573,
                          "end": 577
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 580
                        },
                        "start": 573,
                        "end": 580
                      },
                      "typeArguments": null,
                      "start": 566,
                      "end": 580
                    },
                    "start": 564,
                    "end": 580
                  },
                  "start": 563,
                  "end": 580
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 583,
                  "end": 584
                },
                "definite": false,
                "start": 563,
                "end": 584
              }
            ],
            "declare": false,
            "start": 559,
            "end": 585
          }
        ],
        "start": 553,
        "end": 587
      },
      "expression": false,
      "start": 504,
      "end": 587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 600
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
              "name": "no",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 609
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 612,
              "end": 613
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 607,
            "end": 614
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 621
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
                    "type": "VariableDeclaration",
                    "kind": "let",
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
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 690,
                                  "end": 694
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "no",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 695,
                                  "end": 697
                                },
                                "start": 690,
                                "end": 697
                              },
                              "typeArguments": null,
                              "start": 683,
                              "end": 697
                            },
                            "start": 681,
                            "end": 697
                          },
                          "start": 680,
                          "end": 697
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 700,
                          "end": 701
                        },
                        "definite": false,
                        "start": 680,
                        "end": 701
                      }
                    ],
                    "declare": false,
                    "start": 676,
                    "end": 702
                  }
                ],
                "start": 630,
                "end": 708
              },
              "id": null,
              "generator": false,
              "start": 624,
              "end": 708
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 620,
            "end": 708
          }
        ],
        "start": 601,
        "end": 710
      },
      "abstract": false,
      "declare": false,
      "start": 589,
      "end": 710
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 727
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 746
                  },
                  "init": {
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
                          "type": "VariableDeclaration",
                          "kind": "let",
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
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 779,
                                        "end": 783
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 784,
                                        "end": 786
                                      },
                                      "start": 779,
                                      "end": 786
                                    },
                                    "typeArguments": null,
                                    "start": 772,
                                    "end": 786
                                  },
                                  "start": 770,
                                  "end": 786
                                },
                                "start": 769,
                                "end": 786
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 789,
                                "end": 790
                              },
                              "definite": false,
                              "start": 769,
                              "end": 790
                            }
                          ],
                          "declare": false,
                          "start": 765,
                          "end": 791
                        }
                      ],
                      "start": 755,
                      "end": 797
                    },
                    "id": null,
                    "generator": false,
                    "start": 749,
                    "end": 797
                  },
                  "definite": false,
                  "start": 745,
                  "end": 797
                }
              ],
              "declare": false,
              "start": 741,
              "end": 797
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 734,
            "end": 797
          }
        ],
        "start": 728,
        "end": 799
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 712,
      "end": 799
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 816
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 834,
                    "end": 835
                  },
                  "init": {
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
                          "type": "VariableDeclaration",
                          "kind": "let",
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
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 868,
                                        "end": 872
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 873,
                                        "end": 875
                                      },
                                      "start": 868,
                                      "end": 875
                                    },
                                    "typeArguments": null,
                                    "start": 861,
                                    "end": 875
                                  },
                                  "start": 859,
                                  "end": 875
                                },
                                "start": 858,
                                "end": 875
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 878,
                                "end": 879
                              },
                              "definite": false,
                              "start": 858,
                              "end": 879
                            }
                          ],
                          "declare": false,
                          "start": 854,
                          "end": 880
                        }
                      ],
                      "start": 844,
                      "end": 886
                    },
                    "id": null,
                    "generator": false,
                    "start": 838,
                    "end": 886
                  },
                  "definite": false,
                  "start": 834,
                  "end": 886
                }
              ],
              "declare": false,
              "start": 830,
              "end": 886
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 823,
            "end": 886
          }
        ],
        "start": 817,
        "end": 888
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 801,
      "end": 888
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
            "name": "Test8",
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 901
          },
          "init": {
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
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "ThisExpression",
                                "start": 930,
                                "end": 934
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 935,
                                "end": 937
                              },
                              "start": 930,
                              "end": 937
                            },
                            "typeArguments": null,
                            "start": 923,
                            "end": 937
                          },
                          "start": 921,
                          "end": 937
                        },
                        "start": 920,
                        "end": 937
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 940,
                        "end": 941
                      },
                      "definite": false,
                      "start": 920,
                      "end": 941
                    }
                  ],
                  "declare": false,
                  "start": 916,
                  "end": 942
                }
              ],
              "start": 910,
              "end": 944
            },
            "id": null,
            "generator": false,
            "start": 904,
            "end": 944
          },
          "definite": false,
          "start": 896,
          "end": 944
        }
      ],
      "declare": false,
      "start": 890,
      "end": 944
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test9",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 957
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
              "name": "no",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 966
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 969,
              "end": 970
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 964,
            "end": 971
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 980
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 983,
              "end": 984
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 976,
            "end": 985
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
              "start": 991,
              "end": 992
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
                        "type": "ThisExpression",
                        "start": 1009,
                        "end": 1013
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test9D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1025,
                        "end": 1032
                      },
                      "start": 1009,
                      "end": 1032
                    },
                    "consequent": {
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
                                "name": "d1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "ThisExpression",
                                      "start": 1065,
                                      "end": 1069
                                    },
                                    "typeArguments": null,
                                    "start": 1058,
                                    "end": 1069
                                  },
                                  "start": 1056,
                                  "end": 1069
                                },
                                "start": 1054,
                                "end": 1069
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1072,
                                "end": 1076
                              },
                              "definite": false,
                              "start": 1054,
                              "end": 1076
                            }
                          ],
                          "declare": false,
                          "start": 1048,
                          "end": 1077
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1090,
                                "end": 1092
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1093,
                                "end": 1095
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1090,
                              "end": 1095
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1090,
                            "end": 1097
                          },
                          "directive": null,
                          "start": 1090,
                          "end": 1098
                        }
                      ],
                      "start": 1034,
                      "end": 1108
                    },
                    "alternate": null,
                    "start": 1005,
                    "end": 1108
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1122,
                        "end": 1126
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test9D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1138,
                        "end": 1145
                      },
                      "start": 1122,
                      "end": 1145
                    },
                    "consequent": {
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
                                "name": "d2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "ThisExpression",
                                      "start": 1178,
                                      "end": 1182
                                    },
                                    "typeArguments": null,
                                    "start": 1171,
                                    "end": 1182
                                  },
                                  "start": 1169,
                                  "end": 1182
                                },
                                "start": 1167,
                                "end": 1182
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1185,
                                "end": 1189
                              },
                              "definite": false,
                              "start": 1167,
                              "end": 1189
                            }
                          ],
                          "declare": false,
                          "start": 1161,
                          "end": 1190
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1203,
                                "end": 1205
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1206,
                                "end": 1208
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1203,
                              "end": 1208
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1203,
                            "end": 1210
                          },
                          "directive": null,
                          "start": 1203,
                          "end": 1211
                        }
                      ],
                      "start": 1147,
                      "end": 1221
                    },
                    "alternate": null,
                    "start": 1118,
                    "end": 1221
                  }
                ],
                "start": 995,
                "end": 1227
              },
              "expression": false,
              "start": 992,
              "end": 1227
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 991,
            "end": 1227
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1234
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1251,
                          "end": 1255
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1256,
                          "end": 1258
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1251,
                        "end": 1258
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1263,
                        "end": 1264
                      },
                      "start": 1251,
                      "end": 1264
                    },
                    "consequent": {
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
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1297,
                                        "end": 1301
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1302,
                                        "end": 1304
                                      },
                                      "start": 1297,
                                      "end": 1304
                                    },
                                    "typeArguments": null,
                                    "start": 1290,
                                    "end": 1304
                                  },
                                  "start": 1288,
                                  "end": 1304
                                },
                                "start": 1286,
                                "end": 1304
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1307,
                                  "end": 1311
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "no",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1312,
                                  "end": 1314
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1307,
                                "end": 1314
                              },
                              "definite": false,
                              "start": 1286,
                              "end": 1314
                            }
                          ],
                          "declare": false,
                          "start": 1280,
                          "end": 1315
                        }
                      ],
                      "start": 1266,
                      "end": 1325
                    },
                    "alternate": null,
                    "start": 1247,
                    "end": 1325
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1339,
                          "end": 1343
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1344,
                          "end": 1348
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1339,
                        "end": 1348
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1353,
                        "end": 1354
                      },
                      "start": 1339,
                      "end": 1354
                    },
                    "consequent": {
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
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1387,
                                        "end": 1391
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "this",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1392,
                                        "end": 1396
                                      },
                                      "start": 1387,
                                      "end": 1396
                                    },
                                    "typeArguments": null,
                                    "start": 1380,
                                    "end": 1396
                                  },
                                  "start": 1378,
                                  "end": 1396
                                },
                                "start": 1376,
                                "end": 1396
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1399,
                                  "end": 1403
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1404,
                                  "end": 1408
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1399,
                                "end": 1408
                              },
                              "definite": false,
                              "start": 1376,
                              "end": 1408
                            }
                          ],
                          "declare": false,
                          "start": 1370,
                          "end": 1409
                        }
                      ],
                      "start": 1356,
                      "end": 1419
                    },
                    "alternate": null,
                    "start": 1335,
                    "end": 1419
                  }
                ],
                "start": 1237,
                "end": 1425
              },
              "expression": false,
              "start": 1234,
              "end": 1425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1233,
            "end": 1425
          }
        ],
        "start": 958,
        "end": 1427
      },
      "abstract": false,
      "declare": false,
      "start": 946,
      "end": 1427
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test9D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1435,
        "end": 1442
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
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1451
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
                "start": 1454,
                "end": 1456
              },
              "expression": false,
              "start": 1451,
              "end": 1456
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1449,
            "end": 1456
          }
        ],
        "start": 1443,
        "end": 1458
      },
      "abstract": false,
      "declare": false,
      "start": 1429,
      "end": 1458
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test9D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1466,
        "end": 1473
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
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1480,
              "end": 1482
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
                "start": 1485,
                "end": 1487
              },
              "expression": false,
              "start": 1482,
              "end": 1487
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1480,
            "end": 1487
          }
        ],
        "start": 1474,
        "end": 1489
      },
      "abstract": false,
      "declare": false,
      "start": 1460,
      "end": 1489
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1497,
        "end": 1503
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
              "start": 1510,
              "end": 1511
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1516,
                      "end": 1517
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1520,
                        "end": 1526
                      },
                      "start": 1518,
                      "end": 1526
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1516,
                    "end": 1526
                  }
                ],
                "start": 1514,
                "end": 1528
              },
              "start": 1512,
              "end": 1528
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
            "start": 1510,
            "end": 1528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1534,
              "end": 1537
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 1564,
                                  "end": 1568
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1569,
                                  "end": 1570
                                },
                                "start": 1564,
                                "end": 1570
                              },
                              "typeArguments": null,
                              "start": 1557,
                              "end": 1570
                            },
                            "start": 1555,
                            "end": 1570
                          },
                          "start": 1554,
                          "end": 1570
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1573,
                            "end": 1582
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1586,
                            "end": 1589
                          },
                          "start": 1573,
                          "end": 1589
                        },
                        "definite": false,
                        "start": 1554,
                        "end": 1589
                      }
                    ],
                    "declare": false,
                    "start": 1550,
                    "end": 1590
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1603,
                        "end": 1607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1603,
                      "end": 1609
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1639,
                                        "end": 1643
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1644,
                                        "end": 1645
                                      },
                                      "start": 1639,
                                      "end": 1645
                                    },
                                    "typeArguments": null,
                                    "start": 1632,
                                    "end": 1645
                                  },
                                  "start": 1630,
                                  "end": 1645
                                },
                                "start": 1629,
                                "end": 1645
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1648,
                                  "end": 1657
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1661,
                                  "end": 1664
                                },
                                "start": 1648,
                                "end": 1664
                              },
                              "definite": false,
                              "start": 1629,
                              "end": 1664
                            }
                          ],
                          "declare": false,
                          "start": 1625,
                          "end": 1665
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "ThisExpression",
                                          "start": 1730,
                                          "end": 1734
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1735,
                                          "end": 1736
                                        },
                                        "start": 1730,
                                        "end": 1736
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1737,
                                        "end": 1738
                                      },
                                      "start": 1730,
                                      "end": 1738
                                    },
                                    "typeArguments": null,
                                    "start": 1723,
                                    "end": 1738
                                  },
                                  "start": 1721,
                                  "end": 1738
                                },
                                "start": 1720,
                                "end": 1738
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1741,
                                  "end": 1750
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1754,
                                  "end": 1757
                                },
                                "start": 1741,
                                "end": 1757
                              },
                              "definite": false,
                              "start": 1720,
                              "end": 1757
                            }
                          ],
                          "declare": false,
                          "start": 1716,
                          "end": 1758
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1776,
                                "end": 1780
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1781,
                                "end": 1782
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1776,
                              "end": 1782
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1783,
                              "end": 1784
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1776,
                            "end": 1784
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
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeQuery",
                                          "exprName": {
                                            "type": "TSQualifiedName",
                                            "left": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "ThisExpression",
                                                "start": 1818,
                                                "end": 1822
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1823,
                                                "end": 1824
                                              },
                                              "start": 1818,
                                              "end": 1824
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "b",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1825,
                                              "end": 1826
                                            },
                                            "start": 1818,
                                            "end": 1826
                                          },
                                          "typeArguments": null,
                                          "start": 1811,
                                          "end": 1826
                                        },
                                        "start": 1809,
                                        "end": 1826
                                      },
                                      "start": 1808,
                                      "end": 1826
                                    },
                                    "init": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1829,
                                        "end": 1838
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 1842,
                                        "end": 1845
                                      },
                                      "start": 1829,
                                      "end": 1845
                                    },
                                    "definite": false,
                                    "start": 1808,
                                    "end": 1845
                                  }
                                ],
                                "declare": false,
                                "start": 1804,
                                "end": 1846
                              }
                            ],
                            "start": 1786,
                            "end": 1889
                          },
                          "alternate": null,
                          "start": 1772,
                          "end": 1889
                        }
                      ],
                      "start": 1611,
                      "end": 1899
                    },
                    "alternate": null,
                    "start": 1599,
                    "end": 1899
                  }
                ],
                "start": 1540,
                "end": 1905
              },
              "expression": false,
              "start": 1537,
              "end": 1905
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1534,
            "end": 1905
          }
        ],
        "start": 1504,
        "end": 1907
      },
      "abstract": false,
      "declare": false,
      "start": 1491,
      "end": 1907
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1921
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
              "name": "this",
              "optional": false,
              "typeAnnotation": null,
              "start": 1928,
              "end": 1932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1937,
                      "end": 1938
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1941,
                        "end": 1947
                      },
                      "start": 1939,
                      "end": 1947
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1937,
                    "end": 1947
                  }
                ],
                "start": 1935,
                "end": 1949
              },
              "start": 1933,
              "end": 1949
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
            "start": 1928,
            "end": 1950
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1963
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1982,
                          "end": 1983
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1986,
                          "end": 1990
                        },
                        "definite": false,
                        "start": 1982,
                        "end": 1990
                      }
                    ],
                    "declare": false,
                    "start": 1976,
                    "end": 1991
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "o",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2016,
                                  "end": 2017
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2018,
                                  "end": 2022
                                },
                                "start": 2016,
                                "end": 2022
                              },
                              "typeArguments": null,
                              "start": 2009,
                              "end": 2022
                            },
                            "start": 2007,
                            "end": 2022
                          },
                          "start": 2004,
                          "end": 2022
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 2025,
                          "end": 2027
                        },
                        "definite": false,
                        "start": 2004,
                        "end": 2027
                      }
                    ],
                    "declare": false,
                    "start": 2000,
                    "end": 2028
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2042,
                          "end": 2043
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2044,
                          "end": 2048
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2042,
                        "end": 2048
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2052,
                            "end": 2053
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "this",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2054,
                            "end": 2058
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2052,
                          "end": 2058
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2059,
                          "end": 2060
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2052,
                        "end": 2060
                      },
                      "start": 2042,
                      "end": 2060
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
                                    "start": 2083,
                                    "end": 2089
                                  },
                                  "start": 2081,
                                  "end": 2089
                                },
                                "start": 2080,
                                "end": 2089
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2092,
                                    "end": 2093
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "this",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2094,
                                    "end": 2098
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2092,
                                  "end": 2098
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2099,
                                  "end": 2100
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2092,
                                "end": 2100
                              },
                              "definite": false,
                              "start": 2080,
                              "end": 2100
                            }
                          ],
                          "declare": false,
                          "start": 2076,
                          "end": 2101
                        }
                      ],
                      "start": 2062,
                      "end": 2140
                    },
                    "alternate": null,
                    "start": 2038,
                    "end": 2140
                  }
                ],
                "start": 1966,
                "end": 2146
              },
              "expression": false,
              "start": 1963,
              "end": 2146
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1960,
            "end": 2146
          }
        ],
        "start": 1922,
        "end": 2148
      },
      "abstract": false,
      "declare": false,
      "start": 1909,
      "end": 2148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tests12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2156,
        "end": 2163
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
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2170,
              "end": 2175
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
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2199,
                      "end": 2203
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2213,
                        "end": 2217
                      },
                      "typeArguments": null,
                      "start": 2206,
                      "end": 2217
                    },
                    "declare": false,
                    "start": 2194,
                    "end": 2218
                  }
                ],
                "start": 2178,
                "end": 2224
              },
              "expression": false,
              "start": 2175,
              "end": 2224
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2170,
            "end": 2224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2230,
              "end": 2235
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
                    "type": "ForStatement",
                    "init": null,
                    "test": null,
                    "update": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2263,
                      "end": 2265
                    },
                    "start": 2254,
                    "end": 2265
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2283
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2293,
                        "end": 2297
                      },
                      "typeArguments": null,
                      "start": 2286,
                      "end": 2297
                    },
                    "declare": false,
                    "start": 2274,
                    "end": 2298
                  }
                ],
                "start": 2238,
                "end": 2304
              },
              "expression": false,
              "start": 2235,
              "end": 2304
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2230,
            "end": 2304
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2310,
              "end": 2315
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
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dummy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2369,
                            "end": 2374
                          },
                          "init": null,
                          "definite": false,
                          "start": 2369,
                          "end": 2374
                        }
                      ],
                      "declare": false,
                      "start": 2363,
                      "end": 2374
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2378,
                      "end": 2380
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2382,
                      "end": 2384
                    },
                    "start": 2358,
                    "end": 2384
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2398,
                      "end": 2402
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2412,
                        "end": 2416
                      },
                      "typeArguments": null,
                      "start": 2405,
                      "end": 2416
                    },
                    "declare": false,
                    "start": 2393,
                    "end": 2417
                  }
                ],
                "start": 2318,
                "end": 2423
              },
              "expression": false,
              "start": 2315,
              "end": 2423
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2310,
            "end": 2423
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2434
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
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dummy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2488,
                            "end": 2493
                          },
                          "init": null,
                          "definite": false,
                          "start": 2488,
                          "end": 2493
                        }
                      ],
                      "declare": false,
                      "start": 2482,
                      "end": 2493
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2497,
                      "end": 2499
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2501,
                      "end": 2503
                    },
                    "start": 2477,
                    "end": 2503
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2517,
                      "end": 2521
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2531,
                        "end": 2535
                      },
                      "typeArguments": null,
                      "start": 2524,
                      "end": 2535
                    },
                    "declare": false,
                    "start": 2512,
                    "end": 2536
                  }
                ],
                "start": 2437,
                "end": 2542
              },
              "expression": false,
              "start": 2434,
              "end": 2542
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2429,
            "end": 2542
          }
        ],
        "start": 2164,
        "end": 2544
      },
      "abstract": false,
      "declare": false,
      "start": 2150,
      "end": 2544
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2544
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
    "value": "Test",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 32,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "copy",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "foo",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "String",
    "value": "''",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "'this'",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "String",
    "value": "''",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 159,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "copy",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 193,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "String",
    "value": "''",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 242,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "String",
    "value": "''",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 288,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 345,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "String",
    "value": "''",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 378,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 408,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 431,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
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
    "value": "no",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 481,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 504,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "no",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 542,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 566,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 589,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 595,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
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
    "value": "=>",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 683,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 695,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 712,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "Test6",
    "start": 722,
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
    "value": "export",
    "start": 734,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 741,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 752,
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
    "value": "let",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 772,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 801,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Test7",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 823,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 830,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
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
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 841,
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
    "value": "let",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 861,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 890,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "Test8",
    "start": 896,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=>",
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
    "type": "Keyword",
    "value": "let",
    "start": 916,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 923,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 930,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 935,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 946,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "Test9",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 964,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 969,
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
    "value": "this",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1005,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1009,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1014,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "Test9D1",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1072,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1090,
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
    "value": "f1",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1118,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1122,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1127,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "Test9D2",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1178,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1247,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 1256,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1259,
    "end": 1262
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1290,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1297,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1307,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1339,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1344,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1380,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1387,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1392,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1399,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1404,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1429,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "Test9D1",
    "start": 1435,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1449,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "Test9D2",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1480,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1491,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "Test10",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1550,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1557,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1564,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1573,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1599,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1625,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1648,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1716,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1723,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1730,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1741,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1754,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1776,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1804,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1811,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1818,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1829,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1839,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1909,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "Test11",
    "start": 1915,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1928,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1941,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1976,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1986,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2004,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2009,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2018,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2044,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2049,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2054,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2076,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2083,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2094,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2150,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "Tests12",
    "start": 2156,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 2170,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2194,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2199,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2206,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2213,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 2230,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2254,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2274,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2279,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2286,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2293,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 2310,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2363,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 2369,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2375,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2393,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2398,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2405,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2412,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 2429,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2477,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2482,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 2488,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2494,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2512,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2517,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2524,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2531,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544
  }
]
```
