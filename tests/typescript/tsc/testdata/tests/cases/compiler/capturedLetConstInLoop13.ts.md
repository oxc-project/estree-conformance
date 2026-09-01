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
        "name": "Main",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 29
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
                          "type": "ThisExpression",
                          "start": 42,
                          "end": 46
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "register",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 47,
                          "end": 55
                        },
                        "optional": false,
                        "computed": false,
                        "start": 42,
                        "end": 55
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 56,
                          "end": 59
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 61,
                          "end": 64
                        },
                        {
                          "type": "Literal",
                          "value": "c",
                          "raw": "\"c\"",
                          "start": 66,
                          "end": 69
                        }
                      ],
                      "optional": false,
                      "start": 42,
                      "end": 70
                    },
                    "directive": null,
                    "start": 42,
                    "end": 71
                  }
                ],
                "start": 32,
                "end": 77
              },
              "expression": false,
              "start": 29,
              "end": 77
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 77
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "register",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 99
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "names",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 108
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 110,
                      "end": 118
                    },
                    "start": 108,
                    "end": 118
                  },
                  "value": null,
                  "start": 100,
                  "end": 118
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 121,
                  "end": 125
                },
                "start": 119,
                "end": 125
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 145,
                            "end": 149
                          },
                          "init": null,
                          "definite": false,
                          "start": 145,
                          "end": 149
                        }
                      ],
                      "declare": false,
                      "start": 141,
                      "end": 149
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "names",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 158
                    },
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
                                "type": "ThisExpression",
                                "start": 175,
                                "end": 179
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 180,
                                "end": 183
                              },
                              "optional": false,
                              "computed": false,
                              "start": 175,
                              "end": 183
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 203,
                                        "end": 207
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": ".a",
                                        "raw": "\".a\"",
                                        "start": 210,
                                        "end": 214
                                      },
                                      "start": 203,
                                      "end": 214
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
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 225,
                                                  "end": 229
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 230,
                                                  "end": 233
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 225,
                                                "end": 233
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 234,
                                                  "end": 238
                                                }
                                              ],
                                              "optional": false,
                                              "start": 225,
                                              "end": 239
                                            },
                                            "directive": null,
                                            "start": 225,
                                            "end": 240
                                          }
                                        ],
                                        "start": 223,
                                        "end": 242
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 217,
                                      "end": 242
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": true,
                                    "optional": false,
                                    "start": 202,
                                    "end": 242
                                  }
                                ],
                                "start": 184,
                                "end": 257
                              }
                            ],
                            "optional": false,
                            "start": 175,
                            "end": 258
                          },
                          "directive": null,
                          "start": 175,
                          "end": 259
                        }
                      ],
                      "start": 160,
                      "end": 269
                    },
                    "start": 136,
                    "end": 269
                  }
                ],
                "start": 126,
                "end": 275
              },
              "expression": false,
              "start": 99,
              "end": 275
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 83,
            "end": 275
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 292
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 296,
                      "end": 299
                    },
                    "start": 294,
                    "end": 299
                  },
                  "start": 293,
                  "end": 299
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 302,
                  "end": 306
                },
                "start": 300,
                "end": 306
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 307,
                "end": 310
              },
              "expression": false,
              "start": 292,
              "end": 310
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 281,
            "end": 310
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 327
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 334,
                      "end": 340
                    },
                    "start": 332,
                    "end": 340
                  },
                  "start": 328,
                  "end": 340
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 343,
                  "end": 347
                },
                "start": 341,
                "end": 347
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 348,
                "end": 351
              },
              "expression": false,
              "start": 327,
              "end": 351
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 316,
            "end": 351
          }
        ],
        "start": 11,
        "end": 354
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Main",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 364
        },
        "typeArguments": null,
        "arguments": [],
        "start": 356,
        "end": 366
      },
      "directive": null,
      "start": 356,
      "end": 367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 367
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
    "value": "Main",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 18,
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
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 83,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "names",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 145,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "names",
    "start": 153,
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
    "value": "this",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 208,
    "end": 209
  },
  {
    "type": "String",
    "value": "\".a\"",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 281,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 316,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "Main",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  }
]
```
