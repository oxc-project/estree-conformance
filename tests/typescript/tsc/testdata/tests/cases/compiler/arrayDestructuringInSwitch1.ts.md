__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expression",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 22
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BooleanLogicExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 47
              },
              "typeArguments": null,
              "start": 25,
              "end": 47
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 50,
                "end": 56
              },
              "start": 50,
              "end": 56
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "false",
                "raw": "'false'",
                "start": 59,
                "end": 66
              },
              "start": 59,
              "end": 66
            }
          ],
          "start": 25,
          "end": 66
        },
        "declare": false,
        "start": 7,
        "end": 67
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 67
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BooleanLogicExpression",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 102
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "and",
                    "raw": "'and'",
                    "start": 106,
                    "end": 111
                  },
                  "start": 106,
                  "end": 111
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Expression",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 116,
                      "end": 126
                    },
                    "start": 116,
                    "end": 128
                  },
                  "start": 113,
                  "end": 128
                }
              ],
              "start": 105,
              "end": 129
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "not",
                    "raw": "'not'",
                    "start": 133,
                    "end": 138
                  },
                  "start": 133,
                  "end": 138
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Expression",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 150
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 150
                }
              ],
              "start": 132,
              "end": 151
            }
          ],
          "start": 105,
          "end": 151
        },
        "declare": false,
        "start": 75,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 68,
      "end": 152
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "evaluate",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 178
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "expression",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expression",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "typeArguments": null,
                "start": 191,
                "end": 201
              },
              "start": 189,
              "end": 201
            },
            "start": 179,
            "end": 201
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 204,
            "end": 211
          },
          "start": 202,
          "end": 211
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 225
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 233
                  },
                  "optional": false,
                  "computed": false,
                  "start": 220,
                  "end": 233
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "expression",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 244
                  }
                ],
                "optional": false,
                "start": 220,
                "end": 245
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "operator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 268
                            },
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "operands",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 273,
                                "end": 281
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 270,
                              "end": 281
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 259,
                          "end": 282
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "expression",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 295
                        },
                        "definite": false,
                        "start": 259,
                        "end": 295
                      }
                    ],
                    "declare": false,
                    "start": 253,
                    "end": 296
                  },
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "operator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 317
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "and",
                          "raw": "'and'",
                          "start": 332,
                          "end": 337
                        },
                        "consequent": [
                          {
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
                                      "name": "operands",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 356,
                                      "end": 364
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "every",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 365,
                                      "end": 370
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 356,
                                    "end": 370
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "child",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 372,
                                          "end": 377
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "evaluate",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 382,
                                          "end": 390
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "child",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 391,
                                            "end": 396
                                          }
                                        ],
                                        "optional": false,
                                        "start": 382,
                                        "end": 397
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 371,
                                      "end": 397
                                    }
                                  ],
                                  "optional": false,
                                  "start": 356,
                                  "end": 398
                                },
                                "start": 349,
                                "end": 399
                              }
                            ],
                            "start": 339,
                            "end": 407
                          }
                        ],
                        "start": 327,
                        "end": 407
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "not",
                          "raw": "'not'",
                          "start": 419,
                          "end": 424
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "evaluate",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 444,
                                      "end": 452
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "operands",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 453,
                                          "end": 461
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 462,
                                          "end": 463
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 453,
                                        "end": 464
                                      }
                                    ],
                                    "optional": false,
                                    "start": 444,
                                    "end": 465
                                  },
                                  "prefix": true,
                                  "start": 443,
                                  "end": 465
                                },
                                "start": 436,
                                "end": 466
                              }
                            ],
                            "start": 426,
                            "end": 474
                          }
                        ],
                        "start": 414,
                        "end": 474
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
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
                                    "start": 510,
                                    "end": 515
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": false,
                                          "start": 516,
                                          "end": 519
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " is not a supported operator",
                                            "cooked": " is not a supported operator"
                                          },
                                          "tail": true,
                                          "start": 527,
                                          "end": 557
                                        }
                                      ],
                                      "expressions": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "operator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 519,
                                          "end": 527
                                        }
                                      ],
                                      "start": 516,
                                      "end": 557
                                    }
                                  ],
                                  "start": 506,
                                  "end": 558
                                },
                                "start": 500,
                                "end": 559
                              }
                            ],
                            "start": 490,
                            "end": 567
                          }
                        ],
                        "start": 481,
                        "end": 567
                      }
                    ],
                    "start": 301,
                    "end": 573
                  }
                ],
                "start": 247,
                "end": 577
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "expression",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 596,
                        "end": 606
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "'true'",
                        "start": 611,
                        "end": 617
                      },
                      "start": 596,
                      "end": 617
                    },
                    "start": 589,
                    "end": 618
                  }
                ],
                "start": 583,
                "end": 622
              },
              "start": 216,
              "end": 622
            }
          ],
          "start": 212,
          "end": 624
        },
        "expression": false,
        "start": 161,
        "end": 624
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 154,
      "end": 624
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 12,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "BooleanLogicExpression",
    "start": 25,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "'false'",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 75,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "BooleanLogicExpression",
    "start": 80,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "'and'",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 116,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "'not'",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 140,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "export",
    "start": 154,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "evaluate",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "expression",
    "start": 179,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 191,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 204,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 226,
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
    "value": "expression",
    "start": 234,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "operator",
    "start": 260,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "operands",
    "start": 273,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "expression",
    "start": 285,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "operator",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 327,
    "end": 331
  },
  {
    "type": "String",
    "value": "'and'",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 349,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "operands",
    "start": 356,
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
    "value": "every",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "evaluate",
    "start": 382,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 414,
    "end": 418
  },
  {
    "type": "String",
    "value": "'not'",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Keyword",
    "value": "return",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "evaluate",
    "start": 444,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "operands",
    "start": 453,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 500,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 510,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 516,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "operator",
    "start": 519,
    "end": 527
  },
  {
    "type": "Template",
    "value": "} is not a supported operator`",
    "start": 527,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 589,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "expression",
    "start": 596,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 607,
    "end": 610
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  }
]
```
