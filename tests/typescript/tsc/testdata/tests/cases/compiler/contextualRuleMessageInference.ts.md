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
        "name": "DeferredInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 24
          }
        ],
        "start": 22,
        "end": 25
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "typeArguments": null,
              "start": 29,
              "end": 30
            }
          ],
          "start": 28,
          "end": 31
        },
        "indexType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeArguments": null,
            "start": 32,
            "end": 33
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 42,
            "end": 49
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 52,
              "end": 53
            },
            "start": 52,
            "end": 53
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 56,
            "end": 61
          },
          "start": 32,
          "end": 61
        },
        "start": 28,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "runRule",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Message",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 97
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 106,
              "end": 112
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 112
          }
        ],
        "start": 89,
        "end": 113
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rule",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 132
              },
              "typeArguments": null,
              "start": 125,
              "end": 132
            },
            "start": 123,
            "end": 132
          },
          "start": 119,
          "end": 132
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tests",
          "optional": false,
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
                    "name": "invalid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 154
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
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
                                "name": "errors",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 167,
                                "end": 173
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeOperator",
                                  "operator": "readonly",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "name": "messageId",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 186,
                                            "end": 195
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "DeferredInference",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 197,
                                                "end": 214
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Message",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 215,
                                                      "end": 222
                                                    },
                                                    "typeArguments": null,
                                                    "start": 215,
                                                    "end": 222
                                                  }
                                                ],
                                                "start": 214,
                                                "end": 223
                                              },
                                              "start": 197,
                                              "end": 223
                                            },
                                            "start": 195,
                                            "end": 223
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 186,
                                          "end": 223
                                        }
                                      ],
                                      "start": 184,
                                      "end": 225
                                    },
                                    "start": 184,
                                    "end": 227
                                  },
                                  "start": 175,
                                  "end": 227
                                },
                                "start": 173,
                                "end": 227
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 167,
                              "end": 227
                            }
                          ],
                          "start": 165,
                          "end": 229
                        },
                        "start": 165,
                        "end": 231
                      },
                      "start": 156,
                      "end": 231
                    },
                    "start": 154,
                    "end": 231
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 147,
                  "end": 231
                }
              ],
              "start": 145,
              "end": 233
            },
            "start": 143,
            "end": 233
          },
          "start": 138,
          "end": 233
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 238,
          "end": 242
        },
        "start": 236,
        "end": 242
      },
      "body": null,
      "expression": false,
      "start": 65,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "runRule",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 252
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "forbiddenAct",
            "raw": "\"forbiddenAct\"",
            "start": 253,
            "end": 267
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
                  "name": "invalid",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 282
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "act()",
                          "raw": "\"act()\"",
                          "start": 285,
                          "end": 292
                        }
                      ],
                      "start": 284,
                      "end": 293
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 297
                    },
                    "optional": false,
                    "computed": false,
                    "start": 284,
                    "end": 297
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "errors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 321
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "messageId",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 326,
                                        "end": 335
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "forbiddenAct",
                                        "raw": "\"forbiddenAct\"",
                                        "start": 337,
                                        "end": 351
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 326,
                                      "end": 351
                                    }
                                  ],
                                  "start": 324,
                                  "end": 353
                                }
                              ],
                              "start": 323,
                              "end": 354
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 315,
                            "end": 354
                          }
                        ],
                        "start": 305,
                        "end": 361
                      },
                      "id": null,
                      "generator": false,
                      "start": 298,
                      "end": 362
                    }
                  ],
                  "optional": false,
                  "start": 284,
                  "end": 363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 363
              }
            ],
            "start": 269,
            "end": 366
          }
        ],
        "optional": false,
        "start": 245,
        "end": 367
      },
      "directive": null,
      "start": 245,
      "end": 368
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
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
    "value": "DeferredInference",
    "start": 5,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 34,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 65,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "runRule",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 90,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 98,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "rule",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 175,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "messageId",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "DeferredInference",
    "start": 197,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "runRule",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"forbiddenAct\"",
    "start": 253,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "String",
    "value": "\"act()\"",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
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
    "value": "=>",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "messageId",
    "start": 326,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"forbiddenAct\"",
    "start": 337,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ")",
    "start": 362,
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
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  }
]
```
