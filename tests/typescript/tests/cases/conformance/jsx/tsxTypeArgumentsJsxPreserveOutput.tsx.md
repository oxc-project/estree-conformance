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
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 91
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 102,
                "end": 109
              },
              "start": 100,
              "end": 109
            },
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 110
          }
        ],
        "start": 94,
        "end": 112
      },
      "declare": false,
      "start": 77,
      "end": 113
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 138
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
              },
              "start": 145,
              "end": 154
            },
            "accessibility": null,
            "static": false,
            "start": 141,
            "end": 155
          }
        ],
        "start": 139,
        "end": 157
      },
      "declare": false,
      "start": 114,
      "end": 157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 171
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 172,
            "end": 173
          }
        ],
        "start": 171,
        "end": 174
      },
      "params": [],
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
              "start": 190,
              "end": 194
            },
            "start": 183,
            "end": 195
          }
        ],
        "start": 177,
        "end": 197
      },
      "expression": false,
      "start": 159,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 199,
          "end": 201
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 201,
            "end": 206
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 207,
              "end": 234
            },
            "start": 206,
            "end": 235
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 235,
            "end": 240
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 241,
                "end": 244
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 245,
                    "end": 252
                  }
                ],
                "start": 244,
                "end": 253
              },
              "attributes": [],
              "selfClosing": true,
              "start": 240,
              "end": 256
            },
            "children": [],
            "closingElement": null,
            "start": 240,
            "end": 256
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 256,
            "end": 261
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 262,
                "end": 265
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 266,
                    "end": 272
                  }
                ],
                "start": 265,
                "end": 273
              },
              "attributes": [],
              "selfClosing": true,
              "start": 261,
              "end": 276
            },
            "children": [],
            "closingElement": null,
            "start": 261,
            "end": 276
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 276,
            "end": 281
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 282,
                "end": 285
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 286,
                    "end": 293
                  }
                ],
                "start": 285,
                "end": 294
              },
              "attributes": [],
              "selfClosing": true,
              "start": 281,
              "end": 297
            },
            "children": [],
            "closingElement": null,
            "start": 281,
            "end": 297
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 297,
            "end": 302
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 303,
                "end": 306
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 307,
                    "end": 313
                  }
                ],
                "start": 306,
                "end": 314
              },
              "attributes": [],
              "selfClosing": true,
              "start": 302,
              "end": 317
            },
            "children": [],
            "closingElement": null,
            "start": 302,
            "end": 317
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 317,
            "end": 322
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 323,
                "end": 326
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "start": 327,
                    "end": 331
                  }
                ],
                "start": 326,
                "end": 332
              },
              "attributes": [],
              "selfClosing": true,
              "start": 322,
              "end": 335
            },
            "children": [],
            "closingElement": null,
            "start": 322,
            "end": 335
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 335,
            "end": 340
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 341,
                "end": 344
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 345,
                    "end": 348
                  }
                ],
                "start": 344,
                "end": 349
              },
              "attributes": [],
              "selfClosing": true,
              "start": 340,
              "end": 352
            },
            "children": [],
            "closingElement": null,
            "start": 340,
            "end": 352
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 352,
            "end": 357
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 358,
                "end": 361
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 362,
                    "end": 367
                  }
                ],
                "start": 361,
                "end": 368
              },
              "attributes": [],
              "selfClosing": true,
              "start": 357,
              "end": 371
            },
            "children": [],
            "closingElement": null,
            "start": 357,
            "end": 371
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 371,
            "end": 376
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 377,
                "end": 380
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 381,
                    "end": 390
                  }
                ],
                "start": 380,
                "end": 391
              },
              "attributes": [],
              "selfClosing": true,
              "start": 376,
              "end": 394
            },
            "children": [],
            "closingElement": null,
            "start": 376,
            "end": 394
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 394,
            "end": 399
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 400,
                "end": 403
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 413
                    },
                    "typeArguments": null,
                    "start": 404,
                    "end": 413
                  }
                ],
                "start": 403,
                "end": 414
              },
              "attributes": [],
              "selfClosing": true,
              "start": 399,
              "end": 417
            },
            "children": [],
            "closingElement": null,
            "start": 399,
            "end": 417
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 417,
            "end": 422
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 423,
                "end": 426
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 441
                    },
                    "typeArguments": null,
                    "start": 427,
                    "end": 441
                  }
                ],
                "start": 426,
                "end": 442
              },
              "attributes": [],
              "selfClosing": true,
              "start": 422,
              "end": 445
            },
            "children": [],
            "closingElement": null,
            "start": 422,
            "end": 445
          },
          {
            "type": "JSXText",
            "value": "\n\n    ",
            "raw": "\n\n    ",
            "start": 445,
            "end": 451
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 452,
              "end": 475
            },
            "start": 451,
            "end": 476
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 476,
            "end": 481
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 482,
                "end": 485
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 486,
                    "end": 493
                  }
                ],
                "start": 485,
                "end": 494
              },
              "attributes": [],
              "selfClosing": false,
              "start": 481,
              "end": 495
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 497,
                "end": 500
              },
              "start": 495,
              "end": 501
            },
            "start": 481,
            "end": 501
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 501,
            "end": 506
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 507,
                "end": 510
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 511,
                    "end": 517
                  }
                ],
                "start": 510,
                "end": 518
              },
              "attributes": [],
              "selfClosing": false,
              "start": 506,
              "end": 519
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 521,
                "end": 524
              },
              "start": 519,
              "end": 525
            },
            "start": 506,
            "end": 525
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 525,
            "end": 530
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 531,
                "end": 534
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 535,
                    "end": 542
                  }
                ],
                "start": 534,
                "end": 543
              },
              "attributes": [],
              "selfClosing": false,
              "start": 530,
              "end": 544
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 546,
                "end": 549
              },
              "start": 544,
              "end": 550
            },
            "start": 530,
            "end": 550
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 550,
            "end": 555
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 556,
                "end": 559
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 560,
                    "end": 566
                  }
                ],
                "start": 559,
                "end": 567
              },
              "attributes": [],
              "selfClosing": false,
              "start": 555,
              "end": 568
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 570,
                "end": 573
              },
              "start": 568,
              "end": 574
            },
            "start": 555,
            "end": 574
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 574,
            "end": 579
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 580,
                "end": 583
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "start": 584,
                    "end": 588
                  }
                ],
                "start": 583,
                "end": 589
              },
              "attributes": [],
              "selfClosing": false,
              "start": 579,
              "end": 590
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 592,
                "end": 595
              },
              "start": 590,
              "end": 596
            },
            "start": 579,
            "end": 596
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 596,
            "end": 601
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 602,
                "end": 605
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 606,
                    "end": 609
                  }
                ],
                "start": 605,
                "end": 610
              },
              "attributes": [],
              "selfClosing": false,
              "start": 601,
              "end": 611
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 613,
                "end": 616
              },
              "start": 611,
              "end": 617
            },
            "start": 601,
            "end": 617
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 617,
            "end": 622
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 623,
                "end": 626
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 627,
                    "end": 632
                  }
                ],
                "start": 626,
                "end": 633
              },
              "attributes": [],
              "selfClosing": false,
              "start": 622,
              "end": 634
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 636,
                "end": 639
              },
              "start": 634,
              "end": 640
            },
            "start": 622,
            "end": 640
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 640,
            "end": 645
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 646,
                "end": 649
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 650,
                    "end": 659
                  }
                ],
                "start": 649,
                "end": 660
              },
              "attributes": [],
              "selfClosing": false,
              "start": 645,
              "end": 661
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 663,
                "end": 666
              },
              "start": 661,
              "end": 667
            },
            "start": 645,
            "end": 667
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 667,
            "end": 672
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 673,
                "end": 676
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 686
                    },
                    "typeArguments": null,
                    "start": 677,
                    "end": 686
                  }
                ],
                "start": 676,
                "end": 687
              },
              "attributes": [],
              "selfClosing": false,
              "start": 672,
              "end": 688
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 690,
                "end": 693
              },
              "start": 688,
              "end": 694
            },
            "start": 672,
            "end": 694
          },
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 694,
            "end": 699
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 700,
                "end": 703
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 718
                    },
                    "typeArguments": null,
                    "start": 704,
                    "end": 718
                  }
                ],
                "start": 703,
                "end": 719
              },
              "attributes": [],
              "selfClosing": false,
              "start": 699,
              "end": 720
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 722,
                "end": 725
              },
              "start": 720,
              "end": 726
            },
            "start": 699,
            "end": 726
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 726,
            "end": 727
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 727,
          "end": 730
        },
        "start": 199,
        "end": 730
      },
      "directive": null,
      "start": 199,
      "end": 730
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 730
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
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "TypeProps",
    "start": 82,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 114,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "InterfaceProps",
    "start": 124,
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
    "value": "foo",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Null",
    "value": "null",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Null",
    "value": "null",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "any",
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
    "type": "Punctuator",
    "value": "/",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 352,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 371,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 381,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 393,
    "end": 394
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "TypeProps",
    "start": 404,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "InterfaceProps",
    "start": 427,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 445,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 476,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 481,
    "end": 482
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 486,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 496,
    "end": 497
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 520,
    "end": 521
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 535,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 545,
    "end": 546
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 549,
    "end": 550
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 569,
    "end": 570
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 573,
    "end": 574
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 574,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "Null",
    "value": "null",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 591,
    "end": 592
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 592,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 606,
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
    "value": ">",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 612,
    "end": 613
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 623,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 635,
    "end": 636
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 645,
    "end": 646
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 650,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 662,
    "end": 663
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 672,
    "end": 673
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 673,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "TypeProps",
    "start": 677,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 689,
    "end": 690
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 693,
    "end": 694
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 700,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "InterfaceProps",
    "start": 704,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 721,
    "end": 722
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 725,
    "end": 726
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730
  }
]
```
