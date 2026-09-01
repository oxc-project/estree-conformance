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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 29
          }
        ],
        "start": 12,
        "end": 30
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
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
                    "start": 42,
                    "end": 43
                  },
                  "typeArguments": null,
                  "start": 42,
                  "end": 43
                },
                "start": 36,
                "end": 43
              },
              "start": 34,
              "end": 44
            },
            "start": 32,
            "end": 44
          },
          "start": 31,
          "end": 44
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    },
                    "start": 57,
                    "end": 65
                  },
                  "start": 56,
                  "end": 65
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "definite": false,
                "start": 56,
                "end": 69
              }
            ],
            "declare": false,
            "start": 52,
            "end": 70
          }
        ],
        "start": 46,
        "end": 82
      },
      "expression": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "methodFnLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 136
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
                "start": 137,
                "end": 138
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 147,
                "end": 149
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 137,
              "end": 149
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
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
                    "start": 167,
                    "end": 168
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 168
                },
                "start": 161,
                "end": 168
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 151,
              "end": 168
            }
          ],
          "start": 136,
          "end": 169
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                  "start": 175,
                  "end": 176
                },
                "typeArguments": null,
                "start": 175,
                "end": 176
              },
              "start": 173,
              "end": 176
            },
            "start": 170,
            "end": 176
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "methodKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "typeArguments": null,
                "start": 189,
                "end": 190
              },
              "start": 187,
              "end": 190
            },
            "start": 178,
            "end": 190
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 193,
            "end": 199
          },
          "start": 191,
          "end": 199
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 214
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 220
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methodKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 230
                    },
                    "optional": false,
                    "computed": true,
                    "start": 217,
                    "end": 231
                  },
                  "definite": false,
                  "start": 212,
                  "end": 231
                }
              ],
              "declare": false,
              "start": 206,
              "end": 232
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 250
                  },
                  "prefix": true,
                  "start": 241,
                  "end": 250
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 255,
                  "end": 265
                },
                "start": 241,
                "end": 265
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 284,
                      "end": 285
                    },
                    "start": 277,
                    "end": 286
                  }
                ],
                "start": 267,
                "end": 292
              },
              "alternate": null,
              "start": 237,
              "end": 292
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 313
                },
                "optional": false,
                "computed": false,
                "start": 304,
                "end": 313
              },
              "start": 297,
              "end": 314
            }
          ],
          "start": 200,
          "end": 316
        },
        "expression": false,
        "start": 113,
        "end": 316
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 106,
      "end": 316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getField",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 357
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
              "start": 358,
              "end": 359
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 368,
              "end": 374
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 358,
            "end": 374
          }
        ],
        "start": 357,
        "end": 375
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 380
                  },
                  "typeArguments": null,
                  "start": 379,
                  "end": 380
                },
                {
                  "type": "TSNullKeyword",
                  "start": 383,
                  "end": 387
                }
              ],
              "start": 379,
              "end": 387
            },
            "start": 377,
            "end": 387
          },
          "start": 376,
          "end": 387
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                  "start": 398,
                  "end": 399
                },
                "typeArguments": null,
                "start": 398,
                "end": 399
              },
              "start": 392,
              "end": 399
            },
            "start": 390,
            "end": 399
          },
          "start": 389,
          "end": 399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 419
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 423
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 427
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 429
                    },
                    "optional": false,
                    "computed": true,
                    "start": 426,
                    "end": 430
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 433,
                    "end": 437
                  },
                  "start": 422,
                  "end": 437
                },
                "definite": false,
                "start": 413,
                "end": 437
              }
            ],
            "declare": false,
            "start": 407,
            "end": 438
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 456
            },
            "start": 443,
            "end": 457
          }
        ],
        "start": 401,
        "end": 481
      },
      "expression": false,
      "start": 340,
      "end": 481
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 481
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 106,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "methodFnLength",
    "start": 122,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
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
    "value": "K",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "methodKey",
    "start": 178,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 189,
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
    "type": "Identifier",
    "value": "number",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 206,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "methodKey",
    "start": 221,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 241,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 251,
    "end": 254
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 255,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 277,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 297,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 340,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "getField",
    "start": 349,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 360,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 381,
    "end": 382
  },
  {
    "type": "Null",
    "value": "null",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 407,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Null",
    "value": "null",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 443,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  }
]
```
