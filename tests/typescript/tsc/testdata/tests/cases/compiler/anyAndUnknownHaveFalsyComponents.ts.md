__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              },
              "start": 14,
              "end": 19
            },
            "start": 12,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 19
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 34
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 38,
              "end": 39
            },
            "start": 32,
            "end": 39
          },
          "definite": false,
          "start": 27,
          "end": 39
        }
      ],
      "declare": false,
      "start": 21,
      "end": 40
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
            "name": "isTreeHeader1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              },
              "start": 77,
              "end": 82
            },
            "start": 64,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 82
        }
      ],
      "declare": true,
      "start": 52,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 97
      },
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 124
                  },
                  "value": {
                    "type": "Literal",
                    "value": "block",
                    "raw": "\"block\"",
                    "start": 126,
                    "end": 133
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 117,
                  "end": 133
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 156
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 175
                          },
                          "value": {
                            "type": "Literal",
                            "value": "flex",
                            "raw": "\"flex\"",
                            "start": 177,
                            "end": 183
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 168,
                          "end": 183
                        }
                      ],
                      "start": 160,
                      "end": 190
                    },
                    "start": 143,
                    "end": 190
                  },
                  "start": 139,
                  "end": 191
                }
              ],
              "start": 111,
              "end": 195
            },
            "start": 104,
            "end": 196
          }
        ],
        "start": 100,
        "end": 198
      },
      "expression": false,
      "start": 84,
      "end": 198
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 216,
                "end": 223
              },
              "start": 214,
              "end": 223
            },
            "start": 212,
            "end": 223
          },
          "init": null,
          "definite": false,
          "start": 212,
          "end": 223
        }
      ],
      "declare": true,
      "start": 200,
      "end": 224
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 233
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 238
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 242,
              "end": 243
            },
            "start": 236,
            "end": 243
          },
          "definite": false,
          "start": 231,
          "end": 243
        }
      ],
      "declare": false,
      "start": 225,
      "end": 244
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
            "name": "isTreeHeader2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 283,
                "end": 290
              },
              "start": 281,
              "end": 290
            },
            "start": 268,
            "end": 290
          },
          "init": null,
          "definite": false,
          "start": 268,
          "end": 290
        }
      ],
      "declare": true,
      "start": 256,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 305
      },
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 332
                  },
                  "value": {
                    "type": "Literal",
                    "value": "block",
                    "raw": "\"block\"",
                    "start": 334,
                    "end": 341
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 325,
                  "end": 341
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 351,
                      "end": 364
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 383
                          },
                          "value": {
                            "type": "Literal",
                            "value": "flex",
                            "raw": "\"flex\"",
                            "start": 385,
                            "end": 391
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 376,
                          "end": 391
                        }
                      ],
                      "start": 368,
                      "end": 398
                    },
                    "start": 351,
                    "end": 398
                  },
                  "start": 347,
                  "end": 399
                }
              ],
              "start": 319,
              "end": 403
            },
            "start": 312,
            "end": 404
          }
        ],
        "start": 308,
        "end": 406
      },
      "expression": false,
      "start": 292,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 35,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "isTreeHeader1",
    "start": 64,
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
    "value": "any",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 93,
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
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "display",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"block\"",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "isTreeHeader1",
    "start": 143,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "display",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"flex\"",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 200,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 216,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 239,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 256,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "isTreeHeader2",
    "start": 268,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 292,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "display",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"block\"",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 347,
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
    "value": "isTreeHeader1",
    "start": 351,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "display",
    "start": 376,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "String",
    "value": "\"flex\"",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
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
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  }
]
```
