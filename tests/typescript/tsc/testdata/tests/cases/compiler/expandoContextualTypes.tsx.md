__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 131
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 131
          },
          "importKind": "value",
          "start": 118,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 139,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 104,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Page",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 165
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 181
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 182,
                      "end": 189
                    }
                  ],
                  "start": 181,
                  "end": 190
                },
                "start": 170,
                "end": 190
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 166,
              "end": 190
            }
          ],
          "start": 165,
          "end": 191
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  }
                ],
                "start": 207,
                "end": 210
              },
              "start": 194,
              "end": 210
            },
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
                    "name": "getLayout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 228
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
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": {
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
                                  "start": 243,
                                  "end": 246
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Element",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 247,
                                  "end": 254
                                },
                                "start": 243,
                                "end": 254
                              },
                              "typeArguments": null,
                              "start": 243,
                              "end": 254
                            },
                            "start": 241,
                            "end": 254
                          },
                          "start": 232,
                          "end": 254
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
                              "start": 259,
                              "end": 262
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Element",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 263,
                              "end": 270
                            },
                            "start": 259,
                            "end": 270
                          },
                          "typeArguments": null,
                          "start": 259,
                          "end": 270
                        },
                        "start": 256,
                        "end": 270
                      },
                      "start": 231,
                      "end": 270
                    },
                    "start": 229,
                    "end": 270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 271
                }
              ],
              "start": 213,
              "end": 273
            }
          ],
          "start": 194,
          "end": 273
        },
        "declare": false,
        "start": 156,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 149,
      "end": 273
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
              "name": "FooPage",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Page",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 301
                  },
                  "typeArguments": null,
                  "start": 297,
                  "end": 301
                },
                "start": 295,
                "end": 301
              },
              "start": 288,
              "end": 301
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 334,
                          "end": 337
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 333,
                        "end": 338
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 338,
                          "end": 351
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "p",
                              "start": 352,
                              "end": 353
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 351,
                            "end": 354
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "value": "Foo",
                              "raw": "Foo",
                              "start": 354,
                              "end": 357
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "p",
                              "start": 359,
                              "end": 360
                            },
                            "start": 357,
                            "end": 361
                          },
                          "start": 351,
                          "end": 361
                        },
                        {
                          "type": "JSXText",
                          "value": "\n        ",
                          "raw": "\n        ",
                          "start": 361,
                          "end": 370
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 372,
                          "end": 375
                        },
                        "start": 370,
                        "end": 376
                      },
                      "start": 333,
                      "end": 376
                    },
                    "start": 316,
                    "end": 382
                  }
                ],
                "start": 310,
                "end": 384
              },
              "id": null,
              "generator": false,
              "start": 304,
              "end": 384
            },
            "definite": false,
            "start": 288,
            "end": 384
          }
        ],
        "declare": false,
        "start": 282,
        "end": 385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 275,
      "end": 385
    },
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
            "name": "FooPage",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 394
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getLayout",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 404
          },
          "optional": false,
          "computed": false,
          "start": 387,
          "end": 404
        },
        "right": {
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
                    "start": 426,
                    "end": 428
                  },
                  "children": [],
                  "closingFragment": {
                    "type": "JSXClosingFragment",
                    "start": 428,
                    "end": 431
                  },
                  "start": 426,
                  "end": 431
                },
                "start": 419,
                "end": 431
              }
            ],
            "start": 413,
            "end": 433
          },
          "id": null,
          "generator": false,
          "start": 407,
          "end": 433
        },
        "start": 387,
        "end": 433
      },
      "directive": null,
      "start": 387,
      "end": 434
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 104,
  "end": 434
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 104,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 118,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 134,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 156,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Page",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 182,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 194,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "getLayout",
    "start": 219,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 228,
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
    "value": "component",
    "start": 232,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 256,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 275,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 282,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "FooPage",
    "start": 288,
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
    "value": "Page",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
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
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 338,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 351,
    "end": 352
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "JSXText",
    "value": "Foo",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 358,
    "end": 359
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 361,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 371,
    "end": 372
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
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
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "FooPage",
    "start": 387,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "getLayout",
    "start": 395,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  }
]
```
