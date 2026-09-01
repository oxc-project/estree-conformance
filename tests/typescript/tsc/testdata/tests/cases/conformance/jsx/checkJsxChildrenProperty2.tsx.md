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
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 91
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
              "start": 98,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 108
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
              "start": 113,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 123
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
              "start": 128,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 138,
                    "end": 144
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 150
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 158
                      },
                      "start": 147,
                      "end": 158
                    },
                    "typeArguments": null,
                    "start": 147,
                    "end": 158
                  }
                ],
                "start": 138,
                "end": 158
              },
              "start": 136,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 128,
            "end": 158
          }
        ],
        "start": 92,
        "end": 160
      },
      "declare": false,
      "start": 77,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 183
              },
              "typeArguments": null,
              "start": 179,
              "end": 183
            },
            "start": 177,
            "end": 183
          },
          "start": 176,
          "end": 183
        }
      ],
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
                  "start": 199,
                  "end": 202
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 198,
                "end": 203
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 207
                    },
                    "optional": false,
                    "computed": false,
                    "start": 204,
                    "end": 207
                  },
                  "start": 203,
                  "end": 208
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 210,
                  "end": 213
                },
                "start": 208,
                "end": 214
              },
              "start": 198,
              "end": 214
            },
            "start": 191,
            "end": 215
          }
        ],
        "start": 185,
        "end": 217
      },
      "expression": false,
      "start": 162,
      "end": 217
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 251
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 255,
                "end": 259
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 260,
                    "end": 261
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 263,
                      "end": 265
                    },
                    "start": 262,
                    "end": 266
                  },
                  "start": 260,
                  "end": 266
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 267,
                    "end": 268
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 269,
                    "end": 273
                  },
                  "start": 267,
                  "end": 273
                }
              ],
              "selfClosing": true,
              "start": 254,
              "end": 276
            },
            "children": [],
            "closingElement": null,
            "start": 254,
            "end": 276
          },
          "definite": false,
          "start": 250,
          "end": 276
        }
      ],
      "declare": false,
      "start": 246,
      "end": 277
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
            "name": "k0",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 293,
                "end": 297
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 298,
                    "end": 299
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 301,
                      "end": 303
                    },
                    "start": 300,
                    "end": 304
                  },
                  "start": 298,
                  "end": 304
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 305,
                    "end": 306
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 307,
                    "end": 311
                  },
                  "start": 305,
                  "end": 311
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 312,
                    "end": 320
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Random",
                    "raw": "\"Random\"",
                    "start": 321,
                    "end": 329
                  },
                  "start": 312,
                  "end": 329
                }
              ],
              "selfClosing": false,
              "start": 292,
              "end": 331
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 331,
                "end": 354
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 356,
                "end": 360
              },
              "start": 354,
              "end": 361
            },
            "start": 292,
            "end": 361
          },
          "definite": false,
          "start": 283,
          "end": 361
        }
      ],
      "declare": false,
      "start": 279,
      "end": 362
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 369
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
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 387
                },
                "value": {
                  "type": "Literal",
                  "value": "Random",
                  "raw": "\"Random\"",
                  "start": 388,
                  "end": 396
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 379,
                "end": 396
              }
            ],
            "start": 372,
            "end": 398
          },
          "definite": false,
          "start": 368,
          "end": 398
        }
      ],
      "declare": false,
      "start": 364,
      "end": 398
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 405
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 413,
                "end": 417
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 418,
                    "end": 419
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 421,
                      "end": 423
                    },
                    "start": 420,
                    "end": 424
                  },
                  "start": 418,
                  "end": 424
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 425,
                    "end": 426
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 427,
                    "end": 431
                  },
                  "start": 425,
                  "end": 431
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "start": 432,
                  "end": 438
                }
              ],
              "selfClosing": false,
              "start": 412,
              "end": 440
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 440,
                "end": 463
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 465,
                "end": 469
              },
              "start": 463,
              "end": 470
            },
            "start": 412,
            "end": 470
          },
          "definite": false,
          "start": 403,
          "end": 470
        }
      ],
      "declare": false,
      "start": 399,
      "end": 471
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
            "name": "k2",
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
                "start": 512,
                "end": 516
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 517,
                    "end": 518
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 520,
                      "end": 522
                    },
                    "start": 519,
                    "end": 523
                  },
                  "start": 517,
                  "end": 523
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 524,
                    "end": 525
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 526,
                    "end": 530
                  },
                  "start": 524,
                  "end": 530
                }
              ],
              "selfClosing": false,
              "start": 511,
              "end": 531
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 531,
                "end": 540
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 541,
                    "end": 544
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 540,
                  "end": 545
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 545,
                    "end": 553
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 555,
                    "end": 558
                  },
                  "start": 553,
                  "end": 559
                },
                "start": 540,
                "end": 559
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 559,
                "end": 568
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 576,
                          "end": 582
                        },
                        "start": 574,
                        "end": 582
                      },
                      "start": 570,
                      "end": 582
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
                        "start": 588,
                        "end": 591
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 587,
                      "end": 592
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": " My name ",
                        "raw": " My name ",
                        "start": 592,
                        "end": 601
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 606
                        },
                        "start": 601,
                        "end": 607
                      },
                      {
                        "type": "JSXText",
                        "value": " ",
                        "raw": " ",
                        "start": 607,
                        "end": 608
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 610,
                        "end": 613
                      },
                      "start": 608,
                      "end": 614
                    },
                    "start": 587,
                    "end": 614
                  },
                  "id": null,
                  "generator": false,
                  "start": 569,
                  "end": 614
                },
                "start": 568,
                "end": 615
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 615,
                "end": 620
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 622,
                "end": 626
              },
              "start": 620,
              "end": 627
            },
            "start": 511,
            "end": 627
          },
          "definite": false,
          "start": 502,
          "end": 627
        }
      ],
      "declare": false,
      "start": 498,
      "end": 628
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 636
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 644,
                "end": 648
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 649,
                    "end": 650
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 652,
                      "end": 654
                    },
                    "start": 651,
                    "end": 655
                  },
                  "start": 649,
                  "end": 655
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 656,
                    "end": 657
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 658,
                    "end": 662
                  },
                  "start": 656,
                  "end": 662
                }
              ],
              "selfClosing": false,
              "start": 643,
              "end": 663
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 663,
                "end": 672
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 673,
                    "end": 676
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 672,
                  "end": 677
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 677,
                    "end": 685
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 687,
                    "end": 690
                  },
                  "start": 685,
                  "end": 691
                },
                "start": 672,
                "end": 691
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 691,
                "end": 700
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 1000000,
                  "raw": "1000000",
                  "start": 701,
                  "end": 708
                },
                "start": 700,
                "end": 709
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 709,
                "end": 714
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 716,
                "end": 720
              },
              "start": 714,
              "end": 721
            },
            "start": 643,
            "end": 721
          },
          "definite": false,
          "start": 634,
          "end": 721
        }
      ],
      "declare": false,
      "start": 630,
      "end": 722
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 728,
            "end": 730
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 738,
                "end": 742
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 743,
                    "end": 744
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 746,
                      "end": 748
                    },
                    "start": 745,
                    "end": 749
                  },
                  "start": 743,
                  "end": 749
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 750,
                    "end": 751
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 752,
                    "end": 756
                  },
                  "start": 750,
                  "end": 756
                }
              ],
              "selfClosing": false,
              "start": 737,
              "end": 758
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 758,
                "end": 767
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 768,
                    "end": 771
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 767,
                  "end": 772
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 772,
                    "end": 780
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 782,
                    "end": 785
                  },
                  "start": 780,
                  "end": 786
                },
                "start": 767,
                "end": 786
              },
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 786,
                "end": 809
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 811,
                "end": 815
              },
              "start": 809,
              "end": 816
            },
            "start": 737,
            "end": 816
          },
          "definite": false,
          "start": 728,
          "end": 816
        }
      ],
      "declare": false,
      "start": 724,
      "end": 817
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
            "name": "k5",
            "optional": false,
            "typeAnnotation": null,
            "start": 823,
            "end": 825
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 833,
                "end": 837
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 838,
                    "end": 839
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 841,
                      "end": 843
                    },
                    "start": 840,
                    "end": 844
                  },
                  "start": 838,
                  "end": 844
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 845,
                    "end": 846
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 847,
                    "end": 851
                  },
                  "start": 845,
                  "end": 851
                }
              ],
              "selfClosing": false,
              "start": 832,
              "end": 853
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 853,
                "end": 862
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 863,
                    "end": 866
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 862,
                  "end": 867
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 867,
                    "end": 875
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 877,
                    "end": 880
                  },
                  "start": 875,
                  "end": 881
                },
                "start": 862,
                "end": 881
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 881,
                "end": 890
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 891,
                    "end": 894
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 890,
                  "end": 895
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " My Div ",
                    "raw": " My Div ",
                    "start": 895,
                    "end": 903
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 905,
                    "end": 908
                  },
                  "start": 903,
                  "end": 909
                },
                "start": 890,
                "end": 909
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 909,
                "end": 914
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 916,
                "end": 920
              },
              "start": 914,
              "end": 921
            },
            "start": 832,
            "end": 921
          },
          "definite": false,
          "start": 823,
          "end": 921
        }
      ],
      "declare": false,
      "start": 819,
      "end": 922
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 922
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
    "value": "Prop",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 209,
    "end": 210
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 255,
    "end": 259
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 269,
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
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 293,
    "end": 297
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 307,
    "end": 311
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 312,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "JSXText",
    "value": "\"Random\"",
    "start": 321,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "JSXText",
    "value": "\n        hi hi hi!\n    ",
    "start": 331,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 355,
    "end": 356
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 379,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "String",
    "value": "\"Random\"",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 413,
    "end": 417
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "JSXText",
    "value": "\n        hi hi hi!\n    ",
    "start": 440,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 464,
    "end": 465
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "k2",
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
    "start": 511,
    "end": 512
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 512,
    "end": 516
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Numeric",
    "value": "10",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 531,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 545,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 554,
    "end": 555
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 559,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 591,
    "end": 592
  },
  {
    "type": "JSXText",
    "value": " My name ",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 609,
    "end": 610
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 615,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 621,
    "end": 622
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 644,
    "end": 648
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Numeric",
    "value": "10",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 663,
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
    "value": "div",
    "start": 673,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 676,
    "end": 677
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 677,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 686,
    "end": 687
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 691,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "1000000",
    "start": 701,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 709,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 715,
    "end": 716
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 724,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 728,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 738,
    "end": 742
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 757,
    "end": 758
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 758,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 771,
    "end": 772
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 772,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 781,
    "end": 782
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786
  },
  {
    "type": "JSXText",
    "value": "\n        hi hi hi!\n    ",
    "start": 786,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 810,
    "end": 811
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 819,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 823,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 833,
    "end": 837
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 840,
    "end": 841
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 852,
    "end": 853
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 853,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 867,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 876,
    "end": 877
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 880,
    "end": 881
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 881,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 890,
    "end": 891
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "JSXText",
    "value": " My Div ",
    "start": 895,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 904,
    "end": 905
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 908,
    "end": 909
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 909,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 915,
    "end": 916
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 916,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  }
]
```
