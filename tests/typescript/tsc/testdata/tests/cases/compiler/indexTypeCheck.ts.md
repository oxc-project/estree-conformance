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
        "name": "Red",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 19,
                  "end": 26
                },
                "start": 18,
                "end": 26
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 17,
            "end": 28
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 38,
                  "end": 45
                },
                "start": 37,
                "end": 45
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 36,
            "end": 47
          }
        ],
        "start": 14,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blue",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  },
                  "start": 77,
                  "end": 84
                },
                "start": 76,
                "end": 84
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 87,
                "end": 90
              },
              "start": 85,
              "end": 90
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 75,
            "end": 91
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 102,
                    "end": 108
                  },
                  "start": 101,
                  "end": 108
                },
                "start": 100,
                "end": 108
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 99,
            "end": 115
          }
        ],
        "start": 72,
        "end": 123
      },
      "declare": false,
      "start": 57,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Yellow",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 141
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 148,
                    "end": 154
                  },
                  "start": 147,
                  "end": 154
                },
                "start": 146,
                "end": 154
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Red",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 160
                },
                "typeArguments": null,
                "start": 157,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 145,
            "end": 161
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "start": 171,
                  "end": 178
                },
                "start": 170,
                "end": 178
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Red",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 184
                },
                "typeArguments": null,
                "start": 181,
                "end": 184
              },
              "start": 179,
              "end": 184
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 169,
            "end": 185
          }
        ],
        "start": 142,
        "end": 193
      },
      "declare": false,
      "start": 125,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Orange",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 211
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 218,
                    "end": 224
                  },
                  "start": 217,
                  "end": 224
                },
                "start": 216,
                "end": 224
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 227,
                "end": 233
              },
              "start": 225,
              "end": 233
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 215,
            "end": 234
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 244,
                  "end": 251
                },
                "start": 243,
                "end": 251
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              },
              "start": 252,
              "end": 260
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 242,
            "end": 261
          }
        ],
        "start": 212,
        "end": 272
      },
      "declare": false,
      "start": 195,
      "end": 272
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Green",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 289
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  },
                  "start": 295,
                  "end": 302
                },
                "start": 294,
                "end": 302
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 311
                },
                "typeArguments": null,
                "start": 305,
                "end": 311
              },
              "start": 303,
              "end": 311
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 293,
            "end": 312
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 326,
                    "end": 332
                  },
                  "start": 325,
                  "end": 332
                },
                "start": 324,
                "end": 332
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yellow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 341
                },
                "typeArguments": null,
                "start": 335,
                "end": 341
              },
              "start": 333,
              "end": 341
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 323,
            "end": 342
          }
        ],
        "start": 290,
        "end": 350
      },
      "declare": false,
      "start": 274,
      "end": 350
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cyan",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 366
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 373,
                    "end": 379
                  },
                  "start": 372,
                  "end": 379
                },
                "start": 371,
                "end": 379
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 382,
                "end": 388
              },
              "start": 380,
              "end": 388
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 370,
            "end": 389
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 403,
                    "end": 409
                  },
                  "start": 402,
                  "end": 409
                },
                "start": 401,
                "end": 409
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 412,
                "end": 418
              },
              "start": 410,
              "end": 418
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 400,
            "end": 419
          }
        ],
        "start": 367,
        "end": 427
      },
      "declare": false,
      "start": 352,
      "end": 427
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Purple",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 445
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 452,
                    "end": 458
                  },
                  "start": 451,
                  "end": 458
                },
                "start": 450,
                "end": 458
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 462,
                    "end": 468
                  },
                  "start": 461,
                  "end": 468
                },
                "start": 460,
                "end": 468
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 449,
            "end": 470
          }
        ],
        "start": 446,
        "end": 481
      },
      "declare": false,
      "start": 429,
      "end": 481
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Magenta",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 500
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Purple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 513
                    },
                    "typeArguments": null,
                    "start": 507,
                    "end": 513
                  },
                  "start": 506,
                  "end": 513
                },
                "start": 505,
                "end": 513
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 504,
            "end": 515
          }
        ],
        "start": 501,
        "end": 526
      },
      "declare": false,
      "start": 483,
      "end": 526
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
            "name": "yellow",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yellow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 554
                },
                "typeArguments": null,
                "start": 548,
                "end": 554
              },
              "start": 546,
              "end": 554
            },
            "start": 540,
            "end": 554
          },
          "init": null,
          "definite": false,
          "start": 540,
          "end": 554
        }
      ],
      "declare": true,
      "start": 528,
      "end": 555
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
            "name": "blue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Blue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 578
                },
                "typeArguments": null,
                "start": 574,
                "end": 578
              },
              "start": 572,
              "end": 578
            },
            "start": 568,
            "end": 578
          },
          "init": null,
          "definite": false,
          "start": 568,
          "end": 578
        }
      ],
      "declare": true,
      "start": 556,
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 585
          },
          "init": {
            "type": "Literal",
            "value": "some string",
            "raw": "\"some string\"",
            "start": 588,
            "end": 601
          },
          "definite": false,
          "start": 584,
          "end": 601
        }
      ],
      "declare": false,
      "start": 580,
      "end": 602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 604,
          "end": 610
        },
        "property": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 611,
          "end": 612
        },
        "optional": false,
        "computed": true,
        "start": 604,
        "end": 613
      },
      "directive": null,
      "start": 604,
      "end": 614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 621,
          "end": 627
        },
        "property": {
          "type": "Literal",
          "value": "hue",
          "raw": "\"hue\"",
          "start": 628,
          "end": 633
        },
        "optional": false,
        "computed": true,
        "start": 621,
        "end": 634
      },
      "directive": null,
      "start": 621,
      "end": 635
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 648
        },
        "property": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 650,
            "end": 653
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 654,
            "end": 656
          },
          "start": 649,
          "end": 656
        },
        "optional": false,
        "computed": true,
        "start": 642,
        "end": 657
      },
      "directive": null,
      "start": 642,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 667
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 668,
          "end": 669
        },
        "optional": false,
        "computed": true,
        "start": 666,
        "end": 670
      },
      "directive": null,
      "start": 666,
      "end": 671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 681,
          "end": 682
        },
        "property": {
          "type": "Literal",
          "value": "s",
          "raw": "\"s\"",
          "start": 683,
          "end": 686
        },
        "optional": false,
        "computed": true,
        "start": 681,
        "end": 687
      },
      "directive": null,
      "start": 681,
      "end": 688
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 695,
          "end": 696
        },
        "property": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 698,
            "end": 701
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 702,
            "end": 704
          },
          "start": 697,
          "end": 704
        },
        "optional": false,
        "computed": true,
        "start": 695,
        "end": 705
      },
      "directive": null,
      "start": 695,
      "end": 706
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 714,
          "end": 720
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blue",
          "optional": false,
          "typeAnnotation": null,
          "start": 721,
          "end": 725
        },
        "optional": false,
        "computed": true,
        "start": 714,
        "end": 726
      },
      "directive": null,
      "start": 714,
      "end": 727
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 752,
                  "end": 758
                },
                "start": 752,
                "end": 760
              },
              "start": 751,
              "end": 760
            },
            "start": 750,
            "end": 760
          },
          "init": null,
          "definite": false,
          "start": 750,
          "end": 760
        }
      ],
      "declare": true,
      "start": 738,
      "end": 761
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 762,
          "end": 763
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 764,
          "end": 765
        },
        "optional": false,
        "computed": true,
        "start": 762,
        "end": 766
      },
      "directive": null,
      "start": 762,
      "end": 767
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Benchmark",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 784
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "results",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 806
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 813,
                            "end": 819
                          },
                          "start": 812,
                          "end": 819
                        },
                        "start": 811,
                        "end": 819
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 822,
                        "end": 825
                      },
                      "start": 820,
                      "end": 825
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 810,
                    "end": 826
                  }
                ],
                "start": 808,
                "end": 828
              },
              "start": 806,
              "end": 828
            },
            "value": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 837,
                            "end": 843
                          },
                          "start": 836,
                          "end": 843
                        },
                        "start": 835,
                        "end": 843
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 846,
                        "end": 849
                      },
                      "start": 844,
                      "end": 849
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 834,
                    "end": 850
                  }
                ],
                "start": 832,
                "end": 852
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 853,
                "end": 855
              },
              "start": 831,
              "end": 855
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 792,
            "end": 856
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addTimingFor",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 881
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 888,
                      "end": 894
                    },
                    "start": 886,
                    "end": 894
                  },
                  "start": 882,
                  "end": 894
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 904,
                      "end": 910
                    },
                    "start": 902,
                    "end": 910
                  },
                  "start": 896,
                  "end": 910
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 922,
                            "end": 926
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "results",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 934
                          },
                          "optional": false,
                          "computed": false,
                          "start": 922,
                          "end": 934
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 935,
                          "end": 939
                        },
                        "optional": false,
                        "computed": true,
                        "start": 922,
                        "end": 940
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 943,
                            "end": 947
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "results",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 948,
                            "end": 955
                          },
                          "optional": false,
                          "computed": false,
                          "start": 943,
                          "end": 955
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 956,
                          "end": 960
                        },
                        "optional": false,
                        "computed": true,
                        "start": 943,
                        "end": 961
                      },
                      "start": 922,
                      "end": 961
                    },
                    "directive": null,
                    "start": 922,
                    "end": 962
                  }
                ],
                "start": 912,
                "end": 968
              },
              "expression": false,
              "start": 881,
              "end": 968
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 862,
            "end": 968
          }
        ],
        "start": 785,
        "end": 970
      },
      "abstract": false,
      "declare": false,
      "start": 769,
      "end": 970
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 970
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Red",
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
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "any",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 125,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 181,
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
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 195,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
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
    "value": "number",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 274,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Green",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 352,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Cyan",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "number",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 401,
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
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 429,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "Purple",
    "start": 439,
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
    "value": "[",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 483,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Magenta",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Purple",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 528,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 556,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 574,
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
    "value": "var",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 588,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "String",
    "value": "\"hue\"",
    "start": 628,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 667,
    "end": 668
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 682,
    "end": 683
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 683,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 738,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 746,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 752,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 763,
    "end": 764
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 769,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "Benchmark",
    "start": 775,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 792,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 799,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 822,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 862,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "addTimingFor",
    "start": 869,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "timing",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 904,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 927,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 935,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 948,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 956,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970
  }
]
```
