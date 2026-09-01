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
        "name": "Nominal",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 48,
              "end": 54
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 54
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 56,
            "end": 60
          }
        ],
        "start": 34,
        "end": 61
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 68
            },
            "typeArguments": null,
            "start": 64,
            "end": 68
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": true,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 84
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "species",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 92
                  },
                  "optional": false,
                  "computed": false,
                  "start": 78,
                  "end": 92
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 99
                    },
                    "typeArguments": null,
                    "start": 95,
                    "end": 99
                  },
                  "start": 93,
                  "end": 99
                },
                "accessibility": null,
                "static": false,
                "start": 77,
                "end": 100
              }
            ],
            "start": 71,
            "end": 102
          }
        ],
        "start": 64,
        "end": 102
      },
      "declare": false,
      "start": 22,
      "end": 103
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nominal",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 121
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 122,
                "end": 125
              },
              "start": 122,
              "end": 125
            },
            {
              "type": "TSStringKeyword",
              "start": 127,
              "end": 133
            }
          ],
          "start": 121,
          "end": 134
        },
        "start": 114,
        "end": 134
      },
      "declare": false,
      "start": 105,
      "end": 135
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 159
                    }
                  ],
                  "start": 157,
                  "end": 160
                },
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "start": 151,
            "end": 160
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 160
        }
      ],
      "declare": true,
      "start": 137,
      "end": 161
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 182
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 184
                      },
                      "typeArguments": null,
                      "start": 183,
                      "end": 184
                    }
                  ],
                  "start": 182,
                  "end": 185
                },
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "start": 176,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 185
        }
      ],
      "declare": true,
      "start": 162,
      "end": 186
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 204
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 209
                  },
                  "optional": false,
                  "computed": false,
                  "start": 199,
                  "end": 209
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  }
                ],
                "optional": false,
                "start": 199,
                "end": 212
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "concat",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 219
              },
              "optional": false,
              "computed": false,
              "start": 199,
              "end": 219
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 225
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 230
                  },
                  "optional": false,
                  "computed": false,
                  "start": 220,
                  "end": 230
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  }
                ],
                "optional": false,
                "start": 220,
                "end": 233
              }
            ],
            "optional": false,
            "start": 199,
            "end": 234
          },
          "definite": false,
          "start": 194,
          "end": 234
        }
      ],
      "declare": false,
      "start": 188,
      "end": 235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 276
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
              "start": 277,
              "end": 278
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 277,
            "end": 278
          }
        ],
        "start": 276,
        "end": 279
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 284
            },
            "typeArguments": null,
            "start": 283,
            "end": 284
          },
          "start": 283,
          "end": 286
        },
        "start": 281,
        "end": 286
      },
      "body": null,
      "expression": false,
      "start": 255,
      "end": 287
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
            "name": "c2",
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
                  "start": 298,
                  "end": 311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 313
                    }
                  ],
                  "start": 311,
                  "end": 314
                },
                "start": 298,
                "end": 314
              },
              "start": 296,
              "end": 314
            },
            "start": 294,
            "end": 314
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "from",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 321
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 317,
            "end": 323
          },
          "definite": false,
          "start": 294,
          "end": 323
        }
      ],
      "declare": false,
      "start": 288,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 324
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
    "value": "Nominal",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 35,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 40,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "species",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
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
    "value": "Kind",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 105,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Nominal",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 133,
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
    "value": "declare",
    "start": 137,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 162,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 176,
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
    "value": "Set",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 255,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 263,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 288,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 294,
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
    "value": "ReadonlyArray",
    "start": 298,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  }
]
```
