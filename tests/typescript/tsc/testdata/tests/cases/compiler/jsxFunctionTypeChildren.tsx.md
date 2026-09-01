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
            "start": 115,
            "end": 120
          },
          "start": 110,
          "end": 120
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 126,
        "end": 133
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 103,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 150
      },
      "typeParameters": null,
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
              "name": "locale",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 163,
                "end": 169
              },
              "start": 161,
              "end": 169
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 169
          }
        ],
        "start": 153,
        "end": 171
      },
      "declare": false,
      "start": 136,
      "end": 172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 184
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
              "start": 185,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 204
              },
              "typeArguments": null,
              "start": 195,
              "end": 204
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 204
          }
        ],
        "start": 184,
        "end": 205
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 222
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 232,
                              "end": 233
                            },
                            "typeArguments": null,
                            "start": 232,
                            "end": 233
                          },
                          "start": 230,
                          "end": 233
                        },
                        "start": 225,
                        "end": 233
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
                            "name": "React",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 243
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ReactNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 253
                          },
                          "start": 238,
                          "end": 253
                        },
                        "typeArguments": null,
                        "start": 238,
                        "end": 253
                      },
                      "start": 235,
                      "end": 253
                    },
                    "start": 224,
                    "end": 253
                  },
                  "start": 222,
                  "end": 253
                },
                "accessibility": null,
                "static": false,
                "start": 214,
                "end": 254
              }
            ],
            "start": 208,
            "end": 256
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "typeArguments": null,
            "start": 259,
            "end": 260
          }
        ],
        "start": 208,
        "end": 260
      },
      "declare": false,
      "start": 174,
      "end": 261
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 284
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 304
              },
              "typeArguments": null,
              "start": 295,
              "end": 304
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 285,
            "end": 304
          }
        ],
        "start": 284,
        "end": 305
      },
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
                "start": 313,
                "end": 318
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 320
                    },
                    "typeArguments": null,
                    "start": 319,
                    "end": 320
                  }
                ],
                "start": 318,
                "end": 321
              },
              "start": 313,
              "end": 321
            },
            "start": 311,
            "end": 321
          },
          "start": 306,
          "end": 321
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
              "start": 324,
              "end": 327
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 335
            },
            "start": 324,
            "end": 335
          },
          "typeArguments": null,
          "start": 324,
          "end": 335
        },
        "start": 322,
        "end": 335
      },
      "body": null,
      "expression": false,
      "start": 263,
      "end": 336
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 357
                },
                "typeArguments": null,
                "start": 348,
                "end": 357
              },
              "start": 346,
              "end": 357
            },
            "start": 344,
            "end": 357
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "locale",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 368
                },
                "value": {
                  "type": "Literal",
                  "value": "en",
                  "raw": "'en'",
                  "start": 370,
                  "end": 374
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 362,
                "end": 374
              }
            ],
            "start": 360,
            "end": 376
          },
          "definite": false,
          "start": 344,
          "end": 376
        }
      ],
      "declare": false,
      "start": 338,
      "end": 377
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "el",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 502
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 506,
                "end": 510
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 515,
                    "end": 517
                  },
                  "start": 511,
                  "end": 518
                }
              ],
              "selfClosing": false,
              "start": 505,
              "end": 519
            },
            "children": [
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 526
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 532,
                        "end": 535
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 531,
                      "end": 536
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 537,
                            "end": 542
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locale",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 543,
                            "end": 549
                          },
                          "optional": false,
                          "computed": false,
                          "start": 537,
                          "end": 549
                        },
                        "start": 536,
                        "end": 550
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 552,
                        "end": 555
                      },
                      "start": 550,
                      "end": 556
                    },
                    "start": 531,
                    "end": 556
                  },
                  "id": null,
                  "generator": false,
                  "start": 520,
                  "end": 556
                },
                "start": 519,
                "end": 557
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 559,
                "end": 563
              },
              "start": 557,
              "end": 564
            },
            "start": 505,
            "end": 564
          },
          "definite": false,
          "start": 500,
          "end": 564
        }
      ],
      "declare": false,
      "start": 494,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Comp",
          "optional": false,
          "typeAnnotation": null,
          "start": 614,
          "end": 618
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 626
                },
                "start": 621,
                "end": 626
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 636
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 639,
                      "end": 644
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 650,
                        "end": 653
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 649,
                      "end": 654
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 655,
                            "end": 660
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locale",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 661,
                            "end": 667
                          },
                          "optional": false,
                          "computed": false,
                          "start": 655,
                          "end": 667
                        },
                        "start": 654,
                        "end": 668
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 670,
                        "end": 673
                      },
                      "start": 668,
                      "end": 674
                    },
                    "start": 649,
                    "end": 674
                  },
                  "id": null,
                  "generator": false,
                  "start": 638,
                  "end": 674
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 628,
                "end": 674
              }
            ],
            "start": 619,
            "end": 676
          }
        ],
        "optional": false,
        "start": 614,
        "end": 677
      },
      "directive": null,
      "start": 614,
      "end": 678
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 103,
  "end": 678
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 112,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 121,
    "end": 125
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 136,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 174,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 195,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 244,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 271,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 287,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 295,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 348,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 531,
    "end": 532
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 537,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "JSXIdentifier",
    "value": "locale",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 551,
    "end": 552
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 552,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 558,
    "end": 559
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 614,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 628,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 646,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 655,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "JSXIdentifier",
    "value": "locale",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 669,
    "end": 670
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 670,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  }
]
```
