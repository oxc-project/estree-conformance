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
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 50,
              "end": 57
            },
            "start": 48,
            "end": 57
          },
          "start": 39,
          "end": 57
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 77
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 60,
          "end": 77
        },
        "start": 58,
        "end": 77
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "condition",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 98
              },
              "prefix": true,
              "start": 88,
              "end": 98
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 125
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 116,
                    "end": 127
                  },
                  "start": 110,
                  "end": 128
                }
              ],
              "start": 100,
              "end": 134
            },
            "alternate": null,
            "start": 84,
            "end": 134
          }
        ],
        "start": 78,
        "end": 136
      },
      "expression": false,
      "start": 23,
      "end": 136
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 151
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
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "my_key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 188
                  },
                  "value": {
                    "type": "Literal",
                    "value": "example_value",
                    "raw": "'example_value'",
                    "start": 190,
                    "end": 205
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 182,
                  "end": 205
                }
              ],
              "start": 172,
              "end": 211
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 158,
            "end": 212
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "runTypeFails",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 230
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 255
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 258,
                              "end": 262
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 266,
                              "end": 269
                            },
                            "start": 258,
                            "end": 269
                          },
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 275,
                                      "end": 276
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
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
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 280,
                                              "end": 283
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 285,
                                                "end": 291
                                              },
                                              "start": 283,
                                              "end": 291
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 280,
                                            "end": 291
                                          }
                                        ],
                                        "start": 278,
                                        "end": 293
                                      },
                                      "start": 276,
                                      "end": 293
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 275,
                                    "end": 293
                                  }
                                ],
                                "start": 273,
                                "end": 295
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 298,
                                "end": 302
                              }
                            ],
                            "start": 273,
                            "end": 302
                          },
                          "start": 258,
                          "end": 302
                        },
                        "definite": false,
                        "start": 249,
                        "end": 302
                      }
                    ],
                    "declare": false,
                    "start": 243,
                    "end": 303
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 318
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 325
                        }
                      ],
                      "optional": false,
                      "start": 312,
                      "end": 326
                    },
                    "directive": null,
                    "start": 312,
                    "end": 327
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 344
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "ThisExpression",
                            "start": 360,
                            "end": 364
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 365,
                            "end": 368
                          },
                          "start": 360,
                          "end": 368
                        },
                        "typeArguments": null,
                        "start": 353,
                        "end": 368
                      },
                      "start": 347,
                      "end": 368
                    },
                    "declare": false,
                    "start": 336,
                    "end": 369
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 386
                        },
                        "optional": false,
                        "computed": false,
                        "start": 378,
                        "end": 386
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 387,
                              "end": 393
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 394,
                              "end": 395
                            },
                            "optional": false,
                            "computed": false,
                            "start": 387,
                            "end": 395
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 396,
                            "end": 399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 387,
                          "end": 399
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 403,
                            "end": 406
                          },
                          "typeArguments": null,
                          "start": 403,
                          "end": 406
                        },
                        "start": 387,
                        "end": 406
                      },
                      "optional": false,
                      "computed": true,
                      "start": 378,
                      "end": 407
                    },
                    "directive": null,
                    "start": 378,
                    "end": 408
                  }
                ],
                "start": 233,
                "end": 414
              },
              "expression": false,
              "start": 230,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 218,
            "end": 414
          }
        ],
        "start": 152,
        "end": 416
      },
      "abstract": false,
      "declare": false,
      "start": 138,
      "end": 416
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 425
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 433
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 449
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 454,
                              "end": 458
                            },
                            "prefix": true,
                            "start": 453,
                            "end": 458
                          },
                          "prefix": true,
                          "start": 452,
                          "end": 458
                        },
                        "definite": false,
                        "start": 448,
                        "end": 458
                      }
                    ],
                    "declare": false,
                    "start": 442,
                    "end": 459
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 469
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 484,
                            "end": 486
                          },
                          "typeParameters": null,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "ThisExpression",
                              "start": 496,
                              "end": 500
                            },
                            "typeArguments": null,
                            "start": 489,
                            "end": 500
                          },
                          "declare": false,
                          "start": 479,
                          "end": 501
                        }
                      ],
                      "start": 471,
                      "end": 507
                    },
                    "alternate": null,
                    "start": 464,
                    "end": 507
                  }
                ],
                "start": 436,
                "end": 511
              },
              "expression": false,
              "start": 433,
              "end": 511
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 430,
            "end": 511
          }
        ],
        "start": 426,
        "end": 513
      },
      "abstract": false,
      "declare": false,
      "start": 418,
      "end": 513
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 513
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 60,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 89,
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
    "value": "throw",
    "start": 110,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 144,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "my_key",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "'example_value'",
    "start": 190,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "runTypeFails",
    "start": 218,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 243,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Null",
    "value": "null",
    "start": 258,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 263,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 296,
    "end": 297
  },
  {
    "type": "Null",
    "value": "null",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 336,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 347,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 353,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 442,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 453,
    "end": 454
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 479,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 489,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  }
]
```
