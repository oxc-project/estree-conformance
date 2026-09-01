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
          "name": "repro",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 81
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "board",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 89,
                  "end": 97
                },
                "start": 89,
                "end": 99
              },
              "start": 87,
              "end": 99
            },
            "start": 82,
            "end": 99
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 106,
                    "end": 112
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 115,
                    "end": 124
                  }
                ],
                "start": 106,
                "end": 124
              },
              "start": 104,
              "end": 124
            },
            "start": 101,
            "end": 124
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 127,
            "end": 131
          },
          "start": 125,
          "end": 131
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pos",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 144
                },
                "prefix": true,
                "start": 140,
                "end": 144
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": null,
                "start": 146,
                "end": 153
              },
              "alternate": null,
              "start": 136,
              "end": 153
            },
            {
              "type": "ForOfStatement",
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pattern",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 174
                    },
                    "init": null,
                    "definite": false,
                    "start": 167,
                    "end": 174
                  }
                ],
                "declare": false,
                "start": 161,
                "end": 174
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 187
                        },
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 191,
                                "end": 192
                              },
                              "prefix": true,
                              "start": 190,
                              "end": 192
                            },
                            {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 195,
                                "end": 196
                              },
                              "prefix": true,
                              "start": 194,
                              "end": 196
                            }
                          ],
                          "start": 189,
                          "end": 197
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 181,
                        "end": 197
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "intermediate",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 199,
                          "end": 211
                        },
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 215,
                                "end": 216
                              },
                              "prefix": true,
                              "start": 214,
                              "end": 216
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 218,
                              "end": 219
                            }
                          ],
                          "start": 213,
                          "end": 220
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 199,
                        "end": 220
                      }
                    ],
                    "start": 179,
                    "end": 222
                  }
                ],
                "start": 178,
                "end": 223
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
                          "name": "targetR",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 244
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pos",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 247,
                            "end": 250
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pattern",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 253,
                                "end": 260
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 267
                              },
                              "optional": false,
                              "computed": false,
                              "start": 253,
                              "end": 267
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 268,
                              "end": 269
                            },
                            "optional": false,
                            "computed": true,
                            "start": 253,
                            "end": 270
                          },
                          "start": 247,
                          "end": 270
                        },
                        "definite": false,
                        "start": 237,
                        "end": 270
                      }
                    ],
                    "declare": false,
                    "start": 231,
                    "end": 271
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
                          "name": "targetC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 282,
                          "end": 289
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pos",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 292,
                            "end": 295
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pattern",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 298,
                                "end": 305
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 306,
                                "end": 312
                              },
                              "optional": false,
                              "computed": false,
                              "start": 298,
                              "end": 312
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 313,
                              "end": 314
                            },
                            "optional": false,
                            "computed": true,
                            "start": 298,
                            "end": 315
                          },
                          "start": 292,
                          "end": 315
                        },
                        "definite": false,
                        "start": 282,
                        "end": 315
                      }
                    ],
                    "declare": false,
                    "start": 276,
                    "end": 316
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "board",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 330
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "targetR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 331,
                            "end": 338
                          },
                          "optional": false,
                          "computed": true,
                          "start": 325,
                          "end": 339
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "targetC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 340,
                          "end": 347
                        },
                        "optional": false,
                        "computed": true,
                        "start": 325,
                        "end": 348
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 353,
                        "end": 354
                      },
                      "start": 325,
                      "end": 354
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 356,
                      "end": 358
                    },
                    "alternate": null,
                    "start": 321,
                    "end": 358
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ir",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 370,
                              "end": 372
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 374,
                              "end": 376
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 377
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pattern",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 380,
                            "end": 387
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "intermediate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 400
                          },
                          "optional": false,
                          "computed": false,
                          "start": 380,
                          "end": 400
                        },
                        "definite": false,
                        "start": 369,
                        "end": 400
                      }
                    ],
                    "declare": false,
                    "start": 363,
                    "end": 401
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
                          "name": "midC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 412,
                          "end": 416
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 421
                        },
                        "definite": false,
                        "start": 412,
                        "end": 421
                      }
                    ],
                    "declare": false,
                    "start": 406,
                    "end": 422
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "board",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 431,
                            "end": 436
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ir",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 437,
                            "end": 439
                          },
                          "optional": false,
                          "computed": true,
                          "start": 431,
                          "end": 440
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "midC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 445
                        },
                        "optional": false,
                        "computed": true,
                        "start": 431,
                        "end": 446
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 451,
                        "end": 452
                      },
                      "start": 431,
                      "end": 452
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 454,
                      "end": 461
                    },
                    "alternate": null,
                    "start": 427,
                    "end": 461
                  }
                ],
                "start": 225,
                "end": 465
              },
              "start": 156,
              "end": 465
            }
          ],
          "start": 132,
          "end": 467
        },
        "expression": false,
        "start": 67,
        "end": 467
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 467
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 467
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 67,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "repro",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "board",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 115,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "intermediate",
    "start": 199,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "targetR",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 276,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "targetC",
    "start": 282,
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
    "value": "pos",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "board",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "targetR",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "targetC",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 349,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 353,
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
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "ir",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "ic",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "intermediate",
    "start": 388,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "midC",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "ic",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "board",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "ir",
    "start": 437,
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
    "type": "Identifier",
    "value": "midC",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 447,
    "end": 450
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  }
]
```
