__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "noOp",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 20
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 29,
              "end": 31
            },
            "id": null,
            "generator": false,
            "start": 23,
            "end": 31
          },
          "definite": false,
          "start": 16,
          "end": 31
        }
      ],
      "declare": false,
      "start": 10,
      "end": 32
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
            "name": "testReflectApply",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 55
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 65
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 58,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noOp",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              {
                "type": "ThisExpression",
                "start": 78,
                "end": 82
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 84,
                "end": 86
              }
            ],
            "optional": false,
            "start": 58,
            "end": 87
          },
          "definite": false,
          "start": 39,
          "end": 87
        }
      ],
      "declare": false,
      "start": 33,
      "end": 88
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
            "name": "testReflectConstruct",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 115
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 125
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "construct",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 135
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 135
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noOp",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 140
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 142,
                "end": 144
              }
            ],
            "optional": false,
            "start": 118,
            "end": 145
          },
          "definite": false,
          "start": 95,
          "end": 145
        }
      ],
      "declare": false,
      "start": 89,
      "end": 146
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
            "name": "testReflectDefineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "defineProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 181,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 204,
                "end": 206
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 208,
                "end": 210
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 212,
                "end": 214
              }
            ],
            "optional": false,
            "start": 181,
            "end": 215
          },
          "definite": false,
          "start": 153,
          "end": 215
        }
      ],
      "declare": false,
      "start": 147,
      "end": 216
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
            "name": "testReflectDeleteProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 248
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 251,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 274,
                "end": 276
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 278,
                "end": 280
              }
            ],
            "optional": false,
            "start": 251,
            "end": 281
          },
          "definite": false,
          "start": 223,
          "end": 281
        }
      ],
      "declare": false,
      "start": 217,
      "end": 282
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
            "name": "testReflectGet",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 313
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 306,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 318,
                "end": 320
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 322,
                "end": 324
              }
            ],
            "optional": false,
            "start": 306,
            "end": 325
          },
          "definite": false,
          "start": 289,
          "end": 325
        }
      ],
      "declare": false,
      "start": 283,
      "end": 326
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
            "name": "testReflectGetOwnPropertyDescriptor",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 368
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 378
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 403
              },
              "optional": false,
              "computed": false,
              "start": 371,
              "end": 403
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 404,
                "end": 406
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 408,
                "end": 410
              }
            ],
            "optional": false,
            "start": 371,
            "end": 411
          },
          "definite": false,
          "start": 333,
          "end": 411
        }
      ],
      "declare": false,
      "start": 327,
      "end": 412
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
            "name": "testReflectGetPrototypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 444
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 454
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPrototypeOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 469
              },
              "optional": false,
              "computed": false,
              "start": 447,
              "end": 469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 470,
                "end": 472
              }
            ],
            "optional": false,
            "start": 447,
            "end": 473
          },
          "definite": false,
          "start": 419,
          "end": 473
        }
      ],
      "declare": false,
      "start": 413,
      "end": 474
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
            "name": "testReflectIsExtensible",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 504
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isExtensible",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 527
              },
              "optional": false,
              "computed": false,
              "start": 507,
              "end": 527
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 528,
                "end": 530
              }
            ],
            "optional": false,
            "start": 507,
            "end": 531
          },
          "definite": false,
          "start": 481,
          "end": 531
        }
      ],
      "declare": false,
      "start": 475,
      "end": 532
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
            "name": "testReflectOwnKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 557
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 567
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "ownKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 575
              },
              "optional": false,
              "computed": false,
              "start": 560,
              "end": 575
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 576,
                "end": 578
              }
            ],
            "optional": false,
            "start": 560,
            "end": 579
          },
          "definite": false,
          "start": 539,
          "end": 579
        }
      ],
      "declare": false,
      "start": 533,
      "end": 580
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
            "name": "testReflectPreventExtensions",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 615
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 625
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "preventExtensions",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 643
              },
              "optional": false,
              "computed": false,
              "start": 618,
              "end": 643
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 644,
                "end": 646
              }
            ],
            "optional": false,
            "start": 618,
            "end": 647
          },
          "definite": false,
          "start": 587,
          "end": 647
        }
      ],
      "declare": false,
      "start": 581,
      "end": 648
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
            "name": "testReflectSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 669
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 679
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 672,
              "end": 683
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 684,
                "end": 686
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 688,
                "end": 690
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 692,
                "end": 693
              }
            ],
            "optional": false,
            "start": 672,
            "end": 694
          },
          "definite": false,
          "start": 655,
          "end": 694
        }
      ],
      "declare": false,
      "start": 649,
      "end": 695
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
            "name": "testReflectSetPrototypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 737
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setPrototypeOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 752
              },
              "optional": false,
              "computed": false,
              "start": 730,
              "end": 752
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 753,
                "end": 755
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 757,
                "end": 759
              }
            ],
            "optional": false,
            "start": 730,
            "end": 760
          },
          "definite": false,
          "start": 702,
          "end": 760
        }
      ],
      "declare": false,
      "start": 696,
      "end": 761
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
            "name": "testArrayFind",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 782
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 786,
                    "end": 788
                  }
                ],
                "start": 785,
                "end": 789
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 794
              },
              "optional": false,
              "computed": false,
              "start": 785,
              "end": 794
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 799
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 801,
                    "end": 804
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 809
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 827,
                        "end": 831
                      },
                      "start": 820,
                      "end": 832
                    }
                  ],
                  "start": 814,
                  "end": 834
                },
                "id": null,
                "generator": false,
                "start": 795,
                "end": 834
              }
            ],
            "optional": false,
            "start": 785,
            "end": 835
          },
          "definite": false,
          "start": 769,
          "end": 835
        }
      ],
      "declare": false,
      "start": 763,
      "end": 836
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
            "name": "testArrayFindIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 861
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 865,
                    "end": 867
                  }
                ],
                "start": 864,
                "end": 868
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 878
              },
              "optional": false,
              "computed": false,
              "start": 864,
              "end": 878
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 880,
                    "end": 883
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 888
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 893
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 911,
                        "end": 915
                      },
                      "start": 904,
                      "end": 916
                    }
                  ],
                  "start": 898,
                  "end": 918
                },
                "id": null,
                "generator": false,
                "start": 879,
                "end": 918
              }
            ],
            "optional": false,
            "start": 864,
            "end": 919
          },
          "definite": false,
          "start": 843,
          "end": 919
        }
      ],
      "declare": false,
      "start": 837,
      "end": 920
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
            "name": "testArrayFill",
            "optional": false,
            "typeAnnotation": null,
            "start": 927,
            "end": 940
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 944,
                    "end": 946
                  }
                ],
                "start": 943,
                "end": 947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fill",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 952
              },
              "optional": false,
              "computed": false,
              "start": 943,
              "end": 952
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fill",
                "raw": "\"fill\"",
                "start": 953,
                "end": 959
              }
            ],
            "optional": false,
            "start": 943,
            "end": 960
          },
          "definite": false,
          "start": 927,
          "end": 960
        }
      ],
      "declare": false,
      "start": 921,
      "end": 961
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
            "name": "testArrayCopyWithin",
            "optional": false,
            "typeAnnotation": null,
            "start": 968,
            "end": 987
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 991,
                    "end": 993
                  }
                ],
                "start": 990,
                "end": 994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "copyWithin",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 1005
              },
              "optional": false,
              "computed": false,
              "start": 990,
              "end": 1005
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1006,
                "end": 1007
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1009,
                "end": 1010
              }
            ],
            "optional": false,
            "start": 990,
            "end": 1011
          },
          "definite": false,
          "start": 968,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 962,
      "end": 1012
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
            "name": "testArrayEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1035
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1039,
                    "end": 1041
                  }
                ],
                "start": 1038,
                "end": 1042
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1050
              },
              "optional": false,
              "computed": false,
              "start": 1038,
              "end": 1050
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1038,
            "end": 1052
          },
          "definite": false,
          "start": 1019,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1013,
      "end": 1053
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
            "name": "testArrayKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1073
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1077,
                    "end": 1079
                  }
                ],
                "start": 1076,
                "end": 1080
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1085
              },
              "optional": false,
              "computed": false,
              "start": 1076,
              "end": 1085
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1076,
            "end": 1087
          },
          "definite": false,
          "start": 1060,
          "end": 1087
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1088
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
            "name": "testArrayValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1110
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1114,
                    "end": 1116
                  }
                ],
                "start": 1113,
                "end": 1117
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1124
              },
              "optional": false,
              "computed": false,
              "start": 1113,
              "end": 1124
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1113,
            "end": 1126
          },
          "definite": false,
          "start": 1095,
          "end": 1126
        }
      ],
      "declare": false,
      "start": 1089,
      "end": 1127
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
            "name": "testArrayConstructorFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1134,
            "end": 1158
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 1167,
                "end": 1171
              },
              "optional": false,
              "computed": false,
              "start": 1161,
              "end": 1171
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1172,
                "end": 1174
              }
            ],
            "optional": false,
            "start": 1161,
            "end": 1175
          },
          "definite": false,
          "start": 1134,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1176
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
            "name": "testArrayConstructorOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1205
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1216
              },
              "optional": false,
              "computed": false,
              "start": 1208,
              "end": 1216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1217,
                "end": 1219
              }
            ],
            "optional": false,
            "start": 1208,
            "end": 1220
          },
          "definite": false,
          "start": 1183,
          "end": 1220
        }
      ],
      "declare": false,
      "start": 1177,
      "end": 1221
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
            "name": "testObjectConstructorAssign",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1255
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1258,
                "end": 1264
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null,
                "start": 1265,
                "end": 1271
              },
              "optional": false,
              "computed": false,
              "start": 1258,
              "end": 1271
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1272,
                "end": 1274
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1276,
                "end": 1278
              }
            ],
            "optional": false,
            "start": 1258,
            "end": 1279
          },
          "definite": false,
          "start": 1228,
          "end": 1279
        }
      ],
      "declare": false,
      "start": 1222,
      "end": 1280
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
            "name": "testObjectConstructorGetOwnPropertySymbols",
            "optional": false,
            "typeAnnotation": null,
            "start": 1287,
            "end": 1329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1332,
                "end": 1338
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertySymbols",
                "optional": false,
                "typeAnnotation": null,
                "start": 1339,
                "end": 1360
              },
              "optional": false,
              "computed": false,
              "start": 1332,
              "end": 1360
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1361,
                "end": 1363
              }
            ],
            "optional": false,
            "start": 1332,
            "end": 1364
          },
          "definite": false,
          "start": 1287,
          "end": 1364
        }
      ],
      "declare": false,
      "start": 1281,
      "end": 1365
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
            "name": "testObjectConstructorKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1397
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1400,
                "end": 1406
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1407,
                "end": 1411
              },
              "optional": false,
              "computed": false,
              "start": 1400,
              "end": 1411
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1412,
                "end": 1414
              }
            ],
            "optional": false,
            "start": 1400,
            "end": 1415
          },
          "definite": false,
          "start": 1372,
          "end": 1415
        }
      ],
      "declare": false,
      "start": 1366,
      "end": 1416
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
            "name": "testObjectConstructorIs",
            "optional": false,
            "typeAnnotation": null,
            "start": 1423,
            "end": 1446
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1455
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1458
              },
              "optional": false,
              "computed": false,
              "start": 1449,
              "end": 1458
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1459,
                "end": 1461
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1463,
                "end": 1465
              }
            ],
            "optional": false,
            "start": 1449,
            "end": 1466
          },
          "definite": false,
          "start": 1423,
          "end": 1466
        }
      ],
      "declare": false,
      "start": 1417,
      "end": 1467
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
            "name": "testObjectConstructorSetPrototypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1474,
            "end": 1509
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1512,
                "end": 1518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setPrototypeOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1533
              },
              "optional": false,
              "computed": false,
              "start": 1512,
              "end": 1533
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1534,
                "end": 1536
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1538,
                "end": 1540
              }
            ],
            "optional": false,
            "start": 1512,
            "end": 1541
          },
          "definite": false,
          "start": 1474,
          "end": 1541
        }
      ],
      "declare": false,
      "start": 1468,
      "end": 1542
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
            "name": "testNumberConstructorIsFinite",
            "optional": false,
            "typeAnnotation": null,
            "start": 1549,
            "end": 1578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFinite",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1596
              },
              "optional": false,
              "computed": false,
              "start": 1581,
              "end": 1596
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1597,
                "end": 1598
              }
            ],
            "optional": false,
            "start": 1581,
            "end": 1599
          },
          "definite": false,
          "start": 1549,
          "end": 1599
        }
      ],
      "declare": false,
      "start": 1543,
      "end": 1600
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
            "name": "testNumberConstructorIsInteger",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1637
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1640,
                "end": 1646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isInteger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1656
              },
              "optional": false,
              "computed": false,
              "start": 1640,
              "end": 1656
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1657,
                "end": 1658
              }
            ],
            "optional": false,
            "start": 1640,
            "end": 1659
          },
          "definite": false,
          "start": 1607,
          "end": 1659
        }
      ],
      "declare": false,
      "start": 1601,
      "end": 1660
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
            "name": "testNumberConstructorIsNan",
            "optional": false,
            "typeAnnotation": null,
            "start": 1667,
            "end": 1693
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1696,
                "end": 1702
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 1703,
                "end": 1708
              },
              "optional": false,
              "computed": false,
              "start": 1696,
              "end": 1708
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1709,
                "end": 1710
              }
            ],
            "optional": false,
            "start": 1696,
            "end": 1711
          },
          "definite": false,
          "start": 1667,
          "end": 1711
        }
      ],
      "declare": false,
      "start": 1661,
      "end": 1712
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
            "name": "testNumberConstructorIsSafeInteger",
            "optional": false,
            "typeAnnotation": null,
            "start": 1719,
            "end": 1753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1762
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSafeInteger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1763,
                "end": 1776
              },
              "optional": false,
              "computed": false,
              "start": 1756,
              "end": 1776
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1777,
                "end": 1778
              }
            ],
            "optional": false,
            "start": 1756,
            "end": 1779
          },
          "definite": false,
          "start": 1719,
          "end": 1779
        }
      ],
      "declare": false,
      "start": 1713,
      "end": 1780
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
            "name": "testNumberConstructorParseFloat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1787,
            "end": 1818
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1821,
                "end": 1827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "parseFloat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1828,
                "end": 1838
              },
              "optional": false,
              "computed": false,
              "start": 1821,
              "end": 1838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1839,
                "end": 1842
              }
            ],
            "optional": false,
            "start": 1821,
            "end": 1843
          },
          "definite": false,
          "start": 1787,
          "end": 1843
        }
      ],
      "declare": false,
      "start": 1781,
      "end": 1844
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
            "name": "testNumberConstructorParseInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 1851,
            "end": 1880
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1889
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "parseInt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1890,
                "end": 1898
              },
              "optional": false,
              "computed": false,
              "start": 1883,
              "end": 1898
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1899,
                "end": 1902
              }
            ],
            "optional": false,
            "start": 1883,
            "end": 1903
          },
          "definite": false,
          "start": 1851,
          "end": 1903
        }
      ],
      "declare": false,
      "start": 1845,
      "end": 1904
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
            "name": "testMathClz32",
            "optional": false,
            "typeAnnotation": null,
            "start": 1911,
            "end": 1924
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1931
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clz32",
                "optional": false,
                "typeAnnotation": null,
                "start": 1932,
                "end": 1937
              },
              "optional": false,
              "computed": false,
              "start": 1927,
              "end": 1937
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1938,
                "end": 1939
              }
            ],
            "optional": false,
            "start": 1927,
            "end": 1940
          },
          "definite": false,
          "start": 1911,
          "end": 1940
        }
      ],
      "declare": false,
      "start": 1905,
      "end": 1941
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
            "name": "testMathImul",
            "optional": false,
            "typeAnnotation": null,
            "start": 1948,
            "end": 1960
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 1963,
                "end": 1967
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "imul",
                "optional": false,
                "typeAnnotation": null,
                "start": 1968,
                "end": 1972
              },
              "optional": false,
              "computed": false,
              "start": 1963,
              "end": 1972
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1973,
                "end": 1974
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1975,
                "end": 1976
              }
            ],
            "optional": false,
            "start": 1963,
            "end": 1977
          },
          "definite": false,
          "start": 1948,
          "end": 1977
        }
      ],
      "declare": false,
      "start": 1942,
      "end": 1978
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
            "name": "testMathSign",
            "optional": false,
            "typeAnnotation": null,
            "start": 1985,
            "end": 1997
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2000,
                "end": 2004
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sign",
                "optional": false,
                "typeAnnotation": null,
                "start": 2005,
                "end": 2009
              },
              "optional": false,
              "computed": false,
              "start": 2000,
              "end": 2009
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2010,
                "end": 2011
              }
            ],
            "optional": false,
            "start": 2000,
            "end": 2012
          },
          "definite": false,
          "start": 1985,
          "end": 2012
        }
      ],
      "declare": false,
      "start": 1979,
      "end": 2013
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
            "name": "testMathLog10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2020,
            "end": 2033
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2036,
                "end": 2040
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log10",
                "optional": false,
                "typeAnnotation": null,
                "start": 2041,
                "end": 2046
              },
              "optional": false,
              "computed": false,
              "start": 2036,
              "end": 2046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2047,
                "end": 2048
              }
            ],
            "optional": false,
            "start": 2036,
            "end": 2049
          },
          "definite": false,
          "start": 2020,
          "end": 2049
        }
      ],
      "declare": false,
      "start": 2014,
      "end": 2050
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
            "name": "testMathLog2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2057,
            "end": 2069
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2072,
                "end": 2076
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2077,
                "end": 2081
              },
              "optional": false,
              "computed": false,
              "start": 2072,
              "end": 2081
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2082,
                "end": 2083
              }
            ],
            "optional": false,
            "start": 2072,
            "end": 2084
          },
          "definite": false,
          "start": 2057,
          "end": 2084
        }
      ],
      "declare": false,
      "start": 2051,
      "end": 2085
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
            "name": "testMathLog1p",
            "optional": false,
            "typeAnnotation": null,
            "start": 2092,
            "end": 2105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2108,
                "end": 2112
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log1p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2113,
                "end": 2118
              },
              "optional": false,
              "computed": false,
              "start": 2108,
              "end": 2118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2119,
                "end": 2120
              }
            ],
            "optional": false,
            "start": 2108,
            "end": 2121
          },
          "definite": false,
          "start": 2092,
          "end": 2121
        }
      ],
      "declare": false,
      "start": 2086,
      "end": 2122
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
            "name": "testMathExpm1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2129,
            "end": 2142
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2145,
                "end": 2149
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "expm1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2150,
                "end": 2155
              },
              "optional": false,
              "computed": false,
              "start": 2145,
              "end": 2155
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2156,
                "end": 2157
              }
            ],
            "optional": false,
            "start": 2145,
            "end": 2158
          },
          "definite": false,
          "start": 2129,
          "end": 2158
        }
      ],
      "declare": false,
      "start": 2123,
      "end": 2159
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
            "name": "testMathCosh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2166,
            "end": 2178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2181,
                "end": 2185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cosh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2186,
                "end": 2190
              },
              "optional": false,
              "computed": false,
              "start": 2181,
              "end": 2190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2191,
                "end": 2192
              }
            ],
            "optional": false,
            "start": 2181,
            "end": 2193
          },
          "definite": false,
          "start": 2166,
          "end": 2193
        }
      ],
      "declare": false,
      "start": 2160,
      "end": 2194
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
            "name": "testMathSinh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2213
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2220
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sinh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2225
              },
              "optional": false,
              "computed": false,
              "start": 2216,
              "end": 2225
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2226,
                "end": 2227
              }
            ],
            "optional": false,
            "start": 2216,
            "end": 2228
          },
          "definite": false,
          "start": 2201,
          "end": 2228
        }
      ],
      "declare": false,
      "start": 2195,
      "end": 2229
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
            "name": "testMathTanh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2236,
            "end": 2248
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2251,
                "end": 2255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tanh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2256,
                "end": 2260
              },
              "optional": false,
              "computed": false,
              "start": 2251,
              "end": 2260
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2261,
                "end": 2262
              }
            ],
            "optional": false,
            "start": 2251,
            "end": 2263
          },
          "definite": false,
          "start": 2236,
          "end": 2263
        }
      ],
      "declare": false,
      "start": 2230,
      "end": 2264
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
            "name": "testMathAcosh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2271,
            "end": 2284
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2287,
                "end": 2291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "acosh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2292,
                "end": 2297
              },
              "optional": false,
              "computed": false,
              "start": 2287,
              "end": 2297
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2298,
                "end": 2299
              }
            ],
            "optional": false,
            "start": 2287,
            "end": 2300
          },
          "definite": false,
          "start": 2271,
          "end": 2300
        }
      ],
      "declare": false,
      "start": 2265,
      "end": 2301
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
            "name": "testMathAsinh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2308,
            "end": 2321
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2324,
                "end": 2328
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "asinh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2329,
                "end": 2334
              },
              "optional": false,
              "computed": false,
              "start": 2324,
              "end": 2334
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2335,
                "end": 2336
              }
            ],
            "optional": false,
            "start": 2324,
            "end": 2337
          },
          "definite": false,
          "start": 2308,
          "end": 2337
        }
      ],
      "declare": false,
      "start": 2302,
      "end": 2338
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
            "name": "testMathAtanh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2345,
            "end": 2358
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2361,
                "end": 2365
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "atanh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2366,
                "end": 2371
              },
              "optional": false,
              "computed": false,
              "start": 2361,
              "end": 2371
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2372,
                "end": 2373
              }
            ],
            "optional": false,
            "start": 2361,
            "end": 2374
          },
          "definite": false,
          "start": 2345,
          "end": 2374
        }
      ],
      "declare": false,
      "start": 2339,
      "end": 2375
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
            "name": "testMathHypot",
            "optional": false,
            "typeAnnotation": null,
            "start": 2382,
            "end": 2395
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2398,
                "end": 2402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hypot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2408
              },
              "optional": false,
              "computed": false,
              "start": 2398,
              "end": 2408
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2409,
                "end": 2410
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2411,
                "end": 2412
              }
            ],
            "optional": false,
            "start": 2398,
            "end": 2413
          },
          "definite": false,
          "start": 2382,
          "end": 2413
        }
      ],
      "declare": false,
      "start": 2376,
      "end": 2414
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
            "name": "testMathTrunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 2421,
            "end": 2434
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2437,
                "end": 2441
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 2442,
                "end": 2447
              },
              "optional": false,
              "computed": false,
              "start": 2437,
              "end": 2447
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2448,
                "end": 2449
              }
            ],
            "optional": false,
            "start": 2437,
            "end": 2450
          },
          "definite": false,
          "start": 2421,
          "end": 2450
        }
      ],
      "declare": false,
      "start": 2415,
      "end": 2451
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
            "name": "testMathFround",
            "optional": false,
            "typeAnnotation": null,
            "start": 2458,
            "end": 2472
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2475,
                "end": 2479
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fround",
                "optional": false,
                "typeAnnotation": null,
                "start": 2480,
                "end": 2486
              },
              "optional": false,
              "computed": false,
              "start": 2475,
              "end": 2486
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2487,
                "end": 2488
              }
            ],
            "optional": false,
            "start": 2475,
            "end": 2489
          },
          "definite": false,
          "start": 2458,
          "end": 2489
        }
      ],
      "declare": false,
      "start": 2452,
      "end": 2490
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
            "name": "testMathCbrt",
            "optional": false,
            "typeAnnotation": null,
            "start": 2497,
            "end": 2509
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2512,
                "end": 2516
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cbrt",
                "optional": false,
                "typeAnnotation": null,
                "start": 2517,
                "end": 2521
              },
              "optional": false,
              "computed": false,
              "start": 2512,
              "end": 2521
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2522,
                "end": 2523
              }
            ],
            "optional": false,
            "start": 2512,
            "end": 2524
          },
          "definite": false,
          "start": 2497,
          "end": 2524
        }
      ],
      "declare": false,
      "start": 2491,
      "end": 2525
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
            "name": "testMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2541,
                  "end": 2544
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2545,
                      "end": 2548
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2550,
                      "end": 2553
                    }
                  ],
                  "start": 2544,
                  "end": 2554
                },
                "start": 2541,
                "end": 2554
              },
              "start": 2539,
              "end": 2554
            },
            "start": 2532,
            "end": 2554
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2557,
              "end": 2561
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2565,
              "end": 2568
            },
            "start": 2557,
            "end": 2568
          },
          "definite": false,
          "start": 2532,
          "end": 2568
        }
      ],
      "declare": false,
      "start": 2526,
      "end": 2569
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2585,
                  "end": 2588
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2589,
                      "end": 2592
                    }
                  ],
                  "start": 2588,
                  "end": 2593
                },
                "start": 2585,
                "end": 2593
              },
              "start": 2583,
              "end": 2593
            },
            "start": 2576,
            "end": 2593
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2596,
              "end": 2600
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2604,
              "end": 2607
            },
            "start": 2596,
            "end": 2607
          },
          "definite": false,
          "start": 2576,
          "end": 2607
        }
      ],
      "declare": false,
      "start": 2570,
      "end": 2608
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
            "name": "testPromiseAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 2615,
            "end": 2629
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2632,
                "end": 2639
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2640,
                "end": 2643
              },
              "optional": false,
              "computed": false,
              "start": 2632,
              "end": 2643
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 2644,
                "end": 2646
              }
            ],
            "optional": false,
            "start": 2632,
            "end": 2647
          },
          "definite": false,
          "start": 2615,
          "end": 2647
        }
      ],
      "declare": false,
      "start": 2609,
      "end": 2648
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
            "name": "testPromiseRace",
            "optional": false,
            "typeAnnotation": null,
            "start": 2655,
            "end": 2670
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2673,
                "end": 2680
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 2681,
                "end": 2685
              },
              "optional": false,
              "computed": false,
              "start": 2673,
              "end": 2685
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 2686,
                "end": 2688
              }
            ],
            "optional": false,
            "start": 2673,
            "end": 2689
          },
          "definite": false,
          "start": 2655,
          "end": 2689
        }
      ],
      "declare": false,
      "start": 2649,
      "end": 2690
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
            "name": "testPromiseResolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 2697,
            "end": 2715
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2718,
                "end": 2725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 2726,
                "end": 2733
              },
              "optional": false,
              "computed": false,
              "start": 2718,
              "end": 2733
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2718,
            "end": 2735
          },
          "definite": false,
          "start": 2697,
          "end": 2735
        }
      ],
      "declare": false,
      "start": 2691,
      "end": 2736
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
            "name": "testPromiseReject",
            "optional": false,
            "typeAnnotation": null,
            "start": 2743,
            "end": 2760
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2763,
                "end": 2770
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null,
                "start": 2771,
                "end": 2777
              },
              "optional": false,
              "computed": false,
              "start": 2763,
              "end": 2777
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2763,
            "end": 2779
          },
          "definite": false,
          "start": 2743,
          "end": 2779
        }
      ],
      "declare": false,
      "start": 2737,
      "end": 2780
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
            "name": "testSymbolFor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2787,
            "end": 2800
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2803,
                "end": 2809
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null,
                "start": 2810,
                "end": 2813
              },
              "optional": false,
              "computed": false,
              "start": 2803,
              "end": 2813
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 2814,
                "end": 2817
              }
            ],
            "optional": false,
            "start": 2803,
            "end": 2818
          },
          "definite": false,
          "start": 2787,
          "end": 2818
        }
      ],
      "declare": false,
      "start": 2781,
      "end": 2819
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
            "name": "testSymbolKeyFor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2826,
            "end": 2842
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2845,
                "end": 2851
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keyFor",
                "optional": false,
                "typeAnnotation": null,
                "start": 2852,
                "end": 2858
              },
              "optional": false,
              "computed": false,
              "start": 2845,
              "end": 2858
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testSymbolFor",
                "optional": false,
                "typeAnnotation": null,
                "start": 2859,
                "end": 2872
              }
            ],
            "optional": false,
            "start": 2845,
            "end": 2873
          },
          "definite": false,
          "start": 2826,
          "end": 2873
        }
      ],
      "declare": false,
      "start": 2820,
      "end": 2874
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
            "name": "testWeakMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2894,
                  "end": 2901
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2902,
                      "end": 2905
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2907,
                      "end": 2910
                    }
                  ],
                  "start": 2901,
                  "end": 2911
                },
                "start": 2894,
                "end": 2911
              },
              "start": 2892,
              "end": 2911
            },
            "start": 2881,
            "end": 2911
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2914,
              "end": 2918
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2922,
              "end": 2925
            },
            "start": 2914,
            "end": 2925
          },
          "definite": false,
          "start": 2881,
          "end": 2925
        }
      ],
      "declare": false,
      "start": 2875,
      "end": 2926
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
            "name": "testWeakSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2946,
                  "end": 2953
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2954,
                      "end": 2957
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2959,
                      "end": 2962
                    }
                  ],
                  "start": 2953,
                  "end": 2963
                },
                "start": 2946,
                "end": 2963
              },
              "start": 2944,
              "end": 2963
            },
            "start": 2933,
            "end": 2963
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2966,
              "end": 2970
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2974,
              "end": 2977
            },
            "start": 2966,
            "end": 2977
          },
          "definite": false,
          "start": 2933,
          "end": 2977
        }
      ],
      "declare": false,
      "start": 2927,
      "end": 2978
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
            "name": "testIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2999,
                  "end": 3007
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 3008,
                      "end": 3011
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3013,
                      "end": 3016
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3018,
                      "end": 3021
                    }
                  ],
                  "start": 3007,
                  "end": 3022
                },
                "start": 2999,
                "end": 3022
              },
              "start": 2997,
              "end": 3022
            },
            "start": 2985,
            "end": 3022
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3025,
              "end": 3029
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3033,
              "end": 3036
            },
            "start": 3025,
            "end": 3036
          },
          "definite": false,
          "start": 2985,
          "end": 3036
        }
      ],
      "declare": false,
      "start": 2979,
      "end": 3037
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
            "name": "testAsyncIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3063,
                  "end": 3076
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 3077,
                      "end": 3080
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3082,
                      "end": 3085
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3087,
                      "end": 3090
                    }
                  ],
                  "start": 3076,
                  "end": 3091
                },
                "start": 3063,
                "end": 3091
              },
              "start": 3061,
              "end": 3091
            },
            "start": 3044,
            "end": 3091
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3094,
              "end": 3098
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3102,
              "end": 3105
            },
            "start": 3094,
            "end": 3105
          },
          "definite": false,
          "start": 3044,
          "end": 3105
        }
      ],
      "declare": false,
      "start": 3038,
      "end": 3106
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
            "name": "testStringCodePointAt",
            "optional": false,
            "typeAnnotation": null,
            "start": 3113,
            "end": 3134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3137,
                "end": 3139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "codePointAt",
                "optional": false,
                "typeAnnotation": null,
                "start": 3140,
                "end": 3151
              },
              "optional": false,
              "computed": false,
              "start": 3137,
              "end": 3151
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3152,
                "end": 3153
              }
            ],
            "optional": false,
            "start": 3137,
            "end": 3154
          },
          "definite": false,
          "start": 3113,
          "end": 3154
        }
      ],
      "declare": false,
      "start": 3107,
      "end": 3155
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
            "name": "testStringIncludes",
            "optional": false,
            "typeAnnotation": null,
            "start": 3162,
            "end": 3180
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3183,
                "end": 3185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "includes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3186,
                "end": 3194
              },
              "optional": false,
              "computed": false,
              "start": 3183,
              "end": 3194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3195,
                "end": 3197
              }
            ],
            "optional": false,
            "start": 3183,
            "end": 3198
          },
          "definite": false,
          "start": 3162,
          "end": 3198
        }
      ],
      "declare": false,
      "start": 3156,
      "end": 3199
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
            "name": "testStringEndsWith",
            "optional": false,
            "typeAnnotation": null,
            "start": 3206,
            "end": 3224
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3227,
                "end": 3229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "endsWith",
                "optional": false,
                "typeAnnotation": null,
                "start": 3230,
                "end": 3238
              },
              "optional": false,
              "computed": false,
              "start": 3227,
              "end": 3238
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3239,
                "end": 3241
              }
            ],
            "optional": false,
            "start": 3227,
            "end": 3242
          },
          "definite": false,
          "start": 3206,
          "end": 3242
        }
      ],
      "declare": false,
      "start": 3200,
      "end": 3243
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
            "name": "testStringNormalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 3250,
            "end": 3269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3272,
                "end": 3274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "normalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 3275,
                "end": 3284
              },
              "optional": false,
              "computed": false,
              "start": 3272,
              "end": 3284
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3272,
            "end": 3286
          },
          "definite": false,
          "start": 3250,
          "end": 3286
        }
      ],
      "declare": false,
      "start": 3244,
      "end": 3287
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
            "name": "testStringRepeat",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3310
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3313,
                "end": 3315
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "repeat",
                "optional": false,
                "typeAnnotation": null,
                "start": 3316,
                "end": 3322
              },
              "optional": false,
              "computed": false,
              "start": 3313,
              "end": 3322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3323,
                "end": 3324
              }
            ],
            "optional": false,
            "start": 3313,
            "end": 3325
          },
          "definite": false,
          "start": 3294,
          "end": 3325
        }
      ],
      "declare": false,
      "start": 3288,
      "end": 3326
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
            "name": "testStringStartsWith",
            "optional": false,
            "typeAnnotation": null,
            "start": 3333,
            "end": 3353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3356,
                "end": 3358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "startsWith",
                "optional": false,
                "typeAnnotation": null,
                "start": 3359,
                "end": 3369
              },
              "optional": false,
              "computed": false,
              "start": 3356,
              "end": 3369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3370,
                "end": 3372
              }
            ],
            "optional": false,
            "start": 3356,
            "end": 3373
          },
          "definite": false,
          "start": 3333,
          "end": 3373
        }
      ],
      "declare": false,
      "start": 3327,
      "end": 3374
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
            "name": "testStringAnchor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3381,
            "end": 3397
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3400,
                "end": 3402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anchor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3403,
                "end": 3409
              },
              "optional": false,
              "computed": false,
              "start": 3400,
              "end": 3409
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3410,
                "end": 3412
              }
            ],
            "optional": false,
            "start": 3400,
            "end": 3413
          },
          "definite": false,
          "start": 3381,
          "end": 3413
        }
      ],
      "declare": false,
      "start": 3375,
      "end": 3414
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
            "name": "testStringBig",
            "optional": false,
            "typeAnnotation": null,
            "start": 3421,
            "end": 3434
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3437,
                "end": 3439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "big",
                "optional": false,
                "typeAnnotation": null,
                "start": 3440,
                "end": 3443
              },
              "optional": false,
              "computed": false,
              "start": 3437,
              "end": 3443
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3437,
            "end": 3445
          },
          "definite": false,
          "start": 3421,
          "end": 3445
        }
      ],
      "declare": false,
      "start": 3415,
      "end": 3446
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
            "name": "testStringBlink",
            "optional": false,
            "typeAnnotation": null,
            "start": 3453,
            "end": 3468
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3471,
                "end": 3473
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blink",
                "optional": false,
                "typeAnnotation": null,
                "start": 3474,
                "end": 3479
              },
              "optional": false,
              "computed": false,
              "start": 3471,
              "end": 3479
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3471,
            "end": 3481
          },
          "definite": false,
          "start": 3453,
          "end": 3481
        }
      ],
      "declare": false,
      "start": 3447,
      "end": 3482
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
            "name": "testStringBold",
            "optional": false,
            "typeAnnotation": null,
            "start": 3489,
            "end": 3503
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3506,
                "end": 3508
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bold",
                "optional": false,
                "typeAnnotation": null,
                "start": 3509,
                "end": 3513
              },
              "optional": false,
              "computed": false,
              "start": 3506,
              "end": 3513
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3506,
            "end": 3515
          },
          "definite": false,
          "start": 3489,
          "end": 3515
        }
      ],
      "declare": false,
      "start": 3483,
      "end": 3516
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
            "name": "testStringFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 3523,
            "end": 3538
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3541,
                "end": 3543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 3544,
                "end": 3549
              },
              "optional": false,
              "computed": false,
              "start": 3541,
              "end": 3549
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3541,
            "end": 3551
          },
          "definite": false,
          "start": 3523,
          "end": 3551
        }
      ],
      "declare": false,
      "start": 3517,
      "end": 3552
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
            "name": "testStringFontColor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3559,
            "end": 3578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3581,
                "end": 3583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fontcolor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3584,
                "end": 3593
              },
              "optional": false,
              "computed": false,
              "start": 3581,
              "end": 3593
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "blue",
                "raw": "\"blue\"",
                "start": 3594,
                "end": 3600
              }
            ],
            "optional": false,
            "start": 3581,
            "end": 3601
          },
          "definite": false,
          "start": 3559,
          "end": 3601
        }
      ],
      "declare": false,
      "start": 3553,
      "end": 3602
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
            "name": "testStringFontSize",
            "optional": false,
            "typeAnnotation": null,
            "start": 3609,
            "end": 3627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3630,
                "end": 3632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fontsize",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3641
              },
              "optional": false,
              "computed": false,
              "start": 3630,
              "end": 3641
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3642,
                "end": 3643
              }
            ],
            "optional": false,
            "start": 3630,
            "end": 3644
          },
          "definite": false,
          "start": 3609,
          "end": 3644
        }
      ],
      "declare": false,
      "start": 3603,
      "end": 3645
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
            "name": "testStringItalics",
            "optional": false,
            "typeAnnotation": null,
            "start": 3652,
            "end": 3669
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3672,
                "end": 3674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "italics",
                "optional": false,
                "typeAnnotation": null,
                "start": 3675,
                "end": 3682
              },
              "optional": false,
              "computed": false,
              "start": 3672,
              "end": 3682
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3672,
            "end": 3684
          },
          "definite": false,
          "start": 3652,
          "end": 3684
        }
      ],
      "declare": false,
      "start": 3646,
      "end": 3685
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
            "name": "testStringLink",
            "optional": false,
            "typeAnnotation": null,
            "start": 3692,
            "end": 3706
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3709,
                "end": 3711
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "link",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3716
              },
              "optional": false,
              "computed": false,
              "start": 3709,
              "end": 3716
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3717,
                "end": 3719
              }
            ],
            "optional": false,
            "start": 3709,
            "end": 3720
          },
          "definite": false,
          "start": 3692,
          "end": 3720
        }
      ],
      "declare": false,
      "start": 3686,
      "end": 3721
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
            "name": "testStringSmall",
            "optional": false,
            "typeAnnotation": null,
            "start": 3728,
            "end": 3743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3746,
                "end": 3748
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "small",
                "optional": false,
                "typeAnnotation": null,
                "start": 3749,
                "end": 3754
              },
              "optional": false,
              "computed": false,
              "start": 3746,
              "end": 3754
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3746,
            "end": 3756
          },
          "definite": false,
          "start": 3728,
          "end": 3756
        }
      ],
      "declare": false,
      "start": 3722,
      "end": 3757
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
            "name": "testStringStrike",
            "optional": false,
            "typeAnnotation": null,
            "start": 3764,
            "end": 3780
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3783,
                "end": 3785
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "strike",
                "optional": false,
                "typeAnnotation": null,
                "start": 3786,
                "end": 3792
              },
              "optional": false,
              "computed": false,
              "start": 3783,
              "end": 3792
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3783,
            "end": 3794
          },
          "definite": false,
          "start": 3764,
          "end": 3794
        }
      ],
      "declare": false,
      "start": 3758,
      "end": 3795
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
            "name": "testStringSub",
            "optional": false,
            "typeAnnotation": null,
            "start": 3802,
            "end": 3815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3818,
                "end": 3820
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sub",
                "optional": false,
                "typeAnnotation": null,
                "start": 3821,
                "end": 3824
              },
              "optional": false,
              "computed": false,
              "start": 3818,
              "end": 3824
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3818,
            "end": 3826
          },
          "definite": false,
          "start": 3802,
          "end": 3826
        }
      ],
      "declare": false,
      "start": 3796,
      "end": 3827
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
            "name": "testStringSup",
            "optional": false,
            "typeAnnotation": null,
            "start": 3834,
            "end": 3847
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3850,
                "end": 3852
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sup",
                "optional": false,
                "typeAnnotation": null,
                "start": 3853,
                "end": 3856
              },
              "optional": false,
              "computed": false,
              "start": 3850,
              "end": 3856
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3850,
            "end": 3858
          },
          "definite": false,
          "start": 3834,
          "end": 3858
        }
      ],
      "declare": false,
      "start": 3828,
      "end": 3859
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
            "name": "testStringConstructorFromCodePoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 3866,
            "end": 3900
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 3903,
                "end": 3909
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromCodePoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 3910,
                "end": 3923
              },
              "optional": false,
              "computed": false,
              "start": 3903,
              "end": 3923
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3903,
            "end": 3925
          },
          "definite": false,
          "start": 3866,
          "end": 3925
        }
      ],
      "declare": false,
      "start": 3860,
      "end": 3926
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
            "name": "testStringConstructorRaw",
            "optional": false,
            "typeAnnotation": null,
            "start": 3933,
            "end": 3957
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 3960,
                "end": 3966
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "raw",
                "optional": false,
                "typeAnnotation": null,
                "start": 3967,
                "end": 3970
              },
              "optional": false,
              "computed": false,
              "start": 3960,
              "end": 3970
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3970,
                  "end": 3972
                }
              ],
              "expressions": [],
              "start": 3970,
              "end": 3972
            },
            "start": 3960,
            "end": 3972
          },
          "definite": false,
          "start": 3933,
          "end": 3972
        }
      ],
      "declare": false,
      "start": 3927,
      "end": 3973
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
            "name": "testRegExpFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 3980,
            "end": 3995
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "pattern": "abc",
                "flags": "g"
              },
              "start": 3998,
              "end": 4004
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "flags",
              "optional": false,
              "typeAnnotation": null,
              "start": 4005,
              "end": 4010
            },
            "optional": false,
            "computed": false,
            "start": 3998,
            "end": 4010
          },
          "definite": false,
          "start": 3980,
          "end": 4010
        }
      ],
      "declare": false,
      "start": 3974,
      "end": 4011
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
            "name": "testRegExpSticky",
            "optional": false,
            "typeAnnotation": null,
            "start": 4018,
            "end": 4034
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "pattern": "abc",
                "flags": "g"
              },
              "start": 4037,
              "end": 4043
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "sticky",
              "optional": false,
              "typeAnnotation": null,
              "start": 4044,
              "end": 4050
            },
            "optional": false,
            "computed": false,
            "start": 4037,
            "end": 4050
          },
          "definite": false,
          "start": 4018,
          "end": 4050
        }
      ],
      "declare": false,
      "start": 4012,
      "end": 4051
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
            "name": "testRegExpUnicode",
            "optional": false,
            "typeAnnotation": null,
            "start": 4058,
            "end": 4075
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "pattern": "abc",
                "flags": "g"
              },
              "start": 4078,
              "end": 4084
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "unicode",
              "optional": false,
              "typeAnnotation": null,
              "start": 4085,
              "end": 4092
            },
            "optional": false,
            "computed": false,
            "start": 4078,
            "end": 4092
          },
          "definite": false,
          "start": 4058,
          "end": 4092
        }
      ],
      "declare": false,
      "start": 4052,
      "end": 4093
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 4093
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "noOp",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "testReflectApply",
    "start": 39,
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
    "value": "Reflect",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "noOp",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "testReflectConstruct",
    "start": 95,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 118,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "construct",
    "start": 126,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "noOp",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "testReflectDefineProperty",
    "start": 153,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 189,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"\"",
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
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "testReflectDeleteProperty",
    "start": 223,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 251,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "deleteProperty",
    "start": 259,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "testReflectGet",
    "start": 289,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 322,
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
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 327,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "testReflectGetOwnPropertyDescriptor",
    "start": 333,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "getOwnPropertyDescriptor",
    "start": 379,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 413,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "testReflectGetPrototypeOf",
    "start": 419,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "getPrototypeOf",
    "start": 455,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 475,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "testReflectIsExtensible",
    "start": 481,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "isExtensible",
    "start": 515,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
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
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 533,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "testReflectOwnKeys",
    "start": 539,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 560,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "ownKeys",
    "start": 568,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 581,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "testReflectPreventExtensions",
    "start": 587,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 618,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "preventExtensions",
    "start": 626,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 649,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "testReflectSet",
    "start": 655,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 672,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 680,
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
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 696,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "testReflectSetPrototypeOf",
    "start": 702,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 730,
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
    "value": "setPrototypeOf",
    "start": 738,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 763,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "testArrayFind",
    "start": 769,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 801,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 811,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 820,
    "end": 826
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
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
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 837,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "testArrayFindIndex",
    "start": 843,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 864,
    "end": 865
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 865,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "findIndex",
    "start": 869,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 880,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 885,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 895,
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
    "start": 904,
    "end": 910
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 921,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "testArrayFill",
    "start": 927,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 943,
    "end": 944
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 944,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 946,
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
    "value": "fill",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "String",
    "value": "\"fill\"",
    "start": 953,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 962,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "testArrayCopyWithin",
    "start": 968,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 990,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "copyWithin",
    "start": 995,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
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
    "value": "const",
    "start": 1013,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "testArrayEntries",
    "start": 1019,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 1043,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "testArrayKeys",
    "start": 1060,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1089,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "testArrayValues",
    "start": 1095,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1114,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1128,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "testArrayConstructorFrom",
    "start": 1134,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1177,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "testArrayConstructorOf",
    "start": 1183,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1222,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorAssign",
    "start": 1228,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1258,
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
    "value": "assign",
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
    "value": "{",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1281,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorGetOwnPropertySymbols",
    "start": 1287,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "getOwnPropertySymbols",
    "start": 1339,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1366,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorKeys",
    "start": 1372,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1400,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorIs",
    "start": 1423,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1449,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1456,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1468,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorSetPrototypeOf",
    "start": 1474,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "setPrototypeOf",
    "start": 1519,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1543,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "testNumberConstructorIsFinite",
    "start": 1549,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1581,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "isFinite",
    "start": 1588,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1601,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "testNumberConstructorIsInteger",
    "start": 1607,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1640,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "isInteger",
    "start": 1647,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1661,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "testNumberConstructorIsNan",
    "start": 1667,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "isNaN",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1713,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "testNumberConstructorIsSafeInteger",
    "start": 1719,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1756,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "isSafeInteger",
    "start": 1763,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1781,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "testNumberConstructorParseFloat",
    "start": 1787,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1821,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "parseFloat",
    "start": 1828,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "testNumberConstructorParseInt",
    "start": 1851,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1883,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "parseInt",
    "start": 1890,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1905,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "testMathClz32",
    "start": 1911,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1927,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "clz32",
    "start": 1932,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1942,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "testMathImul",
    "start": 1948,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1963,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "imul",
    "start": 1968,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1979,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "testMathSign",
    "start": 1985,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2000,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "sign",
    "start": 2005,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2014,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "testMathLog10",
    "start": 2020,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2036,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "log10",
    "start": 2041,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2051,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "testMathLog2",
    "start": 2057,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2072,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "log2",
    "start": 2077,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2086,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "testMathLog1p",
    "start": 2092,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2108,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "log1p",
    "start": 2113,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2123,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "testMathExpm1",
    "start": 2129,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2145,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "expm1",
    "start": 2150,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2160,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "testMathCosh",
    "start": 2166,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2181,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "cosh",
    "start": 2186,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2195,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "testMathSinh",
    "start": 2201,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2216,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "sinh",
    "start": 2221,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2230,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "testMathTanh",
    "start": 2236,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2251,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "tanh",
    "start": 2256,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2265,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "testMathAcosh",
    "start": 2271,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "acosh",
    "start": 2292,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2302,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "testMathAsinh",
    "start": 2308,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2324,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "asinh",
    "start": 2329,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2339,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "testMathAtanh",
    "start": 2345,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2361,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "atanh",
    "start": 2366,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2376,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "testMathHypot",
    "start": 2382,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2398,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "hypot",
    "start": 2403,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2415,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "testMathTrunc",
    "start": 2421,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2437,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "trunc",
    "start": 2442,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2452,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "testMathFround",
    "start": 2458,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2475,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "fround",
    "start": 2480,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2491,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "testMathCbrt",
    "start": 2497,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2512,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "cbrt",
    "start": 2517,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2526,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "testMap",
    "start": 2532,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 2541,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2545,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2550,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2557,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2562,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2565,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2570,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2576,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 2585,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2589,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2596,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2601,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2604,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2609,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "testPromiseAll",
    "start": 2615,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2632,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2640,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2649,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "testPromiseRace",
    "start": 2655,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2673,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "race",
    "start": 2681,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2691,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "testPromiseResolve",
    "start": 2697,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2718,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2726,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2737,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "testPromiseReject",
    "start": 2743,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2763,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 2771,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2781,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "testSymbolFor",
    "start": 2787,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2803,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 2810,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2814,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2820,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "testSymbolKeyFor",
    "start": 2826,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2845,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "keyFor",
    "start": 2852,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "testSymbolFor",
    "start": 2859,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2875,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "testWeakMap",
    "start": 2881,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 2894,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2902,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2907,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2914,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2919,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2922,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2927,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "testWeakSet",
    "start": 2933,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 2946,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2954,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2959,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2966,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2971,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2974,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2979,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "testIterator",
    "start": 2985,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 2999,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3008,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3013,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3018,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3025,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3030,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3033,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3038,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "testAsyncIterator",
    "start": 3044,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3063,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3077,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3082,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3087,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3094,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3099,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3102,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3107,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "testStringCodePointAt",
    "start": 3113,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3137,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "codePointAt",
    "start": 3140,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3156,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "testStringIncludes",
    "start": 3162,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3183,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 3186,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3195,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3200,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "testStringEndsWith",
    "start": 3206,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3227,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "endsWith",
    "start": 3230,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3239,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3244,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "testStringNormalize",
    "start": 3250,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3272,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "normalize",
    "start": 3275,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3288,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "testStringRepeat",
    "start": 3294,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3313,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "repeat",
    "start": 3316,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3327,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "testStringStartsWith",
    "start": 3333,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3356,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 3359,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3370,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3375,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "testStringAnchor",
    "start": 3381,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3400,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "anchor",
    "start": 3403,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3410,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3415,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "testStringBig",
    "start": 3421,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3437,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "big",
    "start": 3440,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3447,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "testStringBlink",
    "start": 3453,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3471,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Identifier",
    "value": "blink",
    "start": 3474,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3483,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "testStringBold",
    "start": 3489,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3506,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "bold",
    "start": 3509,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3517,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "testStringFixed",
    "start": 3523,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3541,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 3544,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3553,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "testStringFontColor",
    "start": 3559,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3581,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "fontcolor",
    "start": 3584,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "String",
    "value": "\"blue\"",
    "start": 3594,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3603,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "testStringFontSize",
    "start": 3609,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3630,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "fontsize",
    "start": 3633,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3646,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "testStringItalics",
    "start": 3652,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3672,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "italics",
    "start": 3675,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3686,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "testStringLink",
    "start": 3692,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3709,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "link",
    "start": 3712,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3717,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3722,
    "end": 3727
  },
  {
    "type": "Identifier",
    "value": "testStringSmall",
    "start": 3728,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3746,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "small",
    "start": 3749,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3758,
    "end": 3763
  },
  {
    "type": "Identifier",
    "value": "testStringStrike",
    "start": 3764,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3783,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "strike",
    "start": 3786,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3796,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "testStringSub",
    "start": 3802,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3818,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 3821,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3828,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "testStringSup",
    "start": 3834,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3850,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "sup",
    "start": 3853,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3860,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "testStringConstructorFromCodePoint",
    "start": 3866,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3903,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "fromCodePoint",
    "start": 3910,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3927,
    "end": 3932
  },
  {
    "type": "Identifier",
    "value": "testStringConstructorRaw",
    "start": 3933,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3960,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 3967,
    "end": 3970
  },
  {
    "type": "Template",
    "value": "``",
    "start": 3970,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3974,
    "end": 3979
  },
  {
    "type": "Identifier",
    "value": "testRegExpFlags",
    "start": 3980,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "RegularExpression",
    "value": "/abc/g",
    "regex": {
      "flags": "g",
      "pattern": "abc"
    },
    "start": 3998,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 4005,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4012,
    "end": 4017
  },
  {
    "type": "Identifier",
    "value": "testRegExpSticky",
    "start": 4018,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "RegularExpression",
    "value": "/abc/g",
    "regex": {
      "flags": "g",
      "pattern": "abc"
    },
    "start": 4037,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "sticky",
    "start": 4044,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4052,
    "end": 4057
  },
  {
    "type": "Identifier",
    "value": "testRegExpUnicode",
    "start": 4058,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "RegularExpression",
    "value": "/abc/g",
    "regex": {
      "flags": "g",
      "pattern": "abc"
    },
    "start": 4078,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "unicode",
    "start": 4085,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4092,
    "end": 4093
  }
]
```
