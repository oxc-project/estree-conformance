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
        "name": "IUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 92
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
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 112
          }
        ],
        "start": 93,
        "end": 114
      },
      "declare": false,
      "start": 77,
      "end": 114
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFetchUserProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 141
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
              "start": 148,
              "end": 156
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
                    "name": "user",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IUser",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 170
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 170
                      },
                      "start": 163,
                      "end": 170
                    },
                    "start": 159,
                    "end": 170
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
                        "start": 175,
                        "end": 178
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 186
                      },
                      "start": 175,
                      "end": 186
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 186
                  },
                  "start": 172,
                  "end": 186
                },
                "start": 158,
                "end": 186
              },
              "start": 156,
              "end": 186
            },
            "accessibility": null,
            "static": false,
            "start": 148,
            "end": 187
          }
        ],
        "start": 142,
        "end": 189
      },
      "declare": false,
      "start": 116,
      "end": 189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FetchUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 206
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
          "start": 215,
          "end": 220
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 230
        },
        "optional": false,
        "computed": false,
        "start": 215,
        "end": 230
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFetchUserProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 246
            },
            "typeArguments": null,
            "start": 231,
            "end": 246
          },
          {
            "type": "TSAnyKeyword",
            "start": 248,
            "end": 251
          }
        ],
        "start": 230,
        "end": 252
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
              "start": 259,
              "end": 265
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 285,
                          "end": 289
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 295
                        },
                        "optional": false,
                        "computed": false,
                        "start": 285,
                        "end": 295
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 310,
                              "end": 314
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 320
                            },
                            "optional": false,
                            "computed": false,
                            "start": 310,
                            "end": 320
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 321,
                            "end": 329
                          },
                          "optional": false,
                          "computed": false,
                          "start": 310,
                          "end": 329
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 330,
                                "end": 334
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 335,
                                "end": 340
                              },
                              "optional": false,
                              "computed": false,
                              "start": 330,
                              "end": 340
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 341,
                              "end": 347
                            },
                            "optional": false,
                            "computed": false,
                            "start": 330,
                            "end": 347
                          }
                        ],
                        "optional": false,
                        "start": 310,
                        "end": 348
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 363,
                        "end": 367
                      },
                      "start": 285,
                      "end": 367
                    },
                    "start": 278,
                    "end": 368
                  }
                ],
                "start": 268,
                "end": 374
              },
              "expression": false,
              "start": 265,
              "end": 374
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 259,
            "end": 374
          }
        ],
        "start": 253,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 191,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName0",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 402
      },
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
                  "name": "FetchUser",
                  "start": 429,
                  "end": 438
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 428,
                "end": 439
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n            ",
                  "raw": "\n            ",
                  "start": 439,
                  "end": 452
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 458
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 481,
                          "end": 483
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 480,
                        "end": 484
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 486,
                              "end": 490
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 491,
                              "end": 495
                            },
                            "optional": false,
                            "computed": false,
                            "start": 486,
                            "end": 495
                          },
                          "start": 484,
                          "end": 497
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 499,
                          "end": 501
                        },
                        "start": 497,
                        "end": 502
                      },
                      "start": 480,
                      "end": 502
                    },
                    "id": null,
                    "generator": false,
                    "start": 454,
                    "end": 516
                  },
                  "start": 452,
                  "end": 518
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 518,
                  "end": 527
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 529,
                  "end": 538
                },
                "start": 527,
                "end": 539
              },
              "start": 428,
              "end": 539
            },
            "start": 411,
            "end": 546
          }
        ],
        "start": 405,
        "end": 548
      },
      "expression": false,
      "start": 384,
      "end": 548
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName1",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 568
      },
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
                  "name": "FetchUser",
                  "start": 595,
                  "end": 604
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 594,
                "end": 605
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n\n            ",
                  "raw": "\n\n            ",
                  "start": 605,
                  "end": 619
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 625
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 648,
                          "end": 650
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 647,
                        "end": 651
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 657
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 658,
                              "end": 662
                            },
                            "optional": false,
                            "computed": false,
                            "start": 653,
                            "end": 662
                          },
                          "start": 651,
                          "end": 664
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 666,
                          "end": 668
                        },
                        "start": 664,
                        "end": 669
                      },
                      "start": 647,
                      "end": 669
                    },
                    "id": null,
                    "generator": false,
                    "start": 621,
                    "end": 683
                  },
                  "start": 619,
                  "end": 685
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 685,
                  "end": 694
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 696,
                  "end": 705
                },
                "start": 694,
                "end": 706
              },
              "start": 594,
              "end": 706
            },
            "start": 577,
            "end": 713
          }
        ],
        "start": 571,
        "end": 715
      },
      "expression": false,
      "start": 550,
      "end": 715
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 715
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
    "value": "IUser",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 116,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "IFetchUserProps",
    "start": 126,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 159,
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
    "value": "IUser",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 172,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "FetchUser",
    "start": 197,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 207,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 221,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "IFetchUserProps",
    "start": 231,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 248,
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
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 315,
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
    "value": "children",
    "start": 321,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Null",
    "value": "null",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 384,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "UserName0",
    "start": 393,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 428,
    "end": 429
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 429,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 439,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 481,
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
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "JSXIdentifier",
    "value": "Name",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 498,
    "end": 499
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 518,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 528,
    "end": 529
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 529,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 550,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "UserName1",
    "start": 559,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 595,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "JSXText",
    "value": "\n\n            ",
    "start": 605,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 657,
    "end": 658
  },
  {
    "type": "JSXIdentifier",
    "value": "Name",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 665,
    "end": 666
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 685,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 695,
    "end": 696
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 696,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  }
]
```
