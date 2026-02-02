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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 89,
            "end": 91
          },
          "definite": false,
          "start": 83,
          "end": 91
        }
      ],
      "declare": false,
      "start": 77,
      "end": 92
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 109,
                          "end": 110
                        },
                        "start": 109,
                        "end": 110
                      },
                      "start": 107,
                      "end": 110
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 110
                  }
                ],
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "start": 99,
            "end": 111
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 123,
                  "end": 124
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 120,
                "end": 124
              }
            ],
            "start": 114,
            "end": 126
          },
          "definite": false,
          "start": 99,
          "end": 126
        }
      ],
      "declare": false,
      "start": 93,
      "end": 126
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 143,
                          "end": 148
                        },
                        "start": 143,
                        "end": 148
                      },
                      "start": 141,
                      "end": 148
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 140,
                    "end": 149
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 159
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 161,
                        "end": 167
                      },
                      "start": 159,
                      "end": 167
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 150,
                    "end": 167
                  }
                ],
                "start": 139,
                "end": 168
              },
              "start": 137,
              "end": 168
            },
            "start": 133,
            "end": 168
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 180,
                  "end": 185
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 177,
                "end": 185
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "overwrite",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 200
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 202,
                  "end": 206
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 191,
                "end": 206
              }
            ],
            "start": 171,
            "end": 208
          },
          "definite": false,
          "start": 133,
          "end": 208
        }
      ],
      "declare": false,
      "start": 127,
      "end": 208
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 224
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 234,
                  "end": 235
                },
                "start": 234,
                "end": 235
              },
              "start": 232,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 231,
            "end": 235
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 241
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 243,
                  "end": 248
                },
                "start": 243,
                "end": 248
              },
              "start": 241,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 240,
            "end": 248
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overwrite",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 253,
            "end": 270
          }
        ],
        "start": 225,
        "end": 272
      },
      "declare": false,
      "start": 210,
      "end": 272
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverWriteAttr",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 293
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
          "start": 302,
          "end": 307
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 317
        },
        "optional": false,
        "computed": false,
        "start": 302,
        "end": 317
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 322
            },
            "typeArguments": null,
            "start": 318,
            "end": 322
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 324,
            "end": 326
          }
        ],
        "start": 317,
        "end": 327
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
              "start": 334,
              "end": 340
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
                          "name": "div",
                          "start": 361,
                          "end": 364
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 360,
                        "end": 365
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 365,
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
                      "start": 360,
                      "end": 376
                    },
                    "start": 353,
                    "end": 377
                  }
                ],
                "start": 343,
                "end": 383
              },
              "expression": false,
              "start": 340,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 334,
            "end": 383
          }
        ],
        "start": 328,
        "end": 385
      },
      "abstract": false,
      "declare": false,
      "start": 274,
      "end": 385
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
            "name": "anyobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 399,
                "end": 402
              },
              "start": 397,
              "end": 402
            },
            "start": 391,
            "end": 402
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 402
        }
      ],
      "declare": false,
      "start": 387,
      "end": 403
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
            "start": 418,
            "end": 419
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 423,
                "end": 436
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 444
                  },
                  "start": 437,
                  "end": 445
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 446,
                    "end": 447
                  },
                  "value": null,
                  "start": 446,
                  "end": 447
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 448,
                    "end": 457
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 458,
                    "end": 462
                  },
                  "start": 448,
                  "end": 462
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 471
                  },
                  "start": 463,
                  "end": 472
                }
              ],
              "selfClosing": true,
              "start": 422,
              "end": 475
            },
            "children": [],
            "closingElement": null,
            "start": 422,
            "end": 475
          },
          "definite": false,
          "start": 418,
          "end": 475
        }
      ],
      "declare": false,
      "start": 414,
      "end": 475
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 482
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 486,
                "end": 499
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 500,
                    "end": 509
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 510,
                    "end": 514
                  },
                  "start": 500,
                  "end": 514
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 523
                  },
                  "start": 515,
                  "end": 524
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 525,
                    "end": 526
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 528,
                      "end": 529
                    },
                    "start": 527,
                    "end": 530
                  },
                  "start": 525,
                  "end": 530
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 539,
                          "end": 543
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 536,
                        "end": 543
                      }
                    ],
                    "start": 535,
                    "end": 544
                  },
                  "start": 531,
                  "end": 545
                }
              ],
              "selfClosing": true,
              "start": 485,
              "end": 548
            },
            "children": [],
            "closingElement": null,
            "start": 485,
            "end": 548
          },
          "definite": false,
          "start": 480,
          "end": 548
        }
      ],
      "declare": false,
      "start": 476,
      "end": 548
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 559,
                "end": 572
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyobj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 583
                  },
                  "start": 573,
                  "end": 584
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 585,
                    "end": 586
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 588,
                      "end": 589
                    },
                    "start": 587,
                    "end": 590
                  },
                  "start": 585,
                  "end": 590
                }
              ],
              "selfClosing": true,
              "start": 558,
              "end": 593
            },
            "children": [],
            "closingElement": null,
            "start": 558,
            "end": 593
          },
          "definite": false,
          "start": 553,
          "end": 593
        }
      ],
      "declare": false,
      "start": 549,
      "end": 593
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 600
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 604,
                "end": 617
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 618,
                    "end": 627
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 628,
                    "end": 632
                  },
                  "start": 618,
                  "end": 632
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 641
                  },
                  "start": 633,
                  "end": 642
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 648,
                          "end": 649
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 651,
                          "end": 655
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 648,
                        "end": 655
                      }
                    ],
                    "start": 647,
                    "end": 656
                  },
                  "start": 643,
                  "end": 657
                }
              ],
              "selfClosing": true,
              "start": 603,
              "end": 660
            },
            "children": [],
            "closingElement": null,
            "start": 603,
            "end": 660
          },
          "definite": false,
          "start": 598,
          "end": 660
        }
      ],
      "declare": false,
      "start": 594,
      "end": 660
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 661
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
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "obj1",
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
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 191,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 210,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 243,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "OverWriteAttr",
    "start": 280,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 294,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 302,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 308,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 365,
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
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "anyobj",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 423,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 446,
    "end": 447
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 448,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 486,
    "end": 499
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 500,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 516,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 539,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 559,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "anyobj",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 604,
    "end": 617
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 618,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 659,
    "end": 660
  }
]
```
