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
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React18ReactFragment",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 102
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 118
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "React18ReactNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 135
              },
              "typeArguments": null,
              "start": 119,
              "end": 135
            }
          ],
          "start": 118,
          "end": 136
        },
        "start": 105,
        "end": 136
      },
      "declare": false,
      "start": 77,
      "end": 137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React18ReactNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 159
      },
      "typeParameters": null,
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
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 171
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 184
              },
              "start": 166,
              "end": 184
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 185,
                  "end": 188
                }
              ],
              "start": 184,
              "end": 189
            },
            "start": 166,
            "end": 189
          },
          {
            "type": "TSStringKeyword",
            "start": 194,
            "end": 200
          },
          {
            "type": "TSNumberKeyword",
            "start": 205,
            "end": 211
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "React18ReactFragment",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 236
            },
            "typeArguments": null,
            "start": 216,
            "end": 236
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 246
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactPortal",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 258
              },
              "start": 241,
              "end": 258
            },
            "typeArguments": null,
            "start": 241,
            "end": 258
          },
          {
            "type": "TSBooleanKeyword",
            "start": 263,
            "end": 270
          },
          {
            "type": "TSNullKeyword",
            "start": 275,
            "end": 279
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 284,
            "end": 293
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 305
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React18ReactNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 306,
                  "end": 322
                }
              ],
              "start": 305,
              "end": 323
            },
            "start": 298,
            "end": 323
          }
        ],
        "start": 164,
        "end": 323
      },
      "declare": false,
      "start": 138,
      "end": 324
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NewReactJSXElementConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 454
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 455,
            "end": 456
          }
        ],
        "start": 454,
        "end": 457
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 471,
                  "end": 474
                },
                "start": 466,
                "end": 474
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React18ReactNode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 495
                },
                "typeArguments": null,
                "start": 479,
                "end": 495
              },
              "start": 476,
              "end": 495
            },
            "start": 465,
            "end": 495
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 515
                    },
                    "typeArguments": null,
                    "start": 514,
                    "end": 515
                  },
                  "start": 512,
                  "end": 515
                },
                "start": 507,
                "end": 515
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
                    "start": 520,
                    "end": 525
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 535
                  },
                  "start": 520,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 539,
                      "end": 542
                    }
                  ],
                  "start": 535,
                  "end": 543
                },
                "start": 520,
                "end": 543
              },
              "start": 517,
              "end": 543
            },
            "start": 502,
            "end": 543
          }
        ],
        "start": 462,
        "end": 544
      },
      "declare": false,
      "start": 420,
      "end": 545
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 561
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 579
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 602
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 605,
                        "end": 611
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NewReactJSXElementConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 614,
                          "end": 643
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 644,
                              "end": 647
                            }
                          ],
                          "start": 643,
                          "end": 648
                        },
                        "start": 614,
                        "end": 648
                      }
                    ],
                    "start": 605,
                    "end": 648
                  },
                  "declare": false,
                  "start": 586,
                  "end": 649
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 681
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "my-custom-element",
                          "raw": "'my-custom-element'",
                          "start": 691,
                          "end": 710
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
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 713,
                                "end": 718
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DOMAttributes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 719,
                                "end": 732
                              },
                              "start": 713,
                              "end": 732
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSUnknownKeyword",
                                  "start": 733,
                                  "end": 740
                                }
                              ],
                              "start": 732,
                              "end": 741
                            },
                            "start": 713,
                            "end": 741
                          },
                          "start": 711,
                          "end": 741
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 690,
                        "end": 742
                      }
                    ],
                    "start": 682,
                    "end": 748
                  },
                  "declare": false,
                  "start": 654,
                  "end": 748
                }
              ],
              "start": 580,
              "end": 752
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 566,
            "end": 752
          }
        ],
        "start": 562,
        "end": 754
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 547,
      "end": 754
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NewReactJSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 800
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 808
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 810,
                              "end": 816
                            },
                            "start": 808,
                            "end": 816
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 803,
                          "end": 816
                        }
                      ],
                      "start": 801,
                      "end": 818
                    }
                  ],
                  "start": 800,
                  "end": 819
                },
                "start": 771,
                "end": 819
              },
              "start": 769,
              "end": 819
            },
            "start": 760,
            "end": 819
          },
          "init": null,
          "definite": false,
          "start": 760,
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
            "name": "RenderElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 841
          },
          "init": {
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 852
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 852
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 847,
                    "end": 852
                  }
                ],
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 863
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 865,
                            "end": 871
                          },
                          "start": 863,
                          "end": 871
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 858,
                        "end": 871
                      }
                    ],
                    "start": 856,
                    "end": 873
                  },
                  "start": 854,
                  "end": 873
                },
                "start": 845,
                "end": 873
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
                  "start": 879,
                  "end": 882
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 878,
                "end": 883
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 884,
                    "end": 889
                  },
                  "start": 883,
                  "end": 890
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 892,
                  "end": 895
                },
                "start": 890,
                "end": 896
              },
              "start": 878,
              "end": 896
            },
            "id": null,
            "generator": false,
            "start": 844,
            "end": 896
          },
          "definite": false,
          "start": 828,
          "end": 896
        }
      ],
      "declare": false,
      "start": 822,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 898,
          "end": 907
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 923
        },
        "start": 898,
        "end": 923
      },
      "directive": null,
      "start": 898,
      "end": 924
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "start": 926,
            "end": 939
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 925,
          "end": 942
        },
        "children": [],
        "closingElement": null,
        "start": 925,
        "end": 942
      },
      "directive": null,
      "start": 925,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "start": 945,
            "end": 958
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 959,
                "end": 964
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 965,
                "end": 972
              },
              "start": 959,
              "end": 972
            }
          ],
          "selfClosing": true,
          "start": 944,
          "end": 975
        },
        "children": [],
        "closingElement": null,
        "start": 944,
        "end": 975
      },
      "directive": null,
      "start": 944,
      "end": 976
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "start": 978,
            "end": 991
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 992,
                "end": 1002
              },
              "value": null,
              "start": 992,
              "end": 1002
            }
          ],
          "selfClosing": true,
          "start": 977,
          "end": 1005
        },
        "children": [],
        "closingElement": null,
        "start": 977,
        "end": 1005
      },
      "directive": null,
      "start": 977,
      "end": 1006
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
            "name": "RenderString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1026
          },
          "init": {
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1037
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1037
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1032,
                    "end": 1037
                  }
                ],
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1048
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1050,
                            "end": 1056
                          },
                          "start": 1048,
                          "end": 1056
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1043,
                        "end": 1056
                      }
                    ],
                    "start": 1041,
                    "end": 1058
                  },
                  "start": 1039,
                  "end": 1058
                },
                "start": 1030,
                "end": 1058
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1068
            },
            "id": null,
            "generator": false,
            "start": 1029,
            "end": 1068
          },
          "definite": false,
          "start": 1014,
          "end": 1068
        }
      ],
      "declare": false,
      "start": 1008,
      "end": 1069
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1070,
          "end": 1079
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderString",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1094
        },
        "start": 1070,
        "end": 1094
      },
      "directive": null,
      "start": 1070,
      "end": 1095
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "start": 1097,
            "end": 1109
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1096,
          "end": 1112
        },
        "children": [],
        "closingElement": null,
        "start": 1096,
        "end": 1112
      },
      "directive": null,
      "start": 1096,
      "end": 1113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "start": 1115,
            "end": 1127
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1128,
                "end": 1133
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1134,
                "end": 1141
              },
              "start": 1128,
              "end": 1141
            }
          ],
          "selfClosing": true,
          "start": 1114,
          "end": 1144
        },
        "children": [],
        "closingElement": null,
        "start": 1114,
        "end": 1144
      },
      "directive": null,
      "start": 1114,
      "end": 1145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "start": 1147,
            "end": 1159
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1160,
                "end": 1170
              },
              "value": null,
              "start": 1160,
              "end": 1170
            }
          ],
          "selfClosing": true,
          "start": 1146,
          "end": 1173
        },
        "children": [],
        "closingElement": null,
        "start": 1146,
        "end": 1173
      },
      "directive": null,
      "start": 1146,
      "end": 1174
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
            "name": "RenderNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1182,
            "end": 1194
          },
          "init": {
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1200,
                      "end": 1205
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1200,
                      "end": 1205
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1200,
                    "end": 1205
                  }
                ],
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1216
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1218,
                            "end": 1224
                          },
                          "start": 1216,
                          "end": 1224
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1211,
                        "end": 1224
                      }
                    ],
                    "start": 1209,
                    "end": 1226
                  },
                  "start": 1207,
                  "end": 1226
                },
                "start": 1198,
                "end": 1226
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1236
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1243
              },
              "optional": false,
              "computed": false,
              "start": 1231,
              "end": 1243
            },
            "id": null,
            "generator": false,
            "start": 1197,
            "end": 1243
          },
          "definite": false,
          "start": 1182,
          "end": 1243
        }
      ],
      "declare": false,
      "start": 1176,
      "end": 1244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1245,
          "end": 1254
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 1257,
          "end": 1269
        },
        "start": 1245,
        "end": 1269
      },
      "directive": null,
      "start": 1245,
      "end": 1270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "start": 1272,
            "end": 1284
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1271,
          "end": 1287
        },
        "children": [],
        "closingElement": null,
        "start": 1271,
        "end": 1287
      },
      "directive": null,
      "start": 1271,
      "end": 1288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "start": 1290,
            "end": 1302
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1303,
                "end": 1308
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1309,
                "end": 1316
              },
              "start": 1303,
              "end": 1316
            }
          ],
          "selfClosing": true,
          "start": 1289,
          "end": 1319
        },
        "children": [],
        "closingElement": null,
        "start": 1289,
        "end": 1319
      },
      "directive": null,
      "start": 1289,
      "end": 1320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "start": 1322,
            "end": 1334
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1335,
                "end": 1345
              },
              "value": null,
              "start": 1335,
              "end": 1345
            }
          ],
          "selfClosing": true,
          "start": 1321,
          "end": 1348
        },
        "children": [],
        "closingElement": null,
        "start": 1321,
        "end": 1348
      },
      "directive": null,
      "start": 1321,
      "end": 1349
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
            "name": "RenderArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1368
          },
          "init": {
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1374,
                      "end": 1379
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1374,
                      "end": 1379
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1374,
                    "end": 1379
                  }
                ],
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1385,
                          "end": 1390
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1392,
                            "end": 1398
                          },
                          "start": 1390,
                          "end": 1398
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1385,
                        "end": 1398
                      }
                    ],
                    "start": 1383,
                    "end": 1400
                  },
                  "start": 1381,
                  "end": 1400
                },
                "start": 1372,
                "end": 1400
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1411
                }
              ],
              "start": 1405,
              "end": 1412
            },
            "id": null,
            "generator": false,
            "start": 1371,
            "end": 1412
          },
          "definite": false,
          "start": 1357,
          "end": 1412
        }
      ],
      "declare": false,
      "start": 1351,
      "end": 1413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1414,
          "end": 1423
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1426,
          "end": 1437
        },
        "start": 1414,
        "end": 1437
      },
      "directive": null,
      "start": 1414,
      "end": 1438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "start": 1440,
            "end": 1451
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1439,
          "end": 1454
        },
        "children": [],
        "closingElement": null,
        "start": 1439,
        "end": 1454
      },
      "directive": null,
      "start": 1439,
      "end": 1455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "start": 1457,
            "end": 1468
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1469,
                "end": 1474
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1475,
                "end": 1482
              },
              "start": 1469,
              "end": 1482
            }
          ],
          "selfClosing": true,
          "start": 1456,
          "end": 1485
        },
        "children": [],
        "closingElement": null,
        "start": 1456,
        "end": 1485
      },
      "directive": null,
      "start": 1456,
      "end": 1486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "start": 1488,
            "end": 1499
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1500,
                "end": 1510
              },
              "value": null,
              "start": 1500,
              "end": 1510
            }
          ],
          "selfClosing": true,
          "start": 1487,
          "end": 1513
        },
        "children": [],
        "closingElement": null,
        "start": 1487,
        "end": 1513
      },
      "directive": null,
      "start": 1487,
      "end": 1514
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
            "name": "RenderPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1561
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1573,
                      "end": 1578
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1573,
                      "end": 1578
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1573,
                    "end": 1578
                  }
                ],
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1584,
                          "end": 1589
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1591,
                            "end": 1597
                          },
                          "start": 1589,
                          "end": 1597
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1584,
                        "end": 1597
                      }
                    ],
                    "start": 1582,
                    "end": 1599
                  },
                  "start": 1580,
                  "end": 1599
                },
                "start": 1571,
                "end": 1599
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "react",
              "raw": "\"react\"",
              "start": 1604,
              "end": 1611
            },
            "id": null,
            "generator": false,
            "start": 1564,
            "end": 1611
          },
          "definite": false,
          "start": 1548,
          "end": 1611
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1613,
          "end": 1622
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 1625,
          "end": 1638
        },
        "start": 1613,
        "end": 1638
      },
      "directive": null,
      "start": 1613,
      "end": 1639
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "start": 1641,
            "end": 1654
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1640,
          "end": 1657
        },
        "children": [],
        "closingElement": null,
        "start": 1640,
        "end": 1657
      },
      "directive": null,
      "start": 1640,
      "end": 1658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "start": 1660,
            "end": 1673
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1674,
                "end": 1679
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1680,
                "end": 1687
              },
              "start": 1674,
              "end": 1687
            }
          ],
          "selfClosing": true,
          "start": 1659,
          "end": 1690
        },
        "children": [],
        "closingElement": null,
        "start": 1659,
        "end": 1690
      },
      "directive": null,
      "start": 1659,
      "end": 1691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "start": 1693,
            "end": 1706
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1707,
                "end": 1717
              },
              "value": null,
              "start": 1707,
              "end": 1717
            }
          ],
          "selfClosing": true,
          "start": 1692,
          "end": 1720
        },
        "children": [],
        "closingElement": null,
        "start": 1692,
        "end": 1720
      },
      "directive": null,
      "start": 1692,
      "end": 1721
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderStringClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1760,
        "end": 1777
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
          "start": 1786,
          "end": 1791
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1792,
          "end": 1801
        },
        "optional": false,
        "computed": false,
        "start": 1786,
        "end": 1801
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
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
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1804,
                  "end": 1809
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1811,
                    "end": 1817
                  },
                  "start": 1809,
                  "end": 1817
                },
                "accessibility": null,
                "static": false,
                "start": 1804,
                "end": 1817
              }
            ],
            "start": 1802,
            "end": 1819
          }
        ],
        "start": 1801,
        "end": 1820
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
              "start": 1825,
              "end": 1831
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1847,
                          "end": 1851
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1852,
                          "end": 1857
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1847,
                        "end": 1857
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "title",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1863
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1847,
                      "end": 1863
                    },
                    "start": 1840,
                    "end": 1864
                  }
                ],
                "start": 1834,
                "end": 1868
              },
              "expression": false,
              "start": 1831,
              "end": 1868
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1825,
            "end": 1868
          }
        ],
        "start": 1821,
        "end": 1870
      },
      "abstract": false,
      "declare": false,
      "start": 1754,
      "end": 1870
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1880
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderStringClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1883,
          "end": 1900
        },
        "start": 1871,
        "end": 1900
      },
      "directive": null,
      "start": 1871,
      "end": 1901
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "start": 1903,
            "end": 1920
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1902,
          "end": 1923
        },
        "children": [],
        "closingElement": null,
        "start": 1902,
        "end": 1923
      },
      "directive": null,
      "start": 1902,
      "end": 1924
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "start": 1926,
            "end": 1943
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1944,
                "end": 1949
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1950,
                "end": 1957
              },
              "start": 1944,
              "end": 1957
            }
          ],
          "selfClosing": true,
          "start": 1925,
          "end": 1960
        },
        "children": [],
        "closingElement": null,
        "start": 1925,
        "end": 1960
      },
      "directive": null,
      "start": 1925,
      "end": 1961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "start": 1963,
            "end": 1980
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1981,
                "end": 1991
              },
              "value": null,
              "start": 1981,
              "end": 1991
            }
          ],
          "selfClosing": true,
          "start": 1962,
          "end": 1994
        },
        "children": [],
        "closingElement": null,
        "start": 1962,
        "end": 1994
      },
      "directive": null,
      "start": 1962,
      "end": 1995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 2031,
            "end": 2034
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2030,
          "end": 2037
        },
        "children": [],
        "closingElement": null,
        "start": 2030,
        "end": 2037
      },
      "directive": null,
      "start": 2030,
      "end": 2038
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "my-custom-element",
            "start": 2040,
            "end": 2057
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2039,
          "end": 2060
        },
        "children": [],
        "closingElement": null,
        "start": 2039,
        "end": 2060
      },
      "directive": null,
      "start": 2039,
      "end": 2061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "boop",
            "start": 2115,
            "end": 2119
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2114,
          "end": 2122
        },
        "children": [],
        "closingElement": null,
        "start": 2114,
        "end": 2122
      },
      "directive": null,
      "start": 2114,
      "end": 2123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "my-undeclared-custom-element",
            "start": 2125,
            "end": 2153
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2124,
          "end": 2156
        },
        "children": [],
        "closingElement": null,
        "start": 2124,
        "end": 2156
      },
      "directive": null,
      "start": 2124,
      "end": 2157
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNativeFlatListProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 2410,
        "end": 2434
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 2435,
              "end": 2439
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2435,
            "end": 2439
          }
        ],
        "start": 2434,
        "end": 2440
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2441,
        "end": 2443
      },
      "declare": false,
      "start": 2400,
      "end": 2443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNativeFlatList",
        "optional": false,
        "typeAnnotation": null,
        "start": 2453,
        "end": 2472
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2483,
              "end": 2485
            },
            "start": 2481,
            "end": 2485
          },
          "start": 2476,
          "end": 2485
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ref",
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
                  "start": 2494,
                  "end": 2499
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ForwardedRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2500,
                  "end": 2512
                },
                "start": 2494,
                "end": 2512
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactNativeFlatList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2520,
                      "end": 2539
                    },
                    "typeArguments": null,
                    "start": 2513,
                    "end": 2539
                  }
                ],
                "start": 2512,
                "end": 2540
              },
              "start": 2494,
              "end": 2540
            },
            "start": 2492,
            "end": 2540
          },
          "start": 2489,
          "end": 2540
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
              "start": 2554,
              "end": 2558
            },
            "start": 2547,
            "end": 2559
          }
        ],
        "start": 2543,
        "end": 2561
      },
      "expression": false,
      "start": 2444,
      "end": 2561
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "ReactNativeFlatList",
            "start": 2563,
            "end": 2582
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2562,
          "end": 2585
        },
        "children": [],
        "closingElement": null,
        "start": 2562,
        "end": 2585
      },
      "directive": null,
      "start": 2562,
      "end": 2586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2638,
        "end": 2640
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
              "start": 2641,
              "end": 2642
            },
            "constraint": {
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
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2659,
                      "end": 2661
                    },
                    "start": 2657,
                    "end": 2661
                  },
                  "start": 2652,
                  "end": 2661
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
                      "start": 2666,
                      "end": 2671
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2672,
                      "end": 2684
                    },
                    "start": 2666,
                    "end": 2684
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 2685,
                        "end": 2688
                      }
                    ],
                    "start": 2684,
                    "end": 2689
                  },
                  "start": 2666,
                  "end": 2689
                },
                "start": 2663,
                "end": 2689
              },
              "start": 2651,
              "end": 2689
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2641,
            "end": 2689
          }
        ],
        "start": 2640,
        "end": 2690
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
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
                "start": 2702,
                "end": 2703
              },
              "typeArguments": null,
              "start": 2702,
              "end": 2703
            },
            "start": 2700,
            "end": 2703
          },
          "start": 2691,
          "end": 2703
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
                  "name": "Component",
                  "start": 2717,
                  "end": 2726
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 2716,
                "end": 2729
              },
              "children": [],
              "closingElement": null,
              "start": 2716,
              "end": 2729
            },
            "start": 2709,
            "end": 2730
          }
        ],
        "start": 2705,
        "end": 2732
      },
      "expression": false,
      "start": 2629,
      "end": 2732
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Unresolved",
            "start": 2735,
            "end": 2745
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2734,
          "end": 2748
        },
        "children": [],
        "closingElement": null,
        "start": 2734,
        "end": 2748
      },
      "directive": null,
      "start": 2734,
      "end": 2749
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Unresolved",
            "start": 2751,
            "end": 2761
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 2762,
                "end": 2765
              },
              "value": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2766,
                "end": 2771
              },
              "start": 2762,
              "end": 2771
            }
          ],
          "selfClosing": true,
          "start": 2750,
          "end": 2774
        },
        "children": [],
        "closingElement": null,
        "start": 2750,
        "end": 2774
      },
      "directive": null,
      "start": 2750,
      "end": 2775
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 2785,
        "end": 2791
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 2808,
              "end": 2811
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2830,
                    "end": 2847
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "a:b",
                          "raw": "'a:b'",
                          "start": 2861,
                          "end": 2866
                        },
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2871,
                                  "end": 2872
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2874,
                                    "end": 2880
                                  },
                                  "start": 2872,
                                  "end": 2880
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2871,
                                "end": 2880
                              }
                            ],
                            "start": 2869,
                            "end": 2882
                          },
                          "start": 2867,
                          "end": 2882
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2860,
                        "end": 2883
                      }
                    ],
                    "start": 2848,
                    "end": 2891
                  },
                  "declare": false,
                  "start": 2820,
                  "end": 2891
                }
              ],
              "start": 2812,
              "end": 2895
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2798,
            "end": 2895
          }
        ],
        "start": 2792,
        "end": 2897
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 2777,
      "end": 2897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXNamespacedName",
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "start": 2900,
              "end": 2901
            },
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "start": 2902,
              "end": 2903
            },
            "start": 2900,
            "end": 2903
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 2904,
                "end": 2905
              },
              "value": {
                "type": "Literal",
                "value": "accepted",
                "raw": "\"accepted\"",
                "start": 2906,
                "end": 2916
              },
              "start": 2904,
              "end": 2916
            }
          ],
          "selfClosing": true,
          "start": 2899,
          "end": 2919
        },
        "children": [],
        "closingElement": null,
        "start": 2899,
        "end": 2919
      },
      "directive": null,
      "start": 2899,
      "end": 2920
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXNamespacedName",
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "start": 2922,
              "end": 2923
            },
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "start": 2924,
              "end": 2925
            },
            "start": 2922,
            "end": 2925
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 2926,
                "end": 2927
              },
              "value": {
                "type": "Literal",
                "value": "rejected",
                "raw": "\"rejected\"",
                "start": 2928,
                "end": 2938
              },
              "start": 2926,
              "end": 2938
            }
          ],
          "selfClosing": true,
          "start": 2921,
          "end": 2941
        },
        "children": [],
        "closingElement": null,
        "start": 2921,
        "end": 2941
      },
      "directive": null,
      "start": 2921,
      "end": 2942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXNamespacedName",
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "start": 2944,
              "end": 2945
            },
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "start": 2946,
              "end": 2947
            },
            "start": 2944,
            "end": 2947
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 2948,
                "end": 2949
              },
              "value": {
                "type": "Literal",
                "value": "accepted",
                "raw": "\"accepted\"",
                "start": 2950,
                "end": 2960
              },
              "start": 2948,
              "end": 2960
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 2961,
                "end": 2962
              },
              "value": {
                "type": "Literal",
                "value": "rejected",
                "raw": "\"rejected\"",
                "start": 2963,
                "end": 2973
              },
              "start": 2961,
              "end": 2973
            }
          ],
          "selfClosing": true,
          "start": 2943,
          "end": 2976
        },
        "children": [],
        "closingElement": null,
        "start": 2943,
        "end": 2976
      },
      "directive": null,
      "start": 2943,
      "end": 2977
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 2977
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
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
    "value": "React18ReactFragment",
    "start": 82,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 105,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "React18ReactNode",
    "start": 119,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 138,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "React18ReactNode",
    "start": 143,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 172,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "|",
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
    "value": "|",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "React18ReactFragment",
    "start": 216,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "ReactPortal",
    "start": 247,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 273,
    "end": 274
  },
  {
    "type": "Null",
    "value": "null",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 284,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "React18ReactNode",
    "start": 306,
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
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 420,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "NewReactJSXElementConstructor",
    "start": 425,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 476,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "React18ReactNode",
    "start": 479,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 507,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 517,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 539,
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
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 547,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 566,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 586,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 591,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "NewReactJSXElementConstructor",
    "start": 614,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 654,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 664,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 690,
    "end": 691
  },
  {
    "type": "String",
    "value": "'my-custom-element'",
    "start": 691,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 713,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "DOMAttributes",
    "start": 719,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 733,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "let",
    "start": 756,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 760,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "NewReactJSXElementConstructor",
    "start": 771,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 810,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 822,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "RenderElement",
    "start": 828,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 858,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 878,
    "end": 879
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 884,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 891,
    "end": 892
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 898,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "RenderElement",
    "start": 910,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 925,
    "end": 926
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderElement",
    "start": 926,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 944,
    "end": 945
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderElement",
    "start": 945,
    "end": 958
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "JSXText",
    "value": "\"react\"",
    "start": 965,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderElement",
    "start": 978,
    "end": 991
  },
  {
    "type": "JSXIdentifier",
    "value": "excessProp",
    "start": 992,
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
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "RenderString",
    "start": 1014,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1032,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1070,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "RenderString",
    "start": 1082,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderString",
    "start": 1097,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderString",
    "start": 1115,
    "end": 1127
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 1128,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "JSXText",
    "value": "\"react\"",
    "start": 1134,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderString",
    "start": 1147,
    "end": 1159
  },
  {
    "type": "JSXIdentifier",
    "value": "excessProp",
    "start": 1160,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "RenderNumber",
    "start": 1182,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1211,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1245,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "RenderNumber",
    "start": 1257,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderNumber",
    "start": 1272,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderNumber",
    "start": 1290,
    "end": 1302
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "JSXText",
    "value": "\"react\"",
    "start": 1309,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderNumber",
    "start": 1322,
    "end": 1334
  },
  {
    "type": "JSXIdentifier",
    "value": "excessProp",
    "start": 1335,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "RenderArray",
    "start": 1357,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1374,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1385,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1392,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1406,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1414,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "RenderArray",
    "start": 1426,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderArray",
    "start": 1440,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderArray",
    "start": 1457,
    "end": 1468
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 1469,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "JSXText",
    "value": "\"react\"",
    "start": 1475,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderArray",
    "start": 1488,
    "end": 1499
  },
  {
    "type": "JSXIdentifier",
    "value": "excessProp",
    "start": 1500,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "RenderPromise",
    "start": 1548,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1564,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1573,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1584,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1601,
    "end": 1603
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 1604,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1613,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "RenderPromise",
    "start": 1625,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderPromise",
    "start": 1641,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderPromise",
    "start": 1660,
    "end": 1673
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 1674,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "JSXText",
    "value": "\"react\"",
    "start": 1680,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderPromise",
    "start": 1693,
    "end": 1706
  },
  {
    "type": "JSXIdentifier",
    "value": "excessProp",
    "start": 1707,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1754,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "RenderStringClass",
    "start": 1760,
    "end": 1777
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1786,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1792,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1804,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1811,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 1825,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1840,
    "end": 1846
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1847,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1852,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1858,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1871,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "RenderStringClass",
    "start": 1883,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderStringClass",
    "start": 1903,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderStringClass",
    "start": 1926,
    "end": 1943
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 1944,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "JSXText",
    "value": "\"react\"",
    "start": 1950,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "JSXIdentifier",
    "value": "RenderStringClass",
    "start": 1963,
    "end": 1980
  },
  {
    "type": "JSXIdentifier",
    "value": "excessProp",
    "start": 1981,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "JSXIdentifier",
    "value": "my-custom-element",
    "start": 2040,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "JSXIdentifier",
    "value": "boop",
    "start": 2115,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "JSXIdentifier",
    "value": "my-undeclared-custom-element",
    "start": 2125,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2400,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "ReactNativeFlatListProps",
    "start": 2410,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 2435,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2444,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "ReactNativeFlatList",
    "start": 2453,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2476,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 2489,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2494,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "ForwardedRef",
    "start": 2500,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2513,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "ReactNativeFlatList",
    "start": 2520,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2547,
    "end": 2553
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2554,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "JSXIdentifier",
    "value": "ReactNativeFlatList",
    "start": 2563,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2629,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2638,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2643,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2652,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2663,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2666,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 2672,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2685,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2691,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2709,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 2717,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "JSXIdentifier",
    "value": "Unresolved",
    "start": 2735,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "JSXIdentifier",
    "value": "Unresolved",
    "start": 2751,
    "end": 2761
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2762,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "JSXText",
    "value": "\"abc\"",
    "start": 2766,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2777,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 2785,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2798,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 2808,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2820,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 2830,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "String",
    "value": "'a:b'",
    "start": 2861,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2874,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "JSXText",
    "value": "\"accepted\"",
    "start": 2906,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "JSXText",
    "value": "\"rejected\"",
    "start": 2928,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "JSXText",
    "value": "\"accepted\"",
    "start": 2950,
    "end": 2960
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "JSXText",
    "value": "\"rejected\"",
    "start": 2963,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2976,
    "end": 2977
  }
]
```
