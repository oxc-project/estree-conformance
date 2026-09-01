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
        "name": "Fns",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 17
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 18,
              "end": 24
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 36
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 38,
                        "end": 45
                      },
                      "start": 38,
                      "end": 47
                    },
                    "start": 36,
                    "end": 47
                  },
                  "value": null,
                  "start": 27,
                  "end": 47
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 52,
                  "end": 59
                },
                "start": 49,
                "end": 59
              },
              "start": 26,
              "end": 59
            }
          ],
          "start": 17,
          "end": 60
        },
        "start": 11,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Map",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
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
              "start": 71,
              "end": 72
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fns",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 84
              },
              "typeArguments": null,
              "start": 81,
              "end": 84
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 84
          }
        ],
        "start": 70,
        "end": 85
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "constraint": {
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
              "start": 102,
              "end": 103
            },
            "typeArguments": null,
            "start": 102,
            "end": 103
          },
          "start": 96,
          "end": 103
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeArguments": null,
            "start": 106,
            "end": 107
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeArguments": null,
            "start": 108,
            "end": 109
          },
          "start": 106,
          "end": 110
        },
        "optional": false,
        "readonly": null,
        "start": 88,
        "end": 113
      },
      "declare": false,
      "start": 62,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllArg",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 127
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
              "start": 128,
              "end": 129
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fns",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 141
              },
              "typeArguments": null,
              "start": 138,
              "end": 141
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 141
          }
        ],
        "start": 127,
        "end": 142
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 149
        },
        "constraint": {
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
              "start": 159,
              "end": 160
            },
            "typeArguments": null,
            "start": 159,
            "end": 160
          },
          "start": 153,
          "end": 160
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Parameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 173
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 175
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "typeArguments": null,
                  "start": 176,
                  "end": 177
                },
                "start": 174,
                "end": 178
              }
            ],
            "start": 173,
            "end": 179
          },
          "start": 163,
          "end": 179
        },
        "optional": false,
        "readonly": null,
        "start": 145,
        "end": 181
      },
      "declare": false,
      "start": 116,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 195
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
              "start": 196,
              "end": 197
            },
            "constraint": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 209
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 214
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 215,
                                "end": 216
                              },
                              "typeArguments": null,
                              "start": 215,
                              "end": 216
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "'x'",
                                "start": 217,
                                "end": 220
                              },
                              "start": 217,
                              "end": 220
                            },
                            "start": 215,
                            "end": 221
                          }
                        ],
                        "start": 214,
                        "end": 222
                      },
                      "start": 211,
                      "end": 222
                    },
                    "start": 209,
                    "end": 222
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 208,
                  "end": 222
                }
              ],
              "start": 206,
              "end": 224
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 196,
            "end": 224
          }
        ],
        "start": 195,
        "end": 225
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sliceIndex",
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
                "start": 238,
                "end": 239
              },
              "typeArguments": null,
              "start": 238,
              "end": 239
            },
            "start": 236,
            "end": 239
          },
          "start": 226,
          "end": 239
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AllArg",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 248
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 250
                  },
                  "typeArguments": null,
                  "start": 249,
                  "end": 250
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 251,
                    "end": 254
                  },
                  "start": 251,
                  "end": 254
                },
                "start": 249,
                "end": 255
              }
            ],
            "start": 248,
            "end": 256
          },
          "start": 242,
          "end": 256
        },
        "start": 240,
        "end": 256
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 270,
                "end": 274
              },
              "start": 270,
              "end": 275
            },
            "start": 263,
            "end": 276
          }
        ],
        "start": 257,
        "end": 278
      },
      "expression": false,
      "start": 184,
      "end": 278
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 299
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 299
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 297,
            "end": 299
          }
        ],
        "start": 295,
        "end": 301
      },
      "exportKind": "value",
      "start": 280,
      "end": 302
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 303
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
    "value": "Fns",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 73,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Fns",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 93,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 116,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "AllArg",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Fns",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 163,
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
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 184,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 198,
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
    "value": "x",
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
    "type": "Identifier",
    "value": "Map",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "sliceIndex",
    "start": 226,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 238,
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
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "AllArg",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 263,
    "end": 269
  },
  {
    "type": "Null",
    "value": "null",
    "start": 270,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 280,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "\"./types\"",
        "start": 17,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 49
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 49
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 45,
            "end": 49
          }
        ],
        "start": 43,
        "end": 51
      },
      "exportKind": "value",
      "start": 28,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
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
    "type": "Identifier",
    "value": "test",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 12,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"./types\"",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  }
]
```
