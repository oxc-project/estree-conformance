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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
            "start": 11,
            "end": 12
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 15,
            "end": 17
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 17
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 25,
              "end": 37
            },
            "directive": "use strict",
            "start": 25,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "expression": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 56
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 59,
              "end": 61
            },
            "definite": false,
            "start": 53,
            "end": 61
          }
        ],
        "declare": false,
        "start": 49,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
            "start": 74,
            "end": 75
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 78,
            "end": 80
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "expression": false,
      "start": 63,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 105
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
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 114,
              "end": 126
            },
            "directive": "use strict",
            "start": 114,
            "end": 127
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
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
                  "start": 143,
                  "end": 144
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 147,
                  "end": 149
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 149
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 151,
              "end": 158
            },
            "expression": false,
            "start": 132,
            "end": 158
          }
        ],
        "start": 108,
        "end": 160
      },
      "expression": false,
      "start": 87,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rest",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 183
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 185,
                "end": 188
              },
              "start": 185,
              "end": 190
            },
            "start": 183,
            "end": 190
          },
          "value": null,
          "start": 176,
          "end": 190
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 198,
              "end": 210
            },
            "directive": "use strict",
            "start": 198,
            "end": 211
          }
        ],
        "start": 192,
        "end": 213
      },
      "expression": false,
      "start": 162,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rest1",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 229
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
            "start": 230,
            "end": 231
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 234,
            "end": 235
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 235
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 244
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 237,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 252,
              "end": 264
            },
            "directive": "use strict",
            "start": 252,
            "end": 265
          }
        ],
        "start": 246,
        "end": 267
      },
      "expression": false,
      "start": 215,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "paramDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 290
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
            "name": "param",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 296
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 299,
            "end": 300
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 300
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 308,
              "end": 320
            },
            "directive": "use strict",
            "start": 308,
            "end": 321
          }
        ],
        "start": 302,
        "end": 323
      },
      "expression": false,
      "start": 269,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectBindingPattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 359
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 359
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 356,
              "end": 359
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 362,
              "end": 365
            },
            "start": 360,
            "end": 365
          },
          "start": 355,
          "end": 365
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 373,
              "end": 385
            },
            "directive": "use strict",
            "start": 373,
            "end": 386
          }
        ],
        "start": 367,
        "end": 388
      },
      "expression": false,
      "start": 325,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayBindingPattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 418
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 423
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 426,
                "end": 429
              },
              "start": 426,
              "end": 431
            },
            "start": 424,
            "end": 431
          },
          "start": 419,
          "end": 431
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 439,
              "end": 451
            },
            "directive": "use strict",
            "start": 439,
            "end": 452
          }
        ],
        "start": 433,
        "end": 454
      },
      "expression": false,
      "start": 390,
      "end": 454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "manyParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 478
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
            "start": 479,
            "end": 480
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 483,
            "end": 485
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 485
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
            "start": 487,
            "end": 488
          },
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 491,
            "end": 493
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 493
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 501,
              "end": 513
            },
            "directive": "use strict",
            "start": 501,
            "end": 514
          }
        ],
        "start": 495,
        "end": 516
      },
      "expression": false,
      "start": 456,
      "end": 516
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "manyPrologue",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 539
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
            "start": 540,
            "end": 541
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 544,
            "end": 546
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 540,
          "end": 546
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
            "start": 548,
            "end": 549
          },
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 552,
            "end": 554
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 554
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 562,
              "end": 567
            },
            "directive": "foo",
            "start": 562,
            "end": 568
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 573,
              "end": 585
            },
            "directive": "use strict",
            "start": 573,
            "end": 586
          }
        ],
        "start": 556,
        "end": 588
      },
      "expression": false,
      "start": 518,
      "end": 588
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidPrologue",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 614
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
            "start": 615,
            "end": 616
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 619,
            "end": 621
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 621
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
            "start": 623,
            "end": 624
          },
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 627,
            "end": 629
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 629
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 637,
              "end": 642
            },
            "directive": "foo",
            "start": 637,
            "end": 643
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 655
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 658,
                  "end": 659
                },
                "definite": false,
                "start": 654,
                "end": 659
              }
            ],
            "declare": false,
            "start": 648,
            "end": 660
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 665,
              "end": 677
            },
            "directive": null,
            "start": 665,
            "end": 678
          }
        ],
        "start": 631,
        "end": 680
      },
      "expression": false,
      "start": 590,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
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
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 25,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 87,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "container",
    "start": 96,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "String",
    "value": "\"use strict\"",
    "start": 114,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "'use strict'",
    "start": 198,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 215,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "'use strict'",
    "start": 252,
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
    "value": "function",
    "start": 269,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "paramDefault",
    "start": 278,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "'use strict'",
    "start": 308,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 325,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "objectBindingPattern",
    "start": 334,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "'use strict'",
    "start": 373,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "arrayBindingPattern",
    "start": 399,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "String",
    "value": "'use strict'",
    "start": 439,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "manyParameter",
    "start": 465,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 501,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 518,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "manyPrologue",
    "start": 527,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 562,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 573,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 590,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "invalidPrologue",
    "start": 599,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 648,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 665,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  }
]
```
