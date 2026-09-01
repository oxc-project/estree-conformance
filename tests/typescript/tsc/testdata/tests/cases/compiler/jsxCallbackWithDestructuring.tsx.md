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
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 40
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
              "start": 41,
              "end": 42
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 45,
              "end": 47
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 47
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 53,
              "end": 55
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 55
          }
        ],
        "start": 40,
        "end": 56
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 57,
        "end": 60
      },
      "declare": false,
      "start": 21,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 84
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
              "start": 85,
              "end": 86
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 85,
            "end": 86
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 88,
            "end": 89
          }
        ],
        "start": 84,
        "end": 90
      },
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 108
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "typeArguments": null,
                      "start": 116,
                      "end": 117
                    },
                    "start": 114,
                    "end": 117
                  },
                  "start": 109,
                  "end": 117
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
                    },
                    "start": 127,
                    "end": 132
                  },
                  "start": 119,
                  "end": 132
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 108,
              "end": 134
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 97,
            "end": 134
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 145
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 149,
                  "end": 151
                },
                "start": 147,
                "end": 151
              },
              "body": null,
              "expression": false,
              "start": 145,
              "end": 152
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 152
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 172
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
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 175,
                                "end": 183
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "start": 186,
                                  "end": 188
                                },
                                "start": 184,
                                "end": 188
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 175,
                              "end": 188
                            }
                          ],
                          "start": 173,
                          "end": 190
                        }
                      ],
                      "start": 172,
                      "end": 191
                    },
                    "start": 164,
                    "end": 191
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 202
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
                            "start": 203,
                            "end": 204
                          },
                          "typeArguments": null,
                          "start": 203,
                          "end": 204
                        }
                      ],
                      "start": 202,
                      "end": 205
                    },
                    "start": 194,
                    "end": 205
                  }
                ],
                "start": 164,
                "end": 205
              },
              "start": 162,
              "end": 205
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 157,
            "end": 206
          }
        ],
        "start": 91,
        "end": 208
      },
      "abstract": false,
      "declare": true,
      "start": 61,
      "end": 208
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 224
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
              "start": 241,
              "end": 244
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 272
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 274,
                    "end": 277
                  },
                  "declare": false,
                  "start": 255,
                  "end": 277
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 308
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "render",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 324,
                          "end": 330
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 334,
                            "end": 336
                          },
                          "start": 332,
                          "end": 336
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 324,
                        "end": 337
                      }
                    ],
                    "start": 310,
                    "end": 347
                  },
                  "declare": false,
                  "start": 286,
                  "end": 347
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 391
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
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 399
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 401,
                            "end": 403
                          },
                          "start": 399,
                          "end": 403
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 394,
                        "end": 404
                      }
                    ],
                    "start": 392,
                    "end": 406
                  },
                  "declare": false,
                  "start": 356,
                  "end": 406
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 449
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 460
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 462,
                            "end": 464
                          },
                          "start": 460,
                          "end": 464
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 452,
                        "end": 465
                      }
                    ],
                    "start": 450,
                    "end": 467
                  },
                  "declare": false,
                  "start": 415,
                  "end": 467
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicAttributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 505
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 507,
                    "end": 510
                  },
                  "declare": false,
                  "start": 476,
                  "end": 510
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicClassAttributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 553
                  },
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
                          "start": 554,
                          "end": 555
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 554,
                        "end": 555
                      }
                    ],
                    "start": 553,
                    "end": 556
                  },
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 557,
                    "end": 560
                  },
                  "declare": false,
                  "start": 519,
                  "end": 560
                }
              ],
              "start": 245,
              "end": 566
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 231,
            "end": 566
          }
        ],
        "start": 225,
        "end": 568
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 210,
      "end": 568
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RouteProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 597
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
                "start": 604,
                "end": 612
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 625,
                                "end": 626
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 628,
                                  "end": 634
                                },
                                "start": 626,
                                "end": 634
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 625,
                              "end": 634
                            }
                          ],
                          "start": 623,
                          "end": 636
                        },
                        "start": 621,
                        "end": 636
                      },
                      "start": 616,
                      "end": 636
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 641,
                      "end": 644
                    },
                    "start": 638,
                    "end": 644
                  },
                  "start": 615,
                  "end": 644
                },
                "start": 613,
                "end": 644
              },
              "accessibility": null,
              "static": false,
              "start": 604,
              "end": 645
            }
          ],
          "start": 598,
          "end": 647
        },
        "declare": false,
        "start": 577,
        "end": 647
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 570,
      "end": 647
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 661,
          "end": 672
        },
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
                "start": 673,
                "end": 674
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RouteProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 693
                },
                "typeArguments": null,
                "start": 683,
                "end": 693
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RouteProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 706
                },
                "typeArguments": null,
                "start": 696,
                "end": 706
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 673,
              "end": 706
            }
          ],
          "start": 672,
          "end": 707
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 725
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 727
              },
              "typeArguments": null,
              "start": 726,
              "end": 727
            }
          ],
          "start": 725,
          "end": 728
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 729,
          "end": 732
        },
        "abstract": false,
        "declare": false,
        "start": 655,
        "end": 732
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 648,
      "end": 732
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 734,
            "end": 745
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "children",
                "start": 746,
                "end": 754
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
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 759,
                            "end": 760
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 759,
                            "end": 760
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 759,
                          "end": 760
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 757,
                      "end": 762
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 767,
                    "end": 769
                  },
                  "id": null,
                  "generator": false,
                  "start": 756,
                  "end": 769
                },
                "start": 755,
                "end": 770
              },
              "start": 746,
              "end": 770
            }
          ],
          "selfClosing": true,
          "start": 733,
          "end": 772
        },
        "children": [],
        "closingElement": null,
        "start": 733,
        "end": 772
      },
      "directive": null,
      "start": 733,
      "end": 772
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 772
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 61,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 97,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 109,
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
    "value": "P",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 164,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 175,
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
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 194,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 218,
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
    "value": "namespace",
    "start": 231,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 255,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 286,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 296,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 356,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 366,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 415,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 425,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 452,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 476,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "IntrinsicAttributes",
    "start": 486,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 519,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "IntrinsicClassAttributes",
    "start": 529,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 570,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 577,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "RouteProps",
    "start": 587,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 604,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 638,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 648,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 655,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 661,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 675,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "RouteProps",
    "start": 683,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "RouteProps",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 708,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 716,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 734,
    "end": 745
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 746,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 764,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 771,
    "end": 772
  }
]
```
