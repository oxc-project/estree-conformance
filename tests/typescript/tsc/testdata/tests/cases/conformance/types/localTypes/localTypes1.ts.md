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
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 37,
                  "end": 38
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 40,
                  "end": 41
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 43,
                  "end": 44
                }
              ],
              "start": 27,
              "end": 50
            },
            "const": false,
            "declare": false,
            "start": 20,
            "end": 50
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
              "start": 61,
              "end": 62
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
                    "start": 73,
                    "end": 74
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 77
                      },
                      "typeArguments": null,
                      "start": 76,
                      "end": 77
                    },
                    "start": 74,
                    "end": 77
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
                  "start": 73,
                  "end": 78
                }
              ],
              "start": 63,
              "end": 84
            },
            "abstract": false,
            "declare": false,
            "start": 55,
            "end": 84
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 112
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 115
                      },
                      "typeArguments": null,
                      "start": 114,
                      "end": 115
                    },
                    "start": 112,
                    "end": 115
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 111,
                  "end": 116
                }
              ],
              "start": 101,
              "end": 122
            },
            "declare": false,
            "start": 89,
            "end": 122
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "typeArguments": null,
                "start": 136,
                "end": 137
              },
              "start": 136,
              "end": 139
            },
            "declare": false,
            "start": 127,
            "end": 140
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 150,
                    "end": 153
                  },
                  "start": 149,
                  "end": 153
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 162
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 157,
                      "end": 164
                    }
                  ],
                  "start": 156,
                  "end": 165
                },
                "definite": false,
                "start": 149,
                "end": 165
              }
            ],
            "declare": false,
            "start": 145,
            "end": 166
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 173,
                    "end": 174
                  },
                  "optional": false,
                  "computed": true,
                  "start": 171,
                  "end": 175
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "optional": false,
                "computed": false,
                "start": 171,
                "end": 177
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 183
                },
                "optional": false,
                "computed": false,
                "start": 180,
                "end": 183
              },
              "start": 171,
              "end": 183
            },
            "directive": null,
            "start": 171,
            "end": 184
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "start": 189,
            "end": 198
          }
        ],
        "start": 14,
        "end": 200
      },
      "expression": false,
      "start": 0,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
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
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 266,
                          "end": 267
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 266,
                        "end": 267
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 269,
                        "end": 270
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 273
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 272,
                        "end": 273
                      }
                    ],
                    "start": 252,
                    "end": 283
                  },
                  "const": false,
                  "declare": false,
                  "start": 245,
                  "end": 283
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
                    "start": 298,
                    "end": 299
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
                          "start": 314,
                          "end": 315
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 317,
                              "end": 318
                            },
                            "typeArguments": null,
                            "start": 317,
                            "end": 318
                          },
                          "start": 315,
                          "end": 318
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
                        "start": 314,
                        "end": 319
                      }
                    ],
                    "start": 300,
                    "end": 329
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 292,
                  "end": 329
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 349
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 365
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 367,
                              "end": 368
                            },
                            "typeArguments": null,
                            "start": 367,
                            "end": 368
                          },
                          "start": 365,
                          "end": 368
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 364,
                        "end": 369
                      }
                    ],
                    "start": 350,
                    "end": 379
                  },
                  "declare": false,
                  "start": 338,
                  "end": 379
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "typeArguments": null,
                      "start": 397,
                      "end": 398
                    },
                    "start": 397,
                    "end": 400
                  },
                  "declare": false,
                  "start": 388,
                  "end": 401
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 417,
                              "end": 418
                            },
                            "typeArguments": null,
                            "start": 417,
                            "end": 418
                          },
                          "start": 415,
                          "end": 418
                        },
                        "start": 414,
                        "end": 418
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 426,
                              "end": 427
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 422,
                            "end": 429
                          }
                        ],
                        "start": 421,
                        "end": 430
                      },
                      "definite": false,
                      "start": 414,
                      "end": 430
                    }
                  ],
                  "declare": false,
                  "start": 410,
                  "end": 431
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 441
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 442,
                          "end": 443
                        },
                        "optional": false,
                        "computed": true,
                        "start": 440,
                        "end": 444
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "optional": false,
                      "computed": false,
                      "start": 440,
                      "end": 446
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 450
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 451,
                        "end": 452
                      },
                      "optional": false,
                      "computed": false,
                      "start": 449,
                      "end": 452
                    },
                    "start": 440,
                    "end": 452
                  },
                  "directive": null,
                  "start": 440,
                  "end": 453
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 470
                  },
                  "start": 462,
                  "end": 471
                }
              ],
              "start": 235,
              "end": 477
            },
            "expression": false,
            "start": 222,
            "end": 477
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 489,
              "end": 492
            },
            "start": 482,
            "end": 493
          }
        ],
        "start": 216,
        "end": 495
      },
      "expression": false,
      "start": 202,
      "end": 495
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 508
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 512,
              "end": 519
            },
            "start": 510,
            "end": 519
          },
          "start": 509,
          "end": 519
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 531,
              "end": 535
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 569
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 568,
                        "end": 569
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 571,
                          "end": 572
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 571,
                        "end": 572
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 575
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 574,
                        "end": 575
                      }
                    ],
                    "start": 554,
                    "end": 585
                  },
                  "const": false,
                  "declare": false,
                  "start": 547,
                  "end": 585
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 599
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 622
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
                                "start": 641,
                                "end": 642
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 644,
                                    "end": 645
                                  },
                                  "typeArguments": null,
                                  "start": 644,
                                  "end": 645
                                },
                                "start": 642,
                                "end": 645
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
                              "start": 641,
                              "end": 646
                            }
                          ],
                          "start": 623,
                          "end": 660
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 615,
                        "end": 660
                      },
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 684
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 703,
                                "end": 704
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 706,
                                    "end": 707
                                  },
                                  "typeArguments": null,
                                  "start": 706,
                                  "end": 707
                                },
                                "start": 704,
                                "end": 707
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 703,
                              "end": 708
                            }
                          ],
                          "start": 685,
                          "end": 722
                        },
                        "declare": false,
                        "start": 673,
                        "end": 722
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 741
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 744,
                              "end": 745
                            },
                            "typeArguments": null,
                            "start": 744,
                            "end": 745
                          },
                          "start": 744,
                          "end": 747
                        },
                        "declare": false,
                        "start": 735,
                        "end": 748
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 768,
                                    "end": 769
                                  },
                                  "typeArguments": null,
                                  "start": 768,
                                  "end": 769
                                },
                                "start": 766,
                                "end": 769
                              },
                              "start": 765,
                              "end": 769
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 777,
                                    "end": 778
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 773,
                                  "end": 780
                                }
                              ],
                              "start": 772,
                              "end": 781
                            },
                            "definite": false,
                            "start": 765,
                            "end": 781
                          }
                        ],
                        "declare": false,
                        "start": 761,
                        "end": 782
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 795,
                                "end": 796
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 797,
                                "end": 798
                              },
                              "optional": false,
                              "computed": true,
                              "start": 795,
                              "end": 799
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 800,
                              "end": 801
                            },
                            "optional": false,
                            "computed": false,
                            "start": 795,
                            "end": 801
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 804,
                              "end": 805
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 806,
                              "end": 807
                            },
                            "optional": false,
                            "computed": false,
                            "start": 804,
                            "end": 807
                          },
                          "start": 795,
                          "end": 807
                        },
                        "directive": null,
                        "start": 795,
                        "end": 808
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 828,
                          "end": 829
                        },
                        "start": 821,
                        "end": 830
                      }
                    ],
                    "start": 601,
                    "end": 840
                  },
                  "alternate": {
                    "type": "BlockStatement",
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
                          "start": 874,
                          "end": 875
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
                                "start": 894,
                                "end": 895
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 897,
                                    "end": 898
                                  },
                                  "typeArguments": null,
                                  "start": 897,
                                  "end": 898
                                },
                                "start": 895,
                                "end": 898
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
                              "start": 894,
                              "end": 899
                            }
                          ],
                          "start": 876,
                          "end": 913
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 868,
                        "end": 913
                      },
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "J",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 936,
                          "end": 937
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 956,
                                "end": 957
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 959,
                                    "end": 960
                                  },
                                  "typeArguments": null,
                                  "start": 959,
                                  "end": 960
                                },
                                "start": 957,
                                "end": 960
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 956,
                              "end": 961
                            }
                          ],
                          "start": 938,
                          "end": 975
                        },
                        "declare": false,
                        "start": 926,
                        "end": 975
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 993,
                          "end": 994
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "J",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 997,
                              "end": 998
                            },
                            "typeArguments": null,
                            "start": 997,
                            "end": 998
                          },
                          "start": 997,
                          "end": 1000
                        },
                        "declare": false,
                        "start": 988,
                        "end": 1001
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1021,
                                    "end": 1022
                                  },
                                  "typeArguments": null,
                                  "start": 1021,
                                  "end": 1022
                                },
                                "start": 1019,
                                "end": 1022
                              },
                              "start": 1018,
                              "end": 1022
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1030,
                                    "end": 1031
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 1026,
                                  "end": 1033
                                }
                              ],
                              "start": 1025,
                              "end": 1034
                            },
                            "definite": false,
                            "start": 1018,
                            "end": 1034
                          }
                        ],
                        "declare": false,
                        "start": 1014,
                        "end": 1035
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1048,
                                "end": 1049
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1050,
                                "end": 1051
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1048,
                              "end": 1052
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1053,
                              "end": 1054
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1048,
                            "end": 1054
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1057,
                              "end": 1058
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1059,
                              "end": 1060
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1057,
                            "end": 1060
                          },
                          "start": 1048,
                          "end": 1060
                        },
                        "directive": null,
                        "start": 1048,
                        "end": 1061
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1082
                        },
                        "start": 1074,
                        "end": 1083
                      }
                    ],
                    "start": 854,
                    "end": 1093
                  },
                  "start": 594,
                  "end": 1093
                }
              ],
              "start": 537,
              "end": 1099
            },
            "alternate": null,
            "start": 527,
            "end": 1099
          }
        ],
        "start": 521,
        "end": 1101
      },
      "expression": false,
      "start": 497,
      "end": 1101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1112,
        "end": 1114
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1129
                },
                "init": {
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
                        "type": "TSEnumDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1159,
                          "end": 1160
                        },
                        "body": {
                          "type": "TSEnumBody",
                          "members": [
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1175,
                                "end": 1176
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1175,
                              "end": 1176
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1178,
                                "end": 1179
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1178,
                              "end": 1179
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1181,
                                "end": 1182
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1181,
                              "end": 1182
                            }
                          ],
                          "start": 1161,
                          "end": 1192
                        },
                        "const": false,
                        "declare": false,
                        "start": 1154,
                        "end": 1192
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
                          "start": 1207,
                          "end": 1208
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
                                "start": 1223,
                                "end": 1224
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1226,
                                    "end": 1227
                                  },
                                  "typeArguments": null,
                                  "start": 1226,
                                  "end": 1227
                                },
                                "start": 1224,
                                "end": 1227
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
                              "start": 1223,
                              "end": 1228
                            }
                          ],
                          "start": 1209,
                          "end": 1238
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 1201,
                        "end": 1238
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1258,
                            "end": 1259
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 1254,
                          "end": 1261
                        },
                        "start": 1247,
                        "end": 1262
                      }
                    ],
                    "start": 1144,
                    "end": 1268
                  },
                  "expression": false,
                  "start": 1132,
                  "end": 1268
                },
                "definite": false,
                "start": 1127,
                "end": 1268
              }
            ],
            "declare": false,
            "start": 1123,
            "end": 1268
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
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1279
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
                        "type": "TSEnumDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1303,
                          "end": 1304
                        },
                        "body": {
                          "type": "TSEnumBody",
                          "members": [
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1319,
                                "end": 1320
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1319,
                              "end": 1320
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1322,
                                "end": 1323
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1322,
                              "end": 1323
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1325,
                                "end": 1326
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1325,
                              "end": 1326
                            }
                          ],
                          "start": 1305,
                          "end": 1336
                        },
                        "const": false,
                        "declare": false,
                        "start": 1298,
                        "end": 1336
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
                          "start": 1351,
                          "end": 1352
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
                                "start": 1367,
                                "end": 1368
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1370,
                                    "end": 1371
                                  },
                                  "typeArguments": null,
                                  "start": 1370,
                                  "end": 1371
                                },
                                "start": 1368,
                                "end": 1371
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
                              "start": 1367,
                              "end": 1372
                            }
                          ],
                          "start": 1353,
                          "end": 1382
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 1345,
                        "end": 1382
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1402,
                            "end": 1403
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 1398,
                          "end": 1405
                        },
                        "start": 1391,
                        "end": 1406
                      }
                    ],
                    "start": 1288,
                    "end": 1412
                  },
                  "id": null,
                  "generator": false,
                  "start": 1282,
                  "end": 1412
                },
                "definite": false,
                "start": 1277,
                "end": 1412
              }
            ],
            "declare": false,
            "start": 1273,
            "end": 1412
          }
        ],
        "start": 1117,
        "end": 1414
      },
      "expression": false,
      "start": 1103,
      "end": 1414
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1422,
        "end": 1423
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
              "start": 1430,
              "end": 1441
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
                    "type": "TSEnumDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1459,
                      "end": 1460
                    },
                    "body": {
                      "type": "TSEnumBody",
                      "members": [
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1475,
                            "end": 1476
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1475,
                          "end": 1476
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1478,
                            "end": 1479
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1478,
                          "end": 1479
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1481,
                            "end": 1482
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1481,
                          "end": 1482
                        }
                      ],
                      "start": 1461,
                      "end": 1492
                    },
                    "const": false,
                    "declare": false,
                    "start": 1454,
                    "end": 1492
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
                      "start": 1507,
                      "end": 1508
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
                            "start": 1523,
                            "end": 1524
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1526,
                                "end": 1527
                              },
                              "typeArguments": null,
                              "start": 1526,
                              "end": 1527
                            },
                            "start": 1524,
                            "end": 1527
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
                          "start": 1523,
                          "end": 1528
                        }
                      ],
                      "start": 1509,
                      "end": 1538
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1501,
                    "end": 1538
                  }
                ],
                "start": 1444,
                "end": 1544
              },
              "expression": false,
              "start": 1441,
              "end": 1544
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1430,
            "end": 1544
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
              "start": 1549,
              "end": 1550
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
                    "type": "TSEnumDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1568,
                      "end": 1569
                    },
                    "body": {
                      "type": "TSEnumBody",
                      "members": [
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1584,
                            "end": 1585
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1584,
                          "end": 1585
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1588
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1587,
                          "end": 1588
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1590,
                            "end": 1591
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1590,
                          "end": 1591
                        }
                      ],
                      "start": 1570,
                      "end": 1601
                    },
                    "const": false,
                    "declare": false,
                    "start": 1563,
                    "end": 1601
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
                      "start": 1616,
                      "end": 1617
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
                            "start": 1632,
                            "end": 1633
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1635,
                                "end": 1636
                              },
                              "typeArguments": null,
                              "start": 1635,
                              "end": 1636
                            },
                            "start": 1633,
                            "end": 1636
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
                          "start": 1632,
                          "end": 1637
                        }
                      ],
                      "start": 1618,
                      "end": 1647
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1610,
                    "end": 1647
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1667,
                        "end": 1668
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1663,
                      "end": 1670
                    },
                    "start": 1656,
                    "end": 1671
                  }
                ],
                "start": 1553,
                "end": 1677
              },
              "expression": false,
              "start": 1550,
              "end": 1677
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1549,
            "end": 1677
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1687
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
                    "type": "TSEnumDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1705,
                      "end": 1706
                    },
                    "body": {
                      "type": "TSEnumBody",
                      "members": [
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1721,
                            "end": 1722
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1721,
                          "end": 1722
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1724,
                            "end": 1725
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1724,
                          "end": 1725
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1727,
                            "end": 1728
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1727,
                          "end": 1728
                        }
                      ],
                      "start": 1707,
                      "end": 1738
                    },
                    "const": false,
                    "declare": false,
                    "start": 1700,
                    "end": 1738
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
                      "start": 1753,
                      "end": 1754
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
                            "start": 1769,
                            "end": 1770
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1772,
                                "end": 1773
                              },
                              "typeArguments": null,
                              "start": 1772,
                              "end": 1773
                            },
                            "start": 1770,
                            "end": 1773
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
                          "start": 1769,
                          "end": 1774
                        }
                      ],
                      "start": 1755,
                      "end": 1784
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1747,
                    "end": 1784
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1804,
                        "end": 1805
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1800,
                      "end": 1807
                    },
                    "start": 1793,
                    "end": 1808
                  }
                ],
                "start": 1690,
                "end": 1814
              },
              "expression": false,
              "start": 1687,
              "end": 1814
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1682,
            "end": 1814
          }
        ],
        "start": 1424,
        "end": 1816
      },
      "abstract": false,
      "declare": false,
      "start": 1416,
      "end": 1816
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1829
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1844,
              "end": 1845
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
                    "start": 1856,
                    "end": 1857
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1859,
                      "end": 1865
                    },
                    "start": 1857,
                    "end": 1865
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
                  "start": 1856,
                  "end": 1866
                }
              ],
              "start": 1846,
              "end": 1872
            },
            "abstract": false,
            "declare": false,
            "start": 1838,
            "end": 1872
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1887
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
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1906,
                    "end": 1907
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1916,
                    "end": 1917
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1932,
                          "end": 1933
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1935,
                            "end": 1941
                          },
                          "start": 1933,
                          "end": 1941
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
                        "start": 1932,
                        "end": 1942
                      }
                    ],
                    "start": 1918,
                    "end": 1952
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1900,
                  "end": 1952
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1971
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
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1994,
                          "end": 1995
                        },
                        "typeParameters": null,
                        "superClass": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2004,
                          "end": 2005
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
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2024,
                                "end": 2025
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2027,
                                  "end": 2033
                                },
                                "start": 2025,
                                "end": 2033
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
                              "start": 2024,
                              "end": 2034
                            }
                          ],
                          "start": 2006,
                          "end": 2048
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 1988,
                        "end": 2048
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2065,
                              "end": 2066
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2073,
                                "end": 2074
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2069,
                              "end": 2076
                            },
                            "definite": false,
                            "start": 2065,
                            "end": 2076
                          }
                        ],
                        "declare": false,
                        "start": 2061,
                        "end": 2077
                      },
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
                              "start": 2090,
                              "end": 2091
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2092,
                              "end": 2093
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2090,
                            "end": 2093
                          },
                          "right": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2096,
                            "end": 2099
                          },
                          "start": 2090,
                          "end": 2099
                        },
                        "directive": null,
                        "start": 2090,
                        "end": 2100
                      },
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
                              "start": 2113,
                              "end": 2114
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2115,
                              "end": 2116
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2113,
                            "end": 2116
                          },
                          "right": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 2119,
                            "end": 2122
                          },
                          "start": 2113,
                          "end": 2122
                        },
                        "directive": null,
                        "start": 2113,
                        "end": 2123
                      },
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
                              "start": 2136,
                              "end": 2137
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2138,
                              "end": 2139
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2136,
                            "end": 2139
                          },
                          "right": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 2142,
                            "end": 2145
                          },
                          "start": 2136,
                          "end": 2145
                        },
                        "directive": null,
                        "start": 2136,
                        "end": 2146
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2166,
                          "end": 2167
                        },
                        "start": 2159,
                        "end": 2168
                      }
                    ],
                    "start": 1974,
                    "end": 2178
                  },
                  "expression": false,
                  "start": 1961,
                  "end": 2178
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2194,
                      "end": 2195
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2194,
                    "end": 2197
                  },
                  "start": 2187,
                  "end": 2198
                }
              ],
              "start": 1890,
              "end": 2204
            },
            "expression": false,
            "start": 1877,
            "end": 2204
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2217
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2216,
              "end": 2219
            },
            "start": 2209,
            "end": 2220
          }
        ],
        "start": 1832,
        "end": 2222
      },
      "expression": false,
      "start": 1818,
      "end": 2222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2222
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
    "value": "enum",
    "start": 20,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 89,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 152,
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
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
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
    "value": "enum",
    "start": 245,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "type": "Identifier",
    "value": "A",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 338,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 388,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 393,
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
    "value": "I",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 441,
    "end": 442
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
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
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 462,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 482,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 497,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 512,
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
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 547,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 615,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 673,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 735,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 773,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 804,
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
    "value": "B",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 821,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 868,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 926,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 988,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1031,
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
    "value": "]",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1074,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1103,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1254,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1298,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1345,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1391,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1416,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1430,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1454,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1501,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1563,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "class",
    "start": 1610,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1656,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1700,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1793,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1827,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1838,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1859,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1877,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1908,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "string",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1961,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2027,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2061,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2069,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 2142,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2159,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2187,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2209,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2221,
    "end": 2222
  }
]
```
