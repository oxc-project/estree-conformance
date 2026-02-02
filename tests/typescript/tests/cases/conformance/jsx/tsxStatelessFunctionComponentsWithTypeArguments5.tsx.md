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
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 104
          }
        ],
        "start": 102,
        "end": 105
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "typeArguments": null,
              "start": 109,
              "end": 110
            },
            "start": 107,
            "end": 110
          },
          "start": 106,
          "end": 110
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
              "start": 113,
              "end": 116
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 124
            },
            "start": 113,
            "end": 124
          },
          "typeArguments": null,
          "start": 113,
          "end": 124
        },
        "start": 111,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 150
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
              "start": 151,
              "end": 152
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 167
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 169,
                      "end": 175
                    },
                    "start": 167,
                    "end": 175
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 163,
                  "end": 175
                }
              ],
              "start": 161,
              "end": 177
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 151,
            "end": 177
          }
        ],
        "start": 150,
        "end": 178
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 184,
                "end": 185
              },
              "typeArguments": null,
              "start": 184,
              "end": 185
            },
            "start": 182,
            "end": 185
          },
          "start": 179,
          "end": 185
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 199
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Component",
                      "start": 203,
                      "end": 212
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 220
                        },
                        "start": 213,
                        "end": 221
                      }
                    ],
                    "selfClosing": true,
                    "start": 202,
                    "end": 224
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 202,
                  "end": 224
                },
                "definite": false,
                "start": 197,
                "end": 224
              }
            ],
            "declare": false,
            "start": 193,
            "end": 225
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 236
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Component",
                      "start": 240,
                      "end": 249
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 254,
                          "end": 257
                        },
                        "start": 250,
                        "end": 258
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop1",
                          "start": 259,
                          "end": 264
                        },
                        "value": null,
                        "start": 259,
                        "end": 264
                      }
                    ],
                    "selfClosing": true,
                    "start": 239,
                    "end": 267
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 239,
                  "end": 267
                },
                "definite": false,
                "start": 234,
                "end": 267
              }
            ],
            "declare": false,
            "start": 230,
            "end": 268
          }
        ],
        "start": 187,
        "end": 270
      },
      "expression": false,
      "start": 126,
      "end": 270
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentSpecific",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 306
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 307,
            "end": 308
          }
        ],
        "start": 306,
        "end": 309
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 319
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 322
                      },
                      "typeArguments": null,
                      "start": 321,
                      "end": 322
                    },
                    "start": 319,
                    "end": 322
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 315,
                  "end": 322
                }
              ],
              "start": 313,
              "end": 324
            },
            "start": 311,
            "end": 324
          },
          "start": 310,
          "end": 324
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
              "start": 327,
              "end": 330
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 338
            },
            "start": 327,
            "end": 338
          },
          "typeArguments": null,
          "start": 327,
          "end": 338
        },
        "start": 325,
        "end": 338
      },
      "body": null,
      "expression": false,
      "start": 272,
      "end": 339
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentSpecific1",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 375
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 376,
            "end": 377
          }
        ],
        "start": 375,
        "end": 378
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 388
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 390,
                        "end": 391
                      },
                      "typeArguments": null,
                      "start": 390,
                      "end": 391
                    },
                    "start": 388,
                    "end": 391
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 384,
                  "end": 392
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\"",
                    "start": 393,
                    "end": 406
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 408,
                      "end": 414
                    },
                    "start": 406,
                    "end": 414
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 393,
                  "end": 414
                }
              ],
              "start": 382,
              "end": 416
            },
            "start": 380,
            "end": 416
          },
          "start": 379,
          "end": 416
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
              "start": 419,
              "end": 422
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 430
            },
            "start": 419,
            "end": 430
          },
          "typeArguments": null,
          "start": 419,
          "end": 430
        },
        "start": 417,
        "end": 430
      },
      "body": null,
      "expression": false,
      "start": 340,
      "end": 431
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 445
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
              "start": 446,
              "end": 447
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 462
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 464,
                      "end": 470
                    },
                    "start": 462,
                    "end": 470
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 458,
                  "end": 470
                }
              ],
              "start": 456,
              "end": 472
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 446,
            "end": 472
          }
        ],
        "start": 445,
        "end": 473
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 479,
                "end": 480
              },
              "typeArguments": null,
              "start": 479,
              "end": 480
            },
            "start": 477,
            "end": 480
          },
          "start": 474,
          "end": 480
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 494
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "start": 498,
                      "end": 515
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 520,
                          "end": 523
                        },
                        "start": 516,
                        "end": 524
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 525,
                          "end": 536
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 537,
                          "end": 541
                        },
                        "start": 525,
                        "end": 541
                      }
                    ],
                    "selfClosing": true,
                    "start": 497,
                    "end": 544
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 497,
                  "end": 544
                },
                "definite": false,
                "start": 492,
                "end": 544
              }
            ],
            "declare": false,
            "start": 488,
            "end": 545
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 572
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific1",
                      "start": 576,
                      "end": 594
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 599,
                          "end": 602
                        },
                        "start": 595,
                        "end": 603
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 604,
                          "end": 615
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 617,
                            "end": 619
                          },
                          "start": 616,
                          "end": 620
                        },
                        "start": 604,
                        "end": 620
                      }
                    ],
                    "selfClosing": true,
                    "start": 575,
                    "end": 623
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 575,
                  "end": 623
                },
                "definite": false,
                "start": 570,
                "end": 623
              }
            ],
            "declare": false,
            "start": 566,
            "end": 624
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 651
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "start": 655,
                      "end": 672
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 677,
                          "end": 680
                        },
                        "start": 673,
                        "end": 681
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop",
                          "start": 682,
                          "end": 686
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 687,
                          "end": 694
                        },
                        "start": 682,
                        "end": 694
                      }
                    ],
                    "selfClosing": true,
                    "start": 654,
                    "end": 697
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 654,
                  "end": 697
                },
                "definite": false,
                "start": 649,
                "end": 697
              }
            ],
            "declare": false,
            "start": 645,
            "end": 698
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 727
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "start": 731,
                      "end": 748
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 753,
                          "end": 756
                        },
                        "start": 749,
                        "end": 757
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop1",
                          "start": 758,
                          "end": 763
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 764,
                          "end": 771
                        },
                        "start": 758,
                        "end": 771
                      }
                    ],
                    "selfClosing": true,
                    "start": 730,
                    "end": 774
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 730,
                  "end": 774
                },
                "definite": false,
                "start": 725,
                "end": 774
              }
            ],
            "declare": false,
            "start": 721,
            "end": 775
          }
        ],
        "start": 482,
        "end": 795
      },
      "expression": false,
      "start": 433,
      "end": 795
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 795
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
    "value": "Component",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 126,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "createComponent",
    "start": 135,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 203,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 214,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 239,
    "end": 240
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 240,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 251,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "JSXIdentifier",
    "value": "prop1",
    "start": 259,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 272,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 280,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "ComponentSpecific",
    "start": 289,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 340,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 348,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "ComponentSpecific1",
    "start": 357,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 393,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 433,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 448,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 488,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific",
    "start": 498,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 525,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "let",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific1",
    "start": 576,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 596,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 604,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 649,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 654,
    "end": 655
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific",
    "start": 655,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 686,
    "end": 687
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 721,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 730,
    "end": 731
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific",
    "start": 731,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 750,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "JSXIdentifier",
    "value": "prop1",
    "start": 758,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 764,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  }
]
```
