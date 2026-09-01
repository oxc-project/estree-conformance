__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MenuItemVariant",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 53
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListItemVariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 77
              },
              "typeArguments": null,
              "start": 62,
              "end": 77
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItemVariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 95
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OneLine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 103
                },
                "start": 80,
                "end": 103
              },
              "typeArguments": null,
              "start": 80,
              "end": 103
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 103
          }
        ],
        "start": 37,
        "end": 104
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "menuItemsVariant",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MenuItemVariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 145
                },
                "typeArguments": null,
                "start": 130,
                "end": 145
              },
              "start": 128,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 111,
            "end": 146
          }
        ],
        "start": 105,
        "end": 148
      },
      "declare": false,
      "start": 22,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Menu",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 163
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
              "name": "MenuItemVariant",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 179
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListItemVariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 203
              },
              "typeArguments": null,
              "start": 188,
              "end": 203
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItemVariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 221
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OneLine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 229
                },
                "start": 206,
                "end": 229
              },
              "typeArguments": null,
              "start": 206,
              "end": 229
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 164,
            "end": 229
          }
        ],
        "start": 163,
        "end": 230
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IData",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 242
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MenuItemVariant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 258
                    },
                    "typeArguments": null,
                    "start": 243,
                    "end": 258
                  }
                ],
                "start": 242,
                "end": 259
              },
              "start": 237,
              "end": 259
            },
            "start": 235,
            "end": 259
          },
          "start": 231,
          "end": 259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "listItemVariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 288
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 295
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "menuItemsVariant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 312
                    },
                    "optional": false,
                    "computed": false,
                    "start": 291,
                    "end": 312
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListItemVariant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 331
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OneLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 339
                    },
                    "optional": false,
                    "computed": false,
                    "start": 316,
                    "end": 339
                  },
                  "start": 291,
                  "end": 339
                },
                "definite": false,
                "start": 273,
                "end": 339
              }
            ],
            "declare": false,
            "start": 267,
            "end": 340
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "ListItem",
                  "start": 353,
                  "end": 361
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "variant",
                      "start": 362,
                      "end": 369
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "listItemVariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 386
                      },
                      "start": 370,
                      "end": 387
                    },
                    "start": 362,
                    "end": 387
                  }
                ],
                "selfClosing": true,
                "start": 352,
                "end": 390
              },
              "children": [],
              "closingElement": null,
              "start": 352,
              "end": 390
            },
            "start": 345,
            "end": 391
          }
        ],
        "start": 261,
        "end": 393
      },
      "expression": false,
      "start": 150,
      "end": 393
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IListItemData",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 413
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 425
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListItemVariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 442
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Avatar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 443,
                        "end": 449
                      },
                      "start": 427,
                      "end": 449
                    },
                    "typeArguments": null,
                    "start": 427,
                    "end": 449
                  },
                  "start": 425,
                  "end": 449
                },
                "accessibility": null,
                "static": false,
                "start": 418,
                "end": 450
              }
            ],
            "start": 416,
            "end": 452
          },
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
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 464
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListItemVariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 466,
                        "end": 481
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OneLine",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 489
                      },
                      "start": 466,
                      "end": 489
                    },
                    "typeArguments": null,
                    "start": 466,
                    "end": 489
                  },
                  "start": 464,
                  "end": 489
                },
                "accessibility": null,
                "static": false,
                "start": 457,
                "end": 490
              }
            ],
            "start": 455,
            "end": 492
          }
        ],
        "start": 416,
        "end": 492
      },
      "declare": false,
      "start": 395,
      "end": 493
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListItemVariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 515
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OneLine",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 529
            },
            "initializer": null,
            "computed": false,
            "start": 522,
            "end": 529
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Avatar",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 541
            },
            "initializer": null,
            "computed": false,
            "start": 535,
            "end": 541
          }
        ],
        "start": 516,
        "end": 544
      },
      "const": false,
      "declare": false,
      "start": 495,
      "end": 544
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IListItemData",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 584
              },
              "typeArguments": null,
              "start": 571,
              "end": 584
            },
            "start": 569,
            "end": 584
          },
          "start": 564,
          "end": 584
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 599,
              "end": 603
            },
            "start": 592,
            "end": 604
          }
        ],
        "start": 586,
        "end": 607
      },
      "expression": false,
      "start": 546,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 607
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "IData",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "MenuItemVariant",
    "start": 38,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 54,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 62,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 80,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "OneLine",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "menuItemsVariant",
    "start": 111,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "MenuItemVariant",
    "start": 130,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Menu",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "MenuItemVariant",
    "start": 164,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 180,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 188,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 206,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "OneLine",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "IData",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "MenuItemVariant",
    "start": 243,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 267,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "listItemVariant",
    "start": 273,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 291,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "menuItemsVariant",
    "start": 296,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 316,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "OneLine",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "JSXIdentifier",
    "value": "ListItem",
    "start": 353,
    "end": 361
  },
  {
    "type": "JSXIdentifier",
    "value": "variant",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "listItemVariant",
    "start": 371,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 395,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "IListItemData",
    "start": 400,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 418,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 427,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Avatar",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 457,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 466,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "OneLine",
    "start": 482,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 495,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "ListItemVariant",
    "start": 500,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "OneLine",
    "start": 522,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "Avatar",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 546,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "ListItem",
    "start": 555,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "IListItemData",
    "start": 571,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 592,
    "end": 598
  },
  {
    "type": "Null",
    "value": "null",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  }
]
```
