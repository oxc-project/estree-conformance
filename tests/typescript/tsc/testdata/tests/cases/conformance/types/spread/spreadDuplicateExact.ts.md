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
            "name": "a",
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
                      "start": 39,
                      "end": 40
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      },
                      "start": 40,
                      "end": 48
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 39,
                    "end": 48
                  }
                ],
                "start": 37,
                "end": 50
              },
              "start": 35,
              "end": 50
            },
            "start": 34,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 50
        }
      ],
      "declare": true,
      "start": 22,
      "end": 51
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 70
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 69,
                    "end": 79
                  }
                ],
                "start": 67,
                "end": 81
              },
              "start": 65,
              "end": 81
            },
            "start": 64,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 81
        }
      ],
      "declare": true,
      "start": 52,
      "end": 82
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
            "name": "c",
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
                      "start": 100,
                      "end": 101
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 103,
                            "end": 109
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 112,
                            "end": 121
                          }
                        ],
                        "start": 103,
                        "end": 121
                      },
                      "start": 101,
                      "end": 121
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 100,
                    "end": 121
                  }
                ],
                "start": 98,
                "end": 123
              },
              "start": 96,
              "end": 123
            },
            "start": 95,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 123
        }
      ],
      "declare": true,
      "start": 83,
      "end": 124
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 146,
                            "end": 152
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 155,
                            "end": 164
                          }
                        ],
                        "start": 146,
                        "end": 164
                      },
                      "start": 144,
                      "end": 164
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 164
                  }
                ],
                "start": 140,
                "end": 166
              },
              "start": 138,
              "end": 166
            },
            "start": 137,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 166
        }
      ],
      "declare": true,
      "start": 125,
      "end": 167
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 184,
                "end": 191
              },
              "start": 182,
              "end": 191
            },
            "start": 181,
            "end": 191
          },
          "init": null,
          "definite": false,
          "start": 181,
          "end": 191
        }
      ],
      "declare": true,
      "start": 169,
      "end": 192
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 200
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 208,
                  "end": 211
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 205,
                "end": 211
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "start": 213,
                "end": 217
              }
            ],
            "start": 203,
            "end": 219
          },
          "definite": false,
          "start": 198,
          "end": 219
        }
      ],
      "declare": false,
      "start": 194,
      "end": 220
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 246
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 254,
                  "end": 257
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 251,
                "end": 257
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "start": 259,
                "end": 263
              }
            ],
            "start": 249,
            "end": 265
          },
          "definite": false,
          "start": 244,
          "end": 265
        }
      ],
      "declare": false,
      "start": 240,
      "end": 266
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 301,
                  "end": 304
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 298,
                "end": 304
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "start": 306,
                "end": 310
              }
            ],
            "start": 296,
            "end": 312
          },
          "definite": false,
          "start": 291,
          "end": 312
        }
      ],
      "declare": false,
      "start": 287,
      "end": 313
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 357
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 359,
                  "end": 362
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 356,
                "end": 362
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "start": 364,
                "end": 368
              }
            ],
            "start": 354,
            "end": 370
          },
          "definite": false,
          "start": 349,
          "end": 370
        }
      ],
      "declare": false,
      "start": 345,
      "end": 371
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 411
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 419,
                  "end": 422
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 416,
                "end": 422
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 436,
                    "end": 438
                  },
                  "start": 428,
                  "end": 438
                },
                "start": 424,
                "end": 439
              }
            ],
            "start": 414,
            "end": 441
          },
          "definite": false,
          "start": 409,
          "end": 441
        }
      ],
      "declare": false,
      "start": 405,
      "end": 442
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 469
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 475
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 477,
                  "end": 480
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 480
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 487
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 494,
                    "end": 496
                  },
                  "start": 486,
                  "end": 496
                },
                "start": 482,
                "end": 497
              }
            ],
            "start": 472,
            "end": 499
          },
          "definite": false,
          "start": 467,
          "end": 499
        }
      ],
      "declare": false,
      "start": 463,
      "end": 500
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 527
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 533
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 535,
                  "end": 538
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 532,
                "end": 538
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 545
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 552,
                    "end": 554
                  },
                  "start": 544,
                  "end": 554
                },
                "start": 540,
                "end": 555
              }
            ],
            "start": 530,
            "end": 557
          },
          "definite": false,
          "start": 525,
          "end": 557
        }
      ],
      "declare": false,
      "start": 521,
      "end": 558
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 597
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 603
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 605,
                  "end": 608
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 602,
                "end": 608
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 619
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 622,
                    "end": 624
                  },
                  "start": 614,
                  "end": 624
                },
                "start": 610,
                "end": 625
              }
            ],
            "start": 600,
            "end": 627
          },
          "definite": false,
          "start": 595,
          "end": 627
        }
      ],
      "declare": false,
      "start": 591,
      "end": 628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 660
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
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
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 83,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 125,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 155,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
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
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  }
]
```
