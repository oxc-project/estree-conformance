__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPlugins",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 31,
          "end": 34
        },
        "start": 29,
        "end": 34
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPluginsGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 70
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
      },
      "params": [],
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
            "start": 77,
            "end": 78
          },
          "typeArguments": null,
          "start": 77,
          "end": 78
        },
        "start": 75,
        "end": 78
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPluginsFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                  "start": 119,
                  "end": 120
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 119,
                "end": 120
              }
            ],
            "start": 118,
            "end": 121
          },
          "params": [],
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
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            },
            "start": 124,
            "end": 128
          },
          "start": 118,
          "end": 128
        },
        "start": 116,
        "end": 128
      },
      "body": null,
      "expression": false,
      "start": 80,
      "end": 129
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 149,
                "end": 152
              },
              "start": 147,
              "end": 152
            },
            "start": 144,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 152
        }
      ],
      "declare": true,
      "start": 130,
      "end": 153
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 171
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 180,
                    "end": 186
                  },
                  "start": 178,
                  "end": 186
                },
                "start": 175,
                "end": 186
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 189,
                "end": 192
              },
              "start": 187,
              "end": 192
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 174,
            "end": 192
          }
        ],
        "start": 172,
        "end": 194
      },
      "abstract": false,
      "declare": true,
      "start": 154,
      "end": 194
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 311
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 329
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 319,
                  "end": 331
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 335,
                  "end": 338
                },
                "start": 319,
                "end": 338
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 346
              },
              "optional": false,
              "computed": false,
              "start": 318,
              "end": 346
            },
            "typeArguments": null,
            "arguments": [],
            "start": 314,
            "end": 348
          },
          "definite": false,
          "start": 309,
          "end": 348
        }
      ],
      "declare": false,
      "start": 303,
      "end": 349
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 358
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 376
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 366,
                  "end": 378
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 389,
                  "end": 392
                },
                "start": 366,
                "end": 392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 400
              },
              "optional": false,
              "computed": false,
              "start": 365,
              "end": 400
            },
            "typeArguments": null,
            "arguments": [],
            "start": 361,
            "end": 402
          },
          "definite": false,
          "start": 356,
          "end": 402
        }
      ],
      "declare": false,
      "start": 350,
      "end": 403
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 412
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 421,
                  "end": 424
                },
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 435
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 425,
                  "end": 437
                },
                "start": 420,
                "end": 437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 445
              },
              "optional": false,
              "computed": false,
              "start": 419,
              "end": 445
            },
            "typeArguments": null,
            "arguments": [],
            "start": 415,
            "end": 447
          },
          "definite": false,
          "start": 410,
          "end": 447
        }
      ],
      "declare": false,
      "start": 404,
      "end": 448
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 457
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPlugins",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 475
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 465,
                    "end": 477
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 481,
                    "end": 484
                  },
                  "start": 465,
                  "end": 484
                },
                "start": 464,
                "end": 486
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 493
              },
              "optional": false,
              "computed": false,
              "start": 464,
              "end": 493
            },
            "typeArguments": null,
            "arguments": [],
            "start": 460,
            "end": 495
          },
          "definite": false,
          "start": 455,
          "end": 495
        }
      ],
      "declare": false,
      "start": 449,
      "end": 496
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 505
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 523
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 513,
                  "end": 525
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 529,
                  "end": 532
                },
                "start": 513,
                "end": 532
              },
              "property": {
                "type": "Literal",
                "value": "Linker",
                "raw": "\"Linker\"",
                "start": 534,
                "end": 542
              },
              "optional": false,
              "computed": true,
              "start": 512,
              "end": 543
            },
            "typeArguments": null,
            "arguments": [],
            "start": 508,
            "end": 545
          },
          "definite": false,
          "start": 503,
          "end": 545
        }
      ],
      "declare": false,
      "start": 497,
      "end": 546
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPlugins",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 563,
                      "end": 573
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 563,
                    "end": 575
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 579,
                    "end": 582
                  },
                  "start": 563,
                  "end": 582
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 586
                },
                "optional": false,
                "computed": false,
                "start": 562,
                "end": 586
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 593
              },
              "optional": false,
              "computed": false,
              "start": 562,
              "end": 593
            },
            "typeArguments": null,
            "arguments": [],
            "start": 558,
            "end": 595
          },
          "definite": false,
          "start": 553,
          "end": 595
        }
      ],
      "declare": false,
      "start": 547,
      "end": 596
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 605
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 613,
                    "end": 623
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 613,
                  "end": 625
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 629,
                  "end": 632
                },
                "start": 613,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 640
              },
              "optional": false,
              "computed": false,
              "start": 612,
              "end": 640
            },
            "typeArguments": null,
            "arguments": [],
            "start": 608,
            "end": 640
          },
          "definite": false,
          "start": 603,
          "end": 640
        }
      ],
      "declare": false,
      "start": 597,
      "end": 641
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 648,
            "end": 650
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 668
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 658,
                  "end": 670
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 674,
                  "end": 677
                },
                "start": 658,
                "end": 677
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "tag",
                      "cooked": "tag"
                    },
                    "tail": true,
                    "start": 678,
                    "end": 683
                  }
                ],
                "expressions": [],
                "start": 678,
                "end": 683
              },
              "start": 657,
              "end": 683
            },
            "typeArguments": null,
            "arguments": [],
            "start": 653,
            "end": 685
          },
          "definite": false,
          "start": 648,
          "end": 685
        }
      ],
      "declare": false,
      "start": 642,
      "end": 686
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
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 695
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 706
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPlugins",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 717
                    },
                    "optional": false,
                    "computed": false,
                    "start": 703,
                    "end": 717
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 703,
                  "end": 719
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 723,
                  "end": 726
                },
                "start": 703,
                "end": 726
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 734
              },
              "optional": false,
              "computed": false,
              "start": 702,
              "end": 734
            },
            "typeArguments": null,
            "arguments": [],
            "start": 698,
            "end": 736
          },
          "definite": false,
          "start": 693,
          "end": 736
        }
      ],
      "declare": false,
      "start": 687,
      "end": 737
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
            "name": "a10",
            "optional": false,
            "typeAnnotation": null,
            "start": 744,
            "end": 747
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPlugins",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 755,
                      "end": 765
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 755,
                    "end": 767
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 768,
                    "end": 770
                  },
                  "optional": false,
                  "computed": false,
                  "start": 755,
                  "end": 770
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 774,
                  "end": 777
                },
                "start": 755,
                "end": 777
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 785
              },
              "optional": false,
              "computed": false,
              "start": 754,
              "end": 785
            },
            "typeArguments": null,
            "arguments": [],
            "start": 750,
            "end": 787
          },
          "definite": false,
          "start": 744,
          "end": 787
        }
      ],
      "declare": false,
      "start": 738,
      "end": 788
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
            "name": "a11",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 798
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPlugins",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 807,
                      "end": 817
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 807,
                    "end": 819
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 823,
                    "end": 826
                  },
                  "start": 807,
                  "end": 826
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 831,
                  "end": 834
                },
                "start": 806,
                "end": 834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 842
              },
              "optional": false,
              "computed": false,
              "start": 805,
              "end": 842
            },
            "typeArguments": null,
            "arguments": [],
            "start": 801,
            "end": 844
          },
          "definite": false,
          "start": 795,
          "end": 844
        }
      ],
      "declare": false,
      "start": 789,
      "end": 845
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
            "name": "a12",
            "optional": false,
            "typeAnnotation": null,
            "start": 852,
            "end": 855
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPluginsGeneric",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 880
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 881,
                        "end": 884
                      }
                    ],
                    "start": 880,
                    "end": 885
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 863,
                  "end": 887
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 891,
                  "end": 894
                },
                "start": 863,
                "end": 894
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 902
              },
              "optional": false,
              "computed": false,
              "start": 862,
              "end": 902
            },
            "typeArguments": null,
            "arguments": [],
            "start": 858,
            "end": 904
          },
          "definite": false,
          "start": 852,
          "end": 904
        }
      ],
      "declare": false,
      "start": 846,
      "end": 905
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
            "name": "a13",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 915
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSInstantiationExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPluginsFactory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 923,
                      "end": 940
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 923,
                    "end": 942
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 943,
                        "end": 949
                      }
                    ],
                    "start": 942,
                    "end": 950
                  },
                  "start": 923,
                  "end": 950
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 954,
                  "end": 957
                },
                "start": 923,
                "end": 957
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 965
              },
              "optional": false,
              "computed": false,
              "start": 922,
              "end": 965
            },
            "typeArguments": null,
            "arguments": [],
            "start": 918,
            "end": 967
          },
          "definite": false,
          "start": 912,
          "end": 967
        }
      ],
      "declare": false,
      "start": 906,
      "end": 968
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
            "name": "a14",
            "optional": false,
            "typeAnnotation": null,
            "start": 975,
            "end": 978
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPlugins",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 996
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 986,
                  "end": 998
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1002,
                  "end": 1005
                },
                "start": 986,
                "end": 1005
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1013
              },
              "optional": false,
              "computed": false,
              "start": 985,
              "end": 1013
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getPlugins",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1029
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1019,
                      "end": 1031
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1035,
                      "end": 1038
                    },
                    "start": 1019,
                    "end": 1038
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1047
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1018,
                  "end": 1047
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1014,
                "end": 1049
              }
            ],
            "start": 981,
            "end": 1050
          },
          "definite": false,
          "start": 975,
          "end": 1050
        }
      ],
      "declare": false,
      "start": 969,
      "end": 1051
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
            "start": 1115,
            "end": 1117
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPlugins",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1135
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1125,
                "end": 1137
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1141,
                "end": 1144
              },
              "start": 1125,
              "end": 1144
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1120,
            "end": 1147
          },
          "definite": false,
          "start": 1115,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1148
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
            "start": 1155,
            "end": 1157
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPlugins",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1165,
                  "end": 1175
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1165,
                "end": 1177
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1185
              },
              "optional": false,
              "computed": false,
              "start": 1164,
              "end": 1185
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1160,
            "end": 1187
          },
          "definite": false,
          "start": 1155,
          "end": 1187
        }
      ],
      "declare": false,
      "start": 1149,
      "end": 1188
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
            "start": 1195,
            "end": 1197
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1209,
                    "end": 1212
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1205,
                  "end": 1214
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1218,
                  "end": 1221
                },
                "start": 1205,
                "end": 1221
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1229
              },
              "optional": false,
              "computed": false,
              "start": 1204,
              "end": 1229
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1200,
            "end": 1231
          },
          "definite": false,
          "start": 1195,
          "end": 1231
        }
      ],
      "declare": false,
      "start": 1189,
      "end": 1232
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
            "start": 1239,
            "end": 1241
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1256
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1249,
                  "end": 1256
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1260,
                  "end": 1263
                },
                "start": 1249,
                "end": 1263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1265,
                "end": 1271
              },
              "optional": false,
              "computed": false,
              "start": 1248,
              "end": 1271
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1244,
            "end": 1273
          },
          "definite": false,
          "start": 1239,
          "end": 1273
        }
      ],
      "declare": false,
      "start": 1233,
      "end": 1274
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
            "start": 1281,
            "end": 1283
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1291,
                        "end": 1294
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getPlugins",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1296,
                        "end": 1306
                      },
                      "optional": true,
                      "computed": false,
                      "start": 1291,
                      "end": 1306
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1291,
                    "end": 1308
                  },
                  "start": 1291,
                  "end": 1308
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1312,
                  "end": 1315
                },
                "start": 1291,
                "end": 1315
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1317,
                "end": 1323
              },
              "optional": false,
              "computed": false,
              "start": 1290,
              "end": 1323
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1286,
            "end": 1325
          },
          "definite": false,
          "start": 1281,
          "end": 1325
        }
      ],
      "declare": false,
      "start": 1275,
      "end": 1326
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
            "start": 1333,
            "end": 1335
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1343,
                    "end": 1346
                  },
                  "property": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPlugins",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1347,
                      "end": 1357
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1347,
                    "end": 1359
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1343,
                  "end": 1360
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1364,
                  "end": 1367
                },
                "start": 1343,
                "end": 1367
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1369,
                "end": 1375
              },
              "optional": false,
              "computed": false,
              "start": 1342,
              "end": 1375
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1338,
            "end": 1377
          },
          "definite": false,
          "start": 1333,
          "end": 1377
        }
      ],
      "declare": false,
      "start": 1327,
      "end": 1378
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
            "start": 1385,
            "end": 1387
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1398
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1401
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1395,
                  "end": 1401
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1405,
                  "end": 1408
                },
                "start": 1395,
                "end": 1408
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Linker",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1416
              },
              "optional": false,
              "computed": false,
              "start": 1394,
              "end": 1416
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1390,
            "end": 1418
          },
          "definite": false,
          "start": 1385,
          "end": 1418
        }
      ],
      "declare": false,
      "start": 1379,
      "end": 1419
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1419
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "getPluginsGeneric",
    "start": 53,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 80,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "getPluginsFactory",
    "start": 97,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 144,
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
    "value": "any",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 154,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 319,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 332,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 366,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 379,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 404,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 425,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 465,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 497,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 513,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 526,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "String",
    "value": "\"Linker\"",
    "start": 534,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 563,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 587,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 597,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 613,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 626,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 642,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 658,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 671,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 674,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Template",
    "value": "`tag`",
    "start": 678,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
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
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 720,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 723,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 738,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 744,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 755,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 768,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 771,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
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
    "value": "a11",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 801,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 807,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 820,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 823,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 828,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
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
    "value": "Linker",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 846,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "getPluginsGeneric",
    "start": 863,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 888,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 906,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 918,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "getPluginsFactory",
    "start": 923,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 943,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 951,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 969,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 986,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1007,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 1019,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 1040,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 1125,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 1165,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1189,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1275,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "b5",
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
    "type": "Keyword",
    "value": "new",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 1296,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1327,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1338,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "getPlugins",
    "start": 1347,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1379,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1385,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 1399,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  }
]
```
