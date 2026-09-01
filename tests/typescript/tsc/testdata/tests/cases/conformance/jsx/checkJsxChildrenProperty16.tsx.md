__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 79
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 90,
          "end": 97
        },
        "start": 82,
        "end": 98
      },
      "importKind": "value",
      "start": 67,
      "end": 99
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 118
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
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
                    "name": "renderNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 139
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 142,
                        "end": 147
                      },
                      "start": 142,
                      "end": 147
                    },
                    "start": 140,
                    "end": 147
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 127,
                  "end": 148
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 157
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 165,
                              "end": 171
                            },
                            "start": 163,
                            "end": 171
                          },
                          "start": 160,
                          "end": 171
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 176,
                          "end": 180
                        },
                        "start": 173,
                        "end": 180
                      },
                      "start": 159,
                      "end": 180
                    },
                    "start": 157,
                    "end": 180
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 149,
                  "end": 180
                }
              ],
              "start": 125,
              "end": 182
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
                    "name": "renderNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 195,
                    "end": 207
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 209,
                        "end": 213
                      },
                      "start": 209,
                      "end": 213
                    },
                    "start": 207,
                    "end": 213
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 195,
                  "end": 214
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 229
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 237,
                              "end": 243
                            },
                            "start": 235,
                            "end": 243
                          },
                          "start": 232,
                          "end": 243
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 248,
                          "end": 252
                        },
                        "start": 245,
                        "end": 252
                      },
                      "start": 231,
                      "end": 252
                    },
                    "start": 229,
                    "end": 252
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 221,
                  "end": 253
                }
              ],
              "start": 187,
              "end": 259
            }
          ],
          "start": 123,
          "end": 259
        },
        "declare": false,
        "start": 108,
        "end": 260
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 101,
      "end": 260
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 289
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 302
                },
                "typeArguments": null,
                "start": 297,
                "end": 302
              },
              "start": 295,
              "end": 302
            },
            "start": 290,
            "end": 302
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 308
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 316
              },
              "start": 305,
              "end": 316
            },
            "typeArguments": null,
            "start": 305,
            "end": 316
          },
          "start": 303,
          "end": 316
        },
        "body": null,
        "expression": false,
        "start": 269,
        "end": 317
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 262,
      "end": 317
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 336
            },
            "init": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXFragment",
                      "openingFragment": {
                        "type": "JSXOpeningFragment",
                        "start": 362,
                        "end": 364
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n      ",
                          "raw": "\n      ",
                          "start": 364,
                          "end": 371
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 372,
                              "end": 375
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 371,
                            "end": 376
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 378,
                                    "end": 383
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 388,
                                  "end": 390
                                },
                                "id": null,
                                "generator": false,
                                "start": 377,
                                "end": 390
                              },
                              "start": 376,
                              "end": 391
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 393,
                              "end": 396
                            },
                            "start": 391,
                            "end": 397
                          },
                          "start": 371,
                          "end": 397
                        },
                        {
                          "type": "JSXText",
                          "value": "\n      ",
                          "raw": "\n      ",
                          "start": 397,
                          "end": 404
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 405,
                              "end": 408
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "renderNumber",
                                  "start": 409,
                                  "end": 421
                                },
                                "value": null,
                                "start": 409,
                                "end": 421
                              }
                            ],
                            "selfClosing": false,
                            "start": 404,
                            "end": 422
                          },
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 424,
                                    "end": 429
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 434,
                                  "end": 436
                                },
                                "id": null,
                                "generator": false,
                                "start": 423,
                                "end": 436
                              },
                              "start": 422,
                              "end": 437
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 439,
                              "end": 442
                            },
                            "start": 437,
                            "end": 443
                          },
                          "start": 404,
                          "end": 443
                        },
                        {
                          "type": "JSXText",
                          "value": "\n\n      ",
                          "raw": "\n\n      ",
                          "start": 443,
                          "end": 451
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 452,
                              "end": 455
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "children",
                                  "start": 456,
                                  "end": 464
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 467,
                                        "end": 472
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "start": 477,
                                      "end": 479
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 466,
                                    "end": 479
                                  },
                                  "start": 465,
                                  "end": 480
                                },
                                "start": 456,
                                "end": 480
                              }
                            ],
                            "selfClosing": true,
                            "start": 451,
                            "end": 483
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 451,
                          "end": 483
                        },
                        {
                          "type": "JSXText",
                          "value": "\n      ",
                          "raw": "\n      ",
                          "start": 483,
                          "end": 490
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 491,
                              "end": 494
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "renderNumber",
                                  "start": 495,
                                  "end": 507
                                },
                                "value": null,
                                "start": 495,
                                "end": 507
                              },
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "children",
                                  "start": 508,
                                  "end": 516
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 519,
                                        "end": 524
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "start": 529,
                                      "end": 531
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 518,
                                    "end": 531
                                  },
                                  "start": 517,
                                  "end": 532
                                },
                                "start": 508,
                                "end": 532
                              }
                            ],
                            "selfClosing": true,
                            "start": 490,
                            "end": 535
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 490,
                          "end": 535
                        },
                        {
                          "type": "JSXText",
                          "value": "\n    ",
                          "raw": "\n    ",
                          "start": 535,
                          "end": 540
                        }
                      ],
                      "closingFragment": {
                        "type": "JSXClosingFragment",
                        "start": 540,
                        "end": 543
                      },
                      "start": 362,
                      "end": 543
                    },
                    "start": 349,
                    "end": 548
                  }
                ],
                "start": 345,
                "end": 550
              },
              "id": null,
              "generator": false,
              "start": 339,
              "end": 550
            },
            "definite": false,
            "start": 332,
            "end": 550
          }
        ],
        "declare": false,
        "start": 326,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 319,
      "end": 551
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 551
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 101,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "renderNumber",
    "start": 127,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 149,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 173,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "renderNumber",
    "start": 195,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 269,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 297,
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
    "type": "Identifier",
    "value": "JSX",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 309,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 319,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 326,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
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
    "value": "=>",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 364,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 392,
    "end": 393
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 405,
    "end": 408
  },
  {
    "type": "JSXIdentifier",
    "value": "renderNumber",
    "start": 409,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 438,
    "end": 439
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 442,
    "end": 443
  },
  {
    "type": "JSXText",
    "value": "\n\n      ",
    "start": 443,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 452,
    "end": 455
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 456,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 482,
    "end": 483
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 483,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 491,
    "end": 494
  },
  {
    "type": "JSXIdentifier",
    "value": "renderNumber",
    "start": 495,
    "end": 507
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 508,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 535,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  }
]
```
