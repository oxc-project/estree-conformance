__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tab",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 89,
            "end": 95
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 112
              },
              "start": 97,
              "end": 112
            },
            "typeArguments": null,
            "start": 97,
            "end": 112
          }
        ],
        "start": 88,
        "end": 113
      },
      "declare": false,
      "start": 77,
      "end": 113
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 156
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 163,
              "end": 171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tab",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 173,
                  "end": 176
                },
                "start": 173,
                "end": 178
              },
              "start": 171,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 178
          }
        ],
        "start": 157,
        "end": 180
      },
      "declare": false,
      "start": 141,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TabLayout",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 208,
                "end": 213
              },
              "typeArguments": null,
              "start": 208,
              "end": 213
            },
            "start": 206,
            "end": 213
          },
          "start": 201,
          "end": 213
        }
      ],
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
                  "start": 229,
                  "end": 232
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 228,
                "end": 234
              },
              "children": [],
              "closingElement": null,
              "start": 228,
              "end": 234
            },
            "start": 221,
            "end": 234
          }
        ],
        "start": 215,
        "end": 236
      },
      "expression": false,
      "start": 182,
      "end": 236
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 254
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 268
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 278
          },
          "optional": false,
          "computed": false,
          "start": 263,
          "end": 278
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 279,
              "end": 281
            }
          ],
          "start": 278,
          "end": 282
        },
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
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 295
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TabLayout",
                            "start": 316,
                            "end": 325
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false,
                          "start": 315,
                          "end": 326
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "\n            ",
                            "raw": "\n            ",
                            "start": 326,
                            "end": 339
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": "Users",
                                      "raw": "'Users'",
                                      "start": 359,
                                      "end": 366
                                    },
                                    {
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 369,
                                          "end": 372
                                        },
                                        "typeArguments": null,
                                        "attributes": [],
                                        "selfClosing": true,
                                        "start": 368,
                                        "end": 374
                                      },
                                      "children": [],
                                      "closingElement": null,
                                      "start": 368,
                                      "end": 374
                                    }
                                  ],
                                  "start": 358,
                                  "end": 375
                                },
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": "Products",
                                      "raw": "'Products'",
                                      "start": 394,
                                      "end": 404
                                    },
                                    {
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 407,
                                          "end": 410
                                        },
                                        "typeArguments": null,
                                        "attributes": [],
                                        "selfClosing": true,
                                        "start": 406,
                                        "end": 412
                                      },
                                      "children": [],
                                      "closingElement": null,
                                      "start": 406,
                                      "end": 412
                                    }
                                  ],
                                  "start": 393,
                                  "end": 413
                                }
                              ],
                              "start": 340,
                              "end": 427
                            },
                            "start": 339,
                            "end": 428
                          },
                          {
                            "type": "JSXText",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "start": 428,
                            "end": 437
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TabLayout",
                            "start": 439,
                            "end": 448
                          },
                          "start": 437,
                          "end": 449
                        },
                        "start": 315,
                        "end": 449
                      },
                      "start": 308,
                      "end": 449
                    }
                  ],
                  "start": 298,
                  "end": 455
                },
                "expression": false,
                "start": 295,
                "end": 455
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 289,
              "end": 455
            }
          ],
          "start": 283,
          "end": 457
        },
        "abstract": false,
        "declare": false,
        "start": 245,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 238,
      "end": 457
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 457
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 68,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Tab",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 141,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Tab",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "TabLayout",
    "start": 191,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 208,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 238,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 251,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 255,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 269,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "JSXIdentifier",
    "value": "TabLayout",
    "start": 316,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 326,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "'Users'",
    "start": 359,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "'Products'",
    "start": 394,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 428,
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
    "value": "TabLayout",
    "start": 439,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  }
]
```
