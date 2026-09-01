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
        "name": "EmberObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 26,
        "end": 28
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 28
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonType",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 45
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 56
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EmberObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 75
                  },
                  "typeArguments": null,
                  "start": 57,
                  "end": 75
                }
              ],
              "start": 56,
              "end": 76
            },
            "start": 48,
            "end": 76
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 100,
                    "end": 106
                  },
                  "start": 98,
                  "end": 106
                },
                "start": 87,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                          "name": "firstName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 126
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 128,
                            "end": 134
                          },
                          "start": 126,
                          "end": 134
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 117,
                        "end": 135
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lastName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 148
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          "start": 148,
                          "end": 156
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 140,
                        "end": 157
                      }
                    ],
                    "start": 111,
                    "end": 161
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmberObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 164,
                    "end": 175
                  }
                ],
                "start": 111,
                "end": 175
              },
              "start": 108,
              "end": 175
            },
            "start": 82,
            "end": 175
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
                  "start": 190,
                  "end": 194
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 196,
                      "end": 199
                    },
                    "start": 196,
                    "end": 201
                  },
                  "start": 194,
                  "end": 201
                },
                "value": null,
                "start": 187,
                "end": 201
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                          "name": "firstName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 221
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          },
                          "start": 221,
                          "end": 229
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 212,
                        "end": 230
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lastName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 243
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 245,
                            "end": 251
                          },
                          "start": 243,
                          "end": 251
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 235,
                        "end": 252
                      }
                    ],
                    "start": 206,
                    "end": 256
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmberObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 259,
                    "end": 270
                  }
                ],
                "start": 206,
                "end": 270
              },
              "start": 203,
              "end": 270
            },
            "start": 182,
            "end": 270
          }
        ],
        "start": 48,
        "end": 271
      },
      "declare": false,
      "start": 30,
      "end": 272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonPrototype",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 294
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PersonType",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 307
          },
          "typeArguments": null,
          "start": 297,
          "end": 307
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "prototype",
            "raw": "\"prototype\"",
            "start": 308,
            "end": 319
          },
          "start": 308,
          "end": 319
        },
        "start": 297,
        "end": 320
      },
      "declare": false,
      "start": 274,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 321
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "EmberObject",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "PersonType",
    "start": 35,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "EmberObject",
    "start": 64,
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
    "value": "&",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 87,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "firstName",
    "start": 117,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "lastName",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "EmberObject",
    "start": 164,
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
    "value": "&",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "firstName",
    "start": 212,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "lastName",
    "start": 235,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "EmberObject",
    "start": 259,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 274,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "PersonPrototype",
    "start": 279,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "PersonType",
    "start": 297,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"prototype\"",
    "start": 308,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  }
]
```
