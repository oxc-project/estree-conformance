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
        "name": "DataSnapshot",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 44
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 49,
              "end": 51
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 51
          }
        ],
        "start": 44,
        "end": 52
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  "start": 67,
                  "end": 75
                },
                "start": 63,
                "end": 75
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataSnapshot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 90
                },
                "typeArguments": null,
                "start": 78,
                "end": 90
              },
              "start": 76,
              "end": 90
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 91
          }
        ],
        "start": 53,
        "end": 93
      },
      "declare": false,
      "start": 22,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Snapshot",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
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
              "name": "T",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "DataSnapshot",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 137
          },
          "typeArguments": null,
          "start": 125,
          "end": 137
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 149
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 165
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
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
                              "start": 172,
                              "end": 173
                            },
                            "typeArguments": null,
                            "start": 172,
                            "end": 173
                          },
                          "start": 166,
                          "end": 173
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 175,
                          "end": 181
                        }
                      ],
                      "start": 165,
                      "end": 182
                    },
                    "start": 158,
                    "end": 182
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 148,
                  "end": 182
                }
              ],
              "start": 147,
              "end": 183
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
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
                      "start": 190,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 191
                  },
                  "start": 188,
                  "end": 191
                },
                "start": 184,
                "end": 191
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Snapshot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 202
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
                          "start": 203,
                          "end": 204
                        },
                        "typeArguments": null,
                        "start": 203,
                        "end": 204
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        },
                        "typeArguments": null,
                        "start": 205,
                        "end": 206
                      },
                      "start": 203,
                      "end": 207
                    }
                  ],
                  "start": 202,
                  "end": 208
                },
                "start": 194,
                "end": 208
              },
              "start": 192,
              "end": 208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 142,
            "end": 209
          }
        ],
        "start": 138,
        "end": 211
      },
      "declare": false,
      "start": 95,
      "end": 211
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 245
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 251,
                  "end": 252
                },
                "start": 251,
                "end": 254
              },
              "start": 249,
              "end": 254
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 254
          }
        ],
        "start": 246,
        "end": 256
      },
      "declare": false,
      "start": 234,
      "end": 256
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 268
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
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
                  "start": 274,
                  "end": 275
                },
                "typeArguments": null,
                "start": 274,
                "end": 275
              },
              "start": 272,
              "end": 275
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 275
          }
        ],
        "start": 269,
        "end": 277
      },
      "declare": false,
      "start": 257,
      "end": 277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 289
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 296
                  },
                  "typeArguments": null,
                  "start": 295,
                  "end": 296
                },
                "start": 295,
                "end": 298
              },
              "start": 293,
              "end": 298
            },
            "accessibility": null,
            "static": false,
            "start": 292,
            "end": 298
          }
        ],
        "start": 290,
        "end": 300
      },
      "declare": false,
      "start": 278,
      "end": 300
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 319
                },
                "start": 318,
                "end": 321
              },
              "start": 316,
              "end": 321
            },
            "accessibility": null,
            "static": false,
            "start": 315,
            "end": 321
          }
        ],
        "start": 313,
        "end": 323
      },
      "declare": false,
      "start": 301,
      "end": 323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 335
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "typeArguments": null,
                  "start": 341,
                  "end": 342
                },
                "start": 341,
                "end": 344
              },
              "start": 339,
              "end": 344
            },
            "accessibility": null,
            "static": false,
            "start": 338,
            "end": 344
          }
        ],
        "start": 336,
        "end": 346
      },
      "declare": false,
      "start": 324,
      "end": 346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 358
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "typeArguments": null,
                "start": 364,
                "end": 365
              },
              "start": 362,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 361,
            "end": 365
          }
        ],
        "start": 359,
        "end": 367
      },
      "declare": false,
      "start": 347,
      "end": 367
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 379
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
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 386
                  },
                  "typeArguments": null,
                  "start": 385,
                  "end": 386
                },
                "start": 385,
                "end": 388
              },
              "start": 383,
              "end": 388
            },
            "accessibility": null,
            "static": false,
            "start": 382,
            "end": 388
          }
        ],
        "start": 380,
        "end": 390
      },
      "declare": false,
      "start": 368,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 402
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
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 408,
                "end": 414
              },
              "start": 406,
              "end": 414
            },
            "accessibility": null,
            "static": false,
            "start": 405,
            "end": 414
          }
        ],
        "start": 403,
        "end": 416
      },
      "declare": false,
      "start": 391,
      "end": 416
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
            "name": "x",
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
                  "start": 427,
                  "end": 428
                },
                "typeArguments": null,
                "start": 427,
                "end": 428
              },
              "start": 425,
              "end": 428
            },
            "start": 424,
            "end": 428
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 436
                },
                "value": {
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
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 453
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
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 465,
                                  "end": 466
                                },
                                "value": {
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
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 494,
                                            "end": 495
                                          },
                                          "value": {
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
                                                      "name": "f",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 531,
                                                      "end": 532
                                                    },
                                                    "value": {
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
                                                                "name": "g",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 576,
                                                                "end": 577
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
                                                                      "name": "h",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 603,
                                                                      "end": 604
                                                                    },
                                                                    "value": {
                                                                      "type": "ArrayExpression",
                                                                      "elements": [
                                                                        {
                                                                          "type": "ObjectExpression",
                                                                          "properties": [],
                                                                          "start": 632,
                                                                          "end": 695
                                                                        }
                                                                      ],
                                                                      "start": 606,
                                                                      "end": 720
                                                                    },
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "optional": false,
                                                                    "start": 603,
                                                                    "end": 720
                                                                  }
                                                                ],
                                                                "start": 579,
                                                                "end": 743
                                                              },
                                                              "method": false,
                                                              "shorthand": false,
                                                              "computed": false,
                                                              "optional": false,
                                                              "start": 576,
                                                              "end": 743
                                                            }
                                                          ],
                                                          "start": 554,
                                                          "end": 764
                                                        }
                                                      ],
                                                      "start": 534,
                                                      "end": 783
                                                    },
                                                    "method": false,
                                                    "shorthand": false,
                                                    "computed": false,
                                                    "optional": false,
                                                    "start": 531,
                                                    "end": 783
                                                  }
                                                ],
                                                "start": 513,
                                                "end": 800
                                              }
                                            ],
                                            "start": 497,
                                            "end": 815
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 494,
                                          "end": 815
                                        }
                                      ],
                                      "start": 480,
                                      "end": 828
                                    }
                                  ],
                                  "start": 468,
                                  "end": 839
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 465,
                                "end": 839
                              }
                            ],
                            "start": 455,
                            "end": 848
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 452,
                          "end": 848
                        }
                      ],
                      "start": 444,
                      "end": 855
                    }
                  ],
                  "start": 438,
                  "end": 860
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 435,
                "end": 860
              }
            ],
            "start": 431,
            "end": 863
          },
          "definite": false,
          "start": 424,
          "end": 863
        }
      ],
      "declare": false,
      "start": 418,
      "end": 864
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 897,
                          "end": 903
                        },
                        "start": 897,
                        "end": 905
                      },
                      "start": 897,
                      "end": 907
                    },
                    "start": 897,
                    "end": 909
                  },
                  "start": 897,
                  "end": 911
                },
                "start": 897,
                "end": 913
              },
              "start": 895,
              "end": 913
            },
            "start": 893,
            "end": 913
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 921,
                                "end": 923
                              }
                            ],
                            "start": 920,
                            "end": 924
                          }
                        ],
                        "start": 919,
                        "end": 925
                      }
                    ],
                    "start": 918,
                    "end": 926
                  }
                ],
                "start": 917,
                "end": 927
              }
            ],
            "start": 916,
            "end": 928
          },
          "definite": false,
          "start": 893,
          "end": 928
        }
      ],
      "declare": false,
      "start": 887,
      "end": 929
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSStringKeyword",
                                    "start": 940,
                                    "end": 946
                                  },
                                  "start": 940,
                                  "end": 948
                                },
                                "start": 940,
                                "end": 950
                              },
                              "start": 940,
                              "end": 952
                            },
                            "start": 940,
                            "end": 954
                          },
                          "start": 940,
                          "end": 956
                        },
                        "start": 940,
                        "end": 958
                      },
                      "start": 940,
                      "end": 960
                    },
                    "start": 940,
                    "end": 962
                  },
                  "start": 940,
                  "end": 964
                },
                "start": 940,
                "end": 966
              },
              "start": 938,
              "end": 966
            },
            "start": 936,
            "end": 966
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "Literal",
                                                    "value": 42,
                                                    "raw": "42",
                                                    "start": 979,
                                                    "end": 981
                                                  }
                                                ],
                                                "start": 978,
                                                "end": 982
                                              }
                                            ],
                                            "start": 977,
                                            "end": 983
                                          }
                                        ],
                                        "start": 976,
                                        "end": 984
                                      }
                                    ],
                                    "start": 975,
                                    "end": 985
                                  }
                                ],
                                "start": 974,
                                "end": 986
                              }
                            ],
                            "start": 973,
                            "end": 987
                          }
                        ],
                        "start": 972,
                        "end": 988
                      }
                    ],
                    "start": 971,
                    "end": 989
                  }
                ],
                "start": 970,
                "end": 990
              }
            ],
            "start": 969,
            "end": 991
          },
          "definite": false,
          "start": 936,
          "end": 991
        }
      ],
      "declare": false,
      "start": 930,
      "end": 992
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 992
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "DataSnapshot",
    "start": 32,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": ">",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
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
    "value": "DataSnapshot",
    "start": 78,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Snapshot",
    "start": 105,
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
    "value": "T",
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
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "DataSnapshot",
    "start": 125,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 150,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Snapshot",
    "start": 194,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 234,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Identifier",
    "value": "b",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "interface",
    "start": 257,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "C",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 278,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 301,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 324,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "F",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 347,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "G",
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
    "value": "interface",
    "start": 368,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 391,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Identifier",
    "value": "string",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 887,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 893,
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
    "value": "string",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 921,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 930,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 940,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 978,
    "end": 979
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 979,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992
  }
]
```
