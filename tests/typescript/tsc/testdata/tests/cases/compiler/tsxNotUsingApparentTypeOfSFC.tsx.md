__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 87,
              "end": 88
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 87,
            "end": 88
          }
        ],
        "start": 86,
        "end": 89
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrappedProps",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            },
            "start": 102,
            "end": 105
          },
          "start": 90,
          "end": 105
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MySFC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 122
                },
                "init": {
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 142
                          },
                          "typeArguments": null,
                          "start": 141,
                          "end": 142
                        },
                        "start": 139,
                        "end": 142
                      },
                      "start": 134,
                      "end": 142
                    }
                  ],
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
                            "start": 161,
                            "end": 163
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "value": "hello",
                              "raw": "hello",
                              "start": 163,
                              "end": 168
                            }
                          ],
                          "closingFragment": {
                            "type": "JSXClosingFragment",
                            "start": 168,
                            "end": 171
                          },
                          "start": 161,
                          "end": 171
                        },
                        "start": 154,
                        "end": 172
                      }
                    ],
                    "start": 144,
                    "end": 178
                  },
                  "expression": false,
                  "start": 125,
                  "end": 178
                },
                "definite": false,
                "start": 117,
                "end": 178
              }
            ],
            "declare": false,
            "start": 113,
            "end": 179
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 201
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
                "start": 210,
                "end": 215
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 210,
              "end": 225
            },
            "superTypeArguments": {
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
                    "start": 226,
                    "end": 227
                  },
                  "typeArguments": null,
                  "start": 226,
                  "end": 227
                }
              ],
              "start": 225,
              "end": 228
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
                    "start": 239,
                    "end": 245
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
                            "type": "JSXFragment",
                            "openingFragment": {
                              "type": "JSXOpeningFragment",
                              "start": 269,
                              "end": 271
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "value": "hello",
                                "raw": "hello",
                                "start": 271,
                                "end": 276
                              }
                            ],
                            "closingFragment": {
                              "type": "JSXClosingFragment",
                              "start": 276,
                              "end": 279
                            },
                            "start": 269,
                            "end": 279
                          },
                          "start": 262,
                          "end": 280
                        }
                      ],
                      "start": 248,
                      "end": 290
                    },
                    "expression": false,
                    "start": 245,
                    "end": 290
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 239,
                  "end": 290
                }
              ],
              "start": 229,
              "end": 296
            },
            "abstract": false,
            "declare": false,
            "start": 184,
            "end": 296
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 306
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MySFC",
                      "start": 310,
                      "end": 315
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 309,
                    "end": 318
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 309,
                  "end": 318
                },
                "definite": false,
                "start": 305,
                "end": 318
              }
            ],
            "declare": false,
            "start": 301,
            "end": 319
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 346
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyComponent",
                      "start": 350,
                      "end": 361
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 349,
                    "end": 364
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 349,
                  "end": 364
                },
                "definite": false,
                "start": 345,
                "end": 364
              }
            ],
            "declare": false,
            "start": 341,
            "end": 365
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MySFC",
                      "start": 397,
                      "end": 402
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrappedProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 419
                        },
                        "start": 403,
                        "end": 420
                      }
                    ],
                    "selfClosing": true,
                    "start": 396,
                    "end": 423
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 396,
                  "end": 423
                },
                "definite": false,
                "start": 392,
                "end": 423
              }
            ],
            "declare": false,
            "start": 388,
            "end": 423
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyComponent",
                      "start": 452,
                      "end": 463
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrappedProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 468,
                          "end": 480
                        },
                        "start": 464,
                        "end": 481
                      }
                    ],
                    "selfClosing": true,
                    "start": 451,
                    "end": 484
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 451,
                  "end": 484
                },
                "definite": false,
                "start": 447,
                "end": 484
              }
            ],
            "declare": false,
            "start": 443,
            "end": 484
          }
        ],
        "start": 107,
        "end": 501
      },
      "expression": false,
      "start": 73,
      "end": 501
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 501
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
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "wrappedProps",
    "start": 90,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "MySFC",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
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
    "value": "props",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "JSXText",
    "value": "hello",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 190,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 202,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 216,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "JSXText",
    "value": "hello",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "JSXIdentifier",
    "value": "MySFC",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 350,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "/",
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
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXIdentifier",
    "value": "MySFC",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "wrappedProps",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 452,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "wrappedProps",
    "start": 468,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  }
]
```
