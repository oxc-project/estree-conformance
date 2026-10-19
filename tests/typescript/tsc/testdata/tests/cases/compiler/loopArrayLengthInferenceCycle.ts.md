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
        "name": "tokenize",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
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
                                "name": "matches",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 39,
                                "end": 46
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSStringKeyword",
                                    "start": 48,
                                    "end": 54
                                  },
                                  "start": 48,
                                  "end": 56
                                },
                                "start": 46,
                                "end": 56
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 39,
                              "end": 57
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "groups",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 58,
                                "end": 64
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 66,
                                      "end": 72
                                    },
                                    "start": 66,
                                    "end": 74
                                  },
                                  "start": 66,
                                  "end": 76
                                },
                                "start": 64,
                                "end": 76
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 58,
                              "end": 76
                            }
                          ],
                          "start": 37,
                          "end": 78
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 81,
                          "end": 85
                        }
                      ],
                      "start": 37,
                      "end": 85
                    },
                    "start": 35,
                    "end": 85
                  },
                  "start": 30,
                  "end": 85
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 88,
                  "end": 92
                },
                "definite": false,
                "start": 30,
                "end": 92
              }
            ],
            "declare": false,
            "start": 26,
            "end": 93
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 105,
              "end": 109
            },
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
                        "name": "matches",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 134,
                                  "end": 140
                                },
                                "start": 134,
                                "end": 142
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 145,
                                "end": 149
                              }
                            ],
                            "start": 134,
                            "end": 149
                          },
                          "start": 132,
                          "end": 149
                        },
                        "start": 125,
                        "end": 149
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 152,
                        "end": 156
                      },
                      "definite": false,
                      "start": 125,
                      "end": 156
                    }
                  ],
                  "declare": false,
                  "start": 121,
                  "end": 157
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
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 178,
                                  "end": 184
                                },
                                "start": 178,
                                "end": 186
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 189,
                                "end": 193
                              }
                            ],
                            "start": 178,
                            "end": 193
                          },
                          "start": 176,
                          "end": 193
                        },
                        "start": 170,
                        "end": 193
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 196,
                        "end": 200
                      },
                      "definite": false,
                      "start": 170,
                      "end": 200
                    }
                  ],
                  "declare": false,
                  "start": 166,
                  "end": 201
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 219
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
                              "name": "groupEntry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 241,
                              "end": 251
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 254,
                                  "end": 259
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "groups",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 260,
                                  "end": 266
                                },
                                "optional": false,
                                "computed": false,
                                "start": 254,
                                "end": 266
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 267,
                                "end": 268
                              },
                              "optional": false,
                              "computed": true,
                              "start": 254,
                              "end": 269
                            },
                            "definite": false,
                            "start": 241,
                            "end": 269
                          }
                        ],
                        "declare": false,
                        "start": 235,
                        "end": 270
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 283,
                            "end": 289
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "groupEntry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 292,
                            "end": 302
                          },
                          "start": 283,
                          "end": 302
                        },
                        "directive": null,
                        "start": 283,
                        "end": 303
                      }
                    ],
                    "start": 221,
                    "end": 313
                  },
                  "alternate": null,
                  "start": 210,
                  "end": 313
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "matches",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 329
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 332,
                      "end": 334
                    },
                    "start": 322,
                    "end": 334
                  },
                  "directive": null,
                  "start": 322,
                  "end": 335
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 354
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matches",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 374,
                              "end": 381
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 382,
                              "end": 388
                            },
                            "optional": false,
                            "computed": false,
                            "start": 374,
                            "end": 388
                          },
                          "operator": "!==",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "action",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 399
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 400,
                              "end": 406
                            },
                            "optional": false,
                            "computed": false,
                            "start": 393,
                            "end": 406
                          },
                          "start": 374,
                          "end": 406
                        },
                        "consequent": {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 418,
                              "end": 423
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 414,
                            "end": 425
                          },
                          "start": 408,
                          "end": 426
                        },
                        "alternate": null,
                        "start": 370,
                        "end": 426
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 444
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "matches",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 449,
                                  "end": 456
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "matches",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 449,
                                  "end": 456
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 449,
                                "end": 456
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "groups",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 458,
                                  "end": 464
                                },
                                "value": {
                                  "type": "ArrayExpression",
                                  "elements": [],
                                  "start": 466,
                                  "end": 468
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 458,
                                "end": 468
                              }
                            ],
                            "start": 447,
                            "end": 470
                          },
                          "start": 439,
                          "end": 470
                        },
                        "directive": null,
                        "start": 439,
                        "end": 471
                      }
                    ],
                    "start": 356,
                    "end": 481
                  },
                  "alternate": null,
                  "start": 344,
                  "end": 481
                }
              ],
              "start": 111,
              "end": 487
            },
            "start": 98,
            "end": 487
          }
        ],
        "start": 20,
        "end": 489
      },
      "expression": false,
      "start": 0,
      "end": 489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 489
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
    "value": "tokenize",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 79,
    "end": 80
  },
  {
    "type": "Null",
    "value": "null",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Null",
    "value": "null",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 143,
    "end": 144
  },
  {
    "type": "Null",
    "value": "null",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Null",
    "value": "null",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 170,
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
    "value": "string",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 187,
    "end": 188
  },
  {
    "type": "Null",
    "value": "null",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Null",
    "value": "null",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "groupEntry",
    "start": 241,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "groupEntry",
    "start": 292,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 374,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 408,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  }
]
```
