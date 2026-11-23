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
        "name": "Direct",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Direct",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 27
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 43
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 46,
              "end": 47
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 48
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 55
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 58,
              "end": 59
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 60
          }
        ],
        "start": 28,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 62
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
            "name": "staticValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 81
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Direct",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 90
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 96
            },
            "optional": false,
            "computed": false,
            "start": 84,
            "end": 96
          },
          "definite": false,
          "start": 70,
          "end": 96
        }
      ],
      "declare": false,
      "start": 64,
      "end": 97
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
            "name": "instanceValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 117
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Direct",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 130
              },
              "typeArguments": null,
              "arguments": [],
              "start": 120,
              "end": 132
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 138
            },
            "optional": false,
            "computed": false,
            "start": 120,
            "end": 138
          },
          "definite": false,
          "start": 104,
          "end": 138
        }
      ],
      "declare": false,
      "start": 98,
      "end": 139
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "First",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 152
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Second",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 167
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 168,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 170
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Second",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 183
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "First",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 197
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 198,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 171,
      "end": 200
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
            "name": "Expression",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 218
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 232
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 246
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 247,
              "end": 249
            },
            "abstract": false,
            "declare": false,
            "start": 221,
            "end": 249
          },
          "definite": false,
          "start": 208,
          "end": 249
        }
      ],
      "declare": false,
      "start": 202,
      "end": 250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 268
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "decorators": [],
        "id": null,
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 299
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 302,
                "end": 303
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 287,
              "end": 304
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 311
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 314,
                "end": 315
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 306,
              "end": 316
            }
          ],
          "start": 284,
          "end": 318
        },
        "abstract": false,
        "declare": false,
        "start": 278,
        "end": 318
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 320,
        "end": 322
      },
      "abstract": false,
      "declare": false,
      "start": 252,
      "end": 322
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
            "name": "nestedStaticValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 349,
                "end": 355
              },
              "start": 347,
              "end": 355
            },
            "start": 330,
            "end": 355
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "NestedBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 368
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 374
            },
            "optional": false,
            "computed": false,
            "start": 358,
            "end": 374
          },
          "definite": false,
          "start": 330,
          "end": 374
        }
      ],
      "declare": false,
      "start": 324,
      "end": 375
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
            "name": "nestedInstanceValue",
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
            "start": 382,
            "end": 409
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "NestedBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 416,
                "end": 426
              },
              "typeArguments": null,
              "arguments": [],
              "start": 412,
              "end": 428
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 434
            },
            "optional": false,
            "computed": false,
            "start": 412,
            "end": 434
          },
          "definite": false,
          "start": 382,
          "end": 434
        }
      ],
      "declare": false,
      "start": 376,
      "end": 435
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
            "name": "SelfReferencingBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 462
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 500
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SelfReferencingBase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 522
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 489,
                    "end": 523
                  }
                ],
                "start": 486,
                "end": 525
              },
              "abstract": false,
              "declare": false,
              "start": 480,
              "end": 525
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 527,
              "end": 529
            },
            "abstract": false,
            "declare": false,
            "start": 465,
            "end": 529
          },
          "definite": false,
          "start": 443,
          "end": 529
        }
      ],
      "declare": false,
      "start": 437,
      "end": 530
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
            "name": "selfConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 553
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "SelfReferencingBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 575
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 580
            },
            "optional": false,
            "computed": false,
            "start": 556,
            "end": 580
          },
          "definite": false,
          "start": 538,
          "end": 580
        }
      ],
      "declare": false,
      "start": 532,
      "end": 581
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 597
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 602
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 619,
                    "end": 623
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 625,
                        "end": 628
                      },
                      "start": 625,
                      "end": 630
                    },
                    "start": 623,
                    "end": 630
                  },
                  "value": null,
                  "start": 616,
                  "end": 630
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 635,
                  "end": 637
                },
                "start": 632,
                "end": 637
              },
              "start": 611,
              "end": 637
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 598,
            "end": 637
          }
        ],
        "start": 597,
        "end": 638
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 649
              },
              "typeArguments": null,
              "start": 645,
              "end": 649
            },
            "start": 643,
            "end": 649
          },
          "start": 639,
          "end": 649
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
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 679
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 691,
                      "end": 696
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 699,
                      "end": 700
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 684,
                    "end": 701
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 709
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 712,
                      "end": 713
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 704,
                    "end": 714
                  }
                ],
                "start": 680,
                "end": 717
              },
              "abstract": false,
              "declare": false,
              "start": 661,
              "end": 717
            },
            "start": 654,
            "end": 718
          }
        ],
        "start": 651,
        "end": 720
      },
      "expression": false,
      "start": 583,
      "end": 720
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 728,
        "end": 733
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
          "start": 742,
          "end": 747
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NestedBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 758
          }
        ],
        "optional": false,
        "start": 742,
        "end": 759
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 760,
        "end": 762
      },
      "abstract": false,
      "declare": false,
      "start": 722,
      "end": 762
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
            "name": "mixedStaticValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 788,
                "end": 794
              },
              "start": 786,
              "end": 794
            },
            "start": 770,
            "end": 794
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 802
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 808
            },
            "optional": false,
            "computed": false,
            "start": 797,
            "end": 808
          },
          "definite": false,
          "start": 770,
          "end": 808
        }
      ],
      "declare": false,
      "start": 764,
      "end": 809
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
            "name": "mixedInstanceValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 836,
                "end": 842
              },
              "start": 834,
              "end": 842
            },
            "start": 816,
            "end": 842
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 854
              },
              "typeArguments": null,
              "arguments": [],
              "start": 845,
              "end": 856
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 862
            },
            "optional": false,
            "computed": false,
            "start": 845,
            "end": 862
          },
          "definite": false,
          "start": 816,
          "end": 862
        }
      ],
      "declare": false,
      "start": 810,
      "end": 863
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 890
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 898,
              "end": 904
            },
            "start": 896,
            "end": 904
          },
          "start": 891,
          "end": 904
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NestedBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 924
          },
          "typeArguments": null,
          "start": 907,
          "end": 924
        },
        "start": 905,
        "end": 924
      },
      "body": null,
      "expression": false,
      "start": 865,
      "end": 925
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidBaseArgument",
        "optional": false,
        "typeAnnotation": null,
        "start": 932,
        "end": 951
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 968
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "invalid",
            "raw": "\"invalid\"",
            "start": 969,
            "end": 978
          }
        ],
        "optional": false,
        "start": 960,
        "end": 979
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 980,
        "end": 982
      },
      "abstract": false,
      "declare": false,
      "start": 926,
      "end": 982
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
            "name": "InvalidExpressionArgument",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 1014
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "makeBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1039
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "invalid",
                  "raw": "\"invalid\"",
                  "start": 1040,
                  "end": 1049
                }
              ],
              "optional": false,
              "start": 1031,
              "end": 1050
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1051,
              "end": 1053
            },
            "abstract": false,
            "declare": false,
            "start": 1017,
            "end": 1053
          },
          "definite": false,
          "start": 989,
          "end": 1053
        }
      ],
      "declare": false,
      "start": 983,
      "end": 1054
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeInvalidBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1088
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1096,
              "end": 1102
            },
            "start": 1094,
            "end": 1102
          },
          "start": 1089,
          "end": 1102
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1105,
          "end": 1111
        },
        "start": 1103,
        "end": 1111
      },
      "body": null,
      "expression": false,
      "start": 1056,
      "end": 1112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1119,
        "end": 1137
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeInvalidBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1146,
          "end": 1161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "invalid",
            "raw": "\"invalid\"",
            "start": 1162,
            "end": 1171
          }
        ],
        "optional": false,
        "start": 1146,
        "end": 1172
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1173,
        "end": 1175
      },
      "abstract": false,
      "declare": false,
      "start": 1113,
      "end": 1175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1175
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Direct",
    "start": 6,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Direct",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 31,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "type": "Numeric",
    "value": "2",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "staticValue",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Direct",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "instanceValue",
    "start": 104,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Direct",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 147,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 177,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 184,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 208,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 227,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 233,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "NestedBase",
    "start": 258,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 287,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "nestedStaticValue",
    "start": 330,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "NestedBase",
    "start": 358,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "nestedInstanceValue",
    "start": 382,
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
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 412,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "NestedBase",
    "start": 416,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 437,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "SelfReferencingBase",
    "start": 443,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 465,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 471,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 489,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "SelfReferencingBase",
    "start": 503,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 532,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "selfConstructor",
    "start": 538,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "SelfReferencingBase",
    "start": 556,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 583,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 598,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 603,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 654,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 661,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 667,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 675,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 684,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 691,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 704,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 722,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "Mixed",
    "start": 728,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 734,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 742,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "NestedBase",
    "start": 748,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 764,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "mixedStaticValue",
    "start": 770,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "Mixed",
    "start": 797,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 810,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "mixedInstanceValue",
    "start": 816,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 845,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "Mixed",
    "start": 849,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 865,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "makeBase",
    "start": 882,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 891,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 907,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "NestedBase",
    "start": 914,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 926,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "InvalidBaseArgument",
    "start": 932,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 952,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "makeBase",
    "start": 960,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "String",
    "value": "\"invalid\"",
    "start": 969,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 983,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "InvalidExpressionArgument",
    "start": 989,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1023,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "makeBase",
    "start": 1031,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "String",
    "value": "\"invalid\"",
    "start": 1040,
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
    "value": "{",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1064,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "makeInvalidBase",
    "start": 1073,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1089,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "InvalidConstructor",
    "start": 1119,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "makeInvalidBase",
    "start": 1146,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "String",
    "value": "\"invalid\"",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  }
]
```
