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
        "name": "Pairs",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "TKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 49
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
              "start": 59,
              "end": 60
            },
            "typeArguments": null,
            "start": 59,
            "end": 60
          },
          "start": 53,
          "end": 60
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
                "start": 73,
                "end": 76
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 78,
                  "end": 82
                },
                "start": 76,
                "end": 82
              },
              "accessibility": null,
              "static": false,
              "start": 73,
              "end": 83
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 97
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 99,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 99,
                    "end": 100
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 105
                    },
                    "typeArguments": null,
                    "start": 101,
                    "end": 105
                  },
                  "start": 99,
                  "end": 106
                },
                "start": 97,
                "end": 106
              },
              "accessibility": null,
              "static": false,
              "start": 92,
              "end": 107
            }
          ],
          "start": 63,
          "end": 113
        },
        "optional": false,
        "readonly": null,
        "start": 38,
        "end": 116
      },
      "declare": false,
      "start": 22,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pair",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 128
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
              "start": 129,
              "end": 130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 128,
        "end": 131
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pairs",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 139
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
                  "start": 140,
                  "end": 141
                },
                "typeArguments": null,
                "start": 140,
                "end": 141
              }
            ],
            "start": 139,
            "end": 142
          },
          "start": 134,
          "end": 142
        },
        "indexType": {
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
              "start": 149,
              "end": 150
            },
            "typeArguments": null,
            "start": 149,
            "end": 150
          },
          "start": 143,
          "end": 150
        },
        "start": 134,
        "end": 151
      },
      "declare": false,
      "start": 119,
      "end": 152
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 165
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 174,
            "end": 186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              },
              "start": 194,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 191,
            "end": 203
          }
        ],
        "start": 168,
        "end": 205
      },
      "declare": false,
      "start": 154,
      "end": 206
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
            "name": "pair1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pair",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 246
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooBar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 253
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 253
                    }
                  ],
                  "start": 246,
                  "end": 254
                },
                "start": 242,
                "end": 254
              },
              "start": 240,
              "end": 254
            },
            "start": 235,
            "end": 254
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
                  "start": 263,
                  "end": 266
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 268,
                  "end": 273
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 263,
                "end": 273
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 284
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 286,
                  "end": 287
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 279,
                "end": 287
              }
            ],
            "start": 257,
            "end": 289
          },
          "definite": false,
          "start": 235,
          "end": 289
        }
      ],
      "declare": false,
      "start": 231,
      "end": 290
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
            "name": "pair2",
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
                    "name": "Pairs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 331
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FooBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 338
                        },
                        "typeArguments": null,
                        "start": 332,
                        "end": 338
                      }
                    ],
                    "start": 331,
                    "end": 339
                  },
                  "start": 326,
                  "end": 339
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 352
                    },
                    "typeArguments": null,
                    "start": 346,
                    "end": 352
                  },
                  "start": 340,
                  "end": 352
                },
                "start": 326,
                "end": 353
              },
              "start": 324,
              "end": 353
            },
            "start": 319,
            "end": 353
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
                  "start": 362,
                  "end": 365
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 367,
                  "end": 372
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 362,
                "end": 372
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 383
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 385,
                  "end": 386
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 378,
                "end": 386
              }
            ],
            "start": 356,
            "end": 388
          },
          "definite": false,
          "start": 319,
          "end": 388
        }
      ],
      "declare": false,
      "start": 315,
      "end": 389
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 389
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Pairs",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 45,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
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
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Pairs",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
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
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 154,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 191,
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
    "value": "number",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "pair1",
    "start": 235,
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
    "value": "Pair",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "pair2",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Pairs",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  }
]
```
