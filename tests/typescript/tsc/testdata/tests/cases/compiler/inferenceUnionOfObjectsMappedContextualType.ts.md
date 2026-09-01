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
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
                  "name": "someDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 28
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
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 30,
                          "end": 34
                        },
                        "typeArguments": null,
                        "start": 30,
                        "end": 34
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 37,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 41
                  },
                  "start": 28,
                  "end": 41
                },
                "accessibility": null,
                "static": false,
                "start": 20,
                "end": 42
              }
            ],
            "start": 14,
            "end": 44
          },
          {
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 61
                  }
                ],
                "start": 48,
                "end": 63
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 70
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      },
                      "start": 70,
                      "end": 78
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 79
                  }
                ],
                "start": 66,
                "end": 81
              }
            ],
            "start": 48,
            "end": 81
          }
        ],
        "start": 14,
        "end": 82
      },
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RowRendererMeta",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 104
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 120,
              "end": 122
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 105,
            "end": 122
          }
        ],
        "start": 104,
        "end": 123
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 136
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 152
            },
            "typeArguments": null,
            "start": 146,
            "end": 152
          },
          "start": 140,
          "end": 152
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
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 160
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 165
                },
                "start": 160,
                "end": 165
              },
              "accessibility": null,
              "static": false,
              "start": 157,
              "end": 166
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "caption",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 174
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                },
                "start": 174,
                "end": 182
              },
              "accessibility": null,
              "static": false,
              "start": 167,
              "end": 183
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatter",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 193
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
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TInput",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 204,
                              "end": 210
                            },
                            "typeArguments": null,
                            "start": 204,
                            "end": 210
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 211,
                              "end": 214
                            },
                            "typeArguments": null,
                            "start": 211,
                            "end": 214
                          },
                          "start": 204,
                          "end": 215
                        },
                        "start": 202,
                        "end": 215
                      },
                      "start": 197,
                      "end": 215
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 220,
                      "end": 226
                    },
                    "start": 217,
                    "end": 226
                  },
                  "start": 196,
                  "end": 226
                },
                "start": 194,
                "end": 226
              },
              "accessibility": null,
              "static": false,
              "start": 184,
              "end": 227
            }
          ],
          "start": 155,
          "end": 229
        },
        "optional": false,
        "readonly": null,
        "start": 126,
        "end": 232
      },
      "declare": false,
      "start": 84,
      "end": 232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RowRenderer",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 250
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 257
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 266,
              "end": 268
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 251,
            "end": 268
          }
        ],
        "start": 250,
        "end": 269
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RowRendererMeta",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 287
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 294
                },
                "typeArguments": null,
                "start": 288,
                "end": 294
              }
            ],
            "start": 287,
            "end": 295
          },
          "start": 272,
          "end": 295
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RowRendererMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 317
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TInput",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 324
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 324
                }
              ],
              "start": 317,
              "end": 325
            },
            "start": 302,
            "end": 325
          },
          "start": 296,
          "end": 325
        },
        "start": 272,
        "end": 326
      },
      "declare": false,
      "start": 234,
      "end": 327
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RowRenderer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 352
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Entity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 353,
                        "end": 359
                      },
                      "typeArguments": null,
                      "start": 353,
                      "end": 359
                    }
                  ],
                  "start": 352,
                  "end": 360
                },
                "start": 341,
                "end": 360
              },
              "start": 339,
              "end": 360
            },
            "start": 335,
            "end": 360
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 372
                },
                "value": {
                  "type": "Literal",
                  "value": "someDate",
                  "raw": "'someDate'",
                  "start": 374,
                  "end": 384
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 369,
                "end": 384
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caption",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 397
                },
                "value": {
                  "type": "Literal",
                  "value": "My Date",
                  "raw": "'My Date'",
                  "start": 399,
                  "end": 408
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 390,
                "end": 408
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "formatter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 423
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 431
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 441
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 449
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 458
                        },
                        "optional": false,
                        "computed": false,
                        "start": 444,
                        "end": 458
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 444,
                      "end": 460
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "-",
                      "raw": "'-'",
                      "start": 463,
                      "end": 466
                    },
                    "start": 436,
                    "end": 466
                  },
                  "id": null,
                  "generator": false,
                  "start": 425,
                  "end": 466
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 414,
                "end": 466
              }
            ],
            "start": 363,
            "end": 482
          },
          "definite": false,
          "start": 335,
          "end": 482
        }
      ],
      "declare": false,
      "start": 329,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 482
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
    "value": "Entity",
    "start": 5,
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
    "value": "someDate",
    "start": 20,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 35,
    "end": 36
  },
  {
    "type": "Null",
    "value": "null",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 84,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "RowRendererMeta",
    "start": 89,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "TInput",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 133,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "TInput",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "caption",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "formatter",
    "start": 184,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "TInput",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
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
    "value": "=>",
    "start": 217,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "RowRenderer",
    "start": 239,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "TInput",
    "start": 251,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "RowRendererMeta",
    "start": 272,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "TInput",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "RowRendererMeta",
    "start": 302,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "TInput",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 335,
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
    "value": "RowRenderer",
    "start": 341,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "'someDate'",
    "start": 374,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "caption",
    "start": 390,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "'My Date'",
    "start": 399,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "formatter",
    "start": 414,
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
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 433,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 450,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "String",
    "value": "'-'",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  }
]
```
