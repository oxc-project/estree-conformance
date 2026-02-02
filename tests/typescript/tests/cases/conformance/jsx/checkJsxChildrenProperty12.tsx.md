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
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 97
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 119,
            "end": 129
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
              "start": 134,
              "end": 142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 150
                },
                "typeArguments": null,
                "start": 144,
                "end": 150
              },
              "start": 142,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 134,
            "end": 151
          }
        ],
        "start": 98,
        "end": 153
      },
      "declare": false,
      "start": 77,
      "end": 153
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 167
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
          "start": 176,
          "end": 181
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 191
        },
        "optional": false,
        "computed": false,
        "start": 176,
        "end": 191
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 202
            },
            "typeArguments": null,
            "start": 192,
            "end": 202
          },
          {
            "type": "TSAnyKeyword",
            "start": 204,
            "end": 207
          }
        ],
        "start": 191,
        "end": 208
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
              "start": 215,
              "end": 221
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 243,
                              "end": 250
                            },
                            "start": 241,
                            "end": 250
                          },
                          "start": 232,
                          "end": 250
                        },
                        "init": null,
                        "definite": false,
                        "start": 232,
                        "end": 250
                      }
                    ],
                    "declare": false,
                    "start": 228,
                    "end": 251
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "condition",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 267
                    },
                    "consequent": {
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
                                "name": "InnerButton",
                                "start": 288,
                                "end": 299
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 304,
                                      "end": 308
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 309,
                                      "end": 314
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 304,
                                    "end": 314
                                  },
                                  "start": 300,
                                  "end": 315
                                }
                              ],
                              "selfClosing": true,
                              "start": 287,
                              "end": 318
                            },
                            "children": [],
                            "closingElement": null,
                            "start": 287,
                            "end": 318
                          },
                          "start": 280,
                          "end": 318
                        }
                      ],
                      "start": 269,
                      "end": 322
                    },
                    "alternate": {
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
                                "name": "InnerButton",
                                "start": 344,
                                "end": 355
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 360,
                                      "end": 364
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 365,
                                      "end": 370
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 360,
                                    "end": 370
                                  },
                                  "start": 356,
                                  "end": 371
                                }
                              ],
                              "selfClosing": false,
                              "start": 343,
                              "end": 373
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t",
                                "start": 373,
                                "end": 378
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 379,
                                    "end": 382
                                  },
                                  "typeArguments": null,
                                  "attributes": [],
                                  "selfClosing": false,
                                  "start": 378,
                                  "end": 383
                                },
                                "children": [
                                  {
                                    "type": "JSXText",
                                    "value": "Hello World",
                                    "raw": "Hello World",
                                    "start": 383,
                                    "end": 394
                                  }
                                ],
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 396,
                                    "end": 399
                                  },
                                  "start": 394,
                                  "end": 400
                                },
                                "start": 378,
                                "end": 400
                              },
                              {
                                "type": "JSXText",
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t",
                                "start": 400,
                                "end": 405
                              }
                            ],
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "InnerButton",
                                "start": 407,
                                "end": 418
                              },
                              "start": 405,
                              "end": 419
                            },
                            "start": 343,
                            "end": 419
                          },
                          "start": 335,
                          "end": 421
                        }
                      ],
                      "start": 330,
                      "end": 425
                    },
                    "start": 254,
                    "end": 425
                  }
                ],
                "start": 224,
                "end": 431
              },
              "expression": false,
              "start": 221,
              "end": 431
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 215,
            "end": 431
          }
        ],
        "start": 209,
        "end": 433
      },
      "abstract": false,
      "declare": false,
      "start": 155,
      "end": 433
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 460
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 467,
                "end": 473
              },
              "start": 465,
              "end": 473
            },
            "accessibility": null,
            "static": false,
            "start": 464,
            "end": 473
          }
        ],
        "start": 461,
        "end": 475
      },
      "declare": false,
      "start": 435,
      "end": 475
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 494
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
          "start": 503,
          "end": 508
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 509,
          "end": 518
        },
        "optional": false,
        "computed": false,
        "start": 503,
        "end": 518
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 534
            },
            "typeArguments": null,
            "start": 519,
            "end": 534
          },
          {
            "type": "TSAnyKeyword",
            "start": 536,
            "end": 539
          }
        ],
        "start": 518,
        "end": 540
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
              "start": 544,
              "end": 550
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
                          "name": "button",
                          "start": 566,
                          "end": 572
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 565,
                        "end": 573
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 573,
                          "end": 578
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "start": 580,
                          "end": 586
                        },
                        "start": 578,
                        "end": 587
                      },
                      "start": 565,
                      "end": 587
                    },
                    "start": 557,
                    "end": 589
                  }
                ],
                "start": 553,
                "end": 592
              },
              "expression": false,
              "start": 550,
              "end": 592
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 544,
            "end": 592
          }
        ],
        "start": 541,
        "end": 594
      },
      "abstract": false,
      "declare": false,
      "start": 477,
      "end": 594
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 594
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "ButtonProp",
    "start": 87,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 134,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 155,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 168,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 176,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 182,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "ButtonProp",
    "start": 192,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
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
    "value": "let",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "condition",
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
    "value": "boolean",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 288,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 301,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
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
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 344,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 357,
    "end": 360
  },
  {
    "type": "Keyword",
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
    "type": "JSXIdentifier",
    "value": "props",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373
  },
  {
    "type": "JSXText",
    "value": "\n\t\t\t\t",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "JSXText",
    "value": "Hello World",
    "start": 383,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 395,
    "end": 396
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXText",
    "value": "\n\t\t\t\t",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 406,
    "end": 407
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 407,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "interface",
    "start": 435,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "InnerButtonProp",
    "start": 445,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 477,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "InnerButton",
    "start": 483,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 495,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 509,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "InnerButtonProp",
    "start": 519,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 566,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 572,
    "end": 573
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 579,
    "end": 580
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  }
]
```
