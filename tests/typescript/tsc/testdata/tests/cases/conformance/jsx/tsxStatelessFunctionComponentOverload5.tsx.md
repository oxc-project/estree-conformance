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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 107
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
                "start": 114,
                "end": 122
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 125,
                  "end": 131
                },
                "start": 123,
                "end": 131
              },
              "accessibility": null,
              "static": false,
              "start": 114,
              "end": 132
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
                "start": 137,
                "end": 146
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 149,
                  "end": 155
                },
                "start": 147,
                "end": 155
              },
              "accessibility": null,
              "static": false,
              "start": 137,
              "end": 156
            }
          ],
          "start": 108,
          "end": 158
        },
        "declare": false,
        "start": 83,
        "end": 158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 76,
      "end": 158
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
          "start": 177,
          "end": 188
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
              "start": 197,
              "end": 211
            },
            "typeArguments": null,
            "start": 197,
            "end": 211
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
                "start": 218,
                "end": 225
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
                      "start": 227,
                      "end": 232
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 250
                    },
                    "start": 227,
                    "end": 250
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      }
                    ],
                    "start": 250,
                    "end": 255
                  },
                  "start": 227,
                  "end": 255
                },
                "start": 225,
                "end": 255
              },
              "accessibility": null,
              "static": false,
              "start": 218,
              "end": 256
            }
          ],
          "start": 212,
          "end": 258
        },
        "declare": false,
        "start": 167,
        "end": 258
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 160,
      "end": 258
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
          "start": 277,
          "end": 286
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
              "start": 295,
              "end": 309
            },
            "typeArguments": null,
            "start": 295,
            "end": 309
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
                "name": "to",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 318
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 320,
                  "end": 326
                },
                "start": 318,
                "end": 326
              },
              "accessibility": null,
              "static": false,
              "start": 316,
              "end": 327
            }
          ],
          "start": 310,
          "end": 329
        },
        "declare": false,
        "start": 267,
        "end": 329
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 260,
      "end": 329
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HyphenProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 359
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
              "start": 368,
              "end": 382
            },
            "typeArguments": null,
            "start": 368,
            "end": 382
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
                "type": "Literal",
                "value": "data-format",
                "raw": "\"data-format\"",
                "start": 389,
                "end": 402
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 404,
                  "end": 410
                },
                "start": 402,
                "end": 410
              },
              "accessibility": null,
              "static": false,
              "start": 389,
              "end": 411
            }
          ],
          "start": 383,
          "end": 413
        },
        "declare": false,
        "start": 338,
        "end": 413
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 331,
      "end": 413
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
            "name": "obj0",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 423
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
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 434
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 436,
                  "end": 443
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 432,
                "end": 443
              }
            ],
            "start": 426,
            "end": 445
          },
          "definite": false,
          "start": 419,
          "end": 445
        }
      ],
      "declare": false,
      "start": 415,
      "end": 446
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 456
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
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 473
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 475,
                  "end": 479
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 465,
                "end": 479
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 487
                },
                "value": {
                  "type": "Literal",
                  "value": "boo",
                  "raw": "\"boo\"",
                  "start": 489,
                  "end": 494
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 485,
                "end": 494
              }
            ],
            "start": 459,
            "end": 496
          },
          "definite": false,
          "start": 452,
          "end": 496
        }
      ],
      "declare": false,
      "start": 448,
      "end": 496
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
            "typeAnnotation": null,
            "start": 502,
            "end": 506
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
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 522
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 528,
                    "end": 530
                  },
                  "id": null,
                  "generator": false,
                  "start": 524,
                  "end": 530
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 530
              }
            ],
            "start": 509,
            "end": 532
          },
          "definite": false,
          "start": 502,
          "end": 532
        }
      ],
      "declare": false,
      "start": 498,
      "end": 532
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 544,
                "end": 547
              },
              "start": 542,
              "end": 547
            },
            "start": 538,
            "end": 547
          },
          "init": null,
          "definite": false,
          "start": 538,
          "end": 547
        }
      ],
      "declare": false,
      "start": 534,
      "end": 548
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
          "start": 566,
          "end": 576
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
                  "start": 590,
                  "end": 601
                },
                "typeArguments": null,
                "start": 590,
                "end": 601
              },
              "start": 588,
              "end": 601
            },
            "start": 577,
            "end": 601
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
                "start": 604,
                "end": 607
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 615
              },
              "start": 604,
              "end": 615
            },
            "typeArguments": null,
            "start": 604,
            "end": 615
          },
          "start": 602,
          "end": 615
        },
        "body": null,
        "expression": false,
        "start": 557,
        "end": 616
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 550,
      "end": 616
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
          "start": 633,
          "end": 643
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
                  "start": 655,
                  "end": 664
                },
                "typeArguments": null,
                "start": 655,
                "end": 664
              },
              "start": 653,
              "end": 664
            },
            "start": 644,
            "end": 664
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
                "start": 667,
                "end": 670
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 678
              },
              "start": 667,
              "end": 678
            },
            "typeArguments": null,
            "start": 667,
            "end": 678
          },
          "start": 665,
          "end": 678
        },
        "body": null,
        "expression": false,
        "start": 624,
        "end": 679
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 617,
      "end": 679
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
          "start": 696,
          "end": 706
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "hyphenProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HyphenProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 731
                },
                "typeArguments": null,
                "start": 720,
                "end": 731
              },
              "start": 718,
              "end": 731
            },
            "start": 707,
            "end": 731
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
                "start": 734,
                "end": 737
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 745
              },
              "start": 734,
              "end": 745
            },
            "typeArguments": null,
            "start": 734,
            "end": 745
          },
          "start": 732,
          "end": 745
        },
        "body": null,
        "expression": false,
        "start": 687,
        "end": 746
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 680,
      "end": 746
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
          "start": 763,
          "end": 773
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
                      "start": 781,
                      "end": 792
                    },
                    "typeArguments": null,
                    "start": 781,
                    "end": 792
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 795,
                      "end": 804
                    },
                    "typeArguments": null,
                    "start": 795,
                    "end": 804
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 807,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 807,
                    "end": 818
                  }
                ],
                "start": 781,
                "end": 818
              },
              "start": 779,
              "end": 818
            },
            "start": 774,
            "end": 818
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
                "start": 821,
                "end": 824
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 832
              },
              "start": 821,
              "end": 832
            },
            "typeArguments": null,
            "start": 821,
            "end": 832
          },
          "start": 819,
          "end": 832
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
                    "start": 845,
                    "end": 854
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 857,
                      "end": 862
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 866,
                        "end": 875
                      },
                      "typeArguments": null,
                      "start": 866,
                      "end": 875
                    },
                    "start": 857,
                    "end": 875
                  },
                  "definite": false,
                  "start": 845,
                  "end": 875
                }
              ],
              "declare": false,
              "start": 839,
              "end": 876
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
                  "start": 884,
                  "end": 893
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 896
                },
                "optional": false,
                "computed": false,
                "start": 884,
                "end": 896
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
                          "start": 915,
                          "end": 919
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 920,
                          "end": 934
                        },
                        "optional": false,
                        "computed": false,
                        "start": 915,
                        "end": 934
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 935,
                          "end": 940
                        }
                      ],
                      "optional": false,
                      "start": 915,
                      "end": 941
                    },
                    "start": 908,
                    "end": 942
                  }
                ],
                "start": 898,
                "end": 948
              },
              "alternate": null,
              "start": 881,
              "end": 948
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 961,
                    "end": 965
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 982
                  },
                  "optional": false,
                  "computed": false,
                  "start": 961,
                  "end": 982
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 983,
                    "end": 988
                  }
                ],
                "optional": false,
                "start": 961,
                "end": 989
              },
              "start": 954,
              "end": 990
            }
          ],
          "start": 833,
          "end": 992
        },
        "expression": false,
        "start": 754,
        "end": 992
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 747,
      "end": 992
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
            "start": 1009,
            "end": 1011
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1015,
                "end": 1025
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1026,
                    "end": 1028
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 1029,
                    "end": 1041
                  },
                  "start": 1026,
                  "end": 1041
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1042,
                    "end": 1049
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1052,
                          "end": 1053
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1056,
                        "end": 1058
                      },
                      "id": null,
                      "generator": false,
                      "start": 1051,
                      "end": 1058
                    },
                    "start": 1050,
                    "end": 1059
                  },
                  "start": 1042,
                  "end": 1059
                }
              ],
              "selfClosing": false,
              "start": 1014,
              "end": 1060
            },
            "children": [
              {
                "type": "JSXText",
                "value": "GO",
                "raw": "GO",
                "start": 1060,
                "end": 1062
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1064,
                "end": 1074
              },
              "start": 1062,
              "end": 1075
            },
            "start": 1014,
            "end": 1075
          },
          "definite": false,
          "start": 1009,
          "end": 1075
        }
      ],
      "declare": false,
      "start": 1003,
      "end": 1076
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1103,
            "end": 1105
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1109,
                "end": 1119
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1120,
                    "end": 1127
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1133,
                              "end": 1136
                            },
                            "start": 1131,
                            "end": 1136
                          },
                          "start": 1130,
                          "end": 1136
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1140,
                        "end": 1142
                      },
                      "id": null,
                      "generator": false,
                      "start": 1129,
                      "end": 1142
                    },
                    "start": 1128,
                    "end": 1143
                  },
                  "start": 1120,
                  "end": 1143
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1148,
                    "end": 1152
                  },
                  "start": 1144,
                  "end": 1153
                }
              ],
              "selfClosing": false,
              "start": 1108,
              "end": 1154
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hello world",
                "raw": "Hello world",
                "start": 1154,
                "end": 1165
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1167,
                "end": 1177
              },
              "start": 1165,
              "end": 1178
            },
            "start": 1108,
            "end": 1178
          },
          "definite": false,
          "start": 1103,
          "end": 1178
        }
      ],
      "declare": false,
      "start": 1097,
      "end": 1179
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
            "start": 1206,
            "end": 1208
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
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
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1228,
                          "end": 1230
                        },
                        "value": {
                          "type": "Literal",
                          "value": "10000",
                          "raw": "\"10000\"",
                          "start": 1232,
                          "end": 1239
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1228,
                        "end": 1239
                      }
                    ],
                    "start": 1227,
                    "end": 1240
                  },
                  "start": 1223,
                  "end": 1241
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1246,
                    "end": 1250
                  },
                  "start": 1242,
                  "end": 1251
                }
              ],
              "selfClosing": true,
              "start": 1211,
              "end": 1254
            },
            "children": [],
            "closingElement": null,
            "start": 1211,
            "end": 1254
          },
          "definite": false,
          "start": 1206,
          "end": 1254
        }
      ],
      "declare": false,
      "start": 1200,
      "end": 1255
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
            "start": 1281,
            "end": 1283
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1287,
                "end": 1297
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
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1303,
                          "end": 1305
                        },
                        "value": {
                          "type": "Literal",
                          "value": "10000",
                          "raw": "\"10000\"",
                          "start": 1307,
                          "end": 1314
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1303,
                        "end": 1314
                      }
                    ],
                    "start": 1302,
                    "end": 1315
                  },
                  "start": 1298,
                  "end": 1316
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
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1322,
                          "end": 1329
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
                              "start": 1332,
                              "end": 1333
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1338,
                            "end": 1340
                          },
                          "id": null,
                          "generator": false,
                          "start": 1331,
                          "end": 1340
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1322,
                        "end": 1340
                      }
                    ],
                    "start": 1321,
                    "end": 1341
                  },
                  "start": 1317,
                  "end": 1342
                }
              ],
              "selfClosing": true,
              "start": 1286,
              "end": 1345
            },
            "children": [],
            "closingElement": null,
            "start": 1286,
            "end": 1345
          },
          "definite": false,
          "start": 1281,
          "end": 1345
        }
      ],
      "declare": false,
      "start": 1275,
      "end": 1346
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
            "start": 1372,
            "end": 1374
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1378,
                "end": 1388
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1393,
                    "end": 1397
                  },
                  "start": 1389,
                  "end": 1398
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1399,
                    "end": 1401
                  },
                  "value": null,
                  "start": 1399,
                  "end": 1401
                }
              ],
              "selfClosing": true,
              "start": 1377,
              "end": 1404
            },
            "children": [],
            "closingElement": null,
            "start": 1377,
            "end": 1404
          },
          "definite": false,
          "start": 1372,
          "end": 1404
        }
      ],
      "declare": false,
      "start": 1366,
      "end": 1405
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1501,
            "end": 1503
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1507,
                "end": 1517
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
                          "start": 1524,
                          "end": 1531
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1535,
                                  "end": 1538
                                },
                                "start": 1533,
                                "end": 1538
                              },
                              "start": 1532,
                              "end": 1538
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1540,
                            "end": 1543
                          },
                          "expression": false,
                          "start": 1531,
                          "end": 1543
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1524,
                        "end": 1543
                      }
                    ],
                    "start": 1522,
                    "end": 1545
                  },
                  "start": 1518,
                  "end": 1546
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1551,
                    "end": 1555
                  },
                  "start": 1547,
                  "end": 1556
                }
              ],
              "selfClosing": true,
              "start": 1506,
              "end": 1559
            },
            "children": [],
            "closingElement": null,
            "start": 1506,
            "end": 1559
          },
          "definite": false,
          "start": 1501,
          "end": 1559
        }
      ],
      "declare": false,
      "start": 1495,
      "end": 1560
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1661,
            "end": 1663
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1667,
                "end": 1677
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
                          "start": 1684,
                          "end": 1691
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1695,
                                  "end": 1698
                                },
                                "start": 1693,
                                "end": 1698
                              },
                              "start": 1692,
                              "end": 1698
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1699,
                            "end": 1701
                          },
                          "expression": false,
                          "start": 1691,
                          "end": 1701
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1684,
                        "end": 1701
                      }
                    ],
                    "start": 1682,
                    "end": 1703
                  },
                  "start": 1678,
                  "end": 1704
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1705,
                    "end": 1713
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1715,
                      "end": 1717
                    },
                    "start": 1714,
                    "end": 1718
                  },
                  "start": 1705,
                  "end": 1718
                }
              ],
              "selfClosing": true,
              "start": 1666,
              "end": 1721
            },
            "children": [],
            "closingElement": null,
            "start": 1666,
            "end": 1721
          },
          "definite": false,
          "start": 1661,
          "end": 1721
        }
      ],
      "declare": false,
      "start": 1655,
      "end": 1722
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
            "end": 1773
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1777,
                "end": 1787
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
                          "start": 1794,
                          "end": 1801
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1805,
                                  "end": 1808
                                },
                                "start": 1803,
                                "end": 1808
                              },
                              "start": 1802,
                              "end": 1808
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1809,
                            "end": 1811
                          },
                          "expression": false,
                          "start": 1801,
                          "end": 1811
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1794,
                        "end": 1811
                      }
                    ],
                    "start": 1792,
                    "end": 1813
                  },
                  "start": 1788,
                  "end": 1814
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1815,
                    "end": 1823
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1824,
                    "end": 1831
                  },
                  "start": 1815,
                  "end": 1831
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 1832,
                    "end": 1841
                  },
                  "value": null,
                  "start": 1832,
                  "end": 1841
                }
              ],
              "selfClosing": true,
              "start": 1776,
              "end": 1844
            },
            "children": [],
            "closingElement": null,
            "start": 1776,
            "end": 1844
          },
          "definite": false,
          "start": 1771,
          "end": 1844
        }
      ],
      "declare": false,
      "start": 1765,
      "end": 1845
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
            "name": "b8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1894,
            "end": 1896
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1900,
                "end": 1910
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-format",
                    "start": 1911,
                    "end": 1922
                  },
                  "value": null,
                  "start": 1911,
                  "end": 1922
                }
              ],
              "selfClosing": true,
              "start": 1899,
              "end": 1925
            },
            "children": [],
            "closingElement": null,
            "start": 1899,
            "end": 1925
          },
          "definite": false,
          "start": 1894,
          "end": 1925
        }
      ],
      "declare": false,
      "start": 1888,
      "end": 1926
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 1975
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
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 93,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 114,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 160,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 167,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 177,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 197,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "MouseEventHandler",
    "start": 233,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 260,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 267,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 277,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 287,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 295,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 331,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 338,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 348,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 360,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 368,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "String",
    "value": "\"data-format\"",
    "start": 389,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 436,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 465,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"boo\"",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 515,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 534,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 550,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 557,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 566,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 577,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 590,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 608,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 617,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 624,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 633,
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
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 655,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 671,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 680,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 687,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "hyphenProps",
    "start": 707,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 720,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 738,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 747,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 754,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 763,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 781,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 795,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 807,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 825,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 839,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 845,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 857,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 863,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 866,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 884,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 894,
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
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 908,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 920,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 954,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 966,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 983,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1003,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1015,
    "end": 1025
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 1029,
    "end": 1041
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ">",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1064,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1097,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1103,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1109,
    "end": 1119
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1154,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1167,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "b2",
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
    "value": "MainButton",
    "start": 1212,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1224,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "String",
    "value": "\"10000\"",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1246,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1275,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1287,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "String",
    "value": "\"10000\"",
    "start": 1307,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1322,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1366,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1378,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 1393,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1399,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1495,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1507,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1519,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1524,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1548,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "obj0",
    "start": 1551,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1655,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1661,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1667,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1679,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1684,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1705,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1715,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1771,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1777,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1789,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1794,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1805,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1815,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1824,
    "end": 1831
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 1832,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1888,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1894,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1900,
    "end": 1910
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1911,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926
  }
]
```
