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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "start": 55,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 65
        }
      ],
      "declare": false,
      "start": 51,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 69
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 78
        },
        "start": 67,
        "end": 78
      },
      "directive": null,
      "start": 67,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 82
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 91
        },
        "start": 80,
        "end": 91
      },
      "directive": null,
      "start": 80,
      "end": 92
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 111,
              "end": 117
            },
            "start": 109,
            "end": 117
          },
          "start": 107,
          "end": 117
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "*=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 127
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 136
              },
              "start": 125,
              "end": 136
            },
            "directive": null,
            "start": 125,
            "end": 137
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 144
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 153
              },
              "start": 142,
              "end": 153
            },
            "directive": null,
            "start": 142,
            "end": 154
          }
        ],
        "start": 119,
        "end": 156
      },
      "expression": false,
      "start": 94,
      "end": 156
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
            "name": "x3",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 190
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      },
                      "start": 190,
                      "end": 198
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 189,
                    "end": 198
                  }
                ],
                "start": 187,
                "end": 200
              },
              "start": 185,
              "end": 200
            },
            "start": 183,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 200
        }
      ],
      "declare": false,
      "start": 179,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 204
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "optional": false,
          "computed": false,
          "start": 202,
          "end": 206
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 215
        },
        "start": 202,
        "end": 215
      },
      "directive": null,
      "start": 202,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 221
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 230
        },
        "start": 217,
        "end": 230
      },
      "directive": null,
      "start": 217,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 235
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 236,
            "end": 239
          },
          "optional": false,
          "computed": true,
          "start": 233,
          "end": 240
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 249
        },
        "start": 233,
        "end": 249
      },
      "directive": null,
      "start": 233,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 253
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 254,
            "end": 257
          },
          "optional": false,
          "computed": true,
          "start": 251,
          "end": 258
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 267
        },
        "start": 251,
        "end": 267
      },
      "directive": null,
      "start": 251,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 327
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 337
        },
        "start": 324,
        "end": 337
      },
      "directive": null,
      "start": 324,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 342
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 347,
          "end": 352
        },
        "start": 339,
        "end": 352
      },
      "directive": null,
      "start": 339,
      "end": 353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 367
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 372,
              "end": 378
            },
            "start": 370,
            "end": 378
          },
          "start": 368,
          "end": 378
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "*=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 389
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 399
              },
              "start": 386,
              "end": 399
            },
            "directive": null,
            "start": 386,
            "end": 400
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 408
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 418
              },
              "start": 405,
              "end": 418
            },
            "directive": null,
            "start": 405,
            "end": 419
          }
        ],
        "start": 380,
        "end": 421
      },
      "expression": false,
      "start": 355,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 426
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 428
          },
          "optional": false,
          "computed": false,
          "start": 424,
          "end": 428
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 438
        },
        "start": 423,
        "end": 438
      },
      "directive": null,
      "start": 423,
      "end": 439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 443
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 445
          },
          "optional": false,
          "computed": false,
          "start": 441,
          "end": 445
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 455
        },
        "start": 440,
        "end": 455
      },
      "directive": null,
      "start": 440,
      "end": 456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 461
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 462,
            "end": 465
          },
          "optional": false,
          "computed": true,
          "start": 459,
          "end": 466
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 476
        },
        "start": 458,
        "end": 476
      },
      "directive": null,
      "start": 458,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 481
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 482,
            "end": 485
          },
          "optional": false,
          "computed": true,
          "start": 479,
          "end": 486
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 496
        },
        "start": 478,
        "end": 496
      },
      "directive": null,
      "start": 478,
      "end": 497
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 497
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
    "value": "value",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 55,
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
    "value": "number",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 70,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 83,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 94,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 145,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 241,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 259,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 329,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 344,
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
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 355,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 368,
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
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 391,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 410,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 430,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 468,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 488,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 491,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  }
]
```
