__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 131
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 136,
            "end": 150
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 157
            },
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
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 166
          }
        ],
        "start": 132,
        "end": 168
      },
      "declare": false,
      "start": 115,
      "end": 168
    },
    {
      "type": "BlockStatement",
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
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 184
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 197
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "optional": false,
                    "computed": false,
                    "start": 193,
                    "end": 203
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 204,
                            "end": 208
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 215
                          },
                          "optional": false,
                          "computed": false,
                          "start": 204,
                          "end": 215
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 204,
                        "end": 217
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 220,
                        "end": 221
                      },
                      "start": 204,
                      "end": 221
                    }
                  ],
                  "optional": false,
                  "start": 193,
                  "end": 222
                },
                "id": null,
                "generator": false,
                "start": 187,
                "end": 222
              },
              "definite": false,
              "start": 180,
              "end": 222
            }
          ],
          "declare": false,
          "start": 174,
          "end": 223
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
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 236
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 236
            },
            "right": {
              "type": "Literal",
              "value": "Rando",
              "raw": "'Rando'",
              "start": 239,
              "end": 246
            },
            "start": 226,
            "end": 246
          },
          "directive": null,
          "start": 226,
          "end": 247
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
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 261
              },
              "optional": false,
              "computed": false,
              "start": 252,
              "end": 261
            },
            "right": {
              "type": "Literal",
              "value": "Calrissian",
              "raw": "'Calrissian'",
              "start": 264,
              "end": 276
            },
            "start": 252,
            "end": 276
          },
          "directive": null,
          "start": 252,
          "end": 277
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
                "name": "diceP",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 299
                    },
                    "typeArguments": null,
                    "start": 293,
                    "end": 299
                  },
                  "start": 291,
                  "end": 299
                },
                "start": 286,
                "end": 299
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 306
              },
              "definite": false,
              "start": 286,
              "end": 306
            }
          ],
          "declare": false,
          "start": 280,
          "end": 307
        }
      ],
      "start": 170,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 115,
  "end": 312
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 115,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 136,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 153,
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
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "dice",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "floor",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "dice",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "'Rando'",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "dice",
    "start": 252,
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
    "value": "last",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "String",
    "value": "'Calrissian'",
    "start": 264,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "diceP",
    "start": 286,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "dice",
    "start": 302,
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
    "start": 310,
    "end": 311
  }
]
```
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
        "name": "doHumanThings",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 331
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 339,
        "end": 341
      },
      "expression": false,
      "start": 309,
      "end": 341
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
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 354
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 367
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "floor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 373
                },
                "optional": false,
                "computed": false,
                "start": 363,
                "end": 373
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 378
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 385
                      },
                      "optional": false,
                      "computed": false,
                      "start": 374,
                      "end": 385
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 374,
                    "end": 387
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 390,
                    "end": 391
                  },
                  "start": 374,
                  "end": 391
                }
              ],
              "optional": false,
              "start": 363,
              "end": 392
            },
            "id": null,
            "generator": false,
            "start": 357,
            "end": 392
          },
          "definite": false,
          "start": 349,
          "end": 392
        }
      ],
      "declare": false,
      "start": 343,
      "end": 393
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
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "last",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 430
          },
          "optional": false,
          "computed": false,
          "start": 420,
          "end": 430
        },
        "right": {
          "type": "Literal",
          "value": "Calrissian",
          "raw": "'Calrissian'",
          "start": 433,
          "end": 445
        },
        "start": 420,
        "end": 445
      },
      "directive": null,
      "start": 420,
      "end": 446
    },
    {
      "type": "BlockStatement",
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
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 536
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 549
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 555
                    },
                    "optional": false,
                    "computed": false,
                    "start": 545,
                    "end": 555
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 556,
                            "end": 560
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 561,
                            "end": 567
                          },
                          "optional": false,
                          "computed": false,
                          "start": 556,
                          "end": 567
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 556,
                        "end": 569
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 572,
                        "end": 573
                      },
                      "start": 556,
                      "end": 573
                    }
                  ],
                  "optional": false,
                  "start": 545,
                  "end": 574
                },
                "id": null,
                "generator": false,
                "start": 539,
                "end": 574
              },
              "definite": false,
              "start": 531,
              "end": 574
            }
          ],
          "declare": false,
          "start": 525,
          "end": 575
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
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 578,
              "end": 589
            },
            "right": {
              "type": "Literal",
              "value": "Rando",
              "raw": "'Rando'",
              "start": 592,
              "end": 599
            },
            "start": 578,
            "end": 599
          },
          "directive": null,
          "start": 578,
          "end": 600
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
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 613
              },
              "optional": false,
              "computed": false,
              "start": 603,
              "end": 613
            },
            "right": {
              "type": "Literal",
              "value": "Calrissian",
              "raw": "'Calrissian'",
              "start": 616,
              "end": 628
            },
            "start": 603,
            "end": 628
          },
          "directive": null,
          "start": 603,
          "end": 629
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "doHumanThings",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 655
              }
            ],
            "optional": false,
            "start": 636,
            "end": 656
          },
          "directive": null,
          "start": 636,
          "end": 656
        }
      ],
      "start": 521,
      "end": 658
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 309,
  "end": 658
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "doHumanThings",
    "start": 318,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "dice1",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 360,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "floor",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 390,
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
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "dice1",
    "start": 420,
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
    "value": "last",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432
  },
  {
    "type": "String",
    "value": "'Calrissian'",
    "start": 433,
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
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 525,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "dice2",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "floor",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 556,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 570,
    "end": 571
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "dice2",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 584,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "String",
    "value": "'Rando'",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "dice2",
    "start": 603,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "String",
    "value": "'Calrissian'",
    "start": 616,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "doHumanThings",
    "start": 636,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "dice2",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  }
]
```
