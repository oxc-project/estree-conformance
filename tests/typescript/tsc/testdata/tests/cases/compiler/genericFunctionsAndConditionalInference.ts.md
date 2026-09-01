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
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 23
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
              "start": 33,
              "end": 34
            },
            "typeArguments": null,
            "start": 33,
            "end": 34
          },
          "start": 27,
          "end": 34
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
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
                      "start": 46,
                      "end": 47
                    },
                    "typeArguments": null,
                    "start": 46,
                    "end": 47
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 49
                    },
                    "typeArguments": null,
                    "start": 48,
                    "end": 49
                  },
                  "start": 46,
                  "end": 50
                },
                "start": 44,
                "end": 50
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 50
            }
          ],
          "start": 37,
          "end": 51
        },
        "optional": false,
        "readonly": null,
        "start": 19,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 81
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
              "start": 82,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 83
          }
        ],
        "start": 81,
        "end": 84
      },
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
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 98
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
                      "start": 99,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 99,
                    "end": 100
                  }
                ],
                "start": 98,
                "end": 101
              },
              "start": 90,
              "end": 101
            },
            "start": 88,
            "end": 101
          },
          "start": 85,
          "end": 101
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
            "start": 104,
            "end": 105
          },
          "typeArguments": null,
          "start": 104,
          "end": 105
        },
        "start": 102,
        "end": 105
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 122
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 120,
        "end": 126
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 135
                  },
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 139,
                            "end": 144
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 146,
                                "end": 147
                              },
                              "typeArguments": null,
                              "start": 146,
                              "end": 147
                            },
                            "start": 144,
                            "end": 147
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 139,
                          "end": 147
                        }
                      ],
                      "start": 137,
                      "end": 149
                    },
                    "start": 135,
                    "end": 149
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 134,
                  "end": 150
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  },
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 156,
                            "end": 161
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 163,
                                "end": 164
                              },
                              "typeArguments": null,
                              "start": 163,
                              "end": 164
                            },
                            "start": 161,
                            "end": 164
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 156,
                          "end": 164
                        }
                      ],
                      "start": 154,
                      "end": 166
                    },
                    "start": 152,
                    "end": 166
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 151,
                  "end": 166
                }
              ],
              "start": 132,
              "end": 168
            },
            "start": 130,
            "end": 168
          },
          "start": 127,
          "end": 168
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unboxify",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 191
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 195
                }
              ],
              "optional": false,
              "start": 183,
              "end": 196
            },
            "start": 176,
            "end": 197
          }
        ],
        "start": 170,
        "end": 199
      },
      "expression": false,
      "start": 108,
      "end": 199
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 213
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
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 217
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 226
                          },
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 228,
                            "end": 230
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 221,
                          "end": 230
                        }
                      ],
                      "start": 219,
                      "end": 232
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 216,
                    "end": 232
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 244
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "'hello'",
                            "start": 246,
                            "end": 253
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 239,
                          "end": 253
                        }
                      ],
                      "start": 237,
                      "end": 254
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 234,
                    "end": 254
                  }
                ],
                "start": 214,
                "end": 256
              }
            ],
            "optional": false,
            "start": 210,
            "end": 257
          },
          "definite": false,
          "start": 205,
          "end": 257
        }
      ],
      "declare": false,
      "start": 201,
      "end": 258
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Targets",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 350
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 352
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 351,
            "end": 352
          }
        ],
        "start": 350,
        "end": 353
      },
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
              "name": "left",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 364
            },
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
                  "start": 366,
                  "end": 367
                },
                "typeArguments": null,
                "start": 366,
                "end": 367
              },
              "start": 364,
              "end": 367
            },
            "accessibility": null,
            "static": false,
            "start": 360,
            "end": 367
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "right",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 377
            },
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
                  "start": 379,
                  "end": 380
                },
                "typeArguments": null,
                "start": 379,
                "end": 380
              },
              "start": 377,
              "end": 380
            },
            "accessibility": null,
            "static": false,
            "start": 372,
            "end": 380
          }
        ],
        "start": 354,
        "end": 382
      },
      "declare": false,
      "start": 333,
      "end": 382
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Target",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 394
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Targets",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 410
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 411,
                "end": 414
              }
            ],
            "start": 410,
            "end": 415
          },
          "start": 403,
          "end": 415
        },
        "start": 397,
        "end": 415
      },
      "declare": false,
      "start": 383,
      "end": 415
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 427
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 444
              },
              "typeArguments": null,
              "start": 438,
              "end": 444
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 428,
            "end": 444
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 447
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 446,
            "end": 447
          }
        ],
        "start": 427,
        "end": 448
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Targets",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 458
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                },
                "typeArguments": null,
                "start": 459,
                "end": 460
              }
            ],
            "start": 458,
            "end": 461
          },
          "start": 451,
          "end": 461
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 463
          },
          "typeArguments": null,
          "start": 462,
          "end": 463
        },
        "start": 451,
        "end": 464
      },
      "declare": false,
      "start": 416,
      "end": 464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LR",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 473
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 475
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 490
              },
              "typeArguments": null,
              "start": 484,
              "end": 490
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 474,
            "end": 490
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 492,
            "end": 493
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 496
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 495,
            "end": 496
          }
        ],
        "start": 473,
        "end": 497
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "typeArguments": null,
              "start": 501,
              "end": 502
            }
          ],
          "start": 500,
          "end": 503
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "left",
                "raw": "\"left\"",
                "start": 513,
                "end": 519
              },
              "start": 513,
              "end": 519
            }
          ],
          "start": 512,
          "end": 520
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 524
          },
          "typeArguments": null,
          "start": 523,
          "end": 524
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 528
          },
          "typeArguments": null,
          "start": 527,
          "end": 528
        },
        "start": 500,
        "end": 528
      },
      "declare": false,
      "start": 466,
      "end": 528
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ops",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 543
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 545
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 560
              },
              "typeArguments": null,
              "start": 554,
              "end": 560
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 544,
            "end": 560
          }
        ],
        "start": 543,
        "end": 561
      },
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
              "name": "_f",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 570
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 573
                },
                "typeArguments": null,
                "start": 572,
                "end": 573
              },
              "start": 570,
              "end": 573
            },
            "accessibility": null,
            "static": false,
            "start": 568,
            "end": 573
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 581
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 589
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 591
                      },
                      "typeArguments": null,
                      "start": 590,
                      "end": 591
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 593,
                      "end": 599
                    }
                  ],
                  "start": 589,
                  "end": 600
                },
                "start": 583,
                "end": 600
              },
              "start": 581,
              "end": 600
            },
            "accessibility": null,
            "static": false,
            "start": 578,
            "end": 600
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 608
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 616
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 617,
                        "end": 618
                      },
                      "typeArguments": null,
                      "start": 617,
                      "end": 618
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 620,
                      "end": 626
                    }
                  ],
                  "start": 616,
                  "end": 627
                },
                "start": 610,
                "end": 627
              },
              "start": 608,
              "end": 627
            },
            "accessibility": null,
            "static": false,
            "start": 605,
            "end": 627
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lr",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 634
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 636
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 635,
                  "end": 636
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 639
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 638,
                  "end": 639
                }
              ],
              "start": 634,
              "end": 640
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 650
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 651,
                            "end": 652
                          },
                          "typeArguments": null,
                          "start": 651,
                          "end": 652
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 654,
                            "end": 655
                          },
                          "typeArguments": null,
                          "start": 654,
                          "end": 655
                        }
                      ],
                      "start": 650,
                      "end": 656
                    },
                    "start": 644,
                    "end": 656
                  },
                  "start": 642,
                  "end": 656
                },
                "start": 641,
                "end": 656
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 667
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 668,
                            "end": 669
                          },
                          "typeArguments": null,
                          "start": 668,
                          "end": 669
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 672
                          },
                          "typeArguments": null,
                          "start": 671,
                          "end": 672
                        }
                      ],
                      "start": 667,
                      "end": 673
                    },
                    "start": 661,
                    "end": 673
                  },
                  "start": 659,
                  "end": 673
                },
                "start": 658,
                "end": 673
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 682
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 683,
                        "end": 684
                      },
                      "typeArguments": null,
                      "start": 683,
                      "end": 684
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 688
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 689,
                              "end": 690
                            },
                            "typeArguments": null,
                            "start": 689,
                            "end": 690
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 692,
                              "end": 693
                            },
                            "typeArguments": null,
                            "start": 692,
                            "end": 693
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 695,
                              "end": 696
                            },
                            "typeArguments": null,
                            "start": 695,
                            "end": 696
                          }
                        ],
                        "start": 688,
                        "end": 697
                      },
                      "start": 686,
                      "end": 697
                    }
                  ],
                  "start": 682,
                  "end": 698
                },
                "start": 676,
                "end": 698
              },
              "start": 674,
              "end": 698
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 632,
            "end": 698
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dict",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 707
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 711
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 710,
                      "end": 711
                    }
                  ],
                  "start": 709,
                  "end": 712
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 719
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 729,
                              "end": 730
                            },
                            "typeArguments": null,
                            "start": 729,
                            "end": 730
                          },
                          "start": 723,
                          "end": 730
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 739
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 740,
                                  "end": 741
                                },
                                "typeArguments": null,
                                "start": 740,
                                "end": 741
                              },
                              {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 743,
                                    "end": 744
                                  },
                                  "typeArguments": null,
                                  "start": 743,
                                  "end": 744
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 745,
                                    "end": 746
                                  },
                                  "typeArguments": null,
                                  "start": 745,
                                  "end": 746
                                },
                                "start": 743,
                                "end": 747
                              }
                            ],
                            "start": 739,
                            "end": 748
                          },
                          "start": 733,
                          "end": 748
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 716,
                        "end": 749
                      },
                      "start": 714,
                      "end": 749
                    },
                    "start": 713,
                    "end": 749
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 754,
                      "end": 760
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 761,
                            "end": 762
                          },
                          "typeArguments": null,
                          "start": 761,
                          "end": 762
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 764,
                            "end": 765
                          },
                          "typeArguments": null,
                          "start": 764,
                          "end": 765
                        }
                      ],
                      "start": 760,
                      "end": 766
                    },
                    "start": 754,
                    "end": 766
                  },
                  "start": 751,
                  "end": 766
                },
                "start": 709,
                "end": 766
              },
              "start": 707,
              "end": 766
            },
            "accessibility": null,
            "static": false,
            "start": 703,
            "end": 766
          }
        ],
        "start": 562,
        "end": 768
      },
      "declare": false,
      "start": 530,
      "end": 768
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
            "name": "left",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ops",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 784
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "left",
                        "raw": "\"left\"",
                        "start": 785,
                        "end": 791
                      },
                      "start": 785,
                      "end": 791
                    }
                  ],
                  "start": 784,
                  "end": 792
                },
                "start": 781,
                "end": 792
              },
              "start": 779,
              "end": 792
            },
            "start": 775,
            "end": 792
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 795,
              "end": 797
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 801,
              "end": 804
            },
            "start": 795,
            "end": 804
          },
          "definite": false,
          "start": 775,
          "end": 804
        }
      ],
      "declare": false,
      "start": 769,
      "end": 804
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
            "name": "right",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ops",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 821
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "right",
                        "raw": "\"right\"",
                        "start": 822,
                        "end": 829
                      },
                      "start": 822,
                      "end": 829
                    }
                  ],
                  "start": 821,
                  "end": 830
                },
                "start": 818,
                "end": 830
              },
              "start": 816,
              "end": 830
            },
            "start": 811,
            "end": 830
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 833,
              "end": 835
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 839,
              "end": 842
            },
            "start": 833,
            "end": 842
          },
          "definite": false,
          "start": 811,
          "end": 842
        }
      ],
      "declare": false,
      "start": 805,
      "end": 842
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
            "name": "ok",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 852
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 856,
                    "end": 857
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Target",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 872
                    },
                    "typeArguments": null,
                    "start": 866,
                    "end": 872
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 856,
                  "end": 872
                }
              ],
              "start": 855,
              "end": 873
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "at",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ops",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 881
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 882,
                            "end": 883
                          },
                          "typeArguments": null,
                          "start": 882,
                          "end": 883
                        }
                      ],
                      "start": 881,
                      "end": 884
                    },
                    "start": 878,
                    "end": 884
                  },
                  "start": 876,
                  "end": 884
                },
                "start": 874,
                "end": 884
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 893
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "at",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 895,
                        "end": 897
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 898,
                        "end": 900
                      },
                      "optional": false,
                      "computed": false,
                      "start": 895,
                      "end": 900
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "at",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 901,
                          "end": 903
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 904,
                          "end": 907
                        },
                        "optional": false,
                        "computed": false,
                        "start": 901,
                        "end": 907
                      },
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "at",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 909,
                          "end": 911
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 915
                        },
                        "optional": false,
                        "computed": false,
                        "start": 909,
                        "end": 915
                      }
                    ],
                    "optional": false,
                    "start": 895,
                    "end": 916
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 891,
                  "end": 916
                }
              ],
              "start": 890,
              "end": 917
            },
            "id": null,
            "generator": false,
            "start": 855,
            "end": 918
          },
          "definite": false,
          "start": 850,
          "end": 918
        }
      ],
      "declare": false,
      "start": 844,
      "end": 918
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
            "name": "orphaned",
            "optional": false,
            "typeAnnotation": null,
            "start": 925,
            "end": 933
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 937,
                    "end": 938
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Target",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 947,
                      "end": 953
                    },
                    "typeArguments": null,
                    "start": 947,
                    "end": 953
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 937,
                  "end": 953
                }
              ],
              "start": 936,
              "end": 954
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "at",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ops",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 959,
                      "end": 962
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 963,
                            "end": 964
                          },
                          "typeArguments": null,
                          "start": 963,
                          "end": 964
                        }
                      ],
                      "start": 962,
                      "end": 965
                    },
                    "start": 959,
                    "end": 965
                  },
                  "start": 957,
                  "end": 965
                },
                "start": 955,
                "end": 965
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "at",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 972
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dict",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 977
                },
                "optional": false,
                "computed": false,
                "start": 970,
                "end": 977
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ok",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 978,
                    "end": 980
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "at",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 983
                    }
                  ],
                  "optional": false,
                  "start": 978,
                  "end": 984
                }
              ],
              "optional": false,
              "start": 970,
              "end": 985
            },
            "id": null,
            "generator": false,
            "start": 936,
            "end": 985
          },
          "definite": false,
          "start": 925,
          "end": 985
        }
      ],
      "declare": false,
      "start": 919,
      "end": 985
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
            "name": "leftOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 993,
            "end": 999
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1004
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "left",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1009
              }
            ],
            "optional": false,
            "start": 1002,
            "end": 1010
          },
          "definite": false,
          "start": 993,
          "end": 1010
        }
      ],
      "declare": false,
      "start": 987,
      "end": 1010
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
            "name": "leftOrphaned",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1029
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "orphaned",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1040
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "left",
                "optional": false,
                "typeAnnotation": null,
                "start": 1041,
                "end": 1045
              }
            ],
            "optional": false,
            "start": 1032,
            "end": 1046
          },
          "definite": false,
          "start": 1017,
          "end": 1046
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1046
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
            "name": "rightOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 1054,
            "end": 1061
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 1064,
              "end": 1066
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "right",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1072
              }
            ],
            "optional": false,
            "start": 1064,
            "end": 1073
          },
          "definite": false,
          "start": 1054,
          "end": 1073
        }
      ],
      "declare": false,
      "start": 1048,
      "end": 1073
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
            "name": "rightOrphaned",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1093
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "orphaned",
              "optional": false,
              "typeAnnotation": null,
              "start": 1096,
              "end": 1104
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "right",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1110
              }
            ],
            "optional": false,
            "start": 1096,
            "end": 1111
          },
          "definite": false,
          "start": 1080,
          "end": 1111
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1111
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
    "value": "Boxified",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 24,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "value",
    "start": 39,
    "end": 44
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
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 210,
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
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 333,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Targets",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 383,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 388,
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
    "value": "keyof",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Targets",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 416,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 430,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "Targets",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 466,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "LR",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 476,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 504,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 512,
    "end": 513
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 530,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "Ops",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 546,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "_f",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "lr",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "Result",
    "start": 644,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "LR",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "dict",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 720,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 723,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "value": ">",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 751,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 769,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "Ops",
    "start": 781,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 798,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 801,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 805,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Ops",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 821,
    "end": 822
  },
  {
    "type": "String",
    "value": "\"right\"",
    "start": 822,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 836,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 839,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 844,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 850,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 858,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 874,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "Ops",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "lr",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "lr",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 901,
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
    "value": "str",
    "start": 904,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 919,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "orphaned",
    "start": 925,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 939,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 947,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 955,
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
    "value": "Ops",
    "start": 959,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 967,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 970,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "dict",
    "start": 973,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 981,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 987,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "leftOk",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 1002,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1011,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "leftOrphaned",
    "start": 1017,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "orphaned",
    "start": 1032,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "rightOk",
    "start": 1054,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "rightOrphaned",
    "start": 1080,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "orphaned",
    "start": 1096,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 1105,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  }
]
```
