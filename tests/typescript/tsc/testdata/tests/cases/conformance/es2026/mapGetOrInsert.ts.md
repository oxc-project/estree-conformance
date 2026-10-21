__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 20,
                  "end": 26
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                }
              ],
              "start": 19,
              "end": 35
            },
            "arguments": [],
            "start": 12,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "inserted",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "start": 45,
            "end": 61
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOrInsert",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 79
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 79
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 80,
                "end": 83
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 85,
                "end": 86
              }
            ],
            "optional": false,
            "start": 64,
            "end": 87
          },
          "definite": false,
          "start": 45,
          "end": 87
        }
      ],
      "declare": false,
      "start": 39,
      "end": 88
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
            "name": "computed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "start": 95,
            "end": 111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 117
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOrInsertComputed",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 114,
              "end": 137
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 138,
                "end": 141
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 146
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 153
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 160
                  },
                  "optional": false,
                  "computed": false,
                  "start": 150,
                  "end": 160
                },
                "id": null,
                "generator": false,
                "start": 143,
                "end": 160
              }
            ],
            "optional": false,
            "start": 114,
            "end": 161
          },
          "definite": false,
          "start": 95,
          "end": 161
        }
      ],
      "declare": false,
      "start": 89,
      "end": 162
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
            "name": "weakMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 177
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 191
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSObjectKeyword",
                  "start": 192,
                  "end": 198
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 200,
                  "end": 206
                }
              ],
              "start": 191,
              "end": 207
            },
            "arguments": [],
            "start": 180,
            "end": 209
          },
          "definite": false,
          "start": 170,
          "end": 209
        }
      ],
      "declare": false,
      "start": 164,
      "end": 210
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
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 223,
            "end": 225
          },
          "definite": false,
          "start": 217,
          "end": 225
        }
      ],
      "declare": false,
      "start": 211,
      "end": 226
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
            "name": "weakInserted",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 247,
                "end": 253
              },
              "start": 245,
              "end": 253
            },
            "start": 233,
            "end": 253
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "weakMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOrInsert",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 275
              },
              "optional": false,
              "computed": false,
              "start": 256,
              "end": 275
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 279
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 281,
                "end": 282
              }
            ],
            "optional": false,
            "start": 256,
            "end": 283
          },
          "definite": false,
          "start": 233,
          "end": 283
        }
      ],
      "declare": false,
      "start": 227,
      "end": 284
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
            "name": "weakComputed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 305,
                "end": 311
              },
              "start": 303,
              "end": 311
            },
            "start": 291,
            "end": 311
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "weakMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 321
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOrInsertComputed",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 341
              },
              "optional": false,
              "computed": false,
              "start": 314,
              "end": 341
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 345
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 352
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 361
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 369
                    },
                    "start": 356,
                    "end": 369
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 372,
                    "end": 373
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 376,
                    "end": 377
                  },
                  "start": 356,
                  "end": 377
                },
                "id": null,
                "generator": false,
                "start": 347,
                "end": 377
              }
            ],
            "optional": false,
            "start": 314,
            "end": 378
          },
          "definite": false,
          "start": 291,
          "end": 378
        }
      ],
      "declare": false,
      "start": 285,
      "end": 379
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
            "name": "readonlyMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 420,
                      "end": 426
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 428,
                      "end": 434
                    }
                  ],
                  "start": 419,
                  "end": 435
                },
                "start": 408,
                "end": 435
              },
              "start": 406,
              "end": 435
            },
            "start": 395,
            "end": 435
          },
          "init": null,
          "definite": false,
          "start": 395,
          "end": 435
        }
      ],
      "declare": true,
      "start": 381,
      "end": 436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 448
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getOrInsert",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 460
          },
          "optional": false,
          "computed": false,
          "start": 437,
          "end": 460
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 461,
            "end": 464
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 466,
            "end": 467
          }
        ],
        "optional": false,
        "start": 437,
        "end": 468
      },
      "directive": null,
      "start": 437,
      "end": 469
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 469
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
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
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "inserted",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
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
    "value": "map",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 68,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
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
    "value": "map",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 118,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 147,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "weakMap",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "weakInserted",
    "start": 233,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "weakMap",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 264,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "weakComputed",
    "start": 291,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "weakMap",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 322,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 347,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 353,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 362,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 370,
    "end": 371
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 381,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 389,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "readonlyMap",
    "start": 395,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "ReadonlyMap",
    "start": 408,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "readonlyMap",
    "start": 437,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 449,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  }
]
```
