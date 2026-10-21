__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FeatureId",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 17,
            "end": 23
          },
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
                  "name": "feature",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 35
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 37,
                      "end": 41
                    },
                    "start": 37,
                    "end": 41
                  },
                  "start": 35,
                  "end": 41
                },
                "accessibility": null,
                "static": false,
                "start": 28,
                "end": 41
              }
            ],
            "start": 26,
            "end": 43
          }
        ],
        "start": 17,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 44
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
            "name": "featureIds",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FeatureId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 71,
                  "end": 80
                },
                "start": 71,
                "end": 82
              },
              "start": 69,
              "end": 82
            },
            "start": 59,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 82
        }
      ],
      "declare": true,
      "start": 45,
      "end": 83
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
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 97
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 118
              },
              "optional": false,
              "computed": false,
              "start": 100,
              "end": 118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "featureIds",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 129
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 133
                  },
                  "optional": false,
                  "computed": false,
                  "start": 119,
                  "end": 133
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
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 136
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "feature:",
                                "cooked": "feature:"
                              },
                              "tail": false,
                              "start": 141,
                              "end": 152
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 154,
                              "end": 156
                            }
                          ],
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 152,
                              "end": 154
                            }
                          ],
                          "start": 141,
                          "end": 156
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 158,
                          "end": 162
                        }
                      ],
                      "start": 140,
                      "end": 163
                    },
                    "id": null,
                    "generator": false,
                    "start": 134,
                    "end": 163
                  }
                ],
                "optional": false,
                "start": 119,
                "end": 164
              }
            ],
            "optional": false,
            "start": 100,
            "end": 165
          },
          "definite": false,
          "start": 90,
          "end": 165
        }
      ],
      "declare": false,
      "start": 84,
      "end": 166
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
            "name": "featureName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 194,
                "end": 200
              },
              "start": 192,
              "end": 200
            },
            "start": 181,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 181,
          "end": 200
        }
      ],
      "declare": true,
      "start": 167,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 210
        },
        "property": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "feature:",
                "cooked": "feature:"
              },
              "tail": false,
              "start": 211,
              "end": 222
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 233,
              "end": 235
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "featureName",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 233
            }
          ],
          "start": 211,
          "end": 235
        },
        "optional": false,
        "computed": true,
        "start": 203,
        "end": 236
      },
      "directive": null,
      "start": 203,
      "end": 237
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
            "name": "featureIds",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 248
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 255
          },
          "optional": false,
          "computed": false,
          "start": 238,
          "end": 255
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 258
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 269
              },
              "property": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "feature:",
                  "raw": "\"feature:\"",
                  "start": 270,
                  "end": 280
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 285
                },
                "start": 270,
                "end": 285
              },
              "optional": false,
              "computed": true,
              "start": 262,
              "end": 286
            },
            "id": null,
            "generator": false,
            "start": 256,
            "end": 286
          }
        ],
        "optional": false,
        "start": 238,
        "end": 287
      },
      "directive": null,
      "start": 238,
      "end": 288
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 305
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 309
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 310
            },
            "init": null,
            "definite": false,
            "start": 300,
            "end": 310
          }
        ],
        "declare": false,
        "start": 294,
        "end": 310
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 320
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 328
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 328
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oldFeature",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 341
                },
                "value": {
                  "type": "Literal",
                  "value": "newFeature",
                  "raw": "\"newFeature\"",
                  "start": 343,
                  "end": 355
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 331,
                "end": 355
              }
            ],
            "start": 329,
            "end": 357
          }
        ],
        "optional": false,
        "start": 314,
        "end": 358
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 384
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "feature:",
                          "cooked": "feature:"
                        },
                        "tail": false,
                        "start": 385,
                        "end": 396
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 400,
                        "end": 402
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 400
                      }
                    ],
                    "start": 385,
                    "end": 402
                  },
                  "optional": false,
                  "computed": true,
                  "start": 377,
                  "end": 403
                },
                "prefix": true,
                "start": 370,
                "end": 403
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 408,
                "end": 417
              },
              "start": 370,
              "end": 417
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 436
                      },
                      "property": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "feature:",
                              "cooked": "feature:"
                            },
                            "tail": false,
                            "start": 437,
                            "end": 448
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 450,
                            "end": 452
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "to",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 448,
                            "end": 450
                          }
                        ],
                        "start": 437,
                        "end": 452
                      },
                      "optional": false,
                      "computed": true,
                      "start": 429,
                      "end": 453
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 463
                      },
                      "property": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "feature:",
                              "cooked": "feature:"
                            },
                            "tail": false,
                            "start": 464,
                            "end": 475
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 479,
                            "end": 481
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "from",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 475,
                            "end": 479
                          }
                        ],
                        "start": 464,
                        "end": 481
                      },
                      "optional": false,
                      "computed": true,
                      "start": 456,
                      "end": 482
                    },
                    "start": 429,
                    "end": 482
                  },
                  "directive": null,
                  "start": 429,
                  "end": 483
                }
              ],
              "start": 419,
              "end": 489
            },
            "alternate": null,
            "start": 366,
            "end": 489
          }
        ],
        "start": 360,
        "end": 491
      },
      "start": 289,
      "end": 491
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 491
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "FeatureId",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "feature",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 45,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "featureIds",
    "start": 59,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "FeatureId",
    "start": 71,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 81,
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
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 107,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "featureIds",
    "start": 119,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Template",
    "value": "`feature:${",
    "start": 141,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 152,
    "end": 154
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "declare",
    "start": 167,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "featureName",
    "start": 181,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Template",
    "value": "`feature:${",
    "start": 211,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "featureName",
    "start": 222,
    "end": 233
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "featureIds",
    "start": 238,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 259,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"feature:\"",
    "start": 270,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 311,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 321,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "oldFeature",
    "start": 331,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "String",
    "value": "\"newFeature\"",
    "start": 343,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 370,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385
  },
  {
    "type": "Template",
    "value": "`feature:${",
    "start": 385,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 396,
    "end": 400
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 404,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 408,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 429,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "Template",
    "value": "`feature:${",
    "start": 437,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 448,
    "end": 450
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "Template",
    "value": "`feature:${",
    "start": 464,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 475,
    "end": 479
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "]",
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
  }
]
```
