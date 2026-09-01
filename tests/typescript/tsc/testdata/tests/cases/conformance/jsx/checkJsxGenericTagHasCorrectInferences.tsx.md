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
            "start": 54,
            "end": 59
          },
          "start": 49,
          "end": 59
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 65,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 73
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 95
          }
        ],
        "start": 93,
        "end": 96
      },
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
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 114
            },
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
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 118
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 131
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
                    "name": "cur",
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
                          "start": 139,
                          "end": 140
                        },
                        "typeArguments": null,
                        "start": 139,
                        "end": 140
                      },
                      "start": 137,
                      "end": 140
                    },
                    "start": 134,
                    "end": 140
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "typeArguments": null,
                    "start": 145,
                    "end": 146
                  },
                  "start": 142,
                  "end": 146
                },
                "start": 133,
                "end": 146
              },
              "start": 131,
              "end": 146
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 147
          }
        ],
        "start": 97,
        "end": 149
      },
      "declare": false,
      "start": 74,
      "end": 149
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 180
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 186
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 189,
              "end": 191
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 191
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 202,
              "end": 208
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 193,
            "end": 208
          }
        ],
        "start": 180,
        "end": 209
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 223
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 233
        },
        "optional": false,
        "computed": false,
        "start": 218,
        "end": 233
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 239
                },
                "typeArguments": null,
                "start": 234,
                "end": 239
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 251
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 258
                      },
                      "typeArguments": null,
                      "start": 252,
                      "end": 258
                    }
                  ],
                  "start": 251,
                  "end": 259
                },
                "start": 242,
                "end": 259
              }
            ],
            "start": 234,
            "end": 259
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 261,
            "end": 263
          }
        ],
        "start": 233,
        "end": 264
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iv",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 279
                },
                "typeArguments": null,
                "start": 273,
                "end": 279
              },
              "start": 271,
              "end": 279
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
            "start": 269,
            "end": 280
          }
        ],
        "start": 265,
        "end": 282
      },
      "abstract": false,
      "declare": true,
      "start": 150,
      "end": 282
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 289
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 293,
                "end": 309
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 310,
                    "end": 323
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
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
                            "start": 327,
                            "end": 328
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 330,
                            "end": 333
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 327,
                          "end": 333
                        }
                      ],
                      "start": 325,
                      "end": 335
                    },
                    "start": 324,
                    "end": 336
                  },
                  "start": 310,
                  "end": 336
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 337,
                    "end": 347
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 349,
                          "end": 350
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "id": null,
                      "generator": false,
                      "start": 349,
                      "end": 355
                    },
                    "start": 348,
                    "end": 356
                  },
                  "start": 337,
                  "end": 356
                }
              ],
              "selfClosing": true,
              "start": 292,
              "end": 359
            },
            "children": [],
            "closingElement": null,
            "start": 292,
            "end": 359
          },
          "definite": false,
          "start": 288,
          "end": 359
        }
      ],
      "declare": false,
      "start": 284,
      "end": 360
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 378
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 382,
                "end": 398
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 399,
                    "end": 412
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 414,
                      "end": 416
                    },
                    "start": 413,
                    "end": 417
                  },
                  "start": 399,
                  "end": 417
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 418,
                    "end": 428
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 430,
                          "end": 431
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "id": null,
                      "generator": false,
                      "start": 430,
                      "end": 436
                    },
                    "start": 429,
                    "end": 437
                  },
                  "start": 418,
                  "end": 437
                }
              ],
              "selfClosing": true,
              "start": 381,
              "end": 440
            },
            "children": [],
            "closingElement": null,
            "start": 381,
            "end": 440
          },
          "definite": false,
          "start": 377,
          "end": 440
        }
      ],
      "declare": false,
      "start": 373,
      "end": 441
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 555
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 559,
                "end": 575
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 576,
                    "end": 589
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
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
                            "start": 593,
                            "end": 594
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 596,
                            "end": 599
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 593,
                          "end": 599
                        }
                      ],
                      "start": 591,
                      "end": 601
                    },
                    "start": 590,
                    "end": 602
                  },
                  "start": 576,
                  "end": 602
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 603,
                    "end": 613
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 616
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
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
                              "start": 623,
                              "end": 624
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 626,
                                "end": 627
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 628,
                                "end": 629
                              },
                              "optional": false,
                              "computed": false,
                              "start": 626,
                              "end": 629
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 623,
                            "end": 629
                          }
                        ],
                        "start": 621,
                        "end": 631
                      },
                      "id": null,
                      "generator": false,
                      "start": 615,
                      "end": 632
                    },
                    "start": 614,
                    "end": 633
                  },
                  "start": 603,
                  "end": 633
                }
              ],
              "selfClosing": true,
              "start": 558,
              "end": 636
            },
            "children": [],
            "closingElement": null,
            "start": 558,
            "end": 636
          },
          "definite": false,
          "start": 554,
          "end": 636
        }
      ],
      "declare": false,
      "start": 550,
      "end": 637
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 655
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 659,
                "end": 675
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 676,
                    "end": 689
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
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
                            "start": 693,
                            "end": 694
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 696,
                            "end": 699
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 693,
                          "end": 699
                        }
                      ],
                      "start": 691,
                      "end": 701
                    },
                    "start": 690,
                    "end": 702
                  },
                  "start": 676,
                  "end": 702
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 703,
                    "end": 713
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 715,
                          "end": 716
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 720,
                          "end": 721
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 722,
                          "end": 723
                        },
                        "optional": false,
                        "computed": false,
                        "start": 720,
                        "end": 723
                      },
                      "id": null,
                      "generator": false,
                      "start": 715,
                      "end": 723
                    },
                    "start": 714,
                    "end": 724
                  },
                  "start": 703,
                  "end": 724
                }
              ],
              "selfClosing": true,
              "start": 658,
              "end": 727
            },
            "children": [],
            "closingElement": null,
            "start": 658,
            "end": 727
          },
          "definite": false,
          "start": 654,
          "end": 727
        }
      ],
      "declare": false,
      "start": 650,
      "end": 728
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 783
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 74,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 84,
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
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "initialValues",
    "start": 101,
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
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "nextValues",
    "start": 121,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 142,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 150,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "GenericComponent",
    "start": 164,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 224,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 242,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "iv",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293
  },
  {
    "type": "JSXIdentifier",
    "value": "GenericComponent",
    "start": 293,
    "end": 309
  },
  {
    "type": "JSXIdentifier",
    "value": "initialValues",
    "start": 310,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "JSXIdentifier",
    "value": "nextValues",
    "start": 337,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "JSXIdentifier",
    "value": "GenericComponent",
    "start": 382,
    "end": 398
  },
  {
    "type": "JSXIdentifier",
    "value": "initialValues",
    "start": 399,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "JSXIdentifier",
    "value": "nextValues",
    "start": 418,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 432,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "JSXIdentifier",
    "value": "GenericComponent",
    "start": 559,
    "end": 575
  },
  {
    "type": "JSXIdentifier",
    "value": "initialValues",
    "start": 576,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "JSXIdentifier",
    "value": "nextValues",
    "start": 603,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 650,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "JSXIdentifier",
    "value": "GenericComponent",
    "start": 659,
    "end": 675
  },
  {
    "type": "JSXIdentifier",
    "value": "initialValues",
    "start": 676,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "JSXIdentifier",
    "value": "nextValues",
    "start": 703,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 717,
    "end": 719
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  }
]
```
