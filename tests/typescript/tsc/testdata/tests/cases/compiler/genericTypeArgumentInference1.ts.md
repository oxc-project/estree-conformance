__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Underscore",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 52
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
                      "start": 53,
                      "end": 54
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 53,
                    "end": 54
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 52,
                "end": 58
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "start": 77,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 77,
                            "end": 78
                          },
                          "start": 75,
                          "end": 78
                        },
                        "start": 70,
                        "end": 78
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          },
                          "start": 85,
                          "end": 90
                        },
                        "start": 80,
                        "end": 90
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 98,
                            "end": 101
                          },
                          "start": 96,
                          "end": 101
                        },
                        "start": 92,
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
                          "name": "U",
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
                    "start": 69,
                    "end": 106
                  }
                ],
                "start": 59,
                "end": 112
              },
              "declare": false,
              "start": 34,
              "end": 112
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 112
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 140
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 154
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 156
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 155,
                          "end": 156
                        }
                      ],
                      "start": 154,
                      "end": 157
                    },
                    "params": [
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 164,
                                "end": 165
                              },
                              "typeArguments": null,
                              "start": 164,
                              "end": 165
                            },
                            "start": 164,
                            "end": 167
                          },
                          "start": 162,
                          "end": 167
                        },
                        "start": 158,
                        "end": 167
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 188
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
                                    "start": 189,
                                    "end": 190
                                  },
                                  "typeArguments": null,
                                  "start": 189,
                                  "end": 190
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 192,
                                  "end": 199
                                }
                              ],
                              "start": 188,
                              "end": 200
                            },
                            "start": 180,
                            "end": 200
                          },
                          "start": 178,
                          "end": 200
                        },
                        "start": 169,
                        "end": 200
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 212,
                            "end": 215
                          },
                          "start": 210,
                          "end": 215
                        },
                        "start": 202,
                        "end": 215
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
                          "start": 218,
                          "end": 219
                        },
                        "typeArguments": null,
                        "start": 218,
                        "end": 219
                      },
                      "start": 216,
                      "end": 219
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 151,
                    "end": 220
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 237
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 239
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 238,
                          "end": 239
                        }
                      ],
                      "start": 237,
                      "end": 240
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 248,
                              "end": 249
                            },
                            "typeArguments": null,
                            "start": 248,
                            "end": 249
                          },
                          "start": 246,
                          "end": 249
                        },
                        "start": 241,
                        "end": 249
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
                          "start": 252,
                          "end": 253
                        },
                        "typeArguments": null,
                        "start": 252,
                        "end": 253
                      },
                      "start": 250,
                      "end": 253
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 229,
                    "end": 254
                  }
                ],
                "start": 141,
                "end": 260
              },
              "declare": false,
              "start": 124,
              "end": 260
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 117,
            "end": 260
          }
        ],
        "start": 21,
        "end": 262
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 262
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
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Underscore",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 288
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 295
                  },
                  "start": 278,
                  "end": 295
                },
                "typeArguments": null,
                "start": 278,
                "end": 295
              },
              "start": 276,
              "end": 295
            },
            "start": 275,
            "end": 295
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 295
        }
      ],
      "declare": true,
      "start": 263,
      "end": 296
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 311
              },
              "optional": false,
              "computed": false,
              "start": 306,
              "end": 311
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 313,
                    "end": 317
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 319,
                    "end": 320
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 322,
                    "end": 326
                  },
                  {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "'yes'",
                    "start": 328,
                    "end": 333
                  }
                ],
                "start": 312,
                "end": 334
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 346
                },
                "optional": false,
                "computed": false,
                "start": 336,
                "end": 346
              }
            ],
            "optional": false,
            "start": 306,
            "end": 347
          },
          "definite": false,
          "start": 302,
          "end": 347
        }
      ],
      "declare": false,
      "start": 298,
      "end": 348
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 355
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 363
              },
              "optional": false,
              "computed": false,
              "start": 358,
              "end": 363
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 365,
                    "end": 369
                  }
                ],
                "start": 364,
                "end": 370
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 382
                },
                "optional": false,
                "computed": false,
                "start": 372,
                "end": 382
              }
            ],
            "optional": false,
            "start": 358,
            "end": 383
          },
          "definite": false,
          "start": 353,
          "end": 383
        }
      ],
      "declare": false,
      "start": 349,
      "end": 384
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 391
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 399
              },
              "optional": false,
              "computed": false,
              "start": 394,
              "end": 399
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 400,
                "end": 402
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 405
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 414
                },
                "optional": false,
                "computed": false,
                "start": 404,
                "end": 414
              }
            ],
            "optional": false,
            "start": 394,
            "end": 415
          },
          "definite": false,
          "start": 389,
          "end": 415
        }
      ],
      "declare": false,
      "start": 385,
      "end": 416
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 423
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 431
              },
              "optional": false,
              "computed": false,
              "start": 426,
              "end": 431
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 434,
                      "end": 437
                    },
                    "expression": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 438,
                      "end": 442
                    },
                    "start": 433,
                    "end": 442
                  }
                ],
                "start": 432,
                "end": 443
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 446
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 455
                },
                "optional": false,
                "computed": false,
                "start": 445,
                "end": 455
              }
            ],
            "optional": false,
            "start": 426,
            "end": 456
          },
          "definite": false,
          "start": 421,
          "end": 456
        }
      ],
      "declare": false,
      "start": 417,
      "end": 457
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 457
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Underscore",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 44,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
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
    "value": "U",
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
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 92,
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
    "value": "any",
    "start": 98,
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
    "value": "U",
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
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 124,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 229,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 241,
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
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Underscore",
    "start": 278,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Null",
    "value": "null",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 338,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 374,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 406,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 442,
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
    "value": "_",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 447,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  }
]
```
