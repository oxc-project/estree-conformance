__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "named",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 12,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 30
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 24,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 38
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 46
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 48,
                  "end": 53
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 53
              }
            ],
            "start": 41,
            "end": 54
          },
          "definite": false,
          "start": 23,
          "end": 54
        }
      ],
      "declare": false,
      "start": 19,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 65
        },
        "prefix": true,
        "start": 56,
        "end": 65
      },
      "directive": null,
      "start": 56,
      "end": 66
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
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "start": 88,
                        "end": 99
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 102,
                        "end": 108
                      },
                      "start": 100,
                      "end": 108
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 87,
                    "end": 108
                  }
                ],
                "start": 86,
                "end": 109
              },
              "start": 84,
              "end": 109
            },
            "start": 74,
            "end": 109
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 112,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 120,
              "end": 123
            },
            "start": 112,
            "end": 123
          },
          "definite": false,
          "start": 74,
          "end": 123
        }
      ],
      "declare": false,
      "start": 68,
      "end": 124
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
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          "start": 148,
                          "end": 156
                        },
                        "start": 145,
                        "end": 156
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 159,
                        "end": 165
                      },
                      "start": 157,
                      "end": 165
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 144,
                    "end": 165
                  }
                ],
                "start": 143,
                "end": 166
              },
              "start": 141,
              "end": 166
            },
            "start": 131,
            "end": 166
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 169,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 177,
              "end": 180
            },
            "start": 169,
            "end": 180
          },
          "definite": false,
          "start": 131,
          "end": 180
        }
      ],
      "declare": false,
      "start": 125,
      "end": 181
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
            "name": "numed",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 192
          },
          "init": {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "start": 195,
            "end": 196
          },
          "definite": false,
          "start": 187,
          "end": 196
        }
      ],
      "declare": false,
      "start": 183,
      "end": 197
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
            "name": "symed",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 219
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 213,
            "end": 221
          },
          "definite": false,
          "start": 205,
          "end": 221
        }
      ],
      "declare": false,
      "start": 199,
      "end": 222
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
            "name": "symed2",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 233
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 242
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 236,
            "end": 244
          },
          "definite": false,
          "start": 227,
          "end": 244
        }
      ],
      "declare": false,
      "start": 223,
      "end": 245
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 258
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 252,
                "end": 266
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 267
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 280
          },
          "definite": false,
          "start": 251,
          "end": 280
        }
      ],
      "declare": false,
      "start": 247,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop2",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 292
        },
        "prefix": true,
        "start": 282,
        "end": 292
      },
      "directive": null,
      "start": 282,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 305
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 299,
                "end": 313
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 314
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 327
          },
          "definite": false,
          "start": 298,
          "end": 327
        }
      ],
      "declare": false,
      "start": 294,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop3",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 339
        },
        "prefix": true,
        "start": 329,
        "end": 339
      },
      "directive": null,
      "start": 329,
      "end": 340
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 352
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 360
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 346,
                "end": 360
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 361
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 374
          },
          "definite": false,
          "start": 345,
          "end": 374
        }
      ],
      "declare": false,
      "start": 341,
      "end": 375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop4",
          "optional": false,
          "typeAnnotation": null,
          "start": 381,
          "end": 386
        },
        "prefix": true,
        "start": 376,
        "end": 386
      },
      "directive": null,
      "start": 376,
      "end": 387
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 399
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 407
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 393,
                "end": 407
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 408
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 421
          },
          "definite": false,
          "start": 392,
          "end": 421
        }
      ],
      "declare": false,
      "start": 388,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop5",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 433
        },
        "prefix": true,
        "start": 423,
        "end": 433
      },
      "directive": null,
      "start": 423,
      "end": 434
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 446
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 454
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 440,
                "end": 454
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 455
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 468
          },
          "definite": false,
          "start": 439,
          "end": 468
        }
      ],
      "declare": false,
      "start": 435,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop6",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 480
        },
        "prefix": true,
        "start": 470,
        "end": 480
      },
      "directive": null,
      "start": 470,
      "end": 481
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 493
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 501
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 487,
                "end": 501
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 502
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 515
          },
          "definite": false,
          "start": 486,
          "end": 515
        }
      ],
      "declare": false,
      "start": 482,
      "end": 516
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop7",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 527
        },
        "prefix": true,
        "start": 517,
        "end": 527
      },
      "directive": null,
      "start": 517,
      "end": 528
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 541
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 549
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 534,
                "end": 549
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 550
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 563
          },
          "definite": false,
          "start": 533,
          "end": 563
        }
      ],
      "declare": false,
      "start": 529,
      "end": 564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop8",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 575
        },
        "prefix": true,
        "start": 565,
        "end": 575
      },
      "directive": null,
      "start": 565,
      "end": 576
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 589
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 597
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 582,
                "end": 597
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 598
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 611
          },
          "definite": false,
          "start": 581,
          "end": 611
        }
      ],
      "declare": false,
      "start": 577,
      "end": 612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop9",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 623
        },
        "prefix": true,
        "start": 613,
        "end": 623
      },
      "directive": null,
      "start": 613,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 56,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "numIndexed",
    "start": 74,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Null",
    "value": "null",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "strIndexed",
    "start": 131,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Null",
    "value": "null",
    "start": 169,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 174,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "numed",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 199,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "symed",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "symed2",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "numIndexed",
    "start": 270,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 282,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "numed",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "numIndexed",
    "start": 317,
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
    "value": "void",
    "start": 329,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 347,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "strIndexed",
    "start": 364,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 376,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "numed",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "strIndexed",
    "start": 411,
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
    "value": "void",
    "start": 423,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 428,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "symed",
    "start": 441,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "prop6",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "numIndexed",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 470,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "prop6",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "symed",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "prop7",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "strIndexed",
    "start": 505,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 517,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "prop7",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "symed2",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "prop8",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "numIndexed",
    "start": 553,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 565,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "prop8",
    "start": 570,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 577,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "symed2",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "prop9",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "strIndexed",
    "start": 601,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 613,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "prop9",
    "start": 618,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  }
]
```
