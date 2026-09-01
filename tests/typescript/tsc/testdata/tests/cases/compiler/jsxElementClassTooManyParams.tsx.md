__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
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
                "start": 69,
                "end": 93
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 100
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 94,
                    "end": 100
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TOther",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 108
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 109,
                      "end": 114
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 102,
                    "end": 114
                  }
                ],
                "start": 93,
                "end": 115
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
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 138
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 138
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 126,
                    "end": 139
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 152
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TOther",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 161
                        },
                        "typeArguments": null,
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 148,
                    "end": 162
                  }
                ],
                "start": 116,
                "end": 168
              },
              "declare": false,
              "start": 59,
              "end": 168
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 52,
            "end": 168
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
                "start": 190,
                "end": 202
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 218
                  },
                  "typeArguments": null,
                  "start": 211,
                  "end": 218
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 219,
                "end": 221
              },
              "declare": false,
              "start": 180,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 173,
            "end": 221
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
                "start": 243,
                "end": 268
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
                      "start": 271,
                      "end": 276
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 278,
                        "end": 280
                      },
                      "start": 276,
                      "end": 280
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 271,
                    "end": 281
                  }
                ],
                "start": 269,
                "end": 283
              },
              "declare": false,
              "start": 233,
              "end": 283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 226,
            "end": 283
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
                "start": 305,
                "end": 329
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
                      "start": 332,
                      "end": 340
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 342,
                        "end": 344
                      },
                      "start": 340,
                      "end": 344
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 332,
                    "end": 345
                  }
                ],
                "start": 330,
                "end": 347
              },
              "declare": false,
              "start": 295,
              "end": 347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 288,
            "end": 347
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
                "start": 369,
                "end": 388
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 389,
                "end": 391
              },
              "declare": false,
              "start": 359,
              "end": 391
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 352,
            "end": 391
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 430
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 439,
                            "end": 445
                          },
                          "start": 437,
                          "end": 445
                        },
                        "start": 434,
                        "end": 445
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 455
                        },
                        "typeArguments": null,
                        "start": 448,
                        "end": 455
                      },
                      "start": 446,
                      "end": 455
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 433,
                    "end": 455
                  }
                ],
                "start": 431,
                "end": 457
              },
              "declare": false,
              "start": 403,
              "end": 457
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 396,
            "end": 457
          }
        ],
        "start": 14,
        "end": 459
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 459
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElemClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 475
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
              "start": 476,
              "end": 477
            },
            "constraint": {
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
                    "start": 487,
                    "end": 488
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 490,
                      "end": 496
                    },
                    "start": 488,
                    "end": 496
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 487,
                  "end": 496
                }
              ],
              "start": 486,
              "end": 497
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 476,
            "end": 497
          }
        ],
        "start": 475,
        "end": 498
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 513
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 526
            },
            "optional": false,
            "computed": false,
            "start": 510,
            "end": 526
          },
          "typeArguments": null,
          "start": 510,
          "end": 526
        }
      ],
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
              "start": 533,
              "end": 544
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 560
                        },
                        "typeArguments": null,
                        "start": 559,
                        "end": 560
                      },
                      "start": 557,
                      "end": 560
                    },
                    "start": 552,
                    "end": 560
                  },
                  "readonly": false,
                  "static": false,
                  "start": 545,
                  "end": 560
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 562,
                "end": 564
              },
              "expression": false,
              "start": 544,
              "end": 564
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 533,
            "end": 564
          }
        ],
        "start": 527,
        "end": 566
      },
      "abstract": false,
      "declare": false,
      "start": 460,
      "end": 566
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
            "name": "elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 577
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemClass",
                "start": 581,
                "end": 590
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 591,
                    "end": 592
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 594,
                      "end": 596
                    },
                    "start": 593,
                    "end": 597
                  },
                  "start": 591,
                  "end": 597
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 598,
                    "end": 599
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 24,
                      "raw": "24",
                      "start": 601,
                      "end": 603
                    },
                    "start": 600,
                    "end": 604
                  },
                  "start": 598,
                  "end": 604
                }
              ],
              "selfClosing": true,
              "start": 580,
              "end": 607
            },
            "children": [],
            "closingElement": null,
            "start": 580,
            "end": 607
          },
          "definite": false,
          "start": 573,
          "end": 607
        }
      ],
      "declare": false,
      "start": 567,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 607
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 37,
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
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 59,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "IntrinsicClassAttributes",
    "start": 69,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "TClass",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "TOther",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "TClass",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "TOther",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 173,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 180,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 190,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 203,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 211,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 226,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 233,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 243,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 288,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 295,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 305,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 352,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 359,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "IntrinsicAttributes",
    "start": 369,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 396,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 403,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 413,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 448,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 460,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "ElemClass",
    "start": 466,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 478,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
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
    "value": "number",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 499,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 514,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 533,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 545,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 552,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 567,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemClass",
    "start": 581,
    "end": 590
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "24",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  }
]
```
