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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
      },
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
              "start": 20,
              "end": 25
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
                  "start": 27,
                  "end": 28
                },
                "typeArguments": null,
                "start": 27,
                "end": 28
              },
              "start": 25,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 46
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
              "start": 47,
              "end": 48
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 48
          }
        ],
        "start": 46,
        "end": 49
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
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
              "start": 70,
              "end": 71
            },
            "typeArguments": null,
            "start": 70,
            "end": 71
          },
          "start": 64,
          "end": 71
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 77
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
                    "name": "P",
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
              }
            ],
            "start": 77,
            "end": 83
          },
          "start": 74,
          "end": 83
        },
        "optional": false,
        "readonly": null,
        "start": 52,
        "end": 86
      },
      "declare": false,
      "start": 33,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
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
              "start": 101,
              "end": 102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 101,
            "end": 102
          }
        ],
        "start": 100,
        "end": 103
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 105,
            "end": 108
          },
          "start": 104,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 114
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
                  "start": 115,
                  "end": 116
                },
                "typeArguments": null,
                "start": 115,
                "end": 116
              }
            ],
            "start": 114,
            "end": 117
          },
          "start": 111,
          "end": 117
        },
        "start": 109,
        "end": 117
      },
      "body": {
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 138
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 133,
                  "end": 141
                }
              ],
              "start": 131,
              "end": 143
            },
            "start": 124,
            "end": 144
          }
        ],
        "start": 118,
        "end": 146
      },
      "expression": false,
      "start": 88,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 162
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
              "start": 163,
              "end": 164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 164
          }
        ],
        "start": 162,
        "end": 165
      },
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
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 172
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
                      "start": 173,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 174
                  }
                ],
                "start": 172,
                "end": 175
              },
              "start": 169,
              "end": 175
            },
            "start": 167,
            "end": 175
          },
          "start": 166,
          "end": 175
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
            "start": 178,
            "end": 179
          },
          "typeArguments": null,
          "start": 178,
          "end": 179
        },
        "start": 176,
        "end": 179
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 200
              },
              "optional": false,
              "computed": false,
              "start": 193,
              "end": 200
            },
            "start": 186,
            "end": 201
          }
        ],
        "start": 180,
        "end": 203
      },
      "expression": false,
      "start": 148,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 220
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
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          }
        ],
        "start": 220,
        "end": 223
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "start": 227,
            "end": 230
          },
          "start": 224,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 241
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
                  "start": 242,
                  "end": 243
                },
                "typeArguments": null,
                "start": 242,
                "end": 243
              }
            ],
            "start": 241,
            "end": 244
          },
          "start": 233,
          "end": 244
        },
        "start": 231,
        "end": 244
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 261
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 264,
                    "end": 266
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boxified",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 278
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
                            "start": 279,
                            "end": 280
                          },
                          "typeArguments": null,
                          "start": 279,
                          "end": 280
                        }
                      ],
                      "start": 278,
                      "end": 281
                    },
                    "start": 270,
                    "end": 281
                  },
                  "start": 264,
                  "end": 281
                },
                "definite": false,
                "start": 255,
                "end": 281
              }
            ],
            "declare": false,
            "start": 251,
            "end": 282
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "init": null,
                  "definite": false,
                  "start": 296,
                  "end": 297
                }
              ],
              "declare": false,
              "start": 292,
              "end": 297
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 304
            },
            "body": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 322
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 324
                      },
                      "optional": false,
                      "computed": true,
                      "start": 316,
                      "end": 325
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "box",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 331
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 335
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 336,
                            "end": 337
                          },
                          "optional": false,
                          "computed": true,
                          "start": 332,
                          "end": 338
                        }
                      ],
                      "optional": false,
                      "start": 328,
                      "end": 339
                    },
                    "start": 316,
                    "end": 339
                  },
                  "directive": null,
                  "start": 316,
                  "end": 340
                }
              ],
              "start": 306,
              "end": 346
            },
            "start": 287,
            "end": 346
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 364
            },
            "start": 351,
            "end": 365
          }
        ],
        "start": 245,
        "end": 367
      },
      "expression": false,
      "start": 205,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 386
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
              "start": 387,
              "end": 388
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 397,
              "end": 403
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 403
          }
        ],
        "start": 386,
        "end": 404
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
                "start": 410,
                "end": 418
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
                      "start": 419,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 419,
                    "end": 420
                  }
                ],
                "start": 418,
                "end": 421
              },
              "start": 410,
              "end": 421
            },
            "start": 408,
            "end": 421
          },
          "start": 405,
          "end": 421
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
            "start": 424,
            "end": 425
          },
          "typeArguments": null,
          "start": 424,
          "end": 425
        },
        "start": 422,
        "end": 425
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 442
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 445,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 451,
                    "end": 452
                  },
                  "start": 445,
                  "end": 452
                },
                "definite": false,
                "start": 436,
                "end": 452
              }
            ],
            "declare": false,
            "start": 432,
            "end": 453
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "init": null,
                  "definite": false,
                  "start": 467,
                  "end": 468
                }
              ],
              "declare": false,
              "start": 463,
              "end": 468
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 475
            },
            "body": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 493
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 495
                      },
                      "optional": false,
                      "computed": true,
                      "start": 487,
                      "end": 496
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unbox",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 504
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 505,
                            "end": 508
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 509,
                            "end": 510
                          },
                          "optional": false,
                          "computed": true,
                          "start": 505,
                          "end": 511
                        }
                      ],
                      "optional": false,
                      "start": 499,
                      "end": 512
                    },
                    "start": 487,
                    "end": 512
                  },
                  "directive": null,
                  "start": 487,
                  "end": 513
                }
              ],
              "start": 477,
              "end": 519
            },
            "start": 458,
            "end": 519
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 537
            },
            "start": 524,
            "end": 538
          }
        ],
        "start": 426,
        "end": 540
      },
      "expression": false,
      "start": 369,
      "end": 540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignBoxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 565
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
              "start": 566,
              "end": 567
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 566,
            "end": 567
          }
        ],
        "start": 565,
        "end": 568
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
                "start": 574,
                "end": 582
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
                      "start": 583,
                      "end": 584
                    },
                    "typeArguments": null,
                    "start": 583,
                    "end": 584
                  }
                ],
                "start": 582,
                "end": 585
              },
              "start": 574,
              "end": 585
            },
            "start": 572,
            "end": 585
          },
          "start": 569,
          "end": 585
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
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
                "start": 595,
                "end": 596
              },
              "typeArguments": null,
              "start": 595,
              "end": 596
            },
            "start": 593,
            "end": 596
          },
          "start": 587,
          "end": 596
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 613,
                    "end": 614
                  },
                  "init": null,
                  "definite": false,
                  "start": 613,
                  "end": 614
                }
              ],
              "declare": false,
              "start": 609,
              "end": 614
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 624
            },
            "body": {
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 639
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 641
                        },
                        "optional": false,
                        "computed": true,
                        "start": 636,
                        "end": 642
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 643,
                        "end": 648
                      },
                      "optional": false,
                      "computed": false,
                      "start": 636,
                      "end": 648
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 657
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 658,
                        "end": 659
                      },
                      "optional": false,
                      "computed": true,
                      "start": 651,
                      "end": 660
                    },
                    "start": 636,
                    "end": 660
                  },
                  "directive": null,
                  "start": 636,
                  "end": 661
                }
              ],
              "start": 626,
              "end": 667
            },
            "start": 604,
            "end": 667
          }
        ],
        "start": 598,
        "end": 669
      },
      "expression": false,
      "start": 542,
      "end": 669
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 680,
        "end": 682
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 696
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 710
                      },
                      "value": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 712,
                        "end": 714
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 709,
                      "end": 714
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 724,
                        "end": 725
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 727,
                        "end": 734
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 724,
                      "end": 734
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 745
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 747,
                        "end": 751
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 744,
                      "end": 751
                    }
                  ],
                  "start": 699,
                  "end": 757
                },
                "definite": false,
                "start": 695,
                "end": 757
              }
            ],
            "declare": false,
            "start": 691,
            "end": 758
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
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 768
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 771,
                    "end": 777
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 779
                    }
                  ],
                  "optional": false,
                  "start": 771,
                  "end": 780
                },
                "definite": false,
                "start": 767,
                "end": 780
              }
            ],
            "declare": false,
            "start": 763,
            "end": 781
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 793,
                      "end": 799
                    },
                    "start": 791,
                    "end": 799
                  },
                  "start": 790,
                  "end": 799
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 802,
                      "end": 803
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 805
                    },
                    "optional": false,
                    "computed": false,
                    "start": 802,
                    "end": 805
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 811
                  },
                  "optional": false,
                  "computed": false,
                  "start": 802,
                  "end": 811
                },
                "definite": false,
                "start": 790,
                "end": 811
              }
            ],
            "declare": false,
            "start": 786,
            "end": 812
          }
        ],
        "start": 685,
        "end": 814
      },
      "expression": false,
      "start": 671,
      "end": 814
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 827
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 841
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 854,
                        "end": 855
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 860
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 861,
                            "end": 863
                          }
                        ],
                        "optional": false,
                        "start": 857,
                        "end": 864
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 854,
                      "end": 864
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 875
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 880
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 881,
                            "end": 888
                          }
                        ],
                        "optional": false,
                        "start": 877,
                        "end": 889
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 874,
                      "end": 889
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 899,
                        "end": 900
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 902,
                          "end": 905
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 906,
                            "end": 910
                          }
                        ],
                        "optional": false,
                        "start": 902,
                        "end": 911
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 899,
                      "end": 911
                    }
                  ],
                  "start": 844,
                  "end": 917
                },
                "definite": false,
                "start": 840,
                "end": 917
              }
            ],
            "declare": false,
            "start": 836,
            "end": 918
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 928
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 931,
                    "end": 939
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 940,
                      "end": 941
                    }
                  ],
                  "optional": false,
                  "start": 931,
                  "end": 942
                },
                "definite": false,
                "start": 927,
                "end": 942
              }
            ],
            "declare": false,
            "start": 923,
            "end": 943
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 955,
                      "end": 961
                    },
                    "start": 953,
                    "end": 961
                  },
                  "start": 952,
                  "end": 961
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 964,
                    "end": 965
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 967
                  },
                  "optional": false,
                  "computed": false,
                  "start": 964,
                  "end": 967
                },
                "definite": false,
                "start": 952,
                "end": 967
              }
            ],
            "declare": false,
            "start": 948,
            "end": 968
          }
        ],
        "start": 830,
        "end": 970
      },
      "expression": false,
      "start": 816,
      "end": 970
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 981,
        "end": 983
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 997
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1010,
                        "end": 1011
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1013,
                          "end": 1016
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1017,
                            "end": 1019
                          }
                        ],
                        "optional": false,
                        "start": 1013,
                        "end": 1020
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1010,
                      "end": 1020
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1031
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1033,
                          "end": 1036
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 1037,
                            "end": 1044
                          }
                        ],
                        "optional": false,
                        "start": 1033,
                        "end": 1045
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1030,
                      "end": 1045
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1055,
                        "end": 1056
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1058,
                          "end": 1061
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1062,
                            "end": 1066
                          }
                        ],
                        "optional": false,
                        "start": 1058,
                        "end": 1067
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1055,
                      "end": 1067
                    }
                  ],
                  "start": 1000,
                  "end": 1073
                },
                "definite": false,
                "start": 996,
                "end": 1073
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1074
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assignBoxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 1079,
                "end": 1093
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1094,
                  "end": 1095
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1099,
                        "end": 1100
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1102,
                        "end": 1107
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1099,
                      "end": 1107
                    }
                  ],
                  "start": 1097,
                  "end": 1109
                }
              ],
              "optional": false,
              "start": 1079,
              "end": 1110
            },
            "directive": null,
            "start": 1079,
            "end": 1111
          }
        ],
        "start": 986,
        "end": 1113
      },
      "expression": false,
      "start": 972,
      "end": 1113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1124,
        "end": 1126
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1140
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1153,
                        "end": 1154
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1156,
                          "end": 1159
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1160,
                            "end": 1162
                          }
                        ],
                        "optional": false,
                        "start": 1156,
                        "end": 1163
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1153,
                      "end": 1163
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1174
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1176,
                          "end": 1179
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 1180,
                            "end": 1187
                          }
                        ],
                        "optional": false,
                        "start": 1176,
                        "end": 1188
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1173,
                      "end": 1188
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1199
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1201,
                          "end": 1204
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1205,
                            "end": 1209
                          }
                        ],
                        "optional": false,
                        "start": 1201,
                        "end": 1210
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1198,
                      "end": 1210
                    }
                  ],
                  "start": 1143,
                  "end": 1216
                },
                "definite": false,
                "start": 1139,
                "end": 1216
              }
            ],
            "declare": false,
            "start": 1135,
            "end": 1217
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1223
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boxify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1232
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unboxify",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1241
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1242,
                        "end": 1243
                      }
                    ],
                    "optional": false,
                    "start": 1233,
                    "end": 1244
                  }
                ],
                "optional": false,
                "start": 1226,
                "end": 1245
              },
              "start": 1222,
              "end": 1245
            },
            "directive": null,
            "start": 1222,
            "end": 1246
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1251,
                "end": 1252
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unboxify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1263
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boxify",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1264,
                      "end": 1270
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1271,
                        "end": 1272
                      }
                    ],
                    "optional": false,
                    "start": 1264,
                    "end": 1273
                  }
                ],
                "optional": false,
                "start": 1255,
                "end": 1274
              },
              "start": 1251,
              "end": 1274
            },
            "directive": null,
            "start": 1251,
            "end": 1275
          }
        ],
        "start": 1129,
        "end": 1277
      },
      "expression": false,
      "start": 1115,
      "end": 1277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1298
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
              "start": 1299,
              "end": 1300
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1299,
            "end": 1300
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1312,
              "end": 1318
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1302,
            "end": 1318
          }
        ],
        "start": 1298,
        "end": 1319
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1329
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1333,
                "end": 1334
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1337,
                  "end": 1338
                },
                "typeArguments": null,
                "start": 1337,
                "end": 1338
              },
              "optional": false,
              "readonly": null,
              "start": 1325,
              "end": 1340
            },
            "start": 1323,
            "end": 1340
          },
          "start": 1320,
          "end": 1340
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1355,
              "end": 1358
            },
            "start": 1348,
            "end": 1359
          }
        ],
        "start": 1342,
        "end": 1361
      },
      "expression": false,
      "start": 1279,
      "end": 1361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1372,
        "end": 1374
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1378,
              "end": 1384
            },
            "start": 1376,
            "end": 1384
          },
          "start": 1375,
          "end": 1384
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1397
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "makeRecord",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1400,
                    "end": 1410
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1421,
                            "end": 1422
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1424,
                              "end": 1427
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 1428,
                                "end": 1430
                              }
                            ],
                            "optional": false,
                            "start": 1424,
                            "end": 1431
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1421,
                          "end": 1431
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1441,
                            "end": 1442
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1444,
                              "end": 1447
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 1448,
                                "end": 1455
                              }
                            ],
                            "optional": false,
                            "start": 1444,
                            "end": 1456
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1441,
                          "end": 1456
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1466,
                            "end": 1467
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1469,
                              "end": 1472
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 1473,
                                "end": 1477
                              }
                            ],
                            "optional": false,
                            "start": 1469,
                            "end": 1478
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1466,
                          "end": 1478
                        }
                      ],
                      "start": 1411,
                      "end": 1484
                    }
                  ],
                  "optional": false,
                  "start": 1400,
                  "end": 1485
                },
                "definite": false,
                "start": 1396,
                "end": 1485
              }
            ],
            "declare": false,
            "start": 1392,
            "end": 1486
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1495,
                  "end": 1496
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1499,
                    "end": 1507
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1509
                    }
                  ],
                  "optional": false,
                  "start": 1499,
                  "end": 1510
                },
                "definite": false,
                "start": 1495,
                "end": 1510
              }
            ],
            "declare": false,
            "start": 1491,
            "end": 1511
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1523,
                          "end": 1529
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1532,
                          "end": 1538
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1541,
                          "end": 1548
                        }
                      ],
                      "start": 1523,
                      "end": 1548
                    },
                    "start": 1521,
                    "end": 1548
                  },
                  "start": 1520,
                  "end": 1548
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1551,
                    "end": 1552
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1553,
                    "end": 1554
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1551,
                  "end": 1554
                },
                "definite": false,
                "start": 1520,
                "end": 1554
              }
            ],
            "declare": false,
            "start": 1516,
            "end": 1555
          }
        ],
        "start": 1386,
        "end": 1557
      },
      "expression": false,
      "start": 1363,
      "end": 1557
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeDictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 1568,
        "end": 1582
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
              "start": 1583,
              "end": 1584
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1583,
            "end": 1584
          }
        ],
        "start": 1582,
        "end": 1585
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1597,
                          "end": 1603
                        },
                        "start": 1595,
                        "end": 1603
                      },
                      "start": 1594,
                      "end": 1603
                    }
                  ],
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
                        "start": 1606,
                        "end": 1607
                      },
                      "typeArguments": null,
                      "start": 1606,
                      "end": 1607
                    },
                    "start": 1604,
                    "end": 1607
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1593,
                  "end": 1607
                }
              ],
              "start": 1591,
              "end": 1609
            },
            "start": 1589,
            "end": 1609
          },
          "start": 1586,
          "end": 1609
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1627
            },
            "start": 1617,
            "end": 1628
          }
        ],
        "start": 1611,
        "end": 1630
      },
      "expression": false,
      "start": 1559,
      "end": 1630
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1643
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1647,
              "end": 1653
            },
            "start": 1645,
            "end": 1653
          },
          "start": 1644,
          "end": 1653
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1665,
                  "end": 1666
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "makeDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1669,
                    "end": 1683
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1694,
                            "end": 1695
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1697,
                              "end": 1700
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 1701,
                                "end": 1703
                              }
                            ],
                            "optional": false,
                            "start": 1697,
                            "end": 1704
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1694,
                          "end": 1704
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1714,
                            "end": 1715
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1717,
                              "end": 1720
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 1721,
                                "end": 1728
                              }
                            ],
                            "optional": false,
                            "start": 1717,
                            "end": 1729
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1714,
                          "end": 1729
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1739,
                            "end": 1740
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1742,
                              "end": 1745
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 1746,
                                "end": 1750
                              }
                            ],
                            "optional": false,
                            "start": 1742,
                            "end": 1751
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1739,
                          "end": 1751
                        }
                      ],
                      "start": 1684,
                      "end": 1757
                    }
                  ],
                  "optional": false,
                  "start": 1669,
                  "end": 1758
                },
                "definite": false,
                "start": 1665,
                "end": 1758
              }
            ],
            "declare": false,
            "start": 1661,
            "end": 1759
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1769
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1772,
                    "end": 1780
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1781,
                      "end": 1782
                    }
                  ],
                  "optional": false,
                  "start": 1772,
                  "end": 1783
                },
                "definite": false,
                "start": 1768,
                "end": 1783
              }
            ],
            "declare": false,
            "start": 1764,
            "end": 1784
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1814,
                          "end": 1821
                        }
                      ],
                      "start": 1796,
                      "end": 1821
                    },
                    "start": 1794,
                    "end": 1821
                  },
                  "start": 1793,
                  "end": 1821
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1824,
                    "end": 1825
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1826,
                    "end": 1827
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1824,
                  "end": 1828
                },
                "definite": false,
                "start": 1793,
                "end": 1828
              }
            ],
            "declare": false,
            "start": 1789,
            "end": 1829
          }
        ],
        "start": 1655,
        "end": 1831
      },
      "expression": false,
      "start": 1632,
      "end": 1831
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1850,
        "end": 1858
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
              "start": 1859,
              "end": 1860
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1859,
            "end": 1860
          }
        ],
        "start": 1858,
        "end": 1861
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1871
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
                    "start": 1881,
                    "end": 1882
                  },
                  "typeArguments": null,
                  "start": 1881,
                  "end": 1882
                },
                "start": 1875,
                "end": 1882
              },
              "nameType": null,
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
                    "start": 1886,
                    "end": 1887
                  },
                  "typeArguments": null,
                  "start": 1886,
                  "end": 1887
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1889
                  },
                  "typeArguments": null,
                  "start": 1888,
                  "end": 1889
                },
                "start": 1886,
                "end": 1890
              },
              "optional": true,
              "readonly": null,
              "start": 1867,
              "end": 1892
            },
            "start": 1865,
            "end": 1892
          },
          "start": 1862,
          "end": 1892
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
            "start": 1895,
            "end": 1896
          },
          "typeArguments": null,
          "start": 1895,
          "end": 1896
        },
        "start": 1893,
        "end": 1896
      },
      "body": null,
      "expression": false,
      "start": 1833,
      "end": 1897
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clone",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1920
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
              "start": 1921,
              "end": 1922
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1921,
            "end": 1922
          }
        ],
        "start": 1920,
        "end": 1923
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1941,
                "end": 1942
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
                    "start": 1952,
                    "end": 1953
                  },
                  "typeArguments": null,
                  "start": 1952,
                  "end": 1953
                },
                "start": 1946,
                "end": 1953
              },
              "nameType": null,
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
                    "start": 1956,
                    "end": 1957
                  },
                  "typeArguments": null,
                  "start": 1956,
                  "end": 1957
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1958,
                    "end": 1959
                  },
                  "typeArguments": null,
                  "start": 1958,
                  "end": 1959
                },
                "start": 1956,
                "end": 1960
              },
              "optional": false,
              "readonly": true,
              "start": 1929,
              "end": 1962
            },
            "start": 1927,
            "end": 1962
          },
          "start": 1924,
          "end": 1962
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
            "start": 1965,
            "end": 1966
          },
          "typeArguments": null,
          "start": 1965,
          "end": 1966
        },
        "start": 1963,
        "end": 1966
      },
      "body": null,
      "expression": false,
      "start": 1898,
      "end": 1967
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateAndClone",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 2001
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
              "start": 2002,
              "end": 2003
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2002,
            "end": 2003
          }
        ],
        "start": 2001,
        "end": 2004
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2022,
                "end": 2023
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
                    "start": 2033,
                    "end": 2034
                  },
                  "typeArguments": null,
                  "start": 2033,
                  "end": 2034
                },
                "start": 2027,
                "end": 2034
              },
              "nameType": null,
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
                    "start": 2038,
                    "end": 2039
                  },
                  "typeArguments": null,
                  "start": 2038,
                  "end": 2039
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2040,
                    "end": 2041
                  },
                  "typeArguments": null,
                  "start": 2040,
                  "end": 2041
                },
                "start": 2038,
                "end": 2042
              },
              "optional": true,
              "readonly": true,
              "start": 2010,
              "end": 2044
            },
            "start": 2008,
            "end": 2044
          },
          "start": 2005,
          "end": 2044
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
            "start": 2047,
            "end": 2048
          },
          "typeArguments": null,
          "start": 2047,
          "end": 2048
        },
        "start": 2045,
        "end": 2048
      },
      "body": null,
      "expression": false,
      "start": 1968,
      "end": 2049
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2056,
        "end": 2059
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2068,
              "end": 2069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2072,
                "end": 2078
              },
              "start": 2070,
              "end": 2078
            },
            "accessibility": null,
            "static": false,
            "start": 2068,
            "end": 2079
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2093,
              "end": 2094
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2096,
                "end": 2102
              },
              "start": 2094,
              "end": 2102
            },
            "accessibility": null,
            "static": false,
            "start": 2084,
            "end": 2103
          }
        ],
        "start": 2062,
        "end": 2105
      },
      "declare": false,
      "start": 2051,
      "end": 2105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2116,
        "end": 2119
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2125,
                "end": 2128
              },
              "typeArguments": null,
              "start": 2125,
              "end": 2128
            },
            "start": 2123,
            "end": 2128
          },
          "start": 2120,
          "end": 2128
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
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2141
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2144,
                    "end": 2152
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2153,
                      "end": 2156
                    }
                  ],
                  "optional": false,
                  "start": 2144,
                  "end": 2157
                },
                "definite": false,
                "start": 2140,
                "end": 2157
              }
            ],
            "declare": false,
            "start": 2136,
            "end": 2158
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2205,
                  "end": 2206
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2209,
                    "end": 2214
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2215,
                      "end": 2218
                    }
                  ],
                  "optional": false,
                  "start": 2209,
                  "end": 2219
                },
                "definite": false,
                "start": 2205,
                "end": 2219
              }
            ],
            "declare": false,
            "start": 2201,
            "end": 2220
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2259,
                  "end": 2260
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validateAndClone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2263,
                    "end": 2279
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2280,
                      "end": 2283
                    }
                  ],
                  "optional": false,
                  "start": 2263,
                  "end": 2284
                },
                "definite": false,
                "start": 2259,
                "end": 2284
              }
            ],
            "declare": false,
            "start": 2255,
            "end": 2285
          }
        ],
        "start": 2130,
        "end": 2316
      },
      "expression": false,
      "start": 2107,
      "end": 2316
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 2345,
        "end": 2349
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
              "start": 2350,
              "end": 2351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2350,
            "end": 2351
          }
        ],
        "start": 2349,
        "end": 2352
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 2359,
              "end": 2363
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2365,
                  "end": 2368
                },
                "start": 2365,
                "end": 2370
              },
              "start": 2363,
              "end": 2370
            },
            "value": null,
            "start": 2356,
            "end": 2370
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
              "start": 2375,
              "end": 2376
            },
            "typeArguments": null,
            "start": 2375,
            "end": 2376
          },
          "start": 2372,
          "end": 2376
        },
        "start": 2355,
        "end": 2376
      },
      "declare": false,
      "start": 2340,
      "end": 2377
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2387
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
              "start": 2388,
              "end": 2389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2388,
            "end": 2389
          }
        ],
        "start": 2387,
        "end": 2390
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2400,
          "end": 2401
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
              "start": 2411,
              "end": 2412
            },
            "typeArguments": null,
            "start": 2411,
            "end": 2412
          },
          "start": 2405,
          "end": 2412
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null,
                "start": 2415,
                "end": 2419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2420,
                        "end": 2421
                      },
                      "typeArguments": null,
                      "start": 2420,
                      "end": 2421
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2422,
                        "end": 2423
                      },
                      "typeArguments": null,
                      "start": 2422,
                      "end": 2423
                    },
                    "start": 2420,
                    "end": 2424
                  }
                ],
                "start": 2419,
                "end": 2425
              },
              "start": 2415,
              "end": 2425
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "typeAnnotation": null,
                "start": 2428,
                "end": 2432
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2433,
                        "end": 2434
                      },
                      "typeArguments": null,
                      "start": 2433,
                      "end": 2434
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2435,
                        "end": 2436
                      },
                      "typeArguments": null,
                      "start": 2435,
                      "end": 2436
                    },
                    "start": 2433,
                    "end": 2437
                  }
                ],
                "start": 2432,
                "end": 2438
              },
              "start": 2428,
              "end": 2438
            }
          ],
          "start": 2415,
          "end": 2438
        },
        "optional": false,
        "readonly": null,
        "start": 2393,
        "end": 2442
      },
      "declare": false,
      "start": 2378,
      "end": 2443
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "applySpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 2709,
        "end": 2718
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
              "start": 2719,
              "end": 2720
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2719,
            "end": 2720
          }
        ],
        "start": 2718,
        "end": 2721
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
                "name": "Spec",
                "optional": false,
                "typeAnnotation": null,
                "start": 2727,
                "end": 2731
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
                      "start": 2732,
                      "end": 2733
                    },
                    "typeArguments": null,
                    "start": 2732,
                    "end": 2733
                  }
                ],
                "start": 2731,
                "end": 2734
              },
              "start": 2727,
              "end": 2734
            },
            "start": 2725,
            "end": 2734
          },
          "start": 2722,
          "end": 2734
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 2741,
                "end": 2745
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2747,
                    "end": 2750
                  },
                  "start": 2747,
                  "end": 2752
                },
                "start": 2745,
                "end": 2752
              },
              "value": null,
              "start": 2738,
              "end": 2752
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
                "start": 2757,
                "end": 2758
              },
              "typeArguments": null,
              "start": 2757,
              "end": 2758
            },
            "start": 2754,
            "end": 2758
          },
          "start": 2737,
          "end": 2758
        },
        "start": 2735,
        "end": 2758
      },
      "body": null,
      "expression": false,
      "start": 2692,
      "end": 2759
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2840,
            "end": 2842
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "applySpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 2845,
              "end": 2854
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
                      "name": "sum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2861,
                      "end": 2864
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "type": "TSAnyKeyword",
                              "start": 2870,
                              "end": 2873
                            },
                            "start": 2868,
                            "end": 2873
                          },
                          "start": 2867,
                          "end": 2873
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2878,
                        "end": 2879
                      },
                      "id": null,
                      "generator": false,
                      "start": 2866,
                      "end": 2879
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2861,
                    "end": 2879
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2885,
                      "end": 2891
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
                            "name": "mul",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2903,
                            "end": 2906
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
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
                                    "type": "TSAnyKeyword",
                                    "start": 2912,
                                    "end": 2915
                                  },
                                  "start": 2910,
                                  "end": 2915
                                },
                                "start": 2909,
                                "end": 2915
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "n",
                              "raw": "\"n\"",
                              "start": 2920,
                              "end": 2923
                            },
                            "id": null,
                            "generator": false,
                            "start": 2908,
                            "end": 2923
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2903,
                          "end": 2923
                        }
                      ],
                      "start": 2893,
                      "end": 2929
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2885,
                    "end": 2929
                  }
                ],
                "start": 2855,
                "end": 2931
              }
            ],
            "optional": false,
            "start": 2845,
            "end": 2932
          },
          "definite": false,
          "start": 2840,
          "end": 2932
        }
      ],
      "declare": false,
      "start": 2836,
      "end": 2933
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3008,
            "end": 3010
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "applySpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 3013,
              "end": 3022
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3025,
                      "end": 3028
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
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3032,
                            "end": 3035
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
                                  "name": "baz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3039,
                                  "end": 3042
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
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
                                          "type": "TSAnyKeyword",
                                          "start": 3048,
                                          "end": 3051
                                        },
                                        "start": 3046,
                                        "end": 3051
                                      },
                                      "start": 3045,
                                      "end": 3051
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 3056,
                                    "end": 3060
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 3044,
                                  "end": 3060
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 3039,
                                "end": 3060
                              }
                            ],
                            "start": 3037,
                            "end": 3062
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3032,
                          "end": 3062
                        }
                      ],
                      "start": 3030,
                      "end": 3064
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3025,
                    "end": 3064
                  }
                ],
                "start": 3023,
                "end": 3066
              }
            ],
            "optional": false,
            "start": 3013,
            "end": 3067
          },
          "definite": false,
          "start": 3008,
          "end": 3067
        }
      ],
      "declare": false,
      "start": 3004,
      "end": 3068
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3098,
            "end": 3101
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3105,
                    "end": 3106
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3105,
                  "end": 3106
                }
              ],
              "start": 3104,
              "end": 3107
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
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
                      "start": 3116,
                      "end": 3117
                    },
                    "typeArguments": null,
                    "start": 3116,
                    "end": 3117
                  },
                  "start": 3114,
                  "end": 3117
                },
                "start": 3108,
                "end": 3117
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "partial",
                "optional": false,
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
                      "start": 3128,
                      "end": 3135
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
                            "start": 3136,
                            "end": 3137
                          },
                          "typeArguments": null,
                          "start": 3136,
                          "end": 3137
                        }
                      ],
                      "start": 3135,
                      "end": 3138
                    },
                    "start": 3128,
                    "end": 3138
                  },
                  "start": 3126,
                  "end": 3138
                },
                "start": 3119,
                "end": 3138
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 3143,
              "end": 3149
            },
            "id": null,
            "generator": false,
            "start": 3104,
            "end": 3149
          },
          "definite": false,
          "start": 3098,
          "end": 3149
        }
      ],
      "declare": false,
      "start": 3092,
      "end": 3150
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 3155,
            "end": 3156
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3160,
                  "end": 3161
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 3163,
                  "end": 3164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3160,
                "end": 3164
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3166,
                  "end": 3167
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 3169,
                  "end": 3170
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3166,
                "end": 3170
              }
            ],
            "start": 3159,
            "end": 3171
          },
          "definite": false,
          "start": 3155,
          "end": 3171
        }
      ],
      "declare": false,
      "start": 3151,
      "end": 3172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 3173,
          "end": 3176
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 3177,
            "end": 3178
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3181,
                  "end": 3182
                },
                "value": {
                  "type": "Literal",
                  "value": 9,
                  "raw": "9",
                  "start": 3184,
                  "end": 3185
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3181,
                "end": 3185
              }
            ],
            "start": 3180,
            "end": 3186
          }
        ],
        "optional": false,
        "start": 3173,
        "end": 3187
      },
      "directive": null,
      "start": 3173,
      "end": 3188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 3189,
          "end": 3190
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3193,
            "end": 3196
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 3197,
              "end": 3198
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3201,
                    "end": 3202
                  },
                  "value": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 3204,
                    "end": 3205
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3201,
                  "end": 3205
                }
              ],
              "start": 3200,
              "end": 3206
            }
          ],
          "optional": false,
          "start": 3193,
          "end": 3207
        },
        "start": 3189,
        "end": 3207
      },
      "directive": null,
      "start": 3189,
      "end": 3208
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 3353,
        "end": 3356
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
              "start": 3357,
              "end": 3358
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3357,
            "end": 3358
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3360,
              "end": 3361
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
                  "start": 3376,
                  "end": 3377
                },
                "typeArguments": null,
                "start": 3376,
                "end": 3377
              },
              "start": 3370,
              "end": 3377
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3360,
            "end": 3377
          }
        ],
        "start": 3356,
        "end": 3378
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
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3384,
                "end": 3388
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
                      "start": 3389,
                      "end": 3390
                    },
                    "typeArguments": null,
                    "start": 3389,
                    "end": 3390
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3392,
                      "end": 3393
                    },
                    "typeArguments": null,
                    "start": 3392,
                    "end": 3393
                  }
                ],
                "start": 3388,
                "end": 3394
              },
              "start": 3384,
              "end": 3394
            },
            "start": 3382,
            "end": 3394
          },
          "start": 3379,
          "end": 3394
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
            "start": 3397,
            "end": 3398
          },
          "typeArguments": null,
          "start": 3397,
          "end": 3398
        },
        "start": 3395,
        "end": 3398
      },
      "body": null,
      "expression": false,
      "start": 3336,
      "end": 3399
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 3417,
        "end": 3420
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
              "start": 3421,
              "end": 3422
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3421,
            "end": 3422
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3425
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
                  "start": 3440,
                  "end": 3441
                },
                "typeArguments": null,
                "start": 3440,
                "end": 3441
              },
              "start": 3434,
              "end": 3441
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3424,
            "end": 3441
          }
        ],
        "start": 3420,
        "end": 3442
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
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3448,
                "end": 3452
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
                      "start": 3453,
                      "end": 3454
                    },
                    "typeArguments": null,
                    "start": 3453,
                    "end": 3454
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3456,
                      "end": 3457
                    },
                    "typeArguments": null,
                    "start": 3456,
                    "end": 3457
                  }
                ],
                "start": 3452,
                "end": 3458
              },
              "start": 3448,
              "end": 3458
            },
            "start": 3446,
            "end": 3458
          },
          "start": 3443,
          "end": 3458
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 3461,
            "end": 3462
          },
          "typeArguments": null,
          "start": 3461,
          "end": 3462
        },
        "start": 3459,
        "end": 3462
      },
      "body": null,
      "expression": false,
      "start": 3400,
      "end": 3463
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 3481,
        "end": 3484
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
              "start": 3485,
              "end": 3486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3485,
            "end": 3486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3488,
              "end": 3489
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
                  "start": 3504,
                  "end": 3505
                },
                "typeArguments": null,
                "start": 3504,
                "end": 3505
              },
              "start": 3498,
              "end": 3505
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3488,
            "end": 3505
          }
        ],
        "start": 3484,
        "end": 3506
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
                "start": 3512,
                "end": 3520
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3521,
                      "end": 3525
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
                            "start": 3526,
                            "end": 3527
                          },
                          "typeArguments": null,
                          "start": 3526,
                          "end": 3527
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3529,
                            "end": 3530
                          },
                          "typeArguments": null,
                          "start": 3529,
                          "end": 3530
                        }
                      ],
                      "start": 3525,
                      "end": 3531
                    },
                    "start": 3521,
                    "end": 3531
                  }
                ],
                "start": 3520,
                "end": 3532
              },
              "start": 3512,
              "end": 3532
            },
            "start": 3510,
            "end": 3532
          },
          "start": 3507,
          "end": 3532
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
            "start": 3535,
            "end": 3536
          },
          "typeArguments": null,
          "start": 3535,
          "end": 3536
        },
        "start": 3533,
        "end": 3536
      },
      "body": null,
      "expression": false,
      "start": 3464,
      "end": 3537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 3555,
        "end": 3558
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
              "start": 3559,
              "end": 3560
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3559,
            "end": 3560
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3562,
              "end": 3563
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
                  "start": 3578,
                  "end": 3579
                },
                "typeArguments": null,
                "start": 3578,
                "end": 3579
              },
              "start": 3572,
              "end": 3579
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3562,
            "end": 3579
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3581,
              "end": 3582
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3592
              },
              "typeArguments": null,
              "start": 3591,
              "end": 3592
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3581,
            "end": 3592
          }
        ],
        "start": 3558,
        "end": 3593
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
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3599,
                "end": 3603
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
                      "start": 3604,
                      "end": 3605
                    },
                    "typeArguments": null,
                    "start": 3604,
                    "end": 3605
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3607,
                      "end": 3608
                    },
                    "typeArguments": null,
                    "start": 3607,
                    "end": 3608
                  }
                ],
                "start": 3603,
                "end": 3609
              },
              "start": 3599,
              "end": 3609
            },
            "start": 3597,
            "end": 3609
          },
          "start": 3594,
          "end": 3609
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
            "start": 3612,
            "end": 3613
          },
          "typeArguments": null,
          "start": 3612,
          "end": 3613
        },
        "start": 3610,
        "end": 3613
      },
      "body": null,
      "expression": false,
      "start": 3538,
      "end": 3614
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null,
        "start": 3632,
        "end": 3635
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
              "start": 3636,
              "end": 3637
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3636,
            "end": 3637
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3639,
              "end": 3640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3639,
            "end": 3640
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3642,
              "end": 3643
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
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
                      "start": 3658,
                      "end": 3659
                    },
                    "typeArguments": null,
                    "start": 3658,
                    "end": 3659
                  },
                  "start": 3652,
                  "end": 3659
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3668,
                      "end": 3669
                    },
                    "typeArguments": null,
                    "start": 3668,
                    "end": 3669
                  },
                  "start": 3662,
                  "end": 3669
                }
              ],
              "start": 3652,
              "end": 3669
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3642,
            "end": 3669
          }
        ],
        "start": 3635,
        "end": 3670
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
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3676,
                "end": 3680
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "start": 3681,
                          "end": 3682
                        },
                        "typeArguments": null,
                        "start": 3681,
                        "end": 3682
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3685,
                          "end": 3686
                        },
                        "typeArguments": null,
                        "start": 3685,
                        "end": 3686
                      }
                    ],
                    "start": 3681,
                    "end": 3686
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3688,
                      "end": 3689
                    },
                    "typeArguments": null,
                    "start": 3688,
                    "end": 3689
                  }
                ],
                "start": 3680,
                "end": 3690
              },
              "start": 3676,
              "end": 3690
            },
            "start": 3674,
            "end": 3690
          },
          "start": 3671,
          "end": 3690
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
                "start": 3693,
                "end": 3694
              },
              "typeArguments": null,
              "start": 3693,
              "end": 3694
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3697,
                "end": 3698
              },
              "typeArguments": null,
              "start": 3697,
              "end": 3698
            }
          ],
          "start": 3693,
          "end": 3698
        },
        "start": 3691,
        "end": 3698
      },
      "body": null,
      "expression": false,
      "start": 3615,
      "end": 3699
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
            "name": "x0",
            "optional": false,
            "typeAnnotation": null,
            "start": 3705,
            "end": 3707
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f20",
              "optional": false,
              "typeAnnotation": null,
              "start": 3710,
              "end": 3713
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3716,
                      "end": 3719
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3721,
                      "end": 3723
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3716,
                    "end": 3723
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3725,
                      "end": 3728
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3730,
                      "end": 3737
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3725,
                    "end": 3737
                  }
                ],
                "start": 3714,
                "end": 3739
              }
            ],
            "optional": false,
            "start": 3710,
            "end": 3740
          },
          "definite": false,
          "start": 3705,
          "end": 3740
        }
      ],
      "declare": false,
      "start": 3701,
      "end": 3741
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3746,
            "end": 3748
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f21",
              "optional": false,
              "typeAnnotation": null,
              "start": 3751,
              "end": 3754
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3757,
                      "end": 3760
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3762,
                      "end": 3764
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3757,
                    "end": 3764
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3766,
                      "end": 3769
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3771,
                      "end": 3778
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3766,
                    "end": 3778
                  }
                ],
                "start": 3755,
                "end": 3780
              }
            ],
            "optional": false,
            "start": 3751,
            "end": 3781
          },
          "definite": false,
          "start": 3746,
          "end": 3781
        }
      ],
      "declare": false,
      "start": 3742,
      "end": 3782
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3787,
            "end": 3789
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f22",
              "optional": false,
              "typeAnnotation": null,
              "start": 3792,
              "end": 3795
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3798,
                      "end": 3801
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
                            "start": 3805,
                            "end": 3810
                          },
                          "value": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 3812,
                            "end": 3814
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3805,
                          "end": 3814
                        }
                      ],
                      "start": 3803,
                      "end": 3815
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3798,
                    "end": 3815
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3818,
                      "end": 3821
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
                            "start": 3825,
                            "end": 3830
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 3832,
                            "end": 3839
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3825,
                          "end": 3839
                        }
                      ],
                      "start": 3823,
                      "end": 3841
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3818,
                    "end": 3841
                  }
                ],
                "start": 3796,
                "end": 3843
              }
            ],
            "optional": false,
            "start": 3792,
            "end": 3844
          },
          "definite": false,
          "start": 3787,
          "end": 3844
        }
      ],
      "declare": false,
      "start": 3783,
      "end": 3845
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3850,
            "end": 3852
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f23",
              "optional": false,
              "typeAnnotation": null,
              "start": 3855,
              "end": 3858
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3861,
                      "end": 3864
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3866,
                      "end": 3868
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3861,
                    "end": 3868
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3870,
                      "end": 3873
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3875,
                      "end": 3882
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3870,
                    "end": 3882
                  }
                ],
                "start": 3859,
                "end": 3884
              }
            ],
            "optional": false,
            "start": 3855,
            "end": 3885
          },
          "definite": false,
          "start": 3850,
          "end": 3885
        }
      ],
      "declare": false,
      "start": 3846,
      "end": 3886
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3891,
            "end": 3893
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f24",
              "optional": false,
              "typeAnnotation": null,
              "start": 3896,
              "end": 3899
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3902,
                      "end": 3905
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3907,
                      "end": 3909
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3902,
                    "end": 3909
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3911,
                      "end": 3914
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3916,
                      "end": 3923
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3911,
                    "end": 3923
                  }
                ],
                "start": 3900,
                "end": 3925
              }
            ],
            "optional": false,
            "start": 3896,
            "end": 3926
          },
          "definite": false,
          "start": 3891,
          "end": 3926
        }
      ],
      "declare": false,
      "start": 3887,
      "end": 3927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3960,
        "end": 3968
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
              "start": 3969,
              "end": 3970
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3969,
            "end": 3970
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3972,
              "end": 3973
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
                  "start": 3988,
                  "end": 3989
                },
                "typeArguments": null,
                "start": 3988,
                "end": 3989
              },
              "start": 3982,
              "end": 3989
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3972,
            "end": 3989
          }
        ],
        "start": 3968,
        "end": 3990
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3996,
                "end": 3997
              },
              "typeArguments": null,
              "start": 3996,
              "end": 3997
            },
            "start": 3994,
            "end": 3997
          },
          "start": 3991,
          "end": 3997
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4005,
                  "end": 4006
                },
                "typeArguments": null,
                "start": 4005,
                "end": 4006
              },
              "start": 4005,
              "end": 4008
            },
            "start": 4003,
            "end": 4008
          },
          "start": 3999,
          "end": 4008
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4011,
            "end": 4015
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
                  "start": 4016,
                  "end": 4017
                },
                "typeArguments": null,
                "start": 4016,
                "end": 4017
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4019,
                  "end": 4020
                },
                "typeArguments": null,
                "start": 4019,
                "end": 4020
              }
            ],
            "start": 4015,
            "end": 4021
          },
          "start": 4011,
          "end": 4021
        },
        "start": 4009,
        "end": 4021
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 4035,
                "end": 4037
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4041,
                "end": 4044
              },
              "start": 4035,
              "end": 4044
            },
            "start": 4028,
            "end": 4045
          }
        ],
        "start": 4022,
        "end": 4047
      },
      "expression": false,
      "start": 3951,
      "end": 4047
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
            "name": "myAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4062,
                "end": 4065
              },
              "start": 4060,
              "end": 4065
            },
            "start": 4055,
            "end": 4065
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 4068,
            "end": 4070
          },
          "definite": false,
          "start": 4055,
          "end": 4070
        }
      ],
      "declare": false,
      "start": 4049,
      "end": 4071
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4079,
            "end": 4081
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 4084,
              "end": 4092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 4093,
                "end": 4098
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 4101,
                    "end": 4106
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 4108,
                    "end": 4113
                  }
                ],
                "start": 4100,
                "end": 4114
              }
            ],
            "optional": false,
            "start": 4084,
            "end": 4115
          },
          "definite": false,
          "start": 4079,
          "end": 4115
        }
      ],
      "declare": false,
      "start": 4073,
      "end": 4116
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
            "name": "o2",
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4130,
                      "end": 4133
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4135,
                        "end": 4138
                      },
                      "start": 4133,
                      "end": 4138
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4130,
                    "end": 4139
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4140,
                      "end": 4143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4145,
                        "end": 4148
                      },
                      "start": 4143,
                      "end": 4148
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4140,
                    "end": 4148
                  }
                ],
                "start": 4128,
                "end": 4150
              },
              "start": 4126,
              "end": 4150
            },
            "start": 4124,
            "end": 4150
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 4153,
              "end": 4161
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 4162,
                "end": 4167
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 4170,
                    "end": 4175
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 4177,
                    "end": 4182
                  }
                ],
                "start": 4169,
                "end": 4183
              }
            ],
            "optional": false,
            "start": 4153,
            "end": 4184
          },
          "definite": false,
          "start": 4124,
          "end": 4184
        }
      ],
      "declare": false,
      "start": 4118,
      "end": 4185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4185
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
    "value": "Box",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "value",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 33,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 61,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
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
    "value": "P",
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
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
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
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 166,
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
    "value": "Box",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
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
    "value": "T",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 186,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 205,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 251,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 298,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
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
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 351,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 369,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 378,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 389,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 410,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
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
    "value": "T",
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
    "value": "let",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 448,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "for",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 469,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 524,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 542,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "assignBoxified",
    "start": 551,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 574,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 587,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 615,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 618,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 643,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 671,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Boolean",
    "value": "true",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 786,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 802,
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
    "value": "a",
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
    "value": "value",
    "start": 806,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 816,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 825,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 874,
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
    "value": "box",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 902,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 906,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 923,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 931,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 972,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 981,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 992,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1037,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "assignBoxified",
    "start": 1079,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1102,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1160,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1180,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1205,
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
    "value": "}",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1233,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
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
    "value": "b",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1255,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "makeRecord",
    "start": 1288,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1304,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1312,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1330,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1348,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1363,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1378,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "makeRecord",
    "start": 1400,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1448,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1473,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1499,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1532,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1541,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1559,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "makeDictionary",
    "start": 1568,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
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
    "value": "return",
    "start": 1617,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1632,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1647,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "makeDictionary",
    "start": 1669,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1697,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1701,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1717,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1721,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1746,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1772,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1789,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1796,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1814,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1841,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 1850,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1872,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1875,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1898,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1906,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 1915,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1924,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1931,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1943,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1946,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1968,
    "end": 1975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1976,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "validateAndClone",
    "start": 1985,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2012,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2024,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2051,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2056,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2069,
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
    "value": "number",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2084,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2096,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2107,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2116,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2120,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2125,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2136,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 2144,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2153,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 2209,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2215,
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
    "type": "Keyword",
    "value": "let",
    "start": 2255,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "validateAndClone",
    "start": 2263,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2340,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 2345,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2356,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2359,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2365,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2372,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2378,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 2383,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2402,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2405,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 2415,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 2428,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2692,
    "end": 2699
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2700,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "applySpec",
    "start": 2709,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2722,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 2727,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2738,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2741,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2747,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2754,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2836,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2840,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "applySpec",
    "start": 2845,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 2861,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2870,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2875,
    "end": 2877
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 2885,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "mul",
    "start": 2903,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2912,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2917,
    "end": 2919
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 2920,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3004,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 3008,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "applySpec",
    "start": 3013,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3025,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3032,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 3039,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3048,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3053,
    "end": 3055
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3056,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3092,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3098,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3108,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 3119,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3128,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3140,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3143,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3151,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3173,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3193,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3336,
    "end": 3343
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3344,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3353,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3362,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3370,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3379,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3384,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3400,
    "end": 3407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3408,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3417,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3426,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3434,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3443,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3448,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3464,
    "end": 3471
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3472,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 3481,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3490,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3498,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3507,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 3512,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3521,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3538,
    "end": 3545
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3546,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 3555,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3564,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3572,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3583,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3594,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3599,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3615,
    "end": 3622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3623,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "f24",
    "start": 3632,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3644,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3652,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3662,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3671,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3676,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3701,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 3705,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3710,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3716,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3721,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3725,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3730,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3742,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3746,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3751,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3757,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3762,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3766,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3771,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3783,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3787,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 3792,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3798,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3805,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3812,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3818,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3825,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3832,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3846,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 3850,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 3855,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3861,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3866,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3868,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3870,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3875,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3887,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 3891,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "f24",
    "start": 3896,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3902,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3907,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3911,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3916,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3951,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "getProps",
    "start": 3960,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3974,
    "end": 3981
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3982,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3991,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3999,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4011,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4028,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4038,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4041,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4049,
    "end": 4054
  },
  {
    "type": "Identifier",
    "value": "myAny",
    "start": 4055,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4062,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4073,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4079,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "getProps",
    "start": 4084,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "myAny",
    "start": 4093,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4101,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4108,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4118,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4124,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4130,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4135,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4140,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4145,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Identifier",
    "value": "getProps",
    "start": 4153,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "myAny",
    "start": 4162,
    "end": 4167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4170,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4177,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4184,
    "end": 4185
  }
]
```
