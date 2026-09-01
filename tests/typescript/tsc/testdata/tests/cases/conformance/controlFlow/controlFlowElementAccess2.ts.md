__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 34,
                            "end": 40
                          },
                          "start": 32,
                          "end": 40
                        },
                        "start": 29,
                        "end": 40
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 43,
                            "end": 50
                          },
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
                                  "name": "prop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 55,
                                  "end": 59
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 61,
                                    "end": 67
                                  },
                                  "start": 59,
                                  "end": 67
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 55,
                                "end": 67
                              }
                            ],
                            "start": 53,
                            "end": 69
                          }
                        ],
                        "start": 43,
                        "end": 69
                      },
                      "start": 41,
                      "end": 69
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 28,
                    "end": 70
                  }
                ],
                "start": 22,
                "end": 72
              },
              "start": 20,
              "end": 72
            },
            "start": 14,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 72
        }
      ],
      "declare": true,
      "start": 0,
      "end": 73
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 92
            },
            "property": {
              "type": "Literal",
              "value": "works",
              "raw": "'works'",
              "start": 93,
              "end": 100
            },
            "optional": false,
            "computed": true,
            "start": 86,
            "end": 101
          },
          "prefix": true,
          "start": 79,
          "end": 101
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "'boolean'",
          "start": 106,
          "end": 115
        },
        "start": 79,
        "end": 115
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
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 129
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "works",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 135
                  },
                  "optional": false,
                  "computed": false,
                  "start": 123,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 140
                },
                "optional": false,
                "computed": false,
                "start": 123,
                "end": 140
              },
              "right": {
                "type": "Literal",
                "value": "test",
                "raw": "'test'",
                "start": 143,
                "end": 149
              },
              "start": 123,
              "end": 149
            },
            "directive": null,
            "start": 123,
            "end": 150
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 167
                  },
                  "property": {
                    "type": "Literal",
                    "value": "works",
                    "raw": "'works'",
                    "start": 168,
                    "end": 175
                  },
                  "optional": false,
                  "computed": true,
                  "start": 161,
                  "end": 176
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 181
                },
                "optional": false,
                "computed": false,
                "start": 161,
                "end": 181
              },
              "right": {
                "type": "Literal",
                "value": "test",
                "raw": "'test'",
                "start": 184,
                "end": 190
              },
              "start": 161,
              "end": 190
            },
            "directive": null,
            "start": 161,
            "end": 191
          }
        ],
        "start": 117,
        "end": 249
      },
      "alternate": null,
      "start": 75,
      "end": 249
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 267
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "works",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 273
            },
            "optional": false,
            "computed": false,
            "start": 261,
            "end": 273
          },
          "prefix": true,
          "start": 254,
          "end": 273
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "'boolean'",
          "start": 278,
          "end": 287
        },
        "start": 254,
        "end": 287
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
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 301
                  },
                  "property": {
                    "type": "Literal",
                    "value": "works",
                    "raw": "'works'",
                    "start": 302,
                    "end": 309
                  },
                  "optional": false,
                  "computed": true,
                  "start": 295,
                  "end": 310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 315
                },
                "optional": false,
                "computed": false,
                "start": 295,
                "end": 315
              },
              "right": {
                "type": "Literal",
                "value": "test",
                "raw": "'test'",
                "start": 318,
                "end": 324
              },
              "start": 295,
              "end": 324
            },
            "directive": null,
            "start": 295,
            "end": 325
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 392
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "works",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 398
                  },
                  "optional": false,
                  "computed": false,
                  "start": 386,
                  "end": 398
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 403
                },
                "optional": false,
                "computed": false,
                "start": 386,
                "end": 403
              },
              "right": {
                "type": "Literal",
                "value": "test",
                "raw": "'test'",
                "start": 406,
                "end": 412
              },
              "start": 386,
              "end": 412
            },
            "directive": null,
            "start": 386,
            "end": 413
          }
        ],
        "start": 289,
        "end": 421
      },
      "alternate": null,
      "start": 250,
      "end": 421
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 421
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "'works'",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 102,
    "end": 105
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 123,
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
    "value": "works",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "String",
    "value": "'test'",
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
    "value": "config",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "String",
    "value": "'works'",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "works",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 274,
    "end": 277
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "String",
    "value": "'works'",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 386,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "works",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  }
]
```
