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
            "name": "map",
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
                  "start": 19,
                  "end": 22
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
                    }
                  ],
                  "start": 22,
                  "end": 38
                },
                "start": 19,
                "end": 38
              },
              "start": 17,
              "end": 38
            },
            "start": 14,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
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
            "name": "set",
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
                  "start": 59,
                  "end": 62
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  ],
                  "start": 62,
                  "end": 70
                },
                "start": 59,
                "end": 70
              },
              "start": 57,
              "end": 70
            },
            "start": 54,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 70
        }
      ],
      "declare": true,
      "start": 40,
      "end": 71
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 384,
                "end": 390
              },
              "start": 382,
              "end": 390
            },
            "start": 380,
            "end": 390
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 393,
                    "end": 403
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 393,
                  "end": 405
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 410
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 410
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 393,
              "end": 412
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 418
            },
            "optional": false,
            "computed": false,
            "start": 393,
            "end": 418
          },
          "definite": false,
          "start": 380,
          "end": 418
        }
      ],
      "declare": false,
      "start": 374,
      "end": 419
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Next",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 652
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 653,
            "end": 654
          }
        ],
        "start": 652,
        "end": 655
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 675
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 678,
                "end": 685
              },
              "start": 676,
              "end": 685
            },
            "accessibility": null,
            "static": false,
            "start": 662,
            "end": 685
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 704
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 707
                },
                "typeArguments": null,
                "start": 706,
                "end": 707
              },
              "start": 704,
              "end": 707
            },
            "accessibility": null,
            "static": false,
            "start": 690,
            "end": 707
          }
        ],
        "start": 656,
        "end": 709
      },
      "declare": false,
      "start": 638,
      "end": 709
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 724
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 725,
                      "end": 731
                    }
                  ],
                  "start": 724,
                  "end": 732
                },
                "start": 720,
                "end": 732
              },
              "start": 718,
              "end": 732
            },
            "start": 716,
            "end": 732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 738
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 745
                  },
                  "optional": false,
                  "computed": false,
                  "start": 735,
                  "end": 745
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 735,
                "end": 747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 752
              },
              "optional": false,
              "computed": false,
              "start": 735,
              "end": 752
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 735,
            "end": 754
          },
          "definite": false,
          "start": 716,
          "end": 754
        }
      ],
      "declare": false,
      "start": 710,
      "end": 755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null,
        "start": 1034,
        "end": 1040
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1051,
                "end": 1052
              },
              "start": 1045,
              "end": 1052
            },
            "directive": null,
            "start": 1045,
            "end": 1053
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1060,
                "end": 1061
              },
              "start": 1054,
              "end": 1061
            },
            "directive": null,
            "start": 1054,
            "end": 1062
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1069,
                "end": 1070
              },
              "start": 1063,
              "end": 1070
            },
            "directive": null,
            "start": 1063,
            "end": 1071
          }
        ],
        "start": 1043,
        "end": 1073
      },
      "expression": false,
      "start": 1018,
      "end": 1073
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
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1087
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1096
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1090,
            "end": 1098
          },
          "definite": false,
          "start": 1080,
          "end": 1098
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1099
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
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null,
            "start": 1100,
            "end": 1107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "return",
            "optional": false,
            "typeAnnotation": null,
            "start": 1108,
            "end": 1114
          },
          "optional": false,
          "computed": false,
          "start": 1100,
          "end": 1114
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1100,
        "end": 1116
      },
      "directive": null,
      "start": 1100,
      "end": 1117
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1282,
                    "end": 1288
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1291,
                    "end": 1300
                  }
                ],
                "start": 1282,
                "end": 1300
              },
              "start": 1280,
              "end": 1300
            },
            "start": 1278,
            "end": 1300
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1303,
                      "end": 1306
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1307,
                      "end": 1313
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1303,
                    "end": 1313
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1303,
                  "end": 1315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1320
                },
                "optional": false,
                "computed": false,
                "start": 1303,
                "end": 1320
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1303,
              "end": 1322
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1323,
              "end": 1328
            },
            "optional": false,
            "computed": false,
            "start": 1303,
            "end": 1328
          },
          "definite": false,
          "start": 1278,
          "end": 1328
        }
      ],
      "declare": false,
      "start": 1272,
      "end": 1329
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1468,
        "end": 1473
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Map",
            "optional": false,
            "typeAnnotation": null,
            "start": 1485,
            "end": 1488
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1489,
                "end": 1495
              },
              {
                "type": "TSNumberKeyword",
                "start": 1497,
                "end": 1503
              }
            ],
            "start": 1488,
            "end": 1504
          },
          "start": 1485,
          "end": 1504
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 1527,
              "end": 1532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1534,
                  "end": 1540
                },
                "start": 1534,
                "end": 1542
              },
              "start": 1532,
              "end": 1542
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1511,
            "end": 1543
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_values",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1571
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1573,
                  "end": 1579
                },
                "start": 1573,
                "end": 1581
              },
              "start": 1571,
              "end": 1581
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1548,
            "end": 1582
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1601,
                "end": 1607
              },
              "start": 1599,
              "end": 1607
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1587,
            "end": 1608
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1628
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1629,
                "end": 1640
              },
              "optional": false,
              "computed": false,
              "start": 1622,
              "end": 1640
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1643,
                "end": 1649
              },
              "start": 1641,
              "end": 1649
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1613,
            "end": 1650
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clear",
              "optional": false,
              "typeAnnotation": null,
              "start": 1656,
              "end": 1661
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1665,
                  "end": 1669
                },
                "start": 1663,
                "end": 1669
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1670,
                "end": 1673
              },
              "expression": false,
              "start": 1661,
              "end": 1673
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1656,
            "end": 1673
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null,
              "start": 1678,
              "end": 1684
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1690,
                      "end": 1696
                    },
                    "start": 1688,
                    "end": 1696
                  },
                  "start": 1685,
                  "end": 1696
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1699,
                  "end": 1706
                },
                "start": 1697,
                "end": 1706
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1716,
                      "end": 1721
                    },
                    "start": 1709,
                    "end": 1722
                  }
                ],
                "start": 1707,
                "end": 1724
              },
              "expression": false,
              "start": 1684,
              "end": 1724
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1678,
            "end": 1724
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1736
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
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1757,
                              "end": 1763
                            },
                            "start": 1755,
                            "end": 1763
                          },
                          "start": 1750,
                          "end": 1763
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1770,
                              "end": 1776
                            },
                            "start": 1768,
                            "end": 1776
                          },
                          "start": 1765,
                          "end": 1776
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
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
                                "start": 1783,
                                "end": 1786
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1787,
                                    "end": 1793
                                  },
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 1795,
                                    "end": 1801
                                  }
                                ],
                                "start": 1786,
                                "end": 1802
                              },
                              "start": 1783,
                              "end": 1802
                            },
                            "start": 1781,
                            "end": 1802
                          },
                          "start": 1778,
                          "end": 1802
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1807,
                          "end": 1811
                        },
                        "start": 1804,
                        "end": 1811
                      },
                      "start": 1749,
                      "end": 1811
                    },
                    "start": 1747,
                    "end": 1811
                  },
                  "start": 1737,
                  "end": 1811
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1823,
                      "end": 1826
                    },
                    "start": 1821,
                    "end": 1826
                  },
                  "start": 1813,
                  "end": 1826
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1829,
                  "end": 1833
                },
                "start": 1827,
                "end": 1833
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1834,
                "end": 1837
              },
              "expression": false,
              "start": 1736,
              "end": 1837
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1729,
            "end": 1837
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1845
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1851,
                      "end": 1857
                    },
                    "start": 1849,
                    "end": 1857
                  },
                  "start": 1846,
                  "end": 1857
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1860,
                      "end": 1866
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1869,
                      "end": 1878
                    }
                  ],
                  "start": 1860,
                  "end": 1878
                },
                "start": 1858,
                "end": 1878
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1888,
                      "end": 1897
                    },
                    "start": 1881,
                    "end": 1898
                  }
                ],
                "start": 1879,
                "end": 1900
              },
              "expression": false,
              "start": 1845,
              "end": 1900
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1842,
            "end": 1900
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getOrInsert",
              "optional": false,
              "typeAnnotation": null,
              "start": 1905,
              "end": 1916
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1922,
                      "end": 1928
                    },
                    "start": 1920,
                    "end": 1928
                  },
                  "start": 1917,
                  "end": 1928
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defaultValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1944,
                      "end": 1950
                    },
                    "start": 1942,
                    "end": 1950
                  },
                  "start": 1930,
                  "end": 1950
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1953,
                  "end": 1959
                },
                "start": 1951,
                "end": 1959
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1969,
                        "end": 1975
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NaN",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1976,
                        "end": 1979
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1969,
                      "end": 1979
                    },
                    "start": 1962,
                    "end": 1980
                  }
                ],
                "start": 1960,
                "end": 1982
              },
              "expression": false,
              "start": 1916,
              "end": 1982
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1905,
            "end": 1982
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getOrInsertComputed",
              "optional": false,
              "typeAnnotation": null,
              "start": 1987,
              "end": 2006
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2012,
                      "end": 2018
                    },
                    "start": 2010,
                    "end": 2018
                  },
                  "start": 2007,
                  "end": 2018
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2036,
                              "end": 2042
                            },
                            "start": 2034,
                            "end": 2042
                          },
                          "start": 2031,
                          "end": 2042
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2047,
                          "end": 2053
                        },
                        "start": 2044,
                        "end": 2053
                      },
                      "start": 2030,
                      "end": 2053
                    },
                    "start": 2028,
                    "end": 2053
                  },
                  "start": 2020,
                  "end": 2053
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2056,
                  "end": 2062
                },
                "start": 2054,
                "end": 2062
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2072,
                        "end": 2078
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NaN",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2079,
                        "end": 2082
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2072,
                      "end": 2082
                    },
                    "start": 2065,
                    "end": 2083
                  }
                ],
                "start": 2063,
                "end": 2085
              },
              "expression": false,
              "start": 2006,
              "end": 2085
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1987,
            "end": 2085
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "has",
              "optional": false,
              "typeAnnotation": null,
              "start": 2090,
              "end": 2093
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2099,
                      "end": 2105
                    },
                    "start": 2097,
                    "end": 2105
                  },
                  "start": 2094,
                  "end": 2105
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2108,
                  "end": 2115
                },
                "start": 2106,
                "end": 2115
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 2125,
                      "end": 2130
                    },
                    "start": 2118,
                    "end": 2131
                  }
                ],
                "start": 2116,
                "end": 2133
              },
              "expression": false,
              "start": 2093,
              "end": 2133
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2090,
            "end": 2133
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 2138,
              "end": 2141
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2147,
                      "end": 2153
                    },
                    "start": 2145,
                    "end": 2153
                  },
                  "start": 2142,
                  "end": 2153
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2162,
                      "end": 2168
                    },
                    "start": 2160,
                    "end": 2168
                  },
                  "start": 2155,
                  "end": 2168
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 2171,
                  "end": 2175
                },
                "start": 2169,
                "end": 2175
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 2185,
                      "end": 2189
                    },
                    "start": 2178,
                    "end": 2190
                  }
                ],
                "start": 2176,
                "end": 2192
              },
              "expression": false,
              "start": 2141,
              "end": 2192
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2138,
            "end": 2192
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entries",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2204
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2208,
                    "end": 2219
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2221,
                            "end": 2227
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2229,
                            "end": 2235
                          }
                        ],
                        "start": 2220,
                        "end": 2236
                      }
                    ],
                    "start": 2219,
                    "end": 2237
                  },
                  "start": 2208,
                  "end": 2237
                },
                "start": 2206,
                "end": 2237
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2250,
                        "end": 2255
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\"",
                          "start": 2256,
                          "end": 2281
                        }
                      ],
                      "start": 2246,
                      "end": 2282
                    },
                    "start": 2240,
                    "end": 2283
                  }
                ],
                "start": 2238,
                "end": 2285
              },
              "expression": false,
              "start": 2204,
              "end": 2285
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2197,
            "end": 2285
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2290,
              "end": 2294
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2309
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2310,
                        "end": 2316
                      }
                    ],
                    "start": 2309,
                    "end": 2317
                  },
                  "start": 2298,
                  "end": 2317
                },
                "start": 2296,
                "end": 2317
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2330,
                        "end": 2335
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\"",
                          "start": 2336,
                          "end": 2361
                        }
                      ],
                      "start": 2326,
                      "end": 2362
                    },
                    "start": 2320,
                    "end": 2363
                  }
                ],
                "start": 2318,
                "end": 2365
              },
              "expression": false,
              "start": 2294,
              "end": 2365
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2290,
            "end": 2365
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2371,
                "end": 2377
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2378,
                "end": 2386
              },
              "optional": false,
              "computed": false,
              "start": 2371,
              "end": 2386
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2391,
                    "end": 2402
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2404,
                            "end": 2410
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2412,
                            "end": 2418
                          }
                        ],
                        "start": 2403,
                        "end": 2419
                      }
                    ],
                    "start": 2402,
                    "end": 2420
                  },
                  "start": 2391,
                  "end": 2420
                },
                "start": 2389,
                "end": 2420
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2433,
                        "end": 2438
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\"",
                          "start": 2439,
                          "end": 2464
                        }
                      ],
                      "start": 2429,
                      "end": 2465
                    },
                    "start": 2423,
                    "end": 2466
                  }
                ],
                "start": 2421,
                "end": 2468
              },
              "expression": false,
              "start": 2387,
              "end": 2468
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2370,
            "end": 2468
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 2613,
              "end": 2619
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "YieldExpression",
                      "delegate": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2639,
                          "end": 2643
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2644,
                          "end": 2651
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2639,
                        "end": 2651
                      },
                      "start": 2632,
                      "end": 2651
                    },
                    "directive": null,
                    "start": 2632,
                    "end": 2652
                  }
                ],
                "start": 2622,
                "end": 2658
              },
              "expression": false,
              "start": 2619,
              "end": 2658
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2611,
            "end": 2658
          }
        ],
        "start": 1505,
        "end": 2660
      },
      "abstract": false,
      "declare": false,
      "start": 1462,
      "end": 2660
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2660
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 397,
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
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 638,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 662,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "boolean",
    "start": 678,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 690,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 716,
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
    "value": "Next",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 748,
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
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1024,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1045,
    "end": 1050
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "yield",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "doubles",
    "start": 1080,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "doubles",
    "start": 1100,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 1108,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1272,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1278,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1291,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1462,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 1468,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1474,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1511,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1519,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "_keys",
    "start": 1527,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1534,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1548,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1556,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "_values",
    "start": 1564,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1587,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1595,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1613,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1622,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 1629,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1643,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "clear",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 1678,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1685,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1690,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1699,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1709,
    "end": 1715
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1716,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1729,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "callbackfn",
    "start": 1737,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1750,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1765,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1770,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1778,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 1783,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1787,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1795,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1804,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 1813,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1829,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1846,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1851,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1860,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1869,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1881,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1888,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 1905,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1922,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 1930,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1944,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1953,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1962,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1969,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 1976,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 1987,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2012,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2020,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2036,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2044,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2047,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2056,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2065,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 2079,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 2090,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2094,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2099,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2108,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2118,
    "end": 2124
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2125,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2138,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2142,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2147,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2155,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2162,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2171,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2178,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2185,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 2197,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "MapIterator",
    "start": 2208,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2229,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2240,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2246,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2250,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "String",
    "value": "\"Method not implemented.\"",
    "start": 2256,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2290,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "MapIterator",
    "start": 2298,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2310,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2320,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2330,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "String",
    "value": "\"Method not implemented.\"",
    "start": 2336,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2371,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2378,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "MapIterator",
    "start": 2391,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2404,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2412,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2423,
    "end": 2428
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2429,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2433,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "String",
    "value": "\"Method not implemented.\"",
    "start": 2439,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2613,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2632,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2639,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "_values",
    "start": 2644,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2659,
    "end": 2660
  }
]
```
