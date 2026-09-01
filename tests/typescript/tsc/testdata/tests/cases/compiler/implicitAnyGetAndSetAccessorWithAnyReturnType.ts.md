__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetAndSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
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
              "name": "getAndSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 57
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 60,
              "end": 64
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 48,
            "end": 65
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 130
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 182,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getAndSet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 196
                      },
                      "optional": false,
                      "computed": false,
                      "start": 182,
                      "end": 196
                    },
                    "start": 175,
                    "end": 197
                  }
                ],
                "start": 133,
                "end": 203
              },
              "expression": false,
              "start": 130,
              "end": 203
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 106,
            "end": 203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 271
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 277
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 310,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getAndSet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 324
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 324
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 332
                      },
                      "start": 310,
                      "end": 332
                    },
                    "directive": null,
                    "start": 310,
                    "end": 333
                  }
                ],
                "start": 279,
                "end": 339
              },
              "expression": false,
              "start": 271,
              "end": 339
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 247,
            "end": 339
          }
        ],
        "start": 42,
        "end": 341
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 341
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetterOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 359
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveOnlySet",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 388
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newXValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 398
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 400,
                "end": 445
              },
              "expression": false,
              "start": 388,
              "end": 445
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 366,
            "end": 445
          }
        ],
        "start": 360,
        "end": 447
      },
      "abstract": false,
      "declare": false,
      "start": 343,
      "end": 447
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetterOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 465
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveOnlyGet",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 494
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 541,
                      "end": 545
                    },
                    "start": 534,
                    "end": 546
                  }
                ],
                "start": 497,
                "end": 552
              },
              "expression": false,
              "start": 494,
              "end": 552
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 472,
            "end": 552
          }
        ],
        "start": 466,
        "end": 554
      },
      "abstract": false,
      "declare": false,
      "start": 449,
      "end": 554
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 554
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "GetAndSet",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "getAndSet",
    "start": 48,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Null",
    "value": "null",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "haveGetAndSet",
    "start": 117,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 175,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 182,
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
    "value": "getAndSet",
    "start": 187,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 247,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "haveGetAndSet",
    "start": 258,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "getAndSet",
    "start": 315,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "SetterOnly",
    "start": 349,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 366,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "haveOnlySet",
    "start": 377,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "newXValue",
    "start": 389,
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
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "GetterOnly",
    "start": 455,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 472,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "haveOnlyGet",
    "start": 483,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 534,
    "end": 540
  },
  {
    "type": "Null",
    "value": "null",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  }
]
```
