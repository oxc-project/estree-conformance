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
                "start": 431,
                "end": 435
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 436,
                    "end": 437
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 439,
                      "end": 441
                    },
                    "start": 438,
                    "end": 442
                  },
                  "start": 436,
                  "end": 442
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 443,
                    "end": 444
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 445,
                    "end": 449
                  },
                  "start": 443,
                  "end": 449
                }
              ],
              "selfClosing": false,
              "start": 430,
              "end": 450
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 450,
                  "end": 452
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 452,
                  "end": 455
                },
                "start": 450,
                "end": 455
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 456,
                    "end": 462
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 455,
                  "end": 465
                },
                "children": [],
                "closingElement": null,
                "start": 455,
                "end": 465
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 466,
                    "end": 479
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 465,
                  "end": 482
                },
                "children": [],
                "closingElement": null,
                "start": 465,
                "end": 482
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 484,
                "end": 488
              },
              "start": 482,
              "end": 489
            },
            "start": 430,
            "end": 489
          },
          "definite": false,
          "start": 425,
          "end": 489
        }
      ],
      "declare": false,
      "start": 421,
      "end": 490
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
            "start": 495,
            "end": 497
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 501,
                "end": 505
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 506,
                    "end": 507
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 509,
                      "end": 511
                    },
                    "start": 508,
                    "end": 512
                  },
                  "start": 506,
                  "end": 512
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 513,
                    "end": 514
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 515,
                    "end": 519
                  },
                  "start": 513,
                  "end": 519
                }
              ],
              "selfClosing": false,
              "start": 500,
              "end": 520
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 520,
                  "end": 522
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "start": 523,
                        "end": 529
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 522,
                      "end": 532
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 522,
                    "end": 532
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 532,
                  "end": 535
                },
                "start": 520,
                "end": 535
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 536,
                    "end": 549
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 535,
                  "end": 552
                },
                "children": [],
                "closingElement": null,
                "start": 535,
                "end": 552
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 554,
                "end": 558
              },
              "start": 552,
              "end": 559
            },
            "start": 500,
            "end": 559
          },
          "definite": false,
          "start": 495,
          "end": 559
        }
      ],
      "declare": false,
      "start": 491,
      "end": 560
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
            "start": 565,
            "end": 567
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 571,
                "end": 575
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 576,
                    "end": 577
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 579,
                      "end": 581
                    },
                    "start": 578,
                    "end": 582
                  },
                  "start": 576,
                  "end": 582
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 583,
                    "end": 584
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 585,
                    "end": 589
                  },
                  "start": 583,
                  "end": 589
                }
              ],
              "selfClosing": false,
              "start": 570,
              "end": 590
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 590,
                  "end": 592
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "start": 593,
                        "end": 599
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 592,
                      "end": 602
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 592,
                    "end": 602
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherButton",
                        "start": 603,
                        "end": 616
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 602,
                      "end": 619
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 602,
                    "end": 619
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 619,
                  "end": 622
                },
                "start": 590,
                "end": 622
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 624,
                "end": 628
              },
              "start": 622,
              "end": 629
            },
            "start": 570,
            "end": 629
          },
          "definite": false,
          "start": 565,
          "end": 629
        }
      ],
      "declare": false,
      "start": 561,
      "end": 630
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SingleChildProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 657
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
              "start": 664,
              "end": 665
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 667,
                "end": 673
              },
              "start": 665,
              "end": 673
            },
            "accessibility": null,
            "static": false,
            "start": 664,
            "end": 674
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
              "start": 679,
              "end": 680
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 682,
                "end": 688
              },
              "start": 680,
              "end": 688
            },
            "accessibility": null,
            "static": false,
            "start": 679,
            "end": 689
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
              "start": 694,
              "end": 702
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
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 707
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 715
                  },
                  "start": 704,
                  "end": 715
                },
                "typeArguments": null,
                "start": 704,
                "end": 715
              },
              "start": 702,
              "end": 715
            },
            "accessibility": null,
            "static": false,
            "start": 694,
            "end": 716
          }
        ],
        "start": 658,
        "end": 718
      },
      "declare": false,
      "start": 632,
      "end": 718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SingleChildComp",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 744
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
                "name": "SingleChildProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 763
              },
              "typeArguments": null,
              "start": 748,
              "end": 763
            },
            "start": 746,
            "end": 763
          },
          "start": 745,
          "end": 763
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
                  "start": 779,
                  "end": 782
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 778,
                "end": 783
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
                      "start": 784,
                      "end": 785
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 786,
                      "end": 787
                    },
                    "optional": false,
                    "computed": false,
                    "start": 784,
                    "end": 787
                  },
                  "start": 783,
                  "end": 788
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 790,
                  "end": 793
                },
                "start": 788,
                "end": 794
              },
              "start": 778,
              "end": 794
            },
            "start": 771,
            "end": 795
          }
        ],
        "start": 765,
        "end": 797
      },
      "expression": false,
      "start": 720,
      "end": 797
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
            "start": 809,
            "end": 811
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 815,
                "end": 830
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 831,
                    "end": 832
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 834,
                      "end": 836
                    },
                    "start": 833,
                    "end": 837
                  },
                  "start": 831,
                  "end": 837
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 838,
                    "end": 839
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 840,
                    "end": 844
                  },
                  "start": 838,
                  "end": 844
                }
              ],
              "selfClosing": false,
              "start": 814,
              "end": 845
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 845,
                  "end": 847
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "start": 848,
                        "end": 854
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 847,
                      "end": 857
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 847,
                    "end": 857
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherButton",
                        "start": 858,
                        "end": 871
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 857,
                      "end": 874
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 857,
                    "end": 874
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 874,
                  "end": 877
                },
                "start": 845,
                "end": 877
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 879,
                "end": 894
              },
              "start": 877,
              "end": 895
            },
            "start": 814,
            "end": 895
          },
          "definite": false,
          "start": 809,
          "end": 895
        }
      ],
      "declare": false,
      "start": 805,
      "end": 896
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
            "start": 911,
            "end": 913
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 917,
                "end": 932
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 933,
                    "end": 934
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 936,
                      "end": 938
                    },
                    "start": 935,
                    "end": 939
                  },
                  "start": 933,
                  "end": 939
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 940,
                    "end": 941
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 942,
                    "end": 946
                  },
                  "start": 940,
                  "end": 946
                }
              ],
              "selfClosing": false,
              "start": 916,
              "end": 947
            },
            "children": [
              {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 947,
                  "end": 949
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 949,
                  "end": 952
                },
                "start": 947,
                "end": 952
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 953,
                    "end": 959
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 952,
                  "end": 962
                },
                "children": [],
                "closingElement": null,
                "start": 952,
                "end": 962
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "start": 963,
                    "end": 976
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 962,
                  "end": 979
                },
                "children": [],
                "closingElement": null,
                "start": 962,
                "end": 979
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "start": 981,
                "end": 996
              },
              "start": 979,
              "end": 997
            },
            "start": 916,
            "end": 997
          },
          "definite": false,
          "start": 911,
          "end": 997
        }
      ],
      "declare": false,
      "start": 907,
      "end": 998
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 998
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
    "start": 430,
    "end": 431
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 431,
    "end": 435
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 455,
    "end": 456
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 465,
    "end": 466
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 466,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 483,
    "end": 484
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 501,
    "end": 505
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 536,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "Comp",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 571,
    "end": 575
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 585,
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
    "value": ">",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 603,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 623,
    "end": 624
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 632,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "SingleChildProp",
    "start": 642,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 694,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 708,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "SingleChildComp",
    "start": 729,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "SingleChildProp",
    "start": 748,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 778,
    "end": 779
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 789,
    "end": 790
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 805,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 809,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 815,
    "end": 830
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
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
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 848,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 857,
    "end": 858
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 858,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 878,
    "end": 879
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 879,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 907,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 917,
    "end": 932
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 942,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 952,
    "end": 953
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 953,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherButton",
    "start": 963,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 980,
    "end": 981
  },
  {
    "type": "JSXIdentifier",
    "value": "SingleChildComp",
    "start": 981,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  }
]
```
