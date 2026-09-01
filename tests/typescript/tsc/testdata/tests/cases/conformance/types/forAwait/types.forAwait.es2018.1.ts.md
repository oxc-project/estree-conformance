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
            "name": "asyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 42
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  ],
                  "start": 42,
                  "end": 50
                },
                "start": 29,
                "end": 50
              },
              "start": 27,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
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
            "name": "iterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 84
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ],
                  "start": 84,
                  "end": 92
                },
                "start": 76,
                "end": 92
              },
              "start": 74,
              "end": 92
            },
            "start": 66,
            "end": 92
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 92
        }
      ],
      "declare": true,
      "start": 52,
      "end": 93
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
            "name": "iterableOfPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 135
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 143
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 144,
                            "end": 150
                          }
                        ],
                        "start": 143,
                        "end": 151
                      },
                      "start": 136,
                      "end": 151
                    }
                  ],
                  "start": 135,
                  "end": 152
                },
                "start": 127,
                "end": 152
              },
              "start": 125,
              "end": 152
            },
            "start": 108,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 152
        }
      ],
      "declare": true,
      "start": 94,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "generator": false,
      "async": true,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 187,
                      "end": 193
                    },
                    "start": 185,
                    "end": 193
                  },
                  "start": 184,
                  "end": 193
                },
                "init": null,
                "definite": false,
                "start": 184,
                "end": 193
              }
            ],
            "declare": false,
            "start": 180,
            "end": 194
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "init": null,
                  "definite": false,
                  "start": 216,
                  "end": 217
                }
              ],
              "declare": false,
              "start": 210,
              "end": 217
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 234
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 236,
              "end": 243
            },
            "start": 199,
            "end": 243
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 266
                  },
                  "init": null,
                  "definite": false,
                  "start": 265,
                  "end": 266
                }
              ],
              "declare": false,
              "start": 259,
              "end": 266
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 278
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 280,
              "end": 287
            },
            "start": 248,
            "end": 287
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "init": null,
                  "definite": false,
                  "start": 309,
                  "end": 310
                }
              ],
              "declare": false,
              "start": 303,
              "end": 310
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 331
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 333,
              "end": 340
            },
            "start": 292,
            "end": 340
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 374
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 376,
              "end": 383
            },
            "start": 345,
            "end": 383
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 412
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 414,
              "end": 421
            },
            "start": 388,
            "end": 421
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 438
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 459
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 461,
              "end": 468
            },
            "start": 426,
            "end": 468
          }
        ],
        "start": 174,
        "end": 470
      },
      "expression": false,
      "start": 154,
      "end": 470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 490
      },
      "generator": true,
      "async": true,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 506,
                      "end": 512
                    },
                    "start": 504,
                    "end": 512
                  },
                  "start": 503,
                  "end": 512
                },
                "init": null,
                "definite": false,
                "start": 503,
                "end": 512
              }
            ],
            "declare": false,
            "start": 499,
            "end": 513
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "init": null,
                  "definite": false,
                  "start": 535,
                  "end": 536
                }
              ],
              "declare": false,
              "start": 529,
              "end": 536
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 553
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 555,
              "end": 562
            },
            "start": 518,
            "end": 562
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 585
                  },
                  "init": null,
                  "definite": false,
                  "start": 584,
                  "end": 585
                }
              ],
              "declare": false,
              "start": 578,
              "end": 585
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 597
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 599,
              "end": 606
            },
            "start": 567,
            "end": 606
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "init": null,
                  "definite": false,
                  "start": 628,
                  "end": 629
                }
              ],
              "declare": false,
              "start": 622,
              "end": 629
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 650
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 652,
              "end": 659
            },
            "start": 611,
            "end": 659
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 693
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 695,
              "end": 702
            },
            "start": 664,
            "end": 702
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 719
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 731
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 733,
              "end": 740
            },
            "start": 707,
            "end": 740
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 757
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 778
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 780,
              "end": 787
            },
            "start": 745,
            "end": 787
          }
        ],
        "start": 493,
        "end": 789
      },
      "expression": false,
      "start": 471,
      "end": 789
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 789
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 14,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 29,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
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
    "value": "iterableOfPromise",
    "start": 108,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 154,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 218,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 221,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 311,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "iterableOfPromise",
    "start": 314,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 358,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 361,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 401,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 426,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 439,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "iterableOfPromise",
    "start": 442,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "async",
    "start": 471,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 477,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 506,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 529,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 537,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 540,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 571,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 578,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 586,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 589,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 615,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 622,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "iterableOfPromise",
    "start": 633,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 680,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 707,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 711,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 720,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 723,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 749,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 758,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "iterableOfPromise",
    "start": 761,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  }
]
```
