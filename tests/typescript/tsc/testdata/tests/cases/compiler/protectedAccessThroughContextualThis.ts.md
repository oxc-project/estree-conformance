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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "protec",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 30
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 33,
              "end": 38
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 14,
            "end": 39
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privat",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 59,
              "end": 61
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 42,
            "end": 62
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "copy",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 78
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 92
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindCopy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 109
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 110,
                          "end": 114
                        },
                        "optional": false,
                        "computed": false,
                        "start": 101,
                        "end": 114
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        }
                      ],
                      "optional": false,
                      "start": 101,
                      "end": 120
                    },
                    "directive": null,
                    "start": 101,
                    "end": 120
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
                          "name": "bindCopy2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 125,
                        "end": 139
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        }
                      ],
                      "optional": false,
                      "start": 125,
                      "end": 145
                    },
                    "directive": null,
                    "start": 125,
                    "end": 145
                  }
                ],
                "start": 95,
                "end": 149
              },
              "expression": false,
              "start": 92,
              "end": 149
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 149
          }
        ],
        "start": 10,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bindCopy",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 180
              },
              "typeArguments": null,
              "start": 177,
              "end": 180
            },
            "start": 175,
            "end": 180
          },
          "start": 171,
          "end": 180
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
                  "start": 186,
                  "end": 190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "copy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 195
                },
                "optional": false,
                "computed": false,
                "start": 186,
                "end": 195
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 198,
                  "end": 202
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 209
                },
                "optional": false,
                "computed": false,
                "start": 198,
                "end": 209
              },
              "start": 186,
              "end": 209
            },
            "directive": null,
            "start": 186,
            "end": 210
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 237
                },
                "optional": false,
                "computed": false,
                "start": 226,
                "end": 237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 238,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 249
                  },
                  "optional": false,
                  "computed": false,
                  "start": 238,
                  "end": 249
                }
              ],
              "optional": false,
              "start": 226,
              "end": 250
            },
            "directive": null,
            "start": 226,
            "end": 251
          }
        ],
        "start": 182,
        "end": 269
      },
      "expression": false,
      "start": 153,
      "end": 269
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BindingFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 291
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 304
                },
                "typeArguments": null,
                "start": 301,
                "end": 304
              },
              "start": 299,
              "end": 304
            },
            "start": 295,
            "end": 304
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 309,
            "end": 313
          },
          "start": 306,
          "end": 313
        },
        "start": 294,
        "end": 313
      },
      "declare": false,
      "start": 271,
      "end": 314
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
            "name": "bindCopy2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BindingFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 348
                },
                "typeArguments": null,
                "start": 333,
                "end": 348
              },
              "start": 331,
              "end": 348
            },
            "start": 322,
            "end": 348
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 367,
                        "end": 371
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "copy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 376
                      },
                      "optional": false,
                      "computed": false,
                      "start": 367,
                      "end": 376
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 379,
                        "end": 383
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 390
                      },
                      "optional": false,
                      "computed": false,
                      "start": 379,
                      "end": 390
                    },
                    "start": 367,
                    "end": 390
                  },
                  "directive": null,
                  "start": 367,
                  "end": 391
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 414
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 418
                      },
                      "optional": false,
                      "computed": false,
                      "start": 407,
                      "end": 418
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 424,
                          "end": 430
                        },
                        "optional": false,
                        "computed": false,
                        "start": 419,
                        "end": 430
                      }
                    ],
                    "optional": false,
                    "start": 407,
                    "end": 431
                  },
                  "directive": null,
                  "start": 407,
                  "end": 432
                }
              ],
              "start": 363,
              "end": 450
            },
            "expression": false,
            "start": 351,
            "end": 450
          },
          "definite": false,
          "start": 322,
          "end": 450
        }
      ],
      "declare": false,
      "start": 316,
      "end": 450
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 450
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 14,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "protec",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 42,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "privat",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "''",
    "start": 59,
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
    "value": "copy",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 81,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "bindCopy",
    "start": 101,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "bindCopy2",
    "start": 125,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 140,
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
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 153,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "bindCopy",
    "start": 162,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "copy",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "protec",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "privat",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 271,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "BindingFunction",
    "start": 276,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 301,
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
    "value": "=>",
    "start": 306,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "bindCopy2",
    "start": 322,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "BindingFunction",
    "start": 333,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "copy",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "protec",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 407,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "this",
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
    "value": "privat",
    "start": 424,
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
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  }
]
```
