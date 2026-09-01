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
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bindingPropertyName",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "start": 78,
            "end": 86
          },
          "start": 58,
          "end": 86
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 89,
          "end": 92
        },
        "start": 87,
        "end": 92
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 112
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 125
                },
                "start": 119,
                "end": 125
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 119,
            "end": 138
          }
        ],
        "start": 113,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 140
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
            "name": "tracked",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyDecorator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 212
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 212
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "watchedProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 238
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 240,
                                  "end": 246
                                },
                                "start": 240,
                                "end": 248
                              },
                              "start": 238,
                              "end": 248
                            },
                            "value": null,
                            "start": 218,
                            "end": 248
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 251,
                            "end": 254
                          },
                          "start": 249,
                          "end": 254
                        },
                        "start": 217,
                        "end": 255
                      }
                    ],
                    "start": 215,
                    "end": 257
                  }
                ],
                "start": 195,
                "end": 257
              },
              "start": 193,
              "end": 257
            },
            "start": 186,
            "end": 257
          },
          "init": null,
          "definite": false,
          "start": 186,
          "end": 257
        }
      ],
      "declare": true,
      "start": 172,
      "end": 257
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 271
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tracked",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 286
                },
                "start": 278,
                "end": 286
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "person",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 293
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 278,
            "end": 294
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "any",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 298
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 295,
            "end": 299
          }
        ],
        "start": 272,
        "end": 301
      },
      "abstract": false,
      "declare": false,
      "start": 259,
      "end": 301
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiplyByTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 322
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
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 333
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 335,
                "end": 338
              },
              "start": 333,
              "end": 338
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 329,
            "end": 339
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tracked",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 352
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "args",
                      "raw": "'args'",
                      "start": 353,
                      "end": 359
                    }
                  ],
                  "optional": false,
                  "start": 345,
                  "end": 360
                },
                "start": 344,
                "end": 360
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 379
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 399,
                            "end": 403
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 408
                          },
                          "optional": false,
                          "computed": false,
                          "start": 399,
                          "end": 408
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "number",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 409,
                          "end": 415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 399,
                        "end": 415
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 418,
                        "end": 419
                      },
                      "start": 399,
                      "end": 419
                    },
                    "start": 392,
                    "end": 420
                  }
                ],
                "start": 382,
                "end": 426
              },
              "expression": false,
              "start": 379,
              "end": 426
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 426
          }
        ],
        "start": 323,
        "end": 428
      },
      "abstract": false,
      "declare": false,
      "start": 303,
      "end": 428
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmniDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 474
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MethodDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 498
          },
          "typeArguments": null,
          "start": 483,
          "end": 498
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 514
          },
          "typeArguments": null,
          "start": 500,
          "end": 514
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertyDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 533
          },
          "typeArguments": null,
          "start": 516,
          "end": 533
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 534,
        "end": 537
      },
      "declare": false,
      "start": 451,
      "end": 537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 562
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 579
          },
          "typeArguments": null,
          "start": 566,
          "end": 579
        },
        "start": 564,
        "end": 579
      },
      "body": null,
      "expression": false,
      "start": 539,
      "end": 580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "allRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 605
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
            "start": 609,
            "end": 613
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 615,
                "end": 618
              },
              "start": 615,
              "end": 620
            },
            "start": 613,
            "end": 620
          },
          "value": null,
          "start": 606,
          "end": 620
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 636
          },
          "typeArguments": null,
          "start": 623,
          "end": 636
        },
        "start": 621,
        "end": 636
      },
      "body": null,
      "expression": false,
      "start": 581,
      "end": 637
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 666
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 671,
              "end": 674
            },
            "start": 669,
            "end": 674
          },
          "start": 667,
          "end": 674
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 690
          },
          "typeArguments": null,
          "start": 677,
          "end": 690
        },
        "start": 675,
        "end": 690
      },
      "body": null,
      "expression": false,
      "start": 638,
      "end": 691
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "twoOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 720
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          "start": 721,
          "end": 728
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 734,
              "end": 737
            },
            "start": 732,
            "end": 737
          },
          "start": 730,
          "end": 737
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 753
          },
          "typeArguments": null,
          "start": 740,
          "end": 753
        },
        "start": 738,
        "end": 753
      },
      "body": null,
      "expression": false,
      "start": 692,
      "end": 754
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "threeOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 772,
        "end": 785
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 790,
              "end": 793
            },
            "start": 788,
            "end": 793
          },
          "start": 786,
          "end": 793
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 799,
              "end": 802
            },
            "start": 797,
            "end": 802
          },
          "start": 795,
          "end": 802
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            },
            "start": 806,
            "end": 811
          },
          "start": 804,
          "end": 811
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 827
          },
          "typeArguments": null,
          "start": 814,
          "end": 827
        },
        "start": 812,
        "end": 827
      },
      "body": null,
      "expression": false,
      "start": 755,
      "end": 828
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneOptionalWithRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 865
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 870,
              "end": 873
            },
            "start": 868,
            "end": 873
          },
          "start": 866,
          "end": 873
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 878,
            "end": 882
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 884,
                "end": 887
              },
              "start": 884,
              "end": 889
            },
            "start": 882,
            "end": 889
          },
          "value": null,
          "start": 875,
          "end": 889
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 905
          },
          "typeArguments": null,
          "start": 892,
          "end": 905
        },
        "start": 890,
        "end": 905
      },
      "body": null,
      "expression": false,
      "start": 829,
      "end": 906
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
            "name": "anyDec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 929,
                "end": 932
              },
              "start": 927,
              "end": 932
            },
            "start": 921,
            "end": 932
          },
          "init": null,
          "definite": false,
          "start": 921,
          "end": 932
        }
      ],
      "declare": true,
      "start": 907,
      "end": 933
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "noArgs",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 942
          },
          "start": 935,
          "end": 942
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 950
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 964
                },
                "start": 957,
                "end": 964
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 968
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 970,
                "end": 973
              },
              "start": 968,
              "end": 973
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 957,
            "end": 974
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 986
                },
                "start": 979,
                "end": 986
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 990
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
                "start": 993,
                "end": 996
              },
              "expression": false,
              "start": 990,
              "end": 996
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 979,
            "end": 996
          }
        ],
        "start": 951,
        "end": 998
      },
      "abstract": false,
      "declare": false,
      "start": 935,
      "end": 998
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "allRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1008
          },
          "start": 1000,
          "end": 1008
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1016
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1031
                },
                "start": 1023,
                "end": 1031
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1035
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1037,
                "end": 1040
              },
              "start": 1035,
              "end": 1040
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1023,
            "end": 1041
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1054
                },
                "start": 1046,
                "end": 1054
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1058
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
                "start": 1061,
                "end": 1064
              },
              "expression": false,
              "start": 1058,
              "end": 1064
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1046,
            "end": 1064
          }
        ],
        "start": 1017,
        "end": 1066
      },
      "abstract": false,
      "declare": false,
      "start": 1000,
      "end": 1066
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1080
          },
          "start": 1068,
          "end": 1080
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1087,
        "end": 1088
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1107
                },
                "start": 1095,
                "end": 1107
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1113,
                "end": 1116
              },
              "start": 1111,
              "end": 1116
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1095,
            "end": 1117
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1123,
                  "end": 1134
                },
                "start": 1122,
                "end": 1134
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1138
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
                "start": 1141,
                "end": 1144
              },
              "expression": false,
              "start": 1138,
              "end": 1144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1122,
            "end": 1144
          }
        ],
        "start": 1089,
        "end": 1146
      },
      "abstract": false,
      "declare": false,
      "start": 1068,
      "end": 1146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "twoOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1149,
            "end": 1160
          },
          "start": 1148,
          "end": 1160
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1167,
        "end": 1168
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1187
                },
                "start": 1175,
                "end": 1187
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1193,
                "end": 1196
              },
              "start": 1191,
              "end": 1196
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1175,
            "end": 1197
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1203,
                  "end": 1214
                },
                "start": 1202,
                "end": 1214
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1218
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
                "start": 1221,
                "end": 1224
              },
              "expression": false,
              "start": 1218,
              "end": 1224
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1202,
            "end": 1224
          }
        ],
        "start": 1169,
        "end": 1226
      },
      "abstract": false,
      "declare": false,
      "start": 1148,
      "end": 1226
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "threeOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1242
          },
          "start": 1228,
          "end": 1242
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1249,
        "end": 1250
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1271
                },
                "start": 1257,
                "end": 1271
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1275
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1277,
                "end": 1280
              },
              "start": 1275,
              "end": 1280
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1257,
            "end": 1281
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1300
                },
                "start": 1286,
                "end": 1300
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1304
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
                "start": 1307,
                "end": 1310
              },
              "expression": false,
              "start": 1304,
              "end": 1310
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1286,
            "end": 1310
          }
        ],
        "start": 1251,
        "end": 1312
      },
      "abstract": false,
      "declare": false,
      "start": 1228,
      "end": 1312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOptionalWithRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1334
          },
          "start": 1314,
          "end": 1334
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1342
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1369
                },
                "start": 1349,
                "end": 1369
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1370,
              "end": 1373
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1375,
                "end": 1378
              },
              "start": 1373,
              "end": 1378
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1349,
            "end": 1379
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1385,
                  "end": 1404
                },
                "start": 1384,
                "end": 1404
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1408
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
                "start": 1411,
                "end": 1414
              },
              "expression": false,
              "start": 1408,
              "end": 1414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1384,
            "end": 1414
          }
        ],
        "start": 1343,
        "end": 1416
      },
      "abstract": false,
      "declare": false,
      "start": 1314,
      "end": 1416
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyDec",
            "optional": false,
            "typeAnnotation": null,
            "start": 1419,
            "end": 1425
          },
          "start": 1418,
          "end": 1425
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1433
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1441,
                  "end": 1447
                },
                "start": 1440,
                "end": 1447
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1453,
                "end": 1456
              },
              "start": 1451,
              "end": 1456
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1440,
            "end": 1457
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1463,
                  "end": 1469
                },
                "start": 1462,
                "end": 1469
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1473
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
                "start": 1476,
                "end": 1479
              },
              "expression": false,
              "start": 1473,
              "end": 1479
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1462,
            "end": 1479
          }
        ],
        "start": 1434,
        "end": 1481
      },
      "abstract": false,
      "declare": false,
      "start": 1418,
      "end": 1481
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1483,
      "end": 1494
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 1494
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "bindingPropertyName",
    "start": 58,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
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
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "FooComponent",
    "start": 100,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 172,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "tracked",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator",
    "start": 195,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "watchedProperties",
    "start": 221,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 251,
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
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "tracked",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "MultiplyByTwo",
    "start": 309,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 329,
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
    "value": "any",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "tracked",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "String",
    "value": "'args'",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "multiplied",
    "start": 369,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 451,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "OmniDecorator",
    "start": 461,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 475,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "MethodDecorator",
    "start": 483,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator",
    "start": 500,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator",
    "start": 516,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 539,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 547,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "OmniDecorator",
    "start": 566,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 581,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 589,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "allRest",
    "start": 598,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 609,
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
    "value": "any",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "OmniDecorator",
    "start": 623,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 638,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 646,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "oneOptional",
    "start": 655,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "OmniDecorator",
    "start": 677,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 692,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 700,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "twoOptional",
    "start": 709,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "OmniDecorator",
    "start": 740,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 755,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 763,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "threeOptional",
    "start": 772,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 808,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "OmniDecorator",
    "start": 814,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 829,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 837,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "oneOptionalWithRest",
    "start": 846,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "OmniDecorator",
    "start": 892,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 907,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 915,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "anyDec",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 936,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 943,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 958,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 980,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 987,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "allRest",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1009,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "allRest",
    "start": 1024,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "allRest",
    "start": 1047,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "oneOptional",
    "start": 1069,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "@",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "oneOptional",
    "start": 1096,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1113,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "oneOptional",
    "start": 1123,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "twoOptional",
    "start": 1149,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "twoOptional",
    "start": 1176,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "twoOptional",
    "start": 1203,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "threeOptional",
    "start": 1229,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1243,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "threeOptional",
    "start": 1258,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "threeOptional",
    "start": 1287,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "oneOptionalWithRest",
    "start": 1315,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1335,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "oneOptionalWithRest",
    "start": 1350,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "oneOptionalWithRest",
    "start": 1385,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "anyDec",
    "start": 1419,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1426,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "anyDec",
    "start": 1441,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "anyDec",
    "start": 1463,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494
  }
]
```
