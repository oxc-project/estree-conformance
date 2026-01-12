__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              },
              "start": 48,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 53
        }
      ],
      "declare": true,
      "start": 33,
      "end": 54
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 71
        }
      ],
      "declare": true,
      "start": 55,
      "end": 72
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 83,
                  "end": 86
                },
                "start": 83,
                "end": 88
              },
              "start": 81,
              "end": 88
            },
            "start": 77,
            "end": 88
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 92,
                "end": 94
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 96,
                "end": 98
              }
            ],
            "start": 91,
            "end": 99
          },
          "definite": false,
          "start": 77,
          "end": 99
        }
      ],
      "declare": false,
      "start": 73,
      "end": 100
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 124,
                    "end": 126
                  },
                  "start": 121,
                  "end": 126
                },
                "start": 118,
                "end": 126
              },
              "start": 116,
              "end": 126
            },
            "start": 113,
            "end": 126
          },
          "init": null,
          "definite": false,
          "start": 113,
          "end": 126
        }
      ],
      "declare": true,
      "start": 101,
      "end": 127
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 136
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 144,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 141,
                "end": 146
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
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
                    "start": 157,
                    "end": 160
                  },
                  "id": null,
                  "generator": false,
                  "start": 151,
                  "end": 160
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 148,
                "end": 160
              }
            ],
            "start": 139,
            "end": 161
          },
          "definite": false,
          "start": 132,
          "end": 161
        }
      ],
      "declare": false,
      "start": 128,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 179,
          "end": 182
        },
        "start": 177,
        "end": 182
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 193,
                  "end": 194
                },
                "init": null,
                "definite": false,
                "start": 193,
                "end": 194
              }
            ],
            "declare": false,
            "start": 189,
            "end": 195
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "start": 200,
            "end": 209
          }
        ],
        "start": 183,
        "end": 211
      },
      "expression": false,
      "start": 163,
      "end": 211
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 219
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 236,
                "end": 239
              },
              "start": 234,
              "end": 239
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 226,
            "end": 240
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 255
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
                "body": [
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
                          "start": 272,
                          "end": 273
                        },
                        "init": null,
                        "definite": false,
                        "start": 272,
                        "end": 273
                      }
                    ],
                    "declare": false,
                    "start": 268,
                    "end": 274
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 291
                    },
                    "start": 283,
                    "end": 292
                  }
                ],
                "start": 258,
                "end": 298
              },
              "expression": false,
              "start": 255,
              "end": 298
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 245,
            "end": 298
          }
        ],
        "start": 220,
        "end": 300
      },
      "abstract": false,
      "declare": false,
      "start": 212,
      "end": 300
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 333,
                        "end": 336
                      },
                      "start": 331,
                      "end": 336
                    },
                    "start": 330,
                    "end": 336
                  },
                  "init": null,
                  "definite": false,
                  "start": 330,
                  "end": 336
                }
              ],
              "declare": false,
              "start": 326,
              "end": 337
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 319,
            "end": 337
          }
        ],
        "start": 313,
        "end": 339
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 301,
      "end": 339
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 348
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "typeArguments": null,
            "arguments": [],
            "start": 351,
            "end": 358
          },
          "definite": false,
          "start": 344,
          "end": 358
        }
      ],
      "declare": false,
      "start": 340,
      "end": 359
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 397
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 411
            },
            "prefix": true,
            "start": 400,
            "end": 411
          },
          "definite": false,
          "start": 381,
          "end": 411
        }
      ],
      "declare": false,
      "start": 377,
      "end": 412
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 433
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 447
            },
            "prefix": true,
            "start": 436,
            "end": 447
          },
          "definite": false,
          "start": 417,
          "end": 447
        }
      ],
      "declare": false,
      "start": 413,
      "end": 448
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 469
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 480
            },
            "prefix": true,
            "start": 472,
            "end": 480
          },
          "definite": false,
          "start": 453,
          "end": 480
        }
      ],
      "declare": false,
      "start": 449,
      "end": 481
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 502
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 513
            },
            "prefix": true,
            "start": 505,
            "end": 513
          },
          "definite": false,
          "start": 486,
          "end": 513
        }
      ],
      "declare": false,
      "start": 482,
      "end": 514
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 535
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 548
            },
            "prefix": true,
            "start": 538,
            "end": 548
          },
          "definite": false,
          "start": 519,
          "end": 548
        }
      ],
      "declare": false,
      "start": 515,
      "end": 549
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 570
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 584
            },
            "prefix": true,
            "start": 573,
            "end": 584
          },
          "definite": false,
          "start": 554,
          "end": 584
        }
      ],
      "declare": false,
      "start": 550,
      "end": 585
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 627
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 646
            },
            "prefix": true,
            "start": 630,
            "end": 646
          },
          "definite": false,
          "start": 611,
          "end": 646
        }
      ],
      "declare": false,
      "start": 607,
      "end": 647
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 668
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 678,
              "end": 682
            },
            "prefix": true,
            "start": 671,
            "end": 682
          },
          "definite": false,
          "start": 652,
          "end": 682
        }
      ],
      "declare": false,
      "start": 648,
      "end": 683
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 729
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 743
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 744,
                "end": 745
              },
              "optional": false,
              "computed": true,
              "start": 739,
              "end": 746
            },
            "prefix": true,
            "start": 732,
            "end": 746
          },
          "definite": false,
          "start": 713,
          "end": 746
        }
      ],
      "declare": false,
      "start": 709,
      "end": 747
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 769
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 783
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
              },
              "optional": false,
              "computed": false,
              "start": 779,
              "end": 785
            },
            "prefix": true,
            "start": 772,
            "end": 785
          },
          "definite": false,
          "start": 752,
          "end": 785
        }
      ],
      "declare": false,
      "start": 748,
      "end": 786
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 808
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 824
            },
            "prefix": true,
            "start": 811,
            "end": 824
          },
          "definite": false,
          "start": 791,
          "end": 824
        }
      ],
      "declare": false,
      "start": 787,
      "end": 825
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 847
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 861
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 863
              },
              "optional": false,
              "computed": false,
              "start": 857,
              "end": 863
            },
            "prefix": true,
            "start": 850,
            "end": 863
          },
          "definite": false,
          "start": 830,
          "end": 863
        }
      ],
      "declare": false,
      "start": 826,
      "end": 864
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 886
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 897
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 899
              },
              "optional": false,
              "computed": false,
              "start": 896,
              "end": 899
            },
            "prefix": true,
            "start": 889,
            "end": 899
          },
          "definite": false,
          "start": 869,
          "end": 899
        }
      ],
      "declare": false,
      "start": 865,
      "end": 900
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
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 922
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 935
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 932,
              "end": 937
            },
            "prefix": true,
            "start": 925,
            "end": 937
          },
          "definite": false,
          "start": 905,
          "end": 937
        }
      ],
      "declare": false,
      "start": 901,
      "end": 938
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
            "name": "ResultIsBoolean15",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 960
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 971
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 975
                },
                "optional": false,
                "computed": false,
                "start": 970,
                "end": 975
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 970,
              "end": 977
            },
            "prefix": true,
            "start": 963,
            "end": 977
          },
          "definite": false,
          "start": 943,
          "end": 977
        }
      ],
      "declare": false,
      "start": 939,
      "end": 978
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
            "name": "ResultIsBoolean16",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 1000
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1014
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1021
              },
              "start": 1011,
              "end": 1021
            },
            "prefix": true,
            "start": 1003,
            "end": 1022
          },
          "definite": false,
          "start": 983,
          "end": 1022
        }
      ],
      "declare": false,
      "start": 979,
      "end": 1023
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
            "name": "ResultIsBoolean17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1045
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1056,
                "end": 1060
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1072
              },
              "start": 1056,
              "end": 1072
            },
            "prefix": true,
            "start": 1048,
            "end": 1073
          },
          "definite": false,
          "start": 1028,
          "end": 1073
        }
      ],
      "declare": false,
      "start": 1024,
      "end": 1074
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
            "name": "ResultIsBoolean18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1096
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1107,
                "end": 1111
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1114,
                "end": 1118
              },
              "start": 1107,
              "end": 1118
            },
            "prefix": true,
            "start": 1099,
            "end": 1119
          },
          "definite": false,
          "start": 1079,
          "end": 1119
        }
      ],
      "declare": false,
      "start": 1075,
      "end": 1120
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
            "name": "ResultIsBoolean19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1125,
            "end": 1142
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1153,
                "end": 1162
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1174
              },
              "start": 1153,
              "end": 1174
            },
            "prefix": true,
            "start": 1145,
            "end": 1175
          },
          "definite": false,
          "start": 1125,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1121,
      "end": 1176
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
            "name": "ResultIsBoolean20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1212,
            "end": 1229
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1249
              },
              "prefix": true,
              "start": 1239,
              "end": 1249
            },
            "prefix": true,
            "start": 1232,
            "end": 1249
          },
          "definite": false,
          "start": 1212,
          "end": 1249
        }
      ],
      "declare": false,
      "start": 1208,
      "end": 1250
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
            "name": "ResultIsBoolean21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1255,
            "end": 1272
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1297,
                    "end": 1300
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1303,
                    "end": 1307
                  },
                  "start": 1297,
                  "end": 1307
                },
                "prefix": true,
                "start": 1289,
                "end": 1308
              },
              "prefix": true,
              "start": 1282,
              "end": 1308
            },
            "prefix": true,
            "start": 1275,
            "end": 1308
          },
          "definite": false,
          "start": 1255,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1251,
      "end": 1309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1347,
          "end": 1350
        },
        "prefix": true,
        "start": 1340,
        "end": 1350
      },
      "directive": null,
      "start": 1340,
      "end": 1351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1359,
          "end": 1363
        },
        "prefix": true,
        "start": 1352,
        "end": 1363
      },
      "directive": null,
      "start": 1352,
      "end": 1364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1376
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1377,
            "end": 1378
          },
          "optional": false,
          "computed": true,
          "start": 1372,
          "end": 1379
        },
        "prefix": true,
        "start": 1365,
        "end": 1379
      },
      "directive": null,
      "start": 1365,
      "end": 1380
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1391
            },
            "prefix": true,
            "start": 1381,
            "end": 1391
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1393,
            "end": 1397
          }
        ],
        "start": 1381,
        "end": 1397
      },
      "directive": null,
      "start": 1381,
      "end": 1398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1406,
            "end": 1410
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1411,
            "end": 1412
          },
          "optional": false,
          "computed": false,
          "start": 1406,
          "end": 1412
        },
        "prefix": true,
        "start": 1399,
        "end": 1412
      },
      "directive": null,
      "start": 1399,
      "end": 1413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1421,
            "end": 1425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1426,
            "end": 1427
          },
          "optional": false,
          "computed": false,
          "start": 1421,
          "end": 1427
        },
        "prefix": true,
        "start": 1414,
        "end": 1427
      },
      "directive": null,
      "start": 1414,
      "end": 1428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1441,
            "end": 1442
          },
          "optional": false,
          "computed": false,
          "start": 1436,
          "end": 1442
        },
        "prefix": true,
        "start": 1429,
        "end": 1442
      },
      "directive": null,
      "start": 1429,
      "end": 1443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1451,
            "end": 1452
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1453,
            "end": 1454
          },
          "optional": false,
          "computed": false,
          "start": 1451,
          "end": 1454
        },
        "prefix": true,
        "start": 1444,
        "end": 1454
      },
      "directive": null,
      "start": 1444,
      "end": 1455
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 1455
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 55,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 113,
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
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 163,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 200,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 226,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 245,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 283,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 301,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "type": "Keyword",
    "value": "export",
    "start": 319,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 381,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 407,
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
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 417,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 436,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 443,
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
    "value": "var",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 453,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 472,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean4",
    "start": 486,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 505,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 519,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 538,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean6",
    "start": 554,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 573,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean7",
    "start": 611,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 630,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 637,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 648,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean8",
    "start": 652,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 671,
    "end": 677
  },
  {
    "type": "Null",
    "value": "null",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean9",
    "start": 713,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 732,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 748,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean10",
    "start": 752,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 772,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean11",
    "start": 791,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 811,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean12",
    "start": 830,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 850,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean13",
    "start": 869,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 889,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean14",
    "start": 905,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 925,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 932,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 939,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean15",
    "start": 943,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 963,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 972,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 979,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean16",
    "start": 983,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1017,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean17",
    "start": 1028,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1056,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1063,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean18",
    "start": 1079,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1114,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean19",
    "start": 1125,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1153,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1165,
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
    "value": "var",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean20",
    "start": 1212,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1232,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1246,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean21",
    "start": 1255,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1275,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1303,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1340,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1359,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1393,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1414,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1421,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "delete",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1444,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  }
]
```
