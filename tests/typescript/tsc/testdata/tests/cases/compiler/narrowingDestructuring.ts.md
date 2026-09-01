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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 11,
                  "end": 15
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 17,
                      "end": 20
                    },
                    "start": 17,
                    "end": 20
                  },
                  "start": 15,
                  "end": 20
                },
                "accessibility": null,
                "static": false,
                "start": 11,
                "end": 21
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 23
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "accessibility": null,
                "static": false,
                "start": 22,
                "end": 31
              }
            ],
            "start": 9,
            "end": 33
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 42
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 44,
                      "end": 47
                    },
                    "start": 44,
                    "end": 47
                  },
                  "start": 42,
                  "end": 47
                },
                "accessibility": null,
                "static": false,
                "start": 38,
                "end": 48
              },
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
                  "start": 49,
                  "end": 50
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
                  },
                  "start": 50,
                  "end": 58
                },
                "accessibility": null,
                "static": false,
                "start": 49,
                "end": 58
              }
            ],
            "start": 36,
            "end": 60
          }
        ],
        "start": 9,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "typeArguments": null,
              "start": 86,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 87
          }
        ],
        "start": 75,
        "end": 88
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
                "start": 96,
                "end": 97
              },
              "typeArguments": null,
              "start": 96,
              "end": 97
            },
            "start": 94,
            "end": 97
          },
          "start": 89,
          "end": 97
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 109,
                "end": 119
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 124,
                "end": 127
              },
              "start": 109,
              "end": 127
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 139,
                    "end": 146
                  },
                  "directive": null,
                  "start": 139,
                  "end": 147
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 164,
                              "end": 165
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 165
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 164,
                            "end": 165
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 167
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 175
                      },
                      "definite": false,
                      "start": 162,
                      "end": 175
                    }
                  ],
                  "declare": false,
                  "start": 156,
                  "end": 176
                }
              ],
              "start": 129,
              "end": 182
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "optional": false,
                    "computed": false,
                    "start": 198,
                    "end": 205
                  },
                  "directive": null,
                  "start": 198,
                  "end": 206
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 223,
                              "end": 224
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 223,
                              "end": 224
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 223,
                            "end": 224
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 226
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 234
                      },
                      "definite": false,
                      "start": 221,
                      "end": 234
                    }
                  ],
                  "declare": false,
                  "start": 215,
                  "end": 235
                }
              ],
              "start": 188,
              "end": 241
            },
            "start": 105,
            "end": 241
          }
        ],
        "start": 99,
        "end": 243
      },
      "expression": false,
      "start": 62,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
      },
      "typeParameters": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 260
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "f",
                      "raw": "\"f\"",
                      "start": 262,
                      "end": 265
                    },
                    "start": 262,
                    "end": 265
                  },
                  "start": 260,
                  "end": 265
                },
                "accessibility": null,
                "static": false,
                "start": 256,
                "end": 266
              },
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
                  "start": 267,
                  "end": 268
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 273
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 275,
                            "end": 281
                          },
                          "start": 273,
                          "end": 281
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 272,
                        "end": 282
                      },
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
                          "start": 283,
                          "end": 284
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 286,
                            "end": 292
                          },
                          "start": 284,
                          "end": 292
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 283,
                        "end": 293
                      },
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
                          "start": 294,
                          "end": 295
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 297,
                            "end": 303
                          },
                          "start": 295,
                          "end": 303
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 294,
                        "end": 303
                      }
                    ],
                    "start": 270,
                    "end": 305
                  },
                  "start": 268,
                  "end": 305
                },
                "accessibility": null,
                "static": false,
                "start": 267,
                "end": 305
              }
            ],
            "start": 254,
            "end": 307
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "g",
                      "raw": "\"g\"",
                      "start": 322,
                      "end": 325
                    },
                    "start": 322,
                    "end": 325
                  },
                  "start": 320,
                  "end": 325
                },
                "accessibility": null,
                "static": false,
                "start": 316,
                "end": 326
              },
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
                  "start": 327,
                  "end": 328
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 333
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 335,
                            "end": 341
                          },
                          "start": 333,
                          "end": 341
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 332,
                        "end": 342
                      },
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
                          "start": 343,
                          "end": 344
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 346,
                            "end": 352
                          },
                          "start": 344,
                          "end": 352
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 343,
                        "end": 353
                      },
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
                          "start": 354,
                          "end": 355
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 357,
                            "end": 363
                          },
                          "start": 355,
                          "end": 363
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 354,
                        "end": 363
                      }
                    ],
                    "start": 330,
                    "end": 365
                  },
                  "start": 328,
                  "end": 365
                },
                "accessibility": null,
                "static": false,
                "start": 327,
                "end": 365
              }
            ],
            "start": 314,
            "end": 366
          }
        ],
        "start": 254,
        "end": 366
      },
      "declare": false,
      "start": 245,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 383
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
              "start": 384,
              "end": 385
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "typeArguments": null,
              "start": 394,
              "end": 395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 395
          }
        ],
        "start": 383,
        "end": 396
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
                "start": 404,
                "end": 405
              },
              "typeArguments": null,
              "start": 404,
              "end": 405
            },
            "start": 402,
            "end": 405
          },
          "start": 397,
          "end": 405
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 422
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 427
                },
                "optional": false,
                "computed": false,
                "start": 417,
                "end": 427
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "f",
                "raw": "\"f\"",
                "start": 432,
                "end": 435
              },
              "start": 417,
              "end": 435
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
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 455,
                              "end": 456
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 458,
                              "end": 460
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 455,
                            "end": 460
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 462
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 470
                      },
                      "definite": false,
                      "start": 453,
                      "end": 470
                    }
                  ],
                  "declare": false,
                  "start": 447,
                  "end": 471
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 488,
                              "end": 489
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
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
                                    "start": 493,
                                    "end": 494
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 493,
                                    "end": 494
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 493,
                                  "end": 494
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "spread",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 499,
                                    "end": 505
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 496,
                                  "end": 505
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 491,
                              "end": 507
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 488,
                            "end": 507
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 509
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 517
                      },
                      "definite": false,
                      "start": 486,
                      "end": 517
                    }
                  ],
                  "declare": false,
                  "start": 480,
                  "end": 518
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 532
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 534
                    },
                    "optional": false,
                    "computed": false,
                    "start": 527,
                    "end": 534
                  },
                  "directive": null,
                  "start": 527,
                  "end": 535
                }
              ],
              "start": 437,
              "end": 541
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 565,
                              "end": 566
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
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
                                    "start": 570,
                                    "end": 571
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 570,
                                    "end": 571
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 570,
                                  "end": 571
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "spread",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 576,
                                    "end": 582
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 573,
                                  "end": 582
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 584
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 565,
                            "end": 584
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 586
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 594
                      },
                      "definite": false,
                      "start": 563,
                      "end": 594
                    }
                  ],
                  "declare": false,
                  "start": 557,
                  "end": 595
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 611
                    },
                    "optional": false,
                    "computed": false,
                    "start": 604,
                    "end": 611
                  },
                  "directive": null,
                  "start": 604,
                  "end": 612
                }
              ],
              "start": 547,
              "end": 618
            },
            "start": 413,
            "end": 618
          }
        ],
        "start": 407,
        "end": 620
      },
      "expression": false,
      "start": 369,
      "end": 620
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 636
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
              "start": 637,
              "end": 638
            },
            "constraint": {
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 653
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 655,
                            "end": 658
                          },
                          "start": 655,
                          "end": 658
                        },
                        "start": 653,
                        "end": 658
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 649,
                      "end": 659
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 660,
                        "end": 661
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 663,
                          "end": 669
                        },
                        "start": 661,
                        "end": 669
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 660,
                      "end": 669
                    }
                  ],
                  "start": 647,
                  "end": 671
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 680
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 682,
                            "end": 685
                          },
                          "start": 682,
                          "end": 685
                        },
                        "start": 680,
                        "end": 685
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 676,
                      "end": 686
                    },
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
                        "start": 687,
                        "end": 688
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 690,
                          "end": 696
                        },
                        "start": 688,
                        "end": 696
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 687,
                      "end": 696
                    }
                  ],
                  "start": 674,
                  "end": 698
                }
              ],
              "start": 647,
              "end": 698
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 637,
            "end": 698
          }
        ],
        "start": 636,
        "end": 699
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 703,
                "end": 704
              },
              "typeArguments": null,
              "start": 703,
              "end": 704
            },
            "start": 701,
            "end": 704
          },
          "start": 700,
          "end": 704
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 722
                },
                "optional": false,
                "computed": false,
                "start": 716,
                "end": 722
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 727,
                "end": 730
              },
              "start": 716,
              "end": 730
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
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 750,
                              "end": 754
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 750,
                              "end": 754
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 750,
                            "end": 754
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "r1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 759,
                              "end": 761
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 756,
                            "end": 761
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 763
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 766,
                        "end": 767
                      },
                      "definite": false,
                      "start": 748,
                      "end": 767
                    }
                  ],
                  "declare": false,
                  "start": 742,
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
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 785
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
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
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 792,
                                    "end": 796
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 792,
                                    "end": 796
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 792,
                                  "end": 796
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 801,
                                    "end": 805
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 798,
                                  "end": 805
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 790,
                              "end": 807
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 812,
                            "end": 816
                          },
                          "id": null,
                          "generator": false,
                          "start": 789,
                          "end": 816
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 818,
                            "end": 819
                          }
                        ],
                        "optional": false,
                        "start": 788,
                        "end": 820
                      },
                      "definite": false,
                      "start": 783,
                      "end": 820
                    }
                  ],
                  "declare": false,
                  "start": 777,
                  "end": 821
                }
              ],
              "start": 732,
              "end": 827
            },
            "alternate": null,
            "start": 712,
            "end": 827
          }
        ],
        "start": 706,
        "end": 829
      },
      "expression": false,
      "start": 622,
      "end": 829
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "farr",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 844
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
              "start": 845,
              "end": 846
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 856,
                      "end": 862
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 864,
                      "end": 870
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    }
                  ],
                  "start": 855,
                  "end": 879
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 883,
                      "end": 889
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 891,
                      "end": 897
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    }
                  ],
                  "start": 882,
                  "end": 906
                }
              ],
              "start": 855,
              "end": 906
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 845,
            "end": 906
          }
        ],
        "start": 844,
        "end": 907
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
                "start": 911,
                "end": 912
              },
              "typeArguments": null,
              "start": 911,
              "end": 912
            },
            "start": 909,
            "end": 912
          },
          "start": 908,
          "end": 912
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "head",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 927,
                      "end": 931
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tail",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 940
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 933,
                      "end": 940
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 941
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 945
                },
                "definite": false,
                "start": 926,
                "end": 945
              }
            ],
            "declare": false,
            "start": 920,
            "end": 946
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 962,
                    "end": 963
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 964,
                    "end": 965
                  },
                  "optional": false,
                  "computed": true,
                  "start": 962,
                  "end": 966
                },
                "prefix": true,
                "start": 955,
                "end": 966
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 971,
                "end": 979
              },
              "start": 955,
              "end": 979
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
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "head",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 998,
                            "end": 1002
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tail",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1007,
                              "end": 1011
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 1004,
                            "end": 1011
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 1012
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1015,
                        "end": 1016
                      },
                      "definite": false,
                      "start": 997,
                      "end": 1016
                    }
                  ],
                  "declare": false,
                  "start": 991,
                  "end": 1017
                }
              ],
              "start": 981,
              "end": 1023
            },
            "alternate": null,
            "start": 951,
            "end": 1023
          }
        ],
        "start": 914,
        "end": 1025
      },
      "expression": false,
      "start": 831,
      "end": 1025
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1025
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
    "value": "X",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 11,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 78,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 120,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 245,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "kind",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "func2",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 386,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 413,
    "end": 415
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
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 428,
    "end": 431
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 455,
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
    "value": "f1",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 512,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 604,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 622,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 639,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 655,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 723,
    "end": 726
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 742,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 756,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 777,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 798,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 801,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 809,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 831,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "farr",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 847,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 856,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 864,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 883,
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
    "value": "number",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 920,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 927,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 933,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 955,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 963,
    "end": 964
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "===",
    "start": 967,
    "end": 970
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 971,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 991,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  }
]
```
