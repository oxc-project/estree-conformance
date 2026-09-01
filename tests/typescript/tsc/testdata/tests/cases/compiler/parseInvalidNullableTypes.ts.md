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
          "name": "a",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                },
                "start": 29,
                "end": 36
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 29,
              "end": 36
            },
            "start": 29,
            "end": 36
          },
          "start": 24,
          "end": 36
        },
        "start": 22,
        "end": 36
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 50,
              "end": 54
            },
            "start": 43,
            "end": 55
          }
        ],
        "start": 37,
        "end": 57
      },
      "expression": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 70
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 74,
                  "end": 80
                },
                "start": 72,
                "end": 80
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 74,
              "end": 81
            },
            "start": 72,
            "end": 81
          },
          "start": 71,
          "end": 81
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 83,
        "end": 85
      },
      "expression": false,
      "start": 59,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 97
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 101,
                  "end": 107
                },
                "start": 99,
                "end": 107
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 101,
              "end": 108
            },
            "start": 99,
            "end": 108
          },
          "start": 98,
          "end": 108
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 110,
        "end": 112
      },
      "expression": false,
      "start": 86,
      "end": 112
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 125
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 130,
                  "end": 136
                },
                "start": 129,
                "end": 136
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 129,
              "end": 136
            },
            "start": 127,
            "end": 136
          },
          "start": 126,
          "end": 136
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 138,
        "end": 140
      },
      "expression": false,
      "start": 114,
      "end": 140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 157,
                  "end": 163
                },
                "start": 156,
                "end": 163
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 156,
              "end": 163
            },
            "start": 154,
            "end": 163
          },
          "start": 153,
          "end": 163
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 165,
        "end": 167
      },
      "expression": false,
      "start": 141,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 184,
              "end": 190
            },
            "start": 182,
            "end": 190
          },
          "start": 181,
          "end": 190
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSJSDocNullableType",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 194,
              "end": 200
            },
            "start": 193,
            "end": 200
          },
          "postfix": false,
          "id": 0,
          "original": null,
          "emitNode": null,
          "start": 193,
          "end": 200
        },
        "start": 191,
        "end": 200
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 214,
              "end": 218
            },
            "start": 207,
            "end": 219
          }
        ],
        "start": 201,
        "end": 221
      },
      "expression": false,
      "start": 169,
      "end": 221
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
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 233,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 238,
                  "end": 241
                },
                "start": 236,
                "end": 241
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 238,
              "end": 242
            },
            "start": 233,
            "end": 242
          },
          "definite": false,
          "start": 229,
          "end": 242
        }
      ],
      "declare": false,
      "start": 223,
      "end": 243
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
                "type": "TSJSDocNullableType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 253,
                    "end": 259
                  },
                  "start": 251,
                  "end": 259
                },
                "postfix": true,
                "id": 0,
                "original": null,
                "emitNode": null,
                "start": 253,
                "end": 260
              },
              "start": 251,
              "end": 260
            },
            "start": 250,
            "end": 260
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 263,
            "end": 264
          },
          "definite": false,
          "start": 250,
          "end": 264
        }
      ],
      "declare": false,
      "start": 244,
      "end": 265
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 274
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 277,
              "end": 278
            },
            "typeAnnotation": {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 283,
                  "end": 286
                },
                "start": 282,
                "end": 286
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 282,
              "end": 286
            },
            "start": 277,
            "end": 286
          },
          "definite": false,
          "start": 273,
          "end": 286
        }
      ],
      "declare": false,
      "start": 267,
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSJSDocNullableType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 298,
                    "end": 304
                  },
                  "start": 297,
                  "end": 304
                },
                "postfix": false,
                "id": 0,
                "original": null,
                "emitNode": null,
                "start": 297,
                "end": 304
              },
              "start": 295,
              "end": 304
            },
            "start": 294,
            "end": 304
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 307,
            "end": 308
          },
          "definite": false,
          "start": 294,
          "end": 308
        }
      ],
      "declare": false,
      "start": 288,
      "end": 309
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSJSDocNullableType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 318,
                    "end": 325
                  },
                  "start": 316,
                  "end": 325
                },
                "postfix": true,
                "id": 0,
                "original": null,
                "emitNode": null,
                "start": 318,
                "end": 326
              },
              "start": 316,
              "end": 326
            },
            "start": 315,
            "end": 326
          },
          "init": null,
          "definite": false,
          "start": 315,
          "end": 326
        }
      ],
      "declare": false,
      "start": 311,
      "end": 327
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSJSDocNullableType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 335,
                    "end": 340
                  },
                  "start": 333,
                  "end": 340
                },
                "postfix": true,
                "id": 0,
                "original": null,
                "emitNode": null,
                "start": 335,
                "end": 341
              },
              "start": 333,
              "end": 341
            },
            "start": 332,
            "end": 341
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 341
        }
      ],
      "declare": false,
      "start": 328,
      "end": 342
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSJSDocNullableType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 350,
                    "end": 354
                  },
                  "start": 348,
                  "end": 354
                },
                "postfix": true,
                "id": 0,
                "original": null,
                "emitNode": null,
                "start": 350,
                "end": 355
              },
              "start": 348,
              "end": 355
            },
            "start": 347,
            "end": 355
          },
          "init": null,
          "definite": false,
          "start": 347,
          "end": 355
        }
      ],
      "declare": false,
      "start": 343,
      "end": 356
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSJSDocNullableType",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 364,
                    "end": 373
                  },
                  "start": 362,
                  "end": 373
                },
                "postfix": true,
                "id": 0,
                "original": null,
                "emitNode": null,
                "start": 364,
                "end": 374
              },
              "start": 362,
              "end": 374
            },
            "start": 361,
            "end": 374
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 374
        }
      ],
      "declare": false,
      "start": 357,
      "end": 375
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 375
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
    "value": "a",
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
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 43,
    "end": 49
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 71,
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
    "value": "string",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 86,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 114,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 141,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "number",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 207,
    "end": 213
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
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
    "value": "?",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 267,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 283,
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
    "value": "d",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 318,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 364,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  }
]
```
