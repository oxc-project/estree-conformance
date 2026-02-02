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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "InnerButton",
                          "start": 289,
                          "end": 300
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 305,
                                "end": 309
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 310,
                                "end": 315
                              },
                              "optional": false,
                              "computed": false,
                              "start": 305,
                              "end": 315
                            },
                            "start": 301,
                            "end": 316
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "children",
                              "start": 317,
                              "end": 325
                            },
                            "value": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 326,
                              "end": 330
                            },
                            "start": 317,
                            "end": 330
                          }
                        ],
                        "selfClosing": false,
                        "start": 288,
                        "end": 331
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 331,
                          "end": 344
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 345,
                              "end": 348
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 344,
                            "end": 349
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "value": "Hello World",
                              "raw": "Hello World",
                              "start": 349,
                              "end": 360
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 362,
                              "end": 365
                            },
                            "start": 360,
                            "end": 366
                          },
                          "start": 344,
                          "end": 366
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 366,
                          "end": 379
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "InnerButton",
                          "start": 381,
                          "end": 392
                        },
                        "start": 379,
                        "end": 393
                      },
                      "start": 288,
                      "end": 393
                    },
                    "start": 280,
                    "end": 395
                  }
                ],
                "start": 224,
                "end": 401
              },
              "expression": false,
              "start": 221,
              "end": 401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 215,
            "end": 401
          }
        ],
        "start": 209,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 155,
      "end": 403
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 430
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
              "start": 434,
              "end": 435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 437,
                "end": 443
              },
              "start": 435,
              "end": 443
            },
            "accessibility": null,
            "static": false,
            "start": 434,
            "end": 443
          }
        ],
        "start": 431,
        "end": 445
      },
      "declare": false,
      "start": 405,
      "end": 445
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
        "start": 453,
        "end": 464
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
          "start": 473,
          "end": 478
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 488
        },
        "optional": false,
        "computed": false,
        "start": 473,
        "end": 488
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
              "start": 489,
              "end": 504
            },
            "typeArguments": null,
            "start": 489,
            "end": 504
          },
          {
            "type": "TSAnyKeyword",
            "start": 506,
            "end": 509
          }
        ],
        "start": 488,
        "end": 510
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
              "start": 514,
              "end": 520
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
                          "start": 536,
                          "end": 542
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 535,
                        "end": 543
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 543,
                          "end": 548
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "start": 550,
                          "end": 556
                        },
                        "start": 548,
                        "end": 557
                      },
                      "start": 535,
                      "end": 557
                    },
                    "start": 527,
                    "end": 559
                  }
                ],
                "start": 523,
                "end": 562
              },
              "expression": false,
              "start": 520,
              "end": 562
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 514,
            "end": 562
          }
        ],
        "start": 511,
        "end": 564
      },
      "abstract": false,
      "declare": false,
      "start": 447,
      "end": 564
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 564
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
    "value": "return",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 289,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 302,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 317,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 331,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXText",
    "value": "Hello World",
    "start": 349,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 361,
    "end": 362
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 366,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 380,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 381,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 405,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "InnerButtonProp",
    "start": 415,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 447,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "InnerButton",
    "start": 453,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 465,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 479,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "InnerButtonProp",
    "start": 489,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 542,
    "end": 543
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 549,
    "end": 550
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 556,
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
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  }
]
```
