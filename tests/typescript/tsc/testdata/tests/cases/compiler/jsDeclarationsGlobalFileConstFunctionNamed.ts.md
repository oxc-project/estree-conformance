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
            "name": "SomeConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 21
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 44,
                        "end": 48
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 49,
                        "end": 50
                      },
                      "optional": false,
                      "computed": false,
                      "start": 44,
                      "end": 50
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 53,
                      "end": 54
                    },
                    "start": 44,
                    "end": 54
                  },
                  "directive": null,
                  "start": 44,
                  "end": 55
                }
              ],
              "start": 41,
              "end": 57
            },
            "expression": false,
            "start": 24,
            "end": 57
          },
          "definite": false,
          "start": 6,
          "end": 57
        }
      ],
      "declare": false,
      "start": 0,
      "end": 58
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
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 82
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 102,
              "end": 105
            },
            "expression": false,
            "start": 85,
            "end": 105
          },
          "definite": false,
          "start": 66,
          "end": 105
        }
      ],
      "declare": false,
      "start": 60,
      "end": 106
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 136
          },
          "optional": false,
          "computed": false,
          "start": 107,
          "end": 136
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 139,
          "end": 144
        },
        "start": 107,
        "end": 144
      },
      "directive": null,
      "start": 107,
      "end": 145
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
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 169
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 186
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 192,
                        "end": 196
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 198
                      },
                      "optional": false,
                      "computed": false,
                      "start": 192,
                      "end": 198
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 201,
                      "end": 202
                    },
                    "start": 192,
                    "end": 202
                  },
                  "directive": null,
                  "start": 192,
                  "end": 203
                }
              ],
              "start": 189,
              "end": 205
            },
            "expression": false,
            "start": 172,
            "end": 205
          },
          "definite": false,
          "start": 153,
          "end": 205
        }
      ],
      "declare": false,
      "start": 147,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 236
          },
          "optional": false,
          "computed": false,
          "start": 207,
          "end": 236
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 239,
          "end": 244
        },
        "start": 207,
        "end": 244
      },
      "directive": null,
      "start": 207,
      "end": 245
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
            "name": "SelfReference",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 266
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 283
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
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 298,
                        "end": 302
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 319
                      },
                      "start": 298,
                      "end": 319
                    },
                    "prefix": true,
                    "start": 296,
                    "end": 320
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 338
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 329,
                      "end": 340
                    },
                    "start": 322,
                    "end": 341
                  },
                  "alternate": null,
                  "start": 292,
                  "end": 341
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 346,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 352
                      },
                      "optional": false,
                      "computed": false,
                      "start": 346,
                      "end": 352
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 355,
                      "end": 356
                    },
                    "start": 346,
                    "end": 356
                  },
                  "directive": null,
                  "start": 346,
                  "end": 357
                }
              ],
              "start": 286,
              "end": 359
            },
            "expression": false,
            "start": 269,
            "end": 359
          },
          "definite": false,
          "start": 253,
          "end": 359
        }
      ],
      "declare": false,
      "start": 247,
      "end": 359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelfReference",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 373
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 386
          },
          "optional": false,
          "computed": false,
          "start": 360,
          "end": 386
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 389,
          "end": 394
        },
        "start": 360,
        "end": 394
      },
      "directive": null,
      "start": 360,
      "end": 395
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 395
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
    "value": "SomeConstructor",
    "start": 6,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 24,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
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
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor2",
    "start": 66,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor2",
    "start": 107,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "staticMember",
    "start": 124,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor3",
    "start": 153,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 172,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 201,
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
    "type": "Identifier",
    "value": "SomeConstructor3",
    "start": 207,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "staticMember",
    "start": 224,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 247,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "SelfReference",
    "start": 253,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 269,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 298,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 303,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "SelfReference",
    "start": 360,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "staticMember",
    "start": 374,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  }
]
```
