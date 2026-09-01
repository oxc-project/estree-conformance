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
        "name": "UnionKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "typeArguments": null,
          "start": 20,
          "end": 21
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 30,
          "end": 33
        },
        "trueType": {
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
              "start": 42,
              "end": 43
            },
            "typeArguments": null,
            "start": 42,
            "end": 43
          },
          "start": 36,
          "end": 43
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 46,
          "end": 51
        },
        "start": 20,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugHelper",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 67
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
              "start": 68,
              "end": 69
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 69
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 75
          }
        ],
        "start": 67,
        "end": 76
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "typeArguments": null,
          "start": 79,
          "end": 80
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 89,
          "end": 92
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 102
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 112
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 117
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 117
                    }
                  ],
                  "start": 112,
                  "end": 118
                },
                "start": 103,
                "end": 118
              },
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
                    "start": 126,
                    "end": 127
                  },
                  "typeArguments": null,
                  "start": 126,
                  "end": 127
                },
                "start": 120,
                "end": 127
              }
            ],
            "start": 102,
            "end": 128
          },
          "start": 95,
          "end": 128
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 131,
          "end": 136
        },
        "start": 79,
        "end": 136
      },
      "declare": false,
      "start": 53,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 145
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 150
          }
        ],
        "start": 145,
        "end": 151
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BugHelper",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 164
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 169
              },
              "typeArguments": null,
              "start": 165,
              "end": 169
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 175
              },
              "typeArguments": null,
              "start": 171,
              "end": 175
            }
          ],
          "start": 164,
          "end": 176
        },
        "start": 155,
        "end": 176
      },
      "declare": false,
      "start": 137,
      "end": 176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 195
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 202,
                          "end": 205
                        },
                        "start": 200,
                        "end": 205
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 198,
                      "end": 205
                    }
                  ],
                  "start": 196,
                  "end": 207
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 213
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 215,
                          "end": 218
                        },
                        "start": 213,
                        "end": 218
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 212,
                      "end": 218
                    }
                  ],
                  "start": 210,
                  "end": 220
                }
              ],
              "start": 196,
              "end": 220
            }
          ],
          "start": 195,
          "end": 221
        },
        "start": 186,
        "end": 221
      },
      "declare": false,
      "start": 177,
      "end": 221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 254
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bug",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 267,
                          "end": 270
                        },
                        "start": 265,
                        "end": 270
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 263,
                      "end": 270
                    }
                  ],
                  "start": 261,
                  "end": 272
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 277,
                        "end": 278
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 280,
                          "end": 283
                        },
                        "start": 278,
                        "end": 283
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 277,
                      "end": 283
                    }
                  ],
                  "start": 275,
                  "end": 285
                }
              ],
              "start": 261,
              "end": 285
            }
          ],
          "start": 260,
          "end": 286
        },
        "start": 257,
        "end": 286
      },
      "declare": false,
      "start": 248,
      "end": 286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
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
    "value": "UnionKeys",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 22,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "BugHelper",
    "start": 58,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "TAll",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 81,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "UnionKeys",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "TAll",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 137,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "TAll",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "BugHelper",
    "start": 155,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "TAll",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "TAll",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 177,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "UnionKeys",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 248,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  }
]
```
