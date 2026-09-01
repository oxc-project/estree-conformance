__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            },
            "start": 24,
            "end": 29
          },
          "start": 19,
          "end": 29
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 45
          },
          "asserts": true,
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
                "start": 49,
                "end": 50
              },
              "typeArguments": null,
              "start": 49,
              "end": 50
            },
            "start": 49,
            "end": 50
          },
          "start": 32,
          "end": 50
        },
        "start": 30,
        "end": 50
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 51,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 68
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 74,
              "end": 77
            },
            "start": 72,
            "end": 77
          },
          "start": 69,
          "end": 77
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 84,
              "end": 87
            },
            "start": 82,
            "end": 87
          },
          "start": 79,
          "end": 87
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 101
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    ],
                    "start": 101,
                    "end": 109
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 113
                    }
                  ],
                  "optional": false,
                  "start": 95,
                  "end": 114
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 122
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 123,
                        "end": 129
                      }
                    ],
                    "start": 122,
                    "end": 130
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 134
                    }
                  ],
                  "optional": false,
                  "start": 116,
                  "end": 135
                }
              ],
              "start": 95,
              "end": 135
            },
            "directive": null,
            "start": 95,
            "end": 136
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "directive": null,
            "start": 141,
            "end": 145
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 153
            },
            "directive": null,
            "start": 150,
            "end": 154
          }
        ],
        "start": 89,
        "end": 156
      },
      "expression": false,
      "start": 55,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 172
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 178,
              "end": 181
            },
            "start": 176,
            "end": 181
          },
          "start": 173,
          "end": 181
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 188,
              "end": 191
            },
            "start": 186,
            "end": 191
          },
          "start": 183,
          "end": 191
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 198,
              "end": 201
            },
            "start": 196,
            "end": 201
          },
          "start": 193,
          "end": 201
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 215
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 216,
                        "end": 222
                      }
                    ],
                    "start": 215,
                    "end": 223
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 227
                    }
                  ],
                  "optional": false,
                  "start": 209,
                  "end": 228
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 236
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      }
                    ],
                    "start": 236,
                    "end": 244
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 248
                    }
                  ],
                  "optional": false,
                  "start": 230,
                  "end": 249
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 257
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 258,
                        "end": 265
                      }
                    ],
                    "start": 257,
                    "end": 266
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 270
                    }
                  ],
                  "optional": false,
                  "start": 251,
                  "end": 271
                }
              ],
              "start": 209,
              "end": 271
            },
            "directive": null,
            "start": 209,
            "end": 272
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 280
            },
            "directive": null,
            "start": 277,
            "end": 281
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 289
            },
            "directive": null,
            "start": 286,
            "end": 290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 298
            },
            "directive": null,
            "start": 295,
            "end": 299
          }
        ],
        "start": 203,
        "end": 301
      },
      "expression": false,
      "start": 158,
      "end": 301
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 301
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 32,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 131,
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
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 193,
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
    "value": "any",
    "start": 198,
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
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 224,
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
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
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
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 267,
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
    "value": "foo",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  }
]
```
