__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotificationKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 21
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Review",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 30
            },
            "initializer": null,
            "computed": false,
            "start": 24,
            "end": 30
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Comment",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "initializer": null,
            "computed": false,
            "start": 32,
            "end": 39
          }
        ],
        "start": 22,
        "end": 41
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 71
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
              "type": "TSNeverKeyword",
              "start": 79,
              "end": 84
            },
            "start": 77,
            "end": 84
          },
          "start": 72,
          "end": 84
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 87,
          "end": 92
        },
        "start": 85,
        "end": 92
      },
      "body": null,
      "expression": false,
      "start": 43,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notify",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "notification",
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
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 131
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NotificationKind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 149
                          },
                          "typeArguments": null,
                          "start": 133,
                          "end": 149
                        },
                        "start": 131,
                        "end": 149
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 127,
                      "end": 149
                    }
                  ],
                  "start": 125,
                  "end": 151
                },
                {
                  "type": "TSNullKeyword",
                  "start": 154,
                  "end": 158
                }
              ],
              "start": 125,
              "end": 158
            },
            "start": 123,
            "end": 158
          },
          "start": 111,
          "end": 158
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
                "name": "notification",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 182
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 187,
                "end": 191
              },
              "start": 170,
              "end": 191
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 193,
              "end": 200
            },
            "alternate": null,
            "start": 166,
            "end": 200
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "notification",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 230
              },
              "optional": false,
              "computed": false,
              "start": 213,
              "end": 230
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NotificationKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 263
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Review",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 270
                  },
                  "optional": false,
                  "computed": false,
                  "start": 247,
                  "end": 270
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 272,
                    "end": 279
                  }
                ],
                "start": 242,
                "end": 279
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NotificationKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 309
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comment",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 317
                  },
                  "optional": false,
                  "computed": false,
                  "start": 293,
                  "end": 317
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 319,
                    "end": 326
                  }
                ],
                "start": 288,
                "end": 326
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 362
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "notification",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 363,
                            "end": 375
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 380
                          },
                          "optional": false,
                          "computed": false,
                          "start": 363,
                          "end": 380
                        }
                      ],
                      "optional": false,
                      "start": 351,
                      "end": 381
                    },
                    "start": 344,
                    "end": 382
                  }
                ],
                "start": 335,
                "end": 382
              }
            ],
            "start": 205,
            "end": 388
          }
        ],
        "start": 160,
        "end": 390
      },
      "expression": false,
      "start": 95,
      "end": 390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "NotificationKind",
    "start": 5,
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
    "value": "Review",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Comment",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 43,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "notify",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "notification",
    "start": 111,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "NotificationKind",
    "start": 133,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 152,
    "end": 153
  },
  {
    "type": "Null",
    "value": "null",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "notification",
    "start": 170,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 183,
    "end": 186
  },
  {
    "type": "Null",
    "value": "null",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
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
    "type": "Keyword",
    "value": "switch",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "notification",
    "start": 213,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 242,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "NotificationKind",
    "start": 247,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Review",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 288,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "NotificationKind",
    "start": 293,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Comment",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 344,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 351,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "notification",
    "start": 363,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  }
]
```
