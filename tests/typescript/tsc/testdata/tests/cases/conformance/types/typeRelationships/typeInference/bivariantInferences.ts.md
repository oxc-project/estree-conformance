__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
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
              "start": 38,
              "end": 39
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 39
          }
        ],
        "start": 37,
        "end": 40
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equalsShallow",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 60
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
                    "start": 61,
                    "end": 62
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 61,
                  "end": 62
                }
              ],
              "start": 60,
              "end": 63
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 83
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
                            "start": 84,
                            "end": 85
                          },
                          "typeArguments": null,
                          "start": 84,
                          "end": 85
                        }
                      ],
                      "start": 83,
                      "end": 86
                    },
                    "start": 70,
                    "end": 86
                  },
                  "start": 68,
                  "end": 86
                },
                "start": 64,
                "end": 86
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 108
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
                            "start": 109,
                            "end": 110
                          },
                          "typeArguments": null,
                          "start": 109,
                          "end": 110
                        }
                      ],
                      "start": 108,
                      "end": 111
                    },
                    "start": 95,
                    "end": 111
                  },
                  "start": 93,
                  "end": 111
                },
                "start": 88,
                "end": 111
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 114,
                "end": 121
              },
              "start": 112,
              "end": 121
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 47,
            "end": 122
          }
        ],
        "start": 41,
        "end": 124
      },
      "declare": false,
      "start": 22,
      "end": 124
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 144,
                          "end": 150
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 153,
                          "end": 159
                        }
                      ],
                      "start": 144,
                      "end": 159
                    },
                    "start": 143,
                    "end": 162
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNullKeyword",
                      "start": 165,
                      "end": 169
                    },
                    "start": 165,
                    "end": 171
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUndefinedKeyword",
                      "start": 174,
                      "end": 183
                    },
                    "start": 174,
                    "end": 185
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 188,
                      "end": 190
                    },
                    "start": 188,
                    "end": 192
                  }
                ],
                "start": 143,
                "end": 192
              },
              "start": 141,
              "end": 192
            },
            "start": 140,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 192
        }
      ],
      "declare": true,
      "start": 126,
      "end": 193
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 212,
                          "end": 218
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 221,
                          "end": 227
                        }
                      ],
                      "start": 212,
                      "end": 227
                    },
                    "start": 211,
                    "end": 230
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNullKeyword",
                      "start": 233,
                      "end": 237
                    },
                    "start": 233,
                    "end": 239
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUndefinedKeyword",
                      "start": 242,
                      "end": 251
                    },
                    "start": 242,
                    "end": 253
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 256,
                      "end": 258
                    },
                    "start": 256,
                    "end": 260
                  }
                ],
                "start": 211,
                "end": 260
              },
              "start": 209,
              "end": 260
            },
            "start": 208,
            "end": 260
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 260
        }
      ],
      "declare": true,
      "start": 194,
      "end": 261
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
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 272
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "equalsShallow",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 286
              },
              "optional": false,
              "computed": false,
              "start": 271,
              "end": 286
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 288
              }
            ],
            "optional": false,
            "start": 271,
            "end": 289
          },
          "definite": false,
          "start": 267,
          "end": 289
        }
      ],
      "declare": false,
      "start": 263,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 290
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "equalsShallow",
    "start": 47,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 64,
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
    "value": "ReadonlyArray",
    "start": 70,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 95,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
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
    "value": "boolean",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 163,
    "end": 164
  },
  {
    "type": "Null",
    "value": "null",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
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
    "value": "|",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 194,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 231,
    "end": 232
  },
  {
    "type": "Null",
    "value": "null",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 242,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "equalsShallow",
    "start": 273,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  }
]
```
