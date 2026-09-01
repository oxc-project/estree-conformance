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
            "name": "myNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "start": 29,
            "end": 41
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 44,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
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
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 82
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 84,
                            "end": 90
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 93,
                            "end": 97
                          }
                        ],
                        "start": 84,
                        "end": 97
                      },
                      "start": 82,
                      "end": 97
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 79,
                    "end": 97
                  }
                ],
                "start": 77,
                "end": 99
              },
              "start": 75,
              "end": 99
            },
            "start": 56,
            "end": 99
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 109,
                  "end": 110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 104,
                "end": 110
              }
            ],
            "start": 102,
            "end": 112
          },
          "definite": false,
          "start": 56,
          "end": 112
        }
      ],
      "declare": false,
      "start": 50,
      "end": 113
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
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 126
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 144,
                    "end": 150
                  },
                  "start": 142,
                  "end": 150
                },
                "start": 139,
                "end": 150
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 168
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 171,
                      "end": 172
                    },
                    "start": 165,
                    "end": 172
                  },
                  "start": 158,
                  "end": 173
                }
              ],
              "start": 152,
              "end": 175
            },
            "expression": false,
            "start": 129,
            "end": 175
          },
          "definite": false,
          "start": 120,
          "end": 175
        }
      ],
      "declare": false,
      "start": 114,
      "end": 175
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 204
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 209,
          "end": 213
        },
        "start": 181,
        "end": 213
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 249
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 249
            }
          ],
          "optional": false,
          "start": 219,
          "end": 250
        },
        "directive": null,
        "start": 219,
        "end": 251
      },
      "alternate": null,
      "start": 177,
      "end": 251
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 256,
          "end": 279
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 290
        },
        "start": 256,
        "end": 290
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 302
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 326
            }
          ],
          "optional": false,
          "start": 296,
          "end": 327
        },
        "directive": null,
        "start": 296,
        "end": 328
      },
      "alternate": null,
      "start": 252,
      "end": 328
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 353
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 357
          },
          "optional": false,
          "computed": false,
          "start": 334,
          "end": 357
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 362,
          "end": 366
        },
        "start": 334,
        "end": 366
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 378
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 379,
              "end": 402
            }
          ],
          "optional": false,
          "start": 372,
          "end": 403
        },
        "directive": null,
        "start": 372,
        "end": 404
      },
      "alternate": null,
      "start": 330,
      "end": 404
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 444
          },
          "optional": false,
          "computed": false,
          "start": 421,
          "end": 444
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 449,
          "end": 455
        },
        "start": 421,
        "end": 455
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 467
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 487
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 491
              },
              "optional": false,
              "computed": false,
              "start": 468,
              "end": 491
            }
          ],
          "optional": false,
          "start": 461,
          "end": 492
        },
        "directive": null,
        "start": 461,
        "end": 493
      },
      "alternate": null,
      "start": 417,
      "end": 493
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 517
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "type": "TSNumberKeyword",
                  "start": 521,
                  "end": 527
                },
                {
                  "type": "TSNullKeyword",
                  "start": 530,
                  "end": 534
                }
              ],
              "start": 521,
              "end": 534
            },
            "start": 519,
            "end": 534
          },
          "start": 518,
          "end": 534
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "myNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 557
              },
              "start": 545,
              "end": 557
            },
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 578,
                            "end": 584
                          },
                          "start": 576,
                          "end": 584
                        },
                        "start": 575,
                        "end": 584
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 588
                      },
                      "definite": false,
                      "start": 575,
                      "end": 588
                    }
                  ],
                  "declare": false,
                  "start": 569,
                  "end": 589
                }
              ],
              "start": 559,
              "end": 605
            },
            "alternate": null,
            "start": 542,
            "end": 605
          }
        ],
        "start": 536,
        "end": 607
      },
      "expression": false,
      "start": 507,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 607
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "myNull",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Null",
    "value": "null",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Null",
    "value": "null",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 56,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "val",
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
    "value": "number",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Null",
    "value": "null",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "val",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 158,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "objWithValMaybeNull",
    "start": 181,
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
    "value": "val",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 205,
    "end": 208
  },
  {
    "type": "Null",
    "value": "null",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 226,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 256,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "myNull",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 303,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 334,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 358,
    "end": 361
  },
  {
    "type": "Null",
    "value": "null",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 379,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 421,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "myNull",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 461,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "objWithValMaybeNull",
    "start": 468,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 528,
    "end": 529
  },
  {
    "type": "Null",
    "value": "null",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "myNull",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 569,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 578,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  }
]
```
