__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumFromStrings",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 31
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
                "name": "Members",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 45
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  },
                  "start": 63,
                  "end": 71
                },
                "start": 54,
                "end": 71
              },
              "default": null,
              "in": false,
              "out": false,
              "const": true,
              "start": 32,
              "end": 71
            }
          ],
          "start": 31,
          "end": 72
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Part1",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 91
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 108
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Members",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 125
                    },
                    "typeArguments": null,
                    "start": 118,
                    "end": 125
                  },
                  "start": 112,
                  "end": 125
                },
                "nameType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Members",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 136
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 140
                      },
                      "typeArguments": null,
                      "start": 137,
                      "end": 140
                    },
                    "start": 129,
                    "end": 141
                  },
                  "extendsType": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "trueType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Members",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 174
                      },
                      "typeArguments": null,
                      "start": 167,
                      "end": 174
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 178
                    },
                    "start": 167,
                    "end": 179
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 190,
                    "end": 195
                  },
                  "start": 129,
                  "end": 195
                },
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Members",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 198,
                    "end": 205
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 206,
                    "end": 209
                  },
                  "start": 198,
                  "end": 210
                },
                "optional": false,
                "readonly": null,
                "start": 94,
                "end": 217
              },
              "declare": false,
              "start": 81,
              "end": 218
            },
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Part2",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 233
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Property",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 247
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Part1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 262
                    },
                    "typeArguments": null,
                    "start": 257,
                    "end": 262
                  },
                  "start": 251,
                  "end": 262
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Part1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 265,
                    "end": 270
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 279
                    },
                    "typeArguments": null,
                    "start": 271,
                    "end": 279
                  },
                  "start": 265,
                  "end": 280
                },
                "optional": false,
                "readonly": null,
                "start": 236,
                "end": 282
              },
              "declare": false,
              "start": 223,
              "end": 283
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 301
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 308
                    },
                    "optional": false,
                    "computed": false,
                    "start": 295,
                    "end": 308
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 309,
                      "end": 313
                    }
                  ],
                  "optional": false,
                  "start": 295,
                  "end": 314
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Part2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 323
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 323
                },
                "start": 295,
                "end": 323
              },
              "start": 288,
              "end": 324
            }
          ],
          "start": 75,
          "end": 326
        },
        "expression": false,
        "start": 7,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 326
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 326
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
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "enumFromStrings",
    "start": 16,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Members",
    "start": 38,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Part1",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 105,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 109,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Members",
    "start": 118,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Members",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 142,
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
    "value": "?",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Members",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Members",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 223,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "Part2",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 239,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Part1",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Part1",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 271,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 288,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Null",
    "value": "null",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Part2",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  }
]
```
