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
          "name": "array",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 21
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "name": "Recursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 44
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 56
                  },
                  "typeArguments": null,
                  "start": 47,
                  "end": 56
                },
                "start": 47,
                "end": 58
              },
              "declare": false,
              "start": 30,
              "end": 59
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 71,
                    "end": 75
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 79,
                    "end": 86
                  },
                  "start": 71,
                  "end": 86
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 99
                  },
                  "typeArguments": null,
                  "start": 90,
                  "end": 99
                },
                "start": 71,
                "end": 99
              },
              "start": 64,
              "end": 100
            }
          ],
          "start": 24,
          "end": 102
        },
        "expression": false,
        "start": 7,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "tuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 124
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "name": "Recursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 147
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Recursive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 160
                  }
                ],
                "start": 150,
                "end": 161
              },
              "declare": false,
              "start": 133,
              "end": 162
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 174,
                    "end": 178
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 182,
                    "end": 189
                  },
                  "start": 174,
                  "end": 189
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 202
                  },
                  "typeArguments": null,
                  "start": 193,
                  "end": 202
                },
                "start": 174,
                "end": 202
              },
              "start": 167,
              "end": 203
            }
          ],
          "start": 127,
          "end": 205
        },
        "expression": false,
        "start": 110,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 205
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 235
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "name": "Recursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 258
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Recursive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 280
                      },
                      "typeArguments": null,
                      "start": 271,
                      "end": 280
                    }
                  ],
                  "start": 270,
                  "end": 281
                },
                "start": 261,
                "end": 281
              },
              "declare": false,
              "start": 244,
              "end": 282
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 294,
                    "end": 298
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 302,
                    "end": 309
                  },
                  "start": 294,
                  "end": 309
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 313,
                  "end": 322
                },
                "start": 294,
                "end": 322
              },
              "start": 287,
              "end": 323
            }
          ],
          "start": 238,
          "end": 325
        },
        "expression": false,
        "start": 213,
        "end": 325
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 206,
      "end": 325
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "union",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 347
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "name": "Recursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 370
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 373,
                    "end": 379
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Recursive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 391
                      },
                      "typeArguments": null,
                      "start": 382,
                      "end": 391
                    },
                    "start": 382,
                    "end": 393
                  }
                ],
                "start": 373,
                "end": 393
              },
              "declare": false,
              "start": 356,
              "end": 394
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 406,
                    "end": 410
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 414,
                    "end": 421
                  },
                  "start": 406,
                  "end": 421
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 434
                  },
                  "typeArguments": null,
                  "start": 425,
                  "end": 434
                },
                "start": 406,
                "end": 434
              },
              "start": 399,
              "end": 435
            }
          ],
          "start": 350,
          "end": 437
        },
        "expression": false,
        "start": 333,
        "end": 437
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 326,
      "end": 437
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 438
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
    "value": "array",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 35,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 47,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 64,
    "end": 70
  },
  {
    "type": "Null",
    "value": "null",
    "start": 71,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 79,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 90,
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
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 110,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 151,
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
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 167,
    "end": 173
  },
  {
    "type": "Null",
    "value": "null",
    "start": 174,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 182,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 193,
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
    "type": "Keyword",
    "value": "export",
    "start": 206,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 213,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "readonlyTuple",
    "start": 222,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 249,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 261,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 271,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 287,
    "end": 293
  },
  {
    "type": "Null",
    "value": "null",
    "start": 294,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 299,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 302,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 310,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 326,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 356,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 361,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 382,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 399,
    "end": 405
  },
  {
    "type": "Null",
    "value": "null",
    "start": 406,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 411,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 414,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 422,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 425,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  }
]
```
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
          "name": "RecursiveArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 26
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecursiveArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 43
            },
            "typeArguments": null,
            "start": 29,
            "end": 43
          },
          "start": 29,
          "end": 45
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecursiveTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 73
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 100
                },
                "typeArguments": null,
                "start": 86,
                "end": 100
              }
            ],
            "start": 85,
            "end": 101
          },
          "start": 76,
          "end": 101
        },
        "declare": false,
        "start": 54,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 102
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
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 138
                },
                "typeArguments": null,
                "start": 124,
                "end": 138
              },
              "start": 122,
              "end": 138
            },
            "start": 117,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 138
        }
      ],
      "declare": true,
      "start": 103,
      "end": 139
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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 175
                },
                "typeArguments": null,
                "start": 161,
                "end": 175
              },
              "start": 159,
              "end": 175
            },
            "start": 154,
            "end": 175
          },
          "init": null,
          "definite": false,
          "start": 154,
          "end": 175
        }
      ],
      "declare": true,
      "start": 140,
      "end": 176
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "namedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 200
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 208
            },
            "definite": false,
            "start": 190,
            "end": 208
          }
        ],
        "declare": false,
        "start": 184,
        "end": 209
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 177,
      "end": 209
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "namedTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 233
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 241
            },
            "definite": false,
            "start": 223,
            "end": 241
          }
        ],
        "declare": false,
        "start": 217,
        "end": 242
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 242
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "finite",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 265
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 285
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSTupleType",
                                "elementTypes": [
                                  {
                                    "type": "TSTupleType",
                                    "elementTypes": [
                                      {
                                        "type": "TSTupleType",
                                        "elementTypes": [
                                          {
                                            "type": "TSTupleType",
                                            "elementTypes": [
                                              {
                                                "type": "TSTupleType",
                                                "elementTypes": [
                                                  {
                                                    "type": "TSTupleType",
                                                    "elementTypes": [
                                                      {
                                                        "type": "TSTupleType",
                                                        "elementTypes": [
                                                          {
                                                            "type": "TSTupleType",
                                                            "elementTypes": [
                                                              {
                                                                "type": "TSTupleType",
                                                                "elementTypes": [
                                                                  {
                                                                    "type": "TSNumberKeyword",
                                                                    "start": 301,
                                                                    "end": 307
                                                                  }
                                                                ],
                                                                "start": 300,
                                                                "end": 308
                                                              }
                                                            ],
                                                            "start": 299,
                                                            "end": 309
                                                          }
                                                        ],
                                                        "start": 298,
                                                        "end": 310
                                                      }
                                                    ],
                                                    "start": 297,
                                                    "end": 311
                                                  }
                                                ],
                                                "start": 296,
                                                "end": 312
                                              }
                                            ],
                                            "start": 295,
                                            "end": 313
                                          }
                                        ],
                                        "start": 294,
                                        "end": 314
                                      }
                                    ],
                                    "start": 293,
                                    "end": 315
                                  }
                                ],
                                "start": 292,
                                "end": 316
                              }
                            ],
                            "start": 291,
                            "end": 317
                          }
                        ],
                        "start": 290,
                        "end": 318
                      }
                    ],
                    "start": 289,
                    "end": 319
                  }
                ],
                "start": 288,
                "end": 320
              },
              "declare": false,
              "start": 274,
              "end": 321
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 333,
                    "end": 337
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 341,
                    "end": 348
                  },
                  "start": 333,
                  "end": 348
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 352,
                  "end": 358
                },
                "start": 333,
                "end": 358
              },
              "start": 326,
              "end": 359
            }
          ],
          "start": 268,
          "end": 361
        },
        "expression": false,
        "start": 250,
        "end": 361
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 243,
      "end": 361
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "finiteArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 389
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 409
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSArrayType",
                                        "elementType": {
                                          "type": "TSNumberKeyword",
                                          "start": 412,
                                          "end": 418
                                        },
                                        "start": 412,
                                        "end": 420
                                      },
                                      "start": 412,
                                      "end": 422
                                    },
                                    "start": 412,
                                    "end": 424
                                  },
                                  "start": 412,
                                  "end": 426
                                },
                                "start": 412,
                                "end": 428
                              },
                              "start": 412,
                              "end": 430
                            },
                            "start": 412,
                            "end": 432
                          },
                          "start": 412,
                          "end": 434
                        },
                        "start": 412,
                        "end": 436
                      },
                      "start": 412,
                      "end": 438
                    },
                    "start": 412,
                    "end": 440
                  },
                  "start": 412,
                  "end": 442
                },
                "start": 412,
                "end": 444
              },
              "declare": false,
              "start": 398,
              "end": 445
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 457,
                    "end": 461
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 465,
                    "end": 472
                  },
                  "start": 457,
                  "end": 472
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 482
                  },
                  "typeArguments": null,
                  "start": 476,
                  "end": 482
                },
                "start": 457,
                "end": 482
              },
              "start": 450,
              "end": 483
            }
          ],
          "start": 392,
          "end": 485
        },
        "expression": false,
        "start": 369,
        "end": 485
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 362,
      "end": 485
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 485
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
    "value": "RecursiveArray",
    "start": 12,
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
    "value": "RecursiveArray",
    "start": 29,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
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
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "RecursiveTuple",
    "start": 59,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "RecursiveTuple",
    "start": 86,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "RecursiveArray",
    "start": 124,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "RecursiveTuple",
    "start": 161,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 177,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "namedArray",
    "start": 190,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "namedTuple",
    "start": 223,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 243,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 250,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "finite",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 274,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332
  },
  {
    "type": "Null",
    "value": "null",
    "start": 333,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 341,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 362,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 369,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "finiteArray",
    "start": 378,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 398,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "[",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 450,
    "end": 456
  },
  {
    "type": "Null",
    "value": "null",
    "start": 457,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 465,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 473,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  }
]
```
