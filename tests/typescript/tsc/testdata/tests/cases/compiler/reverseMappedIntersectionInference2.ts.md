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
        "name": "Results",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 24
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "typeArguments": null,
            "start": 34,
            "end": 35
          },
          "start": 28,
          "end": 35
        },
        "nameType": null,
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 48
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 51
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 51
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeArguments": null,
                    "start": 52,
                    "end": 53
                  },
                  "start": 50,
                  "end": 54
                },
                "start": 48,
                "end": 54
              },
              "accessibility": null,
              "static": false,
              "start": 44,
              "end": 55
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSuccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 69
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 78,
                              "end": 79
                            },
                            "typeArguments": null,
                            "start": 78,
                            "end": 79
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 80,
                              "end": 81
                            },
                            "typeArguments": null,
                            "start": 80,
                            "end": 81
                          },
                          "start": 78,
                          "end": 82
                        },
                        "start": 76,
                        "end": 82
                      },
                      "start": 72,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 87,
                      "end": 91
                    },
                    "start": 84,
                    "end": 91
                  },
                  "start": 71,
                  "end": 91
                },
                "start": 69,
                "end": 91
              },
              "accessibility": null,
              "static": false,
              "start": 60,
              "end": 92
            }
          ],
          "start": 38,
          "end": 96
        },
        "optional": false,
        "readonly": null,
        "start": 18,
        "end": 99
      },
      "declare": false,
      "start": 0,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeArguments": null,
            "start": 135,
            "end": 136
          },
          "start": 129,
          "end": 136
        },
        "nameType": null,
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
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 153
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 153
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 155
                  },
                  "start": 152,
                  "end": 156
                },
                "start": 150,
                "end": 156
              },
              "accessibility": null,
              "static": false,
              "start": 145,
              "end": 157
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onError",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 169
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 178,
                              "end": 179
                            },
                            "typeArguments": null,
                            "start": 178,
                            "end": 179
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 181
                            },
                            "typeArguments": null,
                            "start": 180,
                            "end": 181
                          },
                          "start": 178,
                          "end": 182
                        },
                        "start": 176,
                        "end": 182
                      },
                      "start": 172,
                      "end": 182
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 187,
                      "end": 191
                    },
                    "start": 184,
                    "end": 191
                  },
                  "start": 171,
                  "end": 191
                },
                "start": 169,
                "end": 191
              },
              "accessibility": null,
              "static": false,
              "start": 162,
              "end": 192
            }
          ],
          "start": 139,
          "end": 196
        },
        "optional": false,
        "readonly": null,
        "start": 119,
        "end": 199
      },
      "declare": false,
      "start": 102,
      "end": 200
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withTupleLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 232
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
              "start": 233,
              "end": 234
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 245,
                    "end": 246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 248,
                      "end": 255
                    },
                    "start": 246,
                    "end": 255
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 245,
                  "end": 255
                }
              ],
              "start": 243,
              "end": 257
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 233,
            "end": 257
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 271,
                    "end": 272
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 274,
                      "end": 281
                    },
                    "start": 272,
                    "end": 281
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 271,
                  "end": 281
                }
              ],
              "start": 269,
              "end": 283
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 283
          }
        ],
        "start": 232,
        "end": 284
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 300
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
                          "start": 301,
                          "end": 302
                        },
                        "typeArguments": null,
                        "start": 301,
                        "end": 302
                      }
                    ],
                    "start": 300,
                    "end": 303
                  },
                  "start": 293,
                  "end": 303
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 312
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 313,
                          "end": 314
                        },
                        "typeArguments": null,
                        "start": 313,
                        "end": 314
                      }
                    ],
                    "start": 312,
                    "end": 315
                  },
                  "start": 306,
                  "end": 315
                }
              ],
              "start": 293,
              "end": 315
            },
            "start": 291,
            "end": 315
          },
          "start": 288,
          "end": 315
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "typeArguments": null,
              "start": 320,
              "end": 321
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 324
              },
              "typeArguments": null,
              "start": 323,
              "end": 324
            }
          ],
          "start": 319,
          "end": 325
        },
        "start": 317,
        "end": 325
      },
      "body": null,
      "expression": false,
      "start": 202,
      "end": 326
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
            "name": "res",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withTupleLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 353
            },
            "typeArguments": null,
            "arguments": [
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 368
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 370,
                          "end": 375
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 364,
                        "end": 375
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onSuccess",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 381,
                          "end": 390
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dataArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 400
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dataArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 413,
                                  "end": 420
                                },
                                "directive": null,
                                "start": 413,
                                "end": 421
                              }
                            ],
                            "start": 405,
                            "end": 427
                          },
                          "id": null,
                          "generator": false,
                          "start": 392,
                          "end": 427
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 381,
                        "end": 427
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 438
                        },
                        "value": {
                          "type": "Literal",
                          "value": 404,
                          "raw": "404",
                          "start": 440,
                          "end": 443
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 433,
                        "end": 443
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 456
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "errorArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 467
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "errorArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 488
                                },
                                "directive": null,
                                "start": 480,
                                "end": 489
                              }
                            ],
                            "start": 472,
                            "end": 495
                          },
                          "id": null,
                          "generator": false,
                          "start": 458,
                          "end": 495
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 449,
                        "end": 495
                      }
                    ],
                    "start": 358,
                    "end": 500
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 510,
                          "end": 514
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 516,
                          "end": 520
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 510,
                        "end": 520
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onSuccess",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 526,
                          "end": 535
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dataArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 538,
                              "end": 545
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dataArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 558,
                                  "end": 565
                                },
                                "directive": null,
                                "start": 558,
                                "end": 566
                              }
                            ],
                            "start": 550,
                            "end": 572
                          },
                          "id": null,
                          "generator": false,
                          "start": 537,
                          "end": 572
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 526,
                        "end": 572
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 583
                        },
                        "value": {
                          "type": "Literal",
                          "value": 500,
                          "raw": "500",
                          "start": 585,
                          "end": 588
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 578,
                        "end": 588
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 601
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "errorArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 604,
                              "end": 612
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "errorArg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 625,
                                  "end": 633
                                },
                                "directive": null,
                                "start": 625,
                                "end": 634
                              }
                            ],
                            "start": 617,
                            "end": 640
                          },
                          "id": null,
                          "generator": false,
                          "start": 603,
                          "end": 640
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 594,
                        "end": 640
                      }
                    ],
                    "start": 504,
                    "end": 645
                  }
                ],
                "start": 354,
                "end": 648
              }
            ],
            "optional": false,
            "start": 340,
            "end": 649
          },
          "definite": false,
          "start": 334,
          "end": 649
        }
      ],
      "declare": false,
      "start": 328,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 650
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
    "value": "Results",
    "start": 5,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 25,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 28,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "onSuccess",
    "start": 60,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 84,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 145,
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
    "value": "E",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "onError",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 184,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 202,
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
    "value": "withTupleLike",
    "start": 219,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Results",
    "start": 293,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
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
    "value": "const",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "withTupleLike",
    "start": 340,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "onSuccess",
    "start": 381,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "dataArg",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "dataArg",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Numeric",
    "value": "404",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "onError",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "errorArg",
    "start": 459,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "errorArg",
    "start": 480,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "onSuccess",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "dataArg",
    "start": 538,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "dataArg",
    "start": 558,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "error",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Numeric",
    "value": "500",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "onError",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "errorArg",
    "start": 604,
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
    "value": "=>",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "errorArg",
    "start": 625,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  }
]
```
