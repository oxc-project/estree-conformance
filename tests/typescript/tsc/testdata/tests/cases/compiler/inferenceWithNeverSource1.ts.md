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
        "name": "Paths",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 69
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
              "start": 70,
              "end": 71
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 71
          }
        ],
        "start": 69,
        "end": 72
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 75,
          "end": 82
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "typeArguments": null,
          "start": 91,
          "end": 92
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 95,
          "end": 101
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 104,
          "end": 110
        },
        "start": 75,
        "end": 110
      },
      "declare": false,
      "start": 59,
      "end": 111
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "constraint": {
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 152,
                      "end": 155
                    },
                    "start": 150,
                    "end": 155
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 149,
                  "end": 155
                }
              ],
              "start": 147,
              "end": 157
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 157
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 179,
              "end": 185
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 188,
              "end": 194
            },
            "in": false,
            "out": false,
            "const": true,
            "start": 163,
            "end": 194
          }
        ],
        "start": 131,
        "end": 197
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 214
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 218,
                                "end": 219
                              },
                              "typeArguments": null,
                              "start": 218,
                              "end": 219
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Paths",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 222,
                                "end": 227
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 228,
                                        "end": 229
                                      },
                                      "typeArguments": null,
                                      "start": 228,
                                      "end": 229
                                    },
                                    "indexType": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "p",
                                        "raw": "\"p\"",
                                        "start": 230,
                                        "end": 233
                                      },
                                      "start": 230,
                                      "end": 233
                                    },
                                    "start": 228,
                                    "end": 234
                                  }
                                ],
                                "start": 227,
                                "end": 235
                              },
                              "start": 222,
                              "end": 235
                            }
                          ],
                          "start": 218,
                          "end": 235
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Paths",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 244
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 245,
                                    "end": 246
                                  },
                                  "typeArguments": null,
                                  "start": 245,
                                  "end": 246
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "p",
                                    "raw": "\"p\"",
                                    "start": 247,
                                    "end": 250
                                  },
                                  "start": 247,
                                  "end": 250
                                },
                                "start": 245,
                                "end": 251
                              }
                            ],
                            "start": 244,
                            "end": 252
                          },
                          "start": 239,
                          "end": 252
                        }
                      ],
                      "start": 217,
                      "end": 252
                    },
                    "start": 215,
                    "end": 252
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 210,
                  "end": 253
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "via",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 261
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSStringKeyword",
                        "start": 263,
                        "end": 269
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 278,
                          "end": 279
                        },
                        "typeArguments": null,
                        "start": 278,
                        "end": 279
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "wide",
                          "raw": "\"wide\"",
                          "start": 282,
                          "end": 288
                        },
                        "start": 282,
                        "end": 288
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "narrow",
                          "raw": "\"narrow\"",
                          "start": 291,
                          "end": 299
                        },
                        "start": 291,
                        "end": 299
                      },
                      "start": 263,
                      "end": 299
                    },
                    "start": 261,
                    "end": 299
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 258,
                  "end": 300
                }
              ],
              "start": 204,
              "end": 302
            },
            "start": 202,
            "end": 302
          },
          "start": 198,
          "end": 302
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 305,
          "end": 309
        },
        "start": 303,
        "end": 309
      },
      "body": null,
      "expression": false,
      "start": 113,
      "end": 310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
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
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 322,
                  "end": 325
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 325
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "via",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 330
                },
                "value": {
                  "type": "Literal",
                  "value": "narrow",
                  "raw": "\"narrow\"",
                  "start": 332,
                  "end": 340
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 327,
                "end": 340
              }
            ],
            "start": 314,
            "end": 342
          }
        ],
        "optional": false,
        "start": 312,
        "end": 343
      },
      "directive": null,
      "start": 312,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 345,
          "end": 346
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
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 353
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 355,
                    "end": 358
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 362,
                      "end": 365
                    },
                    "start": 362,
                    "end": 365
                  },
                  "start": 355,
                  "end": 365
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 349,
                "end": 365
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "via",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 370
                },
                "value": {
                  "type": "Literal",
                  "value": "narrow",
                  "raw": "\"narrow\"",
                  "start": 372,
                  "end": 380
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 367,
                "end": 380
              }
            ],
            "start": 347,
            "end": 382
          }
        ],
        "optional": false,
        "start": 345,
        "end": 383
      },
      "directive": null,
      "start": 345,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 386
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
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 393
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 395,
                    "end": 398
                  },
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 402,
                    "end": 407
                  },
                  "start": 395,
                  "end": 407
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 389,
                "end": 407
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "via",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 412
                },
                "value": {
                  "type": "Literal",
                  "value": "narrow",
                  "raw": "\"narrow\"",
                  "start": 414,
                  "end": 422
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 409,
                "end": 422
              }
            ],
            "start": 387,
            "end": 424
          }
        ],
        "optional": false,
        "start": 385,
        "end": 425
      },
      "directive": null,
      "start": 385,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 426
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 59,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Paths",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 113,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Paths",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "type": "String",
    "value": "\"p\"",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Paths",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"p\"",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "via",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 270,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 280,
    "end": 281
  },
  {
    "type": "String",
    "value": "\"wide\"",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "String",
    "value": "\"narrow\"",
    "start": 291,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "via",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"narrow\"",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 359,
    "end": 361
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "via",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "String",
    "value": "\"narrow\"",
    "start": 372,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 395,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 399,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "via",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"narrow\"",
    "start": 414,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  }
]
```
