__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 24
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 19,
        "end": 28
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "gen",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 49
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 51
                        },
                        "typeArguments": null,
                        "start": 50,
                        "end": 51
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 53,
                          "end": 54
                        },
                        "typeArguments": null,
                        "start": 53,
                        "end": 54
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 56,
                          "end": 57
                        },
                        "typeArguments": null,
                        "start": 56,
                        "end": 57
                      }
                    ],
                    "start": 49,
                    "end": 58
                  },
                  "start": 40,
                  "end": 58
                },
                "start": 37,
                "end": 58
              },
              "start": 34,
              "end": 58
            },
            "start": 32,
            "end": 58
          },
          "start": 29,
          "end": 58
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 61,
          "end": 65
        },
        "start": 59,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 69
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 70,
                "end": 71
              },
              "start": 70,
              "end": 71
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 73,
                "end": 74
              },
              "start": 73,
              "end": 74
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 76,
                "end": 77
              },
              "start": 76,
              "end": 77
            }
          ],
          "start": 69,
          "end": 78
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 102
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 111,
                          "end": 112
                        },
                        "start": 105,
                        "end": 112
                      },
                      "definite": false,
                      "start": 101,
                      "end": 112
                    }
                  ],
                  "declare": false,
                  "start": 95,
                  "end": 113
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 122,
                    "end": 123
                  },
                  "start": 115,
                  "end": 124
                }
              ],
              "start": 92,
              "end": 126
            },
            "expression": false,
            "start": 79,
            "end": 126
          }
        ],
        "optional": false,
        "start": 67,
        "end": 127
      },
      "directive": null,
      "start": 67,
      "end": 128
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 154
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 157
          }
        ],
        "start": 149,
        "end": 158
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "gen",
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Generator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 179
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 181
                            },
                            "typeArguments": null,
                            "start": 180,
                            "end": 181
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 184
                            },
                            "typeArguments": null,
                            "start": 183,
                            "end": 184
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "typeArguments": null,
                            "start": 186,
                            "end": 187
                          }
                        ],
                        "start": 179,
                        "end": 188
                      },
                      "start": 170,
                      "end": 188
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsyncGenerator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 205
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 206,
                              "end": 207
                            },
                            "typeArguments": null,
                            "start": 206,
                            "end": 207
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 210
                            },
                            "typeArguments": null,
                            "start": 209,
                            "end": 210
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 212,
                              "end": 213
                            },
                            "typeArguments": null,
                            "start": 212,
                            "end": 213
                          }
                        ],
                        "start": 205,
                        "end": 214
                      },
                      "start": 191,
                      "end": 214
                    }
                  ],
                  "start": 170,
                  "end": 214
                },
                "start": 167,
                "end": 214
              },
              "start": 164,
              "end": 214
            },
            "start": 162,
            "end": 214
          },
          "start": 159,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        },
        "start": 215,
        "end": 221
      },
      "body": null,
      "expression": false,
      "start": 130,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 225
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 226,
                "end": 227
              },
              "start": 226,
              "end": 227
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 229,
                "end": 230
              },
              "start": 229,
              "end": 230
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 232,
                "end": 233
              },
              "start": 232,
              "end": 233
            }
          ],
          "start": 225,
          "end": 234
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 273,
                          "end": 274
                        },
                        "start": 267,
                        "end": 274
                      },
                      "definite": false,
                      "start": 263,
                      "end": 274
                    }
                  ],
                  "declare": false,
                  "start": 257,
                  "end": 275
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 284,
                    "end": 285
                  },
                  "start": 277,
                  "end": 286
                }
              ],
              "start": 254,
              "end": 288
            },
            "expression": false,
            "start": 235,
            "end": 288
          }
        ],
        "optional": false,
        "start": 223,
        "end": 289
      },
      "directive": null,
      "start": 223,
      "end": 290
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 327
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Back",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 336
            },
            "initializer": null,
            "computed": false,
            "start": 332,
            "end": 336
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cancel",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 346
            },
            "initializer": null,
            "computed": false,
            "start": 340,
            "end": 346
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LoadMore",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 358
            },
            "initializer": null,
            "computed": false,
            "start": 350,
            "end": 358
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Noop",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
            },
            "initializer": null,
            "computed": false,
            "start": 362,
            "end": 366
          }
        ],
        "start": 328,
        "end": 369
      },
      "const": false,
      "declare": false,
      "start": 313,
      "end": 369
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 390
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 413
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
                      "start": 414,
                      "end": 415
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 414,
                    "end": 415
                  }
                ],
                "start": 413,
                "end": 416
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
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
                            "name": "Directive",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 424,
                            "end": 433
                          },
                          "typeArguments": null,
                          "start": 424,
                          "end": 433
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "start": 436,
                          "end": 437
                        }
                      ],
                      "start": 424,
                      "end": 437
                    },
                    "start": 422,
                    "end": 437
                  },
                  "start": 417,
                  "end": 437
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 445
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Directive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 458
                      },
                      "typeArguments": null,
                      "start": 449,
                      "end": 458
                    },
                    "start": 449,
                    "end": 458
                  },
                  "start": 440,
                  "end": 458
                },
                "start": 438,
                "end": 458
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 484
                          },
                          "prefix": true,
                          "start": 472,
                          "end": 484
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "number",
                          "raw": "\"number\"",
                          "start": 489,
                          "end": 497
                        },
                        "start": 472,
                        "end": 497
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 510
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 511,
                            "end": 516
                          },
                          "optional": false,
                          "computed": true,
                          "start": 501,
                          "end": 517
                        },
                        "operator": "!=",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 521,
                          "end": 525
                        },
                        "start": 501,
                        "end": 525
                      },
                      "start": 472,
                      "end": 525
                    },
                    "start": 465,
                    "end": 526
                  }
                ],
                "start": 459,
                "end": 530
              },
              "expression": false,
              "start": 402,
              "end": 530
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 395,
            "end": 530
          }
        ],
        "start": 391,
        "end": 532
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 371,
      "end": 532
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickPickItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 557
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
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 567
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 576
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 590
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 593,
                "end": 599
              },
              "start": 591,
              "end": 599
            },
            "accessibility": null,
            "static": false,
            "start": 579,
            "end": 600
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "detail",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 612,
                "end": 618
              },
              "start": 610,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 603,
            "end": 619
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "picked",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 628
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 631,
                "end": 638
              },
              "start": 629,
              "end": 638
            },
            "accessibility": null,
            "static": false,
            "start": 622,
            "end": 639
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alwaysShow",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 655,
                "end": 662
              },
              "start": 653,
              "end": 662
            },
            "accessibility": null,
            "static": false,
            "start": 642,
            "end": 663
          }
        ],
        "start": 558,
        "end": 665
      },
      "declare": false,
      "start": 534,
      "end": 665
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickInputStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 691
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 707
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 710,
                "end": 716
              },
              "start": 708,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 696,
            "end": 717
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prompt",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 726
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 729,
                "end": 735
              },
              "start": 727,
              "end": 735
            },
            "accessibility": null,
            "static": false,
            "start": 720,
            "end": 736
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 739,
              "end": 744
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 747,
                "end": 753
              },
              "start": 745,
              "end": 753
            },
            "accessibility": null,
            "static": false,
            "start": 739,
            "end": 754
          }
        ],
        "start": 692,
        "end": 756
      },
      "declare": false,
      "start": 667,
      "end": 756
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickPickStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 781
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
              "start": 782,
              "end": 783
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 805
              },
              "typeArguments": null,
              "start": 792,
              "end": 805
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 821
              },
              "typeArguments": null,
              "start": 808,
              "end": 821
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 782,
            "end": 821
          }
        ],
        "start": 781,
        "end": 822
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 838
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              },
              "start": 839,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 827,
            "end": 848
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 856
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 859,
                "end": 865
              },
              "start": 857,
              "end": 865
            },
            "accessibility": null,
            "static": false,
            "start": 851,
            "end": 866
          }
        ],
        "start": 823,
        "end": 868
      },
      "declare": false,
      "start": 758,
      "end": 868
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepGenerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 875,
        "end": 888
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
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 904
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 912,
                        "end": 925
                      },
                      "typeArguments": null,
                      "start": 912,
                      "end": 925
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 928,
                        "end": 942
                      },
                      "typeArguments": null,
                      "start": 928,
                      "end": 942
                    }
                  ],
                  "start": 912,
                  "end": 942
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 950,
                    "end": 960
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 961,
                            "end": 965
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 968,
                            "end": 977
                          }
                        ],
                        "start": 961,
                        "end": 977
                      }
                    ],
                    "start": 960,
                    "end": 978
                  },
                  "start": 950,
                  "end": 978
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 986,
                      "end": 989
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 992,
                      "end": 1001
                    }
                  ],
                  "start": 986,
                  "end": 1001
                }
              ],
              "start": 904,
              "end": 1007
            },
            "start": 895,
            "end": 1007
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1026
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1047
                      },
                      "typeArguments": null,
                      "start": 1034,
                      "end": 1047
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1064
                      },
                      "typeArguments": null,
                      "start": 1050,
                      "end": 1064
                    }
                  ],
                  "start": 1034,
                  "end": 1064
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1082
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 1083,
                            "end": 1087
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1090,
                            "end": 1099
                          }
                        ],
                        "start": 1083,
                        "end": 1099
                      }
                    ],
                    "start": 1082,
                    "end": 1100
                  },
                  "start": 1072,
                  "end": 1100
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1108,
                      "end": 1111
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1114,
                      "end": 1123
                    }
                  ],
                  "start": 1108,
                  "end": 1123
                }
              ],
              "start": 1026,
              "end": 1129
            },
            "start": 1012,
            "end": 1129
          }
        ],
        "start": 893,
        "end": 1129
      },
      "declare": false,
      "start": 870,
      "end": 1130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepItemType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1149
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
              "start": 1150,
              "end": 1151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1150,
            "end": 1151
          }
        ],
        "start": 1149,
        "end": 1152
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1155,
            "end": 1156
          },
          "typeArguments": null,
          "start": 1155,
          "end": 1156
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1178
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1186
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1185,
                  "end": 1186
                },
                "start": 1179,
                "end": 1186
              }
            ],
            "start": 1178,
            "end": 1187
          },
          "start": 1165,
          "end": 1187
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1192,
              "end": 1193
            },
            "typeArguments": null,
            "start": 1192,
            "end": 1193
          },
          "start": 1192,
          "end": 1195
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1201
            },
            "typeArguments": null,
            "start": 1200,
            "end": 1201
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1224
            },
            "typeArguments": null,
            "start": 1210,
            "end": 1224
          },
          "trueType": {
            "type": "TSStringKeyword",
            "start": 1229,
            "end": 1235
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1240,
            "end": 1245
          },
          "start": 1200,
          "end": 1245
        },
        "start": 1155,
        "end": 1245
      },
      "declare": false,
      "start": 1132,
      "end": 1246
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 1257,
        "end": 1267
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Break",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1285,
                    "end": 1290
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1293,
                      "end": 1299
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "BreakStep",
                        "raw": "\"BreakStep\"",
                        "start": 1300,
                        "end": 1311
                      }
                    ],
                    "optional": false,
                    "start": 1293,
                    "end": 1312
                  },
                  "definite": false,
                  "start": 1285,
                  "end": 1312
                }
              ],
              "declare": false,
              "start": 1279,
              "end": 1313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1272,
            "end": 1313
          }
        ],
        "start": 1268,
        "end": 1315
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1247,
      "end": 1315
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1331
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
              "start": 1332,
              "end": 1333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1332,
            "end": 1333
          }
        ],
        "start": 1331,
        "end": 1334
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "StepResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1354
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Break",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1360
              },
              "start": 1344,
              "end": 1360
            },
            "typeArguments": null,
            "start": 1337,
            "end": 1360
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1364
            },
            "typeArguments": null,
            "start": 1363,
            "end": 1364
          }
        ],
        "start": 1337,
        "end": 1364
      },
      "declare": false,
      "start": 1316,
      "end": 1365
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResultGenerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 1371,
        "end": 1390
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
              "start": 1391,
              "end": 1392
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1391,
            "end": 1392
          }
        ],
        "start": 1390,
        "end": 1393
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1409
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1423
                      },
                      "typeArguments": null,
                      "start": 1410,
                      "end": 1423
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1426,
                        "end": 1440
                      },
                      "typeArguments": null,
                      "start": 1426,
                      "end": 1440
                    }
                  ],
                  "start": 1410,
                  "end": 1440
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1452
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
                          "start": 1453,
                          "end": 1454
                        },
                        "typeArguments": null,
                        "start": 1453,
                        "end": 1454
                      }
                    ],
                    "start": 1452,
                    "end": 1455
                  },
                  "start": 1442,
                  "end": 1455
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1457,
                      "end": 1460
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1463,
                      "end": 1472
                    }
                  ],
                  "start": 1457,
                  "end": 1472
                }
              ],
              "start": 1409,
              "end": 1473
            },
            "start": 1400,
            "end": 1473
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1478,
              "end": 1492
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1500,
                        "end": 1513
                      },
                      "typeArguments": null,
                      "start": 1500,
                      "end": 1513
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1516,
                        "end": 1530
                      },
                      "typeArguments": null,
                      "start": 1516,
                      "end": 1530
                    }
                  ],
                  "start": 1500,
                  "end": 1530
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1538,
                    "end": 1548
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
                          "start": 1549,
                          "end": 1550
                        },
                        "typeArguments": null,
                        "start": 1549,
                        "end": 1550
                      }
                    ],
                    "start": 1548,
                    "end": 1551
                  },
                  "start": 1538,
                  "end": 1551
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1559,
                      "end": 1562
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1565,
                      "end": 1574
                    }
                  ],
                  "start": 1559,
                  "end": 1574
                }
              ],
              "start": 1492,
              "end": 1580
            },
            "start": 1478,
            "end": 1580
          }
        ],
        "start": 1398,
        "end": 1580
      },
      "declare": false,
      "start": 1366,
      "end": 1581
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepSelection",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1600
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
              "start": 1601,
              "end": 1602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1601,
            "end": 1602
          }
        ],
        "start": 1600,
        "end": 1603
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1606,
            "end": 1607
          },
          "typeArguments": null,
          "start": 1606,
          "end": 1607
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null,
            "start": 1616,
            "end": 1629
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1636,
                    "end": 1637
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1636,
                  "end": 1637
                },
                "start": 1630,
                "end": 1637
              }
            ],
            "start": 1629,
            "end": 1638
          },
          "start": 1616,
          "end": 1638
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1643,
                  "end": 1644
                },
                "typeArguments": null,
                "start": 1643,
                "end": 1644
              },
              "start": 1643,
              "end": 1646
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Directive",
                "optional": false,
                "typeAnnotation": null,
                "start": 1649,
                "end": 1658
              },
              "typeArguments": null,
              "start": 1649,
              "end": 1658
            }
          ],
          "start": 1643,
          "end": 1658
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1664
            },
            "typeArguments": null,
            "start": 1663,
            "end": 1664
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1687
            },
            "typeArguments": null,
            "start": 1673,
            "end": 1687
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 1692,
                "end": 1698
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Directive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1701,
                  "end": 1710
                },
                "typeArguments": null,
                "start": 1701,
                "end": 1710
              }
            ],
            "start": 1692,
            "end": 1710
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1715,
            "end": 1720
          },
          "start": 1663,
          "end": 1720
        },
        "start": 1606,
        "end": 1720
      },
      "declare": false,
      "start": 1582,
      "end": 1721
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialStepState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1727,
        "end": 1743
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
              "start": 1744,
              "end": 1745
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1748,
              "end": 1755
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1744,
            "end": 1755
          }
        ],
        "start": 1743,
        "end": 1756
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1759,
              "end": 1766
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
                    "start": 1767,
                    "end": 1768
                  },
                  "typeArguments": null,
                  "start": 1767,
                  "end": 1768
                }
              ],
              "start": 1766,
              "end": 1769
            },
            "start": 1759,
            "end": 1769
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
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1783
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1785,
                    "end": 1791
                  },
                  "start": 1783,
                  "end": 1791
                },
                "accessibility": null,
                "static": false,
                "start": 1776,
                "end": 1792
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1795,
                  "end": 1802
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1805,
                    "end": 1812
                  },
                  "start": 1803,
                  "end": 1812
                },
                "accessibility": null,
                "static": false,
                "start": 1795,
                "end": 1813
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1828
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1831,
                    "end": 1837
                  },
                  "start": 1829,
                  "end": 1837
                },
                "accessibility": null,
                "static": false,
                "start": 1816,
                "end": 1838
              }
            ],
            "start": 1772,
            "end": 1840
          }
        ],
        "start": 1759,
        "end": 1840
      },
      "declare": false,
      "start": 1722,
      "end": 1841
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1847,
        "end": 1856
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
              "start": 1857,
              "end": 1858
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1861,
                "end": 1867
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1868,
                    "end": 1874
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 1876,
                    "end": 1883
                  }
                ],
                "start": 1867,
                "end": 1884
              },
              "start": 1861,
              "end": 1884
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1857,
            "end": 1884
          }
        ],
        "start": 1856,
        "end": 1885
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1888,
              "end": 1889
            },
            "typeArguments": null,
            "start": 1888,
            "end": 1889
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
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1896,
                  "end": 1903
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1905,
                    "end": 1911
                  },
                  "start": 1903,
                  "end": 1911
                },
                "accessibility": null,
                "static": false,
                "start": 1896,
                "end": 1912
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1915,
                  "end": 1922
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1925,
                    "end": 1932
                  },
                  "start": 1923,
                  "end": 1932
                },
                "accessibility": null,
                "static": false,
                "start": 1915,
                "end": 1933
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1948
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1951,
                    "end": 1957
                  },
                  "start": 1949,
                  "end": 1957
                },
                "accessibility": null,
                "static": false,
                "start": 1936,
                "end": 1958
              }
            ],
            "start": 1892,
            "end": 1960
          }
        ],
        "start": 1888,
        "end": 1960
      },
      "declare": false,
      "start": 1842,
      "end": 1961
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "canPickStepContinue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1972,
        "end": 1991
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
              "start": 1992,
              "end": 1993
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "typeAnnotation": null,
                "start": 2002,
                "end": 2015
              },
              "typeArguments": null,
              "start": 2002,
              "end": 2015
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1992,
            "end": 2015
          }
        ],
        "start": 1991,
        "end": 2016
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_step",
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
                "start": 2027,
                "end": 2028
              },
              "typeArguments": null,
              "start": 2027,
              "end": 2028
            },
            "start": 2025,
            "end": 2028
          },
          "start": 2020,
          "end": 2028
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PartialStepState",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2056
              },
              "typeArguments": null,
              "start": 2040,
              "end": 2056
            },
            "start": 2038,
            "end": 2056
          },
          "start": 2032,
          "end": 2056
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_selection",
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
                    "name": "StepItemType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2072,
                    "end": 2084
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
                          "start": 2085,
                          "end": 2086
                        },
                        "typeArguments": null,
                        "start": 2085,
                        "end": 2086
                      }
                    ],
                    "start": 2084,
                    "end": 2087
                  },
                  "start": 2072,
                  "end": 2087
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Directive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2090,
                    "end": 2099
                  },
                  "typeArguments": null,
                  "start": 2090,
                  "end": 2099
                }
              ],
              "start": 2072,
              "end": 2099
            },
            "start": 2070,
            "end": 2099
          },
          "start": 2060,
          "end": 2099
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_selection",
            "optional": false,
            "typeAnnotation": null,
            "start": 2103,
            "end": 2113
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StepItemType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2117,
                "end": 2129
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
                      "start": 2130,
                      "end": 2131
                    },
                    "typeArguments": null,
                    "start": 2130,
                    "end": 2131
                  }
                ],
                "start": 2129,
                "end": 2132
              },
              "start": 2117,
              "end": 2132
            },
            "start": 2117,
            "end": 2132
          },
          "start": 2103,
          "end": 2132
        },
        "start": 2101,
        "end": 2132
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
              "start": 2144,
              "end": 2149
            },
            "start": 2137,
            "end": 2150
          }
        ],
        "start": 2133,
        "end": 2152
      },
      "expression": false,
      "start": 1963,
      "end": 2152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createPickStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 2163,
        "end": 2177
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
              "start": 2178,
              "end": 2179
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 2188,
                "end": 2201
              },
              "typeArguments": null,
              "start": 2188,
              "end": 2201
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2178,
            "end": 2201
          }
        ],
        "start": 2177,
        "end": 2202
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "step",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "typeAnnotation": null,
                "start": 2212,
                "end": 2225
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
                      "start": 2226,
                      "end": 2227
                    },
                    "typeArguments": null,
                    "start": 2226,
                    "end": 2227
                  }
                ],
                "start": 2225,
                "end": 2228
              },
              "start": 2212,
              "end": 2228
            },
            "start": 2210,
            "end": 2228
          },
          "start": 2206,
          "end": 2228
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null,
            "start": 2232,
            "end": 2245
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
                  "start": 2246,
                  "end": 2247
                },
                "typeArguments": null,
                "start": 2246,
                "end": 2247
              }
            ],
            "start": 2245,
            "end": 2248
          },
          "start": 2232,
          "end": 2248
        },
        "start": 2230,
        "end": 2248
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "step",
              "optional": false,
              "typeAnnotation": null,
              "start": 2260,
              "end": 2264
            },
            "start": 2253,
            "end": 2265
          }
        ],
        "start": 2249,
        "end": 2267
      },
      "expression": false,
      "start": 2154,
      "end": 2267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "showStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 2279,
        "end": 2287
      },
      "generator": true,
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 2291,
              "end": 2296
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PartialStepState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2305,
                    "end": 2321
                  },
                  "typeArguments": null,
                  "start": 2305,
                  "end": 2321
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
                        "name": "repo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2326,
                        "end": 2330
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2332,
                          "end": 2335
                        },
                        "start": 2330,
                        "end": 2335
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2326,
                      "end": 2335
                    }
                  ],
                  "start": 2324,
                  "end": 2337
                }
              ],
              "start": 2305,
              "end": 2337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2291,
            "end": 2337
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 2341,
              "end": 2348
            },
            "constraint": {
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
                    "name": "repos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2359,
                    "end": 2364
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2366,
                        "end": 2369
                      },
                      "start": 2366,
                      "end": 2371
                    },
                    "start": 2364,
                    "end": 2371
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2359,
                  "end": 2372
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2373,
                    "end": 2378
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2380,
                      "end": 2386
                    },
                    "start": 2378,
                    "end": 2386
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2373,
                  "end": 2387
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2388,
                    "end": 2394
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2396,
                      "end": 2399
                    },
                    "start": 2394,
                    "end": 2399
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2388,
                  "end": 2399
                }
              ],
              "start": 2357,
              "end": 2401
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2341,
            "end": 2401
          }
        ],
        "start": 2287,
        "end": 2403
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 2411,
                "end": 2416
              },
              "typeArguments": null,
              "start": 2411,
              "end": 2416
            },
            "start": 2409,
            "end": 2416
          },
          "start": 2404,
          "end": 2416
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Context",
                "optional": false,
                "typeAnnotation": null,
                "start": 2428,
                "end": 2435
              },
              "typeArguments": null,
              "start": 2428,
              "end": 2435
            },
            "start": 2426,
            "end": 2435
          },
          "start": 2418,
          "end": 2435
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StepResultGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2438,
            "end": 2457
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QuickPickItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2458,
                  "end": 2471
                },
                "typeArguments": null,
                "start": 2458,
                "end": 2471
              }
            ],
            "start": 2457,
            "end": 2472
          },
          "start": 2438,
          "end": 2472
        },
        "start": 2436,
        "end": 2472
      },
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
                  "name": "step",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2489,
                        "end": 2502
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "QuickPickItem",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2503,
                              "end": 2516
                            },
                            "typeArguments": null,
                            "start": 2503,
                            "end": 2516
                          }
                        ],
                        "start": 2502,
                        "end": 2517
                      },
                      "start": 2489,
                      "end": 2517
                    },
                    "start": 2487,
                    "end": 2517
                  },
                  "start": 2483,
                  "end": 2517
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createPickStep",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2520,
                    "end": 2534
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "QuickPickItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2535,
                          "end": 2548
                        },
                        "typeArguments": null,
                        "start": 2535,
                        "end": 2548
                      }
                    ],
                    "start": 2534,
                    "end": 2549
                  },
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
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2556,
                            "end": 2561
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 2563,
                            "end": 2565
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2556,
                          "end": 2565
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "placeholder",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2571,
                            "end": 2582
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 2584,
                            "end": 2586
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2571,
                          "end": 2586
                        }
                      ],
                      "start": 2550,
                      "end": 2591
                    }
                  ],
                  "optional": false,
                  "start": 2520,
                  "end": 2592
                },
                "definite": false,
                "start": 2483,
                "end": 2592
              }
            ],
            "declare": false,
            "start": 2477,
            "end": 2593
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
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StepSelection",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2613,
                        "end": 2626
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "step",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2634,
                              "end": 2638
                            },
                            "typeArguments": null,
                            "start": 2627,
                            "end": 2638
                          }
                        ],
                        "start": 2626,
                        "end": 2639
                      },
                      "start": 2613,
                      "end": 2639
                    },
                    "start": 2611,
                    "end": 2639
                  },
                  "start": 2602,
                  "end": 2639
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2648,
                    "end": 2652
                  },
                  "start": 2642,
                  "end": 2652
                },
                "definite": false,
                "start": 2602,
                "end": 2652
              }
            ],
            "declare": false,
            "start": 2596,
            "end": 2653
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "canPickStepContinue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2663,
                  "end": 2682
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2683,
                    "end": 2687
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2689,
                    "end": 2694
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2696,
                    "end": 2705
                  }
                ],
                "optional": false,
                "start": 2663,
                "end": 2706
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2713,
                  "end": 2722
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2723,
                  "end": 2724
                },
                "optional": false,
                "computed": true,
                "start": 2713,
                "end": 2725
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StepResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2732,
                  "end": 2742
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Break",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2743,
                  "end": 2748
                },
                "optional": false,
                "computed": false,
                "start": 2732,
                "end": 2748
              },
              "start": 2663,
              "end": 2748
            },
            "start": 2656,
            "end": 2749
          }
        ],
        "start": 2473,
        "end": 2751
      },
      "expression": false,
      "start": 2269,
      "end": 2751
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2751
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 37,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 105,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 115,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 170,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 180,
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
    "value": "T",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 191,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 235,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 241,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 267,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 277,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 313,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 318,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Back",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Cancel",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "LoadMore",
    "start": 350,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "Noop",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 371,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 381,
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
    "value": "export",
    "start": 395,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 402,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 424,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 440,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 446,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 449,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 465,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 472,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 479,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 485,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 489,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 498,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 501,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 518,
    "end": 520
  },
  {
    "type": "Null",
    "value": "null",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 534,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 544,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 562,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 579,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "detail",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "picked",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 631,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "alwaysShow",
    "start": 642,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 655,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 677,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 696,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "prompt",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 758,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 768,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 784,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 792,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 808,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 827,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 851,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 870,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "StepGenerator",
    "start": 875,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 895,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 912,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 928,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 950,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 968,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 992,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 1012,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1034,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1050,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1072,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1090,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1114,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1132,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "StepItemType",
    "start": 1137,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1157,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1165,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1202,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1210,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1240,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1247,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1257,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1279,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "Break",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "String",
    "value": "\"BreakStep\"",
    "start": 1300,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1321,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1344,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "Break",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1366,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "StepResultGenerator",
    "start": 1371,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1400,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1410,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1426,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1442,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1463,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 1478,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1500,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1516,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1538,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1559,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1565,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1582,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "StepSelection",
    "start": 1587,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1608,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1616,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1630,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 1649,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1665,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1673,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1692,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 1701,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1715,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1722,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "PartialStepState",
    "start": 1727,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1748,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1759,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 1776,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "confirm",
    "start": 1795,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1805,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "startingStep",
    "start": 1816,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1831,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "StepState",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1861,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1868,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1876,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 1896,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1905,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "confirm",
    "start": 1915,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1925,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "startingStep",
    "start": 1936,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1951,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1963,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "canPickStepContinue",
    "start": 1972,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1994,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2002,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "_step",
    "start": 2020,
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
    "value": "T",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "_state",
    "start": 2032,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "PartialStepState",
    "start": 2040,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "_selection",
    "start": 2060,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "StepItemType",
    "start": 2072,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 2090,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "_selection",
    "start": 2103,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2114,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "StepItemType",
    "start": 2117,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2137,
    "end": 2143
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2144,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2154,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "createPickStep",
    "start": 2163,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2180,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2188,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2206,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2212,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2232,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2253,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2260,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2269,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "showStep",
    "start": 2279,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2291,
    "end": 2296
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2297,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "PartialStepState",
    "start": 2305,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "repo",
    "start": 2326,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 2341,
    "end": 2348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2349,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "repos",
    "start": 2359,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2366,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 2373,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2380,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 2388,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2396,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2404,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2411,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "_context",
    "start": 2418,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 2428,
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
    "value": ":",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "StepResultGenerator",
    "start": 2438,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2458,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2477,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2483,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2489,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2503,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "createPickStep",
    "start": 2520,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2535,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 2556,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2563,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 2571,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2584,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2596,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 2602,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "StepSelection",
    "start": 2613,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2627,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2634,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2642,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2648,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2656,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "canPickStepContinue",
    "start": 2663,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2683,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2689,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 2696,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 2713,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 2732,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "Break",
    "start": 2743,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2750,
    "end": 2751
  }
]
```
