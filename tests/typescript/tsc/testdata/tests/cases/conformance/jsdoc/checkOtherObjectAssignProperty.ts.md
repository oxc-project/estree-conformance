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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 19
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 21,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 23
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 33
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 35,
                  "end": 39
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 25,
                "end": 39
              }
            ],
            "start": 12,
            "end": 41
          },
          "definite": false,
          "start": 6,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          {
            "type": "Literal",
            "value": "thing",
            "raw": "\"thing\"",
            "start": 74,
            "end": 81
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          }
        ],
        "optional": false,
        "start": 43,
        "end": 87
      },
      "directive": null,
      "start": 43,
      "end": 88
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 123
          },
          "init": {
            "type": "Literal",
            "value": "other",
            "raw": "\"other\"",
            "start": 148,
            "end": 155
          },
          "definite": false,
          "start": 120,
          "end": 156
        }
      ],
      "declare": false,
      "start": 116,
      "end": 157
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 179
          },
          "optional": false,
          "computed": false,
          "start": 158,
          "end": 179
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 187
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 192
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 203,
                  "end": 205
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 205
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 217,
                  "end": 221
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 207,
                "end": 221
              }
            ],
            "start": 194,
            "end": 223
          }
        ],
        "optional": false,
        "start": 158,
        "end": 224
      },
      "directive": null,
      "start": 158,
      "end": 225
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
            "name": "propName",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 241
          },
          "init": {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 244,
            "end": 250
          },
          "definite": false,
          "start": 233,
          "end": 250
        }
      ],
      "declare": false,
      "start": 227,
      "end": 250
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 257
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 272
          },
          "optional": false,
          "computed": false,
          "start": 251,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 280
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "propName",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 290
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 299
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 301,
                  "end": 303
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 294,
                "end": 303
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 313
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 315,
                  "end": 319
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 305,
                "end": 319
              }
            ],
            "start": 292,
            "end": 321
          }
        ],
        "optional": false,
        "start": 251,
        "end": 322
      },
      "directive": null,
      "start": 251,
      "end": 323
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 332
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 347
          },
          "optional": false,
          "computed": false,
          "start": 326,
          "end": 347
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 355
          },
          {
            "type": "Literal",
            "value": "bad1",
            "raw": "\"bad1\"",
            "start": 357,
            "end": 363
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 365,
            "end": 368
          }
        ],
        "optional": false,
        "start": 326,
        "end": 369
      },
      "directive": null,
      "start": 326,
      "end": 370
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 377
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 371,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 400
          },
          {
            "type": "Literal",
            "value": "bad2",
            "raw": "\"bad2\"",
            "start": 402,
            "end": 408
          },
          {
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
                  "start": 412,
                  "end": 415
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
                          "value": 12,
                          "raw": "12",
                          "start": 427,
                          "end": 429
                        },
                        "start": 420,
                        "end": 429
                      }
                    ],
                    "start": 418,
                    "end": 431
                  },
                  "expression": false,
                  "start": 415,
                  "end": 431
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 412,
                "end": 431
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 438
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "\"no\"",
                  "start": 440,
                  "end": 444
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 444
              }
            ],
            "start": 410,
            "end": 446
          }
        ],
        "optional": false,
        "start": 371,
        "end": 447
      },
      "directive": null,
      "start": 371,
      "end": 448
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 455
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 470
          },
          "optional": false,
          "computed": false,
          "start": 449,
          "end": 470
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 478
          },
          {
            "type": "Literal",
            "value": "bad3",
            "raw": "\"bad3\"",
            "start": 480,
            "end": 486
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 498
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 500,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 490,
                "end": 504
              }
            ],
            "start": 488,
            "end": 506
          }
        ],
        "optional": false,
        "start": 449,
        "end": 507
      },
      "directive": null,
      "start": 449,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 509
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 25,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
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
    "value": "Object",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 50,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"thing\"",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 165,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 244,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 251,
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
    "value": "defineProperty",
    "start": 258,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 282,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 305,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Object",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 333,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 348,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "String",
    "value": "\"bad1\"",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 378,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "String",
    "value": "\"bad2\"",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 412,
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
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 456,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 471,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "String",
    "value": "\"bad3\"",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  }
]
```
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod1",
                "raw": "\"./mod1\"",
                "start": 20,
                "end": 28
              }
            ],
            "optional": false,
            "start": 12,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 34
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 40
        },
        "optional": false,
        "computed": false,
        "start": 31,
        "end": 40
      },
      "directive": null,
      "start": 31,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 45
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 51
        },
        "optional": false,
        "computed": false,
        "start": 42,
        "end": 51
      },
      "directive": null,
      "start": 42,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 56
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 61
        },
        "optional": false,
        "computed": false,
        "start": 53,
        "end": 61
      },
      "directive": null,
      "start": 53,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 66
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad1",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 71
        },
        "optional": false,
        "computed": false,
        "start": 63,
        "end": 71
      },
      "directive": null,
      "start": 63,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad2",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 81
        },
        "optional": false,
        "computed": false,
        "start": 73,
        "end": 81
      },
      "directive": null,
      "start": 73,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 86
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad3",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 91
        },
        "optional": false,
        "computed": false,
        "start": 83,
        "end": 91
      },
      "directive": null,
      "start": 83,
      "end": 92
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 104
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 104
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 107,
          "end": 108
        },
        "start": 95,
        "end": 108
      },
      "directive": null,
      "start": 95,
      "end": 109
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 119
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 122,
          "end": 123
        },
        "start": 110,
        "end": 123
      },
      "directive": null,
      "start": 110,
      "end": 124
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 125,
          "end": 133
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 136,
          "end": 137
        },
        "start": 125,
        "end": 137
      },
      "directive": null,
      "start": 125,
      "end": 138
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad1",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 139,
          "end": 147
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 150,
          "end": 151
        },
        "start": 139,
        "end": 151
      },
      "directive": null,
      "start": 139,
      "end": 152
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad2",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 161
          },
          "optional": false,
          "computed": false,
          "start": 153,
          "end": 161
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 164,
          "end": 165
        },
        "start": 153,
        "end": 165
      },
      "directive": null,
      "start": 153,
      "end": 166
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 170
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad3",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 175
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 175
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 178,
          "end": 179
        },
        "start": 167,
        "end": 179
      },
      "directive": null,
      "start": 167,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./mod1\"",
    "start": 20,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 35,
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
    "value": "mod",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "bad1",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "bad2",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "bad3",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "bad1",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "bad2",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "bad3",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  }
]
```
