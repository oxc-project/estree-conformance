__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 22,
                  "end": 23
                },
                "start": 22,
                "end": 23
              },
              "start": 20,
              "end": 23
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 23
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 39
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "start": 50,
                          "end": 54
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 61
                        },
                        "optional": false,
                        "computed": false,
                        "start": 50,
                        "end": 61
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 64,
                        "end": 65
                      },
                      "start": 50,
                      "end": 65
                    },
                    "directive": null,
                    "start": 50,
                    "end": 65
                  }
                ],
                "start": 42,
                "end": 71
              },
              "expression": false,
              "start": 39,
              "end": 71
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 28,
            "end": 71
          }
        ],
        "start": 8,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 97,
                  "end": 98
                },
                "start": 97,
                "end": 98
              },
              "start": 95,
              "end": 98
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 89,
            "end": 98
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 114
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "start": 125,
                          "end": 129
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 136
                        },
                        "optional": false,
                        "computed": false,
                        "start": 125,
                        "end": 136
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 139,
                        "end": 140
                      },
                      "start": 125,
                      "end": 140
                    },
                    "directive": null,
                    "start": 125,
                    "end": 140
                  }
                ],
                "start": 117,
                "end": 146
              },
              "expression": false,
              "start": 114,
              "end": 146
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 103,
            "end": 146
          }
        ],
        "start": 83,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getTypedArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
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
          "name": "flag",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 179,
              "end": 186
            },
            "start": 177,
            "end": 186
          },
          "start": 173,
          "end": 186
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "flag",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 203
              },
              "consequent": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "typeArguments": null,
                "arguments": [],
                "start": 206,
                "end": 213
              },
              "alternate": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                },
                "typeArguments": null,
                "arguments": [],
                "start": 216,
                "end": 223
              },
              "start": 199,
              "end": 223
            },
            "start": 192,
            "end": 224
          }
        ],
        "start": 188,
        "end": 226
      },
      "expression": false,
      "start": 150,
      "end": 226
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getTypedArrayConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "flag",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 267,
              "end": 274
            },
            "start": 265,
            "end": 274
          },
          "start": 261,
          "end": 274
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "flag",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 291
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "start": 287,
              "end": 299
            },
            "start": 280,
            "end": 300
          }
        ],
        "start": 276,
        "end": 302
      },
      "expression": false,
      "start": 227,
      "end": 302
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
            "start": 309,
            "end": 310
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getTypedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 326
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 327,
                "end": 331
              }
            ],
            "optional": false,
            "start": 313,
            "end": 332
          },
          "definite": false,
          "start": 309,
          "end": 332
        }
      ],
      "declare": false,
      "start": 303,
      "end": 333
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
            "typeAnnotation": null,
            "start": 362,
            "end": 363
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getTypedArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 390
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 391,
                "end": 396
              }
            ],
            "optional": false,
            "start": 366,
            "end": 397
          },
          "definite": false,
          "start": 362,
          "end": 397
        }
      ],
      "declare": false,
      "start": 356,
      "end": 398
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 441
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "start": 440,
          "end": 454
        },
        "prefix": true,
        "start": 438,
        "end": 455
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 468
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 472
                },
                "optional": false,
                "computed": false,
                "start": 461,
                "end": 472
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 474
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 481
                  },
                  "optional": false,
                  "computed": false,
                  "start": 473,
                  "end": 481
                }
              ],
              "optional": false,
              "start": 461,
              "end": 482
            },
            "directive": null,
            "start": 461,
            "end": 483
          }
        ],
        "start": 457,
        "end": 550
      },
      "alternate": null,
      "start": 434,
      "end": 550
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 550
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 28,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "length",
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
    "type": "Numeric",
    "value": "1",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "length",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 103,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "getTypedArray",
    "start": 159,
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
    "value": "flag",
    "start": 173,
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
    "value": "boolean",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 192,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 227,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "getTypedArrayConstructor",
    "start": 236,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 280,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "getTypedArray",
    "start": 313,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "getTypedArrayConstructor",
    "start": 366,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 442,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 461,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
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
    "start": 549,
    "end": 550
  }
]
```
