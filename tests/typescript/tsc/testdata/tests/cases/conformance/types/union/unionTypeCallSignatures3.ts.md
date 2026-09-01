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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 13,
            "end": 21
          },
          "start": 12,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 23,
        "end": 26
      },
      "expression": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 43,
              "end": 49
            },
            "start": 41,
            "end": 49
          },
          "start": 39,
          "end": 49
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 51,
        "end": 54
      },
      "expression": false,
      "start": 27,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 73,
              "end": 81
            },
            "start": 71,
            "end": 81
          },
          "value": null,
          "start": 67,
          "end": 81
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 83,
        "end": 86
      },
      "expression": false,
      "start": 55,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            },
            "start": 100,
            "end": 108
          },
          "start": 99,
          "end": 108
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 115,
              "end": 121
            },
            "start": 113,
            "end": 121
          },
          "start": 110,
          "end": 121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 123,
        "end": 126
      },
      "expression": false,
      "start": 87,
      "end": 126
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 138
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 143,
              "end": 149
            },
            "start": 141,
            "end": 149
          },
          "start": 139,
          "end": 149
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 155,
              "end": 161
            },
            "start": 153,
            "end": 161
          },
          "start": 151,
          "end": 161
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 163,
        "end": 166
      },
      "expression": false,
      "start": 127,
      "end": 166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 178
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 183,
              "end": 189
            },
            "start": 181,
            "end": 189
          },
          "start": 179,
          "end": 189
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 197,
                "end": 203
              },
              "start": 197,
              "end": 205
            },
            "start": 195,
            "end": 205
          },
          "value": null,
          "start": 191,
          "end": 205
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 207,
        "end": 210
      },
      "expression": false,
      "start": 167,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 222
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 226,
              "end": 232
            },
            "start": 224,
            "end": 232
          },
          "start": 223,
          "end": 232
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "sRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 242
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 244,
                "end": 250
              },
              "start": 244,
              "end": 252
            },
            "start": 242,
            "end": 252
          },
          "value": null,
          "start": 234,
          "end": 252
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 254,
        "end": 257
      },
      "expression": false,
      "start": 211,
      "end": 257
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 280
                    },
                    "typeArguments": null,
                    "start": 271,
                    "end": 280
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 292
                    },
                    "typeArguments": null,
                    "start": 283,
                    "end": 292
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 295,
                    "end": 304
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 316
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 319,
                    "end": 328
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 340
                    },
                    "typeArguments": null,
                    "start": 331,
                    "end": 340
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 352
                    },
                    "typeArguments": null,
                    "start": 343,
                    "end": 352
                  }
                ],
                "start": 271,
                "end": 352
              },
              "start": 269,
              "end": 352
            },
            "start": 263,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 263,
          "end": 352
        }
      ],
      "declare": false,
      "start": 259,
      "end": 353
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 361
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 362,
            "end": 364
          }
        ],
        "optional": false,
        "start": 355,
        "end": 365
      },
      "directive": null,
      "start": 355,
      "end": 366
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 428
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 87,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 127,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 167,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 211,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "sRest",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "fUnion",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 271,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 283,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 295,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 307,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 319,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 331,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 343,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "fUnion",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  }
]
```
