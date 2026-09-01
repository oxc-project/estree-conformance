__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 25,
                        "end": 31
                      },
                      "start": 23,
                      "end": 31
                    },
                    "start": 20,
                    "end": 31
                  },
                  "right": {
                    "type": "Literal",
                    "value": "DEFAULT",
                    "raw": "\"DEFAULT\"",
                    "start": 34,
                    "end": 43
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 43
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    },
                    "start": 48,
                    "end": 56
                  },
                  "start": 45,
                  "end": 56
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 59,
                  "end": 65
                },
                "start": 57,
                "end": 65
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 85
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "\" \"",
                          "start": 88,
                          "end": 91
                        },
                        "start": 82,
                        "end": 91
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "two",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 97
                      },
                      "start": 82,
                      "end": 97
                    },
                    "start": 75,
                    "end": 98
                  }
                ],
                "start": 69,
                "end": 100
              },
              "id": null,
              "generator": false,
              "start": 19,
              "end": 100
            },
            "definite": false,
            "start": 13,
            "end": 100
          }
        ],
        "declare": false,
        "start": 7,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 101
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 128,
                            "end": 134
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 137,
                            "end": 146
                          }
                        ],
                        "start": 128,
                        "end": 146
                      },
                      "start": 126,
                      "end": 146
                    },
                    "start": 123,
                    "end": 146
                  },
                  "right": {
                    "type": "Literal",
                    "value": "DEFAULT",
                    "raw": "\"DEFAULT\"",
                    "start": 149,
                    "end": 158
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 158
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 165,
                      "end": 171
                    },
                    "start": 163,
                    "end": 171
                  },
                  "start": 160,
                  "end": 171
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 174,
                  "end": 180
                },
                "start": 172,
                "end": 180
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 200
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "\" \"",
                          "start": 203,
                          "end": 206
                        },
                        "start": 197,
                        "end": 206
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "two",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 212
                      },
                      "start": 197,
                      "end": 212
                    },
                    "start": 190,
                    "end": 213
                  }
                ],
                "start": 184,
                "end": 215
              },
              "id": null,
              "generator": false,
              "start": 122,
              "end": 215
            },
            "definite": false,
            "start": 116,
            "end": 215
          }
        ],
        "declare": false,
        "start": 110,
        "end": 216
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 216
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 317
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 326,
                      "end": 332
                    },
                    "start": 324,
                    "end": 332
                  },
                  "start": 321,
                  "end": 332
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 339,
                            "end": 345
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 348,
                            "end": 357
                          }
                        ],
                        "start": 339,
                        "end": 357
                      },
                      "start": 337,
                      "end": 357
                    },
                    "start": 334,
                    "end": 357
                  },
                  "right": {
                    "type": "Literal",
                    "value": "DEFAULT",
                    "raw": "\"DEFAULT\"",
                    "start": 360,
                    "end": 369
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 369
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 372,
                  "end": 378
                },
                "start": 370,
                "end": 378
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 398
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "\" \"",
                          "start": 401,
                          "end": 404
                        },
                        "start": 395,
                        "end": 404
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "two",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 410
                      },
                      "start": 395,
                      "end": 410
                    },
                    "start": 388,
                    "end": 411
                  }
                ],
                "start": 382,
                "end": 413
              },
              "id": null,
              "generator": false,
              "start": 320,
              "end": 413
            },
            "definite": false,
            "start": 314,
            "end": 413
          }
        ],
        "declare": false,
        "start": 308,
        "end": 414
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 301,
      "end": 414
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
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 485
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 494,
                        "end": 500
                      },
                      "start": 492,
                      "end": 500
                    },
                    "start": 489,
                    "end": 500
                  },
                  "right": {
                    "type": "Literal",
                    "value": "DEFAULT",
                    "raw": "\"DEFAULT\"",
                    "start": 503,
                    "end": 512
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 512
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 519,
                        "end": 525
                      },
                      "start": 517,
                      "end": 525
                    },
                    "start": 514,
                    "end": 525
                  },
                  "right": {
                    "type": "Literal",
                    "value": "DEFAULT",
                    "raw": "\"DEFAULT\"",
                    "start": 528,
                    "end": 537
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 537
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 540,
                  "end": 546
                },
                "start": 538,
                "end": 546
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 563,
                          "end": 566
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "\" \"",
                          "start": 569,
                          "end": 572
                        },
                        "start": 563,
                        "end": 572
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "two",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 578
                      },
                      "start": 563,
                      "end": 578
                    },
                    "start": 556,
                    "end": 579
                  }
                ],
                "start": 550,
                "end": 581
              },
              "id": null,
              "generator": false,
              "start": 488,
              "end": 581
            },
            "definite": false,
            "start": 482,
            "end": 581
          }
        ],
        "declare": false,
        "start": 476,
        "end": 582
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 469,
      "end": 582
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 582
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"DEFAULT\"",
    "start": 34,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"DEFAULT\"",
    "start": 149,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 348,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"DEFAULT\"",
    "start": 360,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 388,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 469,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 476,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "String",
    "value": "\"DEFAULT\"",
    "start": 503,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "String",
    "value": "\"DEFAULT\"",
    "start": 528,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 556,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 567,
    "end": 568
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  }
]
```
