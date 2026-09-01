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
        "name": "SS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 33,
        "end": 39
      },
      "declare": false,
      "start": 22,
      "end": 40
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "AAA",
                        "raw": "\"AAA\"",
                        "start": 52,
                        "end": 57
                      },
                      "start": 52,
                      "end": 57
                    },
                    "optional": false,
                    "start": 49,
                    "end": 57
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 66
                      },
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 71,
                            "end": 72
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SS1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 79
                            },
                            "typeArguments": null,
                            "start": 76,
                            "end": 79
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 83,
                                  "end": 84
                                },
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 86,
                                  "end": 92
                                },
                                "optional": false,
                                "start": 83,
                                "end": 92
                              }
                            ],
                            "start": 82,
                            "end": 93
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 68,
                          "end": 96
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SS1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 100
                          },
                          "typeArguments": null,
                          "start": 97,
                          "end": 100
                        },
                        "start": 68,
                        "end": 101
                      },
                      "optional": false,
                      "start": 62,
                      "end": 101
                    },
                    "start": 59,
                    "end": 101
                  }
                ],
                "start": 48,
                "end": 102
              },
              "start": 46,
              "end": 102
            },
            "start": 45,
            "end": 102
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "AAA",
                "raw": "\"AAA\"",
                "start": 106,
                "end": 111
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 113,
                "end": 114
              }
            ],
            "start": 105,
            "end": 115
          },
          "definite": false,
          "start": 45,
          "end": 115
        }
      ],
      "declare": false,
      "start": 41,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 129,
              "end": 132
            },
            "start": 129,
            "end": 132
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 135,
              "end": 138
            },
            "start": 135,
            "end": 138
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 141,
              "end": 144
            },
            "start": 141,
            "end": 144
          }
        ],
        "start": 129,
        "end": 144
      },
      "declare": false,
      "start": 118,
      "end": 145
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "AAA",
                        "raw": "\"AAA\"",
                        "start": 157,
                        "end": 162
                      },
                      "start": 157,
                      "end": 162
                    },
                    "optional": false,
                    "start": 154,
                    "end": 162
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 171
                      },
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 177
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SS2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 184
                            },
                            "typeArguments": null,
                            "start": 181,
                            "end": 184
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 189
                                },
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "optional": false,
                                "start": 188,
                                "end": 197
                              }
                            ],
                            "start": 187,
                            "end": 198
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 173,
                          "end": 201
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SS2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 205
                          },
                          "typeArguments": null,
                          "start": 202,
                          "end": 205
                        },
                        "start": 173,
                        "end": 206
                      },
                      "optional": false,
                      "start": 167,
                      "end": 206
                    },
                    "start": 164,
                    "end": 206
                  }
                ],
                "start": 153,
                "end": 207
              },
              "start": 151,
              "end": 207
            },
            "start": 150,
            "end": 207
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "AAA",
                "raw": "\"AAA\"",
                "start": 211,
                "end": 216
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 218,
                "end": 219
              }
            ],
            "start": 210,
            "end": 220
          },
          "definite": false,
          "start": 150,
          "end": 220
        }
      ],
      "declare": false,
      "start": 146,
      "end": 221
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 230
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SS",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 233
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 242,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 248
          }
        ],
        "start": 230,
        "end": 249
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSRestType",
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 280,
                                      "end": 284
                                    },
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 289,
                                          "end": 290
                                        },
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 294,
                                            "end": 296
                                          },
                                          "typeArguments": null,
                                          "start": 294,
                                          "end": 296
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "label": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 300,
                                                "end": 301
                                              },
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 303,
                                                "end": 309
                                              },
                                              "optional": false,
                                              "start": 300,
                                              "end": 309
                                            }
                                          ],
                                          "start": 299,
                                          "end": 310
                                        },
                                        "optional": false,
                                        "readonly": null,
                                        "start": 286,
                                        "end": 313
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 314,
                                          "end": 316
                                        },
                                        "typeArguments": null,
                                        "start": 314,
                                        "end": 316
                                      },
                                      "start": 286,
                                      "end": 317
                                    },
                                    "optional": false,
                                    "start": 280,
                                    "end": 317
                                  },
                                  "start": 277,
                                  "end": 317
                                }
                              ],
                              "start": 276,
                              "end": 318
                            },
                            "start": 274,
                            "end": 318
                          },
                          "start": 273,
                          "end": 318
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 322,
                              "end": 323
                            }
                          ],
                          "start": 321,
                          "end": 324
                        },
                        "definite": false,
                        "start": 273,
                        "end": 324
                      }
                    ],
                    "declare": false,
                    "start": 269,
                    "end": 325
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
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSNamedTupleMember",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 343,
                                    "end": 344
                                  },
                                  "elementType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "AAA",
                                      "raw": "\"AAA\"",
                                      "start": 346,
                                      "end": 351
                                    },
                                    "start": 346,
                                    "end": 351
                                  },
                                  "optional": false,
                                  "start": 343,
                                  "end": 351
                                },
                                {
                                  "type": "TSRestType",
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 356,
                                      "end": 360
                                    },
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 365,
                                          "end": 366
                                        },
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 370,
                                            "end": 372
                                          },
                                          "typeArguments": null,
                                          "start": 370,
                                          "end": 372
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "label": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 376,
                                                "end": 377
                                              },
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 379,
                                                "end": 385
                                              },
                                              "optional": false,
                                              "start": 376,
                                              "end": 385
                                            }
                                          ],
                                          "start": 375,
                                          "end": 386
                                        },
                                        "optional": false,
                                        "readonly": null,
                                        "start": 362,
                                        "end": 389
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 390,
                                          "end": 392
                                        },
                                        "typeArguments": null,
                                        "start": 390,
                                        "end": 392
                                      },
                                      "start": 362,
                                      "end": 393
                                    },
                                    "optional": false,
                                    "start": 356,
                                    "end": 393
                                  },
                                  "start": 353,
                                  "end": 393
                                }
                              ],
                              "start": 342,
                              "end": 394
                            },
                            "start": 340,
                            "end": 394
                          },
                          "start": 339,
                          "end": 394
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "AAA",
                              "raw": "\"AAA\"",
                              "start": 398,
                              "end": 403
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 405,
                              "end": 406
                            }
                          ],
                          "start": 397,
                          "end": 407
                        },
                        "definite": false,
                        "start": 339,
                        "end": 407
                      }
                    ],
                    "declare": false,
                    "start": 335,
                    "end": 408
                  }
                ],
                "start": 259,
                "end": 414
              },
              "expression": false,
              "start": 256,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 255,
            "end": 414
          }
        ],
        "start": 249,
        "end": 416
      },
      "abstract": false,
      "declare": false,
      "start": 223,
      "end": 416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "SS1",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "String",
    "value": "\"AAA\"",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 59,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "SS1",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "SS1",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"AAA\"",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "type",
    "start": 118,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "SS2",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"AAA\"",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "SS2",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "SS2",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"AAA\"",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "SS",
    "start": 231,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 234,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "SS",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "SS",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "String",
    "value": "\"AAA\"",
    "start": 346,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 353,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 367,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "SS",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 376,
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
    "value": "number",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "SS",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"AAA\"",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  }
]
```
