__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 72
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 78
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
                          "type": "ThisExpression",
                          "start": 90,
                          "end": 94
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 100
                        },
                        "optional": false,
                        "computed": false,
                        "start": 90,
                        "end": 100
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 108
                      },
                      "start": 90,
                      "end": 108
                    },
                    "directive": null,
                    "start": 90,
                    "end": 109
                  }
                ],
                "start": 80,
                "end": 115
              },
              "expression": false,
              "start": 72,
              "end": 115
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 61,
            "end": 115
          }
        ],
        "start": 27,
        "end": 117
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 117
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 170
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 180
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 233
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 253,
                      "end": 257
                    },
                    "start": 246,
                    "end": 258
                  }
                ],
                "start": 236,
                "end": 264
              },
              "expression": false,
              "start": 233,
              "end": 264
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 264
          }
        ],
        "start": 181,
        "end": 266
      },
      "abstract": false,
      "declare": false,
      "start": 161,
      "end": 266
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 298
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 344
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
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 350
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
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 367,
                          "end": 372
                        },
                        "optional": false,
                        "computed": false,
                        "start": 362,
                        "end": 372
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 380
                      },
                      "start": 362,
                      "end": 380
                    },
                    "directive": null,
                    "start": 362,
                    "end": 381
                  }
                ],
                "start": 352,
                "end": 387
              },
              "expression": false,
              "start": 344,
              "end": 387
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 333,
            "end": 387
          }
        ],
        "start": 299,
        "end": 389
      },
      "abstract": false,
      "declare": false,
      "start": 287,
      "end": 389
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 472,
        "end": 477
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 482
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 515
              },
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
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 531
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 534,
                      "end": 535
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 526,
                    "end": 536
                  }
                ],
                "start": 516,
                "end": 542
              },
              "abstract": false,
              "declare": false,
              "start": 497,
              "end": 542
            },
            "start": 490,
            "end": 543
          }
        ],
        "start": 484,
        "end": 545
      },
      "expression": false,
      "start": 463,
      "end": 545
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 560,
                "end": 561
              }
            ],
            "start": 558,
            "end": 563
          },
          "definite": false,
          "start": 553,
          "end": 563
        }
      ],
      "declare": false,
      "start": 547,
      "end": 564
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 596
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 599,
            "end": 603
          },
          "definite": false,
          "start": 592,
          "end": 603
        }
      ],
      "declare": false,
      "start": 588,
      "end": 604
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViaMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 648
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 657,
          "end": 662
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 664
          }
        ],
        "optional": false,
        "start": 657,
        "end": 665
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 666,
        "end": 668
      },
      "abstract": false,
      "declare": false,
      "start": 634,
      "end": 668
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
            "name": "viaMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 705
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViaMixin",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 720
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 721,
                  "end": 725
                }
              ],
              "start": 708,
              "end": 726
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 732
            },
            "optional": false,
            "computed": false,
            "start": 708,
            "end": 732
          },
          "definite": false,
          "start": 697,
          "end": 732
        }
      ],
      "declare": false,
      "start": 691,
      "end": 733
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
            "name": "viaMixinExtra",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 775
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViaMixin",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 790
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 791,
                  "end": 795
                }
              ],
              "start": 778,
              "end": 796
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "extra",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 802
            },
            "optional": false,
            "computed": false,
            "start": 778,
            "end": 802
          },
          "definite": false,
          "start": 762,
          "end": 802
        }
      ],
      "declare": false,
      "start": 756,
      "end": 803
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MismatchedMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 843,
        "end": 858
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 867,
          "end": 872
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 873,
            "end": 874
          }
        ],
        "optional": false,
        "start": 867,
        "end": 875
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 876,
        "end": 878
      },
      "abstract": false,
      "declare": false,
      "start": 837,
      "end": 878
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViaSubclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 914,
        "end": 925
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sub",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 937
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null,
            "start": 938,
            "end": 944
          },
          "optional": false,
          "computed": false,
          "start": 934,
          "end": 944
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 934,
        "end": 946
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 947,
        "end": 949
      },
      "abstract": false,
      "declare": false,
      "start": 908,
      "end": 949
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
            "name": "viaSubclass",
            "optional": false,
            "typeAnnotation": null,
            "start": 978,
            "end": 989
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViaSubclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 996,
                "end": 1007
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 1008,
                  "end": 1012
                }
              ],
              "start": 992,
              "end": 1013
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1019
            },
            "optional": false,
            "computed": false,
            "start": 992,
            "end": 1019
          },
          "definite": false,
          "start": 978,
          "end": 1019
        }
      ],
      "declare": false,
      "start": 972,
      "end": 1020
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViaElementAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 1056,
        "end": 1072
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 1081,
          "end": 1083
        },
        "property": {
          "type": "Literal",
          "value": "A",
          "raw": "\"A\"",
          "start": 1084,
          "end": 1087
        },
        "optional": false,
        "computed": true,
        "start": 1081,
        "end": 1088
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1089,
        "end": 1091
      },
      "abstract": false,
      "declare": false,
      "start": 1050,
      "end": 1091
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
            "name": "viaElementAccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1136
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViaElementAccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 1143,
                "end": 1159
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 1160,
                  "end": 1164
                }
              ],
              "start": 1139,
              "end": 1165
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1171
            },
            "optional": false,
            "computed": false,
            "start": 1139,
            "end": 1171
          },
          "definite": false,
          "start": 1120,
          "end": 1171
        }
      ],
      "declare": false,
      "start": 1114,
      "end": 1172
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViaConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1222
      },
      "typeParameters": null,
      "superClass": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1236
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 1239,
          "end": 1240
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1244
        },
        "start": 1232,
        "end": 1244
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1246,
        "end": 1248
      },
      "abstract": false,
      "declare": false,
      "start": 1202,
      "end": 1248
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
            "name": "viaConditional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1277,
            "end": 1291
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViaConditional",
                "optional": false,
                "typeAnnotation": null,
                "start": 1298,
                "end": 1312
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 1313,
                  "end": 1317
                }
              ],
              "start": 1294,
              "end": 1318
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1324
            },
            "optional": false,
            "computed": false,
            "start": 1294,
            "end": 1324
          },
          "definite": false,
          "start": 1277,
          "end": 1324
        }
      ],
      "declare": false,
      "start": 1271,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 1325
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 61,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Sub",
    "start": 167,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 220,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 246,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 287,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 333,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 463,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 490,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 497,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 503,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "ns",
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
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 634,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "ViaMixin",
    "start": 640,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 649,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 663,
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
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 691,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "viaMixin",
    "start": 697,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "ViaMixin",
    "start": 712,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 727,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "viaMixinExtra",
    "start": 762,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 778,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "ViaMixin",
    "start": 782,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 797,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 837,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "MismatchedMixin",
    "start": 843,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 859,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 867,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 908,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "ViaSubclass",
    "start": 914,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 926,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "Sub",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 972,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "viaSubclass",
    "start": 978,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 992,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "ViaSubclass",
    "start": 996,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1008,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "ViaElementAccess",
    "start": 1056,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1114,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "viaElementAccess",
    "start": 1120,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "ViaElementAccess",
    "start": 1143,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1160,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1166,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "ViaConditional",
    "start": 1208,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1223,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1232,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1271,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "viaConditional",
    "start": 1277,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "ViaConditional",
    "start": 1298,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1313,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1319,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  }
]
```
