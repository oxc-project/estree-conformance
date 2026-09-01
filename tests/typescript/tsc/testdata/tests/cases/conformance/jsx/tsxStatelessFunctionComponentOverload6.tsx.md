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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 277
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 295
                    },
                    "start": 272,
                    "end": 295
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 296,
                        "end": 299
                      }
                    ],
                    "start": 295,
                    "end": 300
                  },
                  "start": 272,
                  "end": 300
                },
                "start": 270,
                "end": 300
              },
              "accessibility": null,
              "static": false,
              "start": 263,
              "end": 301
            }
          ],
          "start": 257,
          "end": 303
        },
        "declare": false,
        "start": 212,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 205,
      "end": 303
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
          "start": 322,
          "end": 331
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
              "start": 340,
              "end": 354
            },
            "typeArguments": null,
            "start": 340,
            "end": 354
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
                "start": 361,
                "end": 363
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 365,
                  "end": 371
                },
                "start": 363,
                "end": 371
              },
              "accessibility": null,
              "static": false,
              "start": 361,
              "end": 372
            }
          ],
          "start": 355,
          "end": 374
        },
        "declare": false,
        "start": 312,
        "end": 374
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 305,
      "end": 374
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
          "start": 393,
          "end": 404
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
              "start": 413,
              "end": 427
            },
            "typeArguments": null,
            "start": 413,
            "end": 427
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
                "start": 434,
                "end": 447
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 449,
                  "end": 455
                },
                "start": 447,
                "end": 455
              },
              "accessibility": null,
              "static": false,
              "start": 434,
              "end": 456
            }
          ],
          "start": 428,
          "end": 458
        },
        "declare": false,
        "start": 383,
        "end": 458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 376,
      "end": 458
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
            "start": 464,
            "end": 467
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
                  "start": 476,
                  "end": 484
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 486,
                  "end": 490
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 476,
                "end": 490
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
                  "start": 496,
                  "end": 498
                },
                "value": {
                  "type": "Literal",
                  "value": "boo",
                  "raw": "\"boo\"",
                  "start": 500,
                  "end": 505
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 496,
                "end": 505
              }
            ],
            "start": 470,
            "end": 507
          },
          "definite": false,
          "start": 464,
          "end": 507
        }
      ],
      "declare": false,
      "start": 460,
      "end": 507
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 518,
                "end": 521
              },
              "start": 516,
              "end": 521
            },
            "start": 512,
            "end": 521
          },
          "init": null,
          "definite": false,
          "start": 512,
          "end": 521
        }
      ],
      "declare": false,
      "start": 508,
      "end": 522
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
            "start": 527,
            "end": 531
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
                  "start": 540,
                  "end": 547
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
                    "start": 555,
                    "end": 557
                  },
                  "id": null,
                  "generator": false,
                  "start": 549,
                  "end": 557
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 540,
                "end": 557
              }
            ],
            "start": 534,
            "end": 559
          },
          "definite": false,
          "start": 527,
          "end": 559
        }
      ],
      "declare": false,
      "start": 523,
      "end": 559
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
          "start": 577,
          "end": 587
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
                  "start": 601,
                  "end": 612
                },
                "typeArguments": null,
                "start": 601,
                "end": 612
              },
              "start": 599,
              "end": 612
            },
            "start": 588,
            "end": 612
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
                "start": 615,
                "end": 618
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 619,
                "end": 626
              },
              "start": 615,
              "end": 626
            },
            "typeArguments": null,
            "start": 615,
            "end": 626
          },
          "start": 613,
          "end": 626
        },
        "body": null,
        "expression": false,
        "start": 568,
        "end": 627
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 561,
      "end": 627
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
          "start": 644,
          "end": 654
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
                  "start": 666,
                  "end": 675
                },
                "typeArguments": null,
                "start": 666,
                "end": 675
              },
              "start": 664,
              "end": 675
            },
            "start": 655,
            "end": 675
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
                "start": 678,
                "end": 681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 689
              },
              "start": 678,
              "end": 689
            },
            "typeArguments": null,
            "start": 678,
            "end": 689
          },
          "start": 676,
          "end": 689
        },
        "body": null,
        "expression": false,
        "start": 635,
        "end": 690
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 628,
      "end": 690
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
          "start": 707,
          "end": 717
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
                  "start": 731,
                  "end": 742
                },
                "typeArguments": null,
                "start": 731,
                "end": 742
              },
              "start": 729,
              "end": 742
            },
            "start": 718,
            "end": 742
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
                "start": 745,
                "end": 748
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 756
              },
              "start": 745,
              "end": 756
            },
            "typeArguments": null,
            "start": 745,
            "end": 756
          },
          "start": 743,
          "end": 756
        },
        "body": null,
        "expression": false,
        "start": 698,
        "end": 757
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 691,
      "end": 757
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
          "start": 774,
          "end": 784
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
                      "start": 792,
                      "end": 803
                    },
                    "typeArguments": null,
                    "start": 792,
                    "end": 803
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 806,
                      "end": 815
                    },
                    "typeArguments": null,
                    "start": 806,
                    "end": 815
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 818,
                      "end": 829
                    },
                    "typeArguments": null,
                    "start": 818,
                    "end": 829
                  }
                ],
                "start": 792,
                "end": 829
              },
              "start": 790,
              "end": 829
            },
            "start": 785,
            "end": 829
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
                "start": 832,
                "end": 835
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 843
              },
              "start": 832,
              "end": 843
            },
            "typeArguments": null,
            "start": 832,
            "end": 843
          },
          "start": 830,
          "end": 843
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
                    "start": 856,
                    "end": 865
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 873
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 886
                      },
                      "typeArguments": null,
                      "start": 877,
                      "end": 886
                    },
                    "start": 868,
                    "end": 886
                  },
                  "definite": false,
                  "start": 856,
                  "end": 886
                }
              ],
              "declare": false,
              "start": 850,
              "end": 887
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
                  "start": 895,
                  "end": 904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 907
                },
                "optional": false,
                "computed": false,
                "start": 895,
                "end": 907
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
                          "start": 926,
                          "end": 930
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 931,
                          "end": 945
                        },
                        "optional": false,
                        "computed": false,
                        "start": 926,
                        "end": 945
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 951
                        }
                      ],
                      "optional": false,
                      "start": 926,
                      "end": 952
                    },
                    "start": 919,
                    "end": 953
                  }
                ],
                "start": 909,
                "end": 959
              },
              "alternate": null,
              "start": 892,
              "end": 959
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 972,
                    "end": 976
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 977,
                    "end": 993
                  },
                  "optional": false,
                  "computed": false,
                  "start": 972,
                  "end": 993
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 994,
                    "end": 999
                  }
                ],
                "optional": false,
                "start": 972,
                "end": 1000
              },
              "start": 965,
              "end": 1001
            }
          ],
          "start": 844,
          "end": 1003
        },
        "expression": false,
        "start": 765,
        "end": 1003
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 758,
      "end": 1003
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
            "start": 1017,
            "end": 1019
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1023,
                "end": 1033
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1034,
                    "end": 1036
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 1037,
                    "end": 1049
                  },
                  "start": 1034,
                  "end": 1049
                }
              ],
              "selfClosing": false,
              "start": 1022,
              "end": 1050
            },
            "children": [
              {
                "type": "JSXText",
                "value": "GO",
                "raw": "GO",
                "start": 1050,
                "end": 1052
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1054,
                "end": 1064
              },
              "start": 1052,
              "end": 1065
            },
            "start": 1022,
            "end": 1065
          },
          "definite": false,
          "start": 1017,
          "end": 1065
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1066
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
            "start": 1073,
            "end": 1075
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1079,
                "end": 1089
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1090,
                    "end": 1097
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
                          "start": 1100,
                          "end": 1101
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1106,
                        "end": 1108
                      },
                      "id": null,
                      "generator": false,
                      "start": 1099,
                      "end": 1108
                    },
                    "start": 1098,
                    "end": 1109
                  },
                  "start": 1090,
                  "end": 1109
                }
              ],
              "selfClosing": false,
              "start": 1078,
              "end": 1110
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hello world",
                "raw": "Hello world",
                "start": 1110,
                "end": 1121
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1123,
                "end": 1133
              },
              "start": 1121,
              "end": 1134
            },
            "start": 1078,
            "end": 1134
          },
          "definite": false,
          "start": 1073,
          "end": 1134
        }
      ],
      "declare": false,
      "start": 1067,
      "end": 1135
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
            "start": 1142,
            "end": 1144
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1148,
                "end": 1158
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
                    "start": 1163,
                    "end": 1166
                  },
                  "start": 1159,
                  "end": 1167
                }
              ],
              "selfClosing": true,
              "start": 1147,
              "end": 1170
            },
            "children": [],
            "closingElement": null,
            "start": 1147,
            "end": 1170
          },
          "definite": false,
          "start": 1142,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1136,
      "end": 1171
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
            "start": 1178,
            "end": 1180
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1184,
                "end": 1194
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
                          "start": 1200,
                          "end": 1202
                        },
                        "value": {
                          "type": "Literal",
                          "value": 10000,
                          "raw": "10000",
                          "start": 1204,
                          "end": 1209
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1200,
                        "end": 1209
                      }
                    ],
                    "start": 1199,
                    "end": 1210
                  },
                  "start": 1195,
                  "end": 1211
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1216,
                    "end": 1219
                  },
                  "start": 1212,
                  "end": 1220
                }
              ],
              "selfClosing": true,
              "start": 1183,
              "end": 1223
            },
            "children": [],
            "closingElement": null,
            "start": 1183,
            "end": 1223
          },
          "definite": false,
          "start": 1178,
          "end": 1223
        }
      ],
      "declare": false,
      "start": 1172,
      "end": 1224
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
            "start": 1231,
            "end": 1233
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1237,
                "end": 1247
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1256
                  },
                  "start": 1248,
                  "end": 1257
                }
              ],
              "selfClosing": true,
              "start": 1236,
              "end": 1260
            },
            "children": [],
            "closingElement": null,
            "start": 1236,
            "end": 1260
          },
          "definite": false,
          "start": 1231,
          "end": 1260
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1261
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
            "start": 1306,
            "end": 1308
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1312,
                "end": 1322
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1331
                  },
                  "start": 1323,
                  "end": 1332
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1333,
                    "end": 1335
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/to/somewhere",
                    "raw": "\"/to/somewhere\"",
                    "start": 1336,
                    "end": 1351
                  },
                  "start": 1333,
                  "end": 1351
                }
              ],
              "selfClosing": true,
              "start": 1311,
              "end": 1354
            },
            "children": [],
            "closingElement": null,
            "start": 1311,
            "end": 1354
          },
          "definite": false,
          "start": 1306,
          "end": 1354
        }
      ],
      "declare": false,
      "start": 1300,
      "end": 1355
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
            "start": 1398,
            "end": 1400
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1404,
                "end": 1414
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
                    "start": 1419,
                    "end": 1423
                  },
                  "start": 1415,
                  "end": 1424
                }
              ],
              "selfClosing": true,
              "start": 1403,
              "end": 1427
            },
            "children": [],
            "closingElement": null,
            "start": 1403,
            "end": 1427
          },
          "definite": false,
          "start": 1398,
          "end": 1427
        }
      ],
      "declare": false,
      "start": 1392,
      "end": 1428
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
            "start": 1435,
            "end": 1437
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1441,
                "end": 1451
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
                          "start": 1457,
                          "end": 1464
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
                                    "start": 1474,
                                    "end": 1477
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "hi",
                                      "raw": "\"hi\"",
                                      "start": 1478,
                                      "end": 1482
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1474,
                                  "end": 1483
                                },
                                "directive": null,
                                "start": 1474,
                                "end": 1483
                              }
                            ],
                            "start": 1472,
                            "end": 1485
                          },
                          "id": null,
                          "generator": false,
                          "start": 1466,
                          "end": 1485
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1457,
                        "end": 1485
                      }
                    ],
                    "start": 1456,
                    "end": 1486
                  },
                  "start": 1452,
                  "end": 1487
                }
              ],
              "selfClosing": true,
              "start": 1440,
              "end": 1490
            },
            "children": [],
            "closingElement": null,
            "start": 1440,
            "end": 1490
          },
          "definite": false,
          "start": 1435,
          "end": 1490
        }
      ],
      "declare": false,
      "start": 1429,
      "end": 1491
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
            "start": 1498,
            "end": 1500
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1504,
                "end": 1514
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
                          "start": 1520,
                          "end": 1527
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
                            "body": [],
                            "start": 1530,
                            "end": 1532
                          },
                          "expression": false,
                          "start": 1527,
                          "end": 1532
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1520,
                        "end": 1532
                      }
                    ],
                    "start": 1519,
                    "end": 1533
                  },
                  "start": 1515,
                  "end": 1534
                }
              ],
              "selfClosing": true,
              "start": 1503,
              "end": 1537
            },
            "children": [],
            "closingElement": null,
            "start": 1503,
            "end": 1537
          },
          "definite": false,
          "start": 1498,
          "end": 1537
        }
      ],
      "declare": false,
      "start": 1492,
      "end": 1538
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
            "name": "b9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1607
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1611,
                "end": 1621
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1622,
                    "end": 1624
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 1625,
                    "end": 1637
                  },
                  "start": 1622,
                  "end": 1637
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra-prop",
                    "start": 1638,
                    "end": 1648
                  },
                  "value": null,
                  "start": 1638,
                  "end": 1648
                }
              ],
              "selfClosing": false,
              "start": 1610,
              "end": 1649
            },
            "children": [
              {
                "type": "JSXText",
                "value": "GO",
                "raw": "GO",
                "start": 1649,
                "end": 1651
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1653,
                "end": 1663
              },
              "start": 1651,
              "end": 1664
            },
            "start": 1610,
            "end": 1664
          },
          "definite": false,
          "start": 1605,
          "end": 1664
        }
      ],
      "declare": false,
      "start": 1599,
      "end": 1665
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
            "name": "b10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1672,
            "end": 1675
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1679,
                "end": 1689
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "to",
                    "start": 1690,
                    "end": 1692
                  },
                  "value": {
                    "type": "Literal",
                    "value": "/some/path",
                    "raw": "'/some/path'",
                    "start": 1693,
                    "end": 1705
                  },
                  "start": 1690,
                  "end": 1705
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 1706,
                    "end": 1714
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 1715,
                    "end": 1719
                  },
                  "start": 1706,
                  "end": 1719
                }
              ],
              "selfClosing": false,
              "start": 1678,
              "end": 1721
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1723,
                "end": 1733
              },
              "start": 1721,
              "end": 1734
            },
            "start": 1678,
            "end": 1734
          },
          "definite": false,
          "start": 1672,
          "end": 1734
        }
      ],
      "declare": false,
      "start": 1666,
      "end": 1735
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
            "name": "b11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1742,
            "end": 1745
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1749,
                "end": 1759
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 1760,
                    "end": 1767
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
                          "start": 1770,
                          "end": 1771
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1776,
                        "end": 1778
                      },
                      "id": null,
                      "generator": false,
                      "start": 1769,
                      "end": 1778
                    },
                    "start": 1768,
                    "end": 1779
                  },
                  "start": 1760,
                  "end": 1779
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 1780,
                    "end": 1789
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1790,
                    "end": 1797
                  },
                  "start": 1780,
                  "end": 1797
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-format",
                    "start": 1798,
                    "end": 1809
                  },
                  "value": null,
                  "start": 1798,
                  "end": 1809
                }
              ],
              "selfClosing": false,
              "start": 1748,
              "end": 1810
            },
            "children": [
              {
                "type": "JSXText",
                "value": "Hello world",
                "raw": "Hello world",
                "start": 1810,
                "end": 1821
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1823,
                "end": 1833
              },
              "start": 1821,
              "end": 1834
            },
            "start": 1748,
            "end": 1834
          },
          "definite": false,
          "start": 1742,
          "end": 1834
        }
      ],
      "declare": false,
      "start": 1736,
      "end": 1835
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
            "name": "b12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1845
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 1849,
                "end": 1859
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-format",
                    "start": 1860,
                    "end": 1871
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello world",
                    "raw": "\"Hello world\"",
                    "start": 1872,
                    "end": 1885
                  },
                  "start": 1860,
                  "end": 1885
                }
              ],
              "selfClosing": true,
              "start": 1848,
              "end": 1888
            },
            "children": [],
            "closingElement": null,
            "start": 1848,
            "end": 1888
          },
          "definite": false,
          "start": 1842,
          "end": 1888
        }
      ],
      "declare": false,
      "start": 1836,
      "end": 1888
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 1890
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
    "type": "Identifier",
    "value": "React",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "MouseEventHandler",
    "start": 278,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 305,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 312,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 322,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 332,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 340,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 376,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 383,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 393,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 405,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 413,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "String",
    "value": "\"data-format\"",
    "start": 434,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "String",
    "value": "\"boo\"",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 540,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 561,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 568,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 577,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 588,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 601,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "JSX",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 619,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 628,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 635,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 644,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 655,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 666,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 678,
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
    "value": "Element",
    "start": 682,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 691,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 698,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 707,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "hyphenProps",
    "start": 718,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 731,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 758,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 765,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 774,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 792,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 806,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "HyphenProps",
    "start": 818,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 836,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 850,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 856,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 868,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 874,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 877,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 892,
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
    "value": "linkProps",
    "start": 895,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 919,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 926,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 931,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 946,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 965,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 972,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 977,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 994,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1011,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1023,
    "end": 1033
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1034,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 1037,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1054,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1079,
    "end": 1089
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1090,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1103,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1110,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1123,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1136,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1148,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1172,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1184,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Numeric",
    "value": "10000",
    "start": 1204,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1225,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1237,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1252,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1300,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1312,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1327,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "JSXText",
    "value": "\"/to/somewhere\"",
    "start": 1336,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1392,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1404,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1419,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1429,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1435,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1441,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1457,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1474,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1492,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1498,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1504,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1520,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1599,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 1605,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1611,
    "end": 1621
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1622,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 1625,
    "end": 1637
  },
  {
    "type": "JSXIdentifier",
    "value": "extra-prop",
    "start": 1638,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "JSXText",
    "value": "GO",
    "start": 1649,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1653,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1666,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1679,
    "end": 1689
  },
  {
    "type": "JSXIdentifier",
    "value": "to",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "JSXText",
    "value": "'/some/path'",
    "start": 1693,
    "end": 1705
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 1706,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 1715,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1723,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1736,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1749,
    "end": 1759
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1760,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1773,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 1780,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 1790,
    "end": 1797
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1798,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "JSXText",
    "value": "Hello world",
    "start": 1810,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1823,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 1849,
    "end": 1859
  },
  {
    "type": "JSXIdentifier",
    "value": "data-format",
    "start": 1860,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "JSXText",
    "value": "\"Hello world\"",
    "start": 1872,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888
  }
]
```
