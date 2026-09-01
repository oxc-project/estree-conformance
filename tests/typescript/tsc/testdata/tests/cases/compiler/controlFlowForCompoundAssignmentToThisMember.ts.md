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
        "name": "DatasourceCommandWidgetElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 36
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
              "name": "_commandBased",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
              },
              "start": 56,
              "end": 65
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 43,
            "end": 66
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_commandElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              },
              "start": 86,
              "end": 95
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 71,
            "end": 96
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 117,
                "end": 124
              },
              "start": 115,
              "end": 124
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 101,
            "end": 125
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
              "start": 131,
              "end": 142
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 151,
                      "end": 158
                    },
                    "start": 149,
                    "end": 158
                  },
                  "start": 143,
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
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 180
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DatasourceCommandWidgetElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 222
                      },
                      "start": 174,
                      "end": 222
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
                                "type": "ThisExpression",
                                "start": 238,
                                "end": 242
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 243,
                                "end": 256
                              },
                              "optional": false,
                              "computed": false,
                              "start": 238,
                              "end": 256
                            },
                            "right": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 259,
                              "end": 263
                            },
                            "start": 238,
                            "end": 263
                          },
                          "directive": null,
                          "start": 238,
                          "end": 264
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 277,
                                "end": 281
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 297
                              },
                              "optional": false,
                              "computed": false,
                              "start": 277,
                              "end": 297
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 300,
                                "end": 306
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 307,
                                "end": 321
                              },
                              "optional": false,
                              "computed": false,
                              "start": 300,
                              "end": 321
                            },
                            "start": 277,
                            "end": 321
                          },
                          "directive": null,
                          "start": 277,
                          "end": 322
                        }
                      ],
                      "start": 224,
                      "end": 332
                    },
                    "alternate": {
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
                                "start": 352,
                                "end": 356
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 357,
                                "end": 370
                              },
                              "optional": false,
                              "computed": false,
                              "start": 352,
                              "end": 370
                            },
                            "right": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 373,
                              "end": 378
                            },
                            "start": 352,
                            "end": 378
                          },
                          "directive": null,
                          "start": 352,
                          "end": 379
                        }
                      ],
                      "start": 338,
                      "end": 389
                    },
                    "start": 170,
                    "end": 389
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 403,
                          "end": 407
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_commandBased",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 403,
                        "end": 421
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 425,
                          "end": 431
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DatasourceCommandWidgetElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 473
                        },
                        "start": 425,
                        "end": 473
                      },
                      "start": 403,
                      "end": 474
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
                                "type": "ThisExpression",
                                "start": 490,
                                "end": 494
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 495,
                                "end": 510
                              },
                              "optional": false,
                              "computed": false,
                              "start": 490,
                              "end": 510
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 513,
                                "end": 519
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 520,
                                "end": 534
                              },
                              "optional": false,
                              "computed": false,
                              "start": 513,
                              "end": 534
                            },
                            "start": 490,
                            "end": 534
                          },
                          "directive": null,
                          "start": 490,
                          "end": 535
                        }
                      ],
                      "start": 476,
                      "end": 545
                    },
                    "alternate": null,
                    "start": 399,
                    "end": 545
                  }
                ],
                "start": 160,
                "end": 551
              },
              "expression": false,
              "start": 142,
              "end": 551
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 131,
            "end": 551
          }
        ],
        "start": 37,
        "end": 553
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 553
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 553
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
    "value": "DatasourceCommandWidgetElement",
    "start": 6,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "_commandBased",
    "start": 43,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "_commandElement",
    "start": 71,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "commandElement",
    "start": 101,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 131,
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
    "value": "target",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 151,
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
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 174,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 181,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "DatasourceCommandWidgetElement",
    "start": 192,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
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
    "value": "_commandBased",
    "start": 243,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "_commandElement",
    "start": 282,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "commandElement",
    "start": 307,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "_commandBased",
    "start": 357,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "_commandBased",
    "start": 408,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 425,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 432,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "DatasourceCommandWidgetElement",
    "start": 443,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "_commandElement",
    "start": 495,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "commandElement",
    "start": 520,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  }
]
```
