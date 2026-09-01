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
        "name": "invariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 38,
              "end": 45
            },
            "start": 36,
            "end": 45
          },
          "start": 27,
          "end": 45
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 65
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 48,
          "end": 65
        },
        "start": 46,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 79
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 91
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                ],
                "start": 91,
                "end": 107
              },
              "start": 85,
              "end": 107
            },
            "start": 83,
            "end": 107
          },
          "start": 80,
          "end": 107
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "invariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 124
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "test",
                    "raw": "\"test\"",
                    "start": 125,
                    "end": 131
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 138
                  },
                  "start": 125,
                  "end": 138
                }
              ],
              "optional": false,
              "start": 115,
              "end": 139
            },
            "directive": null,
            "start": 115,
            "end": 140
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 160
            },
            "start": 145,
            "end": 161
          }
        ],
        "start": 109,
        "end": 174
      },
      "expression": false,
      "start": 68,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 187
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 199
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 208,
                    "end": 214
                  }
                ],
                "start": 199,
                "end": 215
              },
              "start": 193,
              "end": 215
            },
            "start": 191,
            "end": 215
          },
          "start": 188,
          "end": 215
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
                "type": "Literal",
                "value": "test",
                "raw": "\"test\"",
                "start": 227,
                "end": 233
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 240
              },
              "start": 227,
              "end": 240
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 262
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 267
                    },
                    "optional": false,
                    "computed": false,
                    "start": 259,
                    "end": 267
                  },
                  "start": 252,
                  "end": 268
                }
              ],
              "start": 242,
              "end": 285
            },
            "alternate": null,
            "start": 223,
            "end": 285
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 297,
              "end": 306
            },
            "start": 290,
            "end": 307
          }
        ],
        "start": 217,
        "end": 309
      },
      "expression": false,
      "start": 176,
      "end": 309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 334
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 343,
                    "end": 349
                  }
                ],
                "start": 334,
                "end": 350
              },
              "start": 328,
              "end": 350
            },
            "start": 326,
            "end": 350
          },
          "start": 323,
          "end": 350
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 366
              },
              "optional": false,
              "computed": false,
              "start": 358,
              "end": 366
            },
            "directive": null,
            "start": 358,
            "end": 367
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "test",
                "raw": "\"test\"",
                "start": 399,
                "end": 405
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 412
              },
              "start": 399,
              "end": 412
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 427
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 432
                    },
                    "optional": false,
                    "computed": false,
                    "start": 424,
                    "end": 432
                  },
                  "directive": null,
                  "start": 424,
                  "end": 433
                }
              ],
              "start": 414,
              "end": 450
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 473
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 474,
                      "end": 478
                    },
                    "optional": false,
                    "computed": false,
                    "start": 470,
                    "end": 478
                  },
                  "directive": null,
                  "start": 470,
                  "end": 479
                }
              ],
              "start": 460,
              "end": 499
            },
            "start": 395,
            "end": 499
          }
        ],
        "start": 352,
        "end": 501
      },
      "expression": false,
      "start": 311,
      "end": 501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 514
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 526
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 535,
                    "end": 541
                  }
                ],
                "start": 526,
                "end": 542
              },
              "start": 520,
              "end": 542
            },
            "start": 518,
            "end": 542
          },
          "start": 515,
          "end": 542
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 558
              },
              "optional": false,
              "computed": false,
              "start": 550,
              "end": 558
            },
            "directive": null,
            "start": 550,
            "end": 559
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 594
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 609
                },
                "optional": false,
                "computed": false,
                "start": 591,
                "end": 609
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 610,
                  "end": 616
                }
              ],
              "optional": false,
              "start": 591,
              "end": 617
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 629,
                      "end": 632
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 637
                    },
                    "optional": false,
                    "computed": false,
                    "start": 629,
                    "end": 637
                  },
                  "directive": null,
                  "start": 629,
                  "end": 638
                }
              ],
              "start": 619,
              "end": 655
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 678
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 683
                    },
                    "optional": false,
                    "computed": false,
                    "start": 675,
                    "end": 683
                  },
                  "directive": null,
                  "start": 675,
                  "end": 684
                }
              ],
              "start": 665,
              "end": 704
            },
            "start": 587,
            "end": 704
          }
        ],
        "start": 544,
        "end": 706
      },
      "expression": false,
      "start": 503,
      "end": 706
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 706
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
    "value": "invariant",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 48,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 56,
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
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "invariant",
    "start": 115,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 176,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 227,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 234,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 252,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 263,
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
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 297,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 399,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 409,
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
    "type": "Identifier",
    "value": "obj",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 474,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 503,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
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
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 595,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  }
]
```
