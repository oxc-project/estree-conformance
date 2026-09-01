__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 14,
                    "end": 20
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  }
                ],
                "start": 14,
                "end": 29
              },
              "start": 12,
              "end": 29
            },
            "start": 4,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 55,
                    "end": 62
                  }
                ],
                "start": 46,
                "end": 62
              },
              "start": 44,
              "end": 62
            },
            "start": 35,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 62
        }
      ],
      "declare": false,
      "start": 31,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrFunc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 95,
                        "end": 99
                      },
                      "start": 92,
                      "end": 99
                    },
                    "start": 89,
                    "end": 99
                  }
                ],
                "start": 79,
                "end": 100
              },
              "start": 77,
              "end": 100
            },
            "start": 68,
            "end": 100
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 100
        }
      ],
      "declare": false,
      "start": 64,
      "end": 101
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 117,
                    "end": 123
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 126,
                    "end": 133
                  }
                ],
                "start": 117,
                "end": 133
              },
              "start": 115,
              "end": 133
            },
            "start": 106,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 133
        }
      ],
      "declare": false,
      "start": 102,
      "end": 133
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "start": 138,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 149
        }
      ],
      "declare": false,
      "start": 134,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 160,
                "end": 166
              },
              "start": 158,
              "end": 166
            },
            "start": 155,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 166
        }
      ],
      "declare": false,
      "start": 151,
      "end": 167
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 178,
                "end": 185
              },
              "start": 176,
              "end": 185
            },
            "start": 172,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 172,
          "end": 185
        }
      ],
      "declare": false,
      "start": 168,
      "end": 186
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 203,
                    "end": 207
                  },
                  "start": 200,
                  "end": 207
                },
                "start": 197,
                "end": 207
              },
              "start": 195,
              "end": 207
            },
            "start": 191,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 191,
          "end": 207
        }
      ],
      "declare": false,
      "start": 187,
      "end": 208
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 214,
          "end": 222
        },
        "operator": "===",
        "right": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 242
          },
          "prefix": true,
          "start": 227,
          "end": 242
        },
        "start": 214,
        "end": 242
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 253
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 264
              },
              "start": 250,
              "end": 264
            },
            "directive": null,
            "start": 250,
            "end": 265
          }
        ],
        "start": 244,
        "end": 267
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 282
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 293
              },
              "start": 279,
              "end": 293
            },
            "directive": null,
            "start": 279,
            "end": 294
          }
        ],
        "start": 273,
        "end": 296
      },
      "start": 210,
      "end": 296
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "function",
          "raw": "\"function\"",
          "start": 301,
          "end": 311
        },
        "operator": "===",
        "right": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 332
          },
          "prefix": true,
          "start": 316,
          "end": 332
        },
        "start": 301,
        "end": 332
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 344
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 356
              },
              "start": 340,
              "end": 356
            },
            "directive": null,
            "start": 340,
            "end": 357
          }
        ],
        "start": 334,
        "end": 359
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 374
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 386
              },
              "start": 371,
              "end": 386
            },
            "directive": null,
            "start": 371,
            "end": 387
          }
        ],
        "start": 365,
        "end": 389
      },
      "start": 297,
      "end": 389
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 394,
          "end": 402
        },
        "operator": "===",
        "right": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 423
          },
          "prefix": true,
          "start": 407,
          "end": 423
        },
        "start": 394,
        "end": 423
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 434
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 446
              },
              "start": 431,
              "end": 446
            },
            "directive": null,
            "start": 431,
            "end": 447
          }
        ],
        "start": 425,
        "end": 449
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 465
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 477
              },
              "start": 461,
              "end": 477
            },
            "directive": null,
            "start": 461,
            "end": 478
          }
        ],
        "start": 455,
        "end": 480
      },
      "start": 390,
      "end": 480
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 485,
          "end": 494
        },
        "operator": "===",
        "right": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 515
          },
          "prefix": true,
          "start": 499,
          "end": 515
        },
        "start": 485,
        "end": 515
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 527
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 539
              },
              "start": 523,
              "end": 539
            },
            "directive": null,
            "start": 523,
            "end": 540
          }
        ],
        "start": 517,
        "end": 542
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 557
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 569
              },
              "start": 554,
              "end": 569
            },
            "directive": null,
            "start": 554,
            "end": 570
          }
        ],
        "start": 548,
        "end": 572
      },
      "start": 481,
      "end": 572
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 572
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 35,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "strOrFunc",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 92,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 172,
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
    "value": "boolean",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 200,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
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
    "type": "String",
    "value": "\"string\"",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 223,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 234,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 250,
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
    "value": "strOrNum",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 285,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 301,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 312,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 316,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "strOrFunc",
    "start": 323,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "strOrFunc",
    "start": 347,
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
    "type": "Keyword",
    "value": "else",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "strOrFunc",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 403,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 407,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 414,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 437,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 468,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 485,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 495,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 499,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 530,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 560,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  }
]
```
