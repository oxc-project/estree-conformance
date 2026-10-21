__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fetch",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
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
                    "name": "RequestInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 30,
                  "end": 41
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "URL",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 47
                  },
                  "typeArguments": null,
                  "start": 44,
                  "end": 47
                }
              ],
              "start": 30,
              "end": 47
            },
            "start": 28,
            "end": 47
          },
          "start": 23,
          "end": 47
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "init",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RequestInit",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 67
              },
              "typeArguments": null,
              "start": 56,
              "end": 67
            },
            "start": 54,
            "end": 67
          },
          "start": 49,
          "end": 67
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 77
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Response",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 86
                },
                "typeArguments": null,
                "start": 78,
                "end": 86
              }
            ],
            "start": 77,
            "end": 87
          },
          "start": 70,
          "end": 87
        },
        "start": 68,
        "end": 87
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CallableCopy",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 106
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
              "start": 107,
              "end": 108
            },
            "constraint": {
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
                    "start": 121,
                    "end": 125
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNeverKeyword",
                        "start": 127,
                        "end": 132
                      },
                      "start": 127,
                      "end": 134
                    },
                    "start": 125,
                    "end": 134
                  },
                  "value": null,
                  "start": 118,
                  "end": 134
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 139,
                  "end": 146
                },
                "start": 136,
                "end": 146
              },
              "start": 117,
              "end": 146
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 146
          }
        ],
        "start": 106,
        "end": 147
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
              "start": 154,
              "end": 158
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 170
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
                        "start": 171,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "start": 170,
                  "end": 173
                },
                "start": 160,
                "end": 173
              },
              "start": 158,
              "end": 173
            },
            "value": null,
            "start": 151,
            "end": 173
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
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
                }
              ],
              "start": 188,
              "end": 191
            },
            "start": 178,
            "end": 191
          },
          "start": 175,
          "end": 191
        },
        "start": 150,
        "end": 191
      },
      "declare": false,
      "start": 89,
      "end": 192
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
            "name": "copiedFetch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CallableCopy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 232
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fetch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 233,
                      "end": 245
                    }
                  ],
                  "start": 232,
                  "end": 246
                },
                "start": 220,
                "end": 246
              },
              "start": 218,
              "end": 246
            },
            "start": 207,
            "end": 246
          },
          "init": null,
          "definite": false,
          "start": 207,
          "end": 246
        }
      ],
      "declare": true,
      "start": 193,
      "end": 247
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
            "name": "replacementFetch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 284
                },
                "typeArguments": null,
                "start": 272,
                "end": 284
              },
              "start": 270,
              "end": 284
            },
            "start": 254,
            "end": 284
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "copiedFetch",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 298
          },
          "definite": false,
          "start": 254,
          "end": 298
        }
      ],
      "declare": false,
      "start": 248,
      "end": 299
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 299
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 23,
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
    "value": "RequestInfo",
    "start": 30,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "URL",
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
    "value": "init",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "RequestInit",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
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
    "value": "Promise",
    "start": 70,
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
    "value": "Response",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "CallableCopy",
    "start": 94,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 136,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 160,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 178,
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
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 193,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "copiedFetch",
    "start": 207,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "CallableCopy",
    "start": 220,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 233,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 248,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "replacementFetch",
    "start": 254,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 272,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "copiedFetch",
    "start": 287,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  }
]
```
