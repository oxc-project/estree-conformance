__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 76,
              "end": 82
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 82
          }
        ],
        "start": 71,
        "end": 83
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
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 96
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 97,
                    "end": 98
                  }
                ],
                "start": 96,
                "end": 99
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapFn",
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
                          "name": "state",
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
                                "start": 115,
                                "end": 116
                              },
                              "typeArguments": null,
                              "start": 115,
                              "end": 116
                            },
                            "start": 113,
                            "end": 116
                          },
                          "start": 108,
                          "end": 116
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
                            "start": 121,
                            "end": 122
                          },
                          "typeArguments": null,
                          "start": 121,
                          "end": 122
                        },
                        "start": 118,
                        "end": 122
                      },
                      "start": 107,
                      "end": 122
                    },
                    "start": 105,
                    "end": 122
                  },
                  "start": 100,
                  "end": 122
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 124,
                "end": 126
              },
              "expression": false,
              "start": 96,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 126
          }
        ],
        "start": 84,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 129
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
            "name": "store",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 149
                },
                "typeArguments": null,
                "start": 144,
                "end": 149
              },
              "start": 142,
              "end": 149
            },
            "start": 137,
            "end": 149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inject",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Store",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 164
              }
            ],
            "optional": false,
            "start": 152,
            "end": 165
          },
          "definite": false,
          "start": 137,
          "end": 165
        }
      ],
      "declare": false,
      "start": 131,
      "end": 166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inject",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "token",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProviderToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 207
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
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  }
                ],
                "start": 207,
                "end": 210
              },
              "start": 194,
              "end": 210
            },
            "start": 192,
            "end": 210
          },
          "start": 187,
          "end": 210
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
            "start": 213,
            "end": 214
          },
          "typeArguments": null,
          "start": 213,
          "end": 214
        },
        "start": 211,
        "end": 214
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
                "start": 228,
                "end": 230
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 235
                },
                "typeArguments": null,
                "start": 234,
                "end": 235
              },
              "start": 228,
              "end": 235
            },
            "start": 221,
            "end": 236
          }
        ],
        "start": 215,
        "end": 238
      },
      "expression": false,
      "start": 168,
      "end": 238
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 254
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
              "start": 255,
              "end": 256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 256
          }
        ],
        "start": 254,
        "end": 257
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 274
          },
          "typeArguments": null,
          "start": 266,
          "end": 274
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                  "start": 289,
                  "end": 293
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 295,
                      "end": 298
                    },
                    "start": 295,
                    "end": 300
                  },
                  "start": 293,
                  "end": 300
                },
                "value": null,
                "start": 286,
                "end": 300
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
                  "start": 303,
                  "end": 304
                },
                "typeArguments": null,
                "start": 303,
                "end": 304
              },
              "start": 301,
              "end": 304
            },
            "start": 281,
            "end": 305
          }
        ],
        "start": 275,
        "end": 307
      },
      "declare": false,
      "start": 240,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProviderToken",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 327
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
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 329
          }
        ],
        "start": 327,
        "end": 330
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
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
                    "start": 338,
                    "end": 339
                  },
                  "typeArguments": null,
                  "start": 338,
                  "end": 339
                }
              ],
              "start": 337,
              "end": 340
            },
            "start": 333,
            "end": 340
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AbstractType",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 355
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
                    "start": 356,
                    "end": 357
                  },
                  "typeArguments": null,
                  "start": 356,
                  "end": 357
                }
              ],
              "start": 355,
              "end": 358
            },
            "start": 343,
            "end": 358
          }
        ],
        "start": 333,
        "end": 358
      },
      "declare": false,
      "start": 309,
      "end": 359
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractType",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 383
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
              "start": 384,
              "end": 385
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 385
          }
        ],
        "start": 383,
        "end": 386
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 403
          },
          "typeArguments": null,
          "start": 395,
          "end": 403
        }
      ],
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 419
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
                  "start": 421,
                  "end": 422
                },
                "typeArguments": null,
                "start": 421,
                "end": 422
              },
              "start": 419,
              "end": 422
            },
            "accessibility": null,
            "static": false,
            "start": 410,
            "end": 423
          }
        ],
        "start": 404,
        "end": 425
      },
      "declare": false,
      "start": 361,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 425
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 76,
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
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "mapFn",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 118,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "store",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "inject",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 168,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "inject",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "token",
    "start": 187,
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
    "value": "ProviderToken",
    "start": 194,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 231,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 240,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 289,
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
    "value": "any",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "type",
    "start": 309,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "ProviderToken",
    "start": 314,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "AbstractType",
    "start": 343,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 361,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "AbstractType",
    "start": 371,
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
    "type": "Punctuator",
    "value": ">",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 387,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 410,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  }
]
```
