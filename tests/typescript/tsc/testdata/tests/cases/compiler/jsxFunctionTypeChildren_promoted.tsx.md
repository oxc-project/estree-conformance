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
            "start": 117,
            "end": 122
          },
          "start": 112,
          "end": 122
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 128,
        "end": 135
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 105,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 152
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
              "start": 157,
              "end": 163
            },
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
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 171
          }
        ],
        "start": 155,
        "end": 173
      },
      "declare": false,
      "start": 138,
      "end": 174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 186
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
              "start": 187,
              "end": 188
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 206
              },
              "typeArguments": null,
              "start": 197,
              "end": 206
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 187,
            "end": 206
          }
        ],
        "start": 186,
        "end": 207
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
                  "start": 216,
                  "end": 224
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
                              "start": 234,
                              "end": 235
                            },
                            "typeArguments": null,
                            "start": 234,
                            "end": 235
                          },
                          "start": 232,
                          "end": 235
                        },
                        "start": 227,
                        "end": 235
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
                            "start": 240,
                            "end": 245
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ReactNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 255
                          },
                          "start": 240,
                          "end": 255
                        },
                        "typeArguments": null,
                        "start": 240,
                        "end": 255
                      },
                      "start": 237,
                      "end": 255
                    },
                    "start": 226,
                    "end": 255
                  },
                  "start": 224,
                  "end": 255
                },
                "accessibility": null,
                "static": false,
                "start": 216,
                "end": 256
              }
            ],
            "start": 210,
            "end": 258
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
            "typeArguments": null,
            "start": 261,
            "end": 262
          }
        ],
        "start": 210,
        "end": 262
      },
      "declare": false,
      "start": 176,
      "end": 263
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 286
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
              "start": 287,
              "end": 288
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 306
              },
              "typeArguments": null,
              "start": 297,
              "end": 306
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 287,
            "end": 306
          }
        ],
        "start": 286,
        "end": 307
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
                "start": 315,
                "end": 320
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
                      "start": 321,
                      "end": 322
                    },
                    "typeArguments": null,
                    "start": 321,
                    "end": 322
                  }
                ],
                "start": 320,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 313,
            "end": 323
          },
          "start": 308,
          "end": 323
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
              "start": 326,
              "end": 329
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 337
            },
            "start": 326,
            "end": 337
          },
          "typeArguments": null,
          "start": 326,
          "end": 337
        },
        "start": 324,
        "end": 337
      },
      "body": null,
      "expression": false,
      "start": 265,
      "end": 338
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
                  "start": 350,
                  "end": 359
                },
                "typeArguments": null,
                "start": 350,
                "end": 359
              },
              "start": 348,
              "end": 359
            },
            "start": 346,
            "end": 359
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
                  "start": 364,
                  "end": 370
                },
                "value": {
                  "type": "Literal",
                  "value": "en",
                  "raw": "'en'",
                  "start": 372,
                  "end": 376
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 364,
                "end": 376
              }
            ],
            "start": 362,
            "end": 378
          },
          "definite": false,
          "start": 346,
          "end": 378
        }
      ],
      "declare": false,
      "start": 340,
      "end": 379
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
            "start": 502,
            "end": 504
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 508,
                "end": 512
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
                    "start": 517,
                    "end": 519
                  },
                  "start": 513,
                  "end": 520
                }
              ],
              "selfClosing": false,
              "start": 507,
              "end": 521
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
                      "start": 523,
                      "end": 528
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
                        "start": 534,
                        "end": 537
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 533,
                      "end": 538
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
                            "start": 539,
                            "end": 544
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locale",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 545,
                            "end": 551
                          },
                          "optional": false,
                          "computed": false,
                          "start": 539,
                          "end": 551
                        },
                        "start": 538,
                        "end": 552
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 554,
                        "end": 557
                      },
                      "start": 552,
                      "end": 558
                    },
                    "start": 533,
                    "end": 558
                  },
                  "id": null,
                  "generator": false,
                  "start": 522,
                  "end": 558
                },
                "start": 521,
                "end": 559
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 561,
                "end": 565
              },
              "start": 559,
              "end": 566
            },
            "start": 507,
            "end": 566
          },
          "definite": false,
          "start": 502,
          "end": 566
        }
      ],
      "declare": false,
      "start": 496,
      "end": 567
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
          "start": 616,
          "end": 620
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
                  "start": 626,
                  "end": 628
                },
                "start": 623,
                "end": 628
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
                  "start": 630,
                  "end": 638
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
                      "start": 641,
                      "end": 646
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
                        "start": 652,
                        "end": 655
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 651,
                      "end": 656
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
                            "start": 657,
                            "end": 662
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locale",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 663,
                            "end": 669
                          },
                          "optional": false,
                          "computed": false,
                          "start": 657,
                          "end": 669
                        },
                        "start": 656,
                        "end": 670
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 672,
                        "end": 675
                      },
                      "start": 670,
                      "end": 676
                    },
                    "start": 651,
                    "end": 676
                  },
                  "id": null,
                  "generator": false,
                  "start": 640,
                  "end": 676
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 630,
                "end": 676
              }
            ],
            "start": 621,
            "end": 678
          }
        ],
        "optional": false,
        "start": 616,
        "end": 679
      },
      "directive": null,
      "start": 616,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 105,
  "end": 680
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 123,
    "end": 127
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 138,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 143,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 157,
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
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 176,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 216,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 237,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 246,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 265,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 273,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 289,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 297,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 350,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 364,
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
    "value": "'en'",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 539,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 544,
    "end": 545
  },
  {
    "type": "JSXIdentifier",
    "value": "locale",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 553,
    "end": 554
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 560,
    "end": 561
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 630,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 641,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 651,
    "end": 652
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "JSXIdentifier",
    "value": "locale",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 671,
    "end": 672
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  }
]
```
