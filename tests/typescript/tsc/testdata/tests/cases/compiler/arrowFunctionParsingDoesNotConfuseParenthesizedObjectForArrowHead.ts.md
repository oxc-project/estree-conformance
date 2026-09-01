__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 95,
                "end": 102
              },
              "start": 93,
              "end": 102
            },
            "start": 88,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 102
        }
      ],
      "declare": true,
      "start": 76,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "start": 116,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 122
        }
      ],
      "declare": true,
      "start": 104,
      "end": 123
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 135
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 259
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 267
                    },
                    "prefix": true,
                    "start": 261,
                    "end": 267
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 255,
                  "end": 267
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "run",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 497,
                                  "end": 498
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "optional": false,
                                "computed": false,
                                "start": 497,
                                "end": 500
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 497,
                              "end": 502
                            },
                            "prefix": true,
                            "start": 496,
                            "end": 502
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "special",
                                  "raw": "'special'",
                                  "start": 513,
                                  "end": 522
                                },
                                "start": 506,
                                "end": 523
                              }
                            ],
                            "start": 504,
                            "end": 525
                          },
                          "alternate": null,
                          "start": 493,
                          "end": 525
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "default",
                            "raw": "'default'",
                            "start": 542,
                            "end": 551
                          },
                          "start": 535,
                          "end": 552
                        }
                      ],
                      "start": 328,
                      "end": 558
                    },
                    "id": null,
                    "generator": false,
                    "start": 322,
                    "end": 558
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 317,
                  "end": 558
                }
              ],
              "start": 145,
              "end": 560
            },
            "id": null,
            "generator": false,
            "start": 138,
            "end": 561
          },
          "definite": false,
          "start": 131,
          "end": 561
        }
      ],
      "declare": false,
      "start": 125,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 76,
  "end": 563
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
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
    "value": "=>",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 506,
    "end": 512
  },
  {
    "type": "String",
    "value": "'special'",
    "start": 513,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 535,
    "end": 541
  },
  {
    "type": "String",
    "value": "'default'",
    "start": 542,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  }
]
```
