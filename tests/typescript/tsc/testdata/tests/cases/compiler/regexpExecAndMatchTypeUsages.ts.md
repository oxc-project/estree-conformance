__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
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
            "name": "matchResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 49
                },
                "typeArguments": null,
                "start": 33,
                "end": 49
              },
              "start": 31,
              "end": 49
            },
            "start": 20,
            "end": 49
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "execResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpExecArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 78
                },
                "typeArguments": null,
                "start": 63,
                "end": 78
              },
              "start": 61,
              "end": 78
            },
            "start": 51,
            "end": 78
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 97
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 98,
                    "end": 99
                  },
                  "optional": false,
                  "computed": true,
                  "start": 86,
                  "end": 100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 107
                },
                "optional": false,
                "computed": false,
                "start": 86,
                "end": 107
              },
              "directive": null,
              "start": 86,
              "end": 108
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 124
                  },
                  "property": {
                    "type": "Literal",
                    "value": 999,
                    "raw": "999",
                    "start": 125,
                    "end": 128
                  },
                  "optional": false,
                  "computed": true,
                  "start": 113,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 136
                },
                "optional": false,
                "computed": false,
                "start": 113,
                "end": 136
              },
              "directive": null,
              "start": 113,
              "end": 137
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 153
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 159
                  },
                  "optional": false,
                  "computed": false,
                  "start": 142,
                  "end": 159
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 162,
                  "end": 163
                },
                "start": 142,
                "end": 163
              },
              "directive": null,
              "start": 142,
              "end": 164
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 180
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 186
                  },
                  "optional": false,
                  "computed": false,
                  "start": 169,
                  "end": 186
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 193
                },
                "optional": false,
                "computed": false,
                "start": 169,
                "end": 193
              },
              "directive": null,
              "start": 169,
              "end": 194
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "matchResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 210
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "groups",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 217
                    },
                    "optional": false,
                    "computed": false,
                    "start": 199,
                    "end": 217
                  },
                  "property": {
                    "type": "Literal",
                    "value": "someVariable",
                    "raw": "\"someVariable\"",
                    "start": 218,
                    "end": 232
                  },
                  "optional": false,
                  "computed": true,
                  "start": 199,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 240
                },
                "optional": false,
                "computed": false,
                "start": 199,
                "end": 240
              },
              "directive": null,
              "start": 199,
              "end": 241
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
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 257
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "groups",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 264
                  },
                  "optional": false,
                  "computed": false,
                  "start": 246,
                  "end": 264
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 276
                },
                "start": 246,
                "end": 276
              },
              "directive": null,
              "start": 246,
              "end": 277
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 293
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 294,
                    "end": 295
                  },
                  "optional": false,
                  "computed": true,
                  "start": 283,
                  "end": 296
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 303
                },
                "optional": false,
                "computed": false,
                "start": 283,
                "end": 303
              },
              "directive": null,
              "start": 283,
              "end": 304
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 319
                  },
                  "property": {
                    "type": "Literal",
                    "value": 999,
                    "raw": "999",
                    "start": 320,
                    "end": 323
                  },
                  "optional": false,
                  "computed": true,
                  "start": 309,
                  "end": 324
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 331
                },
                "optional": false,
                "computed": false,
                "start": 309,
                "end": 331
              },
              "directive": null,
              "start": 309,
              "end": 332
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 347
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 353
                  },
                  "optional": false,
                  "computed": false,
                  "start": 337,
                  "end": 353
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 356,
                  "end": 357
                },
                "start": 337,
                "end": 357
              },
              "directive": null,
              "start": 337,
              "end": 358
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 373
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 379
                  },
                  "optional": false,
                  "computed": false,
                  "start": 363,
                  "end": 379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 386
                },
                "optional": false,
                "computed": false,
                "start": 363,
                "end": 386
              },
              "directive": null,
              "start": 363,
              "end": 387
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "execResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 402
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "groups",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 409
                    },
                    "optional": false,
                    "computed": false,
                    "start": 392,
                    "end": 409
                  },
                  "property": {
                    "type": "Literal",
                    "value": "someVariable",
                    "raw": "\"someVariable\"",
                    "start": 410,
                    "end": 424
                  },
                  "optional": false,
                  "computed": true,
                  "start": 392,
                  "end": 425
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 432
                },
                "optional": false,
                "computed": false,
                "start": 392,
                "end": 432
              },
              "directive": null,
              "start": 392,
              "end": 433
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
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 448
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "groups",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 455
                  },
                  "optional": false,
                  "computed": false,
                  "start": 438,
                  "end": 455
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 467
                },
                "start": 438,
                "end": 467
              },
              "directive": null,
              "start": 438,
              "end": 468
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
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 482
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 489
                  },
                  "optional": false,
                  "computed": false,
                  "start": 478,
                  "end": 489
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 478,
                "end": 491
              },
              "consequent": {
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
                        "name": "matchResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 514
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "execResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 527
                      },
                      "start": 503,
                      "end": 527
                    },
                    "directive": null,
                    "start": 503,
                    "end": 528
                  }
                ],
                "start": 493,
                "end": 534
              },
              "alternate": {
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
                        "name": "execResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 564
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "matchResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 578
                      },
                      "start": 554,
                      "end": 578
                    },
                    "directive": null,
                    "start": 554,
                    "end": 578
                  }
                ],
                "start": 544,
                "end": 584
              },
              "start": 474,
              "end": 584
            }
          ],
          "start": 80,
          "end": 586
        },
        "expression": false,
        "start": 7,
        "end": 586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 586
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 16,
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
    "value": "matchResult",
    "start": 20,
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
    "value": "RegExpMatchArray",
    "start": 33,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 51,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "RegExpExecArray",
    "start": 63,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "matchResult",
    "start": 86,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 98,
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
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "matchResult",
    "start": 113,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "999",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "matchResult",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "matchResult",
    "start": 169,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "length",
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
    "type": "Identifier",
    "value": "matchResult",
    "start": 199,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "String",
    "value": "\"someVariable\"",
    "start": 218,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "matchResult",
    "start": 246,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 267,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 283,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 309,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "999",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 337,
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
    "value": "index",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 354,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 363,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 392,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 409,
    "end": 410
  },
  {
    "type": "String",
    "value": "\"someVariable\"",
    "start": 410,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 426,
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
    "value": "execResult",
    "start": 438,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 449,
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
    "value": "undefined",
    "start": 458,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "matchResult",
    "start": 503,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "execResult",
    "start": 517,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 539,
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
    "value": "execResult",
    "start": 554,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "matchResult",
    "start": 567,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  }
]
```
