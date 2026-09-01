__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DropdownMenu",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 170
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 194
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
                    "name": "icon",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 205
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    },
                    "start": 205,
                    "end": 213
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 201,
                  "end": 214
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "label",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    },
                    "start": 224,
                    "end": 232
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 233
                }
              ],
              "start": 195,
              "end": 237
            },
            "declare": false,
            "start": 175,
            "end": 237
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsWithChildren",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 267
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 285
                },
                "typeArguments": null,
                "start": 276,
                "end": 285
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 300
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                                "name": "onClose",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 310,
                                "end": 317
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 325,
                                      "end": 329
                                    },
                                    "start": 322,
                                    "end": 329
                                  },
                                  "start": 319,
                                  "end": 329
                                },
                                "start": 317,
                                "end": 329
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 310,
                              "end": 329
                            }
                          ],
                          "start": 308,
                          "end": 331
                        },
                        "start": 306,
                        "end": 331
                      },
                      "start": 301,
                      "end": 331
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
                          "start": 334,
                          "end": 337
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 345
                        },
                        "start": 334,
                        "end": 345
                      },
                      "typeArguments": null,
                      "start": 334,
                      "end": 345
                    },
                    "start": 332,
                    "end": 345
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 292,
                  "end": 346
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "controls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 362,
                          "end": 367
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 370,
                          "end": 379
                        }
                      ],
                      "start": 362,
                      "end": 379
                    },
                    "start": 360,
                    "end": 379
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 351,
                  "end": 380
                }
              ],
              "start": 286,
              "end": 384
            },
            "declare": false,
            "start": 240,
            "end": 384
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsWithControls",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 414
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 432
                },
                "typeArguments": null,
                "start": 423,
                "end": 432
              }
            ],
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
                    "name": "controls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Control",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 456
                        },
                        "typeArguments": null,
                        "start": 449,
                        "end": 456
                      },
                      "start": 449,
                      "end": 458
                    },
                    "start": 447,
                    "end": 458
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 439,
                  "end": 459
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 472
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 475,
                          "end": 480
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 483,
                          "end": 492
                        }
                      ],
                      "start": 475,
                      "end": 492
                    },
                    "start": 473,
                    "end": 492
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 464,
                  "end": 493
                }
              ],
              "start": 433,
              "end": 497
            },
            "declare": false,
            "start": 387,
            "end": 497
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Control",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 517
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
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 529
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 531,
                      "end": 537
                    },
                    "start": 529,
                    "end": 537
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 524,
                  "end": 538
                }
              ],
              "start": 518,
              "end": 542
            },
            "declare": false,
            "start": 500,
            "end": 542
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 555
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
                    "name": "PropsWithChildren",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 575
                  },
                  "typeArguments": null,
                  "start": 558,
                  "end": 575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropsWithControls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 595
                  },
                  "typeArguments": null,
                  "start": 578,
                  "end": 595
                }
              ],
              "start": 558,
              "end": 595
            },
            "declare": false,
            "start": 545,
            "end": 596
          }
        ],
        "start": 171,
        "end": 598
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 140,
      "end": 598
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
            "name": "DropdownMenu",
            "optional": false,
            "typeAnnotation": {
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
                    "start": 627,
                    "end": 632
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 646
                  },
                  "start": 627,
                  "end": 646
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DropdownMenu",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 647,
                          "end": 659
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 660,
                          "end": 665
                        },
                        "start": 647,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 647,
                      "end": 665
                    }
                  ],
                  "start": 646,
                  "end": 666
                },
                "start": 627,
                "end": 666
              },
              "start": 625,
              "end": 666
            },
            "start": 613,
            "end": 666
          },
          "init": null,
          "definite": false,
          "start": 613,
          "end": 666
        }
      ],
      "declare": true,
      "start": 599,
      "end": 667
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "DropdownMenu",
            "start": 670,
            "end": 682
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "icon",
                "start": 683,
                "end": 687
              },
              "value": {
                "type": "Literal",
                "value": "move",
                "raw": "\"move\"",
                "start": 688,
                "end": 694
              },
              "start": 683,
              "end": 694
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "label",
                "start": 695,
                "end": 700
              },
              "value": {
                "type": "Literal",
                "value": "Select a direction",
                "raw": "\"Select a direction\"",
                "start": 701,
                "end": 721
              },
              "start": 695,
              "end": 721
            }
          ],
          "selfClosing": false,
          "start": 669,
          "end": 722
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n  ",
            "raw": "\n  ",
            "start": 722,
            "end": 725
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onClose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 736
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onClose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 736
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 729,
                      "end": 736
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 727,
                  "end": 738
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
                    "start": 750,
                    "end": 753
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 749,
                  "end": 754
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "\n      ",
                    "raw": "\n      ",
                    "start": 754,
                    "end": 761
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 762,
                        "end": 768
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "onClick",
                            "start": 769,
                            "end": 776
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onClose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 778,
                              "end": 785
                            },
                            "start": 777,
                            "end": 786
                          },
                          "start": 769,
                          "end": 786
                        }
                      ],
                      "selfClosing": false,
                      "start": 761,
                      "end": 787
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "Click me",
                        "raw": "Click me",
                        "start": 787,
                        "end": 795
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 797,
                        "end": 803
                      },
                      "start": 795,
                      "end": 804
                    },
                    "start": 761,
                    "end": 804
                  },
                  {
                    "type": "JSXText",
                    "value": "\n    ",
                    "raw": "\n    ",
                    "start": 804,
                    "end": 809
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 811,
                    "end": 814
                  },
                  "start": 809,
                  "end": 815
                },
                "start": 749,
                "end": 815
              },
              "id": null,
              "generator": false,
              "start": 726,
              "end": 819
            },
            "start": 725,
            "end": 820
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 820,
            "end": 821
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "DropdownMenu",
            "start": 823,
            "end": 835
          },
          "start": 821,
          "end": 836
        },
        "start": 669,
        "end": 836
      },
      "directive": null,
      "start": 669,
      "end": 837
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "DropdownMenu",
            "start": 840,
            "end": 852
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "icon",
                "start": 855,
                "end": 859
              },
              "value": {
                "type": "Literal",
                "value": "move",
                "raw": "\"move\"",
                "start": 860,
                "end": 866
              },
              "start": 855,
              "end": 866
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "label",
                "start": 869,
                "end": 874
              },
              "value": {
                "type": "Literal",
                "value": "Select a direction",
                "raw": "\"Select a direction\"",
                "start": 875,
                "end": 895
              },
              "start": 869,
              "end": 895
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "children",
                "start": 898,
                "end": 906
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
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onClose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 911,
                            "end": 918
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onClose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 911,
                            "end": 918
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 911,
                          "end": 918
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 909,
                      "end": 920
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
                        "start": 932,
                        "end": 935
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 931,
                      "end": 936
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "\n      ",
                        "raw": "\n      ",
                        "start": 936,
                        "end": 943
                      },
                      {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "button",
                            "start": 944,
                            "end": 950
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "onClick",
                                "start": 951,
                                "end": 958
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "onClose",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 960,
                                  "end": 967
                                },
                                "start": 959,
                                "end": 968
                              },
                              "start": 951,
                              "end": 968
                            }
                          ],
                          "selfClosing": false,
                          "start": 943,
                          "end": 969
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "Click me",
                            "raw": "Click me",
                            "start": 969,
                            "end": 977
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "button",
                            "start": 979,
                            "end": 985
                          },
                          "start": 977,
                          "end": 986
                        },
                        "start": 943,
                        "end": 986
                      },
                      {
                        "type": "JSXText",
                        "value": "\n    ",
                        "raw": "\n    ",
                        "start": 986,
                        "end": 991
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 993,
                        "end": 996
                      },
                      "start": 991,
                      "end": 997
                    },
                    "start": 931,
                    "end": 997
                  },
                  "id": null,
                  "generator": false,
                  "start": 908,
                  "end": 1001
                },
                "start": 907,
                "end": 1002
              },
              "start": 898,
              "end": 1002
            }
          ],
          "selfClosing": true,
          "start": 839,
          "end": 1005
        },
        "children": [],
        "closingElement": null,
        "start": 839,
        "end": 1005
      },
      "directive": null,
      "start": 839,
      "end": 1006
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 1006
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "DropdownMenu",
    "start": 158,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 175,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 185,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "icon",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 240,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "PropsWithChildren",
    "start": 250,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 276,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 292,
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
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "onClose",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 322,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "controls",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 370,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 387,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "PropsWithControls",
    "start": 397,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 415,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 423,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "controls",
    "start": 439,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 483,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 500,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 510,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 545,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "PropsWithChildren",
    "start": 558,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "PropsWithControls",
    "start": 578,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 599,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "DropdownMenu",
    "start": 613,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 633,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "DropdownMenu",
    "start": 647,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "JSXIdentifier",
    "value": "DropdownMenu",
    "start": 670,
    "end": 682
  },
  {
    "type": "JSXIdentifier",
    "value": "icon",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688
  },
  {
    "type": "JSXText",
    "value": "\"move\"",
    "start": 688,
    "end": 694
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "JSXText",
    "value": "\"Select a direction\"",
    "start": 701,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 721,
    "end": 722
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "onClose",
    "start": 729,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 749,
    "end": 750
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 761,
    "end": 762
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 762,
    "end": 768
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 769,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "onClose",
    "start": 778,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 786,
    "end": 787
  },
  {
    "type": "JSXText",
    "value": "Click me",
    "start": 787,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 796,
    "end": 797
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 803,
    "end": 804
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 804,
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
    "value": "div",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 822,
    "end": 823
  },
  {
    "type": "JSXIdentifier",
    "value": "DropdownMenu",
    "start": 823,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840
  },
  {
    "type": "JSXIdentifier",
    "value": "DropdownMenu",
    "start": 840,
    "end": 852
  },
  {
    "type": "JSXIdentifier",
    "value": "icon",
    "start": 855,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "JSXText",
    "value": "\"move\"",
    "start": 860,
    "end": 866
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 869,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875
  },
  {
    "type": "JSXText",
    "value": "\"Select a direction\"",
    "start": 875,
    "end": 895
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 898,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "onClose",
    "start": 911,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 922,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 931,
    "end": 932
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 932,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 936,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 943,
    "end": 944
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 944,
    "end": 950
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 951,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "onClose",
    "start": 960,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 968,
    "end": 969
  },
  {
    "type": "JSXText",
    "value": "Click me",
    "start": 969,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 978,
    "end": 979
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 985,
    "end": 986
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 986,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 992,
    "end": 993
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 993,
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
    "value": ")",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  }
]
```
