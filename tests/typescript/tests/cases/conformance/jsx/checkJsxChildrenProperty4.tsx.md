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
        "name": "UserName",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 404
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
                  "start": 431,
                  "end": 440
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 430,
                "end": 441
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n            ",
                  "raw": "\n            ",
                  "start": 441,
                  "end": 454
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
                        "start": 456,
                        "end": 460
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
                          "start": 483,
                          "end": 485
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 482,
                        "end": 486
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
                              "start": 488,
                              "end": 492
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NAme",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 497
                            },
                            "optional": false,
                            "computed": false,
                            "start": 488,
                            "end": 497
                          },
                          "start": 486,
                          "end": 499
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 501,
                          "end": 503
                        },
                        "start": 499,
                        "end": 504
                      },
                      "start": 482,
                      "end": 504
                    },
                    "id": null,
                    "generator": false,
                    "start": 456,
                    "end": 518
                  },
                  "start": 454,
                  "end": 520
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 520,
                  "end": 529
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 531,
                  "end": 540
                },
                "start": 529,
                "end": 541
              },
              "start": 430,
              "end": 541
            },
            "start": 413,
            "end": 548
          }
        ],
        "start": 407,
        "end": 550
      },
      "expression": false,
      "start": 387,
      "end": 550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName1",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 570
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
                  "start": 597,
                  "end": 606
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 596,
                "end": 607
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n\n\n            \n            ",
                  "raw": "\n\n\n            \n            ",
                  "start": 607,
                  "end": 635
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
                        "start": 637,
                        "end": 641
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
                          "start": 664,
                          "end": 666
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 663,
                        "end": 667
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
                              "start": 669,
                              "end": 673
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 674,
                              "end": 678
                            },
                            "optional": false,
                            "computed": false,
                            "start": 669,
                            "end": 678
                          },
                          "start": 667,
                          "end": 680
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 682,
                          "end": 684
                        },
                        "start": 680,
                        "end": 685
                      },
                      "start": 663,
                      "end": 685
                    },
                    "id": null,
                    "generator": false,
                    "start": 637,
                    "end": 699
                  },
                  "start": 635,
                  "end": 701
                },
                {
                  "type": "JSXText",
                  "value": "\n            ",
                  "raw": "\n            ",
                  "start": 701,
                  "end": 714
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
                        "start": 716,
                        "end": 720
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
                          "start": 743,
                          "end": 745
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 742,
                        "end": 746
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
                              "start": 748,
                              "end": 752
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 753,
                              "end": 757
                            },
                            "optional": false,
                            "computed": false,
                            "start": 748,
                            "end": 757
                          },
                          "start": 746,
                          "end": 759
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 761,
                          "end": 763
                        },
                        "start": 759,
                        "end": 764
                      },
                      "start": 742,
                      "end": 764
                    },
                    "id": null,
                    "generator": false,
                    "start": 716,
                    "end": 778
                  },
                  "start": 714,
                  "end": 780
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 780,
                  "end": 789
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 791,
                  "end": 800
                },
                "start": 789,
                "end": 801
              },
              "start": 596,
              "end": 801
            },
            "start": 579,
            "end": 808
          }
        ],
        "start": 573,
        "end": 810
      },
      "expression": false,
      "start": 552,
      "end": 810
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 810
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
    "start": 387,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "UserName",
    "start": 396,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 431,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 441,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 482,
    "end": 483
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "JSXIdentifier",
    "value": "NAme",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 520,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 530,
    "end": 531
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 531,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
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
    "type": "Keyword",
    "value": "function",
    "start": 552,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "UserName1",
    "start": 561,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 596,
    "end": 597
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "JSXText",
    "value": "\n\n\n            \n            ",
    "start": 607,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674
  },
  {
    "type": "JSXIdentifier",
    "value": "Name",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 681,
    "end": 682
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 701,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 721,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "JSXIdentifier",
    "value": "Name",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 760,
    "end": 761
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 780,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 790,
    "end": 791
  },
  {
    "type": "JSXIdentifier",
    "value": "FetchUser",
    "start": 791,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  }
]
```
