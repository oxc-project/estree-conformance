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
          "name": "Handler",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 19
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TEvent",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 26
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 20,
              "end": 32
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 41
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 34,
              "end": 47
            }
          ],
          "start": 19,
          "end": 48
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TEvent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 64,
                  "end": 70
                },
                "start": 62,
                "end": 70
              },
              "start": 57,
              "end": 70
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "context",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 85,
                  "end": 87
                },
                "start": 83,
                "end": 87
              },
              "start": 76,
              "end": 87
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 111
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 119
                        },
                        "typeArguments": null,
                        "start": 112,
                        "end": 119
                      }
                    ],
                    "start": 111,
                    "end": 120
                  },
                  "start": 103,
                  "end": 120
                },
                "start": 101,
                "end": 120
              },
              "start": 93,
              "end": 120
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 127,
                  "end": 131
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 141
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 149
                        },
                        "typeArguments": null,
                        "start": 142,
                        "end": 149
                      }
                    ],
                    "start": 141,
                    "end": 150
                  },
                  "start": 134,
                  "end": 150
                }
              ],
              "start": 127,
              "end": 150
            },
            "start": 124,
            "end": 150
          },
          "start": 51,
          "end": 150
        },
        "declare": false,
        "start": 7,
        "end": 151
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Callback",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 173
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 181
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 184,
                "end": 187
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 174,
              "end": 187
            }
          ],
          "start": 173,
          "end": 188
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": true,
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
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 205
                      },
                      "typeArguments": null,
                      "start": 200,
                      "end": 205
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 208,
                      "end": 214
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 217,
                      "end": 221
                    }
                  ],
                  "start": 200,
                  "end": 221
                },
                "start": 198,
                "end": 221
              },
              "start": 192,
              "end": 221
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 239
                  },
                  "typeArguments": null,
                  "start": 232,
                  "end": 239
                },
                "start": 230,
                "end": 239
              },
              "start": 223,
              "end": 239
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 244,
              "end": 248
            },
            "start": 241,
            "end": 248
          },
          "start": 191,
          "end": 248
        },
        "declare": false,
        "start": 160,
        "end": 249
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 153,
      "end": 249
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 250
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
    "value": "Handler",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 124,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 174,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 215,
    "end": 216
  },
  {
    "type": "Null",
    "value": "null",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 241,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "importKind": "value",
          "start": 9,
          "end": 16
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Callback",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 26
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Callback",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 26
          },
          "importKind": "value",
          "start": 18,
          "end": 26
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aws-lambda",
        "raw": "'aws-lambda'",
        "start": 34,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 78
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandlerEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 102
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
                    "start": 103,
                    "end": 104
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 120
                    },
                    "typeArguments": null,
                    "start": 113,
                    "end": 120
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 103,
                  "end": 120
                }
              ],
              "start": 102,
              "end": 121
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
                  "start": 124,
                  "end": 125
                },
                "typeArguments": null,
                "start": 124,
                "end": 125
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 141
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 154
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 148,
                        "end": 154
                      },
                      "start": 142,
                      "end": 154
                    }
                  ],
                  "start": 141,
                  "end": 155
                },
                "start": 134,
                "end": 155
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 164
                },
                "typeArguments": null,
                "start": 158,
                "end": 164
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 167,
                "end": 172
              },
              "start": 124,
              "end": 172
            },
            "declare": false,
            "start": 85,
            "end": 173
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandlerResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 196
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
                    "start": 197,
                    "end": 198
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 214
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 197,
                  "end": 214
                }
              ],
              "start": 196,
              "end": 215
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
                  "start": 218,
                  "end": 219
                },
                "typeArguments": null,
                "start": 218,
                "end": 219
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 236,
                      "end": 239
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 254
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 247,
                        "end": 254
                      },
                      "start": 241,
                      "end": 254
                    }
                  ],
                  "start": 235,
                  "end": 255
                },
                "start": 228,
                "end": 255
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "typeArguments": null,
                "start": 258,
                "end": 265
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 268,
                "end": 273
              },
              "start": 218,
              "end": 273
            },
            "declare": false,
            "start": 178,
            "end": 274
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandlerError",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 296
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
                    "start": 297,
                    "end": 298
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 314
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 314
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 297,
                  "end": 314
                }
              ],
              "start": 296,
              "end": 315
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
                  "start": 318,
                  "end": 319
                },
                "typeArguments": null,
                "start": 318,
                "end": 319
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 335
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 336,
                      "end": 339
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 354
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 347,
                        "end": 354
                      },
                      "start": 341,
                      "end": 354
                    }
                  ],
                  "start": 335,
                  "end": 355
                },
                "start": 328,
                "end": 355
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 377
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
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 388
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Callback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 389,
                                "end": 397
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 398,
                                      "end": 405
                                    },
                                    "typeArguments": null,
                                    "start": 398,
                                    "end": 405
                                  }
                                ],
                                "start": 397,
                                "end": 406
                              },
                              "start": 389,
                              "end": 406
                            }
                          ],
                          "start": 388,
                          "end": 407
                        },
                        "start": 378,
                        "end": 407
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "0",
                          "raw": "'0'",
                          "start": 408,
                          "end": 411
                        },
                        "start": 408,
                        "end": 411
                      },
                      "start": 378,
                      "end": 412
                    }
                  ],
                  "start": 377,
                  "end": 413
                },
                "start": 366,
                "end": 413
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 424,
                "end": 429
              },
              "start": 318,
              "end": 429
            },
            "declare": false,
            "start": 279,
            "end": 430
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "VerifierFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 456
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 458
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 457,
                  "end": 458
                }
              ],
              "start": 456,
              "end": 459
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
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 480
                          },
                          "typeArguments": null,
                          "start": 479,
                          "end": 480
                        },
                        "start": 477,
                        "end": 480
                      },
                      "start": 471,
                      "end": 480
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 495,
                          "end": 498
                        },
                        "start": 493,
                        "end": 498
                      },
                      "start": 482,
                      "end": 498
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 501,
                          "end": 505
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 515
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 516,
                                "end": 520
                              }
                            ],
                            "start": 515,
                            "end": 521
                          },
                          "start": 508,
                          "end": 521
                        }
                      ],
                      "start": 501,
                      "end": 521
                    },
                    "start": 499,
                    "end": 521
                  },
                  "start": 470,
                  "end": 522
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 540,
                            "end": 541
                          },
                          "typeArguments": null,
                          "start": 540,
                          "end": 541
                        },
                        "start": 538,
                        "end": 541
                      },
                      "start": 532,
                      "end": 541
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 556,
                          "end": 559
                        },
                        "start": 554,
                        "end": 559
                      },
                      "start": 543,
                      "end": 559
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 574,
                              "end": 576
                            },
                            "start": 571,
                            "end": 576
                          },
                          "start": 568,
                          "end": 576
                        },
                        "start": 566,
                        "end": 576
                      },
                      "start": 561,
                      "end": 576
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 579,
                      "end": 583
                    },
                    "start": 577,
                    "end": 583
                  },
                  "start": 531,
                  "end": 584
                }
              ],
              "start": 460,
              "end": 590
            },
            "declare": false,
            "start": 436,
            "end": 590
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Verifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 608
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 609,
                    "end": 610
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 609,
                  "end": 610
                }
              ],
              "start": 608,
              "end": 611
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 615
                },
                "typeArguments": null,
                "start": 614,
                "end": 615
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 636
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Handler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 637,
                        "end": 644
                      },
                      "typeArguments": null,
                      "start": 637,
                      "end": 644
                    }
                  ],
                  "start": 636,
                  "end": 645
                },
                "start": 624,
                "end": 645
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  },
                  "typeArguments": null,
                  "start": 656,
                  "end": 657
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 666,
                  "end": 672
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "VerifierFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 697
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 698,
                        "end": 704
                      }
                    ],
                    "start": 697,
                    "end": 705
                  },
                  "start": 687,
                  "end": 705
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 720,
                      "end": 721
                    },
                    "typeArguments": null,
                    "start": 720,
                    "end": 721
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 735
                    },
                    "typeArguments": null,
                    "start": 730,
                    "end": 735
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VerifierFn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 760
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 761,
                            "end": 766
                          },
                          "typeArguments": null,
                          "start": 761,
                          "end": 766
                        }
                      ],
                      "start": 760,
                      "end": 767
                    },
                    "start": 750,
                    "end": 767
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 782,
                    "end": 787
                  },
                  "start": 720,
                  "end": 787
                },
                "start": 656,
                "end": 787
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VerifierFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 808
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 809,
                        "end": 810
                      },
                      "typeArguments": null,
                      "start": 809,
                      "end": 810
                    }
                  ],
                  "start": 808,
                  "end": 811
                },
                "start": 798,
                "end": 811
              },
              "start": 614,
              "end": 811
            },
            "declare": false,
            "start": 595,
            "end": 812
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LambdaTester",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 836
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
                    "start": 837,
                    "end": 838
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 854
                    },
                    "typeArguments": null,
                    "start": 847,
                    "end": 854
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 837,
                  "end": 854
                }
              ],
              "start": 836,
              "end": 855
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
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 871
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "HandlerEvent",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 879,
                              "end": 891
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
                                    "start": 892,
                                    "end": 893
                                  },
                                  "typeArguments": null,
                                  "start": 892,
                                  "end": 893
                                }
                              ],
                              "start": 891,
                              "end": 894
                            },
                            "start": 879,
                            "end": 894
                          },
                          "start": 877,
                          "end": 894
                        },
                        "start": 872,
                        "end": 894
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 897,
                        "end": 901
                      },
                      "start": 895,
                      "end": 901
                    },
                    "body": null,
                    "expression": false,
                    "start": 871,
                    "end": 902
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 866,
                  "end": 902
                }
              ],
              "start": 856,
              "end": 908
            },
            "abstract": false,
            "declare": false,
            "start": 818,
            "end": 908
          }
        ],
        "start": 79,
        "end": 910
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 48,
      "end": 910
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "typeAnnotation": null,
        "start": 929,
        "end": 941
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 942,
              "end": 943
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Handler",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 959
              },
              "typeArguments": null,
              "start": 952,
              "end": 959
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 942,
            "end": 959
          }
        ],
        "start": 941,
        "end": 960
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
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
                "start": 970,
                "end": 971
              },
              "typeArguments": null,
              "start": 970,
              "end": 971
            },
            "start": 968,
            "end": 971
          },
          "start": 961,
          "end": 971
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambdaTester",
              "optional": false,
              "typeAnnotation": null,
              "start": 974,
              "end": 986
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "LambdaTester",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 999
            },
            "start": 974,
            "end": 999
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
                  "start": 1000,
                  "end": 1001
                },
                "typeArguments": null,
                "start": 1000,
                "end": 1001
              }
            ],
            "start": 999,
            "end": 1002
          },
          "start": 974,
          "end": 1002
        },
        "start": 972,
        "end": 1002
      },
      "body": null,
      "expression": false,
      "start": 912,
      "end": 1003
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1026
      },
      "start": 1005,
      "end": 1027
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1027
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 18,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33
  },
  {
    "type": "String",
    "value": "'aws-lambda'",
    "start": 34,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 66,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "HandlerEvent",
    "start": 90,
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
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 126,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 178,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "HandlerResult",
    "start": 183,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 199,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 207,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 279,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "HandlerError",
    "start": 284,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 320,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 341,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 366,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 378,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 389,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 436,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "VerifierFn",
    "start": 446,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "additional",
    "start": 482,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 495,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 508,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "additional",
    "start": 543,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 595,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "Verifier",
    "start": 600,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 616,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "HandlerError",
    "start": 624,
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
    "value": "Handler",
    "start": 637,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 658,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 666,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "VerifierFn",
    "start": 687,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 722,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 730,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "VerifierFn",
    "start": 750,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 761,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "VerifierFn",
    "start": 798,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 818,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "LambdaTester",
    "start": 824,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 839,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 847,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 866,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "HandlerEvent",
    "start": 879,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 912,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 920,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 929,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 944,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 952,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 961,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 974,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "LambdaTester",
    "start": 987,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 1014,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 24
          },
          "start": 7,
          "end": 24
        }
      ],
      "source": {
        "type": "Literal",
        "value": "lambda-tester",
        "raw": "'lambda-tester'",
        "start": 30,
        "end": 45
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 63
          },
          "importKind": "value",
          "start": 56,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aws-lambda",
        "raw": "'aws-lambda'",
        "start": 71,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 47,
      "end": 84
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Actual",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 97
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 112
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Verifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 121
          },
          "start": 100,
          "end": 121
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambdaTester",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 134
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 148
                },
                "start": 122,
                "end": 148
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 156
                    },
                    "typeArguments": null,
                    "start": 149,
                    "end": 156
                  }
                ],
                "start": 148,
                "end": 157
              },
              "start": 122,
              "end": 157
            }
          ],
          "start": 121,
          "end": 158
        },
        "start": 100,
        "end": 158
      },
      "declare": false,
      "start": 86,
      "end": 159
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 173
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 188
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Verifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 197
          },
          "start": 176,
          "end": 197
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambdaTester",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 210
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 224
                },
                "start": 198,
                "end": 224
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 232
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 233,
                          "end": 236
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 238,
                          "end": 241
                        }
                      ],
                      "start": 232,
                      "end": 242
                    },
                    "start": 225,
                    "end": 242
                  }
                ],
                "start": 224,
                "end": 243
              },
              "start": 198,
              "end": 243
            }
          ],
          "start": 197,
          "end": 244
        },
        "start": 176,
        "end": 244
      },
      "declare": false,
      "start": 160,
      "end": 245
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 245
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 12,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 25,
    "end": 29
  },
  {
    "type": "String",
    "value": "'lambda-tester'",
    "start": 30,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 56,
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
    "value": "from",
    "start": 66,
    "end": 70
  },
  {
    "type": "String",
    "value": "'aws-lambda'",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Actual",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 100,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Verifier",
    "start": 113,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 122,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "HandlerResult",
    "start": 135,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 149,
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
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Expected",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 176,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Verifier",
    "start": 189,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "lambdaTester",
    "start": 198,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "HandlerResult",
    "start": 211,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 225,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  }
]
```
