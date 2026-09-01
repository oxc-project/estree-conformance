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
        "start": 28,
        "end": 29
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 47
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 74,
                            "end": 80
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 83,
                            "end": 92
                          }
                        ],
                        "start": 74,
                        "end": 92
                      },
                      "start": 72,
                      "end": 92
                    },
                    "start": 55,
                    "end": 92
                  },
                  "readonly": false,
                  "static": false,
                  "start": 48,
                  "end": 92
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 94,
                "end": 96
              },
              "expression": false,
              "start": 47,
              "end": 96
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 36,
            "end": 96
          }
        ],
        "start": 30,
        "end": 98
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 98
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
        "start": 106,
        "end": 107
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 138,
                        "end": 144
                      },
                      "start": 136,
                      "end": 144
                    },
                    "start": 133,
                    "end": 144
                  },
                  "readonly": false,
                  "static": false,
                  "start": 126,
                  "end": 144
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 146,
                "end": 148
              },
              "expression": false,
              "start": 125,
              "end": 148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 148
          }
        ],
        "start": 108,
        "end": 150
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 150
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
            "start": 158,
            "end": 159
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "123",
                "raw": "\"123\"",
                "start": 168,
                "end": 173
              }
            ],
            "start": 162,
            "end": 174
          },
          "definite": false,
          "start": 158,
          "end": 174
        }
      ],
      "declare": false,
      "start": 152,
      "end": 175
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "start": 181,
          "end": 195
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 199,
          "end": 218
        },
        "start": 181,
        "end": 218
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
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
                    "start": 232,
                    "end": 233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 251
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 251
                }
              ],
              "start": 226,
              "end": 252
            },
            "directive": null,
            "start": 226,
            "end": 252
          }
        ],
        "start": 220,
        "end": 254
      },
      "alternate": null,
      "start": 177,
      "end": 254
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 279
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "start": 283,
          "end": 297
        },
        "start": 260,
        "end": 297
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
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
                    "start": 311,
                    "end": 312
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 330
                  },
                  "optional": false,
                  "computed": false,
                  "start": 311,
                  "end": 330
                }
              ],
              "start": 305,
              "end": 331
            },
            "directive": null,
            "start": 305,
            "end": 331
          }
        ],
        "start": 299,
        "end": 333
      },
      "alternate": null,
      "start": 256,
      "end": 333
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 353
        },
        "start": 339,
        "end": 353
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringOrUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 384
              },
              "optional": false,
              "computed": false,
              "start": 365,
              "end": 384
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
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
                          "start": 402,
                          "end": 403
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 402,
                        "end": 421
                      }
                    ],
                    "start": 396,
                    "end": 422
                  },
                  "directive": null,
                  "start": 396,
                  "end": 422
                }
              ],
              "start": 386,
              "end": 428
            },
            "alternate": null,
            "start": 361,
            "end": 428
          }
        ],
        "start": 355,
        "end": 430
      },
      "alternate": null,
      "start": 335,
      "end": 430
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 437
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringOrUndefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 455
        },
        "optional": false,
        "computed": false,
        "start": 436,
        "end": 455
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "start": 467,
              "end": 481
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 498
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
                          "start": 499,
                          "end": 500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 518
                        },
                        "optional": false,
                        "computed": false,
                        "start": 499,
                        "end": 518
                      }
                    ],
                    "start": 493,
                    "end": 519
                  },
                  "directive": null,
                  "start": 493,
                  "end": 519
                }
              ],
              "start": 483,
              "end": 525
            },
            "alternate": null,
            "start": 463,
            "end": 525
          }
        ],
        "start": 457,
        "end": 527
      },
      "alternate": null,
      "start": 432,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 527
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 36,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 55,
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
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 177,
    "end": 179
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
    "type": "Keyword",
    "value": "instanceof",
    "start": 183,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 201,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 234,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 262,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 280,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 285,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 313,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 341,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 367,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 404,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 438,
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
    "type": "Keyword",
    "value": "if",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 469,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 480,
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
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 493,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "stringOrUndefined",
    "start": 501,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  }
]
```
