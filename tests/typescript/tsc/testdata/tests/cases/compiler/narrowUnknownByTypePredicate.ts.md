__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNotNullish",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 37,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "start": 30,
          "end": 44
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 52
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 56,
              "end": 58
            },
            "start": 56,
            "end": 58
          },
          "start": 47,
          "end": 58
        },
        "start": 45,
        "end": 58
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNullish",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 94,
              "end": 101
            },
            "start": 92,
            "end": 101
          },
          "start": 87,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 109
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 113,
                  "end": 117
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 120,
                  "end": 129
                }
              ],
              "start": 113,
              "end": 129
            },
            "start": 113,
            "end": 129
          },
          "start": 104,
          "end": 129
        },
        "start": 102,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 130
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
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 154,
                "end": 161
              },
              "start": 152,
              "end": 161
            },
            "start": 146,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 161
        }
      ],
      "declare": true,
      "start": 132,
      "end": 162
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNotNullish",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 179
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 186
          }
        ],
        "optional": false,
        "start": 167,
        "end": 187
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "directive": null,
            "start": 193,
            "end": 200
          }
        ],
        "start": 189,
        "end": 202
      },
      "alternate": null,
      "start": 163,
      "end": 202
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
            "name": "value2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 226,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "start": 218,
            "end": 233
          },
          "init": null,
          "definite": false,
          "start": 218,
          "end": 233
        }
      ],
      "declare": true,
      "start": 204,
      "end": 234
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNotNullish",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 252
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 259
            }
          ],
          "optional": false,
          "start": 240,
          "end": 260
        },
        "prefix": true,
        "start": 239,
        "end": 260
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 272
            },
            "directive": null,
            "start": 266,
            "end": 273
          }
        ],
        "start": 262,
        "end": 275
      },
      "alternate": null,
      "start": 235,
      "end": 275
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
            "name": "value3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 299,
                "end": 306
              },
              "start": 297,
              "end": 306
            },
            "start": 291,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": true,
      "start": 277,
      "end": 307
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNullish",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 321
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 328
          }
        ],
        "optional": false,
        "start": 312,
        "end": 329
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value3",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 341
            },
            "directive": null,
            "start": 335,
            "end": 342
          }
        ],
        "start": 331,
        "end": 344
      },
      "alternate": null,
      "start": 308,
      "end": 344
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
            "name": "value4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 368,
                "end": 375
              },
              "start": 366,
              "end": 375
            },
            "start": 360,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 360,
          "end": 375
        }
      ],
      "declare": true,
      "start": 346,
      "end": 376
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNullish",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 391
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 398
            }
          ],
          "optional": false,
          "start": 382,
          "end": 399
        },
        "prefix": true,
        "start": 381,
        "end": 399
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 411
            },
            "directive": null,
            "start": 405,
            "end": 412
          }
        ],
        "start": 401,
        "end": 414
      },
      "alternate": null,
      "start": 377,
      "end": 414
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 431
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 434,
            "end": 446
          }
        ],
        "start": 432,
        "end": 448
      },
      "abstract": false,
      "declare": true,
      "start": 416,
      "end": 448
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 469
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 477,
              "end": 484
            },
            "start": 475,
            "end": 484
          },
          "start": 470,
          "end": 484
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 492
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "typeArguments": null,
              "start": 496,
              "end": 497
            },
            "start": 496,
            "end": 497
          },
          "start": 487,
          "end": 497
        },
        "start": 485,
        "end": 497
      },
      "body": null,
      "expression": false,
      "start": 449,
      "end": 498
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
            "name": "value5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 522,
                "end": 529
              },
              "start": 520,
              "end": 529
            },
            "start": 514,
            "end": 529
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 529
        }
      ],
      "declare": true,
      "start": 500,
      "end": 530
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 538
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value5",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 545
          }
        ],
        "optional": false,
        "start": 535,
        "end": 546
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value5",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 558
            },
            "directive": null,
            "start": 552,
            "end": 559
          }
        ],
        "start": 548,
        "end": 561
      },
      "alternate": null,
      "start": 531,
      "end": 561
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
            "name": "value6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 585,
                "end": 592
              },
              "start": 583,
              "end": 592
            },
            "start": 577,
            "end": 592
          },
          "init": null,
          "definite": false,
          "start": 577,
          "end": 592
        }
      ],
      "declare": true,
      "start": 563,
      "end": 593
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 609
            }
          ],
          "optional": false,
          "start": 599,
          "end": 610
        },
        "prefix": true,
        "start": 598,
        "end": 610
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 622
            },
            "directive": null,
            "start": 616,
            "end": 623
          }
        ],
        "start": 612,
        "end": 625
      },
      "alternate": null,
      "start": 594,
      "end": 625
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 625
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "isNotNullish",
    "start": 17,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "isNullish",
    "start": 77,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 110,
    "end": 112
  },
  {
    "type": "Null",
    "value": "null",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 120,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 132,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 154,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "isNotNullish",
    "start": 167,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 204,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "isNotNullish",
    "start": 240,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 277,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "isNullish",
    "start": 312,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 346,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "value4",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 368,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "isNullish",
    "start": 382,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "value4",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "value4",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 416,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 424,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 449,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 477,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 487,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 500,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 508,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "value5",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 522,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "value5",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
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
    "value": "value5",
    "start": 552,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 563,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 571,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "value6",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "value6",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "value6",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  }
]
```
