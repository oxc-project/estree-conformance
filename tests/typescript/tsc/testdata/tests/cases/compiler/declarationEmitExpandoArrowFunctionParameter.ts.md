__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 41
          }
        ],
        "start": 15,
        "end": 42
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
              "name": "colors",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 55
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 62
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
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    }
                  ],
                  "start": 62,
                  "end": 65
                },
                "start": 57,
                "end": 65
              },
              "start": 55,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 49,
            "end": 66
          },
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
              "start": 71,
              "end": 76
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
                  "start": 78,
                  "end": 79
                },
                "typeArguments": null,
                "start": 78,
                "end": 79
              },
              "start": 76,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 71,
            "end": 80
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onValueChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 98
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
                    "name": "value",
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
                          "start": 108,
                          "end": 109
                        },
                        "typeArguments": null,
                        "start": 108,
                        "end": 109
                      },
                      "start": 106,
                      "end": 109
                    },
                    "start": 101,
                    "end": 109
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 114,
                    "end": 118
                  },
                  "start": 111,
                  "end": 118
                },
                "start": 100,
                "end": 118
              },
              "start": 98,
              "end": 118
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 119
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 135,
                "end": 142
              },
              "start": 133,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 143
          }
        ],
        "start": 43,
        "end": 145
      },
      "declare": false,
      "start": 0,
      "end": 145
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forwardRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 174
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
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 178,
            "end": 179
          }
        ],
        "start": 174,
        "end": 180
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "render",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
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
                        "start": 202,
                        "end": 203
                      },
                      "typeArguments": null,
                      "start": 202,
                      "end": 203
                    },
                    "start": 200,
                    "end": 203
                  },
                  "start": 195,
                  "end": 203
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ref",
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
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 219
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 221,
                                    "end": 222
                                  },
                                  "typeArguments": null,
                                  "start": 221,
                                  "end": 222
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 225,
                                  "end": 229
                                }
                              ],
                              "start": 221,
                              "end": 229
                            },
                            "start": 219,
                            "end": 229
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 212,
                          "end": 229
                        }
                      ],
                      "start": 210,
                      "end": 231
                    },
                    "start": 208,
                    "end": 231
                  },
                  "start": 205,
                  "end": 231
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 236,
                  "end": 242
                },
                "start": 233,
                "end": 242
              },
              "start": 194,
              "end": 242
            },
            "start": 192,
            "end": 242
          },
          "start": 186,
          "end": 242
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
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
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 255
                      },
                      "typeArguments": null,
                      "start": 254,
                      "end": 255
                    },
                    {
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
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 260,
                            "end": 263
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
                                    "name": "current",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 268,
                                    "end": 275
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
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 277,
                                            "end": 278
                                          },
                                          "typeArguments": null,
                                          "start": 277,
                                          "end": 278
                                        },
                                        {
                                          "type": "TSNullKeyword",
                                          "start": 281,
                                          "end": 285
                                        }
                                      ],
                                      "start": 277,
                                      "end": 285
                                    },
                                    "start": 275,
                                    "end": 285
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 268,
                                  "end": 285
                                }
                              ],
                              "start": 266,
                              "end": 287
                            },
                            "start": 264,
                            "end": 287
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 260,
                          "end": 287
                        }
                      ],
                      "start": 258,
                      "end": 289
                    }
                  ],
                  "start": 254,
                  "end": 289
                },
                "start": 252,
                "end": 289
              },
              "start": 247,
              "end": 289
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 294,
              "end": 300
            },
            "start": 291,
            "end": 300
          },
          "start": 246,
          "end": 300
        },
        "start": 244,
        "end": 300
      },
      "body": null,
      "expression": false,
      "start": 147,
      "end": 301
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FixedForwardRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 323
      },
      "typeParameters": null,
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 328
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 327,
              "end": 328
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 334,
                "end": 336
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 330,
              "end": 336
            }
          ],
          "start": 326,
          "end": 337
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "render",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
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
                          "start": 359,
                          "end": 360
                        },
                        "typeArguments": null,
                        "start": 359,
                        "end": 360
                      },
                      "start": 357,
                      "end": 360
                    },
                    "start": 352,
                    "end": 360
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
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
                              "name": "current",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 369,
                              "end": 376
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 378,
                                      "end": 379
                                    },
                                    "typeArguments": null,
                                    "start": 378,
                                    "end": 379
                                  },
                                  {
                                    "type": "TSNullKeyword",
                                    "start": 382,
                                    "end": 386
                                  }
                                ],
                                "start": 378,
                                "end": 386
                              },
                              "start": 376,
                              "end": 386
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 369,
                            "end": 386
                          }
                        ],
                        "start": 367,
                        "end": 388
                      },
                      "start": 365,
                      "end": 388
                    },
                    "start": 362,
                    "end": 388
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  },
                  "start": 390,
                  "end": 399
                },
                "start": 351,
                "end": 399
              },
              "start": 349,
              "end": 399
            },
            "start": 343,
            "end": 399
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
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
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 414
                        },
                        "typeArguments": null,
                        "start": 413,
                        "end": 414
                      },
                      {
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
                              "name": "ref",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 419,
                              "end": 422
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
                                      "name": "current",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 427,
                                      "end": 434
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
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 436,
                                              "end": 437
                                            },
                                            "typeArguments": null,
                                            "start": 436,
                                            "end": 437
                                          },
                                          {
                                            "type": "TSNullKeyword",
                                            "start": 440,
                                            "end": 444
                                          }
                                        ],
                                        "start": 436,
                                        "end": 444
                                      },
                                      "start": 434,
                                      "end": 444
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 427,
                                    "end": 444
                                  }
                                ],
                                "start": 425,
                                "end": 446
                              },
                              "start": 423,
                              "end": 446
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 419,
                            "end": 446
                          }
                        ],
                        "start": 417,
                        "end": 448
                      }
                    ],
                    "start": 413,
                    "end": 448
                  },
                  "start": 411,
                  "end": 448
                },
                "start": 406,
                "end": 448
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              },
              "start": 450,
              "end": 459
            },
            "start": 405,
            "end": 459
          },
          "start": 402,
          "end": 459
        },
        "start": 326,
        "end": 459
      },
      "declare": false,
      "start": 303,
      "end": 460
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
            "name": "GenericForwardRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 485
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "forwardRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 498
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FixedForwardRef",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 517
              },
              "typeArguments": null,
              "start": 502,
              "end": 517
            },
            "start": 488,
            "end": 517
          },
          "definite": false,
          "start": 468,
          "end": 517
        }
      ],
      "declare": false,
      "start": 462,
      "end": 518
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inner",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 534
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
              "start": 535,
              "end": 536
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 545,
              "end": 551
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 535,
            "end": 551
          }
        ],
        "start": 534,
        "end": 552
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 568
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 568
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 560,
              "end": 568
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 575
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 575
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 570,
              "end": 575
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onValueChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 590
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "onValueChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 590
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 577,
              "end": 590
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "colors",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 598
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "colors",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 598
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 592,
              "end": 598
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 607
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
                      "start": 608,
                      "end": 609
                    },
                    "typeArguments": null,
                    "start": 608,
                    "end": 609
                  }
                ],
                "start": 607,
                "end": 610
              },
              "start": 602,
              "end": 610
            },
            "start": 600,
            "end": 610
          },
          "start": 558,
          "end": 610
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ref",
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
                    "name": "current",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 623,
                    "end": 630
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
                            "name": "HTMLButtonElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 632,
                            "end": 649
                          },
                          "typeArguments": null,
                          "start": 632,
                          "end": 649
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 652,
                          "end": 656
                        }
                      ],
                      "start": 632,
                      "end": 656
                    },
                    "start": 630,
                    "end": 656
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 623,
                  "end": 656
                }
              ],
              "start": 621,
              "end": 658
            },
            "start": 619,
            "end": 658
          },
          "start": 616,
          "end": 658
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "rendered",
              "raw": "\"rendered\"",
              "start": 674,
              "end": 684
            },
            "start": 667,
            "end": 685
          }
        ],
        "start": 661,
        "end": 687
      },
      "expression": false,
      "start": 520,
      "end": 687
    },
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
              "name": "ColorPicker",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 713
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericForwardRef",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 733
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 739
                }
              ],
              "optional": false,
              "start": 716,
              "end": 740
            },
            "definite": false,
            "start": 702,
            "end": 740
          }
        ],
        "declare": false,
        "start": 696,
        "end": 741
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 689,
      "end": 741
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 742
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 18,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
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
    "value": "value",
    "start": 71,
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
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "onValueChange",
    "start": 85,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "void",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 147,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 155,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "forwardRef",
    "start": 164,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 223,
    "end": 224
  },
  {
    "type": "Null",
    "value": "null",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 233,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "current",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 279,
    "end": 280
  },
  {
    "type": "Null",
    "value": "null",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 303,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "FixedForwardRef",
    "start": 308,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 352,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 380,
    "end": 381
  },
  {
    "type": "Null",
    "value": "null",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 393,
    "end": 399
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
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "|",
    "start": 438,
    "end": 439
  },
  {
    "type": "Null",
    "value": "null",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "GenericForwardRef",
    "start": 468,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "forwardRef",
    "start": 488,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "FixedForwardRef",
    "start": 502,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 520,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 537,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 560,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 570,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "onValueChange",
    "start": 577,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 602,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 623,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "HTMLButtonElement",
    "start": 632,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 650,
    "end": 651
  },
  {
    "type": "Null",
    "value": "null",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 667,
    "end": 673
  },
  {
    "type": "String",
    "value": "\"rendered\"",
    "start": 674,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 689,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 696,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "ColorPicker",
    "start": 702,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "GenericForwardRef",
    "start": 716,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 734,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ColorPicker",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ColorPicker",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component",
        "raw": "\"./component\"",
        "start": 28,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 42
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StoryFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 56
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
              "start": 57,
              "end": 58
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 57,
            "end": 58
          }
        ],
        "start": 56,
        "end": 59
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 70,
                        "end": 71
                      },
                      "typeArguments": null,
                      "start": 70,
                      "end": 71
                    },
                    "extendsType": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 94,
                                  "end": 95
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 94,
                                "end": 95
                              },
                              "start": 88,
                              "end": 95
                            },
                            "start": 86,
                            "end": 95
                          },
                          "start": 81,
                          "end": 95
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 100,
                          "end": 103
                        },
                        "start": 97,
                        "end": 103
                      },
                      "start": 80,
                      "end": 103
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 107
                      },
                      "typeArguments": null,
                      "start": 106,
                      "end": 107
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 110,
                      "end": 115
                    },
                    "start": 70,
                    "end": 115
                  },
                  "start": 68,
                  "end": 115
                },
                "start": 64,
                "end": 115
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 117,
              "end": 126
            },
            "start": 63,
            "end": 126
          },
          {
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
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 140
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 150
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 151,
                              "end": 152
                            },
                            "typeArguments": null,
                            "start": 151,
                            "end": 152
                          },
                          "extendsType": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSInferType",
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 175,
                                        "end": 176
                                      },
                                      "constraint": null,
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 175,
                                      "end": 176
                                    },
                                    "start": 169,
                                    "end": 176
                                  },
                                  "start": 167,
                                  "end": 176
                                },
                                "start": 162,
                                "end": 176
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 181,
                                "end": 184
                              },
                              "start": 178,
                              "end": 184
                            },
                            "start": 161,
                            "end": 184
                          },
                          "trueType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 187,
                              "end": 188
                            },
                            "typeArguments": null,
                            "start": 187,
                            "end": 188
                          },
                          "falseType": {
                            "type": "TSNeverKeyword",
                            "start": 191,
                            "end": 196
                          },
                          "start": 151,
                          "end": 196
                        }
                      ],
                      "start": 150,
                      "end": 197
                    },
                    "start": 143,
                    "end": 197
                  },
                  "start": 141,
                  "end": 197
                },
                "accessibility": null,
                "static": false,
                "start": 136,
                "end": 198
              }
            ],
            "start": 130,
            "end": 200
          }
        ],
        "start": 62,
        "end": 200
      },
      "declare": false,
      "start": 44,
      "end": 201
    },
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
              "name": "Default",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StoryFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 287
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ColorPicker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 295,
                          "end": 306
                        },
                        "typeArguments": null,
                        "start": 288,
                        "end": 306
                      }
                    ],
                    "start": 287,
                    "end": 307
                  },
                  "start": 280,
                  "end": 307
                },
                "start": 278,
                "end": 307
              },
              "start": 271,
              "end": 307
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 315
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "story",
                      "raw": "\"story\"",
                      "start": 333,
                      "end": 340
                    },
                    "start": 326,
                    "end": 341
                  }
                ],
                "start": 320,
                "end": 343
              },
              "id": null,
              "generator": false,
              "start": 310,
              "end": 343
            },
            "definite": false,
            "start": 271,
            "end": 343
          }
        ],
        "declare": false,
        "start": 265,
        "end": 344
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 258,
      "end": 344
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
            "name": "Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 411
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 416
          },
          "optional": false,
          "computed": false,
          "start": 404,
          "end": 416
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 433
              },
              "value": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 435,
                "end": 440
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 425,
              "end": 440
            }
          ],
          "start": 419,
          "end": 443
        },
        "start": 404,
        "end": 443
      },
      "directive": null,
      "start": 404,
      "end": 444
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 444
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "ColorPicker",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "\"./component\"",
    "start": 28,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 44,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "StoryFn",
    "start": 49,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
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
    "value": "&",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 258,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "StoryFn",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 288,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "ColorPicker",
    "start": 295,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"story\"",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 404,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 425,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  }
]
```
