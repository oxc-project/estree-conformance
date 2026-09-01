__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 26
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
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            }
          ],
          "start": 26,
          "end": 29
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 42
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 53
              },
              "typeArguments": null,
              "start": 52,
              "end": 53
            },
            "start": 46,
            "end": 53
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 57
              },
              "typeArguments": null,
              "start": 56,
              "end": 57
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 61
              },
              "typeArguments": null,
              "start": 58,
              "end": 61
            },
            "start": 56,
            "end": 62
          },
          "optional": false,
          "readonly": null,
          "start": 32,
          "end": 65
        },
        "declare": false,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 65
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InstanceInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 89
      },
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
              "start": 90,
              "end": 91
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 91
          }
        ],
        "start": 89,
        "end": 92
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                  "start": 108,
                  "end": 112
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 114,
                      "end": 117
                    },
                    "start": 114,
                    "end": 119
                  },
                  "start": 112,
                  "end": 119
                },
                "value": null,
                "start": 105,
                "end": 119
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "typeArguments": null,
                "start": 122,
                "end": 123
              },
              "start": 120,
              "end": 123
            },
            "start": 101,
            "end": 123
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "typeArguments": null,
                "start": 139,
                "end": 140
              },
              "start": 137,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 128,
            "end": 140
          }
        ],
        "start": 95,
        "end": 142
      },
      "declare": false,
      "start": 67,
      "end": 142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 160
      },
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
              "start": 161,
              "end": 162
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 177
              },
              "typeArguments": null,
              "start": 171,
              "end": 177
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 161,
            "end": 177
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 183,
              "end": 186
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 179,
            "end": 186
          }
        ],
        "start": 160,
        "end": 187
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 204
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
                    "start": 205,
                    "end": 206
                  },
                  "typeArguments": null,
                  "start": 205,
                  "end": 206
                }
              ],
              "start": 204,
              "end": 207
            },
            "start": 190,
            "end": 207
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InstanceInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 227
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "typeArguments": null,
                  "start": 228,
                  "end": 229
                }
              ],
              "start": 227,
              "end": 230
            },
            "start": 210,
            "end": 230
          }
        ],
        "start": 190,
        "end": 230
      },
      "declare": false,
      "start": 144,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cloneClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 251
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
              "start": 252,
              "end": 253
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 273
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 274,
                    "end": 276
                  }
                ],
                "start": 273,
                "end": 277
              },
              "start": 262,
              "end": 277
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 252,
            "end": 277
          }
        ],
        "start": 251,
        "end": 278
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "OriginalClass",
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
          "start": 279,
          "end": 295
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
            "start": 298,
            "end": 299
          },
          "typeArguments": null,
          "start": 298,
          "end": 299
        },
        "start": 296,
        "end": 299
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnotherOriginalClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 332
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "OriginalClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 354
            },
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 376
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                          "start": 380,
                          "end": 384
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 386,
                              "end": 389
                            },
                            "start": 386,
                            "end": 391
                          },
                          "start": 384,
                          "end": 391
                        },
                        "value": null,
                        "start": 377,
                        "end": 391
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 407,
                              "end": 412
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 416,
                                  "end": 420
                                },
                                "start": 413,
                                "end": 420
                              }
                            ],
                            "optional": false,
                            "start": 407,
                            "end": 421
                          },
                          "directive": null,
                          "start": 407,
                          "end": 421
                        }
                      ],
                      "start": 393,
                      "end": 431
                    },
                    "expression": false,
                    "start": 376,
                    "end": 431
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 365,
                  "end": 431
                }
              ],
              "start": 355,
              "end": 437
            },
            "abstract": false,
            "declare": false,
            "start": 306,
            "end": 437
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnotherOriginalClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 469
            },
            "start": 442,
            "end": 469
          }
        ],
        "start": 300,
        "end": 471
      },
      "expression": false,
      "start": 232,
      "end": 471
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 471
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "ClassInterface",
    "start": 12,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 39,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "InstanceInterface",
    "start": 72,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 128,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 144,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 149,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 163,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "ClassInterface",
    "start": 190,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "InstanceInterface",
    "start": 210,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "cloneClass",
    "start": 241,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 254,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 262,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "OriginalClass",
    "start": 279,
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
    "value": "T",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "AnotherOriginalClass",
    "start": 312,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 333,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "OriginalClass",
    "start": 341,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 365,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 442,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "AnotherOriginalClass",
    "start": 449,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  }
]
```
