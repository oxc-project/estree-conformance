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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 38,
              "end": 42
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 45,
              "end": 47
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "m",
              "start": 60,
              "end": 62
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
                "body": [],
                "start": 65,
                "end": 67
              },
              "expression": false,
              "start": 62,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 53,
            "end": 67
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 78
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
                    },
                    "start": 84,
                    "end": 89
                  },
                  "start": 79,
                  "end": 89
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 106
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 107,
                        "end": 111
                      },
                      "optional": false,
                      "computed": false,
                      "start": 101,
                      "end": 111
                    },
                    "directive": null,
                    "start": 101,
                    "end": 112
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 132
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 133,
                          "end": 135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 127,
                        "end": 135
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 127,
                      "end": 137
                    },
                    "directive": null,
                    "start": 127,
                    "end": 138
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 152
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 153,
                        "end": 157
                      },
                      "optional": false,
                      "computed": false,
                      "start": 147,
                      "end": 157
                    },
                    "directive": null,
                    "start": 147,
                    "end": 158
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 172
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 173,
                        "end": 177
                      },
                      "optional": false,
                      "computed": false,
                      "start": 167,
                      "end": 177
                    },
                    "directive": null,
                    "start": 167,
                    "end": 178
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 201
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 202,
                          "end": 206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 196,
                        "end": 206
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 196,
                      "end": 208
                    },
                    "directive": null,
                    "start": 196,
                    "end": 209
                  }
                ],
                "start": 91,
                "end": 215
              },
              "expression": false,
              "start": 78,
              "end": 215
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 215
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodU",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 227
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 235,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "start": 228,
                  "end": 242
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 259
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 260,
                        "end": 264
                      },
                      "optional": false,
                      "computed": false,
                      "start": 254,
                      "end": 264
                    },
                    "directive": null,
                    "start": 254,
                    "end": 265
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 279
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 280,
                          "end": 282
                        },
                        "optional": false,
                        "computed": false,
                        "start": 274,
                        "end": 282
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 274,
                      "end": 284
                    },
                    "directive": null,
                    "start": 274,
                    "end": 285
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 299
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 300,
                        "end": 304
                      },
                      "optional": false,
                      "computed": false,
                      "start": 294,
                      "end": 304
                    },
                    "directive": null,
                    "start": 294,
                    "end": 305
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 319
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 320,
                        "end": 324
                      },
                      "optional": false,
                      "computed": false,
                      "start": 314,
                      "end": 324
                    },
                    "directive": null,
                    "start": 314,
                    "end": 325
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 339
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 340,
                          "end": 344
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 344
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 334,
                      "end": 346
                    },
                    "directive": null,
                    "start": 334,
                    "end": 347
                  }
                ],
                "start": 244,
                "end": 353
              },
              "expression": false,
              "start": 227,
              "end": 353
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 353
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodN",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 365
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 373,
                      "end": 378
                    },
                    "start": 371,
                    "end": 378
                  },
                  "start": 366,
                  "end": 378
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 390,
                        "end": 395
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 396,
                        "end": 400
                      },
                      "optional": false,
                      "computed": false,
                      "start": 390,
                      "end": 400
                    },
                    "directive": null,
                    "start": 390,
                    "end": 401
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 415
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 416,
                          "end": 418
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 418
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 410,
                      "end": 420
                    },
                    "directive": null,
                    "start": 410,
                    "end": 421
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 435
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 436,
                        "end": 440
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 440
                    },
                    "directive": null,
                    "start": 430,
                    "end": 441
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 455
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 456,
                        "end": 460
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 460
                    },
                    "directive": null,
                    "start": 450,
                    "end": 461
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 470,
                          "end": 475
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 476,
                          "end": 480
                        },
                        "optional": false,
                        "computed": false,
                        "start": 470,
                        "end": 480
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 470,
                      "end": 482
                    },
                    "directive": null,
                    "start": 470,
                    "end": 483
                  }
                ],
                "start": 380,
                "end": 489
              },
              "expression": false,
              "start": 365,
              "end": 489
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 489
          }
        ],
        "start": 8,
        "end": 491
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 491
    },
    {
      "type": "EmptyStatement",
      "start": 491,
      "end": 492
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 492
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 31,
    "end": 37
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 53,
    "end": 59
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "thing",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "methodU",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 235,
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
    "type": "Identifier",
    "value": "thing",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 320,
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
    "value": "thing",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "methodN",
    "start": 358,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 435,
    "end": 436
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 476,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  }
]
```
