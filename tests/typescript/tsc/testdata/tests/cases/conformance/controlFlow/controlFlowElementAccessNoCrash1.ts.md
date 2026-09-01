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
        "name": "TestTscEdit",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "name": "caption",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 42
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  },
                  "start": 72,
                  "end": 80
                },
                "start": 63,
                "end": 80
              },
              "start": 61,
              "end": 80
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 81
          }
        ],
        "start": 22,
        "end": 83
      },
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestTscCompile",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 109
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
              "name": "subScenario",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 134
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 163,
                    "end": 169
                  },
                  "start": 163,
                  "end": 171
                },
                "start": 154,
                "end": 171
              },
              "start": 152,
              "end": 171
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 172
          }
        ],
        "start": 110,
        "end": 174
      },
      "declare": false,
      "start": 85,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VerifyTscEditDiscrepanciesInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 217
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
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 222,
            "end": 236
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "edits",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestTscEdit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 266
                    },
                    "typeArguments": null,
                    "start": 255,
                    "end": 266
                  },
                  "start": 255,
                  "end": 268
                },
                "start": 246,
                "end": 268
              },
              "start": 244,
              "end": 268
            },
            "accessibility": null,
            "static": false,
            "start": 239,
            "end": 269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TestTscCompile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 303
                  },
                  "typeArguments": null,
                  "start": 289,
                  "end": 303
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "commandLineArgs",
                    "raw": "\"commandLineArgs\"",
                    "start": 304,
                    "end": 321
                  },
                  "start": 304,
                  "end": 321
                },
                "start": 289,
                "end": 322
              },
              "start": 287,
              "end": 322
            },
            "accessibility": null,
            "static": false,
            "start": 272,
            "end": 323
          }
        ],
        "start": 218,
        "end": 325
      },
      "declare": false,
      "start": 176,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testTscCompile",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 350
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestTscCompile",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 372
              },
              "typeArguments": null,
              "start": 358,
              "end": 372
            },
            "start": 356,
            "end": 372
          },
          "start": 351,
          "end": 372
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 374,
        "end": 376
      },
      "expression": false,
      "start": 327,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "verifyTscEditDiscrepancies",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 413
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
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 423
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 423
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 418,
              "end": 423
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "edits",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 432
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "edits",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 432
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 427,
              "end": 432
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 451
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 451
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 436,
              "end": 451
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "VerifyTscEditDiscrepanciesInput",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 487
              },
              "typeArguments": null,
              "start": 456,
              "end": 487
            },
            "start": 454,
            "end": 487
          },
          "start": 414,
          "end": 487
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
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
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 501,
                      "end": 508
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 510
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "edits",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 518
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 524
                  },
                  "optional": false,
                  "computed": true,
                  "start": 513,
                  "end": 525
                },
                "definite": false,
                "start": 499,
                "end": 525
              }
            ],
            "declare": false,
            "start": 493,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "testTscCompile",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 543
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "subScenario",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 550,
                        "end": 561
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 570
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 550,
                      "end": 570
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "commandLineArgs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 591
                      },
                      "value": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "edits",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 593,
                              "end": 598
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 604
                            },
                            "optional": false,
                            "computed": true,
                            "start": 593,
                            "end": 605
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "commandLineArgs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 621
                          },
                          "optional": false,
                          "computed": false,
                          "start": 593,
                          "end": 621
                        },
                        "operator": "||",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "commandLineArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 625,
                          "end": 640
                        },
                        "start": 593,
                        "end": 640
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 576,
                      "end": 640
                    }
                  ],
                  "start": 544,
                  "end": 645
                }
              ],
              "optional": false,
              "start": 529,
              "end": 646
            },
            "directive": null,
            "start": 529,
            "end": 647
          }
        ],
        "start": 489,
        "end": 649
      },
      "expression": false,
      "start": 378,
      "end": 649
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 649
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "TestTscEdit",
    "start": 10,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "caption",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 45,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 60,
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
    "value": "readonly",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 85,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "TestTscCompile",
    "start": 95,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "subScenario",
    "start": 114,
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
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 137,
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
    "value": "readonly",
    "start": 154,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "VerifyTscEditDiscrepanciesInput",
    "start": 186,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "edits",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "TestTscEdit",
    "start": 255,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 272,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "TestTscCompile",
    "start": 289,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"commandLineArgs\"",
    "start": 304,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 327,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "testTscCompile",
    "start": 336,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "TestTscCompile",
    "start": 358,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 378,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "verifyTscEditDiscrepancies",
    "start": 387,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "edits",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 436,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "VerifyTscEditDiscrepanciesInput",
    "start": 456,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "caption",
    "start": 501,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "edits",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "testTscCompile",
    "start": 529,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "subScenario",
    "start": 550,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "caption",
    "start": 563,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 576,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "edits",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 606,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 622,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "commandLineArgs",
    "start": 625,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  }
]
```
