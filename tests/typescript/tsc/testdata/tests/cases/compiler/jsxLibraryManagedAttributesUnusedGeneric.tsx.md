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
            "start": 21,
            "end": 26
          },
          "start": 21,
          "end": 26
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 32,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 14,
      "end": 39
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 72
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 86
                  },
                  "start": 67,
                  "end": 86
                },
                "typeArguments": null,
                "start": 60,
                "end": 86
              },
              "start": 58,
              "end": 86
            },
            "start": 55,
            "end": 86
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 86
        }
      ],
      "declare": true,
      "start": 41,
      "end": 86
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "jsx",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 127
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 162
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 163,
                        "end": 165
                      },
                      "declare": false,
                      "start": 145,
                      "end": 165
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 138,
                    "end": 165
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 203
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 204,
                        "end": 206
                      },
                      "declare": false,
                      "start": 181,
                      "end": 206
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 174,
                    "end": 206
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementAttributesProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 232,
                        "end": 257
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 258,
                        "end": 260
                      },
                      "declare": false,
                      "start": 222,
                      "end": 260
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 215,
                    "end": 260
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementChildrenAttribute",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 310
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 311,
                        "end": 313
                      },
                      "declare": false,
                      "start": 276,
                      "end": 313
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 269,
                    "end": 313
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IntrinsicAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 358
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 359,
                        "end": 361
                      },
                      "declare": false,
                      "start": 329,
                      "end": 361
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 322,
                    "end": 361
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IntrinsicClassAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 411
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
                              "start": 412,
                              "end": 413
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 412,
                            "end": 413
                          }
                        ],
                        "start": 411,
                        "end": 414
                      },
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 415,
                        "end": 417
                      },
                      "declare": false,
                      "start": 377,
                      "end": 417
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 370,
                    "end": 417
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 455
                      },
                      "typeParameters": null,
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
                              "name": "div",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 472,
                              "end": 475
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
                                      "name": "className",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 479,
                                      "end": 488
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 490,
                                        "end": 496
                                      },
                                      "start": 488,
                                      "end": 496
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 479,
                                    "end": 496
                                  }
                                ],
                                "start": 477,
                                "end": 498
                              },
                              "start": 475,
                              "end": 498
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 472,
                            "end": 498
                          }
                        ],
                        "start": 458,
                        "end": 508
                      },
                      "declare": false,
                      "start": 433,
                      "end": 508
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 426,
                    "end": 508
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WithCSSProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 666,
                        "end": 677
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
                              "start": 678,
                              "end": 679
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 678,
                            "end": 679
                          }
                        ],
                        "start": 677,
                        "end": 680
                      },
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 683,
                              "end": 684
                            },
                            "typeArguments": null,
                            "start": 683,
                            "end": 684
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
                                  "name": "css",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 689,
                                  "end": 692
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 694,
                                    "end": 700
                                  },
                                  "start": 692,
                                  "end": 700
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 689,
                                "end": 700
                              }
                            ],
                            "start": 687,
                            "end": 702
                          }
                        ],
                        "start": 683,
                        "end": 702
                      },
                      "declare": false,
                      "start": 661,
                      "end": 702
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 654,
                    "end": 702
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LibraryManagedAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 723,
                        "end": 747
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 748,
                              "end": 749
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 748,
                            "end": 749
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 752
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 751,
                            "end": 752
                          }
                        ],
                        "start": 747,
                        "end": 753
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WithCSSProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 767
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
                                "start": 768,
                                "end": 769
                              },
                              "typeArguments": null,
                              "start": 768,
                              "end": 769
                            }
                          ],
                          "start": 767,
                          "end": 770
                        },
                        "start": 756,
                        "end": 770
                      },
                      "declare": false,
                      "start": 718,
                      "end": 770
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 711,
                    "end": 770
                  }
                ],
                "start": 128,
                "end": 777
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 114,
              "end": 777
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 107,
            "end": 777
          }
        ],
        "start": 101,
        "end": 779
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 87,
      "end": 779
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
            "name": "Comp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                              "name": "className",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 807,
                              "end": 816
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 819,
                                "end": 825
                              },
                              "start": 817,
                              "end": 825
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 807,
                            "end": 825
                          }
                        ],
                        "start": 805,
                        "end": 827
                      },
                      "start": 803,
                      "end": 827
                    },
                    "start": 802,
                    "end": 827
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 832,
                    "end": 836
                  },
                  "start": 829,
                  "end": 836
                },
                "start": 801,
                "end": 836
              },
              "start": 799,
              "end": 836
            },
            "start": 795,
            "end": 836
          },
          "init": null,
          "definite": false,
          "start": 795,
          "end": 836
        }
      ],
      "declare": true,
      "start": 781,
      "end": 839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Comp",
            "start": 840,
            "end": 844
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "css",
                "start": 845,
                "end": 848
              },
              "value": {
                "type": "Literal",
                "value": "color:hotpink;",
                "raw": "\"color:hotpink;\"",
                "start": 849,
                "end": 865
              },
              "start": 845,
              "end": 865
            }
          ],
          "selfClosing": true,
          "start": 839,
          "end": 868
        },
        "children": [],
        "closingElement": null,
        "start": 839,
        "end": 868
      },
      "directive": null,
      "start": 839,
      "end": 868
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 14,
  "end": 868
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 27,
    "end": 31
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 32,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 41,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 73,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 114,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 145,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 174,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 181,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 191,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 215,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 222,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 232,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 269,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 276,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 286,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 329,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "IntrinsicAttributes",
    "start": 339,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 370,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 377,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "IntrinsicClassAttributes",
    "start": 387,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 412,
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
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 426,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 433,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 438,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 479,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 654,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 661,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "WithCSSProp",
    "start": 666,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "css",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 711,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 718,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 723,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "WithCSSProp",
    "start": 756,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 781,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 789,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 807,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 819,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 829,
    "end": 831
  },
  {
    "type": "Null",
    "value": "null",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 840,
    "end": 844
  },
  {
    "type": "JSXIdentifier",
    "value": "css",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "JSXText",
    "value": "\"color:hotpink;\"",
    "start": 849,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 867,
    "end": 868
  }
]
```
