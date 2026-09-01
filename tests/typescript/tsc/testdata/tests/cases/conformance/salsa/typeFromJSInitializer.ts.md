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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
                  "start": 77,
                  "end": 81
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 89
                },
                "optional": false,
                "computed": false,
                "start": 77,
                "end": 89
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 92,
                "end": 96
              },
              "start": 77,
              "end": 96
            },
            "directive": null,
            "start": 77,
            "end": 96
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
                  "start": 101,
                  "end": 105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unknowable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 116
                },
                "optional": false,
                "computed": false,
                "start": 101,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 128
              },
              "start": 101,
              "end": 128
            },
            "directive": null,
            "start": 101,
            "end": 128
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
                  "start": 133,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "empty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 143
                },
                "optional": false,
                "computed": false,
                "start": 133,
                "end": 143
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 146,
                "end": 148
              },
              "start": 133,
              "end": 148
            },
            "directive": null,
            "start": 133,
            "end": 148
          }
        ],
        "start": 14,
        "end": 150
      },
      "expression": false,
      "start": 0,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeArguments": null,
            "arguments": [],
            "start": 159,
            "end": 166
          },
          "definite": false,
          "start": 155,
          "end": 166
        }
      ],
      "declare": false,
      "start": 151,
      "end": 166
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 176
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 179,
          "end": 180
        },
        "start": 167,
        "end": 180
      },
      "directive": null,
      "start": 167,
      "end": 180
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 190
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 190
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 193,
          "end": 197
        },
        "start": 181,
        "end": 197
      },
      "directive": null,
      "start": 181,
      "end": 197
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 207
          },
          "optional": false,
          "computed": false,
          "start": 198,
          "end": 207
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 210,
          "end": 212
        },
        "start": 198,
        "end": 212
      },
      "directive": null,
      "start": 198,
      "end": 212
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 222
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 222
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 225,
          "end": 229
        },
        "start": 213,
        "end": 229
      },
      "directive": null,
      "start": 213,
      "end": 229
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 242
          },
          "optional": false,
          "computed": false,
          "start": 230,
          "end": 242
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 245,
          "end": 246
        },
        "start": 230,
        "end": 246
      },
      "directive": null,
      "start": 230,
      "end": 246
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 248
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 259
          },
          "optional": false,
          "computed": false,
          "start": 247,
          "end": 259
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 262,
          "end": 266
        },
        "start": 247,
        "end": 266
      },
      "directive": null,
      "start": 247,
      "end": 266
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 267,
          "end": 279
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 282,
          "end": 284
        },
        "start": 267,
        "end": 284
      },
      "directive": null,
      "start": 267,
      "end": 284
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 286
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 297
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 300,
          "end": 304
        },
        "start": 285,
        "end": 304
      },
      "directive": null,
      "start": 285,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 312
            },
            "optional": false,
            "computed": false,
            "start": 305,
            "end": 312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 317
          },
          "optional": false,
          "computed": false,
          "start": 305,
          "end": 317
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 318,
            "end": 319
          }
        ],
        "optional": false,
        "start": 305,
        "end": 320
      },
      "directive": null,
      "start": 305,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 328
            },
            "optional": false,
            "computed": false,
            "start": 321,
            "end": 328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 333
          },
          "optional": false,
          "computed": false,
          "start": 321,
          "end": 333
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 334,
            "end": 338
          }
        ],
        "optional": false,
        "start": 321,
        "end": 339
      },
      "directive": null,
      "start": 321,
      "end": 339
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 347
            },
            "optional": false,
            "computed": false,
            "start": 340,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 352
          },
          "optional": false,
          "computed": false,
          "start": 340,
          "end": 352
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 353,
            "end": 355
          }
        ],
        "optional": false,
        "start": 340,
        "end": 356
      },
      "directive": null,
      "start": 340,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 358
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 364
            },
            "optional": false,
            "computed": false,
            "start": 357,
            "end": 364
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 369
          },
          "optional": false,
          "computed": false,
          "start": 357,
          "end": 369
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 370,
            "end": 374
          }
        ],
        "optional": false,
        "start": 357,
        "end": 375
      },
      "directive": null,
      "start": 357,
      "end": 375
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 416
          },
          "init": null,
          "definite": false,
          "start": 415,
          "end": 416
        }
      ],
      "declare": false,
      "start": 411,
      "end": 417
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 472,
        "end": 473
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 475
          },
          "right": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 478,
            "end": 482
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 482
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 485
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 489
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 489
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 492
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 495,
            "end": 497
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 497
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
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 545
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 557
              },
              "start": 544,
              "end": 557
            },
            "directive": null,
            "start": 544,
            "end": 557
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 566,
                "end": 570
              },
              "start": 562,
              "end": 570
            },
            "directive": null,
            "start": 562,
            "end": 570
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 576
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 579,
                "end": 580
              },
              "start": 575,
              "end": 580
            },
            "directive": null,
            "start": 575,
            "end": 580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 586
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 589,
                "end": 593
              },
              "start": 585,
              "end": 593
            },
            "directive": null,
            "start": 585,
            "end": 593
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 599
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 602,
                "end": 604
              },
              "start": 598,
              "end": 604
            },
            "directive": null,
            "start": 598,
            "end": 604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 610
              },
              "right": {
                "type": "Literal",
                "value": "ok",
                "raw": "'ok'",
                "start": 613,
                "end": 617
              },
              "start": 609,
              "end": 617
            },
            "directive": null,
            "start": 609,
            "end": 617
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 671
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 674,
                "end": 675
              },
              "start": 670,
              "end": 675
            },
            "directive": null,
            "start": 670,
            "end": 675
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 684,
                "end": 693
              },
              "start": 680,
              "end": 693
            },
            "directive": null,
            "start": 680,
            "end": 693
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 699
              },
              "right": {
                "type": "Literal",
                "value": "error",
                "raw": "'error'",
                "start": 702,
                "end": 709
              },
              "start": 698,
              "end": 709
            },
            "directive": null,
            "start": 698,
            "end": 709
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 741
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 746
                },
                "optional": false,
                "computed": false,
                "start": 740,
                "end": 746
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 747,
                  "end": 748
                }
              ],
              "optional": false,
              "start": 740,
              "end": 749
            },
            "directive": null,
            "start": 740,
            "end": 749
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 755
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 760
                },
                "optional": false,
                "computed": false,
                "start": 754,
                "end": 760
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 761,
                  "end": 765
                }
              ],
              "optional": false,
              "start": 754,
              "end": 766
            },
            "directive": null,
            "start": 754,
            "end": 766
          }
        ],
        "start": 499,
        "end": 768
      },
      "expression": false,
      "start": 463,
      "end": 768
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 818
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 830
          },
          "definite": false,
          "start": 817,
          "end": 830
        }
      ],
      "declare": false,
      "start": 813,
      "end": 831
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 837
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 840,
            "end": 842
          },
          "definite": false,
          "start": 836,
          "end": 842
        }
      ],
      "declare": false,
      "start": 832,
      "end": 843
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 844,
          "end": 845
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 857
        },
        "start": 844,
        "end": 857
      },
      "directive": null,
      "start": 844,
      "end": 857
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 859
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 862,
          "end": 863
        },
        "start": 858,
        "end": 863
      },
      "directive": null,
      "start": 858,
      "end": 863
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 864,
          "end": 865
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 868,
          "end": 872
        },
        "start": 864,
        "end": 872
      },
      "directive": null,
      "start": 864,
      "end": 872
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 873,
          "end": 874
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 877,
          "end": 879
        },
        "start": 873,
        "end": 879
      },
      "directive": null,
      "start": 873,
      "end": 879
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 880,
          "end": 881
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "'ok'",
          "start": 884,
          "end": 888
        },
        "start": 880,
        "end": 888
      },
      "directive": null,
      "start": 880,
      "end": 888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 891
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 896
          },
          "optional": false,
          "computed": false,
          "start": 890,
          "end": 896
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ok",
            "raw": "'ok'",
            "start": 897,
            "end": 901
          }
        ],
        "optional": false,
        "start": 890,
        "end": 902
      },
      "directive": null,
      "start": 890,
      "end": 902
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
            "name": "isUndef",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 963
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 966,
                "end": 967
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 971,
                "end": 972
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 986
              },
              "start": 971,
              "end": 986
            },
            "id": null,
            "generator": false,
            "start": 966,
            "end": 986
          },
          "definite": false,
          "start": 956,
          "end": 986
        }
      ],
      "declare": false,
      "start": 950,
      "end": 987
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 994,
            "end": 995
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 999,
                "end": 1000
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1011
              }
            ],
            "start": 998,
            "end": 1012
          },
          "definite": false,
          "start": 994,
          "end": 1012
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1013
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1046,
            "end": 1047
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1051
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1058
              },
              "optional": false,
              "computed": false,
              "start": 1050,
              "end": 1058
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isUndef",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1066
              }
            ],
            "optional": false,
            "start": 1050,
            "end": 1067
          },
          "definite": false,
          "start": 1046,
          "end": 1067
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1068
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1068
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
    "value": "A",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Null",
    "value": "null",
    "start": 92,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "unknowable",
    "start": 106,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 119,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 193,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 225,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "unknowable",
    "start": 232,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "unknowable",
    "start": 249,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 262,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "unknowable",
    "start": 269,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "unknowable",
    "start": 287,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 300,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 307,
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
    "value": "push",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 321,
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
    "value": "empty",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 463,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Null",
    "value": "null",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 548,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Null",
    "value": "null",
    "start": 566,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 589,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 613,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 684,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "String",
    "value": "'error'",
    "start": 702,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 742,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 813,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 821,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 848,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 868,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 884,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 892,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "isUndef",
    "start": 956,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 968,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 973,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 977,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 988,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 998,
    "end": 999
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1002,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1040,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "isUndef",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  }
]
```
