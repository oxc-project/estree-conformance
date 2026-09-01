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
        "name": "stringify1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 32,
                        "end": 40
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 44,
                          "end": 50
                        },
                        "start": 42,
                        "end": 50
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 32,
                      "end": 50
                    }
                  ],
                  "start": 30,
                  "end": 52
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 55,
                  "end": 64
                }
              ],
              "start": 30,
              "end": 64
            },
            "start": 28,
            "end": 64
          },
          "start": 20,
          "end": 64
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 67,
          "end": 73
        },
        "start": 65,
        "end": 73
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 102
                  },
                  "prefix": true,
                  "start": 87,
                  "end": 102
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 107,
                  "end": 115
                },
                "start": 87,
                "end": 115
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 126
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 138
                  },
                  "optional": false,
                  "computed": false,
                  "start": 118,
                  "end": 138
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 118,
                "end": 140
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 143,
                "end": 145
              },
              "start": 87,
              "end": 145
            },
            "start": 80,
            "end": 146
          }
        ],
        "start": 74,
        "end": 148
      },
      "expression": false,
      "start": 0,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 169
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 180,
                  "end": 182
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 185,
                  "end": 194
                }
              ],
              "start": 180,
              "end": 194
            },
            "start": 178,
            "end": 194
          },
          "start": 170,
          "end": 194
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 197,
          "end": 203
        },
        "start": 195,
        "end": 203
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 232
                  },
                  "prefix": true,
                  "start": 217,
                  "end": 232
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 237,
                  "end": 245
                },
                "start": 217,
                "end": 245
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 268
                  },
                  "optional": false,
                  "computed": false,
                  "start": 248,
                  "end": 268
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 248,
                "end": 270
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 273,
                "end": 275
              },
              "start": 217,
              "end": 275
            },
            "start": 210,
            "end": 276
          }
        ],
        "start": 204,
        "end": 278
      },
      "expression": false,
      "start": 150,
      "end": 278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify3",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 310,
                  "end": 317
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 320,
                  "end": 329
                }
              ],
              "start": 310,
              "end": 329
            },
            "start": 308,
            "end": 329
          },
          "start": 300,
          "end": 329
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 332,
          "end": 338
        },
        "start": 330,
        "end": 338
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 429
                  },
                  "prefix": true,
                  "start": 414,
                  "end": 429
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 434,
                  "end": 442
                },
                "start": 414,
                "end": 442
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 453
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 465
                  },
                  "optional": false,
                  "computed": false,
                  "start": 445,
                  "end": 465
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 445,
                "end": 467
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 470,
                "end": 472
              },
              "start": 414,
              "end": 472
            },
            "start": 407,
            "end": 473
          }
        ],
        "start": 339,
        "end": 475
      },
      "expression": false,
      "start": 280,
      "end": 475
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify4",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 517
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
                          "start": 522,
                          "end": 528
                        },
                        "start": 520,
                        "end": 528
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 509,
                      "end": 528
                    }
                  ],
                  "start": 507,
                  "end": 530
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 533,
                  "end": 542
                }
              ],
              "start": 507,
              "end": 542
            },
            "start": 505,
            "end": 542
          },
          "start": 497,
          "end": 542
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 545,
          "end": 551
        },
        "start": 543,
        "end": 551
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 580
                  },
                  "prefix": true,
                  "start": 565,
                  "end": 580
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 585,
                  "end": 593
                },
                "start": 565,
                "end": 593
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 596,
                    "end": 604
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 616
                  },
                  "optional": false,
                  "computed": false,
                  "start": 596,
                  "end": 616
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 596,
                "end": 618
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 621,
                "end": 623
              },
              "start": 565,
              "end": 623
            },
            "start": 558,
            "end": 624
          }
        ],
        "start": 552,
        "end": 626
      },
      "expression": false,
      "start": 477,
      "end": 626
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 626
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
    "value": "stringify1",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 20,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
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
    "value": "undefined",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 80,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 94,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 103,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 118,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 127,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "stringify2",
    "start": 159,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 185,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 217,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 224,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 233,
    "end": 236
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 237,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 248,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 257,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 280,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "stringify3",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 300,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 320,
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
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 407,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 414,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 430,
    "end": 433
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 434,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 454,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 477,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "stringify4",
    "start": 486,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 497,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 509,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
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
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 533,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 558,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 565,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 572,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 581,
    "end": 584
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 585,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 596,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 605,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  }
]
```
