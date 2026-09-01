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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 31
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 48
          }
        ],
        "start": 12,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "typeArguments": null,
          "start": 79,
          "end": 80
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
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
            "start": 87,
            "end": 109
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ro",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public",
            "start": 114,
            "end": 150
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 180
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 184,
                  "end": 190
                },
                "start": 182,
                "end": 190
              },
              "body": null,
              "expression": false,
              "start": 180,
              "end": 191
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 191
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 210,
                  "end": 216
                },
                "start": 208,
                "end": 216
              },
              "body": null,
              "expression": false,
              "start": 206,
              "end": 217
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 196,
            "end": 217
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mismatch",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 243
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 247,
                  "end": 253
                },
                "start": 245,
                "end": 253
              },
              "body": null,
              "expression": false,
              "start": 243,
              "end": 254
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 254
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mismatch",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 280
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 286,
                      "end": 292
                    },
                    "start": 284,
                    "end": 292
                  },
                  "start": 281,
                  "end": 292
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 280,
              "end": 294
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 259,
            "end": 294
          }
        ],
        "start": 81,
        "end": 296
      },
      "abstract": true,
      "declare": false,
      "start": 51,
      "end": 296
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 304
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 314
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
              "name": "ro",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "readonly please",
              "raw": "\"readonly please\"",
              "start": 335,
              "end": 352
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 321,
            "end": 353
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notAllowed",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
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
            "start": 358,
            "end": 386
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concreteWithNoBody",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 413
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 417,
                  "end": 423
                },
                "start": 415,
                "end": 423
              },
              "body": null,
              "expression": false,
              "start": 413,
              "end": 424
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 391,
            "end": 424
          }
        ],
        "start": 315,
        "end": 426
      },
      "abstract": false,
      "declare": false,
      "start": 297,
      "end": 426
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 432
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            "typeArguments": null,
            "arguments": [],
            "start": 435,
            "end": 442
          },
          "definite": false,
          "start": 431,
          "end": 442
        }
      ],
      "declare": false,
      "start": 427,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 445
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ro",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 448
          },
          "optional": false,
          "computed": false,
          "start": 444,
          "end": 448
        },
        "right": {
          "type": "Literal",
          "value": "error: lhs of assignment can't be readonly",
          "raw": "\"error: lhs of assignment can't be readonly\"",
          "start": 451,
          "end": 495
        },
        "start": 444,
        "end": 495
      },
      "directive": null,
      "start": 444,
      "end": 496
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 530
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 549
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 551,
                "end": 557
              },
              "start": 549,
              "end": 557
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
            "start": 537,
            "end": 558
          }
        ],
        "start": 531,
        "end": 560
      },
      "abstract": true,
      "declare": false,
      "start": 498,
      "end": 560
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypePropertyImpl",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 588
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 614
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
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 624
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "nope, wrong",
              "raw": "\"nope, wrong\"",
              "start": 627,
              "end": 640
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 621,
            "end": 641
          }
        ],
        "start": 615,
        "end": 643
      },
      "abstract": false,
      "declare": false,
      "start": 561,
      "end": 643
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 676
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 699
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 703,
                  "end": 709
                },
                "start": 701,
                "end": 709
              },
              "body": null,
              "expression": false,
              "start": 699,
              "end": 710
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 683,
            "end": 710
          }
        ],
        "start": 677,
        "end": 712
      },
      "abstract": true,
      "declare": false,
      "start": 644,
      "end": 712
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessorImpl",
        "optional": false,
        "typeAnnotation": null,
        "start": 719,
        "end": 740
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 766
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
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 780
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
                      "type": "Literal",
                      "value": "nope, wrong",
                      "raw": "\"nope, wrong\"",
                      "start": 792,
                      "end": 805
                    },
                    "start": 785,
                    "end": 806
                  }
                ],
                "start": 783,
                "end": 808
              },
              "expression": false,
              "start": 780,
              "end": 808
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 773,
            "end": 808
          }
        ],
        "start": 767,
        "end": 810
      },
      "abstract": false,
      "declare": false,
      "start": 713,
      "end": 810
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessorImpl2",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 839
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 865
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
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 875
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "nope, wrong",
              "raw": "\"nope, wrong\"",
              "start": 878,
              "end": 891
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 872,
            "end": 892
          }
        ],
        "start": 866,
        "end": 894
      },
      "abstract": false,
      "declare": false,
      "start": 811,
      "end": 894
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractAccessorMismatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 935
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 957
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 961,
                  "end": 967
                },
                "start": 959,
                "end": 967
              },
              "body": null,
              "expression": false,
              "start": 957,
              "end": 968
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 942,
            "end": 968
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 979
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 985,
                      "end": 991
                    },
                    "start": 983,
                    "end": 991
                  },
                  "start": 980,
                  "end": 991
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 993,
                "end": 996
              },
              "expression": false,
              "start": 979,
              "end": 996
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 973,
            "end": 996
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1008
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
                  "type": "TSStringKeyword",
                  "start": 1012,
                  "end": 1018
                },
                "start": 1010,
                "end": 1018
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "should work",
                      "raw": "\"should work\"",
                      "start": 1028,
                      "end": 1041
                    },
                    "start": 1021,
                    "end": 1042
                  }
                ],
                "start": 1019,
                "end": 1044
              },
              "expression": false,
              "start": 1008,
              "end": 1044
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1002,
            "end": 1044
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1064
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1070,
                      "end": 1076
                    },
                    "start": 1068,
                    "end": 1076
                  },
                  "start": 1065,
                  "end": 1076
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1064,
              "end": 1078
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1049,
            "end": 1078
          }
        ],
        "start": 936,
        "end": 1080
      },
      "abstract": true,
      "declare": false,
      "start": 896,
      "end": 1080
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1080
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 51,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 68,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 87,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 114,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 130,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 155,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 168,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 196,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "mismatch",
    "start": 235,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 259,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "mismatch",
    "start": 272,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 297,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 305,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 321,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "String",
    "value": "\"readonly please\"",
    "start": 335,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 358,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "notAllowed",
    "start": 367,
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
    "value": "string",
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
    "value": "get",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "concreteWithNoBody",
    "start": 395,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "String",
    "value": "\"error: lhs of assignment can't be readonly\"",
    "start": 451,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 498,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 507,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "WrongTypeProperty",
    "start": 513,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 537,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 561,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "WrongTypePropertyImpl",
    "start": 567,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 589,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "WrongTypeProperty",
    "start": 597,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "String",
    "value": "\"nope, wrong\"",
    "start": 627,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 644,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 653,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "WrongTypeAccessor",
    "start": 659,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 683,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 713,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "WrongTypeAccessorImpl",
    "start": 719,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 741,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "WrongTypeAccessor",
    "start": 749,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 773,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 785,
    "end": 791
  },
  {
    "type": "String",
    "value": "\"nope, wrong\"",
    "start": 792,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 811,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "WrongTypeAccessorImpl2",
    "start": 817,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 840,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "WrongTypeAccessor",
    "start": 848,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "String",
    "value": "\"nope, wrong\"",
    "start": 878,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 896,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 905,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "AbstractAccessorMismatch",
    "start": 911,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 942,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 951,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 955,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 961,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 973,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 977,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 985,
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
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "String",
    "value": "\"should work\"",
    "start": 1028,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1049,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  }
]
```
