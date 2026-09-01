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
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 38
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 39,
        "end": 42
      },
      "declare": false,
      "start": 26,
      "end": 42
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
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 55
                },
                "typeArguments": null,
                "start": 53,
                "end": 55
              },
              "start": 51,
              "end": 55
            },
            "start": 47,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 55
        }
      ],
      "declare": false,
      "start": 43,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nc_i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 72
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 73,
        "end": 76
      },
      "declare": false,
      "start": 57,
      "end": 76
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
            "name": "nc_i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nc_i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 95
                },
                "typeArguments": null,
                "start": 90,
                "end": 95
              },
              "start": 88,
              "end": 95
            },
            "start": 81,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 95
        }
      ],
      "declare": false,
      "start": 77,
      "end": 96
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 234,
                    "end": 243
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 248,
                    "end": 254
                  },
                  "start": 245,
                  "end": 254
                },
                "start": 218,
                "end": 254
              },
              "start": 216,
              "end": 254
            },
            "accessibility": null,
            "static": false,
            "start": 213,
            "end": 255
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 307,
                    "end": 313
                  },
                  "start": 305,
                  "end": 313
                },
                "start": 304,
                "end": 313
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              },
              "start": 314,
              "end": 319
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 286,
            "end": 320
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 366
                    },
                    "typeArguments": null,
                    "start": 364,
                    "end": 366
                  },
                  "start": 362,
                  "end": 366
                },
                "start": 361,
                "end": 366
              }
            ],
            "returnType": null,
            "start": 345,
            "end": 368
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
            },
            "accessibility": null,
            "static": false,
            "start": 373,
            "end": 386
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 397
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 403,
                        "end": 409
                      },
                      "start": 401,
                      "end": 409
                    },
                    "start": 400,
                    "end": 409
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  },
                  "start": 411,
                  "end": 420
                },
                "start": 399,
                "end": 420
              },
              "start": 397,
              "end": 420
            },
            "accessibility": null,
            "static": false,
            "start": 391,
            "end": 421
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 430,
                    "end": 436
                  },
                  "start": 428,
                  "end": 436
                },
                "start": 427,
                "end": 436
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 426,
            "end": 446
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSNumberKeyword",
                    "start": 504,
                    "end": 510
                  },
                  "start": 502,
                  "end": 510
                },
                "start": 501,
                "end": 510
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 531,
                    "end": 537
                  },
                  "start": 529,
                  "end": 537
                },
                "start": 528,
                "end": 537
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 541,
                "end": 547
              },
              "start": 539,
              "end": 547
            },
            "start": 484,
            "end": 548
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 582
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 601,
                    "end": 607
                  },
                  "start": 599,
                  "end": 607
                },
                "start": 598,
                "end": 607
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 610,
                "end": 616
              },
              "start": 608,
              "end": 616
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 577,
            "end": 617
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 630
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 634,
                    "end": 640
                  },
                  "start": 632,
                  "end": 640
                },
                "start": 631,
                "end": 640
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 643,
                "end": 649
              },
              "start": 641,
              "end": 649
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 622,
            "end": 650
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_y",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 671
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 673,
                "end": 679
              },
              "start": 671,
              "end": 679
            },
            "accessibility": null,
            "static": false,
            "start": 667,
            "end": 680
          }
        ],
        "start": 150,
        "end": 682
      },
      "declare": false,
      "start": 137,
      "end": 682
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
            "name": "i2_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 695
                },
                "typeArguments": null,
                "start": 693,
                "end": 695
              },
              "start": 691,
              "end": 695
            },
            "start": 687,
            "end": 695
          },
          "init": null,
          "definite": false,
          "start": 687,
          "end": 695
        }
      ],
      "declare": false,
      "start": 683,
      "end": 696
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
            "name": "i2_i_x",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 707
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 714
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            "optional": false,
            "computed": false,
            "start": 710,
            "end": 716
          },
          "definite": false,
          "start": 701,
          "end": 716
        }
      ],
      "declare": false,
      "start": 697,
      "end": 717
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
            "name": "i2_i_foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 730
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 737
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 741
            },
            "optional": false,
            "computed": false,
            "start": 733,
            "end": 741
          },
          "definite": false,
          "start": 722,
          "end": 741
        }
      ],
      "declare": false,
      "start": 718,
      "end": 742
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
            "name": "i2_i_foo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 764
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 768
              },
              "optional": false,
              "computed": false,
              "start": 760,
              "end": 768
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 769,
                "end": 771
              }
            ],
            "optional": false,
            "start": 760,
            "end": 772
          },
          "definite": false,
          "start": 747,
          "end": 772
        }
      ],
      "declare": false,
      "start": 743,
      "end": 773
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
            "name": "i2_i_i2_si",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 788
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 795
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 796,
              "end": 803
            },
            "optional": false,
            "computed": true,
            "start": 791,
            "end": 804
          },
          "definite": false,
          "start": 778,
          "end": 804
        }
      ],
      "declare": false,
      "start": 774,
      "end": 805
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
            "name": "i2_i_i2_ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 820
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 827
            },
            "property": {
              "type": "Literal",
              "value": 30,
              "raw": "30",
              "start": 828,
              "end": 830
            },
            "optional": false,
            "computed": true,
            "start": 823,
            "end": 831
          },
          "definite": false,
          "start": 810,
          "end": 831
        }
      ],
      "declare": false,
      "start": 806,
      "end": 832
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
            "name": "i2_i_n",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 843
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 854
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i1_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 859
              }
            ],
            "start": 846,
            "end": 860
          },
          "definite": false,
          "start": 837,
          "end": 860
        }
      ],
      "declare": false,
      "start": 833,
      "end": 861
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
            "name": "i2_i_nc_x",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 875
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 882
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 887
            },
            "optional": false,
            "computed": false,
            "start": 878,
            "end": 887
          },
          "definite": false,
          "start": 866,
          "end": 887
        }
      ],
      "declare": false,
      "start": 862,
      "end": 888
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
            "name": "i2_i_nc_foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 904
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 911
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 918
            },
            "optional": false,
            "computed": false,
            "start": 907,
            "end": 918
          },
          "definite": false,
          "start": 893,
          "end": 918
        }
      ],
      "declare": false,
      "start": 889,
      "end": 919
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
            "name": "i2_i_nc_foo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 937
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 944
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 945,
                "end": 951
              },
              "optional": false,
              "computed": false,
              "start": 940,
              "end": 951
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 952,
                "end": 954
              }
            ],
            "optional": false,
            "start": 940,
            "end": 955
          },
          "definite": false,
          "start": 924,
          "end": 955
        }
      ],
      "declare": false,
      "start": 920,
      "end": 956
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
            "name": "i2_i_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 967
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 974
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 975,
                "end": 977
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 979,
                "end": 981
              }
            ],
            "optional": false,
            "start": 970,
            "end": 982
          },
          "definite": false,
          "start": 961,
          "end": 982
        }
      ],
      "declare": false,
      "start": 957,
      "end": 983
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
            "name": "i2_i_fnfoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 998
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1005
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1011
            },
            "optional": false,
            "computed": false,
            "start": 1001,
            "end": 1011
          },
          "definite": false,
          "start": 988,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 984,
      "end": 1012
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
            "name": "i2_i_fnfoo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1029
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1036
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnfoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1042
              },
              "optional": false,
              "computed": false,
              "start": 1032,
              "end": 1042
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1043,
                "end": 1045
              }
            ],
            "optional": false,
            "start": 1032,
            "end": 1046
          },
          "definite": false,
          "start": 1017,
          "end": 1046
        }
      ],
      "declare": false,
      "start": 1013,
      "end": 1047
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
            "name": "i2_i_nc_fnfoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1052,
            "end": 1065
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1072
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1081
            },
            "optional": false,
            "computed": false,
            "start": 1068,
            "end": 1081
          },
          "definite": false,
          "start": 1052,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1048,
      "end": 1082
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
            "name": "i2_i_nc_fnfoo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1102
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_fnfoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1118
              },
              "optional": false,
              "computed": false,
              "start": 1105,
              "end": 1118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1119,
                "end": 1121
              }
            ],
            "optional": false,
            "start": 1105,
            "end": 1122
          },
          "definite": false,
          "start": 1087,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1083,
      "end": 1123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1136
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1169,
                "end": 1175
              },
              "start": 1167,
              "end": 1175
            },
            "accessibility": null,
            "static": false,
            "start": 1166,
            "end": 1176
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1206
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 1231,
                    "end": 1237
                  },
                  "start": 1229,
                  "end": 1237
                },
                "start": 1228,
                "end": 1237
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1240,
                "end": 1246
              },
              "start": 1238,
              "end": 1246
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1205,
            "end": 1247
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1293,
                        "end": 1299
                      },
                      "start": 1291,
                      "end": 1299
                    },
                    "start": 1290,
                    "end": 1299
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1304,
                    "end": 1310
                  },
                  "start": 1301,
                  "end": 1310
                },
                "start": 1270,
                "end": 1310
              },
              "start": 1268,
              "end": 1310
            },
            "accessibility": null,
            "static": false,
            "start": 1267,
            "end": 1311
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1322,
                "end": 1328
              },
              "start": 1320,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1316,
            "end": 1329
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1338
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 1342,
                    "end": 1348
                  },
                  "start": 1340,
                  "end": 1348
                },
                "start": 1339,
                "end": 1348
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1351,
                "end": 1357
              },
              "start": 1349,
              "end": 1357
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1334,
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
              "name": "nc_l",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1367
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1373,
                        "end": 1379
                      },
                      "start": 1371,
                      "end": 1379
                    },
                    "start": 1370,
                    "end": 1379
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1384,
                    "end": 1390
                  },
                  "start": 1381,
                  "end": 1390
                },
                "start": 1369,
                "end": 1390
              },
              "start": 1367,
              "end": 1390
            },
            "accessibility": null,
            "static": false,
            "start": 1363,
            "end": 1391
          }
        ],
        "start": 1137,
        "end": 1393
      },
      "declare": false,
      "start": 1124,
      "end": 1393
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
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1404,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1404,
                "end": 1406
              },
              "start": 1402,
              "end": 1406
            },
            "start": 1398,
            "end": 1406
          },
          "init": null,
          "definite": false,
          "start": 1398,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1394,
      "end": 1407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3_i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1412
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1421,
                "end": 1422
              },
              "value": {
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1450,
                        "end": 1456
                      },
                      "start": 1448,
                      "end": 1456
                    },
                    "start": 1447,
                    "end": 1456
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 1461,
                    "end": 1468
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1471,
                    "end": 1472
                  },
                  "start": 1461,
                  "end": 1472
                },
                "id": null,
                "generator": false,
                "start": 1435,
                "end": 1472
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1421,
              "end": 1472
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1479
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1481,
                  "end": 1485
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1486,
                  "end": 1487
                },
                "optional": false,
                "computed": false,
                "start": 1481,
                "end": 1487
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1478,
              "end": 1487
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1510
              },
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1512,
                    "end": 1516
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1512,
                  "end": 1518
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1519,
                    "end": 1521
                  }
                ],
                "optional": false,
                "start": 1512,
                "end": 1522
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1509,
              "end": 1522
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1532
              },
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1540
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1534,
                  "end": 1540
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1541,
                      "end": 1545
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1546,
                      "end": 1547
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1541,
                    "end": 1547
                  }
                ],
                "optional": false,
                "start": 1534,
                "end": 1548
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1528,
              "end": 1548
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1558
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1560,
                  "end": 1564
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1566
                },
                "optional": false,
                "computed": false,
                "start": 1560,
                "end": 1566
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1554,
              "end": 1566
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1576
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1578,
                  "end": 1582
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1584
                },
                "optional": false,
                "computed": false,
                "start": 1578,
                "end": 1584
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1572,
              "end": 1584
            }
          ],
          "start": 1415,
          "end": 1586
        },
        "start": 1408,
        "end": 1586
      },
      "directive": null,
      "start": 1408,
      "end": 1587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1588,
            "end": 1592
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1593,
            "end": 1594
          },
          "optional": false,
          "computed": false,
          "start": 1588,
          "end": 1594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1595,
            "end": 1597
          }
        ],
        "optional": false,
        "start": 1588,
        "end": 1598
      },
      "directive": null,
      "start": 1588,
      "end": 1599
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1600,
            "end": 1604
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1606
          },
          "optional": false,
          "computed": false,
          "start": 1600,
          "end": 1606
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1607,
            "end": 1609
          }
        ],
        "optional": false,
        "start": 1600,
        "end": 1610
      },
      "directive": null,
      "start": 1600,
      "end": 1611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1612,
            "end": 1616
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1617,
            "end": 1621
          },
          "optional": false,
          "computed": false,
          "start": 1612,
          "end": 1621
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1622,
            "end": 1624
          }
        ],
        "optional": false,
        "start": 1612,
        "end": 1625
      },
      "directive": null,
      "start": 1612,
      "end": 1626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1631
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_l",
            "optional": false,
            "typeAnnotation": null,
            "start": 1632,
            "end": 1636
          },
          "optional": false,
          "computed": false,
          "start": 1627,
          "end": 1636
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1637,
            "end": 1639
          }
        ],
        "optional": false,
        "start": 1627,
        "end": 1640
      },
      "directive": null,
      "start": 1627,
      "end": 1641
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 1641
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "i1_i",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "nc_i1",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "nc_i1_i",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "nc_i1",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 137,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "nc_x",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "nc_foo",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 411,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 436,
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
    "value": "number",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "fnfoo",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 598,
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
    "value": "number",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "nc_fnfoo",
    "start": 622,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "nc_y",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "i2_i_x",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 710,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "i2_i_foo",
    "start": 722,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 733,
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
    "value": "foo",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "i2_i_foo_r",
    "start": 747,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 765,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 774,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "i2_i_i2_si",
    "start": 778,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 795,
    "end": 796
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 806,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "i2_i_i2_ii",
    "start": 810,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 827,
    "end": 828
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "i2_i_n",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 846,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "i1_i",
    "start": 855,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 862,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "i2_i_nc_x",
    "start": 866,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "nc_x",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "i2_i_nc_foo",
    "start": 893,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "nc_foo",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 920,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "i2_i_nc_foo_r",
    "start": 924,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "nc_foo",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 957,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "i2_i_r",
    "start": 961,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 970,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 975,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 979,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 984,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "i2_i_fnfoo",
    "start": 988,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "fnfoo",
    "start": 1006,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "i2_i_fnfoo_r",
    "start": 1017,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "fnfoo",
    "start": 1037,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1043,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "i2_i_nc_fnfoo",
    "start": 1052,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 1068,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "nc_fnfoo",
    "start": 1073,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "i2_i_nc_fnfoo_r",
    "start": 1087,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "nc_fnfoo",
    "start": 1110,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1124,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1169,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1301,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "nc_x",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "nc_f",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "nc_l",
    "start": 1363,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1408,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1450,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1461,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1481,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1512,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1519,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "nc_x",
    "start": 1528,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1534,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "nc_f",
    "start": 1554,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1560,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "nc_l",
    "start": 1572,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1578,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1595,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1600,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1607,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1612,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "nc_f",
    "start": 1617,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1622,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1627,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "nc_l",
    "start": 1632,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  }
]
```
