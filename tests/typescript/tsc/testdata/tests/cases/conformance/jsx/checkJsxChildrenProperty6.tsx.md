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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 141
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 149
                      },
                      "start": 138,
                      "end": 149
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 149
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 155
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 163
                        },
                        "start": 152,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 163
                    },
                    "start": 152,
                    "end": 165
                  }
                ],
                "start": 138,
                "end": 165
              },
              "start": 136,
              "end": 165
            },
            "accessibility": null,
            "static": false,
            "start": 128,
            "end": 166
          }
        ],
        "start": 92,
        "end": 168
      },
      "declare": false,
      "start": 77,
      "end": 168
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
        "start": 176,
        "end": 182
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
          "start": 191,
          "end": 196
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 206
        },
        "optional": false,
        "computed": false,
        "start": 191,
        "end": 206
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 207,
            "end": 210
          },
          {
            "type": "TSAnyKeyword",
            "start": 212,
            "end": 215
          }
        ],
        "start": 206,
        "end": 216
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
              "start": 223,
              "end": 229
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
                          "start": 251,
                          "end": 254
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 250,
                        "end": 255
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "My Button",
                          "raw": "My Button",
                          "start": 255,
                          "end": 264
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 266,
                          "end": 269
                        },
                        "start": 264,
                        "end": 270
                      },
                      "start": 250,
                      "end": 270
                    },
                    "start": 242,
                    "end": 271
                  }
                ],
                "start": 232,
                "end": 277
              },
              "expression": false,
              "start": 229,
              "end": 277
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 223,
            "end": 277
          }
        ],
        "start": 217,
        "end": 279
      },
      "abstract": false,
      "declare": false,
      "start": 170,
      "end": 279
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 303
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
              "type": "TSAnyKeyword",
              "start": 307,
              "end": 310
            },
            "start": 305,
            "end": 310
          },
          "start": 304,
          "end": 310
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
                  "name": "h1",
                  "start": 326,
                  "end": 328
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 325,
                "end": 329
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Just Another Button",
                  "raw": "Just Another Button",
                  "start": 329,
                  "end": 348
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 350,
                  "end": 352
                },
                "start": 348,
                "end": 353
              },
              "start": 325,
              "end": 353
            },
            "start": 318,
            "end": 354
          }
        ],
        "start": 312,
        "end": 356
      },
      "expression": false,
      "start": 281,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 371
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
                "start": 375,
                "end": 379
              },
              "typeArguments": null,
              "start": 375,
              "end": 379
            },
            "start": 373,
            "end": 379
          },
          "start": 372,
          "end": 379
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
                  "start": 395,
                  "end": 398
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 394,
                "end": 399
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
                      "start": 400,
                      "end": 401
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 400,
                    "end": 403
                  },
                  "start": 399,
                  "end": 404
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 406,
                  "end": 409
                },
                "start": 404,
                "end": 410
              },
              "start": 394,
              "end": 410
            },
            "start": 387,
            "end": 411
          }
        ],
        "start": 381,
        "end": 413
      },
      "expression": false,
      "start": 358,
      "end": 413
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
            "start": 425,
            "end": 427
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 435,
                "end": 439
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 440,
                    "end": 441
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 443,
                      "end": 445
                    },
                    "start": 442,
                    "end": 446
                  },
                  "start": 440,
                  "end": 446
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 447,
                    "end": 448
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 449,
                    "end": 453
                  },
                  "start": 447,
                  "end": 453
                }
              ],
              "selfClosing": false,
              "start": 434,
              "end": 454
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 454,
                "end": 463
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 464,
                    "end": 470
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 463,
                  "end": 473
                },
                "children": [],
                "closingElement": null,
                "start": 463,
                "end": 473
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 473,
                "end": 482
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 483,
                    "end": 496
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 482,
                  "end": 499
                },
                "children": [],
                "closingElement": null,
                "start": 482,
                "end": 499
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 499,
                "end": 504
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 506,
                "end": 510
              },
              "start": 504,
              "end": 511
            },
            "start": 434,
            "end": 511
          },
          "definite": false,
          "start": 425,
          "end": 511
        }
      ],
      "declare": false,
      "start": 421,
      "end": 512
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
            "start": 518,
            "end": 520
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 528,
                "end": 532
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 533,
                    "end": 534
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 536,
                      "end": 538
                    },
                    "start": 535,
                    "end": 539
                  },
                  "start": 533,
                  "end": 539
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 540,
                    "end": 541
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 542,
                    "end": 546
                  },
                  "start": 540,
                  "end": 546
                }
              ],
              "selfClosing": false,
              "start": 527,
              "end": 547
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n     \n    \n    \n        ",
                "raw": "\n     \n    \n    \n        ",
                "start": 547,
                "end": 572
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 573,
                    "end": 579
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 572,
                  "end": 582
                },
                "children": [],
                "closingElement": null,
                "start": 572,
                "end": 582
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 582,
                "end": 591
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 592,
                    "end": 605
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 591,
                  "end": 608
                },
                "children": [],
                "closingElement": null,
                "start": 591,
                "end": 608
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 608,
                "end": 613
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 615,
                "end": 619
              },
              "start": 613,
              "end": 620
            },
            "start": 527,
            "end": 620
          },
          "definite": false,
          "start": 518,
          "end": 620
        }
      ],
      "declare": false,
      "start": 514,
      "end": 621
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
            "start": 627,
            "end": 629
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 633,
                "end": 637
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 638,
                    "end": 639
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 641,
                      "end": 643
                    },
                    "start": 640,
                    "end": 644
                  },
                  "start": 638,
                  "end": 644
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 645,
                    "end": 646
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 647,
                    "end": 651
                  },
                  "start": 645,
                  "end": 651
                }
              ],
              "selfClosing": false,
              "start": 632,
              "end": 652
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 653,
                    "end": 659
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 652,
                  "end": 662
                },
                "children": [],
                "closingElement": null,
                "start": 652,
                "end": 662
              },
              {
                "type": "JSXText",
                "value": "  \n",
                "raw": "  \n",
                "start": 662,
                "end": 665
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 666,
                    "end": 679
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 665,
                  "end": 682
                },
                "children": [],
                "closingElement": null,
                "start": 665,
                "end": 682
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 682,
                "end": 683
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 685,
                "end": 689
              },
              "start": 683,
              "end": 690
            },
            "start": 632,
            "end": 690
          },
          "definite": false,
          "start": 627,
          "end": 690
        }
      ],
      "declare": false,
      "start": 623,
      "end": 691
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
            "start": 697,
            "end": 699
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 703,
                "end": 707
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 708,
                    "end": 709
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 711,
                      "end": 713
                    },
                    "start": 710,
                    "end": 714
                  },
                  "start": 708,
                  "end": 714
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 715,
                    "end": 716
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 717,
                    "end": 721
                  },
                  "start": 715,
                  "end": 721
                }
              ],
              "selfClosing": false,
              "start": 702,
              "end": 722
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 723,
                    "end": 729
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 722,
                  "end": 732
                },
                "children": [],
                "closingElement": null,
                "start": 722,
                "end": 732
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 734,
                "end": 738
              },
              "start": 732,
              "end": 739
            },
            "start": 702,
            "end": 739
          },
          "definite": false,
          "start": 697,
          "end": 739
        }
      ],
      "declare": false,
      "start": 693,
      "end": 740
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 740
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
    "value": "JSX",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 176,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "JSXText",
    "value": "My Button",
    "start": 255,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "AnotherButton",
    "start": 290,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "JSXText",
    "value": "Just Another Button",
    "start": 329,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 349,
    "end": 350
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 405,
    "end": 406
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 421,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 435,
    "end": 439
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 454,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 473,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 482,
    "end": 483
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 483,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "/",
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
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 528,
    "end": 532
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547
  },
  {
    "type": "JSXText",
    "value": "\n     \n    \n    \n        ",
    "start": 547,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 582,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 592,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 607,
    "end": 608
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 614,
    "end": 615
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 633,
    "end": 637
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "JSXText",
    "value": "  \n",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 666,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 684,
    "end": 685
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 703,
    "end": 707
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 708,
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
    "type": "Numeric",
    "value": "10",
    "start": 711,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 722,
    "end": 723
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 733,
    "end": 734
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  }
]
```
