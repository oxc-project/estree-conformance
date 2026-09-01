__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 65
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 66,
                "end": 68
              },
              "declare": false,
              "start": 48,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 41,
            "end": 68
          }
        ],
        "start": 35,
        "end": 70
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 21,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 94
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
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 109,
                  "end": 113
                },
                "start": 109,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 103,
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
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 121
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 127,
                        "end": 133
                      },
                      "start": 125,
                      "end": 133
                    },
                    "start": 124,
                    "end": 133
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 138,
                    "end": 142
                  },
                  "start": 135,
                  "end": 142
                },
                "start": 123,
                "end": 142
              },
              "start": 121,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 119,
            "end": 143
          }
        ],
        "start": 97,
        "end": 145
      },
      "declare": false,
      "start": 72,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 170
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 186,
                  "end": 191
                },
                "start": 186,
                "end": 191
              },
              "start": 184,
              "end": 191
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 192
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 199
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 205,
                        "end": 211
                      },
                      "start": 203,
                      "end": 211
                    },
                    "start": 202,
                    "end": 211
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 216,
                    "end": 220
                  },
                  "start": 213,
                  "end": 220
                },
                "start": 201,
                "end": 220
              },
              "start": 199,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 197,
            "end": 221
          }
        ],
        "start": 173,
        "end": 223
      },
      "declare": false,
      "start": 147,
      "end": 223
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 255
            },
            "typeArguments": null,
            "start": 238,
            "end": 255
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 276
            },
            "typeArguments": null,
            "start": 258,
            "end": 276
          }
        ],
        "start": 238,
        "end": 276
      },
      "declare": false,
      "start": 225,
      "end": 277
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 300
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 325
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 325
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 346
                  },
                  "typeArguments": null,
                  "start": 328,
                  "end": 346
                }
              ],
              "start": 308,
              "end": 346
            },
            "start": 306,
            "end": 346
          },
          "start": 301,
          "end": 346
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
              "start": 349,
              "end": 352
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 360
            },
            "start": 349,
            "end": 360
          },
          "typeArguments": null,
          "start": 349,
          "end": 360
        },
        "start": 347,
        "end": 360
      },
      "body": null,
      "expression": false,
      "start": 279,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 390,
              "end": 394
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "start": 395,
                  "end": 399
                },
                "value": null,
                "start": 395,
                "end": 399
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 400,
                  "end": 402
                },
                "value": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 405
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parseInt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 417
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 419
                        }
                      ],
                      "optional": false,
                      "start": 409,
                      "end": 420
                    },
                    "id": null,
                    "generator": false,
                    "start": 404,
                    "end": 420
                  },
                  "start": 403,
                  "end": 421
                },
                "start": 400,
                "end": 421
              }
            ],
            "selfClosing": true,
            "start": 389,
            "end": 424
          },
          "children": [],
          "closingElement": null,
          "start": 389,
          "end": 424
        },
        "prefix": true,
        "start": 383,
        "end": 425
      },
      "directive": null,
      "start": 383,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 455,
              "end": 459
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "start": 460,
                  "end": 464
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 466,
                    "end": 471
                  },
                  "start": 465,
                  "end": 472
                },
                "start": 460,
                "end": 472
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 473,
                  "end": 475
                },
                "value": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 478
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 482,
                          "end": 483
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 491
                        },
                        "optional": false,
                        "computed": false,
                        "start": 482,
                        "end": 491
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 482,
                      "end": 493
                    },
                    "id": null,
                    "generator": false,
                    "start": 477,
                    "end": 493
                  },
                  "start": 476,
                  "end": 494
                },
                "start": 473,
                "end": 494
              }
            ],
            "selfClosing": true,
            "start": 454,
            "end": 497
          },
          "children": [],
          "closingElement": null,
          "start": 454,
          "end": 497
        },
        "prefix": true,
        "start": 448,
        "end": 498
      },
      "directive": null,
      "start": 448,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 564,
              "end": 568
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "start": 569,
                  "end": 573
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 584
                  },
                  "start": 574,
                  "end": 585
                },
                "start": 569,
                "end": 585
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 586,
                  "end": 588
                },
                "value": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 591
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 595,
                          "end": 596
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 604
                        },
                        "optional": false,
                        "computed": false,
                        "start": 595,
                        "end": 604
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 595,
                      "end": 606
                    },
                    "id": null,
                    "generator": false,
                    "start": 590,
                    "end": 606
                  },
                  "start": 589,
                  "end": 607
                },
                "start": 586,
                "end": 607
              }
            ],
            "selfClosing": true,
            "start": 563,
            "end": 610
          },
          "children": [],
          "closingElement": null,
          "start": 563,
          "end": 610
        },
        "prefix": true,
        "start": 557,
        "end": 611
      },
      "directive": null,
      "start": 557,
      "end": 612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 702,
              "end": 706
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 707,
                  "end": 709
                },
                "value": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 711,
                        "end": 712
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 717
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 725
                        },
                        "optional": false,
                        "computed": false,
                        "start": 716,
                        "end": 725
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 716,
                      "end": 727
                    },
                    "id": null,
                    "generator": false,
                    "start": 711,
                    "end": 727
                  },
                  "start": 710,
                  "end": 728
                },
                "start": 707,
                "end": 728
              }
            ],
            "selfClosing": true,
            "start": 701,
            "end": 731
          },
          "children": [],
          "closingElement": null,
          "start": 701,
          "end": 731
        },
        "prefix": true,
        "start": 695,
        "end": 732
      },
      "directive": null,
      "start": 695,
      "end": 733
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 733
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorTrue",
    "start": 77,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 135,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 147,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorFalse",
    "start": 152,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 213,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 225,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorTrue",
    "start": 238,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorFalse",
    "start": 258,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 279,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 287,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorTrue",
    "start": 308,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorFalse",
    "start": 328,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 353,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 389,
    "end": 390
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 390,
    "end": 394
  },
  {
    "type": "JSXIdentifier",
    "value": "disc",
    "start": 395,
    "end": 399
  },
  {
    "type": "JSXIdentifier",
    "value": "cb",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "parseInt",
    "start": 409,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 455,
    "end": 459
  },
  {
    "type": "JSXIdentifier",
    "value": "disc",
    "start": 460,
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
    "type": "Boolean",
    "value": "false",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "JSXIdentifier",
    "value": "cb",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 479,
    "end": 481
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "JSXIdentifier",
    "value": "toFixed",
    "start": 484,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 563,
    "end": 564
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 564,
    "end": 568
  },
  {
    "type": "JSXIdentifier",
    "value": "disc",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 575,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "JSXIdentifier",
    "value": "cb",
    "start": 586,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 592,
    "end": 594
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "JSXIdentifier",
    "value": "toFixed",
    "start": 597,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 695,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 702,
    "end": 706
  },
  {
    "type": "JSXIdentifier",
    "value": "cb",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 713,
    "end": 715
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718
  },
  {
    "type": "JSXIdentifier",
    "value": "toFixed",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  }
]
```
