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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 92
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
              "start": 97,
              "end": 105
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 111,
                        "end": 117
                      },
                      "start": 109,
                      "end": 117
                    },
                    "start": 108,
                    "end": 117
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 122,
                    "end": 128
                  },
                  "start": 119,
                  "end": 128
                },
                "start": 107,
                "end": 128
              },
              "start": 105,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 129
          }
        ],
        "start": 93,
        "end": 131
      },
      "declare": false,
      "start": 77,
      "end": 131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 153
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 166
                },
                "typeArguments": null,
                "start": 161,
                "end": 166
              },
              "start": 159,
              "end": 166
            },
            "start": 154,
            "end": 166
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 179,
                  "end": 181
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 181,
                  "end": 184
                },
                "start": 179,
                "end": 184
              },
              "start": 172,
              "end": 185
            }
          ],
          "start": 168,
          "end": 187
        },
        "expression": false,
        "start": 140,
        "end": 187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 133,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 221,
                "end": 225
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 220,
              "end": 226
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 226,
                "end": 229
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "id": null,
                  "generator": false,
                  "start": 230,
                  "end": 236
                },
                "start": 229,
                "end": 237
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 237,
                "end": 238
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 240,
                "end": 244
              },
              "start": 238,
              "end": 245
            },
            "start": 220,
            "end": 245
          },
          "definite": false,
          "start": 216,
          "end": 245
        }
      ],
      "declare": false,
      "start": 212,
      "end": 245
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 311,
                "end": 315
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 310,
              "end": 316
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  Hello unexpected text!\n",
                "raw": "\n  Hello unexpected text!\n",
                "start": 316,
                "end": 342
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 344,
                "end": 348
              },
              "start": 342,
              "end": 349
            },
            "start": 310,
            "end": 349
          },
          "definite": false,
          "start": 306,
          "end": 349
        }
      ],
      "declare": false,
      "start": 302,
      "end": 349
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 411,
                "end": 415
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 410,
              "end": 416
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 416,
                "end": 419
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 421
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 425,
                      "end": 427
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 431
                    },
                    "start": 425,
                    "end": 431
                  },
                  "id": null,
                  "generator": false,
                  "start": 420,
                  "end": 431
                },
                "start": 419,
                "end": 432
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 432,
                "end": 435
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 437
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 441,
                      "end": 443
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 447
                    },
                    "start": 441,
                    "end": 447
                  },
                  "id": null,
                  "generator": false,
                  "start": 436,
                  "end": 447
                },
                "start": 435,
                "end": 448
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 448,
                "end": 449
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 451,
                "end": 455
              },
              "start": 449,
              "end": 456
            },
            "start": 410,
            "end": 456
          },
          "definite": false,
          "start": 406,
          "end": 456
        }
      ],
      "declare": false,
      "start": 402,
      "end": 456
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsArr",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 476
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
              "start": 481,
              "end": 489
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 496,
                          "end": 502
                        },
                        "start": 494,
                        "end": 502
                      },
                      "start": 493,
                      "end": 502
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 507,
                      "end": 513
                    },
                    "start": 504,
                    "end": 513
                  },
                  "start": 492,
                  "end": 513
                },
                "start": 491,
                "end": 516
              },
              "start": 489,
              "end": 516
            },
            "accessibility": null,
            "static": false,
            "start": 481,
            "end": 517
          }
        ],
        "start": 477,
        "end": 519
      },
      "declare": false,
      "start": 458,
      "end": 519
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah2",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 542
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsArr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 558
                },
                "typeArguments": null,
                "start": 550,
                "end": 558
              },
              "start": 548,
              "end": 558
            },
            "start": 543,
            "end": 558
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 571,
                  "end": 573
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 573,
                  "end": 576
                },
                "start": 571,
                "end": 576
              },
              "start": 564,
              "end": 577
            }
          ],
          "start": 560,
          "end": 579
        },
        "expression": false,
        "start": 528,
        "end": 579
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 521,
      "end": 579
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 613,
                "end": 618
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 612,
              "end": 619
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 619,
                "end": 622
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 624
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "id": null,
                  "generator": false,
                  "start": 623,
                  "end": 629
                },
                "start": 622,
                "end": 630
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 630,
                "end": 631
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 633,
                "end": 638
              },
              "start": 631,
              "end": 639
            },
            "start": 612,
            "end": 639
          },
          "definite": false,
          "start": 608,
          "end": 639
        }
      ],
      "declare": false,
      "start": 604,
      "end": 639
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 702
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 706,
                "end": 711
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 705,
              "end": 712
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  Hello unexpected text!\n",
                "raw": "\n  Hello unexpected text!\n",
                "start": 712,
                "end": 738
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 740,
                "end": 745
              },
              "start": 738,
              "end": 746
            },
            "start": 705,
            "end": 746
          },
          "definite": false,
          "start": 701,
          "end": 746
        }
      ],
      "declare": false,
      "start": 697,
      "end": 746
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 827,
                "end": 832
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 826,
              "end": 833
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 833,
                "end": 836
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 838
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "id": null,
                  "generator": false,
                  "start": 837,
                  "end": 843
                },
                "start": 836,
                "end": 844
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 844,
                "end": 847
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 849
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 853,
                    "end": 854
                  },
                  "id": null,
                  "generator": false,
                  "start": 848,
                  "end": 854
                },
                "start": 847,
                "end": 855
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 855,
                "end": 856
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 858,
                "end": 863
              },
              "start": 856,
              "end": 864
            },
            "start": 826,
            "end": 864
          },
          "definite": false,
          "start": 822,
          "end": 864
        }
      ],
      "declare": false,
      "start": 818,
      "end": 864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cb",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 873
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 880,
                "end": 886
              },
              "start": 878,
              "end": 886
            },
            "start": 877,
            "end": 886
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 891,
            "end": 897
          },
          "start": 888,
          "end": 897
        },
        "start": 876,
        "end": 897
      },
      "declare": false,
      "start": 866,
      "end": 898
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 919
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
              "start": 924,
              "end": 932
            },
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
                      "name": "Cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 936
                    },
                    "typeArguments": null,
                    "start": 934,
                    "end": 936
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 939,
                        "end": 941
                      },
                      "typeArguments": null,
                      "start": 939,
                      "end": 941
                    },
                    "start": 939,
                    "end": 943
                  }
                ],
                "start": 934,
                "end": 943
              },
              "start": 932,
              "end": 943
            },
            "accessibility": null,
            "static": false,
            "start": 924,
            "end": 944
          }
        ],
        "start": 920,
        "end": 946
      },
      "declare": false,
      "start": 899,
      "end": 946
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah3",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 969
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsMixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 987
                },
                "typeArguments": null,
                "start": 977,
                "end": 987
              },
              "start": 975,
              "end": 987
            },
            "start": 970,
            "end": 987
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 1000,
                  "end": 1002
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 1002,
                  "end": 1005
                },
                "start": 1000,
                "end": 1005
              },
              "start": 993,
              "end": 1006
            }
          ],
          "start": 989,
          "end": 1008
        },
        "expression": false,
        "start": 955,
        "end": 1008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 948,
      "end": 1008
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1038
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1042,
                "end": 1047
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 1041,
              "end": 1048
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1048,
                "end": 1051
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1052,
                      "end": 1053
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
                  },
                  "id": null,
                  "generator": false,
                  "start": 1052,
                  "end": 1058
                },
                "start": 1051,
                "end": 1059
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 1059,
                "end": 1060
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1062,
                "end": 1067
              },
              "start": 1060,
              "end": 1068
            },
            "start": 1041,
            "end": 1068
          },
          "definite": false,
          "start": 1037,
          "end": 1068
        }
      ],
      "declare": false,
      "start": 1033,
      "end": 1068
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1130,
            "end": 1131
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1135,
                "end": 1140
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 1134,
              "end": 1141
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  Hello unexpected text!\n",
                "raw": "\n  Hello unexpected text!\n",
                "start": 1141,
                "end": 1167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1169,
                "end": 1174
              },
              "start": 1167,
              "end": 1175
            },
            "start": 1134,
            "end": 1175
          },
          "definite": false,
          "start": 1130,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1126,
      "end": 1175
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1251,
            "end": 1252
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1256,
                "end": 1261
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 1255,
              "end": 1262
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1262,
                "end": 1265
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1266,
                      "end": 1267
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1271,
                    "end": 1272
                  },
                  "id": null,
                  "generator": false,
                  "start": 1266,
                  "end": 1272
                },
                "start": 1265,
                "end": 1273
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1273,
                "end": 1276
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1277,
                      "end": 1278
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1282,
                    "end": 1283
                  },
                  "id": null,
                  "generator": false,
                  "start": 1277,
                  "end": 1283
                },
                "start": 1276,
                "end": 1284
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 1284,
                "end": 1285
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1287,
                "end": 1292
              },
              "start": 1285,
              "end": 1293
            },
            "start": 1255,
            "end": 1293
          },
          "definite": false,
          "start": 1251,
          "end": 1293
        }
      ],
      "declare": false,
      "start": 1247,
      "end": 1293
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 1293
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
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 133,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 239,
    "end": 240
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "JSXText",
    "value": "\n  Hello unexpected text!\n",
    "start": 316,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 343,
    "end": 344
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 422,
    "end": 424
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 438,
    "end": 440
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 450,
    "end": 451
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 458,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "PropsArr",
    "start": 468,
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
    "value": "children",
    "start": 481,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
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
    "value": "number",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 504,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
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
    "value": "Blah2",
    "start": 537,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "PropsArr",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah2",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 625,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 632,
    "end": 633
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah2",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 705,
    "end": 706
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah2",
    "start": 706,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 711,
    "end": 712
  },
  {
    "type": "JSXText",
    "value": "\n  Hello unexpected text!\n",
    "start": 712,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 739,
    "end": 740
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah2",
    "start": 740,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 818,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah2",
    "start": 827,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 832,
    "end": 833
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 839,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 850,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 857,
    "end": 858
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah2",
    "start": 858,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 866,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "Cb",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 899,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "PropsMixed",
    "start": 909,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 924,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "Cb",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "Cb",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 948,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 955,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "Blah3",
    "start": 964,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 970,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "PropsMixed",
    "start": 977,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1002,
    "end": 1003
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
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1037,
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
    "value": "Blah3",
    "start": 1042,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah3",
    "start": 1062,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah3",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "JSXText",
    "value": "\n  Hello unexpected text!\n",
    "start": 1141,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah3",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah3",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 1262,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1268,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "JSXIdentifier",
    "value": "Blah3",
    "start": 1287,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  }
]
```
