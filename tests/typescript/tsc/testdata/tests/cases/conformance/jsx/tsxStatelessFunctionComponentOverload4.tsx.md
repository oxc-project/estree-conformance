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
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
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
              "start": 104,
              "end": 107
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "start": 104,
            "end": 115
          },
          "typeArguments": null,
          "start": 104,
          "end": 115
        },
        "start": 102,
        "end": 115
      },
      "body": null,
      "expression": false,
      "start": 75,
      "end": 116
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 142
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 149
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    },
                    "start": 149,
                    "end": 157
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 147,
                  "end": 158
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 162
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 164,
                      "end": 170
                    },
                    "start": 162,
                    "end": 170
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 159,
                  "end": 170
                }
              ],
              "start": 146,
              "end": 171
            },
            "start": 144,
            "end": 171
          },
          "start": 143,
          "end": 171
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
              "start": 174,
              "end": 177
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 185
            },
            "start": 174,
            "end": 185
          },
          "typeArguments": null,
          "start": 174,
          "end": 185
        },
        "start": 172,
        "end": 185
      },
      "body": null,
      "expression": false,
      "start": 117,
      "end": 186
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 195
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 206
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 208,
                  "end": 210
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 204,
                "end": 210
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 219
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 221,
                  "end": 228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 216,
                "end": 228
              }
            ],
            "start": 198,
            "end": 230
          },
          "definite": false,
          "start": 192,
          "end": 230
        }
      ],
      "declare": false,
      "start": 188,
      "end": 230
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 241,
                "end": 244
              },
              "start": 239,
              "end": 244
            },
            "start": 235,
            "end": 244
          },
          "init": null,
          "definite": false,
          "start": 235,
          "end": 244
        }
      ],
      "declare": false,
      "start": 231,
      "end": 245
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
            "name": "c0",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 264
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 268,
                "end": 276
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extraProp",
                    "start": 277,
                    "end": 286
                  },
                  "value": null,
                  "start": 277,
                  "end": 286
                }
              ],
              "selfClosing": true,
              "start": 267,
              "end": 289
            },
            "children": [],
            "closingElement": null,
            "start": 267,
            "end": 289
          },
          "definite": false,
          "start": 262,
          "end": 289
        }
      ],
      "declare": false,
      "start": 256,
      "end": 290
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
            "start": 317,
            "end": 319
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 323,
                "end": 331
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 332,
                    "end": 334
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 336,
                      "end": 338
                    },
                    "start": 335,
                    "end": 339
                  },
                  "start": 332,
                  "end": 339
                }
              ],
              "selfClosing": true,
              "start": 322,
              "end": 341
            },
            "children": [],
            "closingElement": null,
            "start": 322,
            "end": 341
          },
          "definite": false,
          "start": 317,
          "end": 341
        }
      ],
      "declare": false,
      "start": 311,
      "end": 342
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 373
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 377,
                "end": 385
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 393
                  },
                  "start": 386,
                  "end": 394
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy1",
                    "start": 395,
                    "end": 398
                  },
                  "value": null,
                  "start": 395,
                  "end": 398
                }
              ],
              "selfClosing": true,
              "start": 376,
              "end": 401
            },
            "children": [],
            "closingElement": null,
            "start": 376,
            "end": 401
          },
          "definite": false,
          "start": 371,
          "end": 401
        }
      ],
      "declare": false,
      "start": 365,
      "end": 402
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 433
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 437,
                "end": 445
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 453
                  },
                  "start": 446,
                  "end": 454
                },
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
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 465
                        },
                        "value": {
                          "type": "Literal",
                          "value": "extra attr",
                          "raw": "\"extra attr\"",
                          "start": 467,
                          "end": 479
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 460,
                        "end": 479
                      }
                    ],
                    "start": 459,
                    "end": 480
                  },
                  "start": 455,
                  "end": 481
                }
              ],
              "selfClosing": true,
              "start": 436,
              "end": 484
            },
            "children": [],
            "closingElement": null,
            "start": 436,
            "end": 484
          },
          "definite": false,
          "start": 431,
          "end": 484
        }
      ],
      "declare": false,
      "start": 425,
      "end": 485
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 543
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 547,
                "end": 555
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 560,
                    "end": 563
                  },
                  "start": 556,
                  "end": 564
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 565,
                    "end": 567
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10000,
                      "raw": "10000",
                      "start": 569,
                      "end": 574
                    },
                    "start": 568,
                    "end": 575
                  },
                  "start": 565,
                  "end": 575
                }
              ],
              "selfClosing": true,
              "start": 546,
              "end": 578
            },
            "children": [],
            "closingElement": null,
            "start": 546,
            "end": 578
          },
          "definite": false,
          "start": 541,
          "end": 578
        }
      ],
      "declare": false,
      "start": 535,
      "end": 579
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 608
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 612,
                "end": 620
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 628
                  },
                  "start": 621,
                  "end": 629
                },
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
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 635,
                          "end": 637
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 639,
                          "end": 643
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 635,
                        "end": 643
                      }
                    ],
                    "start": 634,
                    "end": 644
                  },
                  "start": 630,
                  "end": 645
                }
              ],
              "selfClosing": true,
              "start": 611,
              "end": 648
            },
            "children": [],
            "closingElement": null,
            "start": 611,
            "end": 648
          },
          "definite": false,
          "start": 606,
          "end": 648
        }
      ],
      "declare": false,
      "start": 600,
      "end": 649
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
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 681
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 685,
                "end": 693
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 702
                  },
                  "start": 694,
                  "end": 703
                },
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
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 709,
                          "end": 714
                        },
                        "value": {
                          "type": "Literal",
                          "value": "extra attr",
                          "raw": "\"extra attr\"",
                          "start": 716,
                          "end": 728
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 709,
                        "end": 728
                      }
                    ],
                    "start": 708,
                    "end": 729
                  },
                  "start": 704,
                  "end": 730
                }
              ],
              "selfClosing": true,
              "start": 684,
              "end": 733
            },
            "children": [],
            "closingElement": null,
            "start": 684,
            "end": 733
          },
          "definite": false,
          "start": 679,
          "end": 733
        }
      ],
      "declare": false,
      "start": 673,
      "end": 734
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 830
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 834,
                "end": 842
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 851
                  },
                  "start": 843,
                  "end": 852
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 853,
                    "end": 855
                  },
                  "value": null,
                  "start": 853,
                  "end": 855
                }
              ],
              "selfClosing": true,
              "start": 833,
              "end": 858
            },
            "children": [],
            "closingElement": null,
            "start": 833,
            "end": 858
          },
          "definite": false,
          "start": 828,
          "end": 858
        }
      ],
      "declare": false,
      "start": 822,
      "end": 859
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 965,
        "end": 980
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
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
                    "type": "Literal",
                    "value": "extra-data",
                    "raw": "\"extra-data\"",
                    "start": 985,
                    "end": 997
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 999,
                      "end": 1005
                    },
                    "start": 997,
                    "end": 1005
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 985,
                  "end": 1005
                }
              ],
              "start": 984,
              "end": 1006
            },
            "start": 982,
            "end": 1006
          },
          "start": 981,
          "end": 1006
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
              "start": 1009,
              "end": 1012
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1020
            },
            "start": 1009,
            "end": 1020
          },
          "typeArguments": null,
          "start": 1009,
          "end": 1020
        },
        "start": 1007,
        "end": 1020
      },
      "body": null,
      "expression": false,
      "start": 948,
      "end": 1021
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1054
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1059,
                    "end": 1061
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1063,
                      "end": 1069
                    },
                    "start": 1061,
                    "end": 1069
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1059,
                  "end": 1070
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1071,
                    "end": 1080
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1083,
                      "end": 1089
                    },
                    "start": 1081,
                    "end": 1089
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1071,
                  "end": 1089
                }
              ],
              "start": 1058,
              "end": 1090
            },
            "start": 1056,
            "end": 1090
          },
          "start": 1055,
          "end": 1090
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
              "start": 1093,
              "end": 1096
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1104
            },
            "start": 1093,
            "end": 1104
          },
          "typeArguments": null,
          "start": 1093,
          "end": 1104
        },
        "start": 1091,
        "end": 1104
      },
      "body": null,
      "expression": false,
      "start": 1022,
      "end": 1105
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
            "start": 1122,
            "end": 1124
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOneThing",
                "start": 1128,
                "end": 1143
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra-data",
                    "start": 1144,
                    "end": 1154
                  },
                  "value": null,
                  "start": 1144,
                  "end": 1154
                }
              ],
              "selfClosing": true,
              "start": 1127,
              "end": 1157
            },
            "children": [],
            "closingElement": null,
            "start": 1127,
            "end": 1157
          },
          "definite": false,
          "start": 1122,
          "end": 1157
        }
      ],
      "declare": false,
      "start": 1116,
      "end": 1157
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1166
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOneThing",
                "start": 1170,
                "end": 1185
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 1186,
                    "end": 1188
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1189,
                    "end": 1196
                  },
                  "start": 1186,
                  "end": 1196
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "direction",
                    "start": 1197,
                    "end": 1206
                  },
                  "value": {
                    "type": "Literal",
                    "value": "left",
                    "raw": "\"left\"",
                    "start": 1207,
                    "end": 1213
                  },
                  "start": 1197,
                  "end": 1213
                }
              ],
              "selfClosing": true,
              "start": 1169,
              "end": 1216
            },
            "children": [],
            "closingElement": null,
            "start": 1169,
            "end": 1216
          },
          "definite": false,
          "start": 1164,
          "end": 1216
        }
      ],
      "declare": false,
      "start": 1158,
      "end": 1216
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1235,
        "end": 1250
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1255,
                    "end": 1257
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1260,
                      "end": 1266
                    },
                    "start": 1258,
                    "end": 1266
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1255,
                  "end": 1267
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1268,
                    "end": 1270
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1273,
                      "end": 1279
                    },
                    "start": 1271,
                    "end": 1279
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1268,
                  "end": 1279
                }
              ],
              "start": 1254,
              "end": 1280
            },
            "start": 1252,
            "end": 1280
          },
          "start": 1251,
          "end": 1280
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
              "start": 1283,
              "end": 1286
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1287,
              "end": 1294
            },
            "start": 1283,
            "end": 1294
          },
          "typeArguments": null,
          "start": 1283,
          "end": 1294
        },
        "start": 1281,
        "end": 1294
      },
      "body": null,
      "expression": false,
      "start": 1218,
      "end": 1295
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1313,
        "end": 1328
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1335
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1338,
                      "end": 1344
                    },
                    "start": 1336,
                    "end": 1344
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1333,
                  "end": 1345
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1346,
                    "end": 1348
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1351,
                      "end": 1357
                    },
                    "start": 1349,
                    "end": 1357
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1346,
                  "end": 1358
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
                    "start": 1359,
                    "end": 1367
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
                          "start": 1369,
                          "end": 1372
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1373,
                          "end": 1380
                        },
                        "start": 1369,
                        "end": 1380
                      },
                      "typeArguments": null,
                      "start": 1369,
                      "end": 1380
                    },
                    "start": 1367,
                    "end": 1380
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1359,
                  "end": 1380
                }
              ],
              "start": 1332,
              "end": 1381
            },
            "start": 1330,
            "end": 1381
          },
          "start": 1329,
          "end": 1381
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
              "start": 1384,
              "end": 1387
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1395
            },
            "start": 1384,
            "end": 1395
          },
          "typeArguments": null,
          "start": 1384,
          "end": 1395
        },
        "start": 1382,
        "end": 1395
      },
      "body": null,
      "expression": false,
      "start": 1296,
      "end": 1396
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1414,
        "end": 1429
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1434,
                    "end": 1436
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1438,
                      "end": 1445
                    },
                    "start": 1436,
                    "end": 1445
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1434,
                  "end": 1446
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1447,
                    "end": 1449
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1452,
                      "end": 1458
                    },
                    "start": 1450,
                    "end": 1458
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1447,
                  "end": 1459
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1462
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1464,
                      "end": 1471
                    },
                    "start": 1462,
                    "end": 1471
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1460,
                  "end": 1471
                }
              ],
              "start": 1433,
              "end": 1472
            },
            "start": 1431,
            "end": 1472
          },
          "start": 1430,
          "end": 1472
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
              "start": 1475,
              "end": 1478
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1479,
              "end": 1486
            },
            "start": 1475,
            "end": 1486
          },
          "typeArguments": null,
          "start": 1475,
          "end": 1486
        },
        "start": 1473,
        "end": 1486
      },
      "body": null,
      "expression": false,
      "start": 1397,
      "end": 1487
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1504,
            "end": 1506
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1510,
                "end": 1525
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1526,
                    "end": 1528
                  },
                  "value": null,
                  "start": 1526,
                  "end": 1528
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y3",
                    "start": 1529,
                    "end": 1531
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1532,
                    "end": 1539
                  },
                  "start": 1529,
                  "end": 1539
                }
              ],
              "selfClosing": true,
              "start": 1509,
              "end": 1541
            },
            "children": [],
            "closingElement": null,
            "start": 1509,
            "end": 1541
          },
          "definite": false,
          "start": 1504,
          "end": 1541
        }
      ],
      "declare": false,
      "start": 1498,
      "end": 1541
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1550
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1554,
                "end": 1569
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1570,
                    "end": 1572
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1573,
                    "end": 1580
                  },
                  "start": 1570,
                  "end": 1580
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y2",
                    "start": 1581,
                    "end": 1583
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 1585,
                      "end": 1589
                    },
                    "start": 1584,
                    "end": 1590
                  },
                  "start": 1581,
                  "end": 1590
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y3",
                    "start": 1591,
                    "end": 1593
                  },
                  "value": null,
                  "start": 1591,
                  "end": 1593
                }
              ],
              "selfClosing": true,
              "start": 1553,
              "end": 1596
            },
            "children": [],
            "closingElement": null,
            "start": 1553,
            "end": 1596
          },
          "definite": false,
          "start": 1548,
          "end": 1596
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1596
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1603,
            "end": 1605
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1609,
                "end": 1624
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1625,
                    "end": 1627
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1628,
                    "end": 1635
                  },
                  "start": 1625,
                  "end": 1635
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y2",
                    "start": 1636,
                    "end": 1638
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 1640,
                      "end": 1644
                    },
                    "start": 1639,
                    "end": 1645
                  },
                  "start": 1636,
                  "end": 1645
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1646,
                    "end": 1654
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 1655,
                    "end": 1659
                  },
                  "start": 1646,
                  "end": 1659
                }
              ],
              "selfClosing": true,
              "start": 1608,
              "end": 1662
            },
            "children": [],
            "closingElement": null,
            "start": 1608,
            "end": 1662
          },
          "definite": false,
          "start": 1603,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1597,
      "end": 1662
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1669,
            "end": 1671
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1675,
                "end": 1690
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y1",
                    "start": 1691,
                    "end": 1693
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1694,
                    "end": 1701
                  },
                  "start": 1691,
                  "end": 1701
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y2",
                    "start": 1702,
                    "end": 1704
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 1706,
                      "end": 1710
                    },
                    "start": 1705,
                    "end": 1711
                  },
                  "start": 1702,
                  "end": 1711
                }
              ],
              "selfClosing": false,
              "start": 1674,
              "end": 1712
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hi",
                "raw": "Hi",
                "start": 1712,
                "end": 1714
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TestingOptional",
                "start": 1716,
                "end": 1731
              },
              "start": 1714,
              "end": 1732
            },
            "start": 1674,
            "end": 1732
          },
          "definite": false,
          "start": 1669,
          "end": 1732
        }
      ],
      "declare": false,
      "start": 1663,
      "end": 1732
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 1732
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
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 117,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 134,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 159,
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
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 208,
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
    "value": "yy1",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 268,
    "end": 276
  },
  {
    "type": "JSXIdentifier",
    "value": "extraProp",
    "start": 277,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 323,
    "end": 331
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 365,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 377,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "JSXIdentifier",
    "value": "yy1",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 437,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "String",
    "value": "\"extra attr\"",
    "start": 467,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 535,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 547,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Numeric",
    "value": "10000",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 600,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 612,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 631,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 646,
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
    "value": "const",
    "start": 673,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 685,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 709,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "String",
    "value": "\"extra attr\"",
    "start": 716,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 822,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 834,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 844,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 948,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 956,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "TestingOneThing",
    "start": 965,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "String",
    "value": "\"extra-data\"",
    "start": 985,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1013,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1022,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1030,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "TestingOneThing",
    "start": 1039,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1059,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 1071,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1097,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1122,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOneThing",
    "start": 1128,
    "end": 1143
  },
  {
    "type": "JSXIdentifier",
    "value": "extra-data",
    "start": 1144,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOneThing",
    "start": 1170,
    "end": 1185
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "JSXIdentifier",
    "value": "direction",
    "start": 1197,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "JSXText",
    "value": "\"left\"",
    "start": 1207,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1235,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1255,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1260,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1268,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1287,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1296,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1304,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1313,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1346,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1359,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1373,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1388,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1397,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1405,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "TestingOptional",
    "start": 1414,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1434,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1438,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1464,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1479,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1498,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1504,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1510,
    "end": 1525
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1526,
    "end": 1528
  },
  {
    "type": "JSXIdentifier",
    "value": "y3",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1532,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1554,
    "end": 1569
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1570,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1573,
    "end": 1580
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1585,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "JSXIdentifier",
    "value": "y3",
    "start": 1591,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1609,
    "end": 1624
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1625,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1628,
    "end": 1635
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1636,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1640,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1646,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1663,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 1669,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1675,
    "end": 1690
  },
  {
    "type": "JSXIdentifier",
    "value": "y1",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1694,
    "end": 1701
  },
  {
    "type": "JSXIdentifier",
    "value": "y2",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 1706,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "JSXText",
    "value": "Hi",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "JSXIdentifier",
    "value": "TestingOptional",
    "start": 1716,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1731,
    "end": 1732
  }
]
```
