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
        "name": "Multimap4",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 34
                },
                "optional": false,
                "computed": false,
                "start": 25,
                "end": 34
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 37,
                "end": 39
              },
              "start": 25,
              "end": 39
            },
            "directive": null,
            "start": 25,
            "end": 40
          }
        ],
        "start": 21,
        "end": 42
      },
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "EmptyStatement",
      "start": 42,
      "end": 43
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
            "name": "Multimap4",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 54
          },
          "property": {
            "type": "Literal",
            "value": "prototype",
            "raw": "\"prototype\"",
            "start": 55,
            "end": 66
          },
          "optional": false,
          "computed": true,
          "start": 45,
          "end": 67
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 150
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 154
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 169,
                            "end": 173
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 178
                          },
                          "optional": false,
                          "computed": false,
                          "start": 169,
                          "end": 178
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 182
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 185,
                            "end": 187
                          },
                          "start": 179,
                          "end": 187
                        },
                        "optional": false,
                        "computed": true,
                        "start": 169,
                        "end": 188
                      },
                      "start": 162,
                      "end": 189
                    }
                  ],
                  "start": 156,
                  "end": 193
                },
                "expression": false,
                "start": 150,
                "end": 193
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 147,
              "end": 193
            }
          ],
          "start": 70,
          "end": 195
        },
        "start": 45,
        "end": 195
      },
      "directive": null,
      "start": 45,
      "end": 196
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
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 207
            },
            "property": {
              "type": "Literal",
              "value": "prototype",
              "raw": "\"prototype\"",
              "start": 208,
              "end": 219
            },
            "optional": false,
            "computed": true,
            "start": 198,
            "end": 220
          },
          "property": {
            "type": "Literal",
            "value": "add-on",
            "raw": "\"add-on\"",
            "start": 221,
            "end": 229
          },
          "optional": false,
          "computed": true,
          "start": 198,
          "end": 230
        },
        "right": {
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
            "body": [],
            "start": 244,
            "end": 246
          },
          "expression": false,
          "start": 233,
          "end": 246
        },
        "start": 198,
        "end": 246
      },
      "directive": null,
      "start": 198,
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
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 257
            },
            "property": {
              "type": "Literal",
              "value": "prototype",
              "raw": "\"prototype\"",
              "start": 258,
              "end": 269
            },
            "optional": false,
            "computed": true,
            "start": 248,
            "end": 270
          },
          "property": {
            "type": "Literal",
            "value": "addon",
            "raw": "\"addon\"",
            "start": 271,
            "end": 278
          },
          "optional": false,
          "computed": true,
          "start": 248,
          "end": 279
        },
        "right": {
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
            "body": [],
            "start": 293,
            "end": 295
          },
          "expression": false,
          "start": 282,
          "end": 295
        },
        "start": 248,
        "end": 295
      },
      "directive": null,
      "start": 248,
      "end": 296
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
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 306
            },
            "property": {
              "type": "Literal",
              "value": "prototype",
              "raw": "\"prototype\"",
              "start": 307,
              "end": 318
            },
            "optional": false,
            "computed": true,
            "start": 297,
            "end": 319
          },
          "property": {
            "type": "Literal",
            "value": "__underscores__",
            "raw": "\"__underscores__\"",
            "start": 320,
            "end": 337
          },
          "optional": false,
          "computed": true,
          "start": 297,
          "end": 338
        },
        "right": {
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
            "body": [],
            "start": 352,
            "end": 354
          },
          "expression": false,
          "start": 341,
          "end": 354
        },
        "start": 297,
        "end": 354
      },
      "directive": null,
      "start": 297,
      "end": 355
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
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 367
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 383
            },
            "typeArguments": null,
            "arguments": [],
            "start": 370,
            "end": 385
          },
          "definite": false,
          "start": 363,
          "end": 385
        }
      ],
      "declare": false,
      "start": 357,
      "end": 386
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
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 391
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 395
          },
          "optional": false,
          "computed": false,
          "start": 387,
          "end": 395
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 396,
            "end": 398
          }
        ],
        "optional": false,
        "start": 387,
        "end": 399
      },
      "directive": null,
      "start": 387,
      "end": 400
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
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 405
          },
          "property": {
            "type": "Literal",
            "value": "add-on",
            "raw": "\"add-on\"",
            "start": 406,
            "end": 414
          },
          "optional": false,
          "computed": true,
          "start": 401,
          "end": 415
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 401,
        "end": 417
      },
      "directive": null,
      "start": 401,
      "end": 418
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
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addon",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 419,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 419,
        "end": 431
      },
      "directive": null,
      "start": 419,
      "end": 432
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
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 437
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__underscores__",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 453
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 453
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 433,
        "end": 455
      },
      "directive": null,
      "start": 433,
      "end": 456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Multimap4",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Multimap4",
    "start": 45,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"prototype\"",
    "start": 55,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 162,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 183,
    "end": 184
  },
  {
    "type": "String",
    "value": "''",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
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
    "type": "Identifier",
    "value": "Multimap4",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"prototype\"",
    "start": 208,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"add-on\"",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
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
    "value": "Multimap4",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "\"prototype\"",
    "start": 258,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "\"addon\"",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 282,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Multimap4",
    "start": 297,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307
  },
  {
    "type": "String",
    "value": "\"prototype\"",
    "start": 307,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "\"__underscores__\"",
    "start": 320,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "map4",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Multimap4",
    "start": 374,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "map4",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 396,
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
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "map4",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "\"add-on\"",
    "start": 406,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "map4",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "map4",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "__underscores__",
    "start": 438,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  }
]
```
