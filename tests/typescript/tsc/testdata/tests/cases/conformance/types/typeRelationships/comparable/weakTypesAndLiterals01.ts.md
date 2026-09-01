__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 36,
                      "end": 40
                    },
                    "start": 36,
                    "end": 40
                  },
                  "start": 34,
                  "end": 40
                },
                "accessibility": null,
                "static": false,
                "start": 25,
                "end": 41
              }
            ],
            "start": 23,
            "end": 43
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 63
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  },
                  "start": 66,
                  "end": 74
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 52,
                "end": 74
              }
            ],
            "start": 50,
            "end": 76
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 96
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  },
                  "start": 99,
                  "end": 107
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 85,
                "end": 108
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 126
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 129,
                    "end": 135
                  },
                  "start": 127,
                  "end": 135
                },
                "accessibility": null,
                "static": false,
                "start": 109,
                "end": 135
              }
            ],
            "start": 83,
            "end": 137
          }
        ],
        "start": 21,
        "end": 137
      },
      "declare": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralsOrWeakTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 164
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 173,
              "end": 176
            },
            "start": 173,
            "end": 176
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 183,
              "end": 186
            },
            "start": 183,
            "end": 186
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 202
            },
            "typeArguments": null,
            "start": 193,
            "end": 202
          }
        ],
        "start": 171,
        "end": 202
      },
      "declare": false,
      "start": 140,
      "end": 203
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
            "name": "aOrB",
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
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 223,
                      "end": 226
                    },
                    "start": 223,
                    "end": 226
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 229,
                      "end": 232
                    },
                    "start": 229,
                    "end": 232
                  }
                ],
                "start": 223,
                "end": 232
              },
              "start": 221,
              "end": 232
            },
            "start": 217,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 232
        }
      ],
      "declare": true,
      "start": 205,
      "end": 233
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LiteralsOrWeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 270
                  },
                  "start": 249,
                  "end": 270
                },
                "start": 246,
                "end": 270
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 288
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 293,
                      "end": 296
                    },
                    "start": 285,
                    "end": 296
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 318
                        },
                        "start": 308,
                        "end": 319
                      }
                    ],
                    "start": 298,
                    "end": 325
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 355
                        },
                        "start": 345,
                        "end": 356
                      }
                    ],
                    "start": 335,
                    "end": 362
                  },
                  "start": 281,
                  "end": 362
                }
              ],
              "start": 275,
              "end": 364
            },
            "id": null,
            "generator": false,
            "start": 245,
            "end": 364
          },
          "definite": false,
          "start": 241,
          "end": 364
        }
      ],
      "declare": false,
      "start": 235,
      "end": 364
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
            "start": 372,
            "end": 373
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 382,
                      "end": 391
                    },
                    "typeArguments": null,
                    "start": 382,
                    "end": 391
                  },
                  "start": 380,
                  "end": 391
                },
                "start": 377,
                "end": 391
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 409
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 414,
                      "end": 417
                    },
                    "start": 406,
                    "end": 417
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 439
                        },
                        "start": 429,
                        "end": 440
                      }
                    ],
                    "start": 419,
                    "end": 446
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 476
                        },
                        "start": 466,
                        "end": 477
                      }
                    ],
                    "start": 456,
                    "end": 483
                  },
                  "start": 402,
                  "end": 483
                }
              ],
              "start": 396,
              "end": 485
            },
            "id": null,
            "generator": false,
            "start": 376,
            "end": 485
          },
          "definite": false,
          "start": 372,
          "end": 485
        }
      ],
      "declare": false,
      "start": 366,
      "end": 485
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LiteralsOrWeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 503,
                    "end": 522
                  },
                  "start": 501,
                  "end": 522
                },
                "start": 498,
                "end": 522
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 540
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aOrB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 549
                    },
                    "start": 537,
                    "end": 549
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 571
                        },
                        "start": 561,
                        "end": 572
                      }
                    ],
                    "start": 551,
                    "end": 578
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 608
                        },
                        "start": 598,
                        "end": 609
                      }
                    ],
                    "start": 588,
                    "end": 615
                  },
                  "start": 533,
                  "end": 615
                }
              ],
              "start": 527,
              "end": 617
            },
            "id": null,
            "generator": false,
            "start": 497,
            "end": 617
          },
          "definite": false,
          "start": 493,
          "end": 617
        }
      ],
      "declare": false,
      "start": 487,
      "end": 617
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 635,
                      "end": 644
                    },
                    "typeArguments": null,
                    "start": 635,
                    "end": 644
                  },
                  "start": 633,
                  "end": 644
                },
                "start": 630,
                "end": 644
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 662
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aOrB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 671
                    },
                    "start": 659,
                    "end": 671
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 690,
                          "end": 693
                        },
                        "start": 683,
                        "end": 694
                      }
                    ],
                    "start": 673,
                    "end": 700
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 730
                        },
                        "start": 720,
                        "end": 731
                      }
                    ],
                    "start": 710,
                    "end": 737
                  },
                  "start": 655,
                  "end": 737
                }
              ],
              "start": 649,
              "end": 739
            },
            "id": null,
            "generator": false,
            "start": 629,
            "end": 739
          },
          "definite": false,
          "start": 625,
          "end": 739
        }
      ],
      "declare": false,
      "start": 619,
      "end": 739
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 739
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "WeakTypes",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 25,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 52,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 85,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "otherOptionalProp",
    "start": 109,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 140,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "LiteralsOrWeakTypes",
    "start": 145,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 181,
    "end": 182
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "WeakTypes",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 205,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "aOrB",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "LiteralsOrWeakTypes",
    "start": 251,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 289,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 308,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 345,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "WeakTypes",
    "start": 382,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 410,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 429,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 466,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 473,
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
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 487,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "LiteralsOrWeakTypes",
    "start": 503,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "aOrB",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 583,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 598,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 619,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "WeakTypes",
    "start": 635,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 646,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 663,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "aOrB",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 683,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 720,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  }
]
```
