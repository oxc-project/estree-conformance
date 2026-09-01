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
        "name": "Client",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 35,
        "end": 41
      },
      "declare": false,
      "start": 21,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UpdatedClient",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 82
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          }
        ],
        "start": 82,
        "end": 85
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "typeArguments": null,
            "start": 88,
            "end": 89
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  },
                  "start": 96,
                  "end": 104
                },
                "accessibility": null,
                "static": false,
                "start": 93,
                "end": 104
              }
            ],
            "start": 92,
            "end": 105
          }
        ],
        "start": 88,
        "end": 105
      },
      "declare": false,
      "start": 64,
      "end": 105
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
              "name": "createClient",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 132
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    },
                    "constraint": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                "start": 164,
                                "end": 168
                              },
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSAnyKeyword",
                                    "start": 170,
                                    "end": 173
                                  },
                                  "start": 170,
                                  "end": 175
                                },
                                "start": 168,
                                "end": 175
                              },
                              "value": null,
                              "start": 161,
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
                                "name": "Client",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 180,
                                "end": 186
                              },
                              "typeArguments": null,
                              "start": 180,
                              "end": 186
                            },
                            "start": 177,
                            "end": 186
                          },
                          "start": 156,
                          "end": 186
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Record",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 216
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 217,
                                "end": 223
                              },
                              {
                                "type": "TSConstructorType",
                                "abstract": false,
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
                                      "start": 233,
                                      "end": 237
                                    },
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSArrayType",
                                        "elementType": {
                                          "type": "TSAnyKeyword",
                                          "start": 239,
                                          "end": 242
                                        },
                                        "start": 239,
                                        "end": 244
                                      },
                                      "start": 237,
                                      "end": 244
                                    },
                                    "value": null,
                                    "start": 230,
                                    "end": 244
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Client",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 249,
                                      "end": 255
                                    },
                                    "typeArguments": null,
                                    "start": 249,
                                    "end": 255
                                  },
                                  "start": 246,
                                  "end": 255
                                },
                                "start": 225,
                                "end": 255
                              }
                            ],
                            "start": 216,
                            "end": 256
                          },
                          "start": 210,
                          "end": 256
                        }
                      ],
                      "start": 153,
                      "end": 256
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 139,
                    "end": 256
                  }
                ],
                "start": 135,
                "end": 279
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clientDef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 295
                      },
                      "typeArguments": null,
                      "start": 294,
                      "end": 295
                    },
                    "start": 292,
                    "end": 295
                  },
                  "start": 283,
                  "end": 295
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 300
                  },
                  "extendsType": {
                    "type": "TSConstructorType",
                    "abstract": false,
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
                          "start": 317,
                          "end": 321
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 323,
                              "end": 326
                            },
                            "start": 323,
                            "end": 328
                          },
                          "start": 321,
                          "end": 328
                        },
                        "value": null,
                        "start": 314,
                        "end": 328
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 340
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 339,
                          "end": 340
                        },
                        "start": 333,
                        "end": 340
                      },
                      "start": 330,
                      "end": 340
                    },
                    "start": 309,
                    "end": 340
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UpdatedClient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 358
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 360
                          },
                          "typeArguments": null,
                          "start": 359,
                          "end": 360
                        }
                      ],
                      "start": 358,
                      "end": 361
                    },
                    "start": 345,
                    "end": 361
                  },
                  "falseType": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 395
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 406
                        },
                        "typeArguments": null,
                        "start": 405,
                        "end": 406
                      },
                      "start": 399,
                      "end": 406
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 410
                          },
                          "typeArguments": null,
                          "start": 409,
                          "end": 410
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 411,
                            "end": 412
                          },
                          "typeArguments": null,
                          "start": 411,
                          "end": 412
                        },
                        "start": 409,
                        "end": 413
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                              "start": 430,
                              "end": 434
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 436,
                                  "end": 439
                                },
                                "start": 436,
                                "end": 441
                              },
                              "start": 434,
                              "end": 441
                            },
                            "value": null,
                            "start": 427,
                            "end": 441
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 452,
                                "end": 453
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 452,
                              "end": 453
                            },
                            "start": 446,
                            "end": 453
                          },
                          "start": 443,
                          "end": 453
                        },
                        "start": 422,
                        "end": 453
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UpdatedClient",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 513
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 514,
                                "end": 515
                              },
                              "typeArguments": null,
                              "start": 514,
                              "end": 515
                            }
                          ],
                          "start": 513,
                          "end": 516
                        },
                        "start": 500,
                        "end": 516
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 527,
                        "end": 532
                      },
                      "start": 409,
                      "end": 532
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 385,
                    "end": 538
                  },
                  "start": 299,
                  "end": 538
                },
                "start": 297,
                "end": 538
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 553,
                        "end": 557
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 561,
                        "end": 564
                      },
                      "start": 553,
                      "end": 564
                    },
                    "start": 546,
                    "end": 564
                  }
                ],
                "start": 542,
                "end": 566
              },
              "id": null,
              "generator": false,
              "start": 135,
              "end": 566
            },
            "definite": false,
            "start": 120,
            "end": 566
          }
        ],
        "declare": false,
        "start": 114,
        "end": 566
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 566
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 566
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Client",
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
    "type": "Identifier",
    "value": "type",
    "start": 64,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "UpdatedClient",
    "start": 69,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "foo",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "createClient",
    "start": 120,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 180,
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
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 246,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "clientDef",
    "start": 283,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 301,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 330,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 333,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "UpdatedClient",
    "start": 345,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 396,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 430,
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
    "value": "any",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 443,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 446,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "UpdatedClient",
    "start": 500,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 546,
    "end": 552
  },
  {
    "type": "Null",
    "value": "null",
    "start": 553,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 558,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  }
]
```
