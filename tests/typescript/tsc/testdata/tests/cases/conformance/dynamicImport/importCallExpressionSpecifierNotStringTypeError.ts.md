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
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 33,
          "end": 40
        },
        "start": 31,
        "end": 40
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 41
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
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 66,
                "end": 73
              },
              "start": 64,
              "end": 73
            },
            "start": 54,
            "end": 73
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 73
        }
      ],
      "declare": true,
      "start": 42,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 142
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 130,
          "end": 144
        },
        "options": null,
        "phase": null,
        "start": 123,
        "end": 145
      },
      "directive": null,
      "start": 123,
      "end": 146
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 163,
              "end": 177
            },
            "options": null,
            "phase": null,
            "start": 156,
            "end": 178
          },
          "definite": false,
          "start": 151,
          "end": 178
        }
      ],
      "declare": false,
      "start": 147,
      "end": 179
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 188
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "whatToLoad",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 208
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 223
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 211,
                "end": 225
              },
              "alternate": {
                "type": "Literal",
                "value": "defaulPath",
                "raw": "\"defaulPath\"",
                "start": 228,
                "end": 240
              },
              "start": 198,
              "end": 240
            },
            "options": null,
            "phase": null,
            "start": 191,
            "end": 241
          },
          "definite": false,
          "start": 186,
          "end": 241
        }
      ],
      "declare": false,
      "start": 180,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "optional": false,
          "computed": false,
          "start": 242,
          "end": 249
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 275
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 279
                      },
                      "optional": false,
                      "computed": false,
                      "start": 271,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 271,
                    "end": 281
                  },
                  "start": 264,
                  "end": 282
                }
              ],
              "start": 258,
              "end": 304
            },
            "id": null,
            "generator": false,
            "start": 250,
            "end": 304
          }
        ],
        "optional": false,
        "start": 242,
        "end": 305
      },
      "directive": null,
      "start": 242,
      "end": 306
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 314
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "path1",
                  "raw": "\"path1\"",
                  "start": 325,
                  "end": 332
                },
                {
                  "type": "Literal",
                  "value": "path2",
                  "raw": "\"path2\"",
                  "start": 334,
                  "end": 341
                }
              ],
              "start": 324,
              "end": 342
            },
            "options": null,
            "phase": null,
            "start": 317,
            "end": 343
          },
          "definite": false,
          "start": 312,
          "end": 343
        }
      ],
      "declare": false,
      "start": 308,
      "end": 344
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
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "PathToModule",
                "raw": "\"PathToModule\"",
                "start": 365,
                "end": 379
              },
              "id": null,
              "generator": false,
              "start": 361,
              "end": 379
            },
            "options": null,
            "phase": null,
            "start": 354,
            "end": 380
          },
          "definite": false,
          "start": 349,
          "end": 380
        }
      ],
      "declare": false,
      "start": 345,
      "end": 381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 381
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
    "value": "getSpecifier",
    "start": 17,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
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
    "value": "boolean",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "whatToLoad",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 130,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 163,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "whatToLoad",
    "start": 198,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 211,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"defaulPath\"",
    "start": 228,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "\"path1\"",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"path2\"",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 363,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"PathToModule\"",
    "start": 365,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  }
]
```
