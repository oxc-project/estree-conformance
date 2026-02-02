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
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 104
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 106,
                "end": 109
              },
              "start": 106,
              "end": 111
            },
            "start": 104,
            "end": 111
          },
          "value": null,
          "start": 97,
          "end": 111
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 114,
          "end": 118
        },
        "start": 112,
        "end": 118
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 119
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 152
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
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 167
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 170,
                  "end": 176
                },
                "start": 168,
                "end": 176
              },
              "accessibility": null,
              "static": false,
              "start": 159,
              "end": 177
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 191
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 194,
                  "end": 200
                },
                "start": 192,
                "end": 200
              },
              "accessibility": null,
              "static": false,
              "start": 182,
              "end": 201
            }
          ],
          "start": 153,
          "end": 203
        },
        "declare": false,
        "start": 128,
        "end": 203
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 121,
      "end": 203
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 233
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 256
            },
            "typeArguments": null,
            "start": 242,
            "end": 256
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
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 270
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
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "left",
                                "raw": "\"left\"",
                                "start": 276,
                                "end": 282
                              },
                              "start": 276,
                              "end": 282
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "right",
                                "raw": "\"right\"",
                                "start": 285,
                                "end": 292
                              },
                              "start": 285,
                              "end": 292
                            }
                          ],
                          "start": 276,
                          "end": 292
                        },
                        "start": 274,
                        "end": 292
                      },
                      "start": 273,
                      "end": 292
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 297,
                      "end": 301
                    },
                    "start": 294,
                    "end": 301
                  },
                  "start": 272,
                  "end": 301
                },
                "start": 270,
                "end": 301
              },
              "accessibility": null,
              "static": false,
              "start": 263,
              "end": 302
            }
          ],
          "start": 257,
          "end": 304
        },
        "declare": false,
        "start": 212,
        "end": 304
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 205,
      "end": 304
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 332
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 355
            },
            "typeArguments": null,
            "start": 341,
            "end": 355
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
                "name": "goTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 366
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "home",
                        "raw": "\"home\"",
                        "start": 368,
                        "end": 374
                      },
                      "start": 368,
                      "end": 374
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "contact",
                        "raw": "\"contact\"",
                        "start": 377,
                        "end": 386
                      },
                      "start": 377,
                      "end": 386
                    }
                  ],
                  "start": 368,
                  "end": 386
                },
                "start": 366,
                "end": 386
              },
              "accessibility": null,
              "static": false,
              "start": 362,
              "end": 387
            }
          ],
          "start": 356,
          "end": 389
        },
        "declare": false,
        "start": 313,
        "end": 389
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 306,
      "end": 389
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 417
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 442
                },
                "typeArguments": null,
                "start": 431,
                "end": 442
              },
              "start": 429,
              "end": 442
            },
            "start": 418,
            "end": 442
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
                "start": 445,
                "end": 448
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 456
              },
              "start": 445,
              "end": 456
            },
            "typeArguments": null,
            "start": 445,
            "end": 456
          },
          "start": 443,
          "end": 456
        },
        "body": null,
        "expression": false,
        "start": 398,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 391,
      "end": 457
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 484
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 505
                },
                "typeArguments": null,
                "start": 496,
                "end": 505
              },
              "start": 494,
              "end": 505
            },
            "start": 485,
            "end": 505
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
                "start": 508,
                "end": 511
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 519
              },
              "start": 508,
              "end": 519
            },
            "typeArguments": null,
            "start": 508,
            "end": 519
          },
          "start": 506,
          "end": 519
        },
        "body": null,
        "expression": false,
        "start": 465,
        "end": 520
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 458,
      "end": 520
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 547
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                      "name": "ButtonProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 566
                    },
                    "typeArguments": null,
                    "start": 555,
                    "end": 566
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 569,
                      "end": 578
                    },
                    "typeArguments": null,
                    "start": 569,
                    "end": 578
                  }
                ],
                "start": 555,
                "end": 578
              },
              "start": 553,
              "end": 578
            },
            "start": 548,
            "end": 578
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
                "start": 581,
                "end": 584
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 592
              },
              "start": 581,
              "end": 592
            },
            "typeArguments": null,
            "start": 581,
            "end": 592
          },
          "start": 579,
          "end": 592
        },
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
                    "name": "linkProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 614
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 622
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 626,
                        "end": 635
                      },
                      "typeArguments": null,
                      "start": 626,
                      "end": 635
                    },
                    "start": 617,
                    "end": 635
                  },
                  "definite": false,
                  "start": 605,
                  "end": 635
                }
              ],
              "declare": false,
              "start": 599,
              "end": 636
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 653
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "goTo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 658
                },
                "optional": false,
                "computed": false,
                "start": 644,
                "end": 658
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 677,
                          "end": 681
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 682,
                          "end": 696
                        },
                        "optional": false,
                        "computed": false,
                        "start": 677,
                        "end": 696
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 697,
                          "end": 702
                        }
                      ],
                      "optional": false,
                      "start": 677,
                      "end": 703
                    },
                    "start": 670,
                    "end": 704
                  }
                ],
                "start": 660,
                "end": 710
              },
              "alternate": null,
              "start": 641,
              "end": 710
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 723,
                    "end": 727
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 723,
                  "end": 744
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 750
                  }
                ],
                "optional": false,
                "start": 723,
                "end": 751
              },
              "start": 716,
              "end": 752
            }
          ],
          "start": 593,
          "end": 754
        },
        "expression": false,
        "start": 528,
        "end": 754
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 521,
      "end": 754
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
            "name": "b0",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 764
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 768,
                "end": 778
              },
              "typeArguments": null,
              "attributes": [
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 784,
                          "end": 791
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 794,
                              "end": 795
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 801,
                                    "end": 804
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 805,
                                      "end": 806
                                    }
                                  ],
                                  "optional": false,
                                  "start": 801,
                                  "end": 807
                                },
                                "directive": null,
                                "start": 801,
                                "end": 807
                              }
                            ],
                            "start": 800,
                            "end": 808
                          },
                          "id": null,
                          "generator": false,
                          "start": 793,
                          "end": 808
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 784,
                        "end": 808
                      }
                    ],
                    "start": 783,
                    "end": 809
                  },
                  "start": 779,
                  "end": 810
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 811,
                    "end": 816
                  },
                  "value": null,
                  "start": 811,
                  "end": 816
                }
              ],
              "selfClosing": true,
              "start": 767,
              "end": 819
            },
            "children": [],
            "closingElement": null,
            "start": 767,
            "end": 819
          },
          "definite": false,
          "start": 762,
          "end": 819
        }
      ],
      "declare": false,
      "start": 756,
      "end": 820
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 861
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 865,
                "end": 875
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 876,
                    "end": 883
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 886,
                          "end": 887
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 891,
                                "end": 894
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "k",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 895,
                                  "end": 896
                                }
                              ],
                              "optional": false,
                              "start": 891,
                              "end": 897
                            },
                            "directive": null,
                            "start": 891,
                            "end": 897
                          }
                        ],
                        "start": 890,
                        "end": 898
                      },
                      "id": null,
                      "generator": false,
                      "start": 885,
                      "end": 898
                    },
                    "start": 884,
                    "end": 899
                  },
                  "start": 876,
                  "end": 899
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 900,
                    "end": 905
                  },
                  "value": null,
                  "start": 900,
                  "end": 905
                }
              ],
              "selfClosing": true,
              "start": 864,
              "end": 908
            },
            "children": [],
            "closingElement": null,
            "start": 864,
            "end": 908
          },
          "definite": false,
          "start": 859,
          "end": 908
        }
      ],
      "declare": false,
      "start": 853,
      "end": 909
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 950
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 954,
                "end": 964
              },
              "typeArguments": null,
              "attributes": [
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
                          "name": "goTo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 970,
                          "end": 974
                        },
                        "value": {
                          "type": "Literal",
                          "value": "home",
                          "raw": "\"home\"",
                          "start": 975,
                          "end": 981
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 970,
                        "end": 981
                      }
                    ],
                    "start": 969,
                    "end": 982
                  },
                  "start": 965,
                  "end": 983
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 984,
                    "end": 989
                  },
                  "value": null,
                  "start": 984,
                  "end": 989
                }
              ],
              "selfClosing": true,
              "start": 953,
              "end": 992
            },
            "children": [],
            "closingElement": null,
            "start": 953,
            "end": 992
          },
          "definite": false,
          "start": 948,
          "end": 992
        }
      ],
      "declare": false,
      "start": 942,
      "end": 993
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1036,
            "end": 1038
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1042,
                "end": 1052
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "goTo",
                    "start": 1053,
                    "end": 1057
                  },
                  "value": {
                    "type": "Literal",
                    "value": "home",
                    "raw": "\"home\"",
                    "start": 1058,
                    "end": 1064
                  },
                  "start": 1053,
                  "end": 1064
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 1065,
                    "end": 1070
                  },
                  "value": null,
                  "start": 1065,
                  "end": 1070
                }
              ],
              "selfClosing": true,
              "start": 1041,
              "end": 1073
            },
            "children": [],
            "closingElement": null,
            "start": 1041,
            "end": 1073
          },
          "definite": false,
          "start": 1036,
          "end": 1073
        }
      ],
      "declare": false,
      "start": 1030,
      "end": 1074
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoOverload",
          "optional": false,
          "typeAnnotation": null,
          "start": 1129,
          "end": 1139
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1164
                },
                "typeArguments": null,
                "start": 1153,
                "end": 1164
              },
              "start": 1151,
              "end": 1164
            },
            "start": 1140,
            "end": 1164
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
                "start": 1167,
                "end": 1170
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1178
              },
              "start": 1167,
              "end": 1178
            },
            "typeArguments": null,
            "start": 1167,
            "end": 1178
          },
          "start": 1165,
          "end": 1178
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1188,
                "end": 1197
              },
              "start": 1181,
              "end": 1197
            }
          ],
          "start": 1179,
          "end": 1199
        },
        "expression": false,
        "start": 1120,
        "end": 1199
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1113,
      "end": 1199
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1206,
            "end": 1208
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "NoOverload",
                "start": 1212,
                "end": 1222
              },
              "typeArguments": null,
              "attributes": [
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1229,
                          "end": 1236
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1239,
                              "end": 1240
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1246,
                                    "end": 1249
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1250,
                                      "end": 1251
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1246,
                                  "end": 1252
                                },
                                "directive": null,
                                "start": 1246,
                                "end": 1252
                              }
                            ],
                            "start": 1245,
                            "end": 1253
                          },
                          "id": null,
                          "generator": false,
                          "start": 1238,
                          "end": 1253
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1229,
                        "end": 1253
                      }
                    ],
                    "start": 1228,
                    "end": 1254
                  },
                  "start": 1224,
                  "end": 1255
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 1256,
                    "end": 1261
                  },
                  "value": null,
                  "start": 1256,
                  "end": 1261
                }
              ],
              "selfClosing": true,
              "start": 1211,
              "end": 1264
            },
            "children": [],
            "closingElement": null,
            "start": 1211,
            "end": 1264
          },
          "definite": false,
          "start": 1206,
          "end": 1264
        }
      ],
      "declare": false,
      "start": 1200,
      "end": 1265
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoOverload1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1302,
          "end": 1313
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1325,
                "end": 1334
              },
              "start": 1323,
              "end": 1334
            },
            "start": 1314,
            "end": 1334
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
                "start": 1337,
                "end": 1340
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 1341,
                "end": 1348
              },
              "start": 1337,
              "end": 1348
            },
            "typeArguments": null,
            "start": 1337,
            "end": 1348
          },
          "start": 1335,
          "end": 1348
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1367
              },
              "start": 1351,
              "end": 1367
            }
          ],
          "start": 1349,
          "end": 1369
        },
        "expression": false,
        "start": 1293,
        "end": 1369
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1286,
      "end": 1369
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1376,
            "end": 1378
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "NoOverload1",
                "start": 1382,
                "end": 1393
              },
              "typeArguments": null,
              "attributes": [
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
                          "name": "goTo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1399,
                          "end": 1403
                        },
                        "value": {
                          "type": "Literal",
                          "value": "home",
                          "raw": "\"home\"",
                          "start": 1404,
                          "end": 1410
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1399,
                        "end": 1410
                      }
                    ],
                    "start": 1398,
                    "end": 1411
                  },
                  "start": 1394,
                  "end": 1412
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 1413,
                    "end": 1418
                  },
                  "value": null,
                  "start": 1413,
                  "end": 1418
                }
              ],
              "selfClosing": true,
              "start": 1381,
              "end": 1422
            },
            "children": [],
            "closingElement": null,
            "start": 1381,
            "end": 1422
          },
          "definite": false,
          "start": 1376,
          "end": 1422
        }
      ],
      "declare": false,
      "start": 1370,
      "end": 1423
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 1460
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
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 138,
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
    "value": "children",
    "start": 159,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 182,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 205,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 212,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 222,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 234,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 242,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "\"right\"",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 306,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 313,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 323,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 333,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 341,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "\"contact\"",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 391,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 398,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 407,
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
    "value": "buttonProps",
    "start": 418,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 431,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 458,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 465,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 474,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 485,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 496,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 521,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 528,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 537,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 555,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 599,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 605,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 617,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 623,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 644,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 670,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 682,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 697,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 716,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 728,
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
    "value": "props",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 768,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 784,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 801,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 853,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 864,
    "end": 865
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 865,
    "end": 875
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 876,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 900,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 942,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 953,
    "end": 954
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 954,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 970,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1030,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1036,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1042,
    "end": 1052
  },
  {
    "type": "JSXIdentifier",
    "value": "goTo",
    "start": 1053,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "JSXText",
    "value": "\"home\"",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1120,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "NoOverload",
    "start": 1129,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 1140,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 1153,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1171,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1181,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1188,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "JSXIdentifier",
    "value": "NoOverload",
    "start": 1212,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1225,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1229,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1246,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1293,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "NoOverload1",
    "start": 1302,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 1314,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 1325,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1341,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1358,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "JSXIdentifier",
    "value": "NoOverload1",
    "start": 1382,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 1399,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 1413,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  }
]
```
