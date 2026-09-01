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
            "name": "empty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 35,
                  "end": 37
                },
                "start": 35,
                "end": 37
              },
              "start": 33,
              "end": 37
            },
            "start": 28,
            "end": 37
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 40,
            "end": 42
          },
          "definite": false,
          "start": 28,
          "end": 42
        }
      ],
      "declare": false,
      "start": 22,
      "end": 43
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 59
          },
          "definite": false,
          "start": 48,
          "end": 59
        }
      ],
      "declare": false,
      "start": 44,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 64
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 73,
            "end": 78
          },
          "start": 67,
          "end": 78
        },
        "start": 61,
        "end": 78
      },
      "directive": null,
      "start": 61,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 82
      },
      "directive": null,
      "start": 79,
      "end": 82
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
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 120,
                  "end": 121
                },
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "start": 108,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 121
        }
      ],
      "declare": true,
      "start": 94,
      "end": 122
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 143
          },
          "definite": false,
          "start": 128,
          "end": 143
        }
      ],
      "declare": false,
      "start": 124,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 147
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 152
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 155,
            "end": 157
          },
          "start": 150,
          "end": 157
        },
        "start": 145,
        "end": 157
      },
      "directive": null,
      "start": 145,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
      "directive": null,
      "start": 158,
      "end": 160
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 178
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 191
          },
          "definite": false,
          "start": 176,
          "end": 191
        }
      ],
      "declare": false,
      "start": 172,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 195
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 200
          },
          "operator": "-",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 203,
            "end": 205
          },
          "start": 198,
          "end": 205
        },
        "start": 193,
        "end": 205
      },
      "directive": null,
      "start": 193,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
      },
      "directive": null,
      "start": 206,
      "end": 208
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 226
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 239
          },
          "definite": false,
          "start": 224,
          "end": 239
        }
      ],
      "declare": false,
      "start": 220,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 243
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 248
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 251,
            "end": 253
          },
          "start": 246,
          "end": 253
        },
        "start": 241,
        "end": 253
      },
      "directive": null,
      "start": 241,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 256
      },
      "directive": null,
      "start": 254,
      "end": 256
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 274
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 287
          },
          "definite": false,
          "start": 272,
          "end": 287
        }
      ],
      "declare": false,
      "start": 268,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 291
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 296
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 300,
            "end": 302
          },
          "start": 294,
          "end": 302
        },
        "start": 289,
        "end": 302
      },
      "directive": null,
      "start": 289,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t4",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 305
      },
      "directive": null,
      "start": 303,
      "end": 305
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 323
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 336
          },
          "definite": false,
          "start": 321,
          "end": 336
        }
      ],
      "declare": false,
      "start": 317,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 338,
          "end": 340
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 345
          },
          "operator": "/",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 348,
            "end": 350
          },
          "start": 343,
          "end": 350
        },
        "start": 338,
        "end": 350
      },
      "directive": null,
      "start": 338,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 353
      },
      "directive": null,
      "start": 351,
      "end": 353
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 371
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 384
          },
          "definite": false,
          "start": 369,
          "end": 384
        }
      ],
      "declare": false,
      "start": 365,
      "end": 385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t6",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 388
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 393
          },
          "operator": "%",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 396,
            "end": 398
          },
          "start": 391,
          "end": 398
        },
        "start": 386,
        "end": 398
      },
      "directive": null,
      "start": 386,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t6",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 401
      },
      "directive": null,
      "start": 399,
      "end": 401
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
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 419
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 432
          },
          "definite": false,
          "start": 417,
          "end": 432
        }
      ],
      "declare": false,
      "start": 413,
      "end": 433
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t7",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 436
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          },
          "operator": ">>",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 445,
            "end": 446
          },
          "start": 439,
          "end": 446
        },
        "start": 434,
        "end": 446
      },
      "directive": null,
      "start": 434,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t7",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 449
      },
      "directive": null,
      "start": 447,
      "end": 449
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 467
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 480
          },
          "definite": false,
          "start": 465,
          "end": 480
        }
      ],
      "declare": false,
      "start": 461,
      "end": 481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t8",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 484
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 489
          },
          "operator": ">>>",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 494,
            "end": 495
          },
          "start": 487,
          "end": 495
        },
        "start": 482,
        "end": 495
      },
      "directive": null,
      "start": 482,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t8",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "directive": null,
      "start": 496,
      "end": 498
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
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 516
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 529
          },
          "definite": false,
          "start": 514,
          "end": 529
        }
      ],
      "declare": false,
      "start": 510,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t9",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 533
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 538
          },
          "operator": "<<",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 542,
            "end": 543
          },
          "start": 536,
          "end": 543
        },
        "start": 531,
        "end": 543
      },
      "directive": null,
      "start": 531,
      "end": 543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t9",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 546
      },
      "directive": null,
      "start": 544,
      "end": 546
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
            "name": "literalUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 586,
                      "end": 589
                    },
                    "start": 586,
                    "end": 589
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 592,
                      "end": 593
                    },
                    "start": 592,
                    "end": 593
                  }
                ],
                "start": 586,
                "end": 593
              },
              "start": 584,
              "end": 593
            },
            "start": 572,
            "end": 593
          },
          "init": null,
          "definite": false,
          "start": 572,
          "end": 593
        }
      ],
      "declare": true,
      "start": 558,
      "end": 594
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
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "literalUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 617
          },
          "definite": false,
          "start": 599,
          "end": 617
        }
      ],
      "declare": false,
      "start": 595,
      "end": 618
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t10",
          "optional": false,
          "typeAnnotation": null,
          "start": 619,
          "end": 622
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 628
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 631,
            "end": 634
          },
          "start": 625,
          "end": 634
        },
        "start": 619,
        "end": 634
      },
      "directive": null,
      "start": 619,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t10",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 638
      },
      "directive": null,
      "start": 635,
      "end": 638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 648
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 71,
    "end": 72
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 94,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 108,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 133,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 158,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 181,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 206,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 229,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 249,
    "end": 250
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 254,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 277,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 297,
    "end": 299
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 300,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 303,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 326,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 348,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 351,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 374,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 394,
    "end": 395
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 396,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 399,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 422,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 442,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 447,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 470,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 490,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 496,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 519,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 539,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 544,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 558,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 566,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "literalUnion",
    "start": 572,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 590,
    "end": 591
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "literalUnion",
    "start": 605,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 629,
    "end": 630
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 635,
    "end": 638
  }
]
```
